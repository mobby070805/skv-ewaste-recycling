import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type EyebrowProps = {
  index?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** Numbered section label, e.g. "03 ── About SKV". */
export function Eyebrow({ index, children, tone = "light", className = "" }: EyebrowProps) {
  const dark = tone === "dark";
  return (
    <p className={`label flex items-center gap-3 ${dark ? "text-white/60" : "text-forest/60"} ${className}`}>
      {index && (
        <span className={`tabular-nums ${dark ? "text-lime" : "text-lime-deep"}`}>{index}</span>
      )}
      <span aria-hidden="true" className={`h-px w-10 ${dark ? "bg-white/30" : "bg-forest/25"}`} />
      <span>{children}</span>
    </p>
  );
}

type SectionIntroProps = {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  id?: string;
  children?: ReactNode;
  tone?: "light" | "dark";
  /** "split" puts the supporting copy beside the heading on large screens. */
  layout?: "split" | "stacked";
  className?: string;
};

/** Eyebrow, H2 and supporting copy used to open most homepage sections. */
export function SectionIntro({
  eyebrow,
  index,
  title,
  id,
  children,
  tone = "light",
  layout = "split",
  className = "",
}: SectionIntroProps) {
  const dark = tone === "dark";
  return (
    <div
      className={`grid gap-6 ${
        layout === "split" ? "lg:grid-cols-12 lg:items-end lg:gap-10" : ""
      } ${className}`}
    >
      <Reveal className={layout === "split" ? "lg:col-span-7" : "max-w-[46rem]"}>
        <Eyebrow index={index} tone={tone}>
          {eyebrow}
        </Eyebrow>
        <h2
          id={id}
          className={`h-section mt-6 max-w-[20ch] ${dark ? "text-white" : "text-forest"}`}
        >
          {title}
        </h2>
      </Reveal>
      {children && (
        <Reveal
          delay={100}
          className={
            layout === "split"
              ? "lg:col-span-4 lg:col-start-9 lg:pb-2"
              : "max-w-[40rem]"
          }
        >
          <div
            className={`border-l-2 pl-5 leading-relaxed ${
              dark ? "border-lime/60 text-white/70" : "border-lime text-muted"
            }`}
          >
            {children}
          </div>
        </Reveal>
      )}
    </div>
  );
}
