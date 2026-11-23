import type { ReactNode } from "react";

/**
 * Shared building blocks for every homepage section below the hero. They copy
 * the hero's exact values (container, eyebrow, heading, buttons) so the whole
 * page reads as one design system. Colours are literal values on purpose.
 */

/** One shared width for every section: 20px gutters on mobile, 92% of the
 * viewport on desktop, 90% on large screens, capped at 1520px. */
export const container =
  "mx-auto w-full max-w-[95rem] px-5 sm:px-8 md:px-10 lg:w-[92%] lg:px-0 2xl:w-[90%]";
export const sectionY = "py-16 sm:py-20 lg:py-24";

export const bg = {
  ivory: "bg-[#faf8f3]",
  sand: "bg-[#f1efe7]",
  forest: "bg-[#01341c] text-white",
} as const;

export function Eyebrow({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-4 font-display text-[0.75rem] font-bold tracking-[0.08em] uppercase lg:text-[0.7rem] xl:text-[0.76rem] ${
        dark ? "text-white" : "text-[#172823]"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-[2px] w-[2.1rem] shrink-0 ${dark ? "bg-[#5bbd3c]" : "bg-[#3d9f25]"}`}
      />
      {children}
    </p>
  );
}

export function Heading({
  id,
  children,
  dark = false,
  className = "",
}: {
  id: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`mt-5 font-display text-[clamp(1.85rem,1.2rem+2.2vw,3rem)] leading-[1.13] font-extrabold tracking-[-0.02em] text-balance ${
        dark ? "text-white" : "text-[#0a6a22]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lede({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`mt-5 max-w-[38rem] text-[clamp(1rem,0.93rem+0.3vw,1.14rem)] leading-[1.68] ${
        dark ? "text-white/80" : "text-[#3a4842]"
      } ${className}`}
    >
      {children}
    </p>
  );
}

const btnBase =
  "inline-flex h-12 items-center justify-center gap-3 rounded-lg px-7 font-display text-[0.8rem] font-bold tracking-[0.03em] uppercase transition-colors xl:h-[3.25rem] xl:text-[0.84rem]";

/** Same solid dark-green button as the hero's primary CTA. */
export const primaryBtn = `${btnBase} bg-[#0a5c1f] text-white shadow-[0_12px_24px_-14px_rgba(1,52,28,0.9)] hover:bg-[#01341c]`;
/** Same outline button as the hero's secondary CTA. */
export const outlineBtn = `${btnBase} border-[1.5px] border-[#0a5c1f] text-[#0a5c1f] hover:bg-[#0a5c1f] hover:text-white`;
/** Variants for dark-green sections. */
export const lightBtn = `${btnBase} bg-white text-[#01341c] hover:bg-[#e6f2df]`;
export const outlineLightBtn = `${btnBase} border-[1.5px] border-white/85 text-white hover:bg-white hover:text-[#01341c]`;

export const Arrow = () => <span aria-hidden="true">→</span>;

/** Small round check used in lists. */
export function Check({ dark = false }: { dark?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-[0.15rem] grid size-[1.35rem] shrink-0 place-items-center rounded-full ${
        dark ? "bg-[#5bbd3c]/20 text-[#8fd36f]" : "bg-[#0a5c1f]/10 text-[#0a5c1f]"
      }`}
    >
      <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="m3.5 8.3 2.8 2.7 6.2-6.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
