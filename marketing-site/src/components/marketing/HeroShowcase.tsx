import { Suspense } from "react";
import { HeroShowcaseRowMotion } from "@/components/marketing/HeroShowcaseRowMotion";
import type { HomepageHero } from "@/lib/content/de/homepage";

type HeroShowcaseProps = {
  hero: HomepageHero;
};

export function HeroShowcase({ hero }: HeroShowcaseProps) {
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
              <h1 className="rise-in rise-in-delay-1 text-balance text-[clamp(2.35rem,9vw,3.5rem)] font-extrabold leading-[0.94] tracking-[-0.05em] text-[#fafaf9]">
                <span className="block">{hero.title[0]}</span>
                <span className="gradient-text-hero block">{hero.title[1]}</span>
                <span className="gradient-text-hero-alt block">{hero.title[2]}</span>
              </h1>
              <p className="rise-in rise-in-delay-2 mx-auto mt-4 max-w-[35rem] text-[15px] leading-[1.7] text-[rgba(250,250,249,0.65)] sm:text-[16px] md:text-[18px] md:leading-[1.6]">
                {hero.body}
              </p>
            </div>
          </div>

          <Suspense fallback={<HeroShowcaseRowFallback />}>
            <HeroShowcaseRowMotion hero={hero} />
          </Suspense>

          <p className="px-4 text-center text-[14px] leading-[1.6] text-[rgba(168,165,160,0.75)] sm:text-[15px] md:text-[16px]">
            {hero.proofLine}
          </p>
        </div>
      </div>
    </section>
  );
}

function HeroShowcaseRowFallback() {
  return (
    <div className="grid w-full max-w-[1140px] gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-[minmax(260px,1fr)_520px_minmax(260px,1fr)] lg:items-center lg:gap-8">
      <div className="order-2 rounded-[12px] border border-[rgba(232,145,58,0.18)] bg-[rgba(44,40,38,0.88)] p-6 shadow-[0_18px_38px_rgba(0,0,0,0.22)] md:order-2 lg:order-1">
        <div className="h-11 w-11 rounded-[10px] bg-[rgba(191,83,71,0.18)]" />
        <div className="mt-5 h-6 w-44 rounded-full bg-[rgba(250,250,249,0.08)]" />
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full rounded-full bg-[rgba(250,250,249,0.06)]" />
          <div className="h-4 w-[88%] rounded-full bg-[rgba(250,250,249,0.05)]" />
          <div className="h-4 w-[72%] rounded-full bg-[rgba(250,250,249,0.05)]" />
        </div>
      </div>

      <div className="order-1 mx-auto aspect-[520/380] w-full max-w-[520px] rounded-[12px] bg-[rgba(33,29,26,0.95)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] md:col-span-2 lg:col-span-1 lg:order-2" />

      <div className="order-3 rounded-[12px] border border-[rgba(232,145,58,0.18)] bg-[rgba(44,40,38,0.88)] p-6 shadow-[0_18px_38px_rgba(0,0,0,0.22)]">
        <div className="h-11 w-11 rounded-[10px] bg-[rgba(232,145,58,0.18)]" />
        <div className="mt-5 h-6 w-48 rounded-full bg-[rgba(250,250,249,0.08)]" />
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full rounded-full bg-[rgba(250,250,249,0.06)]" />
          <div className="h-4 w-[82%] rounded-full bg-[rgba(250,250,249,0.05)]" />
          <div className="h-4 w-[74%] rounded-full bg-[rgba(250,250,249,0.05)]" />
        </div>
      </div>
    </div>
  );
}
