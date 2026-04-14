"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import { useActiveSection } from "@/components/marketing/useActiveSection";
import { cn } from "@/lib/cn";
import type { HomepageStep } from "@/lib/content/de/homepage";

type FeatureShowcaseEditorialScrollerProps = {
  steps: HomepageStep[];
};

type StepTheme = {
  accent: string;
  glow: string;
  panelLabel: string;
  panelBody: string;
  highlights: string[];
};

const stepThemes: Record<string, StepTheme> = {
  "account-growth": {
    accent: "#f0a85e",
    glow: "rgba(240, 168, 94, 0.28)",
    panelLabel: "Signal Layer",
    panelBody: "Account-Signale, Stakeholder-Wechsel und Warm Paths werden zu einer priorisierten Opportunity-Sicht verdichtet.",
    highlights: [
      "Trigger vor dem Wettbewerber sehen",
      "Warm Paths mit Account-Kontext",
      "Folgeprojekte statt Zufall priorisieren",
    ],
  },
  "staffing-forecasting": {
    accent: "#e8655a",
    glow: "rgba(232, 101, 90, 0.26)",
    panelLabel: "Staffing Layer",
    panelBody: "Projektbedarf, Skills und Verfuegbarkeit bleiben in einem belastbaren Staffing- und Forecasting-Flow verbunden.",
    highlights: [
      "Skill-fit plus Verfuegbarkeit",
      "Engpaesse frueher erkennen",
      "Forecasting mit Teamrealitaet",
    ],
  },
  "proposal-workflow": {
    accent: "#c084e5",
    glow: "rgba(192, 132, 229, 0.24)",
    panelLabel: "Proposal Layer",
    panelBody: "Aus Opportunity, Teamvorschlag und Kontext entsteht ein klarer Weg Richtung Briefing, CV und Angebotsentwurf.",
    highlights: [
      "Engagement Briefs mit Kontext",
      "Teamvorschlaege ohne Copy-Paste",
      "Proposal-Drafts aus einem Flow",
    ],
  },
  "knowledge-reuse": {
    accent: "#7ad3ea",
    glow: "rgba(122, 211, 234, 0.24)",
    panelLabel: "Knowledge Layer",
    panelBody: "Referenzen, Methoden und Lessons Learned tauchen genau dort wieder auf, wo sie in Deal und Delivery helfen.",
    highlights: [
      "Referenzen wiederverwendbar machen",
      "Lessons Learned im Deal sichtbar",
      "Delivery-Wissen operativ nutzbar halten",
    ],
  },
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

function getStepNumber(stepLabel: string) {
  const digits = stepLabel.replace(/\D/g, "");

  return digits ? digits.padStart(2, "0") : "01";
}

function getStepTheme(stepId: string): StepTheme {
  return (
    stepThemes[stepId] ?? {
      accent: "#f0a85e",
      glow: "rgba(240, 168, 94, 0.24)",
      panelLabel: "Workflow Layer",
      panelBody: "Operative Signale, Teamlogik und Delivery-Kontext bleiben in einer zusammenhaengenden Plattform verbunden.",
      highlights: [
        "Kontext in einem Workflow halten",
        "Freigaben sauber nachvollziehen",
        "Naechste Schritte belastbar machen",
      ],
    }
  );
}

function EditorialHeadline({
  overline,
  title,
}: {
  overline: string;
  title: string;
}) {
  return (
    <div className="max-w-[42rem]">
      <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--consultry-text-faint)]">
        {overline}
      </p>
      <h2 className="mt-3 max-w-[24ch] text-balance text-[clamp(1.85rem,3vw,3.1rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--consultry-text-primary)]">
        {title}
      </h2>
    </div>
  );
}

