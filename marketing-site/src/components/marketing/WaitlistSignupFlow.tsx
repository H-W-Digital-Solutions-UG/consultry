"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WaitlistSignupForm } from "@/components/marketing/WaitlistSignupForm";

const nextSteps = [
  {
    title: "1. Anmeldung bestätigen",
  },
  {
    title: "2. Launch-Info als Erste erhalten",
  },
  {
    title: "3. Pilotplatz auf Wunsch",
  },
] as const;

const revealEase = [0.22, 1, 0.36, 1] as const;
const timelineItemAnimate = (shouldReduceMotion: boolean) =>
  shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: [0.82, 1], y: [3, 0] };

const timelineItemTransition = (index: number) => ({
  duration: 0.42,
  delay: 0.04 + index * 0.07,
  ease: revealEase,
});

const markerTransition = (index: number) => ({
  duration: 0.92,
  delay: 0.8 + index * 0.22,
  ease: [0.22, 1, 0.36, 1] as const,
  repeat: Number.POSITIVE_INFINITY,
  repeatDelay: 2.6,
});

const markerAnimate = {
  opacity: [0.92, 1, 0.94],
  scale: [1, 1.055, 1],
  y: [0, -2, 0],
};

const connectorTransition = (index: number) => ({
  duration: 1.1,
  delay: 1.02 + index * 0.22,
  ease: [0.22, 1, 0.36, 1] as const,
  repeat: Number.POSITIVE_INFINITY,
  repeatDelay: 2.6,
});

const connectorAnimate = {
  opacity: [0.3, 0.58, 0.34],
};

