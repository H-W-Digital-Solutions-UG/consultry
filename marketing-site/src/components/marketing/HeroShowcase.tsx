import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { HomepageHero } from "@/lib/content/de/homepage";

type HeroShowcaseProps = {
  hero: HomepageHero;
};

const HERO_METRIC_GRADIENTS = [
  "linear-gradient(145deg, rgba(240,168,94,0.3) 0%, rgba(191,83,71,0.2) 100%)",
  "linear-gradient(145deg, rgba(232,145,58,0.24) 0%, rgba(232,101,90,0.18) 68%, rgba(155,89,182,0.12) 100%)",
  "linear-gradient(145deg, rgba(191,83,71,0.22) 0%, rgba(232,101,90,0.16) 60%, rgba(155,89,182,0.14) 100%)",
  "linear-gradient(145deg, rgba(232,145,58,0.22) 0%, rgba(232,101,90,0.14) 42%, rgba(155,89,182,0.18) 100%)",
];

function HeroMetricCard({
  label,
  value,
  index,
}: {
  label: string;
  value: string;
  index: number;
}) {
  return (
    <article
      className="relative overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.1)] px-5 py-5 shadow-[0_18px_38px_rgba(0,0,0,0.2)]"
      style={{
        background:
          `${HERO_METRIC_GRADIENTS[index % HERO_METRIC_GRADIENTS.length]}, linear-gradient(180deg, rgba(48,40,36,0.96) 0%, rgba(36,31,28,0.98) 100%)`,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <p className="text-[1.8rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#faf7f2] sm:text-[2.1rem]">
        {value}
      </p>
      <p className="mt-2 max-w-[16ch] text-[13px] leading-[1.45] text-[rgba(233,227,220,0.72)] sm:text-[14px]">
        {label}
      </p>
    </article>
  );
}

export function HeroShowcase({ hero }: HeroShowcaseProps) {
  const leftMetrics = hero.metrics.slice(0, Math.ceil(hero.metrics.length / 2));
  const rightMetrics = hero.metrics.slice(Math.ceil(hero.metrics.length / 2));

  return (
    <section className="relative overflow-hidden bg-[var(--consultry-hero-background)] pb-12 pt-6 sm:pb-14 sm:pt-8 md:pb-16 md:pt-10 lg:pb-20 lg:pt-10 xl:pt-12">
      <div className="absolute inset-x-0 top-[-8rem] flex justify-center">
        <div className="h-[42rem] w-[76rem] rounded-full bg-[radial-gradient(circle,rgba(232,145,58,0.22)_0%,rgba(232,101,90,0.12)_32%,rgba(155,89,182,0.08)_58%,transparent_74%)] blur-3xl" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(250,250,249,0.08) 1px, transparent 0)",
          backgroundSize: "10px 10px",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.55), transparent 92%)",
        }}
      />

      <div className="content-shell relative">
        <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-8 sm:gap-10 md:gap-11 lg:gap-[52px]">
          <div className="mx-auto flex max-w-[48rem] flex-col items-center gap-4 text-center">
            <p className="eyebrow rise-in">{hero.eyebrow}</p>
            <div className="flex flex-col items-center">
              <h1 className="rise-in rise-in-delay-1 text-balance text-[clamp(2.35rem,9vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-[#fafaf9]">
                <span className="block">{hero.title[0]}</span>
                <span className="gradient-text-hero block">{hero.title[1]}</span>
                <span className="gradient-text-hero-alt block">{hero.title[2]}</span>
              </h1>
              <p className="rise-in rise-in-delay-2 mx-auto mt-4 max-w-[35rem] text-[15px] leading-[1.7] text-[rgba(250,250,249,0.65)] sm:text-[16px] md:text-[18px] md:leading-[1.6]">
                {hero.body}
              </p>
            </div>
          </div>

          <div className="grid w-full max-w-[1140px] gap-4 sm:gap-5 lg:grid-cols-[minmax(260px,1fr)_minmax(360px,520px)_minmax(260px,1fr)] lg:items-center lg:gap-8">
            <div className="hidden gap-4 lg:grid">
              {leftMetrics.map((metric, index) => (
                <HeroMetricCard
                  index={index}
                  key={`${metric.value}-${metric.label}`}
                  label={metric.label}
                  value={metric.value}
                />
              ))}
            </div>

            <div className="mx-auto flex w-full max-w-[520px] flex-col items-center gap-5">
              <div className="relative aspect-[520/380] w-full overflow-hidden rounded-[12px] bg-[rgba(33,29,26,0.95)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <Image
                  alt={hero.image.alt}
                  className="object-contain"
                  fill
                  loading="eager"
                  priority
                  sizes="(max-width: 1024px) min(92vw, 520px), 520px"
                  src={hero.image.src}
                />
              </div>

              <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-[14px]">
                <Button
                  className="w-full max-w-[15.5rem] px-5 py-2.5 text-[15px] sm:w-auto sm:max-w-none sm:px-8 sm:py-3 sm:text-[18px]"
                  href={hero.primaryCta.href}
                  size="lg"
                >
                  {hero.primaryCta.label}
                </Button>
                <Button
                  className="w-full max-w-[15.5rem] px-5 py-2.5 text-[15px] sm:w-auto sm:max-w-none sm:px-8 sm:py-3 sm:text-[18px]"
                  href={hero.secondaryCta.href}
                  size="lg"
                  variant="secondary"
                >
                  {hero.secondaryCta.label}
                </Button>
              </div>

              {hero.metrics.length ? (
                <div className="grid w-full grid-cols-2 gap-3 lg:hidden">
                  {hero.metrics.map((metric, index) => (
                    <div
                      className="overflow-hidden rounded-[16px] border border-[rgba(255,255,255,0.08)] px-4 py-3.5"
                      key={metric.label}
                      style={{
                        background:
                          `${HERO_METRIC_GRADIENTS[index % HERO_METRIC_GRADIENTS.length]}, linear-gradient(180deg, rgba(43,38,35,0.96) 0%, rgba(36,31,28,0.98) 100%)`,
                      }}
                    >
                      <p className="text-[18px] font-extrabold leading-[1.15] text-[#faf7f2] sm:text-[22px]">
                        {metric.value}
                      </p>
                      <p className="mt-1.5 text-[12px] leading-[1.4] text-[rgba(212,207,199,0.55)]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="hidden gap-4 lg:grid">
              {rightMetrics.map((metric, index) => (
                <HeroMetricCard
                  index={index + leftMetrics.length}
                  key={`${metric.value}-${metric.label}`}
                  label={metric.label}
                  value={metric.value}
                />
              ))}
            </div>
          </div>

          <p className="px-4 text-center text-[14px] leading-[1.6] text-[rgba(217,212,207,0.7)] sm:text-[15px] md:text-[16px]">
            {hero.proofLine}
          </p>
        </div>
      </div>
    </section>
  );
}
