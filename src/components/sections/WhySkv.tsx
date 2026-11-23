import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import leaf from "@/assets/images/why-leaf.webp";
import mark from "@/assets/images/why-mark.webp";
import visual from "@/assets/images/why-visual.webp";
import {
  CalendarCheckIcon,
  ClipboardCheckIcon,
  DocumentIcon,
  LeafIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { container } from "@/components/ui/Section";

type Reason = {
  title: string;
  body: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/** Reasons drawn from SKV's existing website copy, in the mockup's order. */
const reasons: Reason[] = [
  {
    title: "Planned Around Your Requirements",
    body: "Whether it's twenty laptops or a full IT floor, tell us your quantity and timeline. We'll propose a suitable collection plan.",
    Icon: CalendarCheckIcon,
  },
  {
    title: "Better for People & Environment",
    body: "Responsible dismantling and recycling help prevent hazardous components from entering landfills and informal scrap channels.",
    Icon: LeafIcon,
  },
  {
    title: "Secure Data Handling",
    body: "Choose suitable data sanitisation options, including software erasure, HDD degaussing or physical destruction.",
    Icon: ShieldIcon,
  },
  {
    title: "Easy Coordination",
    body: "One point of contact for scheduling, loading and transportation, with coordination from our operational locations.",
    Icon: UsersIcon,
  },
  {
    title: "Records for Your Files",
    body: "Ask our team about available collection records, handover documentation and recycling-related certificates.",
    Icon: DocumentIcon,
  },
  {
    title: "Transparent Process",
    body: "Get clear information about collection, processing and the responsible handling of your electronic waste.",
    Icon: ClipboardCheckIcon,
  },
];

/**
 * Why choose SKV, built to the client-supplied mockup. The section background
 * (#faf7f0) matches the mockup exactly, so the slanted photo with its green
 * bands, the faint recycling mark and the corner leaf (all cut from the
 * mockup) blend in without edges. Six reasons sit in a ruled 2 × 3 grid.
 */
export function WhySkv() {
  return (
    <section
      id="why-skv"
      aria-labelledby="why-heading"
      className="relative overflow-hidden bg-[#faf7f0] py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative corner leaf */}
      <Image
        src={leaf}
        alt=""
        aria-hidden="true"
        sizes="16rem"
        className="pointer-events-none absolute top-0 right-0 hidden h-auto w-[10rem] [mask-image:linear-gradient(to_right,transparent,black_35%),linear-gradient(to_top,transparent,black_30%)] [mask-composite:intersect] lg:block xl:w-[13rem]"
      />

      <div className={`${container} relative`}>
        {/* Faint recycling watermark */}
        <Image
          src={mark}
          alt=""
          aria-hidden="true"
          sizes="20rem"
          className="pointer-events-none absolute -top-12 right-[12%] hidden h-auto w-[17rem] [mask-image:radial-gradient(closest-side,black_80%,transparent)] xl:block"
        />

        <div className="relative max-w-[64rem]">
          <p className="flex items-center gap-4 font-[family-name:var(--font-hero)] text-[0.78rem] font-bold tracking-[0.04em] text-[#0f4a24] uppercase xl:text-[0.86rem]">
            <span aria-hidden="true" className="h-[2px] w-10 shrink-0 bg-[#3d9f25]" />
            Why choose SKV
          </p>
          <h2
            id="why-heading"
            className="mt-5 font-[family-name:var(--font-hero)] text-[clamp(2.1rem,1.1rem+3vw,3.85rem)] leading-[1.08] font-bold tracking-[-0.03em] text-[#0b3d1f]"
          >
            A recycling partner your
            <br className="hidden sm:block" /> compliance team can rely on.
          </h2>
          <p className="mt-5 max-w-[42rem] text-[clamp(1.02rem,0.95rem+0.35vw,1.3rem)] leading-[1.5] text-[#2f3b35]">
            Simple to work with, careful with your data and committed to
            environmental responsibility.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:mt-14 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-14">
          {/* Visual: photo, green bands and leaf come from the mockup */}
          <div className="relative mx-auto w-full max-w-[36rem] lg:max-w-[40rem] xl:-ml-[4%] xl:max-w-none">
            <Image
              src={visual}
              alt="SKV E-Waste staff in hard hats loading wrapped computer equipment into a collection truck"
              placeholder="blur"
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="h-auto w-full"
            />
          </div>

          {/* Reasons */}
          <ul className="swipe-row relative grid sm:grid-cols-2">
            {reasons.map((r, i) => {
              const right = i % 2 === 1;
              const lastRow = i >= reasons.length - 2;
              return (
                <Reveal
                  as="li"
                  key={r.title}
                  delay={(i % 2) * 80}
                  className={`flex gap-5 border-[#dfe3d6] py-7 max-md:flex-col max-md:gap-4 max-md:rounded-[1rem] max-md:border! max-md:bg-white max-md:p-5! ${
                    i === reasons.length - 1 ? "" : "border-b"
                  } ${lastRow ? "sm:border-b-0 sm:pb-0" : ""} ${i < 2 ? "sm:pt-0" : ""} ${
                    i === 0 ? "pt-0" : ""
                  } ${right ? "sm:border-l sm:pl-7 xl:pl-9" : "sm:pr-7 xl:pr-9"}`}
                >
                  <span
                    aria-hidden="true"
                    className="grid size-[4.2rem] shrink-0 place-items-center rounded-[1rem] bg-[#e5f3d7] text-[#1d5e33] xl:size-[4.8rem]"
                  >
                    <r.Icon className="size-8 xl:size-9" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-hero)] text-[1.12rem] leading-[1.25] font-bold tracking-[-0.01em] text-[#0b3d1f] xl:text-[1.28rem]">
                      {r.title}
                    </h3>
                    <p className="mt-2.5 text-[0.93rem] leading-[1.5] text-[#2f3b35] xl:text-[0.98rem]">
                      {r.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
