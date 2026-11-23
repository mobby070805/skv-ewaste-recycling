import Image from "next/image";
import hddDark from "@/assets/images/data-hdd-dark.webp";
import hddOpen from "@/assets/images/data-hdd-open.webp";
import { ButtonLink } from "@/components/ui/Button";
import { EnquiryLink } from "@/components/ui/EnquiryLink";
import { DocumentIcon, ShieldIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollScene } from "@/components/ui/ScrollScene";
import { Eyebrow } from "@/components/ui/SectionIntro";

/** Methods and documentation as described on SKV's data destruction pages. */
const methods = [
  {
    title: "HDD & drive degaussing",
    body: "High-powered degaussing equipment erases data from hard drives and magnetic storage media, preventing any chance of recovery.",
  },
  {
    title: "Certified data erasure",
    body: "Blancco and Stellar erasure tools wipe HDDs, SSDs, laptops and servers that are intended for reuse or resale.",
  },
  {
    title: "Physical drive destruction",
    body: "Hard drives, SSDs and other storage media are physically destroyed by shredding or crushing.",
  },
  {
    title: "Data sanitization",
    body: "Approved methods are combined to suit the media type and its next use, so sensitive information cannot be recovered.",
  },
];

const chain = [
  "Asset verification",
  "Secure handling",
  "Degaussing, erasure or destruction",
  "Audit-ready documentation",
];

export function DataSecurity() {
  return (
    <section
      id="data-security"
      aria-labelledby="data-heading"
      className="grain bg-charcoal text-white"
    >
      {/* Banner */}
      <ScrollScene className="relative isolate flex min-h-[78svh] flex-col justify-end overflow-hidden lg:min-h-[92svh]">
        <div className="scene-media absolute inset-0 -z-10 overflow-hidden">
          <Image
            src={hddDark}
            alt="Hard disk drive platter and read arm photographed in low light"
            fill
            placeholder="blur"
            sizes="100vw"
            className="scene-img object-cover object-[65%_center]"
          />
          <div className="absolute inset-0 bg-charcoal/30" />
          <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/55 to-charcoal/10" />
        </div>
        <div className="shell pt-32 pb-14 lg:pb-20">
          <Reveal className="max-w-[50rem]">
            <Eyebrow index="06" tone="dark">
              <span className="flex items-center gap-2">
                <ShieldIcon className="size-4 text-lime" /> Data security
              </span>
            </Eyebrow>
            <h2
              id="data-heading"
              className="display mt-7 text-[clamp(2.3rem,1rem+4.8vw,5.25rem)]"
            >
              Your Data Deserves{" "}
              <span className="accent">a Secure End of Life.</span>
            </h2>
            <p className="lede mt-7 max-w-[38rem] text-white/80">
              Retired drives, laptops and servers can still hold customer,
              employee and financial data. SKV provides HDD degaussing,
              certified data erasure and physical drive destruction, so
              information is permanently removed before equipment is reused
              or recycled.
            </p>
          </Reveal>
        </div>
      </ScrollScene>

      {/* Methods + documentation */}
      <div className="shell pb-20 lg:pb-32">
        <div className="grid gap-12 border-t border-white/15 pt-12 lg:grid-cols-12 lg:gap-10 lg:pt-16">
          <div className="lg:col-span-7">
            <ol className="grid gap-x-10 sm:grid-cols-2">
              {methods.map((m, i) => (
                <Reveal
                  as="li"
                  key={m.title}
                  delay={(i % 2) * 100}
                  className="border-b border-white/12 py-6 sm:py-7"
                >
                  <span className="label text-lime/80 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-[1.15rem] font-semibold tracking-tight">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[0.94rem] leading-relaxed text-white/65">
                    {m.body}
                  </p>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 lg:mt-12">
              <ButtonLink href="/#service-hdd-degaussing" variant="lime">
                Explore Data Destruction Services
              </ButtonLink>
              <EnquiryLink
                service="HDD Degaussing"
                className="text-[0.95rem] text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
              >
                Or request a data destruction quote
              </EnquiryLink>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="bg-forest-deep">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={hddOpen}
                  alt="Opened hard disk drive showing the platter and spindle"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 lg:p-9">
                <p className="label flex items-center gap-3 text-lime">
                  <DocumentIcon className="size-5" />
                  Documentation
                </p>
                <p className="mt-4 leading-relaxed text-white/80">
                  Blancco erasure produces a detailed report, certificate and
                  audit trail for every erased device — records your IT,
                  security and audit teams can file.
                </p>
                <ol className="mt-6 space-y-0 border-t border-white/12">
                  {chain.map((c, i) => (
                    <li
                      key={c}
                      className="flex items-center gap-4 border-b border-white/12 py-3 text-[0.94rem] text-white/85"
                    >
                      <span className="font-display text-[0.75rem] font-semibold text-lime tabular-nums">
                        {i + 1}
                      </span>
                      {c}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
