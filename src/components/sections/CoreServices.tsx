import Image, { type StaticImageData } from "next/image";
import laptops from "@/assets/images/handle-laptops.webp";
import boards from "@/assets/images/ops-boards.webp";
import workstations from "@/assets/images/itam-workstations.webp";
import hdd from "@/assets/images/service-hdd.webp";
import { EnquiryLink } from "@/components/ui/EnquiryLink";
import { serviceSlug, type ServiceName } from "@/lib/site";

type Card = {
  name: ServiceName;
  body: string;
  image: StaticImageData;
  alt: string;
  focus: string;
};

const cards: Card[] = [
  {
    name: "IT Asset Recovery",
    body: "Recovery and responsible disposal of retired IT assets.",
    image: laptops,
    alt: "Stack of closed silver laptops retired from a corporate fleet",
    focus: "object-[50%_50%]",
  },
  {
    name: "HDD Degaussing",
    body: "Secure and compliant data destruction for enterprises.",
    image: hdd,
    alt: "Opened hard disk drive showing the platter and actuator arm",
    focus: "object-[55%_40%]",
  },
  {
    name: "IT Office Demolition",
    body: "End-to-end IT infrastructure removal and decommissioning.",
    image: workstations,
    alt: "Corporate office floor with rows of workstations",
    focus: "object-[50%_55%]",
  },
  {
    name: "E-Waste Recycling",
    body: "Safe, compliant and environmentally responsible recycling.",
    image: boards,
    alt: "Printed circuit boards recovered from retired electronics",
    focus: "object-[50%_50%]",
  },
];

export function CoreServices() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[#faf8f3] font-display"
    >
      <div className="mx-auto w-full max-w-[95rem] px-5 sm:px-8 md:px-10 lg:w-[92%] lg:px-0 2xl:w-[90%] pt-14 pb-16 lg:pt-16 lg:pb-20 xl:pt-20 xl:pb-24">
        <p className="flex items-center gap-4 text-[0.75rem] font-bold tracking-[0.08em] text-[#172823] uppercase lg:text-[0.68rem]">
          <span aria-hidden="true" className="h-[2px] w-[1.85rem] bg-[#3d9f25]" />
          Our core services
        </p>
        <h2
          id="services-heading"
          className="mt-5 text-[clamp(1.85rem,1.2rem+2.2vw,3rem)] leading-[1.15] font-extrabold tracking-[-0.02em] text-[#0a6a22]"
        >
          Complete <span className="whitespace-nowrap">E-Waste</span>
          <br /> Solutions for Modern Businesses.
        </h2>

        <ul className="swipe-row relative mt-8 grid gap-4 sm:grid-cols-2 lg:mt-[1.9rem] lg:grid-cols-4 lg:gap-[1.05rem]">
          {cards.map((c) => (
            <li
              key={c.name}
              id={`service-${serviceSlug(c.name)}`}
              className="group flex scroll-mt-32 flex-col overflow-hidden rounded-[0.6rem] border border-[#e3e1da] bg-[#fdfcf9] shadow-[0_2px_10px_-6px_rgba(1,52,28,0.12)] transition-shadow duration-300 hover:shadow-[0_18px_36px_-20px_rgba(1,52,28,0.35)]"
            >
              <div className="relative aspect-[224/128] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 100vw"
                  className={`object-cover ${c.focus} transition-transform duration-700 group-hover:scale-[1.04]`}
                />
              </div>
              <div className="flex flex-1 flex-col px-[1.15rem] pt-[1.05rem] pb-[1.15rem]">
                <h3 className="text-[clamp(1rem,0.55rem+0.75vw,1.3rem)] font-extrabold tracking-[-0.015em] text-[#0a6a22]">
                  {c.name}
                </h3>
                <p className="mt-2 text-[clamp(0.8rem,0.55rem+0.4vw,0.95rem)] leading-[1.58] font-medium tracking-[-0.005em] text-[#172823]">
                  {c.body}
                </p>
                <EnquiryLink
                  service={c.name}
                  ariaLabel={`Explore service — ${c.name}`}
                  className="mt-auto inline-flex items-center gap-2.5 pt-5 text-[clamp(0.8rem,0.55rem+0.4vw,0.95rem)] font-bold text-[#0a5c1f] hover:text-[#03331e]"
                >
                  <span className="grid size-[1.45rem] place-items-center rounded-full bg-[#0a5c1f] text-white transition-transform group-hover:translate-x-0.5">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Explore Service
                </EnquiryLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
