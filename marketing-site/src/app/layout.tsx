import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import { AnalyticsBootstrap } from "@/components/analytics/AnalyticsBootstrap";
import { Footer } from "@/components/marketing/Footer";
import { JsonLd } from "@/components/marketing/JsonLd";
import { Nav } from "@/components/marketing/Nav";
import { isAnalyticsEnvironmentEnabled } from "@/lib/analytics-config";
import { isPreviewBuild, siteConfig } from "@/lib/seo";
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: isPreviewBuild
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
  manifest: "/site.webmanifest",
  icons: {
    shortcut: "/favicon.ico",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
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
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const analyticsEnvironmentEnabled = isAnalyticsEnvironmentEnabled();
  const cookieScriptSrc = analyticsEnvironmentEnabled
    ? process.env.NEXT_PUBLIC_COOKIESCRIPT_SRC?.trim()
    : undefined;

  return (
    <html
      data-analytics-enabled={analyticsEnvironmentEnabled ? "true" : "false"}
      data-scroll-behavior="smooth"
      data-theme="dark"
      lang="de"
    >
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        {cookieScriptSrc ? (
          <Script
            id="consultry-cookie-script"
            src={cookieScriptSrc}
            strategy="beforeInteractive"
          />
        ) : null}
        <JsonLd data={[buildOrganizationJsonLd(), buildWebsiteJsonLd()]} />
        <Nav />
        {children}
        <Footer />
        <Suspense fallback={null}>
          <AnalyticsBootstrap analyticsEnvironmentEnabled={analyticsEnvironmentEnabled} />
        </Suspense>
      </body>
    </html>
  );
}
