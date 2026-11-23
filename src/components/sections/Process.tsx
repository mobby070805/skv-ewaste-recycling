import type { ComponentType, SVGProps } from "react";
import Image, { type StaticImageData } from "next/image";
import step1 from "@/assets/images/process-step-1.webp";
import step2 from "@/assets/images/process-step-2.webp";
import step3 from "@/assets/images/process-step-3.webp";
import step4 from "@/assets/images/process-step-4.webp";
import { CogIcon, LayersIcon, RecycleIcon, TruckIcon } from "@/components/ui/Icons";
import { container } from "@/components/ui/Section";

type Step = {
  title: string;
  body: string;
  image: StaticImageData;
  alt: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const steps: Step[] = [
  {
    title: "Collection",
    body: "We pick up from one office or many and transport everything securely.",
    image: step1,
    alt: "Wrapped pallets of retired IT equipment beside an e-waste collection truck",
    Icon: TruckIcon,
  },
  {
    title: "Dismantling",
    body: "Devices are taken apart and hazardous parts are isolated for safe treatment.",
    image: step2,
    alt: "Gloved technician unscrewing parts from an opened laptop",
    Icon: CogIcon,
  },
  {
    title: "Segregation",
    body: "Boards, metals, plastics and storage media are sorted into their own streams.",
    image: step3,
    alt: "Labelled bins of circuit boards, metals, plastics and storage media",
    Icon: LayersIcon,
  },
  {
    title: "Recycling & Recovery",
    body: "Reusable parts and materials go back into use; the rest is recycled safely.",
    image: step4,
    alt: "Recovered copper wire and aluminium ready for reuse",
    Icon: RecycleIcon,
  },
];

/* Cards lean right on desktop: the card is skewed, its contents counter-skewed. */
const skew = "lg:-skew-x-[9deg]";
const unskew = "lg:skew-x-[9deg]";

function LeafMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="size-12 shrink-0">
      <path
        d="M41 7C24 7 9 13 9 29c0 5 2 9 5 12 1-9 8-18 17-23-7 6-12 13-14 23 3 1 6 2 9 2 15 0 18-17 15-36Z"
        fill="#3d9f25"
      />
      <path d="M17 41c2-10 7-17 14-23" stroke="#e9f5e1" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="m24 29 4 3 7-9" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Recycling process, built to the client-supplied mockup: four slanted cards
 * (photo above a deep-green panel), numbered tabs on the top-left corners,
 * green arrow buttons on the seams, and a faint recycling mark behind the
 * header. Cards stand upright and stack on tablets and phones.
 */
export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="relative overflow-hidden bg-[#f3f1ea] py-16 sm:py-20 lg:py-24">
      <div className={`${container} relative`}>
        {/* Faint watermark */}
        <RecycleIcon
          aria-hidden="true"
          strokeWidth={2.4}
          className="pointer-events-none absolute -top-10 left-[52%] hidden size-[17rem] -translate-x-1/2 text-[#3d9f25]/[0.07] lg:block xl:size-[19rem]"
        />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="flex items-center gap-4 font-display text-[0.78rem] font-bold tracking-[0.06em] text-[#1f6b2a] uppercase xl:text-[0.84rem]">
              <span aria-hidden="true" className="h-[2px] w-9 shrink-0 bg-[#3d9f25]" />
              Our recycling process
            </p>
            <h2
              id="process-heading"
              className="mt-5 font-display text-[clamp(2.1rem,1.3rem+2.7vw,3.7rem)] leading-[1.04] font-extrabold tracking-[-0.025em] text-[#0f3b1d]"
            >
              From your door to
              <br /> recovered material.
            </h2>
            <p className="mt-4 text-[clamp(1.02rem,0.95rem+0.35vw,1.25rem)] text-[#3a4842]">
              Here’s what happens to every item we take away.
            </p>
          </div>

          <div className="flex items-center gap-5 lg:pr-4">
            <LeafMark />
            <span aria-hidden="true" className="h-16 w-px bg-[#0f3b1d]/25" />
            <p className="max-w-[16rem] text-[1.1rem] leading-[1.3] text-[#1d2e27] lg:max-w-[14.5rem] lg:text-[1.25rem] xl:max-w-[16rem] xl:text-[1.4rem]">
              A responsible, end{"\u2011"}to{"\u2011"}end e{"\u2011"}waste recycling process.
            </p>
          </div>
        </div>

        <ol className="swipe-row relative mt-12 grid gap-10 max-md:pt-3 sm:grid-cols-2 sm:gap-x-6 lg:mt-14 lg:grid-cols-4 lg:gap-x-5 lg:px-6 xl:gap-x-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className={`${skew} flex h-full flex-col overflow-hidden rounded-[1.4rem] shadow-[0_28px_50px_-34px_rgba(15,59,29,0.6)]`}>
                {/* Photo */}
                <div className="relative h-[14rem] overflow-hidden sm:h-[15rem] xl:h-[17rem]">
                  <div className={`${unskew} absolute inset-0 lg:-inset-x-[8%]`}>
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text panel */}
                <div className="flex-1 bg-[#0d4a24] px-7 pt-6 pb-8 text-white xl:px-8">
                  <div className={unskew}>
                    <div className="flex items-center gap-4">
                      <s.Icon className="size-9 shrink-0 text-white" strokeWidth={1.4} />
                      <span aria-hidden="true" className="h-px w-24 bg-[#5bbd3c]/70" />
                    </div>
                    <h3 className="mt-4 font-display text-[1.35rem] leading-tight font-extrabold tracking-[-0.015em] xl:text-[1.55rem]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-[1.5] text-white/90 xl:text-[1rem]">{s.body}</p>
                  </div>
                </div>
              </div>

              {/* Number tab */}
              <span
                className={`${skew} absolute -top-3 left-5 z-[2] rounded-[0.55rem] bg-[#0d4a24] px-5 py-1.5 ring-[5px] ring-[#f3f1ea] lg:left-8`}
              >
                <span className={`${unskew} block font-display text-[1.6rem] leading-none font-extrabold text-white tabular-nums xl:text-[1.8rem]`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>

              {/* Arrow to the next step */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-[11rem] -right-[1.9rem] z-[3] hidden size-12 place-items-center rounded-full bg-[linear-gradient(180deg,#5fc23a,#2c8a1d)] text-white shadow-[0_10px_20px_-10px_rgba(15,59,29,0.7)] lg:grid xl:top-[13.2rem] xl:size-[3.4rem]"
                >
                  <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
