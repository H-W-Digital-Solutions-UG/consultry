import type { ReactNode } from "react";

type LegalPageSection = {
  title: string;
  body: ReactNode;
};

type LegalPageMetaItem = {
  label: string;
  value: string;
};

type LegalPageTemplateProps = {
  intro?: ReactNode;
  metaItems?: LegalPageMetaItem[];
  title: string;
  sections: LegalPageSection[];
  lastUpdated: string;
};

export function LegalPageTemplate({
  intro,
  metaItems,
  title,
  sections,
  lastUpdated,
}: LegalPageTemplateProps) {
  return (
    <div className="max-w-[58rem]">
      <h2 className="text-[clamp(2.1rem,4.3vw,3.4rem)] font-extrabold leading-[0.98] tracking-[-0.042em] text-[var(--consultry-text-primary)]">
        {title}
      </h2>
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

      <div className="mt-8 h-px w-full bg-[rgba(255,255,255,0.1)]" />

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section className="max-w-[58rem]" key={section.title}>
            <h3 className="text-[1.625rem] font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--consultry-text-primary)]">
              {section.title}
            </h3>
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
  );
}
