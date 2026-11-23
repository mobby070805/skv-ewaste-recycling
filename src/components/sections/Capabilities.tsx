import Image from "next/image";
import type { ReactNode } from "react";
import recycling from "@/assets/images/hero-ewaste-scrap.webp";
import serverTech from "@/assets/images/itam-server-tech.webp";
import workstations from "@/assets/images/itam-workstations.webp";
import collection from "@/assets/images/process-collection.webp";
import hall from "@/assets/images/process-hall.webp";
import hdd from "@/assets/images/service-hdd.webp";
import office from "@/assets/images/service-office.webp";
import copper from "@/assets/images/sustain-copper.webp";
import erasure from "@/assets/images/svc-blancco.webp";
import { ArrowDisc, ButtonLink, pillClasses } from "@/components/ui/Button";
import { EnquiryLink } from "@/components/ui/EnquiryLink";
import { PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollScene } from "@/components/ui/ScrollScene";
import { offices, serviceSlug, site, type ServiceName } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Shared pieces                                                        */
/* ------------------------------------------------------------------ */

function ChapterLabel({
  n,
  children,
  tone = "light",
}: {
  n: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`label flex items-center gap-3 ${
        tone === "dark" ? "text-white/70" : "text-forest/65"
      }`}
    >
      <span className={tone === "dark" ? "text-lime" : "text-lime-deep"}>{n}</span>
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-40" />
      {children}
    </p>
  );
}

/** Invisible anchor so footer/hero links can target an individual service. */
function ServiceAnchor({ name }: { name: ServiceName }) {
  return <span id={`service-${serviceSlug(name)}`} className="block" />;
}

function ServiceCta({
  service,
  children,
  variant = "forest",
}: {
  service: ServiceName;
  children: ReactNode;
  variant?: "forest" | "lime" | "ivory";
}) {
  return (
    <EnquiryLink service={service} className={pillClasses(variant)}>
      <span>{children}</span>
      <ArrowDisc variant={variant} />
    </EnquiryLink>
  );
}

/* ------------------------------------------------------------------ */
/* 01 — E-Waste Recycling: full-bleed banner + handled-items band       */
/* ------------------------------------------------------------------ */

const handled = [
  "Computers",
  "Laptops",
  "Servers",
  "Monitors",
  "Circuit boards",
  "Electronic components",
  "Printers",
  "Networking equipment",
  "Storage media",
  "IT infrastructure",
  "Batteries, where applicable",
];

