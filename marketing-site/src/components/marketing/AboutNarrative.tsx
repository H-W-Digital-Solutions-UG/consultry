import { MotionReveal } from "@/components/marketing/MotionReveal";

type AboutNarrativeProps = {
  overline: string;
  title: string;
  paragraphs: ReadonlyArray<string>;
  proofRail: ReadonlyArray<{
    value: string;
    label: string;
    detail: string;
  }>;
};

export function AboutNarrative({
  overline,
  title,
  paragraphs,
  proofRail,
}: AboutNarrativeProps) {
  return (
    <section className="section-shell-tight">
      <div className="content-shell">
        <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <MotionReveal className="surface-panel rounded-[var(--consultry-radius-xl)] px-6 py-8 sm:px-8 sm:py-10" x={-24}>
            <p className="eyebrow">{overline}</p>
            <h2 className="display-section text-balance mt-4 text-[var(--consultry-text-primary)]">
              {title}
            </h2>
            <div className="mt-8 space-y-6">
              {paragraphs.map((paragraph) => (
                <p className="body-lg max-w-none" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </MotionReveal>

          <div className="space-y-4">
            {proofRail.map((item, index) => (
              <MotionReveal delay={0.04 * index} key={item.label} x={24}>
                <article className="surface-panel rounded-[var(--consultry-radius-xl)] px-6 py-6 transition-transform duration-300 hover:-translate-y-1 sm:px-7">
                  <p className="text-4xl font-semibold tracking-[-0.04em] text-[var(--consultry-text-primary)]">
                    {item.value}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--consultry-text-primary)]">
                    {item.label}
                  </h3>
                  <p className="body-md mt-2">{item.detail}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