function StepVisual({
  step,
  priority,
  compact = false,
}: {
  step: HomepageStep;
  priority: boolean;
  compact?: boolean;
}) {
  const theme = getStepTheme(step.id);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-[var(--consultry-border-soft)] bg-[linear-gradient(180deg,rgba(58,54,50,0.96)_0%,rgba(44,41,38,0.94)_42%,rgba(30,27,24,0.96)_100%)] shadow-[var(--consultry-shadow-lg)]",
        compact ? "min-h-[20rem] p-4 sm:min-h-[24rem] sm:p-5" : "min-h-[44rem] p-5 2xl:min-h-[46rem]",
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
          backgroundSize: compact ? "22px 22px" : "32px 32px",
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.52) 44%, rgba(0,0,0,0) 88%)",
        }}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute rounded-full blur-3xl",
          compact ? "left-[-18%] top-[-10%] h-48 w-48" : "left-[-12%] top-[4%] h-72 w-72",
        )}
        style={{ background: theme.glow }}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute rounded-full blur-3xl",
          compact ? "bottom-[-16%] right-[-8%] h-36 w-36" : "bottom-[-10%] right-[-6%] h-56 w-56",
        )}
        style={{ background: theme.glow }}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute rounded-[28px] border border-[rgba(255,255,255,0.05)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_100%)]",
          compact ? "inset-x-[12%] inset-y-[14%]" : "inset-y-10 left-[26%] right-6",
        )}
      />

      <div
        className={cn(
          "absolute rounded-[20px] border border-[var(--consultry-border-soft)] bg-[rgba(44,41,38,0.82)] backdrop-blur",
          compact ? "right-4 top-4 w-[11.5rem] p-3" : "right-6 top-6 hidden w-[15rem] p-4 md:block",
        )}
      >
        <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]">
          {theme.panelLabel}
        </p>
        <p className="mt-3 text-sm font-medium text-[var(--consultry-text-primary)]">
          {step.eyebrow}
        </p>
        <p className="mt-2 text-[13px] leading-[1.55] text-[var(--consultry-text-muted)]">
          {theme.panelBody}
        </p>
      </div>

      <div
        className={cn(
          "absolute rounded-[20px] border border-[var(--consultry-border-soft)] bg-[rgba(44,41,38,0.88)] backdrop-blur",
          compact ? "bottom-4 left-4 w-[11rem] p-3" : "bottom-6 left-6 hidden w-[13rem] p-4 lg:block",
        )}
      >
        <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]">
          /{getStepNumber(step.stepLabel)}
        </p>
        <div className="mt-4 space-y-2.5">
          {theme.highlights.map((highlight) => (
            <div className="flex items-start gap-2" key={highlight}>
              <span
                className="mt-[0.34rem] h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: theme.accent }}
              />
              <p className="text-[12px] leading-[1.5] text-[var(--consultry-text-secondary)]">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className={cn(
          "absolute flex gap-2.5",
          compact ? "bottom-[18%] left-[24%]" : "bottom-[18%] left-[30%]",
        )}
      >
        <span className="h-14 w-14 rounded-[8px] bg-[rgba(255,255,255,0.05)] shadow-[0_10px_30px_rgba(0,0,0,0.16)]" />
        <span
          className="h-24 w-[4.5rem] rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
          style={{ backgroundColor: `${theme.accent}8a` }}
        />
        <span className="mt-10 h-14 w-14 rounded-[8px] bg-[rgba(255,255,255,0.05)] shadow-[0_10px_30px_rgba(0,0,0,0.16)]" />
      </div>

      <div className="relative z-10 ml-auto flex h-full w-full items-center justify-center">
        <div className={cn("relative", compact ? "w-full max-w-[32rem]" : "w-full max-w-[44rem]")}>
          <div className="relative aspect-[16/10] w-full">
            <Image
              alt={step.image.alt}
              className="object-contain drop-shadow-[0_18px_55px_rgba(0,0,0,0.48)]"
              fill
              loading={priority || !compact ? "eager" : "lazy"}
              priority={priority}
              sizes={
                compact
                  ? "(max-width: 640px) calc(100vw - 5rem), 32rem"
                  : "(max-width: 1536px) 48vw, 44rem"
              }
              src={step.image.src}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileStepCard({ step, index }: { step: HomepageStep; index: number }) {
  const theme = getStepTheme(step.id);

  return (
    <article className="rounded-[26px] border border-[var(--consultry-border-soft)] bg-[linear-gradient(180deg,rgba(53,49,45,0.92)_0%,rgba(30,27,24,0.94)_100%)] p-5 shadow-[var(--consultry-shadow-lg)] sm:p-6" key={step.id}>
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-[10px] border bg-[#f4f1ea] font-[var(--font-mono)] text-[16px] text-black"
        >
          {getStepNumber(step.stepLabel)}
        </span>
        <div>
          <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--consultry-text-faint)]">
            {step.eyebrow}
          </p>
          <p className="mt-1 text-[13px] font-medium text-[var(--consultry-text-secondary)]">
            {step.stepperLabel}
          </p>
        </div>
      </div>

      <h3 className="mt-5 text-[clamp(2rem,8vw,3rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--consultry-text-primary)]">
        {step.title}
      </h3>
      <p className="mt-4 text-[15px] leading-[1.7] text-[var(--consultry-text-muted)] sm:text-[16px]">
        {step.body}
      </p>

      <ul className="mt-5 space-y-2.5">
        {theme.highlights.map((highlight) => (
          <li className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-[var(--consultry-text-secondary)]" key={highlight}>
            <span
              className="mt-[0.42rem] h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: theme.accent }}
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[13px] leading-[1.65] text-[var(--consultry-text-faint)]">
        {step.caption}
      </p>
      <Link
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--consultry-border-strong)] px-4 py-2.5 text-[14px] font-medium text-[var(--consultry-text-primary)] transition hover:border-[rgba(240,168,94,0.3)] hover:bg-[rgba(255,255,255,0.06)]"
        href={getStepHref(step.id)}
      >
        {step.ctaLabel}
        <ArrowUpRight className="h-4 w-4" />
      </Link>

      <div className="mt-6">
        <StepVisual compact priority={index === 0} step={step} />
      </div>
    </article>
  );
}

export function FeatureShowcaseEditorialScroller({
  steps,
}: FeatureShowcaseEditorialScrollerProps) {
  const stepIds = steps.map((step) => step.id);
  const lastStepId = stepIds[stepIds.length - 1] ?? "";
  const endSentinelId = lastStepId ? `${lastStepId}-end-sentinel` : "";
  const sectionObserverIds = endSentinelId ? [...stepIds, endSentinelId] : stepIds;
  const { activeId: rawActiveId } = useActiveSection(sectionObserverIds, {
    anchorOffsetPx: 96,
    switchMode: "crossed",
  });
  const { progress } = useActiveSection(stepIds, {
    anchorOffsetPx: 96,
    switchMode: "crossed",
  });
  const activeId = rawActiveId === endSentinelId ? lastStepId : rawActiveId;
  const activeIndex = Math.max(steps.findIndex((step) => step.id === activeId), 0);
  const activeStep = steps[activeIndex] ?? steps[0];
  const trackInset = 100 / (steps.length * 2);
  const trackLength = 100 - trackInset * 2;
  const railColumnWidth = "clamp(2.5rem, 3.2vw, 3rem)";
  const railLineLeft = `calc(${railColumnWidth} / 2 - 1.5px)`;

  if (!steps.length || !activeStep) {
    return null;
  }

  return (
    <section className="pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-[min(100%-1rem,92rem)] sm:w-[min(100%-1.5rem,94rem)]">
        <div className="relative rounded-[28px] border border-[var(--consultry-border-soft)] bg-[linear-gradient(180deg,rgba(44,41,38,0.96)_0%,rgba(30,27,24,0.96)_100%)] px-5 py-6 shadow-[var(--consultry-shadow-lg)] sm:px-7 sm:py-8 lg:px-10 lg:py-10">
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(240,168,94,0.12) 0%, rgba(240,168,94,0) 28%), radial-gradient(circle at 78% 16%, rgba(232,101,90,0.1) 0%, rgba(232,101,90,0) 24%), radial-gradient(circle at bottom right, rgba(155,89,183,0.1) 0%, rgba(0,0,0,0) 36%)",
              }}
            />
          </div>

          <div className="relative">
            <EditorialHeadline
              overline="DIE WEDGES"
              title="Wachstum, Staffing, Wissen und Delivery in einem System."
            />
          </div>

          <div className="mt-8 space-y-5 xl:hidden">
            {steps.map((step, index) => (
              <MobileStepCard index={index} key={step.id} step={step} />
            ))}
          </div>

          <div className="mt-10 hidden xl:grid xl:grid-cols-[180px_minmax(320px,0.82fr)_minmax(0,1.18fr)] xl:gap-8 2xl:grid-cols-[200px_minmax(340px,0.8fr)_minmax(0,1.2fr)] 2xl:gap-10">
            <div
              className="xl:sticky xl:top-24 xl:self-start"
              style={{ gridColumn: "1", gridRow: `1 / span ${steps.length + 1}` }}
            >
              <MotionReveal x={-20}>
                <aside className="relative min-h-[80vh] pr-4">
                  <div
                    className="absolute top-0 z-0 w-[3px] rounded-full bg-[#4d4a45]"
                    style={{
                      height: `${trackLength}%`,
                      left: railLineLeft,
                      top: `${trackInset}%`,
                    }}
                  />
                  <div
                    className="absolute z-10 w-[3px] rounded-full"
                    style={{
                      background: "var(--consultry-step-progress-gradient)",
                      height: `${trackLength * progress}%`,
                      left: railLineLeft,
                      top: `${trackInset}%`,
                    }}
                  />

                  <ol
                    className="relative z-20 grid min-h-[80vh]"
                    style={{
                      gridTemplateRows: `repeat(${steps.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {steps.map((step, index) => {
                      const isActive = step.id === activeStep.id;
                      const isComplete = index < activeIndex;

                      return (
                        <li className="flex items-center" key={step.id}>
                          <Link
                            aria-current={isActive ? "step" : undefined}
                            className="group grid w-full items-center gap-x-4"
                            href={`#${step.id}`}
                            style={{
                              gridTemplateColumns: `${railColumnWidth} minmax(0, 1fr)`,
                            }}
                          >
                            <div
                              className={cn(
                                "relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                                isActive || isComplete
                                  ? "border-[rgba(232,145,58,0.8)]"
                                  : "border-[#5b5550]",
                              )}
                              style={{
                                backgroundColor:
                                  isComplete || isActive ? "rgba(255,255,255,0.02)" : "#2f2b27",
                                justifySelf: "center",
                              }}
                            >
                              <div
                                className={cn(
                                  "absolute inset-0 rounded-full transition-opacity duration-300",
                                  isActive ? "opacity-100" : "opacity-0",
                                )}
                                style={{
                                  background:
                                    isActive || isComplete
                                      ? "radial-gradient(circle, rgba(232,145,58,0.22) 0%, rgba(232,101,90,0.14) 50%, rgba(44,41,38,0.98) 100%)"
                                      : "#2f2b27",
                                }}
                              />
                              <span
                                className={cn(
                                  "relative z-10 rounded-full transition-all duration-300",
                                  isActive
                                    ? "h-[11px] w-[11px] bg-[#bf5347]"
                                    : isComplete
                                      ? "h-2.5 w-2.5 bg-[#bf5347]"
                                      : "h-2.5 w-2.5 bg-[#5b5550]",
                                )}
                              />
                            </div>

                            <div
                              className={cn(
                                "min-w-0 rounded-[16px] border px-3 py-3 transition-all duration-300",
                                isActive
                                  ? "border-[rgba(240,168,94,0.08)] bg-[rgba(255,255,255,0.02)]"
                                  : "border-transparent group-hover:border-[rgba(255,255,255,0.06)] group-hover:bg-[rgba(255,255,255,0.02)]",
                              )}
                            >
                              <p
                                className={cn(
                                  "text-[11px] uppercase tracking-[0.18em] transition-colors",
                                  isActive
                                    ? "text-[var(--consultry-brand-warm)]"
                                    : "text-[var(--consultry-text-faint)]",
                                )}
                              >
                                {step.stepLabel}
                              </p>
                              <p
                                className={cn(
                                  "mt-2 text-[13px] transition",
                                  isActive
                                    ? "font-medium text-[var(--consultry-text-primary)]"
                                    : "text-[var(--consultry-text-muted)] group-hover:text-[var(--consultry-text-primary)]",
                                )}
                              >
                                {step.stepperLabel}
                              </p>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </aside>
              </MotionReveal>
            </div>

            <div
              className="xl:sticky xl:top-24 xl:self-start"
              style={{ gridColumn: "3", gridRow: `1 / span ${steps.length + 1}` }}
            >
              <MotionReveal key={activeStep.id} y={24}>
                <div className="flex min-h-[80vh] items-center">
                  <div className="w-full">
                    <StepVisual priority={activeIndex === 0} step={activeStep} />
                    <div className="mt-4 flex items-center justify-between gap-6 px-1">
                      <p className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.16em] text-[var(--consultry-brand-warm)]">
                        {activeStep.stepLabel} · {activeStep.stepperLabel}
                      </p>
                      <p className="max-w-[26rem] text-right text-[14px] leading-[1.6] text-[var(--consultry-text-muted)]">
                        {activeStep.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {steps.map((step) => {
              const theme = getStepTheme(step.id);

              return (
                <MotionReveal
                  className="flex min-h-[88vh] items-center pr-4 2xl:pr-6"
                  key={step.id}
                  y={18}
                >
                  <article className="scroll-mt-28 w-full py-8 xl:py-10" id={step.id}>
                    <p
                      className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em]"
                      style={{ color: theme.accent }}
                    >
                      {step.stepLabel} / {step.stepperLabel}
                    </p>
                    <p className="mt-5 font-[var(--font-mono)] text-[12px] uppercase tracking-[0.16em] text-[var(--consultry-brand-warm)]">
                      {step.eyebrow}
                    </p>
                    <h2 className="mt-5 max-w-[13ch] text-[clamp(2.8rem,4vw,4.3rem)] font-semibold leading-[1.01] tracking-[-0.03em] text-[var(--consultry-text-primary)]">
                      {step.title}
                    </h2>
                    <p className="mt-6 max-w-[30rem] text-[17px] leading-[1.72] text-[var(--consultry-text-secondary)] xl:text-[18px]">
                      {step.body}
                    </p>

                    <ul className="mt-8 space-y-3.5">
                      {theme.highlights.map((highlight) => (
                        <li
                          className="flex items-start gap-3 text-[15px] leading-[1.6] text-[var(--consultry-text-primary)]"
                          key={highlight}
                        >
                          <span
                            className="mt-[0.45rem] h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: theme.accent }}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-8 max-w-[28rem] text-[14px] leading-[1.68] text-[var(--consultry-text-muted)]">
                      {step.caption}
                    </p>
                    <Link
                      className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-[var(--consultry-brand-warm)] transition hover:text-[var(--consultry-text-primary)]"
                      href={getStepHref(step.id)}
                    >
                      {step.ctaLabel}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </article>
                </MotionReveal>
              );
            })}

            <div
              aria-hidden="true"
              className="min-h-[52vh] xl:min-h-[58vh]"
              id={endSentinelId || undefined}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
