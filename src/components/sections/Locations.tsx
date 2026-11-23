import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { Eyebrow, Heading, Lede, bg, container, sectionY } from "@/components/ui/Section";
import { offices, site } from "@/lib/site";

const mapHref = (o: (typeof offices)[number]) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.legalName}, ${o.street}, ${o.locality} ${o.postalCode}`,
  )}`;

const cities = ["Chennai", "Mumbai"] as const;

export function Locations() {
  return (
    <section id="locations" aria-labelledby="locations-heading" className={`${bg.ivory} ${sectionY}`}>
      <div className={`${container} grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24`}>
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

        <div className="swipe-row relative grid gap-5 sm:grid-cols-2">
          {cities.map((city) => (
            <div key={city} className="rounded-[0.6rem] border border-[#e3e1da] bg-[#fdfcf9] p-6 lg:p-8">
              <h3 className="flex items-center gap-3 font-display text-[1.5rem] font-extrabold tracking-[-0.015em] text-[#0a6a22]">
                <PinIcon className="size-6 text-[#3d9f25]" strokeWidth={1.8} />
                {city}
              </h3>
              <ul className="mt-2">
                {offices
                  .filter((o) => o.city === city)
                  .map((o) => (
                    <li key={o.street} className="border-t border-[#e7e4dc] pt-5 not-first:mt-5 first:mt-4">
                      <p className="font-display text-[0.95rem] font-bold text-[#172823]">{o.area}</p>
                      <address className="mt-2 text-[0.92rem] leading-[1.6] text-[#4a5751] not-italic">
                        {o.lines.join(" ")}
                      </address>
                      <a
                        href={mapHref(o)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex min-h-11 items-center gap-2 font-display text-[0.84rem] font-bold text-[#0a5c1f] hover:text-[#01341c]"
                      >
                        View on map <span aria-hidden="true">→</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
