import Image from "next/image";
import woman from "@/assets/images/about-ewaste-woman.webp";
import { AwardIcon } from "@/components/ui/Icons";
import {
  Arrow,
  Eyebrow,
  container,
  outlineBtn,
  primaryBtn,
} from "@/components/ui/Section";
import { stats } from "@/lib/site";

/** Figures published on SKV's own About page. */
const figures = stats.slice(0, 3);

/**
 * About SKV: the introduction on the left; on the right a cut-out figure
 * stands on the section's bottom edge in front of a soft green disc, with the
 * credential card floating beside her. Stacks text-first on phones and tablets.
 */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#f1efe7]"
    >
      <div
        className={`${container} grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-10 xl:gap-16`}
      >
        {/* Introduction */}
        <div className="py-16 sm:py-20 lg:py-24 xl:py-28">
          <div className="max-w-[40rem]">
            <Eyebrow>About SKV</Eyebrow>
            <h2
              id="about-heading"
              className="mt-6 font-display text-[clamp(2.05rem,1.25rem+2.6vw,3.55rem)] leading-[1.08] font-[760] tracking-[-0.018em] text-balance text-[#0a6a22]"
            >
              Your partner for{" "}
              <span className="text-[#06381d]">
                {"responsible end\u2011of\u2011life electronics."}
              </span>
            </h2>

            <p className="mt-7 text-[clamp(1.02rem,0.95rem+0.3vw,1.16rem)] leading-[1.7] text-[#24352d]">
              SKV E-Waste Recycling Pvt. Ltd. helps organisations in Chennai and
              Mumbai retire IT and electronic equipment the right way.
            </p>
            <p className="mt-4 text-[1rem] leading-[1.7] text-pretty text-[#4a5751]">
              We collect from your premises, destroy the data, recover what
              still has value and recycle the rest, with the records your
              compliance team needs at every step.
            </p>

            <dl className="mt-10 grid grid-cols-3 border-y border-[#dcd9d0]">
              {figures.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col-reverse justify-end py-6 ${i > 0 ? "border-l border-[#dcd9d0] pl-4 sm:pl-7" : "pr-4"}`}
                >
                  <dt className="mt-2 text-[0.8rem] leading-snug font-medium text-[#4a5751] sm:text-[0.88rem]">
                    {s.label}
                  </dt>
                  <dd className="font-display text-[clamp(1.9rem,1.4rem+1.6vw,2.75rem)] leading-none font-[760] tracking-[-0.025em] text-[#0a6a22]">
                    {s.value}
                    <span className="text-[#3d9f25]">{s.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3 max-md:hidden">
              <a href="#services" className={primaryBtn}>
                Explore Our Services <Arrow />
              </a>
              <a href="#contact" className={outlineBtn}>
                Talk to Our Team <Arrow />
              </a>
            </div>
          </div>
        </div>

        {/* Figure */}
        <div className="relative h-[26rem] sm:h-[34rem] lg:h-auto lg:min-h-[34rem]">
          {/* Soft green disc behind the figure */}
          <div
            aria-hidden="true"
            className="absolute bottom-[8%] left-1/2 aspect-square w-[min(78%,24rem)] -translate-x-[42%] rounded-full bg-[radial-gradient(circle_at_50%_35%,#e2f2da_0%,#cbe8bd_60%,#b6dca4_100%)] lg:bottom-[10%] lg:w-[min(80%,34rem)]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[3%] left-1/2 aspect-square w-[min(92%,28rem)] -translate-x-[42%] rounded-full border border-dashed border-[#3d9f25]/30 lg:bottom-[4%] lg:w-[min(94%,40rem)]"
          />

          <Image
            src={woman}
            alt="Smiling woman giving a thumbs-up while carrying a green e-waste disposal bin of old laptops, phones and keyboards"
            placeholder="blur"
            sizes="(min-width: 1024px) 42vw, 90vw"
            fill
            className="object-contain object-bottom pt-[6.75rem] sm:pt-6 lg:pt-[12%]"
          />

          {/* Credential card */}
          <div className="absolute top-4 left-0 flex max-w-[17.5rem] items-center gap-3.5 rounded-[0.8rem] bg-white/95 p-4 shadow-[0_24px_48px_-24px_rgba(1,52,28,0.45)] ring-1 ring-[#01341c]/5 backdrop-blur-sm max-sm:top-1 sm:top-10 lg:top-[26%] lg:left-0 xl:max-w-[18.5rem]">
            <span className="grid size-11 shrink-0 place-items-center rounded-[0.8rem] bg-[#e5f3d7] text-[#1d5e33]">
              <AwardIcon className="size-[1.35rem]" strokeWidth={1.9} />
            </span>
            <p className="font-display text-[0.88rem] leading-snug font-bold text-[#14231d]">
              Authorised collector &amp; bulk consumer of e-waste
              <span className="mt-1 block text-[0.76rem] font-medium text-[#4a5751]">
                Working to TNPCB policies
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
