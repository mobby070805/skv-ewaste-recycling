"use client";

import { useState } from "react";
import { PinIcon } from "@/components/ui/Icons";
import { offices } from "@/lib/site";

type Office = (typeof offices)[number];

const embedSrc = (o: Office) => `https://maps.google.com/maps?q=${encodeURIComponent(o.mapQuery)}&z=15&output=embed`;
const openHref = (o: Office) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`;
const directionsHref = (o: Office) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(o.mapQuery)}`;

/**
 * Map view of SKV's offices: a tab per office above an embedded Google map
 * that moves to the selected office, with its address and map links below.
 * The map is lazy-loaded, so it costs nothing until the section is near.
 */
export function OfficeMap() {
  const [active, setActive] = useState(0);
  const office = offices[active];

  return (
    <div className="overflow-hidden rounded-[0.9rem] border border-[#e3e1da] bg-[#fdfcf9] shadow-[0_24px_48px_-32px_rgba(1,52,28,0.35)]">
      <div role="tablist" aria-label="SKV offices" className="grid grid-cols-3 border-b border-[#e3e1da]">
        {offices.map((o, i) => {
          const selected = i === active;
          return (
            <button
              key={o.street}
              type="button"
              role="tab"
              id={`office-tab-${i}`}
              aria-selected={selected}
              aria-controls="office-panel"
              onClick={() => setActive(i)}
              className={`relative min-h-16 px-2 py-3 text-center font-display transition-colors sm:px-4 ${
                selected ? "bg-white text-[#0a5c1f]" : "text-[#4a5751] hover:bg-white/60 hover:text-[#0a5c1f]"
              } ${i > 0 ? "border-l border-[#e3e1da]" : ""}`}
            >
              <span className="block text-[0.66rem] font-bold tracking-[0.08em] uppercase opacity-80 sm:text-[0.7rem]">
                {o.city}
              </span>
              <span className="mt-0.5 block text-[0.82rem] leading-tight font-bold sm:text-[0.95rem]">{o.area}</span>
              {selected && <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] bg-[#3d9f25]" />}
            </button>
          );
        })}
      </div>

      <div id="office-panel" role="tabpanel" aria-labelledby={`office-tab-${active}`}>
        <div className="relative aspect-[4/3] bg-[#e9efe4] sm:aspect-[16/9]">
          <iframe
            key={office.street}
            title={`Map: SKV office, ${office.area}, ${office.city}`}
            src={embedSrc(office)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0"
          />
        </div>

        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
          <div className="flex gap-3">
            <PinIcon className="mt-0.5 size-5 shrink-0 text-[#3d9f25]" strokeWidth={1.8} />
            <div>
              <p className="font-display text-[0.98rem] font-bold text-[#172823]">
                {office.area}, {office.city}
              </p>
              <address className="mt-1 max-w-[26rem] text-[0.9rem] leading-[1.55] text-[#4a5751] not-italic">
                {office.lines.join(" ")}
              </address>
            </div>
          </div>
          <div className="flex shrink-0 gap-2.5 max-sm:[&>a]:flex-1 max-sm:[&>a]:justify-center">
            <a
              href={directionsHref(office)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#3d9f25] px-4 font-display text-[0.8rem] font-bold text-white transition-colors hover:bg-[#2f8a1b]"
            >
              Directions <span aria-hidden="true">→</span>
            </a>
            <a
              href={openHref(office)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-lg border-[1.5px] border-[#0a5c1f]/30 px-4 font-display text-[0.8rem] font-bold text-[#0a5c1f] transition-colors hover:border-[#0a5c1f]"
            >
              <span className="sm:hidden">Google Maps</span>
              <span className="max-sm:hidden">Open in Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
