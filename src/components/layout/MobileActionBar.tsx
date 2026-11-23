"use client";

import { useEffect, useState } from "react";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { site, whatsappHref } from "@/lib/site";

const waText = "Hello SKV, I would like to enquire about e-waste collection.";

/**
 * Floating Call and WhatsApp buttons, bottom right, on every screen size.
 * They appear once the hero is out of view and hide at the enquiry form.
 */
export function MobileActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const enquiry = document.getElementById("enquiry");
      const pastHero = window.scrollY > window.innerHeight * 0.6;
      const atEnquiry = enquiry
        ? enquiry.getBoundingClientRect().top < window.innerHeight * 0.85 &&
          enquiry.getBoundingClientRect().bottom > 0
        : false;
      setShow(pastHero && !atEnquiry);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const fab =
    "grid size-14 place-items-center rounded-full text-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0a5c1f]";

  return (
    <div
      inert={!show}
      className={`fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex flex-col gap-3 transition-[transform,opacity] duration-500 sm:right-6 sm:bottom-6 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={site.phoneHref}
        aria-label={`Call now: ${site.phoneDisplay}`}
        className={`${fab} bg-[#0a5c1f]`}
      >
        <PhoneIcon className="size-6" />
      </a>
      <a
        href={whatsappHref(waText)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className={`${fab} bg-[#25D366]`}
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}
