"use client";

import { useEffect } from "react";

const INTERVAL_MS = 2000;
/** After a visitor swipes or taps a row, leave it alone for this long. */
const RESUME_AFTER_MS = 6000;

/**
 * Phones only: every `.swipe-row` (see globals.css) advances one card every
 * two seconds and wraps back to the first card at the end. A row only moves
 * while it is on screen, pauses after the visitor touches it or focuses
 * inside it, and never moves with reduced motion. Renders nothing.
 */
export function SwipeAutoplay() {
  useEffect(() => {
    const phone = window.matchMedia("(max-width: 767px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const rows = [...document.querySelectorAll<HTMLElement>(".swipe-row")];
    const visible = new Set<HTMLElement>();
    const holdUntil = new WeakMap<HTMLElement, number>();
    const hold = (row: HTMLElement) => holdUntil.set(row, Date.now() + RESUME_AFTER_MS);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const row = e.target as HTMLElement;
          if (e.isIntersecting) visible.add(row);
          else visible.delete(row);
        }
      },
      { threshold: 0.6 },
    );

    const cleanups = rows.map((row) => {
      io.observe(row);
      const onTouch = () => hold(row);
      row.addEventListener("pointerdown", onTouch, { passive: true });
      row.addEventListener("touchstart", onTouch, { passive: true });
      row.addEventListener("wheel", onTouch, { passive: true });
      row.addEventListener("focusin", onTouch);
      return () => {
        row.removeEventListener("pointerdown", onTouch);
        row.removeEventListener("touchstart", onTouch);
        row.removeEventListener("wheel", onTouch);
        row.removeEventListener("focusin", onTouch);
      };
    });

    const tick = () => {
      if (!phone.matches || reduced.matches || document.hidden) return;
      const now = Date.now();
      for (const row of visible) {
        if ((holdUntil.get(row) ?? 0) > now || row.contains(document.activeElement)) continue;
        const first = row.firstElementChild as HTMLElement | null;
        if (!first) continue;
        const step = first.getBoundingClientRect().width + parseFloat(getComputedStyle(row).columnGap || "0");
        const atEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 4;
        row.scrollTo({ left: atEnd ? 0 : row.scrollLeft + step, behavior: "smooth" });
      }
    };
    const timer = window.setInterval(tick, INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
      io.disconnect();
      cleanups.forEach((c) => c());
    };
  }, []);

  return null;
}
