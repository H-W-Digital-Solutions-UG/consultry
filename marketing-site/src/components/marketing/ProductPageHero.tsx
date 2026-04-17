import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import { cn } from "@/lib/cn";
import type { ProductHeroContent } from "@/lib/content/de/product";

type ProductPageHeroProps = {
  content: ProductHeroContent;
};

const previewBars = [
  { height: 18, color: "#e8913a", opacity: 0.7 },
  { height: 26, color: "#e8913a", opacity: 0.8 },
  { height: 22, color: "#e8913a", opacity: 0.9 },
  { height: 31, color: "#e8913a", opacity: 0.7 },
  { height: 48, color: "#e8913a", opacity: 0.8 },
  { height: 38, color: "#e8655a", opacity: 0.9 },
  { height: 56, color: "#e8655a", opacity: 0.7 },
  { height: 44, color: "#e8655a", opacity: 0.8 },
  { height: 62, color: "#e8655a", opacity: 0.9 },
  { height: 52, color: "#e8655a", opacity: 0.7 },
  { height: 65, color: "#bf5347", opacity: 0.8 },
  { height: 59, color: "#bf5347", opacity: 0.9 },
  { height: 69, color: "#bf5347", opacity: 0.7 },
  { height: 61, color: "#bf5347", opacity: 0.8 },
  { height: 40, color: "#bf5347", opacity: 0.9 },
  { height: 51, color: "#9b59b6", opacity: 0.7 },
  { height: 36, color: "#9b59b6", opacity: 0.8 },
  { height: 54, color: "#9b59b6", opacity: 0.9 },
  { height: 46, color: "#9b59b6", opacity: 0.7 },
  { height: 65, color: "#9b59b6", opacity: 0.8 },
] as const;

const previewStats = [
  { value: "87", label: "Opportunities" },
  { value: "2.4M EUR", label: "Pipeline Wert" },
  { value: "+34%", label: "vs. Vorquartal" },
  { value: "12", label: "Hot Leads" },
] as const;

