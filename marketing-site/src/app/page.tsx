import type { Metadata } from "next";
import { HeroShowcaseHomepage } from "@/components/marketing/HeroShowCaseHomepage";
import { FeatureShowcaseEditorialScroller } from "@/components/marketing/FeatureShowcaseEditorialScroller";
import { InternalLinkGrid } from "@/components/marketing/InternalLinkGrid";
import { JsonLd } from "@/components/marketing/JsonLd";
import { MetricsBand } from "@/components/marketing/MetricsBand";
import { buildPageMetadata } from "@/lib/seo";
import { buildSoftwareApplicationJsonLd } from "@/lib/structured-data";
import { homepageContent, homepageSeo } from "@/lib/content/de/homepage";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: homepageSeo.title,
    description: homepageSeo.description,
    path: "/",
    keywords: homepageSeo.keywords,
  });
}

export default function Home() {
  const { hero, steps, internalLinks, metrics } = homepageContent;

  return (
    <>
      <JsonLd
        data={buildSoftwareApplicationJsonLd({
          description: homepageSeo.description,
          path: "/",
        })}
      />
      <main>
        <HeroShowcaseHomepage hero={hero} />
        <FeatureShowcaseEditorialScroller steps={steps} />

        <InternalLinkGrid
          body="Jede dieser Seiten vertieft einen der Bereiche. Mit konkreten Zahlen, Szenarien und Vergleichen."
          eyebrow="VERTIEFEN"
          links={internalLinks}
          title="Die wichtigsten Themen im Detail."
        />

        <MetricsBand
          body="Zielwerte aus Marktanalyse und Gesprächen mit Pilotkunden im DACH-Raum."
          cta={hero.primaryCta}
          eyebrow="ERGEBNISSE"
          footnote="Basis: Branchen-Benchmarks und Gespräche mit Beratungen zwischen 30 und 200 Beratern. Consultry ist im Pre-Launch. Werte sind Zielkorridore. Keine Versprechen."
          metrics={metrics}
          title="Was sich operativ verschiebt."
        />
      </main>
    </>
  );
}
