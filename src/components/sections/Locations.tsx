import { MailIcon, PhoneIcon } from "@/components/ui/Icons";
import { OfficeMap } from "@/components/ui/OfficeMap";
import { Eyebrow, Heading, Lede, bg, container, sectionY } from "@/components/ui/Section";
import { site } from "@/lib/site";

export function Locations() {
  return (
    <section id="locations" aria-labelledby="locations-heading" className={`${bg.ivory} ${sectionY}`}>
      <div className={`${container} grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16 xl:gap-24`}>
        <div>
          <Eyebrow>Locations</Eyebrow>
          <Heading id="locations-heading">Find us in Chennai and Mumbai.</Heading>
          <Lede>
            Three offices coordinate pickups in and around both cities. Somewhere
            else? Ask us and we’ll discuss what’s possible.
          </Lede>
          <ul className="mt-9 space-y-4 font-display text-[0.98rem] font-bold text-[#172823]">
            <li>
              <a href={site.phoneHref} className="inline-flex min-h-11 items-center gap-3 hover:text-[#0a5c1f]">
                <PhoneIcon className="size-5 text-[#0a5c1f]" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center gap-3 hover:text-[#0a5c1f]">
                <MailIcon className="size-5 text-[#0a5c1f]" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <OfficeMap />
      </div>
    </section>
  );
}
