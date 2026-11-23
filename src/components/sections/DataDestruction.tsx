import Image from "next/image";
import hdd from "@/assets/images/data-hdd-dark.webp";
import { EnquiryLink } from "@/components/ui/EnquiryLink";
import { IconTile, type TileTone } from "@/components/ui/IconTile";
import { DriveEraseIcon, MagnetIcon, ShredIcon } from "@/components/ui/Icons";
import { Arrow, Eyebrow, Heading, Lede, bg, container, lightBtn, sectionY } from "@/components/ui/Section";

/** Methods described on SKV's HDD degaussing and data destruction pages. */
const methods: { title: string; body: string; Icon: typeof MagnetIcon; tone: TileTone }[] = [
  {
    title: "HDD degaussing",
    Icon: MagnetIcon,
    tone: "blue",
    body: "A powerful magnetic field wipes the platters beyond recovery. Best for drives that won’t be reused.",
  },
  {
    title: "Certified software erasure",
    Icon: DriveEraseIcon,
    tone: "teal",
    body: "Blancco and Stellar tools clean devices so they can be reused or resold.",
  },
  {
    title: "Physical destruction",
    Icon: ShredIcon,
    tone: "yellow",
    body: "Shredding or crushing for media that must be destroyed outright.",
  },
];

const steps = ["Asset verification", "Secure handling", "Degaussing / erasure", "Documented destruction"];

export function DataDestruction() {
  return (
    <section id="data-security" aria-labelledby="data-heading" className={`${bg.forest} ${sectionY}`}>
      <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24`}>
        <div className="relative order-last aspect-[4/5] overflow-hidden lg:order-first rounded-[0.6rem] sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src={hdd}
            alt="Close-up of an open hard disk drive platter"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[50%_40%]"
          />
          {/* Process strip on the photo */}
          <ol className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-px bg-[#01341c]/70 backdrop-blur-sm sm:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s} className="bg-[#01341c]/80 px-4 py-3.5">
                <span className="block font-display text-[0.72rem] font-bold text-[#8fd36f] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-0.5 block font-display text-[0.8rem] leading-snug font-semibold text-white">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <Eyebrow dark>HDD degaussing &amp; data destruction</Eyebrow>
          <Heading id="data-heading" dark>
            Data destruction you can prove to an auditor.
          </Heading>
          <Lede dark>
            Pick the method that suits the device. We carry it out under
            controlled conditions and document the result.
          </Lede>

          <ul className="mt-9 space-y-6">
            {methods.map((m) => (
              <li key={m.title} className="flex gap-5 border-t border-white/15 pt-6">
                <IconTile Icon={m.Icon} tone={m.tone} dark />
                <div>
                  <h3 className="font-display text-[1.08rem] font-bold text-white">{m.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-[1.62] text-white/75">{m.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <EnquiryLink service="HDD Degaussing" className={`${lightBtn} mt-10`}>
            Request Data Destruction <Arrow />
          </EnquiryLink>
        </div>
      </div>
    </section>
  );
}
