import { Suspense } from "react";
import type { Metadata } from "next";
import { HeroShowcase } from "@/components/marketing/HeroShowcase";
import { HomepageJsonLd } from "@/components/marketing/HomepageJsonLd";
import { FeatureShowcaseScroller } from "@/components/marketing/FeatureShowcaseScroller";
import { FeatureShowcaseStep } from "@/components/marketing/FeatureShowcaseStep";
import { MetricsBand } from "@/components/marketing/MetricsBand";
import { RichCTABand } from "@/components/marketing/RichCTABand";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { buildPageMetadata } from "@/lib/seo";
import {
  homepageContent,
  homepageSeo,
  type HomepageStep,
} from "@/lib/content/de/homepage";

export function generateMetadata(): Metadata {
  const metadata = buildPageMetadata({
    title: homepageSeo.title,
    description: homepageSeo.description,
    path: "/",
  });

  return {
    ...metadata,
    keywords: [...homepageSeo.keywords],
    category: "business software",
    openGraph: {
      ...metadata.openGraph,
      title: "Consultry | KI-native Plattform fuer DACH-Beratungen",
      description: homepageSeo.description,
    },
    twitter: {
      ...metadata.twitter,
      title: "Consultry | KI-native Plattform fuer DACH-Beratungen",
      description: homepageSeo.description,
    },
  };
}

export default function Home() {
  const { hero, steps, metrics, waitlist } = homepageContent;

  return (
    <>
      <HomepageJsonLd />
      <main>
        <HeroShowcase hero={hero} />
        <Suspense fallback={<FeatureShowcaseScrollerFallback steps={steps} />}>
          <FeatureShowcaseScroller steps={steps} />
        </Suspense>

        <MetricsBand
          body="Zielwerte basierend auf Marktanalyse und Pilotprojekten mit DACH-Beratungen"
          eyebrow="ERGEBNISSE"
          footnote="Basierend auf Pilotdaten und Branchen-Benchmarks fuer mittelstaendige DACH-Beratungen (30-200 Berater)."
          metrics={metrics}
          title="Beratungen, die Consultry nutzen, berichten"
        />

        <RichCTABand
          body={waitlist.body}
          buttonLabel={waitlist.buttonLabel}
          eyebrow={waitlist.eyebrow}
          placeholder={waitlist.placeholder}
          success={waitlist.success}
          title={waitlist.title}
          trustLine={waitlist.trustLine}
        />
      </main>
    </>
  );
}

function FeatureShowcaseScrollerFallback({ steps }: { steps: HomepageStep[] }) {
  return (
    <section className="pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
      <div className="content-shell">
        <SectionHeader
          align="center"
          body="Consultry verbindet Pipeline, Matching, Delivery und Knowledge in einer durchgängigen Plattform. Kein Tool-Wechsel, keine Datensilos."
          className="max-w-[44rem]"
          overline="DIE PLATTFORM"
          title="Vom Signal zum Projekt — nahtlos"
        />
      </div>

      <div className="content-shell mt-6 space-y-3 sm:mt-7 sm:space-y-4">
        {steps.map((step) => (
          <FeatureShowcaseStep key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}
