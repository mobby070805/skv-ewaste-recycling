import type { ReactNode } from "react";

type Variant = "lime" | "forest" | "ivory" | "outline-light" | "outline-dark";

const base =
  "group/btn relative isolate inline-flex min-h-14 items-center justify-between gap-5 overflow-hidden rounded-full font-display text-[0.8rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-500";

const variants: Record<Variant, { btn: string; disc: string }> = {
  lime: {
    btn: "bg-lime text-forest-deep hover:bg-[#b7d27f]",
    disc: "bg-forest-deep text-lime",
  },
  forest: {
    btn: "bg-forest text-white hover:bg-forest-deep",
    disc: "bg-lime text-forest-deep",
  },
  ivory: {
    btn: "bg-ivory text-forest hover:bg-white",
    disc: "bg-forest text-white",
  },
  "outline-light": {
    btn: "border border-white/35 text-white hover:border-white hover:bg-white/5",
    disc: "bg-white/12 text-white",
  },
  "outline-dark": {
    btn: "border border-forest/25 text-forest hover:border-forest hover:bg-forest/[0.04]",
    disc: "bg-forest/8 text-forest",
  },
};

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`size-4 shrink-0 transition-transform duration-300 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M3 10h13M11 5l5 5-5 5" strokeLinecap="square" />
    </svg>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  external?: boolean;
};

/** Pill-shaped anchor button. Plain <a> so in-page hash links scroll natively. */
export function ButtonLink({
  href,
  children,
  variant = "forest",
  className = "",
  arrow = true,
  external = false,
}: ButtonLinkProps) {
  const v = variants[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${v.btn} ${arrow ? "pr-2 pl-7" : "px-7"} ${className}`}
    >
      <span className="flex items-center gap-2.5">{children}</span>
      {arrow && (
        <span
          className={`grid size-10 shrink-0 place-items-center rounded-full transition-transform duration-500 group-hover/btn:translate-x-0.5 ${v.disc}`}
        >
          <Arrow className="size-3.5 group-hover/btn:-rotate-45" />
        </span>
      )}
    </a>
  );
}

/** Understated text link with an arrow, for use in body copy. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group/btn inline-flex items-center gap-3 font-display text-[0.8rem] font-semibold uppercase tracking-[0.12em] ${className}`}
    >
      <span className="border-b border-current/40 pb-1 transition-colors group-hover/btn:border-current">
        {children}
      </span>
      <Arrow className="group-hover/btn:translate-x-1" />
    </a>
  );
}

/** Classes for pill buttons rendered by other elements (e.g. EnquiryLink). */
export function pillClasses(variant: Variant = "forest", className = "") {
  return `${base} ${variants[variant].btn} pr-2 pl-7 ${className}`;
}

/** Arrow disc used inside pill buttons. */
export function ArrowDisc({ variant = "forest" }: { variant?: Variant }) {
  return (
    <span
      className={`grid size-10 shrink-0 place-items-center rounded-full transition-transform duration-500 group-hover/btn:translate-x-0.5 ${variants[variant].disc}`}
    >
      <Arrow className="size-3.5 group-hover/btn:-rotate-45" />
    </span>
  );
}
