import type { Metadata } from "next";
import { HeroShowcase } from "@/components/marketing/HeroShowcase";
import { HomepageJsonLd } from "@/components/marketing/HomepageJsonLd";
import { FeatureShowcaseScroller } from "@/components/marketing/FeatureShowcaseScroller";
import { MetricsBand } from "@/components/marketing/MetricsBand";
import { RichCTABand } from "@/components/marketing/RichCTABand";
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
  const { hero, steps, metrics, waitlist } = homepageContent;

  return (
    <>
      <HomepageJsonLd />
      <main>
        <HeroShowcase hero={hero} />
        <FeatureShowcaseScroller steps={steps} />

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