function ProductHeroDashboardPreview({
  alt,
  compact = false,
}: {
  alt: string;
  compact?: boolean;
}) {
  return (
    <div
      aria-label={alt}
      className={cn(
        "overflow-hidden rounded-[24px] border border-[#3a3835] bg-[#2c2926] shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        compact && "rounded-[22px]",
      )}
      role="img"
    >
      <div className={cn("flex items-center gap-3 bg-[#1e1b18]", compact ? "px-4 py-2.5" : "px-5 py-3")}>
        <span className="h-2 w-2 rounded-full bg-[#e86659]" />
        <p className={cn("font-semibold text-[#fafaf9]", compact ? "text-[13px]" : "text-[14px]")}>
          Pipeline Intelligence
        </p>
        <p className={cn("text-[#78716c]", compact ? "text-[11px]" : "text-[12px]")}>Q1 2026</p>
      </div>

      <div className={cn(compact ? "px-4 pb-4 pt-3" : "px-5 pb-5 pt-4 sm:px-6 sm:pb-6")}>
        <div
          className={cn(
            "grid grid-cols-20 items-end gap-1.5",
            compact ? "h-[96px]" : "h-[122px] sm:h-[160px]",
          )}
        >
          {previewBars.map((bar, index) => (
            <div
              className="w-full rounded-[3px]"
              key={`${bar.color}-${index}`}
              style={{
                backgroundColor: bar.color,
                height: `${bar.height}%`,
                opacity: bar.opacity,
              }}
            />
          ))}
        </div>

        <div
          className={cn(
            "grid grid-cols-2 gap-y-4",
            compact ? "mt-4 gap-x-4" : "mt-5 gap-x-6 sm:grid-cols-4 sm:gap-x-8",
          )}
        >
          {previewStats.map((stat) => (
            <div className="min-w-0" key={stat.label}>
              <p className={cn("font-bold leading-none text-[#fafaf9]", compact ? "text-[16px]" : "text-[18px]")}>
                {stat.value}
              </p>
              <p className={cn("mt-1 leading-[1.2] text-[#78716c]", compact ? "text-[10px]" : "text-[11px]")}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductPageHero({ content }: ProductPageHeroProps) {
  return (
    <section
      className="relative -mt-[4.45rem] overflow-hidden pb-10 pt-[calc(4.45rem+2.5rem)] sm:pb-20 sm:pt-[calc(4.45rem+5rem)] lg:pb-16 lg:pt-[calc(4.45rem+4rem)]"
      style={{
        background: "var(--consultry-hero-background)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(232,101,90,0.18)_0%,rgba(232,101,90,0.14)_14%,rgba(232,101,90,0.07)_30%,transparent_58%),radial-gradient(circle_at_35%_12%,rgba(232,145,58,0.12)_0%,rgba(232,145,58,0.07)_18%,transparent_48%),linear-gradient(180deg,rgba(63,34,28,0.28)_0%,rgba(63,34,28,0.14)_22%,rgba(63,34,28,0.04)_46%,transparent_72%)]"
      />
      <div className="content-shell">
        <div className="grid min-h-[calc(100svh-4rem)] items-start gap-10 lg:min-h-[clamp(38rem,78svh,50rem)] lg:grid-cols-[minmax(0,1fr)_minmax(470px,580px)] lg:items-center lg:gap-12 xl:min-h-[clamp(40rem,80svh,52rem)] xl:gap-14">
          {/* Left — Copy */}
          <div className="max-w-[43rem] lg:py-6">
            <p className="rise-in text-[13px] font-semibold tracking-[0.14em] text-[#e8913b] sm:text-[15px]">
              {content.overline}
            </p>
            <h1 className="rise-in rise-in-delay-1 mt-4 text-[clamp(2.55rem,12vw,3.45rem)] font-bold leading-[0.94] tracking-[-0.04em] text-[#faf7f2] sm:mt-5 sm:text-[clamp(2.9rem,6vw,3.5rem)] sm:leading-[1]">
              <span className="block sm:whitespace-nowrap">{content.title[0] ?? ""}</span>
              <span className="gradient-text-safe block bg-[linear-gradient(90deg,#e8913b_0%,#e86659_50%,#bf5447_100%)] bg-clip-text text-transparent sm:whitespace-nowrap">
                {content.title[1] ?? ""}
              </span>
              <span className="gradient-text-safe block bg-[linear-gradient(90deg,#bf5447_0%,#e8913b_100%)] bg-clip-text text-transparent sm:whitespace-nowrap">
                {content.title[2] ?? ""}
              </span>
            </h1>
            <p className="rise-in rise-in-delay-2 mt-6 max-w-[35rem] text-[16px] leading-[1.55] text-[rgba(212,207,199,0.7)] sm:mt-8 sm:text-[18px] sm:leading-[1.65]">
              {content.body}
            </p>

            <div className="rise-in rise-in-delay-3 mt-6 sm:hidden">
              <Button
                className="w-full px-6 py-3 text-[16px] font-semibold"
                href={content.primaryCta.href}
              >
                {content.primaryCta.label}
              </Button>
            </div>

            <MotionReveal className="mt-8 lg:hidden" delay={0.1} scale={0.985}>
              <div className="overflow-hidden rounded-[28px] border border-[rgba(71,64,56,0.74)] bg-[linear-gradient(180deg,rgba(31,27,24,0.96)_0%,rgba(24,21,19,0.98)_100%)] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
                <ProductHeroDashboardPreview alt={content.preview.alt} compact />
              </div>
            </MotionReveal>

            <div className="rise-in rise-in-delay-3 mt-4 sm:hidden">
              <Button
                className="w-full px-6 py-3 text-[16px] font-semibold"
                href={content.secondaryCta.href}
                variant="secondary"
              >
                {content.secondaryCta.label}
              </Button>
            </div>

            <div className="rise-in rise-in-delay-3 mt-6 hidden sm:flex sm:flex-row sm:flex-wrap sm:gap-4">
              <Button
                className="px-6 py-3 text-[16px] font-semibold sm:w-auto sm:px-9 sm:py-3.5 sm:text-[18px]"
                href={content.primaryCta.href}
              >
                {content.primaryCta.label}
              </Button>
              <Button
                className="px-6 py-3 text-[16px] font-semibold sm:w-auto sm:px-9 sm:py-3.5 sm:text-[18px]"
                href={content.secondaryCta.href}
                variant="secondary"
              >
                {content.secondaryCta.label}
              </Button>
            </div>

            <p className="rise-in rise-in-delay-4 mt-6 max-w-[32rem] text-[13px] leading-[1.55] text-[rgba(217,212,207,0.62)] sm:mt-7 sm:text-[14px] sm:leading-[1.5]">
              {content.proofLine}
            </p>
          </div>

          {/* Right — Platform Preview */}
          <MotionReveal className="hidden w-full lg:block lg:justify-self-end" delay={0.14} scale={0.985} x={28}>
            <div className="w-full max-w-[580px]">
              <div className="overflow-hidden rounded-[28px] border border-[rgba(71,64,56,0.72)] bg-[#1a1816] p-5 transition-transform duration-500 hover:-translate-y-1 sm:p-6">
                <p className="mb-4 text-[14px] tracking-[0.12em] text-[rgba(212,207,199,0.55)]">
                  PLATFORM PREVIEW
                </p>
                <ProductHeroDashboardPreview alt={content.preview.alt} />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {content.metrics.map((metric) => (
                  <div
                    className="rounded-[16px] border border-[rgba(71,64,56,0.65)] bg-[rgba(43,38,35,0.96)] px-4 py-3.5 transition-transform duration-300 hover:-translate-y-1 hover:border-[rgba(232,145,59,0.34)]"
                    key={metric.label}
                  >
                    <p className="text-[22px] font-extrabold leading-[1.15] text-[#faf7f2]">
                      {metric.value}
                    </p>
                    <p className="mt-1.5 text-[12px] leading-[1.4] text-[rgba(212,207,199,0.55)]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
