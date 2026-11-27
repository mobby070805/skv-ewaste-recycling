import type { Metadata, Viewport } from "next";
import type React from "react";
import { Bricolage_Grotesque, DM_Sans, Montserrat } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

/** Display face for headings, navigation and labels (variable: weight + optical size). */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

/** Typeface of the approved hero design (header, hero and credibility strip). */
const montserrat = Montserrat({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const title =
  "E-Waste Recycling Company in Chennai & Mumbai | IT Asset Disposal | SKV";
const description =
  "Corporate e-waste management from SKV E-Waste Recycling: electronic waste collection, recycling, IT asset disposal, IT office demolition, HDD degaussing and data destruction services in Chennai and Mumbai.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | SKV E-Waste Recycling",
  },
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description,
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SKV E-Waste Recycling — corporate e-waste recycling and IT asset management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  keywords: [
    "e-waste recycling company",
    "corporate e-waste management",
    "e-waste recycling Chennai",
    "e-waste recycling Mumbai",
    "IT asset disposal",
    "HDD degaussing services",
    "data destruction services",
    "IT office demolition",
    "electronic waste collection",
  ],
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#F5F5EF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${bricolage.variable} ${montserrat.variable} ${dmSans.variable} antialiased`}
      // Alias for the previous display-font variable, so CSS compiled before
      // the font change (e.g. a long-running dev server) also uses Bricolage.
      style={{ "--font-montserrat": "var(--font-bricolage)" } as React.CSSProperties}
    >
      <body className="min-h-dvh">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.reveal.curtain::before{display:none!important}.reveal img{transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
