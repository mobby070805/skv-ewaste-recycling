/**
 * Single source of truth for SKV business information.
 *
 * Everything here is taken from SKV's existing website (skvewasterecycling.com:
 * home, /about/, /services/ and service pages), as reviewed in November 2026.
 * Do not add certifications, statistics or client names that SKV has not
 * published or confirmed in writing.
 */

export const site = {
  name: "SKV E-Waste Recycling",
  legalName: "SKV E-Waste Recycling Pvt. Ltd.",
  url: "https://www.skvewasterecycling.com",
  phoneDisplay: "+91 95147 51475",
  phoneHref: "tel:+919514751475",
  phoneSchema: "+91-95147-51475",
  whatsappNumber: "919514751475",
  email: "info@skvewaste.com",
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/skvewasterecyclingpvtltd/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/skvewasterecycling/",
    },
  ],
} as const;

export const whatsappHref = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;

export const offices = [
  {
    city: "Chennai",
    area: "Ambattur",
    lines: [
      "No. 154 A&B, 1st Floor, 8th Mahatma Gandhi Road,",
      "Tass Industrial Area, Sidco Industrial Estate,",
      "Ambattur, Chennai, Tamil Nadu 600098",
    ],
    street:
      "No. 154 A&B, 1st Floor, 8th Mahatma Gandhi Road, Tass Industrial Area, Sidco Industrial Estate, Ambattur",
    locality: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600098",
  },
  {
    city: "Chennai",
    area: "TIDEL Park, Taramani",
    lines: [
      "No. 4, D Block, F1, First Floor,",
      "TIDEL Park, Taramani,",
      "Chennai, Tamil Nadu 600113",
    ],
    street: "No. 4, D Block, F1, First Floor, TIDEL Park, Taramani",
    locality: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600113",
  },
  {
    city: "Mumbai",
    area: "Andheri West",
    lines: [
      "No. 103, Shiv Shakti CHS, 1st Floor,",
      "Andheri RTO, Anna Nagar, Andheri West,",
      "Mumbai, Maharashtra 400053",
    ],
    street:
      "No. 103, Shiv Shakti CHS, 1st Floor, Andheri RTO, Anna Nagar, Andheri West",
    locality: "Mumbai",
    region: "Maharashtra",
    postalCode: "400053",
  },
] as const;

/**
 * Figures published on skvewasterecycling.com/about/.
 * Confirm with SKV before changing.
 */
export const stats = [
  { value: 10, suffix: "K+", label: "Completed projects" },
  { value: 15, suffix: "K+", label: "Satisfied customers" },
  { value: 15, suffix: "+", label: "Warehouses" },
  { value: 3, suffix: "", label: "Offices in Chennai & Mumbai" },
] as const;

/**
 * Certification marks displayed on skvewasterecycling.com. Certificate numbers,
 * issuing bodies and validity dates are not published on the existing site —
 * obtain them from SKV before adding detail.
 */
export const certifications = ["ISO 9001", "ISO 14001", "R2"] as const;

export const navLinks = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Contact", href: "/#contact" },
] as const;

/** Service names, also used as the enquiry form's options. */
export const serviceNames = [
  "E-Waste Recycling",
  "IT Office Demolition",
  "HDD Degaussing",
  "Blancco Data Erasing",
  "Data Sanitization",
  "IT Asset Recovery",
  "Desktop & Laptop Buyback",
  "Infrastructure Disposal",
] as const;

export type ServiceName = (typeof serviceNames)[number];

export const serviceSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const enquiryHref = "/#enquiry";
