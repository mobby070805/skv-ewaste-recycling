"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

export type Slide = { image: StaticImageData; alt: string; caption: string; position?: string };

const INTERVAL_MS = 2000;

/**
 * Crossfading photo slider for the recycling banner. Autoplay is driven by
 * the active indicator's CSS fill animation (its animationend advances the
 * slide), so hover/focus pause it simply by pausing the animation and there
 * is no timer to clean up. Swipe on touch, arrow keys when focused. With
 * reduced motion it does not autoplay; the indicators still work.
 */
export function RecoverySlider({ slides, className = "" }: { slides: Slide[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Only run autoplay while the slider is on screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = !paused && !reduced && visible;

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="E-waste recycling photographs"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        touchX.current = null;
        setPaused(false);
        if (start === null) return;
        const dx = e.changedTouches[0].clientX - start;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
      }}
      className={`group/slider relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#8fd36f] focus-visible:ring-inset ${className}`}
    >
      {slides.map((s, i) => {
        const active = i === index;
        return (
          <div
            key={s.caption}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}: ${s.caption}`}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:duration-0 ${
              active ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              placeholder="blur"
              loading={i === 0 ? "eager" : "lazy"}
              sizes="(min-width: 768px) 62vw, 100vw"
              className={`object-cover ${active ? "slide-settle" : ""}`}
              style={{ objectPosition: s.position ?? "50% 50%" }}
            />
          </div>
        );
      })}

      {/* Green grade over every slide, darker toward the text side and the base */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2] bg-[#01341c]/25 mix-blend-multiply" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-2/5 bg-linear-to-t from-[#01341c]/85 to-transparent" />
      {/* Seamless join with the green text panel: from the left on desktop, from the top when stacked */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-[2] hidden w-[30%] bg-linear-to-r from-[#01341c] via-[#01341c]/60 to-transparent md:block" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-1/4 bg-linear-to-b from-[#01341c] to-transparent md:hidden" />

      {/* Caption + indicators */}
      <div className="absolute inset-x-0 bottom-0 z-[3] flex items-end justify-between gap-6 px-5 pb-5 sm:px-8 sm:pb-7 lg:px-10 lg:pb-9">
        <p aria-live="polite" className="font-display text-white">
          <span className="block text-[0.68rem] font-bold tracking-[0.14em] text-[#8fd36f] tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <span className="mt-1 block text-[0.95rem] font-semibold sm:text-[1.05rem]">{slides[index].caption}</span>
        </p>

        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.caption}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show slide ${i + 1}: ${s.caption}`}
              aria-current={i === index}
              className="group/dot relative h-11 w-8 sm:w-10"
            >
              <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 overflow-hidden rounded-full bg-white/30 transition-colors group-hover/dot:bg-white/55">
                {i === index && (
                  <span
                    key={`${index}-${reduced}`}
                    onAnimationEnd={() => go(index + 1)}
                    className={`absolute inset-0 origin-left rounded-full bg-[#8fd36f] ${reduced ? "" : "slide-progress"}`}
                    style={
                      {
                        "--slide-ms": `${INTERVAL_MS}ms`,
                        animationPlayState: running ? "running" : "paused",
                      } as CSSProperties
                    }
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
