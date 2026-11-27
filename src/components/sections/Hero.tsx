import Image from "next/image";
import iso9001 from "@/assets/images/cert-iso9001.webp";
import iso14001 from "@/assets/images/cert-iso14001.webp";
import r2 from "@/assets/images/cert-r2.webp";
import tnpcb from "@/assets/images/cert-tnpcb.webp";
import mobileArt from "@/assets/images/hero-mobile-art.webp";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { MobileLabel } from "@/components/ui/MobileLabel";
import { enquiryHref } from "@/lib/site";

const ArrowGlyph = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-[1.1em] shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
  >
    <path d="M3.5 10h12M11 5.5 15.5 10 11 14.5" />
  </svg>
);

/** Marks shown on skvewasterecycling.com; logo files taken from that site. */
const marks = [
  { src: iso14001, alt: "ISO 14001 Environmental Management System" },
  { src: tnpcb, alt: "Tamil Nadu Pollution Control Board (TNPCB)" },
  { src: r2, alt: "R2v3 Certified Responsible Recycling" },
  { src: iso9001, alt: "ISO 9001:2015 Quality Management certified company" },
];

/** Phones: the same marks with names, ordered as in the client's mobile mockup. */
const mobileMarks = [
  { src: iso9001, alt: "ISO 9001:2015 Quality Management certified company", name: "ISO 9001", desc: "Quality Management" },
  { src: iso14001, alt: "ISO 14001 Environmental Management System", name: "ISO 14001", desc: "Environmental Management" },
  { src: r2, alt: "R2v3 Certified Responsible Recycling", name: "R2 Certified", desc: "Responsible Recycling" },
  { src: tnpcb, alt: "Tamil Nadu Pollution Control Board (TNPCB)", name: "TNPCB", desc: "Authorised Collector" },
];

/* Button sizes are in em of the button's own text so they scale with it. */
const btn =
  "group inline-flex h-[3.9em] items-center justify-center gap-[0.7em] rounded-[0.55em] px-[2.55em] text-[0.82rem] font-bold whitespace-nowrap uppercase transition-[background-color,color,box-shadow,transform] duration-300 ease-out hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0a5c1f] lg:text-[length:max(12px,0.75em)]";

