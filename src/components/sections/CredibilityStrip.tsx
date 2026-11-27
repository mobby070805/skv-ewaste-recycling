import type { ComponentType, SVGProps } from "react";
import { BuildingIcon, ClipboardCheckIcon, PinIcon, UsersIcon } from "@/components/ui/Icons";
import { MobileLabel } from "@/components/ui/MobileLabel";
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
      className="bg-[#faf8f3] md:border-y md:border-[#ebe8e0] font-[family-name:var(--font-hero)] text-[13.5px] sm:text-[15px] lg:text-[length:clamp(13px,1.1274vw,18.6px)]"
    >
      {/* Phones: "Our Key Values" card in light green, one row of four */}
      <div className="px-4 pb-6 md:hidden">
        <div className="rounded-2xl bg-[#edf3e4] px-2 pt-5 pb-5">
          <MobileLabel>Our Key Values</MobileLabel>
          <ul className="mt-4 grid grid-cols-4">
            {items.map(({ title, value, suffix, sub, Icon }, i) => (
              <li
                key={title}
                className={`relative flex flex-col items-center px-1 text-center ${
                  i > 0 ? "before:absolute before:top-1 before:bottom-1 before:left-0 before:w-px before:bg-[#d3dccb]" : ""
                }`}
              >
                <Icon className="size-8 text-[#2c8a35]" strokeWidth={1.5} />
                <p className="mt-2 text-[1.2rem] leading-none font-extrabold tracking-[-0.02em] text-[#11261a]">
                  {value}
                  {suffix}
                </p>
                <p className="mt-1.5 text-[0.7rem] leading-snug font-medium text-[#22302a]">{sub}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="mx-auto grid w-full grid-cols-2 px-5 max-md:hidden sm:px-8 md:px-10 lg:grid-cols-[333fr_356fr_378fr_373fr] lg:px-[max(4vw,calc((100vw_-_95rem)/2))] 2xl:px-[max(5vw,calc((100vw_-_95rem)/2))]">
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
