"use client";

import type { ComponentType, SVGProps } from "react";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import corporate from "@/assets/images/ind-corporate.webp";
import itpark from "@/assets/images/ind-itpark.webp";
import bank from "@/assets/images/ind-bank.webp";
import manufacturing from "@/assets/images/ind-manufacturing.webp";
import datacentre from "@/assets/images/ind-datacentre.webp";
import education from "@/assets/images/ind-education.webp";
import government from "@/assets/images/ind-government.webp";
import {
  BankIcon,
  BuildingIcon,
  FactoryIcon,
  GovernmentIcon,
  GraduationIcon,
  LaptopIcon,
  ServerIcon,
} from "@/components/ui/Icons";
import { container } from "@/components/ui/Section";

type Industry = {
  title: string;
  body: string;
  image: StaticImageData;
  alt: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const industries: Industry[] = [
  {
    title: "Corporate Enterprises",
    body: "Technology refreshes, office relocations, consolidations and end-of-lease clearances.",
    image: corporate,
    alt: "Open-plan corporate office",
    Icon: BuildingIcon,
  },
  {
    title: "IT Parks",
    body: "Coordinated pickups and office demolition for multi-tenant campuses and facility managers.",
    image: itpark,
    alt: "Office campus buildings beside landscaped grounds",
    Icon: LaptopIcon,
  },
  {
    title: "Banks & Financial Institutions",
    body: "Branch and back-office IT disposal with degaussing, certified erasure and drive destruction.",
    image: bank,
    alt: "Glass-fronted office tower",
    Icon: BankIcon,
  },
  {
    title: "Manufacturing",
    body: "Industrial electronics, control equipment and production-floor IT.",
    image: manufacturing,
    alt: "Automated manufacturing line inside a factory",
    Icon: FactoryIcon,
  },
  {
    title: "Data Centres",
    body: "Servers, storage, networking devices, racks and cabling decommissioned and removed.",
    image: datacentre,
    alt: "Aisle between rows of data-centre server racks",
    Icon: ServerIcon,
  },
  {
    title: "Educational Institutions",
    body: "Computer labs, classroom technology and administrative equipment.",
    image: education,
    alt: "University campus buildings",
    Icon: GraduationIcon,
  },
  {
    title: "Government & Institutional",
    body: "Structured disposal of IT assets for public bodies and large institutions.",
    image: government,
    alt: "Government building reflected in water",
    Icon: GovernmentIcon,
  },
];

const ArrowGlyph = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 12h15M14 6.5l5.5 5.5-5.5 5.5" />
  </svg>
);

/**
 * Photo frame from the client mockup: a rounded panel whose left edge leans
 * slightly and whose bottom-right corner is cut on a diagonal, with two green
 * bands behind it (top-left and bottom-right). Drawn in a 100 × 134 box.
 */
