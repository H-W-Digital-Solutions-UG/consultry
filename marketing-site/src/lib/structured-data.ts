import { siteConfig } from "@/lib/seo";
import { companyProfile } from "@/lib/company";

export type JsonLdRecord = Record<string, unknown>;

export type BreadcrumbItem = {
  name: string;
  path: string;
};

type SoftwareApplicationInput = {
  description: string;
  path: string;
};

type PageSchemaInput = {
  description: string;
  path: string;
  title: string;
};

export function buildOrganizationJsonLd(description = siteConfig.description): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/consultry-logo.png`,
    description,
    email: siteConfig.email,
    areaServed: ["DE", "AT", "CH"],
    sameAs: [...siteConfig.socialProfiles],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        availableLanguage: ["German", "English"],
        areaServed: ["DE", "AT", "CH"],
      },
    ],
  };
}

export function buildWebsiteJsonLd(description = siteConfig.description): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description,
    inLanguage: siteConfig.language,
  };
}

export function buildSoftwareApplicationJsonLd({
  description,
  path,
}: SoftwareApplicationInput): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    description,
    audience: {
      "@type": "Audience",
      audienceType: "DACH-IT- und Digitalisierungsberatungen",
    },
    areaServed: ["DE", "AT", "CH"],
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function buildAboutPageJsonLd({
  description,
  path,
  title,
}: PageSchemaInput): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: title,
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    description,
    inLanguage: siteConfig.language,
    about: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function buildContactPageJsonLd({
  description,
  path,
  title,
}: PageSchemaInput): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    description,
    inLanguage: siteConfig.language,
    mainEntity: {
      "@type": "Organization",
      name: companyProfile.legalName,
      alternateName: siteConfig.name,
      email: companyProfile.productEmail,
      telephone: companyProfile.phoneDisplay,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyProfile.address.street,
        postalCode: companyProfile.address.postalCode,
        addressLocality: companyProfile.address.city,
        addressCountry: "DE",
      },
      sameAs: [...siteConfig.socialProfiles],
    },
  };
}
