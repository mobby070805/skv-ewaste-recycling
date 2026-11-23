import { serviceNames } from "@/lib/site";

/** Slow-moving band of service names. Decorative; the services are listed in full above. */
export function ServiceTicker() {
  const items = [...serviceNames, "Drive Destruction", "E-Waste Collection & Removal"];
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((name, i) => (
        <li key={name} className="flex items-center">
          <span
            className={`px-8 font-display text-[clamp(1.6rem,1rem+2.4vw,3rem)] font-semibold tracking-[-0.03em] whitespace-nowrap ${
              i % 2 === 1 ? "numeral-outline text-forest/45 [line-height:1.2]" : "text-forest"
            }`}
          >
            {name}
          </span>
          <span aria-hidden="true" className="size-2.5 rotate-45 bg-lime" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="ticker overflow-hidden border-y border-line bg-paper py-7 lg:py-9">
      <p className="sr-only">Services: {items.join(", ")}.</p>
      <div aria-hidden="true" className="ticker-track flex w-max">
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}
