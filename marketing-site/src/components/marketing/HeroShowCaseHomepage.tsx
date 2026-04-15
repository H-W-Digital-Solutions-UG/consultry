import { Button } from "@/components/ui/Button";
import type { HomepageHero } from "@/lib/content/de/homepage";

type HeroShowcaseProps = {
  hero: HomepageHero;
};

export function HeroShowcaseHomepage({ hero }: HeroShowcaseProps) {
  const headline = hero.title.join(" ");

  return (
    <section className="relative isolate -mt-[4.45rem] overflow-hidden bg-[#050507]">
      <div
        aria-hidden="true"
        className="absolute inset-0 md:hidden bg-[radial-gradient(circle_at_78%_22%,rgba(232,101,90,0.22)_0%,rgba(232,101,90,0.1)_18%,transparent_40%),radial-gradient(circle_at_68%_58%,rgba(155,89,182,0.18)_0%,rgba(155,89,182,0.08)_22%,transparent_46%),linear-gradient(180deg,#060608_0%,#0a0b10_46%,#08070a_100%)]"
      />

      <div className="absolute inset-0 hidden md:block">
        <video
          aria-hidden="true"
          autoPlay
          className="h-full w-full object-cover object-center scale-[1.015]"
          loop
          muted
          playsInline
          preload="auto"
        >
          <source media="(min-width: 768px)" src="/videos/final_hero_noaudio_compressed.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="content-shell relative">
        <div className="flex min-h-[clamp(34rem,80svh,48rem)] items-end pb-10 pt-[calc(4.45rem+2.5rem)] sm:pb-12 sm:pt-[calc(4.45rem+3rem)] lg:min-h-[clamp(38rem,84svh,52rem)] lg:pb-14 lg:pt-[calc(4.45rem+3.5rem)]">
          <div className="relative z-10 max-w-[46rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-7 -top-1 h-[19.75rem] w-[min(40.5rem,94vw)] rounded-[2.9rem] bg-[radial-gradient(circle_at_22%_30%,rgba(7,7,10,0.88)_0%,rgba(7,7,10,0.76)_26%,rgba(7,7,10,0.48)_54%,rgba(7,7,10,0.2)_76%,transparent_100%)] blur-[22px] sm:-left-8 sm:top-0 sm:h-[21rem] sm:w-[min(42.5rem,90vw)] sm:blur-[26px] lg:-left-9 lg:-top-2 lg:h-[22.5rem] lg:w-[43.5rem] lg:blur-[30px]"
            />
            <p className="eyebrow rise-in text-[rgba(240,168,94,0.96)]">{hero.eyebrow}</p>
            <h1
              className="rise-in rise-in-delay-1 mt-5 max-w-[11.5ch] pb-[0.14em] text-balance text-[clamp(2.7rem,8vw,5.9rem)] font-semibold leading-[0.925] tracking-[-0.058em] text-[rgba(246,239,232,0.98)] drop-shadow-[0_12px_30px_rgba(0,0,0,0.22)]"
            >
              {headline}
            </h1>
            <p className="rise-in rise-in-delay-2 mt-3 max-w-[37rem] text-[15px] leading-[1.68] text-[rgba(247,242,235,0.88)] sm:text-[16px] lg:mt-4 lg:text-[17px] lg:leading-[1.58]">
              {hero.body}
            </p>

            <div className="hero-cta-focus relative mt-8 inline-flex">
              <div className="relative flex">
                <Button
                  className="min-w-[15.5rem] px-8 py-4 text-[16px] font-semibold tracking-[0.01em] shadow-[0_18px_42px_rgba(0,0,0,0.3),0_0_0_1px_rgba(244,183,109,0.12)] sm:min-w-[16.5rem] sm:text-[17px]"
                  href={hero.primaryCta.href}
                  size="lg"
                >
                  {hero.primaryCta.label}
                </Button>
              </div>
            </div>

            <div className="rise-in rise-in-delay-4 mt-10 space-y-3">
              <p className="max-w-[40rem] text-[13px] leading-[1.6] text-[rgba(237,232,226,0.66)] sm:text-[14px]">
                {hero.proofLine}
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-[rgba(237,232,226,0.46)] sm:text-[12px]">
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
