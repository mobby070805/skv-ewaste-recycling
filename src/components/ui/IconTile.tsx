import type { ComponentType, SVGProps } from "react";

/**
 * Site-wide icon colour (client-approved): light-green tile, dark-green icon.
 * Every tone maps to it; the names are kept so existing call sites still work.
 */
const brandTile = "bg-[#e5f3d7] text-[#1d5e33]";
export const tileTones = {
  blue: brandTile,
  green: brandTile,
  purple: brandTile,
  teal: brandTile,
  peach: brandTile,
  yellow: brandTile,
} as const;

export type TileTone = keyof typeof tileTones;

const sizes = {
  lg: "size-[4.6rem] rounded-[1.25rem] ring-[5px] lg:size-[5.4rem] [&>svg]:size-9 lg:[&>svg]:size-[2.6rem]",
  md: "size-[3.6rem] rounded-[1rem] ring-4 [&>svg]:size-7",
  sm: "size-11 rounded-[0.8rem] ring-[3px] [&>svg]:size-[1.35rem]",
} as const;

/**
 * Rounded light-green square holding a dark-green line icon. On dark
 * backgrounds pass `dark` for a faint outline ring.
 */
export function IconTile({
  Icon,
  tone,
  size = "md",
  dark = false,
  className = "",
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  tone: TileTone;
  size?: keyof typeof sizes;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center ${dark ? "ring-white/10" : "ring-transparent"} ${sizes[size]} ${tileTones[tone]} ${className}`}
    >
      <Icon strokeWidth={1.8} />
    </span>
  );
}
