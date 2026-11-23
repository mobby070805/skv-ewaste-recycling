"use client";

import type { ReactNode } from "react";
import { enquiryHref } from "@/lib/site";

export const SELECT_SERVICE_EVENT = "skv:select-service";

/**
 * Link to the enquiry form that also pre-selects a service in it.
 * Plain anchor, so it still scrolls to the form without JavaScript.
 */
export function EnquiryLink({
  service,
  className = "",
  children,
  ariaLabel,
}: {
  service?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={enquiryHref}
      aria-label={ariaLabel}
      className={className}
      onClick={() => {
        if (service) {
          window.dispatchEvent(
            new CustomEvent(SELECT_SERVICE_EVENT, { detail: service }),
          );
        }
      }}
    >
      {children}
    </a>
  );
}
