import { homepageSeo } from "@/lib/content/de/homepage";
import { siteConfig } from "@/lib/seo";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/consultry-logo.png`,
    description: homepageSeo.description,
    areaServed: "DE",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: homepageSeo.description,
    inLanguage: "de-DE",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteConfig.url,
    description: homepageSeo.description,
    audience: {
      "@type": "Audience",
      audienceType: "Beratungen im DACH-Raum",
    },
  },
] as const;

export function HomepageJsonLd() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      type="application/ld+json"
    />
  );
}
