import { HeroBackgroundMotion } from "@/components/marketing/HeroBackgroundMotion";
import { MarketingCtaButton } from "@/components/marketing/MarketingCtaButton";
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
        className="absolute inset-0 md:hidden bg-[radial-gradient(circle_at_72%_24%,rgba(232,101,90,0.026)_0%,rgba(232,101,90,0.008)_16%,transparent_36%),radial-gradient(circle_at_74%_60%,rgba(155,89,182,0.022)_0%,rgba(155,89,182,0.006)_14%,transparent_36%),linear-gradient(180deg,#010102_0%,#030407_48%,#020205_100%)]"
      />
      <HeroBackgroundMotion />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[68%] bg-[linear-gradient(90deg,rgba(2,2,4,0.92)_0%,rgba(2,2,4,0.8)_18%,rgba(2,2,4,0.54)_36%,rgba(2,2,4,0.2)_56%,rgba(2,2,4,0)_100%)]"
      />

      <div className="relative mx-auto w-[min(100%-1.75rem,1440px)] sm:w-[min(100%-2.5rem,1440px)] lg:w-[min(100%-3.75rem,1440px)] xl:w-[min(100%-5rem,1440px)]">
        <div className="flex min-h-[99.5svh] items-center pb-8 pt-[calc(4.45rem+1.6rem)] sm:pb-10 sm:pt-[calc(4.45rem+1.9rem)] lg:min-h-[99.5svh] lg:pl-8 lg:pb-10 lg:pt-[calc(4.45rem+1.2rem)] xl:min-h-[99.5svh] xl:pl-12">
          <div className="relative z-10 max-w-[48rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-7 -top-1 h-[19.75rem] w-[min(40.5rem,94vw)] rounded-[2.9rem] bg-[radial-gradient(circle_at_22%_30%,rgba(7,7,10,0.88)_0%,rgba(7,7,10,0.76)_26%,rgba(7,7,10,0.48)_54%,rgba(7,7,10,0.2)_76%,transparent_100%)] blur-[22px] sm:-left-8 sm:top-0 sm:h-[21rem] sm:w-[min(42.5rem,90vw)] sm:blur-[26px] lg:-left-9 lg:-top-2 lg:h-[22.5rem] lg:w-[43.5rem] lg:blur-[30px]"
            />
            <p className="eyebrow rise-in text-[rgba(240,168,94,0.96)]">{hero.eyebrow}</p>
            <h1
              className="rise-in rise-in-delay-1 mt-5 max-w-[12.25ch] pb-[0.14em] text-balance text-[clamp(2.7rem,8vw,6.2rem)] font-semibold leading-[0.925] tracking-[-0.058em] text-[rgba(246,239,232,0.98)] drop-shadow-[0_12px_30px_rgba(0,0,0,0.22)]"
            >
              {headline}
            </h1>
            <p className="rise-in rise-in-delay-2 mt-3 max-w-[40rem] text-[15px] leading-[1.68] text-[rgba(247,242,235,0.88)] sm:text-[16px] lg:mt-4 lg:text-[17px] lg:leading-[1.58]">
              {hero.body}
            </p>

            <div className="rise-in rise-in-delay-3 relative mt-8 inline-flex">
              <div className="relative flex">
                <MarketingCtaButton
                  className="min-w-[15.5rem] px-8 py-4 text-[16px] font-semibold tracking-[0.01em] shadow-[0_18px_42px_rgba(0,0,0,0.3),0_0_0_1px_rgba(244,183,109,0.12)] sm:min-w-[16.5rem] sm:text-[17px]"
                  href={hero.primaryCta.href}
                  size="lg"
                  tracking={{
                    ctaId: "home_hero_waitlist",
                    label: hero.primaryCta.label,
                    location: "home_hero",
                  }}
                >
                  {hero.primaryCta.label}
                </MarketingCtaButton>
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
