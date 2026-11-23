"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import yard from "@/assets/images/cta-yard.webp";
import dismantling from "@/assets/images/gallery-dismantling.webp";
import sorting from "@/assets/images/gallery-sorting.webp";
import conveyor from "@/assets/images/ops-conveyor.webp";
import { Reveal } from "@/components/ui/Reveal";

type Tile = {
  caption: string;
  image: StaticImageData;
  alt: string;
  className: string;
  sizes: string;
};

/**
 * Representative photography only — none of these show SKV's own sites.
 * Replace with genuine SKV photographs (same file names) when supplied.
 */
const tiles: Tile[] = [
  {
    caption: "E-waste sorting",
    image: sorting,
    alt: "Cables, connectors and small electronic parts awaiting sorting",
    className: "col-span-2 aspect-[4/3] lg:col-span-7 lg:row-span-2 lg:aspect-auto",
    sizes: "(min-width: 1024px) 56vw, 100vw",
  },
  {
    caption: "Material handling",
    image: yard,
    alt: "Grab crane handling scrap at an industrial recycling yard",
    className: "col-span-2 aspect-[16/9] lg:col-span-5 lg:aspect-auto",
    sizes: "(min-width: 1024px) 40vw, 100vw",
  },
  {
    caption: "Dismantling",
    image: dismantling,
    alt: "Hard disk drive dismantled into casing, platter assembly and circuit board",
    className: "aspect-square lg:col-span-2 lg:aspect-auto",
    sizes: "(min-width: 1024px) 18vw, 50vw",
  },
  {
    caption: "Processing",
    image: conveyor,
    alt: "Conveyor lines and storage bins inside an industrial processing facility",
    className: "aspect-square lg:col-span-3 lg:aspect-auto",
    sizes: "(min-width: 1024px) 24vw, 50vw",
  },
];

export function Gallery() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (d: number) =>
      setIndex((i) => (i === null ? i : (i + d + tiles.length) % tiles.length)),
    [],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (!dialog.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    window.addEventListener("keydown", onKey);
    dialog.addEventListener("close", onClose);
    return () => {
      window.removeEventListener("keydown", onKey);
      dialog.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = index === null ? null : tiles[index];

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="section-y bg-ivory">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="label text-lime-deep">Operational gallery</p>
            <h2 id="gallery-heading" className="h-section mt-5 text-forest">
              Inside Responsible{" "}
              <span className="accent">
                <span className="whitespace-nowrap">E-Waste</span> Operations.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed text-muted">
              Sorting, dismantling, handling and processing — the work that
              turns retired equipment into recovered material.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-16 lg:auto-rows-[17rem] lg:grid-cols-12 lg:gap-5 xl:auto-rows-[19rem]">
          {tiles.map((tile, i) => (
            <Reveal
              as="li"
              key={tile.caption}
              delay={(i % 3) * 80}
              className={`relative overflow-hidden rounded-[1rem] bg-charcoal ${tile.className}`}
            >
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`View larger: ${tile.caption}`}
                className="group absolute inset-0 block cursor-zoom-in text-left"
              >
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  placeholder="blur"
                  sizes={tile.sizes}
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-linear-to-t from-charcoal/85 to-transparent px-4 pt-14 pb-4 sm:px-6 sm:pb-5">
                  <span className="label text-white">{tile.caption}</span>
                  <span
                    aria-hidden="true"
                    className="hidden size-9 place-items-center rounded-full border border-white/40 text-lg leading-none text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:grid"
                  >
                    +
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>

        <p className="mt-5 max-w-[60rem] text-sm leading-relaxed text-muted">
          Representative industry photography. These images do not show
          SKV&rsquo;s own facilities; photographs of SKV&rsquo;s collection
          and processing operations will be added here.
        </p>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={current ? current.caption : "Gallery image"}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto h-dvh max-h-none w-screen max-w-none bg-charcoal/95 p-0 text-white backdrop:bg-charcoal/80"
      >
        {current && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <p className="label text-white/80">
                {String((index ?? 0) + 1).padStart(2, "0")} / {String(tiles.length).padStart(2, "0")}
                <span className="ml-4 text-white">{current.caption}</span>
              </p>
              <button
                type="button"
                onClick={close}
                className="label min-h-11 px-3 text-white/80 hover:text-white"
              >
                Close ✕
              </button>
            </div>
            <div className="relative flex-1" onClick={close}>
              <Image
                src={current.image}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain p-4 sm:p-10"
              />
            </div>
            <div className="flex justify-center gap-3 pb-6">
              <button
                type="button"
                onClick={() => step(-1)}
                className="label min-h-11 border border-white/30 px-5 hover:border-white"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="label min-h-11 border border-white/30 px-5 hover:border-white"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
