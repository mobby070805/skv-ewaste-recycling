import boards from "@/assets/images/banner-recycling.webp";
import dismantling from "@/assets/images/gallery-dismantling.webp";
import collection from "@/assets/images/hero-ewaste-scrap.webp";
import drive from "@/assets/images/service-hdd.webp";
import copper from "@/assets/images/sustain-copper.webp";
import { RecoverySlider, type Slide } from "@/components/ui/RecoverySlider";
import { outlineLightBtn } from "@/components/ui/Section";

const slides: Slide[] = [
  {
    image: boards,
    alt: "Pile of retired circuit boards and graphics cards collected for recycling",
    caption: "Circuit boards & components",
    position: "50% 50%",
  },
  {
    image: collection,
    alt: "Old monitors and computer hardware gathered for recycling",
    caption: "E-waste collection",
    position: "50% 45%",
  },
  {
    image: dismantling,
    alt: "Hard disk drive taken apart into its casing, platter, circuit board and screws",
    caption: "IT asset dismantling",
  },
  {
    image: drive,
    alt: "Opened hard disk drive showing the platter and actuator arm",
    caption: "Secure equipment processing",
    position: "55% 50%",
  },
  {
    image: copper,
    alt: "Stacks of recovered copper ready for reuse",
    caption: "Recovered materials",
    position: "40% 60%",
  },
];

/** Left edge matches the shared section container (see Section.tsx). */
const gutterL =
  "px-5 sm:px-8 md:pr-0 md:pl-10 lg:pl-[max(4vw,calc((100vw-95rem)/2))] 2xl:pl-[max(5vw,calc((100vw-95rem)/2))]";

/**
 * Full-width banner: the copy sits fixed on a deep-green panel on the left;
 * a crossfading photo slider fills the right ~60 % and dissolves into the
 * panel. Stacks copy-first on phones, with the slider below.
 */
export function RecyclingBanner() {
  return (
    <section
      id="recycling"
      aria-labelledby="recycling-heading"
      className="relative isolate overflow-hidden bg-[#01341c] text-white"
    >
      <div className="grid md:min-h-[30rem] md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:min-h-[34rem] xl:min-h-[38rem]">
        {/* Copy */}
        <div className={`relative z-10 flex items-center py-16 sm:py-20 md:py-20 lg:py-24 ${gutterL}`}>
          <div className="max-w-[30rem] md:-mr-16 lg:-mr-24">
            <p className="flex items-center gap-4 font-display text-[0.75rem] font-bold tracking-[0.16em] text-[#8fd36f] uppercase lg:text-[0.7rem] xl:text-[0.76rem]">
              <span aria-hidden="true" className="h-[2px] w-8 shrink-0 bg-[#5bbd3c]" />
              E-Waste Recycling
            </p>
            <h2
              id="recycling-heading"
              className="mt-6 font-[family-name:var(--font-hero)] text-[clamp(2.2rem,1.4rem+2.6vw,3.9rem)] leading-[1.06] font-bold tracking-[-0.03em]"
            >
              Beyond Waste.
              <br />
              <span className="text-[#a6dd86]">Into Resource Recovery.</span>
            </h2>
            <p className="mt-6 max-w-[26rem] text-[clamp(1rem,0.94rem+0.3vw,1.14rem)] leading-[1.7] text-white/80">
              We recover metals, plastics and reusable components from retired
              electronics and put them back to work.
            </p>
            <div className="mt-9 flex">
              <a
                href="#service-e-waste-recycling"
                className={`group w-full sm:w-auto ${outlineLightBtn}`}
              >
                Learn More
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Slider */}
        <RecoverySlider slides={slides} className="aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-full" />
      </div>
    </section>
  );
}
