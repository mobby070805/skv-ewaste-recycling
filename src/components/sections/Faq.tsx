import { Arrow, Eyebrow, Heading, Lede, bg, container, outlineBtn, sectionY } from "@/components/ui/Section";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className={`${bg.sand} ${sectionY}`}>
      <div className={`${container} grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24`}>
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>FAQs</Eyebrow>
          <Heading id="faq-heading">Questions businesses ask before a pickup.</Heading>
          <Lede>
            {"Can't find your answer? Call us on "}
            <a href={site.phoneHref} className="font-semibold whitespace-nowrap text-[#0a5c1f] underline underline-offset-4">
              {site.phoneDisplay}
            </a>
            {" or send an enquiry."}
          </Lede>
          <a href="#enquiry" className={`${outlineBtn} mt-8 w-full sm:w-auto`}>
            Ask Our Team <Arrow />
          </a>
        </div>

        <div className="border-t border-[#d6d3c9]">
          {faqs.map((f, i) => (
            <details key={f.q} name="faq" open={i === 0} className="group border-b border-[#d6d3c9]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-[1rem] leading-snug font-bold text-[#172823] transition-colors hover:text-[#0a6a22] lg:py-6 lg:text-[1.08rem] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="relative grid size-8 shrink-0 place-items-center rounded-full border-[1.5px] border-[#0a5c1f]/40 text-[#0a5c1f] transition-colors group-open:border-[#0a5c1f] group-open:bg-[#0a5c1f] group-open:text-white"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-3.5 transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
                  >
                    <path d="M3.5 6 8 10.5 12.5 6" />
                  </svg>
                </span>
              </summary>
              <p className="max-w-[44rem] pr-12 pb-6 text-[0.98rem] leading-[1.7] text-[#3a4842]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
