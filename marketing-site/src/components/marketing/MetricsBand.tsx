import { Button } from "@/components/ui/Button";
import type { HomepageMetric } from "@/lib/content/de/homepage";

type MetricsBandProps = {
  eyebrow: string;
  title: string;
  body: string;
  metrics: ReadonlyArray<HomepageMetric>;
  footnote: string;
  cta?: {
    label: string;
    href: string;
  };
};

const CARD_ACCENTS = [
  { gradient: "linear-gradient(135deg, #e8913a, #bf5347)", glow: "rgba(232,145,58,0.12)" },
  { gradient: "linear-gradient(135deg, #bf5347, #e8655a)", glow: "rgba(191,83,71,0.12)" },
  { gradient: "linear-gradient(135deg, #e8655a, #9b59b6)", glow: "rgba(232,101,90,0.12)" },
  { gradient: "linear-gradient(135deg, #9b59b6, #c084e5)", glow: "rgba(155,89,182,0.12)" },
];

export function MetricsBand({ eyebrow, title, body, metrics, footnote, cta }: MetricsBandProps) {
  return (
    <section className="relative overflow-hidden border-y border-[rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,rgba(37,29,26,0.98)_0%,rgba(28,23,20,0.98)_30%,rgba(23,19,17,1)_100%)] py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.92) 16%, rgba(0,0,0,0.92) 84%, rgba(0,0,0,0.28) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-8%] top-[-30%] h-[155%] opacity-80 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(244,183,109,0.18) 0%, rgba(232,101,90,0.12) 36%, rgba(20,17,15,0) 72%)",
        }}
      />

      <div className="content-shell relative">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] xl:items-start xl:gap-12">
          <div className="max-w-[34rem]">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 max-w-[14ch] text-[clamp(2.25rem,4vw,3.45rem)] font-bold leading-[1.02] tracking-[-0.04em] text-[var(--consultry-text-primary)]">
              {title}
            </h2>
            <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.72] text-[rgba(255,255,255,0.72)] sm:text-[16px] lg:text-[18px]">
              {body}
            </p>
            {cta ? (
              <div className="mt-6 hidden xl:block">
                <Button
                  className="min-w-[13rem] px-8 py-3 text-[16px] font-semibold"
                  href={cta.href}
                  size="lg"
                >
                  {cta.label}
                </Button>
              </div>
            ) : null}
            <p className="mt-6 max-w-[34rem] border-l border-[rgba(255,255,255,0.08)] pl-4 text-[12px] leading-[1.7] text-[var(--consultry-text-faint)] sm:text-[13px]">
              {footnote}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric, index) => {
              const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
              const badge = String(index + 1).padStart(2, "0");

              return (
                <article
                  className="group relative overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(58,53,49,0.78)_0%,rgba(44,41,38,0.92)_100%)] px-5 py-6 transition-all duration-300 hover:border-[rgba(255,255,255,0.14)] hover:translate-y-[-2px] hover:shadow-[0_18px_42px_rgba(0,0,0,0.22)] sm:px-6 sm:py-7"
                  key={metric.label}
                >
                  <div
                    className="absolute inset-y-0 left-0 w-[3px] opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: accent.gradient }}
                  />
                  <div
                    className="pointer-events-none absolute -right-10 top-[-3.5rem] h-28 w-28 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: accent.glow, opacity: 0.55 }}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.38)]">
                        [{badge}]
                      </span>
                      <div
                        className="h-px flex-1 opacity-50"
                        style={{ background: accent.gradient }}
                      />
                    </div>

                    <p className="mt-5 text-[2rem] font-bold leading-none tracking-[-0.04em] text-[#f0a85e] sm:text-[2.4rem] lg:text-[2.8rem]">
                      {metric.value}
                    </p>
                    <p className="mt-4 text-[17px] font-semibold leading-[1.2] text-[var(--consultry-text-primary)] sm:text-[18px]">
                      {metric.label}
                    </p>
                    <p className="mt-2 max-w-[30ch] text-[13px] leading-[1.65] text-[rgba(255,255,255,0.68)] sm:text-[14px]">
                      {metric.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {cta ? (
          <div className="mt-8 flex justify-center xl:hidden">
            <Button
              className="min-w-[13rem] px-8 py-3 text-[16px] font-semibold"
              href={cta.href}
              size="lg"
            >
              {cta.label}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
