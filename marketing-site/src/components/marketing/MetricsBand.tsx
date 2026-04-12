import type { HomepageMetric } from "@/lib/content/de/homepage";

type MetricsBandProps = {
  eyebrow: string;
  title: string;
  body: string;
  metrics: ReadonlyArray<HomepageMetric>;
  footnote: string;
};

const CARD_ACCENTS = [
  { gradient: "linear-gradient(135deg, #e8913a, #bf5347)", glow: "rgba(232,145,58,0.12)" },
  { gradient: "linear-gradient(135deg, #bf5347, #e8655a)", glow: "rgba(191,83,71,0.12)" },
  { gradient: "linear-gradient(135deg, #e8655a, #9b59b6)", glow: "rgba(232,101,90,0.12)" },
  { gradient: "linear-gradient(135deg, #9b59b6, #c084e5)", glow: "rgba(155,89,182,0.12)" },
];

export function MetricsBand({ eyebrow, title, body, metrics, footnote }: MetricsBandProps) {
  return (
    <section className="pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
      <div className="content-shell">
        <div className="overflow-hidden rounded-[12px] bg-[var(--consultry-surface-dark)] px-4 py-8 shadow-[var(--consultry-shadow-lg)] sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 text-[clamp(1.95rem,8vw,3.2rem)] font-bold tracking-[-0.03em] text-[var(--consultry-text-primary)]">
              {title}
            </h2>
            <p className="mt-3 text-[15px] leading-[1.65] text-[rgba(168,162,158,0.95)] sm:text-[16px] lg:text-[18px]">
              {body}
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => {
              const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];

              return (
                <article
                  className="group relative overflow-hidden rounded-[16px] border border-[rgba(255,255,255,0.1)] bg-[#3a3833] px-5 py-6 transition-all duration-300 hover:border-[rgba(255,255,255,0.16)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] sm:px-6 sm:py-7"
                  key={metric.label}
                >
                  {/* Top accent gradient line */}
                  <div
                    className="absolute inset-x-0 top-0 h-[3px] opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: accent.gradient }}
                  />

                  {/* Subtle corner glow */}
                  <div
                    className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: accent.glow, opacity: 0.6 }}
                  />

                  <div className="relative">
                    <p className="text-[34px] font-bold leading-none tracking-[-0.03em] text-[#e8913a] sm:text-[40px] lg:text-[48px]">
                      {metric.value}
                    </p>
                    <div
                      className="mt-3 h-px w-8 opacity-40"
                      style={{ background: accent.gradient }}
                    />
                    <p className="mt-3 text-[16px] font-semibold text-[var(--consultry-text-primary)] sm:text-[17px] lg:text-[18px]">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-[13px] leading-[1.5] text-[rgba(168,162,158,0.95)] sm:text-[14px]">
                      {metric.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-5 text-center text-[12px] text-[var(--consultry-text-faint)] sm:mt-6 sm:text-sm">{footnote}</p>
        </div>
      </div>
    </section>
  );
}
