type StaticContentPageProps = {
  overline: string;
  title: string;
  intro: string;
  paragraphs: string[];
};

export function StaticContentPage({
  overline,
  title,
  intro,
  paragraphs,
}: StaticContentPageProps) {
  return (
    <main>
      <section className="section-shell">
        <div className="content-shell">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow text-center">{overline}</p>
            <h1 className="display-hero mx-auto mt-6 max-w-3xl text-balance text-center text-[var(--consultry-text-primary)]">
              {title}
            </h1>
            <p className="body-lg mx-auto mt-6 max-w-3xl text-center">{intro}</p>
          </div>
        </div>
      </section>

      <section className="section-shell-tight pb-24">
        <div className="content-shell">
          <article className="surface-panel mx-auto max-w-3xl rounded-[var(--consultry-radius-xl)] px-6 py-8 sm:px-8 sm:py-10">
            <div className="space-y-6">
              {paragraphs.map((paragraph) => (
                <p className="body-md" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
