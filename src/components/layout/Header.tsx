"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/assets/images/skv-logo.webp";
import { LeafIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { certifications, enquiryHref, navLinks, site, whatsappHref } from "@/lib/site";

/** Utility bar + main navigation, as in the approved homepage design. */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("/#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section in view.
  useEffect(() => {
    const targets = navLinks
      .map((l) => document.getElementById(l.href.replace("/#", "")))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`/#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    document.body.style.overflow = "";
    setOpen(false);
  };

  return (
    <>
      {/* Phones: one-line utility bar (scrolls away) */}
      <div className="bg-[#032b17] font-[family-name:var(--font-hero)] text-white md:hidden">
        <p className="flex h-9 items-center justify-center gap-2 px-3 text-[0.7rem] font-medium tracking-[-0.005em] min-[400px]:text-[0.74rem]">
          <LeafIcon className="size-4 shrink-0 text-[#8fd33a]" strokeWidth={2} />
          <span className="truncate">Corporate e-waste collection across Chennai &amp; Mumbai</span>
        </p>
      </div>

      {/* Utility bar (scrolls away) */}
      <div className="hidden bg-[#014e2c] font-[family-name:var(--font-hero)] text-white md:block">
        <div className="mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-[max(4vw,calc((100vw_-_95rem)/2))] 2xl:px-[max(5vw,calc((100vw_-_95rem)/2))] flex h-10 items-center justify-between text-[0.75rem] font-medium">
          <p className="flex items-center gap-3">
            <span aria-hidden="true" className="size-[0.4rem] rounded-full bg-[#4cc23a]" />
            <span>Corporate e-waste collection across Chennai &amp; Mumbai</span>
            <span aria-hidden="true" className="hidden px-1 text-white/70 lg:inline">|</span>
            <span className="hidden lg:inline">{certifications.join(" · ")} certified</span>
          </p>
          <p className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-[#b9e3a7]">
              <MailIcon className="size-[0.95rem]" />
              {site.email}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#b9e3a7]"
            >
              <WhatsAppIcon className="size-[0.95rem]" />
              WhatsApp
            </a>
          </p>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-[#faf8f3] font-[family-name:var(--font-hero)] transition-shadow duration-300 ${
          scrolled && !open ? "shadow-[0_1px_0_rgba(0,0,0,0.05),0_10px_30px_-20px_rgba(1,52,28,0.35)]" : ""
        }`}
      >
        <div className="mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-[max(4vw,calc((100vw_-_95rem)/2))] 2xl:px-[max(5vw,calc((100vw_-_95rem)/2))] flex h-[4.5rem] items-center justify-between gap-3 sm:gap-5 lg:h-[5.6rem] xl:h-[min(5.4vw,6.5rem)]">
          <Link
            href="/#top"
            aria-label={`${site.name} — home`}
            className="relative z-50 block shrink-0"
            onClick={close}
          >
            <Image
              src={logo}
              alt={site.legalName}
              loading="eager"
              unoptimized
              className="h-[1.85rem] w-auto min-[400px]:h-9 sm:h-10 lg:h-[2.6rem] xl:h-[min(3.1vw,3.75rem)]"
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-[1.25rem] xl:gap-[min(2vw,2.6rem)]">
              {navLinks.map((link) => {
                const on = active === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={on ? "location" : undefined}
                      className={`relative block py-2 text-[0.8rem] font-semibold whitespace-nowrap text-[#14231d] xl:text-[length:min(0.84vw,1.05rem)] transition-colors hover:text-[#0a5c1f] after:absolute after:inset-x-0 after:-bottom-[0.55rem] after:h-[3px] after:rounded-full after:bg-[#3d9f25] after:transition-transform after:duration-300 ${
                        on ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-[1.1rem] xl:gap-[min(2.2vw,2.8rem)]">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-[0.84rem] font-bold whitespace-nowrap text-[#14231d] hover:text-[#0a5c1f] lg:flex xl:text-[length:min(0.88vw,1.1rem)]"
            >
              <PhoneIcon className="size-4 fill-[#172823]" />
              {site.phoneDisplay}
            </a>
            <a
              href={enquiryHref}
              onClick={close}
              className="relative z-50 hidden h-10 shrink-0 items-center gap-1.5 rounded-md whitespace-nowrap bg-[#3d9f25] px-[0.9rem] text-[0.72rem] font-bold tracking-[0.03em] text-white uppercase shadow-[0_8px_18px_-10px_rgba(1,52,28,0.7)] transition-colors hover:bg-[#2f8a1b] sm:inline-flex xl:h-[min(2.95vw,3.6rem)] xl:gap-2.5 xl:rounded-lg xl:px-[min(1.75vw,2.1rem)] xl:text-[length:min(0.8vw,0.98rem)]"
            >
              Request a Pickup
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={enquiryHref}
              onClick={close}
              className="relative z-50 inline-flex h-11 items-center rounded-xl bg-[#3d9f25] px-3.5 text-[0.76rem] font-bold tracking-[0.02em] text-white uppercase shadow-[0_8px_18px_-10px_rgba(1,52,28,0.7)] transition-colors hover:bg-[#2f8a1b] sm:hidden"
            >
              Book Now
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex size-11 flex-col items-center justify-center gap-[6px] text-[#0a5c1f] lg:hidden"
            >
              <span className={`h-[2px] w-6 rounded bg-current transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-6 rounded bg-current transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          inert={!open}
          className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#faf8f3] px-5 pt-24 pb-8 transition-[opacity,visibility] duration-300 sm:px-8 lg:hidden ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <nav aria-label="Mobile">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-[#dedcd5]">
                  <a
                    href={link.href}
                    onClick={close}
                    className="block py-4 text-[1.5rem] font-bold tracking-[-0.01em] text-[#0a5c1f]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto space-y-3 pt-8">
            <a
              href={enquiryHref}
              onClick={close}
              className="flex h-13 items-center justify-center gap-2 rounded-lg bg-[#3d9f25] text-[0.85rem] font-bold text-white uppercase"
            >
              Request a Pickup <span aria-hidden="true">→</span>
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={site.phoneHref}
                className="flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-[#0a5c1f] text-[0.8rem] font-bold text-[#0a5c1f] uppercase"
              >
                <PhoneIcon className="size-4" /> Call
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-[#0a5c1f] text-[0.8rem] font-bold text-[#0a5c1f] uppercase"
              >
                <WhatsAppIcon className="size-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
