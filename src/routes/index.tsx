import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { Focus } from "@/components/focus";
import { Approach } from "@/components/approach";
import { Team } from "@/components/team";
import { ContactFooter } from "@/components/contact-footer";

const TITLE = "Tribridge Capital | Tribridge Pioneer Opportunity Fund";
const DESCRIPTION =
  "Tribridge Capital manages private investment vehicles for accredited investors across growth-stage technology, artificial intelligence, and biotechnology.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tribridge Capital",
          email: "ir@tribridge.capital",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1760 2nd Ave",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10128",
            addressCountry: "US",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Philosophy />
        <Focus />
        <Approach />
        <Team />
        <ContactFooter />
      </main>
    </div>
  );
}
