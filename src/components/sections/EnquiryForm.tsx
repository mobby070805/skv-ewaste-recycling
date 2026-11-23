"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { SELECT_SERVICE_EVENT } from "@/components/ui/EnquiryLink";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { outlineBtn, primaryBtn } from "@/components/ui/Section";
import { serviceNames, site, whatsappHref } from "@/lib/site";

const serviceOptions = [...serviceNames, "Other / Not sure"];

const field =
  "mt-2 w-full rounded-md border border-[#d6d3c9] bg-white px-3.5 py-3 text-[0.98rem] text-[#172823] placeholder:text-[#8a948f] transition-colors focus:border-[#0a5c1f] focus:ring-2 focus:ring-[#0a5c1f]/15 focus:outline-none";
const labelCls = "block font-display text-[0.78rem] font-bold sm:text-[0.72rem] tracking-[0.06em] text-[#172823] uppercase";

function buildMessage(data: FormData) {
  const get = (k: string) => String(data.get(k) ?? "").trim();
  return [
    "Pickup / quote enquiry — skvewasterecycling.com",
    "",
    `Name: ${get("name")}`,
    `Company: ${get("company")}`,
    `Phone: ${get("phone")}`,
    `Email: ${get("email")}`,
    `Service required: ${get("service")}`,
    `Location: ${get("location")}`,
    "",
    "Requirements:",
    get("message") || "—",
  ].join("\n");
}

/**
 * The website has no mail server or CRM integration of its own, so submitting
 * hands the completed enquiry to the visitor's email app or WhatsApp,
 * addressed to SKV. Nothing is stored or transmitted by this website.
 */
export function EnquiryForm() {
  const [sent, setSent] = useState<null | "email" | "whatsapp">(null);
  const [service, setService] = useState<string>(serviceOptions[0]);
  const serviceRef = useRef<HTMLSelectElement | null>(null);

  // Pre-select a service when a service card's CTA is clicked.
  useEffect(() => {
    const onSelect = (e: Event) => {
      const value = (e as CustomEvent<string>).detail;
      if (serviceOptions.includes(value)) {
        setService(value);
        serviceRef.current?.animate(
          [{ backgroundColor: "rgba(61,159,37,0.18)" }, { backgroundColor: "transparent" }],
          { duration: 1400, easing: "ease-out" },
        );
      }
    };
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect);
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value === "whatsapp" ? "whatsapp" : "email";
    const data = new FormData(form);
    const message = buildMessage(data);

    if (channel === "whatsapp") {
      window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    } else {
      const company = String(data.get("company") ?? "").trim();
      const subject = `Pickup enquiry — ${String(data.get("service"))}${
        company ? ` — ${company}` : ""
      }`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(message)}`;
    }
    setSent(channel);
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-5 sm:gap-y-5">
      <div>
        <label htmlFor="enq-name" className={labelCls}>
          Full name <span aria-hidden="true">*</span>
        </label>
        <input id="enq-name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="enq-company" className={labelCls}>
          Company <span aria-hidden="true">*</span>
        </label>
        <input
          id="enq-company"
          name="company"
          required
          autoComplete="organization"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="enq-phone" className={labelCls}>
          Phone number <span aria-hidden="true">*</span>
        </label>
        <input
          id="enq-phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9+\s\-\(\)]{7,}"
          title="Please enter a valid phone number"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="enq-email" className={labelCls}>
          Work email <span aria-hidden="true">*</span>
        </label>
        <input
          id="enq-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label htmlFor="enq-service" className={labelCls}>
          Service required
        </label>
        <select
          ref={serviceRef}
          id="enq-service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={field}
        >
          {serviceOptions.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label htmlFor="enq-location" className={labelCls}>
          Location <span aria-hidden="true">*</span>
        </label>
        <input
          id="enq-location"
          name="location"
          required
          list="enq-locations"
          autoComplete="address-level2"
          placeholder="City / area"
          className={field}
        />
        <datalist id="enq-locations">
          <option value="Chennai" />
          <option value="Mumbai" />
        </datalist>
      </div>
      <div className="col-span-2">
        <label htmlFor="enq-message" className={labelCls}>
          Requirements
        </label>
        <textarea
          id="enq-message"
          name="message"
          rows={3}
          placeholder="Equipment types, approximate quantities, preferred dates…"
          className={`${field} resize-y`}
        />
      </div>

      <div className="col-span-2 mt-2 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          value="email"
          className={`${primaryBtn} sm:flex-1`}
        >
          Send Enquiry by Email
          <span aria-hidden="true">→</span>
        </button>
        <button
          type="submit"
          value="whatsapp"
          className={`${outlineBtn} px-5 sm:flex-1`}
        >
          <WhatsAppIcon className="size-4" />
          Send on WhatsApp
        </button>
      </div>

      <p role="status" aria-live="polite" className="text-[0.85rem] leading-relaxed text-[#5d6964] col-span-2">
        {sent === "email" &&
          `Your email app should now be open with the enquiry ready to send. If it did not open, write to ${site.email} or call ${site.phoneDisplay}.`}
        {sent === "whatsapp" &&
          `WhatsApp should now be open with the enquiry ready to send. If it did not open, call ${site.phoneDisplay}.`}
        {sent === null &&
          "Submitting opens your email app or WhatsApp with these details filled in, addressed to SKV. This website does not store your information."}
      </p>
    </form>
  );
}
