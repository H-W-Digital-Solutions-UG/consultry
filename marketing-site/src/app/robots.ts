import type { MetadataRoute } from "next";
import { isPreviewBuild, siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: isPreviewBuild ? "" : "/",
      disallow: isPreviewBuild ? "/" : undefined,
    },
    sitemap: isPreviewBuild ? undefined : `${siteConfig.url}/sitemap.xml`,
    host: isPreviewBuild ? undefined : siteConfig.url,
  };
}
