import Image from "next/image";
import rack from "@/assets/images/cta-rack.webp";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Eyebrow, container } from "@/components/ui/Section";
import { site, whatsappHref } from "@/lib/site";

const contacts = [
  { label: "Call", value: site.phoneDisplay, href: site.phoneHref, Icon: PhoneIcon, external: false },
  { label: "WhatsApp", value: site.phoneDisplay, href: whatsappHref(), Icon: WhatsAppIcon, external: true },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: MailIcon, external: false },
];

export function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[#01341c] text-white"
    >
      <Image src={rack} alt="" fill placeholder="blur" sizes="100vw" className="-z-10 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#01341c]/90" />

      <div className={`${container} grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-24 xl:gap-24`}>
        <div className="lg:pt-4">
          <Eyebrow dark>Request a pickup</Eyebrow>
          <h2
            id="contact-heading"
            className="mt-5 font-display text-[clamp(1.85rem,1.2rem+2.2vw,3rem)] leading-[1.13] font-extrabold tracking-[-0.02em] text-balance"
          >
            Tell us what you have. We’ll handle the rest.
          </h2>
          <p className="mt-5 max-w-[30rem] text-[clamp(1rem,0.93rem+0.3vw,1.14rem)] leading-[1.68] text-white/80">
            Share equipment types, rough quantities and your location, and
            we’ll come back with a collection plan and quote.
          </p>

          <ul className="mt-10 border-t border-white/15">
            {contacts.map(({ label, value, href, Icon, external }) => (
              <li key={label} className="border-b border-white/15">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 py-4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-[#8fd36f] transition-colors group-hover:bg-white group-hover:text-[#01341c]">
                    <Icon className="size-[1.1rem]" />
                  </span>
                  <span>
                    <span className="block font-display text-[0.7rem] font-bold tracking-[0.08em] text-white/60 uppercase">
                      {label}
                    </span>
                    <span className="block font-display text-[1rem] font-bold">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div id="enquiry" className="scroll-mt-28 rounded-[0.6rem] bg-[#faf8f3] p-6 text-[#172823] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] sm:p-9 lg:p-11">
          <h3 className="font-display text-[1.35rem] font-extrabold tracking-[-0.015em] text-[#0a6a22] lg:text-[1.55rem]">
            Enquiry form
          </h3>
          <p className="mt-2 mb-8 text-[0.95rem] leading-[1.6] text-[#4a5751]">
            Fields marked * are required.
          </p>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
