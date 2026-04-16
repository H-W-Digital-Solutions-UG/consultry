"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  hasPerformanceConsent,
  trackContactClick,
  trackCtaClick,
  trackPageView,
} from "@/lib/analytics";

const consentEvents = [
  "CookieScriptAccept",
  "CookieScriptAcceptAll",
  "CookieScriptCategory-performance",
  "CookieScriptLoaded",
  "CookieScriptReject",
] as const;

function RouteTracker({ enabled }: { enabled: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    if (!enabled) {
      return;
    }

    trackPageView(pathname, search);
  }, [enabled, pathname, search]);

  return null;
}

function AnalyticsDelegator({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const trackedElement = event.target.closest<HTMLElement>("[data-analytics-event]");

      if (!trackedElement) {
        return;
      }

      const {
        analyticsDestinationPath,
        analyticsDestinationType,
        analyticsEvent,
        analyticsLabel,
        analyticsLocation,
        analyticsMethod,
      } = trackedElement.dataset;

      if (analyticsEvent === "cta_click" && analyticsLabel && analyticsLocation && analyticsDestinationType) {
        trackCtaClick({
          ctaLabel: analyticsLabel,
          ctaLocation: analyticsLocation,
          destinationPath: analyticsDestinationPath,
          destinationType: analyticsDestinationType,
        });
      }

      if (analyticsEvent === "contact_click" && analyticsLocation && analyticsMethod) {
        trackContactClick({
          contactLocation: analyticsLocation,
          contactMethod: analyticsMethod,
        });
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [enabled]);

  return null;
}

export function AnalyticsBootstrap({
  analyticsEnvironmentEnabled,
}: {
  analyticsEnvironmentEnabled: boolean;
}) {
  const gtmId = analyticsEnvironmentEnabled ? process.env.NEXT_PUBLIC_GTM_ID?.trim() : undefined;
  const [performanceConsent, setPerformanceConsent] = useState(
    () => analyticsEnvironmentEnabled && hasPerformanceConsent(),
  );
  const [gtmLoaded, setGtmLoaded] = useState(false);

  useEffect(() => {
    if (!analyticsEnvironmentEnabled) {
      return;
    }

    const syncConsentState = () => {
      setPerformanceConsent(hasPerformanceConsent());
    };

    syncConsentState();

    for (const eventName of consentEvents) {
      window.addEventListener(eventName, syncConsentState);
    }

    return () => {
      for (const eventName of consentEvents) {
        window.removeEventListener(eventName, syncConsentState);
      }
    };
  }, [analyticsEnvironmentEnabled]);

  const gtmEnabled = Boolean(gtmId && performanceConsent);
  const analyticsEnabled = gtmEnabled && gtmLoaded;

  return (
    <>
      {gtmEnabled && gtmId ? (
        <Script
          id="consultry-gtm"
          onLoad={() => setGtmLoaded(true)}
          strategy="afterInteractive"
        >
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      ) : null}
      <AnalyticsDelegator enabled={analyticsEnvironmentEnabled} />
      <RouteTracker enabled={analyticsEnabled} />
    </>
  );
}
