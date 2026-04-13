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

      <AnswerHighlights
        body="Diese drei Aussagen beantworten die haeufigsten Einstiegsfragen direkt im initialen HTML."
        eyebrow="KURZ ERKLAERT"
        items={productAnswers}
        title="Was die Plattform leistet"
      />

      <ProductArchitecture content={productArchitecture} />

      <ComparisonTable content={productComparison} />

      <ProductDemoModule {...productDemoModule} />

      <section className="relative overflow-hidden border-y border-[rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,rgba(36,29,26,0.96)_0%,rgba(24,20,18,0.98)_100%)] py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            maskImage:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.95) 18%, rgba(0,0,0,0.95) 82%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        <div className="content-shell">
          <MotionReveal>
            <SectionHeader
              overline="HÄUFIG GESTELLTE FRAGEN"
              title="Noch Fragen?"
              body="Falls Sie die Antwort hier nicht finden, kontaktieren Sie unser Team jederzeit."
            />
          </MotionReveal>
          <MotionReveal className="mt-8" delay={0.06}>
            <FAQAccordion items={productFaq} />
          </MotionReveal>
        </div>
      </section>

      <InternalLinkGrid
        body="Die Unterseiten vertiefen die Haupt-Wedges der Plattform und geben Search- und AI-Systemen klarere Antwortziele."
        eyebrow="VERTIEFEN"
        links={productInternalLinks}
        title="Produkt-Wedges im Detail"
      />

      <CTABand
        eyebrow={productCta.eyebrow}
        body={productCta.body}
        primaryCta={productCta.primaryCta}
        title={productCta.title}
      />
    </main>
  );
}
