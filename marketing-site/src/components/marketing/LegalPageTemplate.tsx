import type { ReactNode } from "react";
import { LegalDocumentNav } from "@/components/marketing/LegalDocumentNav";

type LegalPageSection = {
  title: string;
  body: ReactNode;
};

type LegalPageMetaItem = {
  label: string;
  value: string;
};

type LegalPageTemplateProps = {
  currentDocumentHref?: string;
  intro?: ReactNode;
  metaItems?: LegalPageMetaItem[];
  overline: string;
  title: string;
  sections: LegalPageSection[];
  lastUpdated: string;
};

export function LegalPageTemplate({
  currentDocumentHref,
  intro,
  metaItems,
  overline,
  title,
  sections,
  lastUpdated,
}: LegalPageTemplateProps) {
  return (
    <main>
      <section className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(232,145,58,0.16),rgba(191,83,71,0.08),transparent)]" />
        <div className="mx-auto w-[min(100%-2rem,90rem)]">
          <div className="max-w-[58rem]">
            <p className="eyebrow">{overline}</p>
            <h1 className="mt-6 text-[clamp(2.6rem,6vw,4.25rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-[var(--consultry-text-primary)]">
              {title}
            </h1>
            {currentDocumentHref ? <LegalDocumentNav currentHref={currentDocumentHref} /> : null}
            {metaItems?.length ? (
              <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                {metaItems.map((item) => (
                  <div
                    className="rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-3.5"
                    key={`${item.label}-${item.value}`}
                  >
                    <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--consultry-text-faint)]">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-[14px] font-medium text-[var(--consultry-text-primary)]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {intro ? (
              <div className="mt-8 max-w-[58rem] space-y-4 text-[15px] leading-7 text-[var(--consultry-text-muted)] [&_a]:text-[var(--consultry-text-primary)] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[var(--consultry-brand-warm)] [&_strong]:font-semibold [&_strong]:text-[var(--consultry-text-primary)]">
                {intro}
              </div>
            ) : null}
          </div>

          <div className="mt-8 h-px w-full bg-[rgba(255,255,255,0.1)]" />

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section className="max-w-[58rem]" key={section.title}>
                <h2 className="text-[1.625rem] font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--consultry-text-primary)]">
                  {section.title}
                </h2>
                {typeof section.body === "string" ? (
                  <p className="mt-3 text-[15px] leading-7 text-[var(--consultry-text-muted)]">
                    {section.body}
                  </p>
                ) : (
                  <div className="mt-3 space-y-4 text-[15px] leading-7 text-[var(--consultry-text-muted)] [&_a]:text-[var(--consultry-text-primary)] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[var(--consultry-brand-warm)] [&_strong]:font-semibold [&_strong]:text-[var(--consultry-text-primary)] [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc">
                    {section.body}
                  </div>
                )}
              </section>
            ))}
          </div>

          <p className="mt-12 text-sm text-[var(--consultry-text-faint)]">Stand: {lastUpdated}</p>
        </div>
      </section>
    </main>
  );
}
