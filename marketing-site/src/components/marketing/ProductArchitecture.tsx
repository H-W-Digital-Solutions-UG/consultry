import type { ProductArchitectureContent } from "@/lib/content/de/product";
import { MotionReveal } from "@/components/marketing/MotionReveal";

type ProductArchitectureProps = {
  content: ProductArchitectureContent;
};

export function ProductArchitecture({ content }: ProductArchitectureProps) {
  return (
    <section className="section-shell-tight" id="architecture">
      <div className="content-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <MotionReveal className="max-w-xl" x={-28}>
            <p className="eyebrow">{content.overline}</p>
            <h2 className="display-section text-balance mt-4 text-[var(--consultry-text-primary)]">
              {content.title}
            </h2>
            <p className="body-lg mt-5">{content.body}</p>
          </MotionReveal>

          <MotionReveal className="surface-panel rounded-[var(--consultry-radius-xl)] p-4 sm:p-5" delay={0.08} x={28}>
            <div className="grid gap-4 lg:grid-cols-[1fr_0.88fr]">
              <div className="space-y-3">
                {content.layers.map((layer) => (
                  <article
                    className="rounded-[var(--consultry-radius-md)] border border-[var(--consultry-border-soft)] bg-white/4 px-4 py-4 transition-transform duration-300 hover:-translate-y-1"
                    key={layer.title}
                  >
                    <p className="text-lg font-semibold text-[var(--consultry-text-primary)]">{layer.title}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--consultry-text-muted)]">{layer.summary}</p>
                    <p className="mt-3 text-xs leading-5 text-[var(--consultry-text-faint)]">
                      {layer.capabilities.join(" · ")}
                    </p>
                  </article>
                ))}
              </div>

              <div className="rounded-[var(--consultry-radius-lg)] border border-[var(--consultry-border-soft)] bg-[linear-gradient(180deg,rgba(58,56,51,0.92),rgba(26,24,21,0.98))] p-5">
                <p className="eyebrow">{content.workflowOverline}</p>
                <h3 className="mt-4 text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--consultry-text-primary)]">
                  {content.workflowTitle}
                </h3>
                <div className="mt-5 space-y-3">
                  {content.workflowSteps.map((step, index) => (
                    <div
                      className={[
                        "flex items-center justify-between rounded-[var(--consultry-radius-md)] border px-4 py-3 text-sm transition-transform duration-300 hover:-translate-y-0.5",
                        index === 0
                          ? "border-[rgba(232,145,58,0.32)] bg-[rgba(232,145,58,0.1)] text-[var(--consultry-text-primary)]"
                          : "border-[var(--consultry-border-soft)] bg-white/3 text-[var(--consultry-text-muted)]",
                      ].join(" ")}
                      key={step}
                    >
                      <span>{step}</span>
                      <span className="text-xs uppercase tracking-[0.18em] text-[var(--consultry-text-faint)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-[var(--consultry-radius-md)] border border-[var(--consultry-border-soft)] bg-[rgba(19,17,15,0.9)] p-4">
                  <p className="text-sm leading-6 text-[var(--consultry-text-muted)]">{content.workflowBody}</p>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
