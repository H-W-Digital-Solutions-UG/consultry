import type { Metadata } from "next";

export const siteConfig = {
  name: "Consultry",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://consultry.de").replace(/\/$/, ""),
  primaryDomain: "consultry.de",
  description:
    "Consultry ist das AI-native Operating System fuer DACH-IT- und Digitalisierungsberatungen - von Bestandskundenwachstum ueber Staffing und Wissenswiederverwendung bis Delivery und Commercial Control.",
  ogImage: "/images/hero-dashboard.png",
  locale: "de_DE",
  language: "de-DE",
  email: "kontakt@consultry.com",
  socialProfiles: [
    "https://www.linkedin.com/company/consultry",
    "https://x.com/consultry",
  ],
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  noindex?: boolean;
};

export const isPreviewBuild = process.env.VERCEL_ENV === "preview";

export function buildAbsoluteUrl(path: string) {
  if (!path || path === "/") {
    return siteConfig.url;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  noindex = false,
}: PageMetadataInput): Metadata {
  const canonical = buildAbsoluteUrl(path);
  const shouldNoindex = noindex || isPreviewBuild;

  return {
    title: {
      absolute: title,
    },
    description,
    ...(keywords?.length ? { keywords: [...keywords] } : {}),
    alternates: {
      canonical,
    },
    robots: shouldNoindex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
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
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
