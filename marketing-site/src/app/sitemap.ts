import type { MetadataRoute } from "next";
import { wedgeSlugs } from "@/lib/content/de/wedges";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-04-13T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/produkt`,
      lastModified: new Date("2026-04-13T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/unternehmen`,
      lastModified: new Date("2026-04-13T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/kontakt`,
      lastModified: new Date("2026-04-13T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/impressum`,
      lastModified: new Date("2026-04-13T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/datenschutz`,
      lastModified: new Date("2026-04-13T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/agb`,
      lastModified: new Date("2026-04-13T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteConfig.url}/cookies`,
      lastModified: new Date("2026-04-13T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const wedgePages: MetadataRoute.Sitemap = wedgeSlugs.map((slug) => ({
    url: `${siteConfig.url}/produkt/${slug}`,
    lastModified: new Date("2026-04-13T00:00:00.000Z"),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...corePages, ...wedgePages];
}
