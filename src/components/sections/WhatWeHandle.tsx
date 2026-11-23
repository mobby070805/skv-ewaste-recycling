import Image, { type StaticImageData } from "next/image";
import batteries from "@/assets/images/handle-batteries.webp";
import components from "@/assets/images/handle-components.webp";
import computers from "@/assets/images/handle-computers.webp";
import infrastructure from "@/assets/images/handle-infrastructure.webp";
import laptops from "@/assets/images/handle-laptops.webp";
import network from "@/assets/images/handle-network.webp";
import printers from "@/assets/images/handle-printers.webp";
import servers from "@/assets/images/handle-servers.webp";
import boards from "@/assets/images/ops-boards.webp";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

type Category = {
  title: string;
  note: string;
  image: StaticImageData;
  alt: string;
  className?: string;
  sizes: string;
};

const small = "(min-width: 1024px) 22vw, 46vw";

const categories: Category[] = [
  {
    title: "Laptops",
    note: "Corporate fleets and end-of-lease notebooks",
    image: laptops,
    alt: "Tall stack of closed silver laptops",
    className: "col-span-2 lg:row-span-2 aspect-[16/11] sm:aspect-[16/10] lg:aspect-auto",
    sizes: "(min-width: 1024px) 46vw, 92vw",
  },
  {
    title: "Computers",
    note: "Desktops, CPUs, monitors, keyboards and peripherals",
    image: computers,
    alt: "Row of retired desktop computers and CRT monitors",
    sizes: small,
  },
  {
    title: "Servers",
    note: "Rack servers, storage arrays and chassis",
    image: servers,
    alt: "Server rack with network patch cabling",
    sizes: small,
  },
  {
    title: "Circuit Boards",
    note: "Motherboards, PCBs and expansion cards",
    image: boards,
    alt: "Top-down view of printed circuit boards recovered from electronics",
    sizes: small,
  },
  {
    title: "Electronic Components",
    note: "Graphics cards, drives, power supplies and parts",
    image: components,
    alt: "Pile of discarded graphics cards and motherboards",
    sizes: small,
  },
  {
    title: "Batteries",
    note: "Where applicable — confirm types at enquiry",
    image: batteries,
    alt: "Assorted used batteries collected for recycling",
    sizes: small,
  },
  {
    title: "Printers",
    note: "Printers, copiers and multifunction devices",
    image: printers,
    alt: "Office multifunction laser printer",
    sizes: small,
  },
  {
    title: "Networking Equipment",
    note: "Switches, routers, firewalls and cabling",
    image: network,
    alt: "Ethernet cables connected to the ports of a network switch",
    sizes: small,
  },
  {
    title: "IT Infrastructure",
    note: "Racks, cabling, UPS and data-room fit-outs",
    image: infrastructure,
    alt: "Dense network cabling inside an equipment rack",
    sizes: small,
  },
];

export function WhatWeHandle() {
  return (
    <section id="what-we-handle" aria-labelledby="handle-heading" className="section-y bg-white">
      <div className="shell">
        <SectionIntro
          id="handle-heading"
          eyebrow="What we handle"
          index="03"
          title={
            <>
              Electronic Waste We Collect,{" "}
              <span className="accent">Process and Recycle.</span>
            </>
          }
        >
          <p>
            From a single floor of workstations to an entire data room, we
            take back the full range of end-of-life IT and electronic
            equipment that businesses generate.
          </p>
        </SectionIntro>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-16 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal
              as="li"
              key={c.title}
              delay={(i % 4) * 90}
              className={`curtain group relative isolate overflow-hidden bg-charcoal ${
                c.className ?? "aspect-square sm:aspect-[4/3] lg:aspect-[5/4]"
              }`}
            >
              <Image
                src={c.image}
                alt={c.alt}
                fill
                placeholder="blur"
                sizes={c.sizes}
                className="-z-10 object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-charcoal/90 via-charcoal/25 to-transparent transition-opacity duration-700 group-hover:opacity-100 sm:opacity-90" />
              <div className="absolute inset-x-0 top-0 -z-10 h-20 bg-linear-to-b from-charcoal/50 to-transparent" />
              <span className="absolute top-3 left-3 font-display text-[0.7rem] font-semibold tracking-[0.14em] text-white/70 tabular-nums sm:top-4 sm:left-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-3.5 text-white sm:p-5 lg:p-6">
                <span
                  aria-hidden="true"
                  className="mb-3 block h-[2px] w-6 bg-lime transition-[width] duration-500 group-hover:w-12"
                />
                <h3 className="font-display text-[0.95rem] leading-tight font-semibold tracking-[-0.01em] sm:text-[1.1rem] lg:text-[1.15rem]">
                  {c.title}
                </h3>
                <p className="mt-1.5 hidden max-w-[34ch] text-[0.84rem] leading-snug text-white/70 sm:block">
                  {c.note}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