function Recycling() {
  return (
    <section id="recycling" aria-labelledby="recycling-heading" className="bg-charcoal text-white">
      <ServiceAnchor name="E-Waste Recycling" />
      <ScrollScene className="relative isolate flex min-h-[88svh] flex-col justify-end overflow-hidden lg:min-h-[96svh]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src={recycling}
            alt="Container of retired monitors, computers and printers collected for recycling"
            fill
            placeholder="blur"
            sizes="100vw"
            className="scene-img object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/55 to-charcoal/5" />
          <div className="absolute inset-0 bg-linear-to-r from-charcoal/60 to-transparent" />
        </div>

        <div className="shell pt-40 pb-14 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <ChapterLabel n="01" tone="dark">
                E-Waste Recycling
              </ChapterLabel>
              <h2 id="recycling-heading" className="h-chapter mt-6">
                Retired Electronics, <span className="accent">Responsibly Recycled.</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <p className="lede text-white/80">
                We collect, segregate and recycle computers, laptops, servers
                and electronic accessories in line with government
                regulations — recovering materials and keeping hazardous
                components out of landfill.
              </p>
              <div className="mt-8">
                <ServiceCta service="E-Waste Recycling" variant="lime">
                  Request a Pickup
                </ServiceCta>
              </div>
            </Reveal>
          </div>
        </div>
      </ScrollScene>

      <div className="shell pb-16 lg:pb-24">
        <Reveal className="border-t border-white/15 pt-10 lg:grid lg:grid-cols-12 lg:gap-10">
          <p className="label text-lime lg:col-span-3">What we handle</p>
          <p className="mt-5 font-display text-[clamp(1.2rem,0.9rem+1.1vw,1.7rem)] leading-[1.5] font-medium tracking-[-0.01em] text-white/85 lg:col-span-9 lg:mt-0">
            {handled.map((item, i) => (
              <span key={item}>
                <span className="whitespace-nowrap">{item}</span>
                {i < handled.length - 1 && (
                  <span aria-hidden="true" className="mx-3 text-lime">
                    /
                  </span>
                )}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 02 — Corporate IT Asset Management: split screen with inset photo    */
/* ------------------------------------------------------------------ */

const assetServices: { name: ServiceName; body: string }[] = [
  {
    name: "IT Asset Recovery",
    body: "Recover value from obsolete IT equipment through collection, evaluation, refurbishment, resale or recycling — with data security throughout.",
  },
  {
    name: "Desktop & Laptop Buyback",
    body: "Turn unused or outdated desktops and laptops into value, with fair valuation and secure data erasure.",
  },
  {
    name: "Infrastructure Disposal",
    body: "Secure decommissioning, removal and disposal of servers, networking devices, racks and cables.",
  },
];

function AssetManagement() {
  return (
    <section id="asset-management" aria-labelledby="itam-heading" className="bg-ivory">
      <div className="grid lg:grid-cols-2">
        <ScrollScene className="relative min-h-[26rem] overflow-hidden sm:min-h-[34rem] lg:min-h-full">
          <Image
            src={workstations}
            alt="Corporate office floor with rows of desktop workstations"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="scene-img object-cover"
          />
          <Reveal
            delay={150}
            className="absolute right-5 bottom-5 hidden w-[44%] max-w-[18rem] bg-ivory p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] sm:block lg:right-8 lg:bottom-8"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={serverTech}
                alt="Technician removing components from a server during decommissioning"
                fill
                placeholder="blur"
                sizes="18rem"
                className="object-cover"
              />
            </div>
            <p className="px-2 pt-3 pb-1 text-[0.8rem] text-muted">
              Server and infrastructure decommissioning
            </p>
          </Reveal>
        </ScrollScene>

        <div className="px-5 py-16 sm:px-8 sm:py-20 lg:py-28 lg:pr-[max(3.5rem,calc((100vw-88rem)/2+3.5rem))] lg:pl-16 xl:pl-20">
          <Reveal>
            <ChapterLabel n="02">Corporate IT Asset Management</ChapterLabel>
            <h2 id="itam-heading" className="h-section mt-6 max-w-[16ch] text-forest">
              Technology Has an End. <span className="accent">Its Value Doesn&rsquo;t.</span>
            </h2>
            <p className="lede mt-7 max-w-[34rem] text-graphite/80">
              When offices refresh, consolidate or relocate, SKV manages the
              retirement of IT assets from one point of contact — recovering
              value where it exists and disposing of the rest responsibly.
            </p>
          </Reveal>
          <div className="mt-10 space-y-8">
            {assetServices.map((s, i) => (
              <Reveal key={s.name} delay={i * 90} className="relative flex gap-5">
                <span id={`service-${serviceSlug(s.name)}`} className="absolute top-0" />
                <span className="mt-1 font-display text-[0.8rem] font-semibold text-lime-deep tabular-nums">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-[1.15rem] font-semibold tracking-[-0.01em] text-forest">
                    {s.name}
                  </h3>
                  <p className="mt-1.5 max-w-[30rem] leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-11">
            <ServiceCta service="IT Asset Recovery">Get an Asset Valuation</ServiceCta>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 03 — IT Office Demolition: image bleeds right, forest card overlaps  */
/* ------------------------------------------------------------------ */

function OfficeDemolition() {
  return (
    <section id="office-demolition" aria-labelledby="demolition-heading" className="overflow-hidden bg-white py-16 lg:py-28">
      <ServiceAnchor name="IT Office Demolition" />
      <div className="relative">
        <ScrollScene className="relative ml-auto h-[22rem] overflow-hidden sm:h-[30rem] lg:h-[42rem] lg:w-[68%]">
          <Image
            src={office}
            alt="Open-plan corporate office with glass partitions ready for decommissioning"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 68vw, 100vw"
            className="scene-img object-cover"
          />
        </ScrollScene>

        <div className="shell lg:absolute lg:inset-0 lg:flex lg:items-center">
          <Reveal className="relative -mt-20 bg-forest px-7 py-10 text-white shadow-[0_40px_80px_-40px_rgba(15,46,36,0.8)] sm:mx-8 sm:px-10 lg:mx-0 lg:mt-0 lg:w-[44%] lg:px-12 lg:py-14">
            <ChapterLabel n="03" tone="dark">
              IT Office Demolition
            </ChapterLabel>
            <h2 id="demolition-heading" className="h-section mt-6">
              Clear Workspaces, <span className="accent">Handled Professionally.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-white/75">
              Safe, professional dismantling for corporate offices, IT parks
              and commercial workspaces — interiors, partitions, ceilings,
              cabling and flooring removed, with eco-friendly disposal of the
              waste and responsible recycling of the IT equipment inside.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {["Partitions & ceilings", "Cabling & flooring", "Workstations", "IT equipment"].map(
                (t) => (
                  <li
                    key={t}
                    className="rounded-full bg-white/10 px-3.5 py-1.5 text-[0.82rem] text-white/85"
                  >
                    {t}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-9">
              <ServiceCta service="IT Office Demolition" variant="lime">
                Plan an Office Clearance
              </ServiceCta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 04 + 05 — HDD Degaussing & Data Destruction: dark diptych            */
/* ------------------------------------------------------------------ */

const chain = [
  "Asset verification",
  "Secure handling",
  "Degaussing, erasure or destruction",
  "Audit-ready documentation",
];

function DataSecurity() {
  return (
    <section id="data-security" aria-labelledby="data-heading" className="grain bg-charcoal text-white">
      <div className="shell section-y">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <Reveal className="lg:col-span-7">
            <ChapterLabel n="04 — 05" tone="dark">
              Data Security
            </ChapterLabel>
            <h2 id="data-heading" className="h-chapter mt-6">
              Your Data Deserves <span className="accent">a Secure End of Life.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <p className="lede text-white/75">
              Retired drives, laptops and servers can still hold customer,
              employee and financial data. SKV permanently removes it before
              equipment is reused or recycled — using the method suited to
              each device.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {/* HDD Degaussing */}
          <Reveal as="article">
            <ServiceAnchor name="HDD Degaussing" />
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={hdd}
                alt="Opened hard disk drive platter and actuator arm"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <span className="label absolute top-5 left-5 rounded-full bg-charcoal/70 px-3 py-1.5 text-lime backdrop-blur-sm">
                04 · HDD Degaussing
              </span>
            </div>
            <h3 className="mt-8 font-display text-[1.6rem] font-semibold tracking-[-0.02em]">
              Magnetic erasure for hard drives
            </h3>
            <p className="mt-3 max-w-[34rem] leading-relaxed text-white/70">
              Powerful degaussing equipment applies a high-strength magnetic
              field to hard disk drives and magnetic storage media, making
              the data they hold unrecoverable. Suited to drives that will not
              be reused.
            </p>
            <div className="mt-8">
              <ServiceCta service="HDD Degaussing" variant="lime">
                Enquire About Degaussing
              </ServiceCta>
            </div>
          </Reveal>

          {/* Data Destruction */}
          <Reveal as="article" delay={120} className="lg:mt-24">
            <ServiceAnchor name="Blancco Data Erasing" />
            <ServiceAnchor name="Data Sanitization" />
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={erasure}
                alt="Laptop displaying a command-line screen during data erasure"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <span className="label absolute top-5 left-5 rounded-full bg-charcoal/70 px-3 py-1.5 text-lime backdrop-blur-sm">
                05 · Data Destruction
              </span>
            </div>
            <h3 className="mt-8 font-display text-[1.6rem] font-semibold tracking-[-0.02em]">
              Certified erasure &amp; drive destruction
            </h3>
            <p className="mt-3 max-w-[34rem] leading-relaxed text-white/70">
              Blancco and Stellar erasure for HDDs, SSDs, laptops and servers
              intended for reuse — with a report, certificate and audit trail
              for every erased device. Drives at end of life are physically
              destroyed by shredding or crushing.
            </p>
            <div className="mt-8">
              <ServiceCta service="Blancco Data Erasing" variant="ivory">
                Request Data Erasure
              </ServiceCta>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 rounded-[1.25rem] bg-white/[0.05] p-7 lg:mt-20 lg:flex lg:items-center lg:gap-10 lg:p-9">
          <p className="label shrink-0 text-lime">How every device is handled</p>
          <ol className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 lg:mt-0">
            {chain.map((c, i) => (
              <li key={c} className="flex items-center gap-4 text-[0.98rem] text-white/85">
                <span className="grid size-7 place-items-center rounded-full bg-lime font-display text-[0.72rem] font-semibold text-forest-deep">
                  {i + 1}
                </span>
                {c}
                {i < chain.length - 1 && (
                  <span aria-hidden="true" className="hidden h-px w-8 bg-white/25 sm:block" />
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 06 — Electronic Waste Collection: wide banner with location card     */
/* ------------------------------------------------------------------ */

function Collection() {
  return (
    <section id="collection" aria-labelledby="collection-heading" className="bg-ivory py-5 sm:py-8">
      <ScrollScene className="relative isolate mx-auto w-[calc(100%-1.5rem)] overflow-hidden rounded-[1.5rem] sm:w-[calc(100%-3rem)] lg:rounded-[2rem]">
        <div className="absolute inset-0 -z-10">
          <Image
            src={collection}
            alt="Forklift moving palletised goods through a warehouse aisle"
            fill
            placeholder="blur"
            sizes="100vw"
            className="scene-img object-cover object-[center_60%]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-forest-deep/95 via-forest-deep/70 to-forest-deep/10" />
        </div>
        <div className="grid min-h-[38rem] gap-10 px-6 py-14 text-white sm:px-10 lg:min-h-[44rem] lg:grid-cols-12 lg:items-center lg:px-16 lg:py-20">
          <Reveal className="lg:col-span-6">
            <ChapterLabel n="06" tone="dark">
              Electronic Waste Collection
            </ChapterLabel>
            <h2 id="collection-heading" className="h-chapter mt-6">
              We Come to You. <span className="accent">Anywhere You Operate.</span>
            </h2>
            <p className="lede mt-7 max-w-[32rem] text-white/80">
              Reliable e-waste collection and removal for computers, laptops,
              servers and peripherals — from a single office to multiple
              sites — with transport and compliant handling arranged by our
              team.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/#enquiry" variant="lime">
                Schedule a Collection
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline-light" arrow={false}>
                <PhoneIcon className="size-4" /> {site.phoneDisplay}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal
            delay={150}
            className="rounded-[1.25rem] bg-ivory/95 p-7 text-graphite backdrop-blur-md lg:col-span-5 lg:col-start-8 lg:p-9"
          >
            <p className="label text-lime-deep">Collection hubs</p>
            <ul className="mt-6 space-y-6">
              {offices.map((o) => (
                <li key={o.street} className="flex gap-4">
                  <PinIcon className="mt-0.5 size-5 shrink-0 text-forest" />
                  <div>
                    <p className="font-display font-semibold text-forest">
                      {o.city} — {o.area}
                    </p>
                    <p className="mt-1 text-[0.88rem] leading-relaxed text-muted">
                      {o.lines.join(" ")}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </ScrollScene>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 07 — Industrial Processing: panoramic image + four stages            */
/* ------------------------------------------------------------------ */

const stages = [
  ["Collection", "E-waste is collected from your premises and transported securely for processing."],
  ["Dismantling", "Equipment is taken apart to separate boards, metals, plastics and storage media, with hazardous parts isolated."],
  ["Segregation", "Materials are sorted into streams so that each — reusable parts, metals, plastics, hazardous fractions — is handled correctly."],
  ["Recycling & Recovery", "Components and materials are given new purposes; the remainder goes for environmentally sound recycling."],
];

function Processing() {
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-ivory">
      <div className="shell pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <ChapterLabel n="07">Industrial Processing</ChapterLabel>
            <h2 id="process-heading" className="h-section mt-6 text-forest">
              From Collection <span className="accent">to Responsible Recycling.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed text-muted">
              A clear, four-stage process gives facilities, IT and compliance
              teams confidence about what happens to equipment after it
              leaves the building.
            </p>
          </Reveal>
        </div>

        <ScrollScene className="relative mt-12 aspect-[16/10] overflow-hidden rounded-[1.25rem] sm:aspect-[21/9] lg:mt-16 lg:rounded-[1.75rem]">
          <Image
            src={hall}
            alt="Interior of a heavy industrial processing hall with overhead cranes"
            fill
            placeholder="blur"
            sizes="(min-width: 1408px) 81rem, 100vw"
            className="scene-img object-cover"
          />
        </ScrollScene>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {stages.map(([title, body], i) => (
            <Reveal as="li" key={title} delay={i * 90}>
              <span className="font-display text-[3.25rem] leading-none font-semibold tracking-[-0.05em] text-lime-deep/35 tabular-nums">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-[1.2rem] font-semibold tracking-[-0.01em] text-forest">
                {title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 08 — Resource Recovery: pinned image, narrative scrolls beside it    */
/* ------------------------------------------------------------------ */

const principles = [
  ["Recover what can be reused", "Electronics contain metals, plastics and components that can be recovered and returned to use rather than discarded."],
  ["Keep hazardous materials contained", "Parts of electronic equipment are hazardous if handled carelessly. Responsible recycling keeps them out of general waste."],
  ["Reduce what reaches landfill", "Every device that is properly recycled is one less item contributing to pollution and landfill."],
];

function Recovery() {
  return (
    <section id="recovery" aria-labelledby="recovery-heading" className="bg-forest-deep text-white">
      <div className="lg:grid lg:grid-cols-2">
        <div className="relative h-[60svh] lg:sticky lg:top-0 lg:h-screen">
          <Image
            src={copper}
            alt="Stacks of recovered copper sheets on pallets"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-forest-deep/80 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-forest-deep/40" />
        </div>
        <div className="px-5 py-16 sm:px-8 lg:py-32 lg:pr-[max(3.5rem,calc((100vw-88rem)/2+3.5rem))] lg:pl-16 xl:pl-20">
          <Reveal>
            <ChapterLabel n="08" tone="dark">
              Resource Recovery
            </ChapterLabel>
            <h2 id="recovery-heading" className="h-chapter mt-6">
              Recover More. <span className="accent">Waste Less.</span>
            </h2>
            <p className="lede mt-7 max-w-[32rem] text-white/75">
              Recycling end-of-life electronics reduces pollution and conserves
              the energy and raw materials needed to manufacture new products.
              Metals such as copper are among the materials that can be
              recovered.
            </p>
          </Reveal>
          <ol className="mt-14 space-y-12 lg:mt-24 lg:space-y-24">
            {principles.map(([title, body], i) => (
              <Reveal as="li" key={title}>
                <span className="font-display text-[0.8rem] font-semibold text-lime tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-[1.6rem] leading-tight font-semibold tracking-[-0.02em] lg:text-[2rem]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[30rem] leading-relaxed text-white/70">{body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** The eight photographic capability chapters, in order. */
export function Capabilities() {
  return (
    <div id="services">
      <Recycling />
      <AssetManagement />
      <OfficeDemolition />
      <DataSecurity />
      <Collection />
      <Processing />
      <Recovery />
    </div>
  );
}
