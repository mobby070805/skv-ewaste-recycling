import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles information shared through this website.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This page explains how {site.legalName} (&ldquo;SKV&rdquo;) handles
        information in connection with this website.
      </p>
      <h2>Enquiries</h2>
      <p>
        The enquiry form on this website does not send or store your details
        on our web servers. When you submit it, your own email application or
        WhatsApp opens with the details you entered, and the enquiry reaches
        SKV only when you choose to send that message. Information you send us
        by email, phone or WhatsApp is used to respond to your enquiry and to
        provide the services you request.
      </p>
      <h2>Third-party services</h2>
      <p>
        Messages sent by email or WhatsApp are handled by your chosen
        provider under that provider&rsquo;s own terms and privacy policy.
        Links to external websites, including our social media pages, are
        likewise governed by those sites&rsquo; policies.
      </p>
      <h2>Contact</h2>
      <p>
        For any question about your information, write to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
        <a href={site.phoneHref}>{site.phoneDisplay}</a>.
      </p>
    </LegalPage>
  );
}
