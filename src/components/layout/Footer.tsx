import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/skv-logo.webp";
import { container } from "@/components/ui/Section";
import {
  certifications,
  navLinks,
  serviceNames,
  serviceSlug,
  site,
} from "@/lib/site";

type LogoProps = { className?: string };

const FacebookLogo = ({ className }: LogoProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.5 21.95V14h2.7l.4-3.1h-3.1V8.92c0-.9.25-1.5 1.54-1.5h1.65V4.64A22 22 0 0 0 14.28 4.5c-2.39 0-4.03 1.46-4.03 4.14v2.28H7.55V14h2.7v7.95a10 10 0 1 1 3.25 0Z" />
  </svg>
);

const InstagramLogo = ({ className }: LogoProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5.2" />
    <circle cx="12" cy="12" r="4.1" />
    <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
  </svg>
);

const socialLogos: Record<string, (p: LogoProps) => React.JSX.Element> = {
  Facebook: FacebookLogo,
  Instagram: InstagramLogo,
};

const heading = "font-display text-[0.7rem] font-bold tracking-[0.08em] text-[#0a5c1f] uppercase";
const linkCls = "inline-block py-1.5 text-[0.94rem] text-[#3c4a43] transition-colors hover:text-[#3d9f25] lg:py-0";

/** Phones show only the four core services (same as the Core Services section). */
const coreServices = new Set<string>(["E-Waste Recycling", "IT Office Demolition", "HDD Degaussing", "IT Asset Recovery"]);

/** Phones show four links per column: "desktopOnly" ones and Home (the logo links home) are hidden there. */
const usefulLinks = [
  { label: "What We Recycle", href: "/#what-we-recycle" },
  { label: "IT Asset Management", href: "/#it-asset-management", desktopOnly: true },
  { label: "Data Destruction", href: "/#service-data-sanitisation" },
  { label: "Recycling Process", href: "/#process", desktopOnly: true },
  { label: "Locations", href: "/#locations" },
  { label: "FAQs", href: "/#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e6e3da] bg-[#faf8f3] text-[#14231d]">
      <div className={`${container} py-16 lg:py-20`}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="col-span-2 lg:col-span-4">
            <Link
              href="/#top"
              aria-label={`${site.name} — back to top`}
              className="inline-block"
            >
              <Image src={logo} alt={site.legalName} sizes="220px" className="h-10 w-auto" />
            </Link>
            <p className="mt-6 max-w-[24rem] text-[0.94rem] leading-[1.65] text-[#3c4a43]">
              Corporate e-waste collection, recycling, IT asset disposal, HDD
              degaussing and data destruction for businesses in Chennai and
              Mumbai.
            </p>
            <p className="mt-5 flex items-center gap-3 font-display text-[0.78rem] font-bold text-[#14231d]">
              <span aria-hidden="true" className="h-[2px] w-6 bg-[#5bbd3c]" />
              {certifications.join(" · ")} certified
            </p>
          </div>

          <nav aria-label="Footer — services" className="col-span-2 sm:col-span-1 lg:col-span-3">
            <h2 className={heading}>Services</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 sm:block sm:space-y-0.5 lg:mt-5 lg:space-y-3">
              {serviceNames.map((name) => (
                <li key={name} className={coreServices.has(name) ? "" : "max-md:hidden"}>
                  <Link href={`/#service-${serviceSlug(name)}`} className={linkCls}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — company" className="lg:col-span-2">
            <h2 className={heading}>Company</h2>
            <ul className="mt-4 space-y-0.5 lg:mt-5 lg:space-y-3">
              {navLinks.map((l) => (
                <li key={l.href} className={l.label === "Home" ? "max-md:hidden" : ""}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — useful links" className="lg:col-span-3">
            <h2 className={heading}>Explore</h2>
            <ul className="mt-4 space-y-0.5 lg:mt-5 lg:space-y-3">
              {usefulLinks.map((l) => (
                <li key={l.href} className={"desktopOnly" in l ? "max-md:hidden" : ""}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#e6e3da] pt-8 text-[0.85rem] text-[#5a6660] md:flex-row md:items-center md:justify-between">
          <p>© 2026 {site.legalName} All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <ul aria-label="Follow us" className="flex gap-2.5">
                {site.social.map((s) => {
                  const Logo = socialLogos[s.label];
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`SKV on ${s.label}`}
                        title={s.label}
                        className="grid size-11 place-items-center rounded-full bg-[#e5f3d7] text-[#1d5e33] transition-colors hover:bg-[#3d9f25] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d9f25]"
                      >
                        <Logo className="size-5" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-[#3d9f25]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:text-[#3d9f25]">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