function IndustryVisual({ active }: { active: number }) {
  const ind = industries[active];
  return (
    <div className="relative mx-auto aspect-[100/134] w-full max-w-[14.5rem] sm:max-w-[26rem] lg:max-w-[34rem]">
      <svg
        aria-hidden="true"
        viewBox="0 0 100 134"
        className="absolute inset-0 size-full overflow-visible"
      >
        <defs>
          <clipPath id="industry-frame" clipPathUnits="objectBoundingBox">
            <path d="M0.13,0 L0.955,0 Q1,0 1,0.035 L1,0.7 Q1,0.73 0.988,0.752 L0.908,0.972 Q0.895,1 0.862,1 L0.045,1 Q0,1 0.004,0.962 L0.078,0.038 Q0.085,0 0.13,0 Z" />
          </clipPath>
          <linearGradient
            id="industry-band-top"
            x1="0"
            y1="-7"
            x2="0"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#7fc45a" />
            <stop offset="0.45" stopColor="#a9da8c" stopOpacity="0.75" />
            <stop offset="1" stopColor="#c9eab4" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="industry-band-bottom"
            x1="104"
            y1="84"
            x2="64"
            y2="141"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#a9da8c" stopOpacity="0" />
            <stop offset="0.45" stopColor="#8fcf6a" />
            <stop offset="0.8" stopColor="#a9da8c" stopOpacity="0.85" />
            <stop offset="1" stopColor="#c9eab4" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M14 -6.6 Q10 -6.6 8.8 -3 L-5 42 L28 42 L43 -1 Q44.6 -6.6 40 -6.6 Z"
          fill="url(#industry-band-top)"
        />
        <path
          d="M107.5 86 L93.5 136.5 Q92.3 140.5 88 140.5 L58 140.5 L58 128 L100 86 Z"
          fill="url(#industry-band-bottom)"
        />
      </svg>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: "url(#industry-frame)" }}
      >
        {industries.map((it, i) => (
          <Image
            key={it.title}
            src={it.image}
            alt={i === active ? it.alt : ""}
            aria-hidden={i !== active}
            fill
            placeholder="blur"
            // Landscape photos fill a tall frame, so they render ~2x the frame width.
            sizes="(min-width: 1024px) 1100px, (min-width: 640px) 840px, 620px"
            className={`object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <p className="absolute bottom-[5%] left-[6%] flex items-center gap-3 rounded-[0.7rem] bg-[#0d4a24] px-4 py-3 font-[family-name:var(--font-hero)] text-[0.9rem] font-semibold text-white shadow-[0_14px_28px_-14px_rgba(0,0,0,0.6)] xl:text-[1rem]">
          <ind.Icon className="size-7 shrink-0" strokeWidth={1.5} />
          {ind.title}
        </p>
      </div>
    </div>
  );
}

/**
 * Industries we serve, built to the client mockup: framed photo on the left
 * that follows the selection; on the right the heading and an industry list
 * on deep green whose active item opens into a soft green card.
 */
/** Auto-advance interval for the industry list (client request). */
const CYCLE_MS = 2000;

export function Industries() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Only cycle while the section is on screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Advance every CYCLE_MS; restarts whenever the active item changes
  // (including a click), and stops while hovered, focused or off screen.
  useEffect(() => {
    if (paused || reduced || !visible) return;
    const t = window.setTimeout(
      () => setActive((a) => (a + 1) % industries.length),
      CYCLE_MS,
    );
    return () => window.clearTimeout(t);
  }, [active, paused, reduced, visible]);

  return (
    <section
      ref={sectionRef}
      id="industries"
      aria-labelledby="industries-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
      className="bg-[#01341c] py-16 text-white sm:py-20 lg:py-24"
    >
      <div
        className={`${container} grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14 xl:gap-20`}
      >
        <div className="px-2 max-md:hidden lg:px-0 lg:pl-[3%]">
          <IndustryVisual active={active} />
        </div>

        <div>
          <p className="flex items-center gap-4 font-[family-name:var(--font-hero)] text-[0.78rem] font-semibold tracking-[0.1em] text-[#8fd36f] uppercase xl:text-[0.86rem]">
            <span
              aria-hidden="true"
              className="h-[2px] w-10 shrink-0 bg-[#5bbd3c]"
            />
            Industries we serve
          </p>
          <h2
            id="industries-heading"
            className="mt-5 font-[family-name:var(--font-hero)] text-[clamp(2rem,1.1rem+2.9vw,3.6rem)] leading-[1.1] font-bold tracking-[-0.03em] text-white"
          >
            Serving organizations
            <br className="hidden sm:block" /> that run on technology.
          </h2>
          <p className="mt-5 text-[clamp(1rem,0.95rem+0.25vw,1.15rem)] leading-[1.6] text-white/75">
            Every sector retires equipment differently. Choose yours to see how
            we help.
          </p>

          <ul className="mt-8">
            {industries.map((ind, i) => {
              const on = i === active;
              return (
                <li
                  key={ind.title}
                  className={
                    on ? "my-2" : "border-b border-white/12 last:border-b-0"
                  }
                >
                  <button
                    type="button"
                    aria-expanded={on}
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className={`group flex w-full items-center gap-5 text-left transition-[background-color,box-shadow,border-color,padding] duration-300 ${
                      on
                        ? "rounded-[1.1rem] border-2 border-[#8fd36f]/35 bg-[linear-gradient(100deg,rgba(143,211,111,0.18),rgba(255,255,255,0.04))] px-5 py-5 shadow-[0_18px_36px_-26px_rgba(0,0,0,0.6)] sm:px-6"
                        : "rounded-[1.1rem] border-2 border-transparent px-3 py-4 hover:bg-white/[0.05]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        on
                          ? "hidden size-16 bg-[#e5f3d7] text-[#1d5e33] md:grid"
                          : "grid size-10 text-[#a6dd86]"
                      }`}
                    >
                      <ind.Icon
                        className={on ? "size-7 sm:size-9" : "size-7"}
                        strokeWidth={1.5}
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-[family-name:var(--font-hero)] font-semibold tracking-[-0.01em] text-white ${
                          on
                            ? "text-[1.2rem] font-bold xl:text-[1.35rem]"
                            : "text-[1.02rem] text-white/90 xl:text-[1.15rem]"
                        }`}
                      >
                        {ind.title}
                      </span>
                      <span
                        className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                          on
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden">
                          <span className="mt-1.5 block text-[0.94rem] leading-[1.55] text-white/75 xl:text-[1rem]">
                            {ind.body}
                          </span>
                          {/* Phones: the photo travels with the highlighted card */}
                          <span className="relative mt-3.5 block aspect-[16/9] overflow-hidden rounded-[0.8rem] md:hidden">
                            <Image
                              src={ind.image}
                              alt=""
                              aria-hidden="true"
                              fill
                              placeholder="blur"
                              sizes="90vw"
                              className="object-cover"
                            />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        on
                          ? "hidden size-11 bg-[#8fd36f] text-[#01341c] ring-4 ring-[#8fd36f]/25 sm:grid"
                          : "grid size-8 text-[#a6dd86] group-hover:translate-x-1"
                      }`}
                    >
                      <ArrowGlyph className={on ? "size-5" : "size-6"} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
