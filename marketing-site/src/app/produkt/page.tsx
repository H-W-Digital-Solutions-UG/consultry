import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { CTABand } from "@/components/marketing/CTABand";
import { FeatureShowcaseRow } from "@/components/marketing/FeatureShowcaseRow";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { ProductPageHero } from "@/components/marketing/ProductPageHero";
import { ProductArchitecture } from "@/components/marketing/ProductArchitecture";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { ProductDemoModule } from "@/components/marketing/ProductDemoModule";
import {
  productArchitecture,
  productCta,
  productComparison,
  productDemoModule,
  productFaq,
  productFeatureRows,
  productHero,
} from "@/lib/content/de/product";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: "Consultry Plattform - AI-gestuetzter Beratungs-Lifecycle",
    description:
      "Consultry ist ein AI-natives operatives System fuer Beratungsunternehmen im DACH-Raum. Vom Signal zum profitablen Projekt: Market Intelligence, Berater-Matching, Angebotserstellung, Projektsteuerung und Wissensmanagement in einer Plattform.",
    path: "/produkt",
  });
}

export default function ProductPage() {
  return (
    <main>
      <ProductPageHero content={productHero} />

      <ProductDemoModule {...productDemoModule} />

      <section className="section-shell-tight" id="modules">
        <div className="content-shell space-y-12">
          {productFeatureRows.map((row) => (
            <FeatureShowcaseRow content={row} key={row.title} />
          ))}
        </div>
      </section>

      <ProductArchitecture content={productArchitecture} />

      <ComparisonTable content={productComparison} />

      <section className="section-shell">
        <div className="content-shell">
          <MotionReveal>
            <SectionHeader
              overline="HÄUFIG GESTELLTE FRAGEN"
              title="Noch Fragen? Hier sind Antworten."
              body="Falls Sie die Antwort hier nicht finden, kontaktieren Sie unser Team jederzeit."
            />
          </MotionReveal>
          <MotionReveal className="mt-8" delay={0.06}>
            <FAQAccordion items={productFaq} />
          </MotionReveal>
        </div>
      </section>

      <CTABand
        eyebrow={productCta.eyebrow}
        body={productCta.body}
        primaryCta={productCta.primaryCta}
        title={productCta.title}
      />
    </main>
  );
}
