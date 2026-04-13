import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/marketing/JsonLd";
import { WedgePageTemplate } from "@/components/marketing/WedgePageTemplate";
import { buildPageMetadata } from "@/lib/seo";
import {
  buildBreadcrumbJsonLd,
  buildSoftwareApplicationJsonLd,
} from "@/lib/structured-data";
import {
  type WedgeSlug,
  wedgeContent,
  wedgeSlugs,
} from "@/lib/content/de/wedges";

type WedgePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function isWedgeSlug(value: string): value is WedgeSlug {
  return wedgeSlugs.includes(value as WedgeSlug);
}

export async function generateStaticParams() {
  return wedgeSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: WedgePageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isWedgeSlug(slug)) {
    return buildPageMetadata({
      title: "Produkt",
      description: "Consultry Produktseite fuer DACH-Beratungen.",
      path: "/produkt",
      noindex: true,
    });
  }

  const content = wedgeContent[slug];

  return buildPageMetadata({
    title: content.title,
    description: content.description,
    path: `/produkt/${slug}`,
    keywords: content.keywords,
  });
}

export default async function ProductWedgePage({ params }: WedgePageProps) {
  const { slug } = await params;

  if (!isWedgeSlug(slug)) {
    notFound();
  }

  const content = wedgeContent[slug];

  return (
    <>
      <JsonLd
        data={[
          buildSoftwareApplicationJsonLd({
            description: content.description,
            path: `/produkt/${slug}`,
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Produkt", path: "/produkt" },
            { name: content.title, path: `/produkt/${slug}` },
          ]),
        ]}
      />
      <WedgePageTemplate
        comparisonTable={content.comparisonTable}
        cta={{
          eyebrow: "DEMO",
          title: "Sehen Sie den Workflow in Ihrer eigenen Beratungslogik",
          body: "In einer persoenlichen Demo zeigen wir, wie Consultry den beschriebenen Wedge in Ihren Kunden-, Team- und Delivery-Kontext uebersetzt.",
          primaryCta: {
            label: "Demo anfragen",
            href: "/#waitlist",
          },
        }}
        faqBlocks={content.faqBlocks}
        internalLinks={content.internalLinks}
        introAnswer={content.introAnswer}
        keyTakeaways={content.keyTakeaways}
        overline={content.overline}
        sections={content.sections}
        title={content.title}
      />
    </>
  );
}
