import type { Metadata } from "next";
import { CTABand } from "@/components/marketing/CTABand";
import { HeroShowcase } from "@/components/marketing/HeroShowcase";
import { HomepageJsonLd } from "@/components/marketing/HomepageJsonLd";
import { FeatureShowcaseScroller } from "@/components/marketing/FeatureShowcaseScroller";
import { MetricsBand } from "@/components/marketing/MetricsBand";
import { RichCTABand } from "@/components/marketing/RichCTABand";
import { deepDiveCta, richDemoCta } from "@/lib/content/shared";
import { buildPageMetadata } from "@/lib/seo";
import { homepageContent, homepageSeo } from "@/lib/content/de/homepage";

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
  const { hero, steps, metrics } = homepageContent;

  return (
    <>
      <HomepageJsonLd />
      <main>
        <HeroShowcase hero={hero} />
        <FeatureShowcaseScroller steps={steps} />
        <CTABand
          body={deepDiveCta.body}
          primaryCta={deepDiveCta.primaryCta}
          title={deepDiveCta.title}
        />

        <MetricsBand
          body="Zielwerte basierend auf Marktanalyse und Pilotprojekten mit DACH-Beratungen"
          eyebrow="ERGEBNISSE"
          footnote="Basierend auf Pilotdaten und Branchen-Benchmarks fuer mittelstaendige DACH-Beratungen (30-200 Berater)."
          metrics={metrics}
          title="Beratungen, die Consultry nutzen, berichten"
        />

        <RichCTABand
          body={richDemoCta.body}
          buttonLabel={richDemoCta.buttonLabel}
          placeholder={richDemoCta.placeholder}
          success={richDemoCta.success}
          title={richDemoCta.title}
          trustLine={richDemoCta.trustLine}
        />
      </main>
    </>
  );
}
