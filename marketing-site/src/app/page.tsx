import type { Metadata } from "next";
import { AnswerHighlights } from "@/components/marketing/AnswerHighlights";
import { CTABand } from "@/components/marketing/CTABand";
import { HeroShowcase } from "@/components/marketing/HeroShowcase";
import { FeatureShowcaseScroller } from "@/components/marketing/FeatureShowcaseScroller";
import { InternalLinkGrid } from "@/components/marketing/InternalLinkGrid";
import { JsonLd } from "@/components/marketing/JsonLd";
import { MetricsBand } from "@/components/marketing/MetricsBand";
import { RichCTABand } from "@/components/marketing/RichCTABand";
import { deepDiveCta } from "@/lib/content/shared";
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
  const { hero, answers, steps, internalLinks, metrics, waitlist } = homepageContent;

  return (
    <>
      <JsonLd
        data={buildSoftwareApplicationJsonLd({
          description: homepageSeo.description,
          path: "/",
        })}
      />
      <main>
        <HeroShowcase hero={hero} />
        <AnswerHighlights
          body="Die ersten Antworten stehen direkt im HTML und definieren Produkt, Zielgruppe und Abgrenzung gegen Standard-CRMs."
          eyebrow="KURZ ERKLAERT"
          items={answers}
          title="Was Consultry fuer DACH-Beratungen konkret ist"
        />
        <FeatureShowcaseScroller steps={steps} />
        <CTABand
          body={deepDiveCta.body}
          primaryCta={deepDiveCta.primaryCta}
          title={deepDiveCta.title}
        />
        <InternalLinkGrid
          body="Diese Seiten vertiefen die Kern-Wedges und schaffen klare interne Ziele fuer Search, AI Search und Answer Engines."
          eyebrow="VERTIEFEN"
          links={internalLinks}
          title="Die wichtigsten Themen im Detail"
        />

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
          placeholder={waitlist.placeholder}
          success={waitlist.success}
          title={waitlist.title}
          trustLine={waitlist.trustLine}
        />
      </main>
    </>
  );
}
