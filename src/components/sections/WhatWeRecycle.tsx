import type { ComponentType, SVGProps } from "react";
import { IconTile, type TileTone } from "@/components/ui/IconTile";
import {
  ChipIcon,
  LaptopIcon,
  PrinterIcon,
  RackIcon,
  RouterIcon,
  ServerIcon,
} from "@/components/ui/Icons";
import {
  Arrow,
  Eyebrow,
  Heading,
  Lede,
  bg,
  container,
  primaryBtn,
  sectionY,
} from "@/components/ui/Section";
import { enquiryHref } from "@/lib/site";

type Item = {
  title: string;
  body: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  tone: TileTone;
};

/** Equipment categories listed on SKV's existing website. */
const items: Item[] = [
  {
    title: "Computers & Laptops",
    body: "Desktops, laptops, monitors and workstations.",
    Icon: LaptopIcon,
    tone: "blue",
  },
  {
    title: "Servers & Storage",
    body: "Rack servers, storage arrays and hard drives.",
    Icon: ServerIcon,
    tone: "teal",
  },
  {
    title: "Networking Equipment",
    body: "Switches, routers, firewalls and access points.",
    Icon: RouterIcon,
    tone: "purple",
  },
  {
    title: "Printers & Peripherals",
    body: "Printers, copiers, scanners and accessories.",
    Icon: PrinterIcon,
    tone: "peach",
  },
  {
    title: "Circuit Boards & Components",
    body: "PCBs, cards, modules and loose components.",
    Icon: ChipIcon,
    tone: "green",
  },
  {
    title: "Racks & IT Infrastructure",
    body: "Racks, cabling, UPS and data-centre hardware.",
    Icon: RackIcon,
    tone: "yellow",
  },
];

export function WhatWeRecycle() {
  return (
    <section
      id="what-we-recycle"
      aria-labelledby="recycle-heading"
      className={`${bg.ivory} ${sectionY}`}
    >
      <div className={container}>
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div>
            <Eyebrow>What we recycle</Eyebrow>
            <Heading id="recycle-heading">
              From laptops to
              <br className="hidden sm:block" /> data-centre racks.
            </Heading>
            <Lede>
              Not sure if something qualifies? Send us a list of what you have
              and we’ll confirm what we can collect.
            </Lede>
          </div>
          <a href={enquiryHref} className={primaryBtn}>
            Share Your Equipment List <Arrow />
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {items.map((it) => (
            <li
              key={it.title}
              className="group flex flex-col rounded-[1rem] border border-[#ebe8e0] bg-white p-4 sm:p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#d9e7d2] hover:shadow-[0_24px_44px_-30px_rgba(1,52,28,0.4)] lg:p-7"
            >
              <IconTile Icon={it.Icon} tone={it.tone} />
              <div>
                <h3 className="mt-3.5 font-display text-[0.98rem] leading-snug sm:mt-6 sm:text-[1.12rem] font-bold tracking-[-0.01em] text-[#14231d] xl:text-[1.2rem]">
                  {it.title}
                </h3>
                <p className="mt-1.5 text-[0.82rem] leading-[1.5] text-[#4a5751] sm:mt-2 sm:text-[0.94rem] sm:leading-[1.6]">
                  {it.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
