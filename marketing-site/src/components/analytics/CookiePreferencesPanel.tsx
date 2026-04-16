"use client";

import { ShieldCheck, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { isAnalyticsEnvironmentEnabled } from "@/lib/analytics-config";
import { getCookieConsentState, hasPerformanceConsent } from "@/lib/analytics";

function describeConsentState({
  analyticsEnvironmentEnabled,
  categories,
}: {
  analyticsEnvironmentEnabled: boolean;
  categories: string[];
}) {
  if (!analyticsEnvironmentEnabled) {
    return "In dieser Umgebung bleibt Tracking standardmaessig deaktiviert.";
  }

  if (categories.includes("performance")) {
    return "Statistik-Cookies und Messskripte sind derzeit aktiviert.";
  }

  return "Aktuell sind nur technisch notwendige Funktionen aktiv.";
}

export function CookiePreferencesPanel() {
  const analyticsEnvironmentEnabled = isAnalyticsEnvironmentEnabled();
  const cookieScriptConfigured =
    analyticsEnvironmentEnabled && Boolean(process.env.NEXT_PUBLIC_COOKIESCRIPT_SRC?.trim());
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const syncConsentState = () => {
      const currentState = getCookieConsentState();

      if (!currentState?.categories) {
        setCategories([]);
        return;
      }

      if (Array.isArray(currentState.categories)) {
        setCategories(currentState.categories);
        return;
      }

      setCategories(
        Object.entries(currentState.categories)
          .filter(([, isAllowed]) => Boolean(isAllowed))
          .map(([categoryName]) => categoryName),
      );
    };

    syncConsentState();

    const consentEvents = [
      "CookieScriptAccept",
      "CookieScriptAcceptAll",
      "CookieScriptCategory-performance",
      "CookieScriptLoaded",
      "CookieScriptReject",
    ] as const;

    for (const eventName of consentEvents) {
      window.addEventListener(eventName, syncConsentState);
    }

    return () => {
      for (const eventName of consentEvents) {
        window.removeEventListener(eventName, syncConsentState);
      }
    };
  }, []);

  const performanceEnabled = analyticsEnvironmentEnabled && hasPerformanceConsent();

  return (
    <div className="surface-panel grid gap-5 rounded-[30px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(26,22,30,0.98)_0%,rgba(20,18,24,0.98)_100%)] px-5 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:px-7 sm:py-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-[34rem]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.66)]">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--consultry-brand-warm)]" />
            Consent-Status
          </div>
          <p className="mt-4 text-[1.15rem] font-semibold leading-[1.35] text-[rgba(250,250,249,0.96)]">
            {describeConsentState({ analyticsEnvironmentEnabled, categories })}
          </p>
          <p className="mt-3 text-[14px] leading-[1.75] text-[rgba(236,232,245,0.72)]">
            {analyticsEnvironmentEnabled
              ? "Wir nutzen CookieScript, um Ihre Auswahl fuer technisch notwendige und optionale Statistik-Cookies zu verwalten. Sie koennen Ihre Entscheidung jederzeit anpassen."
              : "CookieScript, GTM und GA4 bleiben in dieser Umgebung ausgeschaltet. Das verhindert versehentliche Messdaten aus Entwicklung und Preview."}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(249,93,43,0.12)] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.7)]">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              performanceEnabled ? "bg-[var(--consultry-brand-coral)]" : "bg-[rgba(255,255,255,0.34)]"
            }`}
          />
          {analyticsEnvironmentEnabled
            ? performanceEnabled
              ? "Statistik aktiv"
              : "Nur notwendig"
            : "Tracking deaktiviert"}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          className="min-w-[12rem] bg-[linear-gradient(180deg,#ff5b2e_0%,#ff4d1f_100%)] before:[background:linear-gradient(180deg,#ff5b2e_0%,#ff4d1f_100%)] after:[background:linear-gradient(180deg,#ff784b_0%,#ff5428_100%)]"
          disabled={!cookieScriptConfigured}
          onClick={() => window.CookieScript?.instance?.show?.()}
          type="button"
        >
          <span className="inline-flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Einstellungen öffnen
          </span>
        </Button>

        <Button
          className="min-w-[12rem]"
          disabled={!cookieScriptConfigured}
          onClick={() => window.CookieScript?.instance?.acceptAction?.(["performance"])}
          type="button"
          variant="secondary"
        >
          Statistik erlauben
        </Button>

        <Button
          className="min-w-[12rem]"
          disabled={!cookieScriptConfigured}
          onClick={() => window.CookieScript?.instance?.rejectAllAction?.()}
          type="button"
          variant="ghost"
        >
          Nur notwendige
        </Button>
      </div>

      {!cookieScriptConfigured ? (
        <p className="text-[13px] leading-[1.7] text-[rgba(255,255,255,0.56)]">
          {analyticsEnvironmentEnabled ? (
            <>
              CookieScript ist in dieser Umgebung noch nicht konfiguriert. Hinterlegen Sie
              <code className="ml-1 rounded bg-[rgba(255,255,255,0.06)] px-1.5 py-0.5 text-[12px]">
                NEXT_PUBLIC_COOKIESCRIPT_SRC
              </code>
              , um die Praeferenzsteuerung zu aktivieren.
            </>
          ) : (
            <>
              Setzen Sie
              <code className="ml-1 rounded bg-[rgba(255,255,255,0.06)] px-1.5 py-0.5 text-[12px]">
                NEXT_PUBLIC_ANALYTICS_ENABLED=true
              </code>
              , wenn Sie CookieScript und GTM in dieser Umgebung bewusst einschalten wollen.
            </>
          )}
        </p>
      ) : null}
    </div>
  );
}
