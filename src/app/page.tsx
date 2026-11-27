import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { About } from "@/components/sections/About";
import { AllServices } from "@/components/sections/AllServices";
import { AssetManagement } from "@/components/sections/AssetManagement";
import { CoreServices } from "@/components/sections/CoreServices";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Locations } from "@/components/sections/Locations";
import { Process } from "@/components/sections/Process";
import { RecyclingBanner } from "@/components/sections/RecyclingBanner";
import { WhatWeRecycle } from "@/components/sections/WhatWeRecycle";
import { WhySkv } from "@/components/sections/WhySkv";
import { SwipeAutoplay } from "@/components/ui/SwipeAutoplay";
import { faqs } from "@/lib/faq";
import { offices, serviceNames, serviceSlug, site } from "@/lib/site";

const orgId = `${site.url}/#organization`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "RecyclingCenter"],
      "@id": orgId,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: `${site.url}/icon.png`,
      image: `${site.url}/og-image.jpg`,
      description:
        "Corporate e-waste collection, recycling, IT asset disposal, IT office demolition, HDD degaussing and data destruction in Chennai and Mumbai.",
      email: site.email,
      telephone: site.phoneSchema,
      sameAs: site.social.map((s) => s.href),
      areaServed: [
        { "@type": "City", name: "Chennai" },
        { "@type": "City", name: "Mumbai" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: offices[0].street,
        addressLocality: offices[0].locality,
        addressRegion: offices[0].region,
        postalCode: offices[0].postalCode,
        addressCountry: "IN",
      },
      location: offices.map((o) => ({
        "@type": "Place",
        name: `${site.name} — ${o.city}, ${o.area}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: o.street,
          addressLocality: o.locality,
          addressRegion: o.region,
          postalCode: o.postalCode,
          addressCountry: "IN",
        },
      })),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phoneSchema,
        email: site.email,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "E-waste and IT asset disposal services",
        itemListElement: serviceNames.map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            url: `${site.url}/#service-${serviceSlug(name)}`,
            provider: { "@id": orgId },
            areaServed: ["Chennai", "Mumbai"],
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en-IN",
      publisher: { "@id": orgId },
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: "E-Waste Recycling & IT Asset Management Solutions for Businesses",
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": orgId },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#0a5c1f] focus:px-4 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <CredibilityStrip />
        <RecyclingBanner />
        <CoreServices />
        <About />
        <WhatWeRecycle />
        <AllServices />
        <AssetManagement />
        <Process />
        <WhySkv />
        <Industries />
        <Locations />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileActionBar />
      <SwipeAutoplay />
    </>
  );
}
