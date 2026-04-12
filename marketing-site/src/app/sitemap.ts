import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-04-12T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/produkt`,
      lastModified: new Date("2026-04-12T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/unternehmen`,
      lastModified: new Date("2026-04-12T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
