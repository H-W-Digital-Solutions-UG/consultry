import { Button } from "@/components/ui/Button";
import type { HomepageHero } from "@/lib/content/de/homepage";

type HeroShowcaseProps = {
  hero: HomepageHero;
};

export function HeroShowcaseHomepage({ hero }: HeroShowcaseProps) {
  const headline = hero.title.join(" ");

  return (
    <section className="relative isolate overflow-hidden bg-[#140f0d]">
      <div className="absolute inset-0">
        <video
          aria-hidden="true"
          autoPlay
          className="h-full w-full object-cover object-center opacity-[0.42] saturate-[0.82]"
          loop
          muted
          playsInline
          poster={hero.image.src}
          preload="auto"
        >
          <source src="/videos/testbackground.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,12,10,0.94) 0%, rgba(16,12,10,0.82) 24%, rgba(16,12,10,0.38) 55%, rgba(16,12,10,0.74) 100%), linear-gradient(180deg, rgba(16,12,10,0.2) 0%, rgba(16,12,10,0.04) 18%, rgba(16,12,10,0.54) 76%, rgba(16,12,10,0.88) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(250,250,249,0.08) 1px, transparent 0)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.7), transparent 92%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(16,12,10,0.72) 0%, rgba(16,12,10,0.18) 68%, transparent 100%)",
        }}
      />

      <div className="content-shell relative">
        <div className="flex min-h-[clamp(34rem,80svh,48rem)] items-end py-10 sm:py-12 lg:min-h-[clamp(38rem,84svh,52rem)] lg:py-14">
          <div className="max-w-[39rem]">
            <p className="eyebrow rise-in">{hero.eyebrow}</p>
            <h1 className="rise-in rise-in-delay-1 mt-5 max-w-[11ch] text-balance text-[clamp(2.7rem,7vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[#f7f2eb]">
              {headline}
            </h1>
            <p className="rise-in rise-in-delay-2 mt-5 max-w-[34rem] text-[15px] leading-[1.7] text-[rgba(247,242,235,0.76)] sm:text-[16px] lg:text-[18px] lg:leading-[1.62]">
              {hero.body}
            </p>

            <div className="rise-in rise-in-delay-3 mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <Button
                className="min-w-[13.5rem] px-6 py-3 text-[15px] sm:px-7 sm:text-[16px]"
                href={hero.primaryCta.href}
                size="lg"
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                className="min-w-[13.5rem] border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.04)] px-6 py-3 text-[15px] text-[rgba(247,242,235,0.92)] backdrop-blur-sm hover:border-[rgba(240,168,94,0.24)] hover:bg-[rgba(255,255,255,0.08)] sm:px-7 sm:text-[16px]"
                href={hero.secondaryCta.href}
                size="lg"
                variant="secondary"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>

            <div className="rise-in rise-in-delay-4 mt-8 space-y-4">
              <p className="max-w-[36rem] text-[13px] leading-[1.6] text-[rgba(237,232,226,0.66)] sm:text-[14px]">
                {hero.proofLine}
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-[rgba(237,232,226,0.5)] sm:text-[12px]">
                {hero.metrics.map((metric) => (
                  <li key={metric.value}>{metric.value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