function WaitlistStepTimeline({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.05)] bg-[linear-gradient(135deg,rgba(31,25,23,0.94)_0%,rgba(39,30,27,0.9)_48%,rgba(32,25,29,0.94)_100%)] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02),0_6px_14px_rgba(0,0,0,0.06)] sm:px-3.5 sm:py-2.5 lg:px-4 lg:py-2.5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(240,168,94,0.16),transparent_26%),radial-gradient(circle_at_86%_18%,rgba(147,86,170,0.11),transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.015))]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[repeating-linear-gradient(115deg,transparent_0_22px,rgba(255,255,255,0.03)_22px_23px,transparent_23px_54px)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(240,168,94,0.16),rgba(255,255,255,0.08),transparent)]" />
      <p className="font-[var(--font-mono)] text-[8px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)] sm:text-[8.5px]">
        SO LÄUFT ES AB
      </p>
      <ol className="mt-2 grid gap-2 md:hidden">
        {nextSteps.map((step, index) => (
          <motion.li
            animate={timelineItemAnimate(shouldReduceMotion)}
            className="grid grid-cols-[1.45rem_minmax(0,1fr)] gap-x-2"
            initial={false}
            key={step.title}
            transition={timelineItemTransition(index)}
          >
            <div className="flex flex-col items-center">
              <motion.span
                animate={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : markerAnimate}
                className="inline-flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full border border-[rgba(240,168,94,0.18)] bg-[rgba(240,168,94,0.1)] text-[8.5px] font-semibold text-[var(--consultry-brand-warm)]"
                transition={shouldReduceMotion ? { duration: 0 } : markerTransition(index)}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
              {index < nextSteps.length - 1 ? (
                <motion.span
                  animate={shouldReduceMotion ? { opacity: 0.4 } : connectorAnimate}
                  className="mt-1 h-full w-px bg-[linear-gradient(180deg,rgba(240,168,94,0.45),rgba(255,255,255,0.08))]"
                  transition={shouldReduceMotion ? { duration: 0 } : connectorTransition(index)}
                />
              ) : null}
            </div>
            <div className="min-w-0">
              <p className="pt-[1px] text-[11.5px] font-medium leading-[1.2] text-[var(--consultry-text-primary)]">
                {step.title.replace(/^\d+\.\s*/, "")}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>

      <div className="relative mt-2 hidden md:block">
        <motion.div
          animate={
            shouldReduceMotion
              ? { opacity: 1, scaleX: 1 }
              : { opacity: [0.58, 0.9, 0.62], scaleX: [0.985, 1, 0.992] }
          }
          className="pointer-events-none absolute left-[calc(16.666%-0.44rem)] right-[calc(16.666%-0.44rem)] top-[0.56rem] h-px origin-left bg-[linear-gradient(90deg,rgba(240,168,94,0.3),rgba(255,255,255,0.08),rgba(240,168,94,0.3))]"
          initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.88 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 1.2,
                  delay: 0.18,
                  ease: revealEase,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2.9,
              }
          }
        />
        <ol className="grid gap-2 md:grid-cols-3 md:gap-2.5 lg:gap-3">
          {nextSteps.map((step, index) => (
            <motion.li
              animate={timelineItemAnimate(shouldReduceMotion)}
              className="relative min-w-0"
              initial={false}
              key={step.title}
              transition={timelineItemTransition(index)}
            >
              <div className="flex items-center gap-2">
              <motion.span
                animate={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : markerAnimate}
                className="relative z-10 inline-flex h-[1.38rem] w-[1.38rem] items-center justify-center rounded-full border border-[rgba(240,168,94,0.16)] bg-[rgba(34,29,26,0.94)] text-[8.5px] font-semibold text-[var(--consultry-brand-warm)] shadow-[0_0_0_2px_rgba(31,27,24,0.88)]"
                transition={shouldReduceMotion ? { duration: 0 } : markerTransition(index)}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
                <p className="text-[11.25px] font-medium leading-[1.16] text-[var(--consultry-text-primary)] lg:text-[11.75px]">
                {step.title.replace(/^\d+\.\s*/, "")}
              </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function WaitlistSignupFlow() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="section-shell relative -mt-[4.45rem] overflow-hidden pb-12 pt-[calc(4.45rem+0.75rem)] sm:pb-14 sm:pt-[calc(4.45rem+1.5rem)] lg:pb-16 lg:pt-[calc(4.45rem+1.75rem)]"
      style={{
        background: "var(--consultry-hero-background)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(240,168,94,0.18),transparent_28%),radial-gradient(circle_at_76%_10%,rgba(155,89,181,0.12),transparent_24%),linear-gradient(180deg,rgba(191,83,71,0.08),transparent_55%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-6rem] top-[8rem] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(240,168,94,0.12)_0%,rgba(240,168,94,0.05)_34%,transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-[5.5rem] hidden h-[25rem] w-[25rem] lg:block"
      >
        <span className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.06)]" />
        <span className="absolute inset-[12%] rounded-full border border-[rgba(240,168,94,0.13)]" />
        <span className="absolute inset-[25%] rounded-full border border-[rgba(255,255,255,0.05)]" />
        <span className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,168,94,0.2)_0%,rgba(240,168,94,0.08)_38%,transparent_72%)] blur-2xl" />
      </div>
      <div className="content-shell relative">
        <div className="mx-auto max-w-[84rem]">
          <div className="space-y-5 sm:space-y-6 lg:space-y-7">
            <div className="relative max-w-[46rem]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 top-1 h-[18rem] w-[min(30rem,78vw)] rounded-[2.4rem] bg-[radial-gradient(circle_at_18%_28%,rgba(19,17,16,0.92)_0%,rgba(19,17,16,0.72)_30%,rgba(19,17,16,0.18)_72%,transparent_100%)] blur-[24px]"
              />
              <p className="eyebrow rise-in relative z-10">AUF DIE WARTELISTE</p>
              <h1 className="rise-in rise-in-delay-1 relative z-10 mt-3 max-w-[12.8ch] text-balance text-[clamp(2.7rem,7vw,4.1rem)] font-[750] leading-[0.92] tracking-[-0.05em] text-[var(--consultry-text-primary)] xl:text-[clamp(3.1rem,4.15vw,4.5rem)]">
                Als Erste dabei, wenn Consultry live geht.
              </h1>
              <p className="rise-in rise-in-delay-2 relative z-10 mt-4 max-w-[33rem] text-[0.97rem] leading-[1.64] text-[var(--consultry-text-secondary)] sm:text-[1.02rem] xl:text-[1.08rem]">
                Pre-Launch. Zum Launch hören Sie als Erste. Pilotkunde werden? Im Formular
                ankreuzen. Wir melden uns binnen 48 Stunden.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[58rem] lg:max-w-[54rem]">
              <WaitlistStepTimeline shouldReduceMotion={shouldReduceMotion} />
            </div>

            <div className="mx-auto w-full max-w-[64rem]">
              <div className="grid-lines rounded-[26px] border border-[rgba(255,255,255,0.16)] bg-[linear-gradient(180deg,rgba(249,248,247,0.98),rgba(232,237,244,0.94))] p-2.5 shadow-[0_22px_42px_rgba(0,0,0,0.16)] backdrop-blur-[2px] sm:rounded-[28px] sm:p-3.5">
                <WaitlistSignupForm
                  buttonLabel="Auf die Warteliste"
                  placeholder="Ihre E-Mail-Adresse"
                  successDelayMs={shouldReduceMotion ? 140 : 720}
                />
              </div>

              <p className="mt-3 text-center text-[12px] leading-[1.6] text-[var(--consultry-text-muted)]">
                Double-Opt-in · Exklusiv für DACH-Beratungen · Pilotplätze auf Anfrage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
