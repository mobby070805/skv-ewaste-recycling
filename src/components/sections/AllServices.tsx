import Image from "next/image";
import truck from "@/assets/images/pickup-truck.webp";
import { EnquiryLink } from "@/components/ui/EnquiryLink";
import {
  Arrow,
  Eyebrow,
  Heading,
  Lede,
  bg,
  container,
  lightBtn,
  sectionY,
} from "@/components/ui/Section";
import { enquiryHref, serviceSlug, type ServiceName } from "@/lib/site";

/** Service descriptions follow SKV's existing service pages. */
const services: { name: ServiceName; body: string }[] = [
  {
    name: "Blancco Data Erasing",
    body: "Certified erasure that leaves devices ready for reuse, with a report and certificate for each one.",
  },
  {
    name: "Data Sanitization",
    body: "The right method for every storage device, chosen by whether it will be reused, resold or recycled.",
  },
  {
    name: "Desktop & Laptop Buyback",
    body: "Turn unused or outdated systems into value. Every device is wiped before resale.",
  },
  {
    name: "Infrastructure Disposal",
    body: "Racks, UPS units, networking gear and cabling, removed and disposed of properly.",
  },
];

export function AllServices() {
  return (
    <section
      id="all-services"
      aria-labelledby="all-services-heading"
      className={`${bg.forest} ${sectionY}`}
    >
      <div
        className={`${container} grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24`}
      >
        <div className="flex flex-col">
          <Eyebrow dark>Specialist services</Eyebrow>
          <Heading id="all-services-heading" dark>
            When you need more than a pickup.
          </Heading>
          <Lede dark>
            Erasure you can certify, value from old systems and clean removal of
            heavy infrastructure.
          </Lede>
          <div className="relative mt-9 hidden min-h-[18rem] flex-1 overflow-hidden rounded-[1rem] bg-white lg:block">
            <Image
              src={truck}
              alt="Two collection staff loading old computers, monitors and printers into an e-waste pickup truck"
              fill
              placeholder="blur"
              sizes="38vw"
              className="object-contain p-5 xl:p-7"
            />
          </div>
        </div>

        {/* Services list, with the CTA level with the bottom of the photo */}
        <div className="flex min-w-0 flex-col">
          <ol className="swipe-row relative border-t border-white/15 max-md:border-t-0">
            {services.map((s, i) => (
              <li
                key={s.name}
                id={`service-${serviceSlug(s.name)}`}
                className="group grid scroll-mt-32 grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-x-4 border-b border-white/15 py-6 max-md:flex max-md:flex-col max-md:items-start max-md:gap-2 max-md:rounded-[1rem] max-md:border max-md:border-white/12 max-md:bg-white/[0.04] max-md:p-5 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-x-6 lg:py-7"
              >
                <span className="self-start pt-1 font-display text-[0.85rem] font-bold text-[#8fd36f] tabular-nums sm:self-center sm:pt-0 sm:text-[0.95rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[1.18rem] font-extrabold tracking-[-0.01em] text-white xl:text-[1.35rem]">
                    {s.name}
                  </h3>
                  <p className="mt-1.5 max-w-[34rem] text-[0.95rem] leading-[1.6] text-white/75">
                    {s.body}
                  </p>
                </div>
                <EnquiryLink
                  service={s.name}
                  ariaLabel={`Enquire about ${s.name}`}
                  className="inline-flex items-center font-display text-white"
                >
                  <span className="grid size-10 place-items-center rounded-full border-[1.5px] border-white/40 transition-colors group-hover:border-white group-hover:bg-white group-hover:text-[#01341c]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="size-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="sr-only">Enquire</span>
                </EnquiryLink>
              </li>
            ))}
          </ol>
          <div className="mt-10 lg:mt-auto lg:pt-10">
            <a href={enquiryHref} className={`w-full sm:w-auto ${lightBtn}`}>
              Discuss Your Requirement <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
