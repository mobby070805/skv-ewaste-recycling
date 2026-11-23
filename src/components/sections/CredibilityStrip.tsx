import type { ComponentType, SVGProps } from "react";
import { BuildingIcon, ClipboardCheckIcon, PinIcon, UsersIcon } from "@/components/ui/Icons";
import { stats } from "@/lib/site";

const icons: ComponentType<SVGProps<SVGSVGElement>>[] = [ClipboardCheckIcon, UsersIcon, BuildingIcon, PinIcon];

/** The four figures published on SKV's About page (see lib/site.ts). */
const items = stats.map((s, i) => ({
  title: `${s.value}${s.suffix}`,
  value: s.value,
  suffix: s.suffix,
  sub: s.label,
  Icon: icons[i],
}));

const divider =
  "before:absolute before:top-1/2 before:left-0 before:h-[3em] before:w-px before:-translate-y-1/2 before:bg-[#e2dfd6]";

/**
 * Credibility strip from the approved hero design: bare line icons, bold
 * title, quiet sub-line, thin separators. From 1024px it scales with the
 * viewport like the hero; a 2 × 2 grid on phones and tablets.
 */
export function CredibilityStrip() {
  return (
    <section
      aria-label="Credentials"
      className="border-y border-[#ebe8e0] bg-[#faf8f3] font-[family-name:var(--font-hero)] text-[13.5px] sm:text-[15px] lg:text-[length:clamp(13px,1.1274vw,20.5px)]"
    >
      {/* Phones: one row of four, icon on top, centred */}
      <ul className="grid grid-cols-4 px-2 md:hidden">
        {items.map(({ title, value, suffix, sub, Icon }, i) => (
          <li
            key={title}
            className={`relative flex flex-col items-center px-1 py-5 text-center ${
              i > 0
                ? "before:absolute before:top-1/2 before:left-0 before:h-14 before:w-px before:-translate-y-1/2 before:bg-[#e2dfd6]"
                : ""
            }`}
          >
            <Icon className="size-8 text-[#0a5c1f]" strokeWidth={1.4} />
            <p className="mt-2 text-[1.12rem] leading-none font-bold tracking-[-0.02em] text-[#0a5c1f]">
              {value}
              <span className="text-[#3d9f25]">{suffix}</span>
            </p>
            <p className="mt-1.5 text-[0.7rem] leading-snug font-semibold text-[#2f3b35]">{sub}</p>
          </li>
        ))}
      </ul>

      <ul className="mx-auto grid w-full grid-cols-2 px-5 max-md:hidden sm:px-8 md:px-10 lg:grid-cols-[333fr_356fr_378fr_373fr] lg:px-[max(4vw,min(8vw,calc(20.83vw_-_266px)))]">
        {items.map(({ title, value, suffix, sub, Icon }, i) => (
          <li
            key={title}
            className={`relative flex flex-col items-start gap-3 py-6 sm:flex-row sm:items-center sm:gap-[0.8em] lg:py-[2.15em] ${
              i % 2 === 1 ? `pl-5 sm:pl-7 ${divider}` : "pr-3"
            } ${i >= 2 ? "border-t border-[#ebe8e0] lg:border-t-0" : ""} ${
              i > 0 ? "lg:pl-[3.55em]" : "lg:pl-0"
            } ${
              i === 2
                ? "lg:before:absolute lg:before:top-1/2 lg:before:left-0 lg:before:h-[3em] lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-[#e2dfd6]"
                : ""
            }`}
          >
            <Icon className="size-[2.5em] shrink-0 text-[#0a5c1f]" strokeWidth={1.25} />
            <div className="min-w-0">
              <p className="text-[1.5em] leading-none font-bold tracking-[-0.02em] text-[#0a5c1f] lg:text-[1.45em]">
                {value}
                <span className="text-[#3d9f25]">{suffix}</span>
              </p>
              <p className="mt-[0.45em] text-[0.88em] leading-tight font-medium text-[#4a5751] lg:text-[0.795em]">{sub}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
