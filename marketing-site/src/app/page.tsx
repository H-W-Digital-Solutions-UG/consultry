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
          body="Diese Seiten vertiefen die Kern-Wedges und schaffen klare interne Ziele fuer Search, AI Search und Answer Engines."
          eyebrow="VERTIEFEN"
          links={internalLinks}
          title="Die wichtigsten Themen im Detail"
        />

        <MetricsBand
          body="Zielwerte basierend auf Marktanalyse und Pilotprojekten mit DACH-Beratungen"
          cta={hero.primaryCta}
          eyebrow="ERGEBNISSE"
          footnote="Basierend auf Pilotdaten und Branchen-Benchmarks fuer mittelstaendige DACH-Beratungen (30-200 Berater)."
          metrics={metrics}
          title="Beratungen, die Consultry nutzen, berichten"
        />
      </main>
    </>
  );
}
