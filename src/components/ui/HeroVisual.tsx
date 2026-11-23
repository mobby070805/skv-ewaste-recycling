import Image from "next/image";
import artwork from "@/assets/images/hero-skv-recycle.webp";

/*
 * Angled photo frame: a parallelogram with rounded corners in a 3 : 2 box
 * (150 × 100 units; both long edges slope 0.44, the approved angle). The
 * outline is pre-sampled so CSS can clip the optimised <Image> with it.
 */
const FRAME =
  "polygon(27.72% 5.49%, 28.16% 4.2%, 28.68% 3.09%, 29.27% 2.15%, 29.93% 1.37%, 30.67% 0.77%, 31.48% 0.34%, 32.37% 0.09%, 33.33% 0%, 97% 0%, 97.68% 0.06%, 98.24% 0.26%, 98.66% 0.58%, 98.95% 1.03%, 99.11% 1.61%, 99.13% 2.32%, 99.03% 3.15%, 98.79% 4.12%, 72.28% 94.51%, 71.84% 95.8%, 71.32% 96.91%, 70.73% 97.85%, 70.07% 98.63%, 69.33% 99.23%, 68.52% 99.66%, 67.63% 99.91%, 66.67% 100%, 3% 100%, 2.32% 99.94%, 1.76% 99.74%, 1.34% 99.42%, 1.05% 98.97%, 0.89% 98.39%, 0.87% 97.68%, 0.97% 96.85%, 1.21% 95.88%)";

/**
 * Right-hand hero composition: the SKV eco-recycling artwork in an angled,
 * rounded frame, with two green bands behind its left edge and one under its
 * bottom edge. Fills the width of its column. Decorative only.
 */
export function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`relative aspect-[3/2] ${className}`}>
      <svg viewBox="0 0 150 100" className="absolute inset-0 size-full overflow-visible">
        <defs>
          <linearGradient id="hero-band-light" gradientUnits="userSpaceOnUse" x1="0" y1="4.3" x2="0" y2="40">
            <stop offset="0" stopColor="#91c46c" />
            <stop offset="1" stopColor="#91c46c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-band-dark" gradientUnits="userSpaceOnUse" x1="0" y1="14.6" x2="0" y2="58">
            <stop offset="0" stopColor="#53965c" />
            <stop offset="0.4" stopColor="#53965c" />
            <stop offset="1" stopColor="#53965c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-band-base" gradientUnits="userSpaceOnUse" x1="20" y1="0" x2="100" y2="0">
            <stop offset="0" stopColor="#93c86e" stopOpacity="0" />
            <stop offset="1" stopColor="#93c86e" />
          </linearGradient>
        </defs>
        <path d="M 15.8 9.3 Q 18 4.3 23.5 4.3 L 120 4.3 L 120 60 L -6.5 60 Z" fill="url(#hero-band-light)" />
        <path d="M 26.8 19.2 Q 28.8 14.6 33.8 14.6 L 120 14.6 L 120 80 L 0 80 Z" fill="url(#hero-band-dark)" />
        {/* Base band: tucked under the frame so only its rounded tip shows past the corner */}
        <path d="M 40 90 L 106.4 90 L 101.6 100.9 Q 100.2 104.1 96.7 104.1 L 40 104.1 Z" fill="url(#hero-band-base)" />
      </svg>

      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: FRAME }}>
        <Image
          src={artwork}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
