type LegalPageSection = {
  title: string;
  body: string;
};

type LegalPageTemplateProps = {
  overline: string;
  title: string;
  sections: LegalPageSection[];
  lastUpdated: string;
};

export function LegalPageTemplate({
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
          </div>

          <div className="mt-8 h-px w-full bg-[rgba(255,255,255,0.1)]" />

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section className="max-w-[58rem]" key={section.title}>
                <h2 className="text-[1.625rem] font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--consultry-text-primary)]">
                  {section.title}
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-[var(--consultry-text-muted)]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-12 text-sm text-[var(--consultry-text-faint)]">Stand: {lastUpdated}</p>
        </div>
      </section>
    </main>
  );
}
