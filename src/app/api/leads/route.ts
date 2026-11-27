/**
 * Records each enquiry-form submission as a row in SKV's Google Sheet, via
 * the Apps Script web app in google-apps-script/leads.gs. The script URL and
 * shared secret live only in server environment variables:
 *   LEADS_WEBHOOK_URL     the Apps Script deployment's /exec URL
 *   LEADS_WEBHOOK_SECRET  the same value as SECRET in leads.gs
 * Without them this returns 503 and the form still opens email/WhatsApp.
 */

const LIMITS = {
  name: 120,
  company: 160,
  phone: 40,
  email: 160,
  service: 80,
  location: 120,
  message: 2000,
} as const;
type Field = keyof typeof LIMITS;
const REQUIRED: Field[] = ["name", "company", "phone", "email", "location"];

/* Simple per-IP limit: at most 5 submissions per 10 minutes per server instance. */
const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

const json = (body: object, status = 200) => Response.json(body, { status });

export async function POST(request: Request) {
  const url = process.env.LEADS_WEBHOOK_URL;
  const secret = process.env.LEADS_WEBHOOK_SECRET;
  if (!url || !secret) return json({ ok: false, error: "Lead tracking is not configured" }, 503);

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "Invalid request" }, 400);
  }

  // Honeypot: real visitors never see or fill the "website" field.
  if (typeof body.website === "string" && body.website.trim() !== "") return json({ ok: true });

  const lead = {} as Record<Field, string>;
  for (const key of Object.keys(LIMITS) as Field[]) {
    const value = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    lead[key] = value.slice(0, LIMITS[key]);
  }
  if (REQUIRED.some((k) => !lead[k])) return json({ ok: false, error: "Missing required fields" }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return json({ ok: false, error: "Invalid email" }, 400);
  if (!/^[0-9+\s\-()]{7,}$/.test(lead.phone)) return json({ ok: false, error: "Invalid phone" }, 400);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return json({ ok: false, error: "Too many requests" }, 429);

  const referer = request.headers.get("referer") ?? "";
  const payload = {
    secret,
    lead: {
      ...lead,
      channel: body.channel === "whatsapp" ? "WhatsApp" : "Email",
      page: referer.slice(0, 200),
    },
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    const out = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!out?.ok) {
      console.error("[leads] sheet rejected the lead:", res.status, out?.error ?? "no JSON reply");
      return json({ ok: false, error: "Could not record lead" }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error("[leads] sheet request failed:", err);
    return json({ ok: false, error: "Could not record lead" }, 502);
  }
}
