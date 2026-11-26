import Image, { type StaticImageData } from "next/image";
import recycling from "@/assets/images/hero-ewaste-scrap.webp";
import workstations from "@/assets/images/itam-workstations.webp";
import serverTech from "@/assets/images/itam-server-tech.webp";
import office from "@/assets/images/service-office.webp";
import hdd from "@/assets/images/service-hdd.webp";
import blancco from "@/assets/images/svc-blancco.webp";
import buyback from "@/assets/images/svc-buyback.webp";
import sanitisation from "@/assets/images/svc-sanitization.webp";
import { Arrow } from "@/components/ui/Button";
import { EnquiryLink } from "@/components/ui/EnquiryLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { serviceSlug, type ServiceName } from "@/lib/site";

type Service = {
  name: ServiceName;
  tag: string;
  body: string;
  cta: string;
  image: StaticImageData;
  alt: string;
};

/** Descriptions follow SKV's published service pages. */
const services: Service[] = [
  {
    name: "E-Waste Recycling",
    tag: "Recycling",
    body: "Responsible recycling of computers, laptops, servers and electronic accessories — collected, segregated and recycled in line with government regulations.",
    cta: "Request a Pickup",
    image: recycling,
    alt: "Container of retired monitors, computers and printers collected for recycling",
  },
  {
    name: "IT Office Demolition",
    tag: "Decommissioning",
    body: "Safe, professional dismantling for corporate offices, IT parks and commercial workspaces — interiors, partitions, ceilings, cabling and flooring removed, with eco-friendly disposal of the waste.",
    cta: "Plan an Office Clearance",
    image: office,
    alt: "Open-plan corporate office with glass partitions ready for decommissioning",
  },
  {
    name: "HDD Degaussing",
    tag: "Data security",
    body: "Powerful degaussing equipment applies a high-strength magnetic field to hard disk drives and magnetic media, making stored data unrecoverable.",
    cta: "Enquire About Degaussing",
    image: hdd,
    alt: "Close-up of an opened hard disk drive platter and actuator arm",
  },
  {
    name: "Blancco Data Erasing",
    tag: "Data security",
    body: "Certified Blancco erasure software for hard drives, SSDs, laptops and servers, with detailed reports, certificates and audit trails for every erased device.",
    cta: "Request Data Erasure",
    image: blancco,
    alt: "Laptop displaying a command-line screen during a data erasure process",
  },
  {
    name: "Data Sanitisation",
    tag: "Data security",
    body: "Permanent removal of sensitive information from storage devices using approved methods — data wiping, degaussing or physical drive destruction.",
    cta: "Discuss Data Sanitisation",
    image: sanitisation,
    alt: "Technician removing a solid-state drive from an opened laptop",
  },
  {
    name: "IT Asset Recovery",
    tag: "Asset value",
    body: "Recover value from obsolete IT equipment through collection, evaluation, refurbishment, resale or recycling — with data security throughout.",
    cta: "Get an Asset Valuation",
    image: workstations,
    alt: "Rows of desktop workstations on a corporate office floor",
  },
  {
    name: "Desktop & Laptop Buyback",
    tag: "Asset value",
    body: "Turn unused or outdated desktops and laptops into value, with fair valuation, secure data erasure and responsible reuse or recycling.",
    cta: "Get a Buyback Quote",
    image: buyback,
    alt: "Technician inspecting the internals of a laptop for evaluation",
  },
  {
    name: "Infrastructure Disposal",
    tag: "Decommissioning",
    body: "Secure decommissioning, removal and disposal of servers, networking devices, racks and cables, followed by responsible recycling.",
    cta: "Plan a Decommission",
    image: serverTech,
    alt: "Technician removing components from a server chassis",
  },
];

function ServiceCard({
  service,
  index,
  featured,
}: {
  service: Service;
  index: number;
  featured?: boolean;
}) {
  const id = `service-${serviceSlug(service.name)}`;
  return (
    <article
      id={id}
      className="group relative flex h-full flex-col bg-white outline outline-1 -outline-offset-1 outline-forest/8 transition-[box-shadow,outline-color] duration-500 hover:shadow-[0_32px_64px_-36px_rgba(21,61,48,0.55)] hover:outline-forest/15"
    >
      <Reveal
        delay={featured ? index * 120 : (index % 3) * 100}
        className={`curtain relative overflow-hidden bg-charcoal ${
          featured ? "aspect-[16/9] sm:aspect-[16/10]" : "aspect-[16/9] sm:aspect-[3/2]"
        }`}
      >
        <Image
          src={service.image}
          alt={service.alt}
          fill
          placeholder="blur"
          sizes={
            featured
              ? "(min-width: 1024px) 44vw, (min-width: 640px) 92vw, 100vw"
              : "(min-width: 1024px) 29vw, (min-width: 640px) 46vw, 100vw"
          }
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-700 group-hover:bg-charcoal/15" />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-5">
          <span className="bg-paper/95 px-2.5 py-1.5 font-display text-[0.72rem] font-semibold text-forest tabular-nums backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="label bg-charcoal/55 px-2.5 py-1.5 text-[0.62rem] text-white backdrop-blur-sm">
            {service.tag}
          </span>
        </div>
      </Reveal>
      <span
        aria-hidden="true"
        className="block h-[2px] w-12 bg-lime transition-[width] duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:w-full"
      />
      <div className={`flex flex-1 flex-col ${featured ? "p-7 lg:p-10" : "p-6 lg:p-8"}`}>
        <h3
          className={`font-display font-semibold tracking-[-0.02em] text-forest ${
            featured ? "text-[1.55rem] lg:text-[1.9rem]" : "text-[1.22rem] lg:text-[1.3rem]"
          }`}
        >
          {service.name}
        </h3>
        <p
          className={`mt-3 leading-relaxed text-muted ${
            featured ? "max-w-[46ch] text-[1rem]" : "text-[0.94rem]"
          }`}
        >
          {service.body}
        </p>
        <div className="mt-auto pt-7">
        <EnquiryLink
          service={service.name}
          ariaLabel={`${service.cta} — ${service.name}`}
          className="group/btn flex items-center justify-between gap-4 border-t border-line pt-5 font-display text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-forest"
        >
          <span>{service.cta}</span>
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-forest/20 transition-colors duration-500 group-hover/btn:border-forest group-hover/btn:bg-forest group-hover/btn:text-white">
            <Arrow className="size-3.5 group-hover/btn:translate-x-0.5" />
          </span>
        </EnquiryLink>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  const [first, second, ...rest] = services;
  return (
    <section id="services" aria-labelledby="services-heading" className="section-y bg-paper">
      <div className="shell">
        <SectionIntro
          id="services-heading"
          eyebrow="Our services"
          index="04"
          title={
            <>
              Corporate <span className="whitespace-nowrap">E-Waste</span> and IT
              Asset Disposal <span className="accent">Services.</span>
            </>
          }
        >
          <p>
            One partner for collection, recycling, data destruction and the
            recovery of value from retired technology — planned around how
            your business operates.
          </p>
        </SectionIntro>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6">
          <ServiceCard service={first} index={0} featured />
          <ServiceCard service={second} index={1} featured />
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-6">
          {rest.map((s, i) => (
            <ServiceCard key={s.name} service={s} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
