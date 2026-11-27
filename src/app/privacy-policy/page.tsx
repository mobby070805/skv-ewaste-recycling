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
        When you submit the enquiry form, the details you entered (name,
        company, phone, email, service, location and requirements) are saved
        to SKV&rsquo;s enquiry records so our team can follow up, and your
        own email application or WhatsApp opens with the same details for you
        to send. Information you share with us through the form, email, phone
        or WhatsApp is used only to respond to your enquiry and to provide the
        services you request.
      </p>
      <h2>Third-party services</h2>
      <p>
        Enquiry records are kept in Google Sheets, operated by Google on
        SKV&rsquo;s behalf. The office map on our homepage is provided by
        Google Maps, which loads from Google when you view it. Messages sent by email or WhatsApp are handled by
        your chosen provider under that provider&rsquo;s own terms and
        privacy policy.
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
