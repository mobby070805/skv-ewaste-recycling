import type { ComponentType, SVGProps } from "react";
import { DocumentIcon, PinIcon, RecycleIcon, ShieldIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { certifications, offices } from "@/lib/site";

/**
 * Every statement below is published on SKV's existing website:
 * - certification marks (home & about pages)
 * - TNPCB policies and "Authorised Collector & Bulk Consumer" (home & about)
 * - office addresses (footer)
 * - 10K+ projects and 15+ warehouses (about page)
 */
const items: {
  label: string;
  value: string;
  note: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    label: "Certifications",
    value: certifications.join(" · "),
    note: "Quality, environmental and responsible-recycling standards.",
    Icon: ShieldIcon,
  },
  {
    label: "Authorisation",
    value: "Authorised collector",
    note: "Authorised collector & bulk consumer of e-waste in Chennai, in line with TNPCB policies.",
    Icon: DocumentIcon,
  },
  {
    label: "Operating locations",
    value: `${offices.length} offices · 2 cities`,
    note: "Ambattur and TIDEL Park, Taramani in Chennai; Andheri West in Mumbai.",
    Icon: PinIcon,
  },
  {
    label: "Track record",
    value: "10K+ projects",
    note: "Completed projects, supported by a network of 15+ warehouses.",
    Icon: RecycleIcon,
  },
];

export function TrustStrip() {
  return (
    <section aria-label="Credentials and achievements" className="grain bg-forest-deep text-white">
      <div className="shell">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ label, value, note, Icon }, i) => (
            <Reveal
              as="li"
              key={label}
              delay={i * 90}
              className={`group py-9 sm:px-7 lg:py-12 ${
                i > 0 ? "border-t border-white/10 sm:border-t-0" : ""
              } ${i % 2 === 1 ? "sm:border-l" : "sm:pl-0"} ${
                i >= 2 ? "sm:border-t lg:border-t-0" : ""
              } ${i > 0 ? "border-white/10 lg:border-l lg:pl-8" : ""}`}
            >
              <div className="flex items-center justify-between">
                <p className="label text-lime/90">{label}</p>
                <Icon className="size-5 text-white/30 transition-colors duration-500 group-hover:text-lime" />
              </div>
              <p className="mt-5 font-display text-[1.4rem] leading-tight font-semibold tracking-[-0.02em] text-balance lg:text-[1.5rem]">
                {value}
              </p>
              <p className="mt-3 max-w-[30ch] text-[0.9rem] leading-relaxed text-white/60">
                {note}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
