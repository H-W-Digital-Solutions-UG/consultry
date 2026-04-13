import { CTABand } from "@/components/marketing/CTABand";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { InternalLinkGrid, type InternalLinkCard } from "@/components/marketing/InternalLinkGrid";
import { PageBreadcrumbs, type BreadcrumbLink } from "@/components/marketing/PageBreadcrumbs";
import { AnswerHighlights, type AnswerHighlight } from "@/components/marketing/AnswerHighlights";
import { HeroMinimal } from "@/components/marketing/HeroMinimal";
import type { ComparisonTableContent } from "@/lib/content/de/product";

export type WedgeSection = {
  title: string;
  body: string;
  bullets?: readonly string[];
};

type WedgePageTemplateProps = {
  breadcrumbs: readonly BreadcrumbLink[];
  overline: string;
  title: string;
  introAnswer: string;
  keyTakeaways: readonly string[];
  sections: readonly WedgeSection[];
  faqBlocks: readonly AnswerHighlight[];
  internalLinks: readonly InternalLinkCard[];
  comparisonTable?: ComparisonTableContent;
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: {
      label: string;
      href: string;
    };
  };
};

export function WedgePageTemplate({
  breadcrumbs,
  overline,
  title,
  introAnswer,
  keyTakeaways,
  sections,
  faqBlocks,
  internalLinks,
  comparisonTable,
  cta,
}: WedgePageTemplateProps) {
  return (
    <main>
      <PageBreadcrumbs items={breadcrumbs} />

      <HeroMinimal
        align="left"
        body={introAnswer}
        overline={overline}
        title={title}
      />

      <section className="section-shell-tight">
        <div className="content-shell">
          <div className="surface-panel mx-auto max-w-4xl rounded-[var(--consultry-radius-xl)] px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-[1.625rem] font-semibold text-[var(--consultry-text-primary)]">
              Die Kernaussage
            </h2>
            <p className="body-lg mt-4">{introAnswer}</p>

            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {keyTakeaways.map((takeaway) => (
                <li
                  className="rounded-[var(--consultry-radius-md)] border border-[var(--consultry-border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-4 text-sm leading-[1.6] text-[var(--consultry-text-primary)]"
                  key={takeaway}
                >
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
        <div className="content-shell">
          <div className="mx-auto max-w-4xl space-y-6">
            {sections.map((section) => (
              <article
                className="surface-panel rounded-[var(--consultry-radius-xl)] px-6 py-8 sm:px-8"
                key={section.title}
              >
                <h2 className="text-[1.5rem] font-semibold leading-[1.25] text-[var(--consultry-text-primary)]">
                  {section.title}
                </h2>
                <p className="body-md mt-4">{section.body}</p>
                {section.bullets?.length ? (
                  <ul className="mt-5 space-y-3 text-sm leading-[1.65] text-[var(--consultry-text-primary)]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {comparisonTable ? <ComparisonTable content={comparisonTable} /> : null}

      <AnswerHighlights
        body="Diese Antworten sind bewusst kurz, direkt und suchfaehig formuliert."
        eyebrow="FRAGEN UND ANTWORTEN"
        items={faqBlocks}
        title="Die wichtigsten Fragen auf einen Blick"
      />

      <InternalLinkGrid
        body="Diese Seiten vertiefen angrenzende Themen und verbessern die interne Such- und Antwortstruktur."
        eyebrow="WEITERLESEN"
        links={internalLinks}
        title="Verwandte Themen"
      />

      <CTABand
        body={cta.body}
        eyebrow={cta.eyebrow}
        primaryCta={cta.primaryCta}
        title={cta.title}
      />
    </main>
  );
}
