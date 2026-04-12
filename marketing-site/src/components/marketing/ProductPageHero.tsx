import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/marketing/MotionReveal";
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

function ProductHeroDashboardPreview({ alt }: { alt: string }) {
  return (
    <div
      aria-label={alt}
      className="overflow-hidden rounded-[24px] border border-[#3a3835] bg-[#2c2926] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      role="img"
    >
      <div className="flex items-center gap-3 bg-[#1e1b18] px-5 py-3">
        <span className="h-2 w-2 rounded-full bg-[#e86659]" />
        <p className="text-[14px] font-semibold text-[#fafaf9]">Pipeline Intelligence</p>
        <p className="text-[12px] text-[#78716c]">Q1 2026</p>
      </div>

      <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
        <div className="grid h-[122px] grid-cols-20 items-end gap-1.5 sm:h-[160px]">
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

        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 sm:gap-x-8">
          {previewStats.map((stat) => (
            <div className="min-w-0" key={stat.label}>
              <p className="text-[18px] font-bold leading-none text-[#fafaf9]">{stat.value}</p>
              <p className="mt-1 text-[11px] leading-[1.2] text-[#78716c]">{stat.label}</p>
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
      className="relative overflow-hidden pb-14 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-20"
      style={{
        background: "var(--consultry-hero-background)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_22%_18%,rgba(232,101,90,0.16),transparent_28%),radial-gradient(circle_at_34%_10%,rgba(232,145,58,0.1),transparent_24%)]" />
      <div className="content-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(470px,580px)] lg:gap-12 xl:gap-14">
          {/* Left — Copy */}
          <div className="max-w-[40rem]">
            <p className="rise-in text-[14px] font-semibold tracking-[0.14em] text-[#e8913b] sm:text-[15px]">
              {content.overline}
            </p>
            <h1 className="rise-in rise-in-delay-1 mt-5 text-[clamp(2.9rem,6vw,3.5rem)] font-extrabold leading-[0.97] tracking-[-0.045em] text-[#faf7f2]">
              <span className="block sm:whitespace-nowrap">{content.title[0] ?? ""}</span>
              <span className="block bg-[linear-gradient(90deg,#e8913b_0%,#e86659_50%,#bf5447_100%)] bg-clip-text text-transparent sm:whitespace-nowrap">
                {content.title[1] ?? ""}
              </span>
              <span className="block bg-[linear-gradient(90deg,#bf5447_0%,#e8913b_100%)] bg-clip-text text-transparent sm:whitespace-nowrap">
                {content.title[2] ?? ""}
              </span>
            </h1>
            <p className="rise-in rise-in-delay-2 mt-8 max-w-[33rem] text-[18px] leading-[1.65] text-[rgba(212,207,199,0.7)]">
              {content.body}
            </p>

            <div className="rise-in rise-in-delay-3 mt-8 flex flex-wrap gap-4">
              <Button
                className="bg-white px-9 py-3.5 text-[18px] font-semibold !text-[#1f140f] shadow-none hover:bg-[#f5f1ed]"
                href={content.primaryCta.href}
              >
                {content.primaryCta.label}
              </Button>
              <Button
                className="border-white/60 bg-transparent px-9 py-3.5 text-[18px] font-semibold !text-white hover:border-white hover:bg-white/6"
                href={content.secondaryCta.href}
                variant="secondary"
              >
                {content.secondaryCta.label}
              </Button>
            </div>

            <p className="rise-in rise-in-delay-4 mt-7 text-[14px] leading-[1.5] text-[rgba(255,255,255,0.35)]">
              {content.proofLine}
            </p>
          </div>

          {/* Right — Platform Preview */}
          <MotionReveal className="w-full lg:justify-self-end" delay={0.14} scale={0.985} x={28}>
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
