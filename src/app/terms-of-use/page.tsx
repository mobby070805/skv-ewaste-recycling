import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms governing the use of the ${site.name} website.`,
  alternates: { canonical: "/terms-of-use" },
};

export default function TermsOfUse() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        This website is operated by {site.legalName} (&ldquo;SKV&rdquo;). By
        using it you agree to the terms below.
      </p>
      <h2>Information on this website</h2>
      <p>
        The content of this website is provided for general information about
        SKV&rsquo;s services. It does not constitute an offer or a contract.
        The scope, pricing and terms of any service are agreed separately with
        each client.
      </p>
      <h2>Imagery</h2>
      <p>
        Some photographs on this website are representative industry images
        used for illustration and do not necessarily depict SKV&rsquo;s own
        facilities, equipment or personnel.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The SKV name and logo are the property of {site.legalName}. Website
        content may not be reproduced without permission.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
