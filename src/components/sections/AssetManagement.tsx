import Image from "next/image";
import tech from "@/assets/images/itam-server-tech.webp";
import buyback from "@/assets/images/svc-buyback.webp";
import { EnquiryLink } from "@/components/ui/EnquiryLink";
import { IconTile, type TileTone } from "@/components/ui/IconTile";
import { CalendarCheckIcon, DocumentIcon, ShieldIcon, UsersIcon } from "@/components/ui/Icons";
import { Arrow, Eyebrow, Heading, Lede, bg, container, primaryBtn, sectionY } from "@/components/ui/Section";

const steps: { title: string; body: string; Icon: typeof UsersIcon; tone: TileTone }[] = [
  {
    title: "One point of contact",
    Icon: UsersIcon,
    tone: "teal",
    body: "A single team coordinates every pickup and handover, across all your sites.",
  },
  {
    title: "Data dealt with first",
    Icon: ShieldIcon,
    tone: "purple",
    body: "Drives are erased or destroyed before equipment is reused or recycled.",
  },
  {
    title: "Planned around you",
    Icon: CalendarCheckIcon,
    tone: "blue",
    body: "Removals are scheduled so your teams keep working.",
  },
  {
    title: "Audit-ready records",
    Icon: DocumentIcon,
    tone: "peach",
    body: "Reports and certificates for every erased device.",
  },
];

export function AssetManagement() {
  return (
    <section id="it-asset-management" aria-labelledby="itam-heading" className={`${bg.ivory} ${sectionY}`}>
      <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24`}>
        <div>
          <Eyebrow>Corporate IT asset management</Eyebrow>
          <Heading id="itam-heading">
            Retire IT assets with control, security and value.
          </Heading>
          <Lede>
            Refreshing laptops, closing a floor or ending a lease? We manage the
            retirement of your IT equipment from planning to final certificate.
          </Lede>

          <ol className="mt-8 grid grid-cols-2 gap-x-4 sm:mt-9 sm:gap-x-8">
            {steps.map((s) => (
              <li key={s.title} className="border-t border-[#dcd9d0] py-5 sm:py-6">
                <IconTile Icon={s.Icon} tone={s.tone} />
                <p className="mt-3 font-display text-[0.95rem] leading-snug font-bold text-[#172823] sm:mt-4 sm:text-[1.02rem]">{s.title}</p>
                <p className="mt-1.5 text-[0.82rem] leading-[1.5] text-[#4a5751] sm:text-[0.92rem] sm:leading-[1.6]">{s.body}</p>
              </li>
            ))}
          </ol>

          <EnquiryLink service="IT Asset Recovery" className={`${primaryBtn} mt-8 w-full sm:w-auto`}>
            Plan an IT Asset Disposal <Arrow />
          </EnquiryLink>
        </div>

        <div className="relative sm:pb-14 lg:pb-16">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[0.6rem] sm:aspect-[5/4]">
            <Image
              src={tech}
              alt="Technician working on a server inside an equipment rack"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[60%_45%]"
            />
          </div>
          <div className="absolute bottom-0 left-0 hidden w-[44%] overflow-hidden sm:block rounded-[0.6rem] border-[6px] border-[#faf8f3] shadow-[0_24px_40px_-24px_rgba(1,52,28,0.55)] sm:left-6 lg:-left-6 xl:-left-10">
            <div className="relative aspect-[4/3]">
              <Image
                src={buyback}
                alt="Laptop opened up for inspection and data erasure"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 20vw, 44vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
