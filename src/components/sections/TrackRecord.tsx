import Image from "next/image";
import aisle from "@/assets/images/gallery-it.webp";
import { Eyebrow, container } from "@/components/ui/Section";
import { stats } from "@/lib/site";

/** Photographic banner in the same treatment as the "Beyond Waste" banner. */
export function TrackRecord() {
  return (
    <section
      id="track-record"
      aria-labelledby="track-heading"
      className="relative isolate overflow-hidden bg-[#01341c] text-white"
    >
      <Image
        src={aisle}
        alt=""
        fill
        placeholder="blur"
        sizes="100vw"
        className="-z-10 object-cover object-[50%_50%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#01341c]/85" />

      <div className={`${container} py-16 sm:py-20 lg:py-24`}>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16 xl:gap-24">
          <div>
            <Eyebrow dark>Track record</Eyebrow>
            <h2
              id="track-heading"
              className="mt-5 font-display text-[clamp(1.85rem,1.2rem+2.2vw,3rem)] leading-[1.13] font-extrabold tracking-[-0.02em] text-balance"
            >
              Experience measured in projects delivered.
            </h2>
          </div>
          <p className="max-w-[34rem] text-[clamp(1rem,0.93rem+0.3vw,1.14rem)] leading-[1.68] text-white/80">
            Thousands of projects and customers later, our process is proven
            at scale.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-2 border-t border-white/20 lg:mt-14 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse justify-end pt-8 pr-4 ${i % 2 === 1 ? "border-l border-white/20 pl-5 sm:pl-8" : ""} ${
                i > 0 ? "lg:border-l lg:border-white/20 lg:pl-8 xl:pl-10" : ""
              } ${i >= 2 ? "mt-8 border-t border-white/20 lg:mt-0 lg:border-t-0" : ""}`}
            >
              <dt className="mt-3 text-[0.95rem] leading-snug text-white/80">{s.label}</dt>
              <dd className="font-display text-[clamp(2.4rem,1.6rem+3vw,4rem)] leading-none font-extrabold tracking-[-0.03em]">
                {s.value}
                <span className="text-[#8fd36f]">{s.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
