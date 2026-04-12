import type { Metadata } from "next";

export const siteConfig = {
  name: "Consultry",
  url: "https://consultry.de",
  description:
    "Consultry ist die AI-native Plattform für Beratungen im DACH-Raum – vom ersten Marktsignal bis zum profitablen Projekt.",
  ogImage: "/images/hero-dashboard.png",
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const canonical = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 2336,
          height: 1520,
          alt: `${siteConfig.name} Produktvorschau`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