/**
 * Approved hero as a deliberate two-column grid inside the shared gutters:
 * text ~52 %, angled photograph ~48 %, a small fixed gap, both vertically
 * centred. From 1024px all sizes are em of a root tied to the content width
 * (--c), so the H1's longest line always fills ~96 % of its column and the
 * composition keeps the same proportions at every desktop width. Below
 * 1024px it stacks: text, then the photograph.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#faf8f3] font-[family-name:var(--font-hero)] lg:[--g:max(4vw,calc((100vw_-_95rem)/2))] 2xl:[--g:max(5vw,calc((100vw_-_95rem)/2))] lg:[--c:calc(100vw_-_2*var(--g))] lg:text-[length:calc(var(--c)*0.0119)]"
    >
      <div className="mx-auto grid w-full max-md:p-0 px-5 pt-9 pb-14 sm:px-8 md:px-10 md:pt-14 md:pb-16 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:items-center lg:gap-x-[2.5%] lg:px-[var(--g)] lg:py-[3.6em]">
        <div className="relative min-w-0 max-md:overflow-hidden max-md:bg-[radial-gradient(130%_85%_at_25%_35%,#0f6a2c_0%,#06401f_55%,#032b17_100%)] max-md:px-5 max-md:pt-7 max-md:pb-[4.5rem]">
          {/* Phones: SKV recycling artwork in a curved frame on the right of the green panel */}
          <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 w-[50%] md:hidden">
            <Image src={mobileArt} alt="" sizes="50vw" loading="eager" className="h-auto w-full" />
          </div>
          {/* Phones: wave into the cream area below */}
          <svg aria-hidden="true" viewBox="0 0 390 64" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-px h-16 w-full md:hidden">
            <defs>
              <linearGradient id="hero-wave-lime" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#7cc62a" />
                <stop offset="1" stopColor="#b6e64a" />
              </linearGradient>
            </defs>
            <path d="M0 64 L0 50 C 110 26 250 14 390 4 L390 64 Z" fill="#faf8f3" />
            <path d="M0 46 C 110 22 250 10 390 0" fill="none" stroke="url(#hero-wave-lime)" strokeWidth="5" />
          </svg>

          <p className="relative flex items-start gap-[1em] text-[0.7rem] leading-[1.5] max-[380px]:max-w-[66%] max-md:text-[0.64rem] max-md:font-bold font-semibold tracking-[0.02em] text-[#2f3836] uppercase max-md:text-white sm:items-center sm:text-[0.75rem] sm:leading-normal lg:text-[length:max(10.5px,0.7em)]">
            <span
              aria-hidden="true"
              className="mt-[0.7em] h-[2px] w-[2.55em] shrink-0 bg-[#3d9f25] max-md:bg-[#b5e63c] sm:mt-0"
            />
            <span>
              Corporate e-waste management
              <span className="max-md:hidden">
                {" · "}
                <span className="whitespace-nowrap">Chennai &amp; Mumbai</span>
              </span>
            </span>
          </p>

          <h1
            id="hero-heading"
            className="relative mt-5 text-[length:7.3vw] leading-[1.045] font-bold tracking-[-0.03em] text-[#0a5c1f] max-md:max-w-[68%] max-md:font-extrabold max-md:text-[length:5.45vw] max-md:leading-[1.1] max-md:text-white sm:text-[length:6vw] md:text-[length:5.6vw] lg:mt-[0.33em] lg:text-[length:3.35em]"
          >
            E-Waste Recycling &amp;
            <br className="max-md:hidden" /> IT Asset<br className="md:hidden" /> Management
            <br className="max-md:hidden" /> Solutions{" "}
            <span className="text-[#06381d] max-md:block max-md:text-[#b5e63c]">for Businesses</span>
          </h1>

          <p className="relative mt-6 max-w-[28.6em] text-[1rem] leading-[1.52] font-semibold text-[#3a4842] max-md:mt-4 max-md:max-w-[52%] max-md:text-[0.8rem] max-md:leading-[1.45] max-md:font-medium max-md:text-white/90 lg:mt-[1.3em] lg:text-[length:max(15px,0.975em)]">
            Responsible collection, recycling and secure disposal of electronic
            waste and retired IT assets for corporate organisations.
          </p>

          <div className="relative mt-8 flex flex-col gap-3 max-md:mt-5 max-md:max-w-[50%] max-[380px]:max-w-[62%]! max-md:items-stretch sm:flex-row sm:gap-[1.15rem] lg:mt-[2.05em] lg:gap-[0.9em]">
            <a
              href={enquiryHref}
              className={`${btn} bg-[#3d9f25] text-white shadow-[0_14px_26px_-14px_rgba(1,52,28,0.9)] hover:bg-[#2f8a1b] max-md:h-11 max-md:rounded-xl max-md:px-3 max-md:text-[0.78rem] max-[380px]:text-[0.74rem] max-md:normal-case max-md:border max-md:border-white/45 max-md:shadow-[0_8px_18px_-10px_rgba(1,52,28,0.7)]`}
            >
              Request a Pickup
              <ArrowGlyph />
            </a>
            <a
              href="#services"
              className={`${btn} border-2 border-[#0a5c1f] text-[#0a5c1f] max-md:hidden hover:bg-[#0a5c1f]/[0.06] max-md:h-11 max-md:rounded-xl max-md:border-white/90 max-md:px-3 max-md:text-[0.78rem] max-[380px]:text-[0.74rem] max-md:text-white max-md:normal-case`}
            >
              Explore Our Services
              <ArrowGlyph />
            </a>
          </div>

          <ul
            aria-label="Certifications and compliance"
            className="mt-9 flex items-center justify-between gap-4 max-md:hidden sm:justify-start sm:gap-9 lg:mt-[2.3em] lg:gap-[2.1em]"
          >
            {marks.map((m) => (
              <li key={m.alt} className="shrink-0">
                <Image
                  src={m.src}
                  alt={m.alt}
                  sizes="120px"
                  loading="eager"
                  className="h-[3.4rem] w-auto sm:h-[4rem] lg:h-[max(3.2rem,3.9em)]"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Phones: titled certification row on cream below the panel */}
        <div className="px-4 pt-3 pb-6 md:hidden">
          <MobileLabel>Our Certifications</MobileLabel>
          <ul aria-label="Certifications and compliance" className="mt-5 grid grid-cols-4">
            {mobileMarks.map((m, i) => (
              <li
                key={m.name}
                className={`relative flex flex-col items-center px-1 text-center ${
                  i > 0 ? "before:absolute before:top-2 before:bottom-2 before:left-0 before:w-px before:bg-[#e2dfd6]" : ""
                }`}
              >
                <Image src={m.src} alt={m.alt} sizes="120px" className="h-[3.1rem] w-auto object-contain" />
                <p className="mt-2.5 text-[0.78rem] leading-tight font-bold whitespace-nowrap max-[380px]:text-[0.7rem] text-[#14231d]">{m.name}</p>
                <p className="mt-1 text-[0.64rem] leading-snug font-medium text-[#3c4a43]">{m.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual className="mt-12 max-md:hidden md:mt-14 md:ml-auto md:w-[74%] lg:mt-0 lg:w-full" />
      </div>
    </section>
  );
}
