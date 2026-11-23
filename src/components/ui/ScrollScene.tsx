"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollSceneProps = {
  children: ReactNode;
  className?: string;
};

const clamp = (n: number) => Math.min(1, Math.max(0, n));

/**
 * Publishes the element's scroll position as CSS custom properties so that
 * imagery can respond to the visitor's actual scrolling:
 *
 *   --enter  0 → 1 while the element rises into the viewport
 *   --pass   0 → 1 across its whole journey through the viewport
 *
 * Styling lives in globals.css (.scene-media / .scene-img). Without JavaScript,
 * or with reduced motion, the properties are absent and the CSS falls back to
 * the final, fully revealed state. Native scrolling is never intercepted.
 */
export function ScrollScene({ children, className = "" }: ScrollSceneProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let active = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const enter = clamp((vh - rect.top) / (vh * 0.75));
      const pass = clamp((vh - rect.top) / (vh + rect.height));
      el.style.setProperty("--enter", enter.toFixed(4));
      el.style.setProperty("--pass", pass.toFixed(4));
    };

    const onScroll = () => {
      if (active) update();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        update();
      },
      { rootMargin: "20% 0px 20% 0px" },
    );

    update();
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
