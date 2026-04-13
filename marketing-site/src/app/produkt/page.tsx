import type { Metadata } from "next";
import { AnswerHighlights } from "@/components/marketing/AnswerHighlights";
import { buildPageMetadata } from "@/lib/seo";
import { CTABand } from "@/components/marketing/CTABand";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { InternalLinkGrid } from "@/components/marketing/InternalLinkGrid";
import { JsonLd } from "@/components/marketing/JsonLd";
import { ProductPageHero } from "@/components/marketing/ProductPageHero";
import { ProductArchitecture } from "@/components/marketing/ProductArchitecture";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { ProductDemoModule } from "@/components/marketing/ProductDemoModule";
import {
  buildBreadcrumbJsonLd,
  buildSoftwareApplicationJsonLd,
} from "@/lib/structured-data";
import {
  productArchitecture,
  productAnswers,
  productCta,
  productComparison,
  productDemoModule,
  productFaq,
  productHero,
  productInternalLinks,
  productSeo,
} from "@/lib/content/de/product";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: productSeo.title,
    description: productSeo.description,
    path: "/produkt",
    keywords: productSeo.keywords,
  });
}

export default function ProductPage() {
  return (
    <main>
      <JsonLd
        data={[
          buildSoftwareApplicationJsonLd({
            description: productSeo.description,
            path: "/produkt",
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Produkt", path: "/produkt" },
          ]),
        ]}
      />
      <ProductPageHero content={productHero} />

      <ProductDemoModule {...productDemoModule} />

      <AnswerHighlights
        body="Diese drei Aussagen beantworten die haeufigsten Einstiegsfragen direkt im initialen HTML."
        eyebrow="KURZ ERKLAERT"
        items={productAnswers}
        title="Was die Plattform im Kern leistet"
      />

      <ProductArchitecture content={productArchitecture} />

      <ComparisonTable content={productComparison} />

      <InternalLinkGrid
        body="Die Unterseiten vertiefen die Haupt-Wedges der Plattform und geben Search- und AI-Systemen klarere Antwortziele."
        eyebrow="VERTIEFEN"
        links={productInternalLinks}
        title="Die wichtigsten Produkt-Wedges im Detail"
      />

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
