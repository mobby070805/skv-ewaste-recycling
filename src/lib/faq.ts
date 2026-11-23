import { site } from "@/lib/site";

/**
 * Homepage FAQs. Answers only describe services and facts published on SKV's
 * existing website; anything else is framed as "discuss at enquiry".
 * Also rendered as FAQPage structured data in app/page.tsx.
 */
export const faqs = [
  {
    q: "Do you handle bulk corporate e-waste disposal?",
    a: "Yes. SKV works with corporate offices, IT parks and enterprises on bulk pickups, office clearances and IT office demolition. We scope each job around your volumes, sites and timelines.",
  },
  {
    q: "How does IT asset disposal work?",
    a: "We review the equipment and locations involved, collect the assets, carry out data erasure or destruction where required, and then evaluate each item for reuse, buyback or recycling. Equipment that cannot be reused is dismantled, segregated and recycled.",
  },
  {
    q: "How do you make sure our data is destroyed?",
    a: "Depending on the media and its next use, we use HDD degaussing, certified software erasure with Blancco or Stellar tools, or physical drive destruction by shredding or crushing. Our degaussing process covers asset verification, secure handling, degaussing and documented data destruction.",
  },
  {
    q: "What is HDD degaussing, and when should we choose it?",
    a: "Degaussing exposes a hard disk drive to a powerful magnetic field that erases the data stored on its magnetic platters, so it cannot be recovered. It suits drives that will not be reused. Where devices are intended for reuse or resale, certified software erasure is the usual choice.",
  },
  {
    q: "Where do you collect e-waste from?",
    a: "SKV has offices in Ambattur and TIDEL Park, Taramani in Chennai, and in Andheri West, Mumbai, and collects from businesses in and around both cities. For other locations, contact our team to discuss your requirement.",
  },
  {
    q: "Will we receive documentation for recycling and data destruction?",
    a: "Yes. Blancco erasure produces a detailed report, certificate and audit trail for every erased device, and our data destruction services provide audit-ready documentation. Let us know any specific compliance or EPR documentation you need when you enquire.",
  },
  {
    q: "How do I request a pickup or a quote?",
    a: `Use the enquiry form on this page, call or WhatsApp us on ${site.phoneDisplay}, or email ${site.email}. Sharing the equipment types, approximate quantities and location helps us respond with an accurate plan.`,
  },
] as const;
