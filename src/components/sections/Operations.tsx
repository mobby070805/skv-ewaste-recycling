import Image, { type StaticImageData } from "next/image";
import conveyor from "@/assets/images/ops-conveyor.webp";
import hall from "@/assets/images/process-hall.webp";
import sorting from "@/assets/images/gallery-sorting.webp";
import baled from "@/assets/images/gallery-recovered.webp";
import yard from "@/assets/images/cta-yard.webp";
import { IconTile, type TileTone } from "@/components/ui/IconTile";
import { BuildingIcon, CogIcon, RecycleIcon } from "@/components/ui/Icons";
import { Eyebrow, Heading, Lede, bg, container, sectionY } from "@/components/ui/Section";

type Tile = { image: StaticImageData; alt: string; caption: string; className: string };

const tiles: Tile[] = [
  {
    image: hall,
    alt: "Industrial processing hall with heavy machinery",
    caption: "Processing",
    className: "col-span-2 aspect-[16/10] lg:col-span-2 lg:row-span-2 lg:aspect-auto",
  },
  { image: conveyor, alt: "Conveyor lines inside a sorting facility", caption: "Sorting lines", className: "aspect-square" },
  { image: sorting, alt: "Sorted electronic wiring and components", caption: "Segregation", className: "aspect-square" },
  { image: baled, alt: "Sorted material packed into bins for onward recycling", caption: "Sorted storage", className: "aspect-square" },
  { image: yard, alt: "Material handler moving scrap in a recycling yard", caption: "Material recovery", className: "aspect-square" },
];

const points: { text: string; Icon: typeof CogIcon; tone: TileTone }[] = [
  { text: "A warehouse network for collection and storage", Icon: BuildingIcon, tone: "peach" },
  { text: "Processing units designed for minimal manual intervention", Icon: CogIcon, tone: "blue" },
  { text: "Safe recycling and resale processes", Icon: RecycleIcon, tone: "green" },
];

export function Operations() {
  return (
    <section id="gallery" aria-labelledby="ops-heading" className={`${bg.ivory} ${sectionY}`}>
      <div className={container}>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16 xl:gap-24">
          <div>
            <Eyebrow>Infrastructure &amp; operations</Eyebrow>
            <Heading id="ops-heading">The infrastructure behind every pickup.</Heading>
            <Lede>
              Large or small, every collection moves through the same controlled
              network of warehouses and processing units.
            </Lede>
          </div>
          <ul className="space-y-4 lg:pb-1">
            {points.map((p) => (
              <li key={p.text} className="flex items-center gap-4 text-[0.98rem] leading-[1.55] font-medium text-[#172823]">
                <IconTile Icon={p.Icon} tone={p.tone} size="sm" />
                {p.text}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {tiles.map((t) => (
            <li key={t.caption} className={`group relative overflow-hidden rounded-[0.6rem] ${t.className}`}>
              <Image
                src={t.image}
                alt={t.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute bottom-3 left-3 rounded-md bg-[#faf8f3]/95 px-2.5 py-1.5 font-display text-[0.64rem] whitespace-nowrap sm:px-3 sm:text-[0.72rem] font-bold tracking-[0.04em] text-[#0a5c1f] uppercase sm:bottom-4 sm:left-4">
                {t.caption}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[0.8rem] text-[#6b7670]">Photography is representative of the recycling process.</p>
      </div>
    </section>
  );
}
