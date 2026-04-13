"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { cn } from "@/lib/cn";
import type { HomepageStep } from "@/lib/content/de/homepage";
import { useActiveSection } from "@/components/marketing/useActiveSection";

type FeatureShowcaseScrollerProps = {
  steps: HomepageStep[];
};

function getStepHref(stepId: string) {
  switch (stepId) {
    case "account-growth":
      return "/produkt/account-growth";
    case "staffing-forecasting":
      return "/produkt/staffing-forecasting";
    case "knowledge-reuse":
      return "/produkt/knowledge-reuse";
    case "proposal-workflow":
      return "/produkt#architecture";
    default:
      return "/produkt";
  }
}

export function FeatureShowcaseScroller({ steps }: FeatureShowcaseScrollerProps) {
  const stepIds = steps.map((step) => step.id);
  const { activeId, progress } = useActiveSection(stepIds);
  const activeIndex = Math.max(steps.findIndex((step) => step.id === activeId), 0);
  const activeStep = steps[activeIndex] ?? steps[0];
  const trackInset = 100 / (steps.length * 2);
  const trackWidth = 100 - trackInset * 2;

  return (
    <section className="pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-[min(100%-1rem,var(--consultry-container-max))] sm:w-[min(100%-1.25rem,var(--consultry-container-max))] lg:w-[min(100%-1.5rem,84rem)] xl:w-[min(100%-2rem,90rem)]">
        <SectionHeader
          align="center"
          body="Consultry verbindet Bestandskundenwachstum, Staffing und Forecasting, Wissenswiederverwendung sowie Delivery- und Commercial-Kontext in einer durchgaengigen Plattform."
          className="max-w-[44rem]"
          overline="DIE WEDGES"
          title="Die Wedges und Workflows, aus denen profitable Projekte entstehen"
        />

        <div className="mt-8 grid gap-6 lg:hidden">
          {steps.map((step, index) => {
            const isFlipped = index % 2 === 1 || step.flipped;

            return (
              <article
                className="overflow-hidden rounded-[12px] bg-[#2c2926] px-5 py-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)] ring-1 ring-[rgba(255,255,255,0.06)] sm:px-8 lg:px-10"
                key={step.id}
              >
                <div
                  className={[
                    "grid gap-8 lg:items-center",
                    isFlipped
                      ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
                      : "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]",
                  ].join(" ")}
                >
                  <div className={isFlipped ? "lg:order-2" : undefined}>
                    <p className="font-[var(--font-mono)] text-[13px] tracking-[0.06em] text-[#f0a85e]">
                      {step.stepLabel}
                    </p>
                    <div className="mt-3 h-px w-10 bg-[rgba(240,168,94,0.4)]" />
                    <p className="mt-4 font-[var(--font-mono)] text-[13px] uppercase tracking-[0.06em] text-[#f0a85e]">
                      {step.eyebrow}
                    </p>
                    <h3 className="mt-4 text-[clamp(2rem,4vw,2.8rem)] font-bold leading-[1.12] tracking-[-0.03em] text-[#fafaf9]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[17px] leading-[1.7] text-[rgba(250,250,249,0.68)]">
                      {step.body}
                    </p>
                    <p className="mt-4 text-[14px] leading-[1.6] text-[rgba(212,207,199,0.6)]">
                      {step.caption}
                    </p>
                    <Link
                      className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-[#dda49e] transition hover:text-[#fafaf9]"
                      href={getStepHref(step.id)}
                    >
                      {step.ctaLabel}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div
                    className={[
                      "relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[#211d1a] shadow-[0_8px_40px_rgba(0,0,0,0.18)]",
                      isFlipped ? "lg:order-1" : "",
                    ].join(" ")}
                  >
                    <Image
                      alt={step.image.alt}
                      className="object-contain"
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 92vw, 48vw"
                      src={step.image.src}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 hidden lg:grid lg:grid-cols-[minmax(420px,1fr)_minmax(420px,1fr)] lg:gap-8 xl:grid-cols-[minmax(480px,1fr)_minmax(480px,1fr)] xl:gap-10">
          <MotionReveal className="lg:sticky lg:top-24 lg:self-start" y={18}>
            <div className="overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[#2c2926] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]">
              <div className="border-b border-[rgba(255,255,255,0.06)] bg-[rgba(41,38,36,0.82)] px-7 py-7 xl:px-8">
                <div className="relative">
                  <div
                    className="absolute top-3 z-0 h-[3px] rounded-full bg-[#4d4a45]"
                    style={{
                      left: `${trackInset}%`,
                      right: `${trackInset}%`,
                    }}
                  />
                  <div
                    className="absolute top-3 z-10 h-[3px] rounded-full"
                    style={{
                      background: "var(--consultry-step-progress-gradient)",
                      left: `${trackInset}%`,
                      width: `${trackWidth * progress}%`,
                    }}
                  />
                  <div
                    className={`relative z-20 grid gap-4 ${steps.length === 4 ? "grid-cols-4" : "grid-cols-3"}`}
                  >
                    {steps.map((step, index) => {
                      const isActive = step.id === activeStep.id;
                      const isComplete = index < activeIndex;

                      return (
                        <Link
                          aria-current={isActive ? "step" : undefined}
                          className="group flex flex-col items-center gap-4 text-center"
                          href={`#${step.id}`}
                          key={step.id}
                        >
                          <div
                            className={cn(
                              "relative flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300",
                              isActive || isComplete
                                ? "border-[rgba(232,145,58,0.92)] shadow-[0_0_8px_rgba(232,145,58,0.25)]"
                                : "border-[#5b5550]",
                            )}
                            style={{
                              background:
                                isActive || isComplete
                                  ? "radial-gradient(circle, rgba(232,145,58,0.22) 0%, rgba(232,101,90,0.14) 50%, rgba(44,41,38,0.98) 100%)"
                                  : "#2f2b27",
                            }}
                          >
                            <span
                              className={cn(
                                "h-2.5 w-2.5 rounded-full",
                                isActive || isComplete ? "bg-[#bf5347]" : "bg-[#5b5550]",
                              )}
                            />
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.18em] text-[#8f8882]">
                              {step.stepLabel}
                            </p>
                            <p
                              className={cn(
                                "mt-2 text-[13px] font-medium transition",
                                isActive ? "text-[#fafaf9]" : "text-[#a8a29e] group-hover:text-[#fafaf9]",
                              )}
                            >
                              {step.stepperLabel}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="p-7 xl:p-8">
                <p className="font-[var(--font-mono)] text-[13px] tracking-[0.06em] text-[#f0a85e]">
                  {activeStep.stepLabel}
                </p>
                <div className="mt-3 h-px w-10 bg-[rgba(240,168,94,0.4)]" />
                <p className="mt-4 font-[var(--font-mono)] text-[13px] uppercase tracking-[0.06em] text-[#f0a85e]">
                  {activeStep.eyebrow}
                </p>
                <h3 className="mt-4 text-[clamp(2.15rem,2.7vw,2.95rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#fafaf9]">
                  {activeStep.title}
                </h3>
                <p className="mt-4 max-w-[34rem] text-[17px] leading-[1.72] text-[rgba(250,250,249,0.7)] xl:text-[18px]">
                  {activeStep.body}
                </p>
                <p className="mt-4 max-w-[33rem] text-[14px] leading-[1.65] text-[rgba(212,207,199,0.68)] xl:text-[15px]">
                  {activeStep.caption}
                </p>
                <Link
                  className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#dda49e] transition hover:text-[#fafaf9]"
                  href={getStepHref(activeStep.id)}
                >
                  {activeStep.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </MotionReveal>

          <div className="space-y-10">
            {steps.map((step) => (
              <article
                className="scroll-mt-28 overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[#2c2926] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.18)]"
                id={step.id}
                key={step.id}
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#211d1a] shadow-[0_8px_40px_rgba(0,0,0,0.18)]">
                  <Image
                    alt={step.image.alt}
                    className="object-contain"
                    fill
                    priority={step.id === steps[0]?.id}
                    sizes="(max-width: 1279px) 52vw, 46vw"
                    src={step.image.src}
                  />
                </div>
                <div className="border-t border-[rgba(255,255,255,0.06)] px-5 py-4">
                  <p className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.16em] text-[#f0a85e]">
                    {step.stepLabel} · {step.stepperLabel}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#a8a29e]">{step.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
