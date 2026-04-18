import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import { AnalyticsBootstrap } from "@/components/analytics/AnalyticsBootstrap";
import { WebVitalsReporter } from "@/components/analytics/WebVitalsReporter";
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

/**
 * JetBrains Mono is used for small uppercase captions (`.eyebrow`, mono labels).
 * It is never the LCP element, so we opt out of Next's automatic font preload
 * to avoid contending with the Inter subset on the LCP critical path. The font
 * still loads on-demand with `display: swap`; captions simply paint with the
 * system monospace stack first.
 */
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

/**
 * Safely derive the origin of the CookieScript CDN URL so we can emit a
 * `<link rel="preconnect">` for it. Returns `undefined` if the env var is
 * missing or not a valid absolute URL (e.g. misconfigured deploy).
 */
function getCookieScriptOrigin(src: string | undefined): string | undefined {
  if (!src) {
    return undefined;
  }

  try {
    return new URL(src).origin;
  } catch {
    return undefined;
  }
}

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
  const cookieScriptOrigin = getCookieScriptOrigin(cookieScriptSrc);

  return (
    <html
      data-analytics-enabled={analyticsEnvironmentEnabled ? "true" : "false"}
      data-scroll-behavior="smooth"
      data-theme="dark"
      lang="de"
    >
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        {cookieScriptOrigin ? (
          <link
            crossOrigin="anonymous"
            href={cookieScriptOrigin}
            rel="preconnect"
          />
        ) : null}
        {cookieScriptSrc ? (
          // CookieScript is loaded with `afterInteractive` rather than
          // `beforeInteractive` so it does not render-block LCP. This is
          // safe because every downstream script that writes cookies
          // (currently only GTM in `AnalyticsBootstrap`) is gated on
          // `hasPerformanceConsent()`, which returns `false` until the
          // CookieScript runtime has loaded and the user has granted
          // consent. AnalyticsBootstrap re-syncs consent on the
          // `CookieScriptLoaded` / `CookieScriptAccept*` / `CookieScriptReject`
          // events, so the banner appears and gates GTM correctly even
          // though the script now loads after hydration. Expected visible
          // effect: consent banner appears ~200 ms later on cold visits;
          // LCP on mobile improves by a corresponding amount because the
          // third-party CMP script is no longer on the critical path.
          <Script
            id="consultry-cookie-script"
            src={cookieScriptSrc}
            strategy="afterInteractive"
          />
        ) : null}
        <JsonLd data={[buildOrganizationJsonLd(), buildWebsiteJsonLd()]} />
        <Nav />
        {children}
        <Footer />
        <Suspense fallback={null}>
          <AnalyticsBootstrap analyticsEnvironmentEnabled={analyticsEnvironmentEnabled} />
        </Suspense>
        <WebVitalsReporter />
      </body>
    </html>
  );
}
