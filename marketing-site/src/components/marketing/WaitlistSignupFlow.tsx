"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WaitlistSignupForm } from "@/components/marketing/WaitlistSignupForm";

const nextSteps = [
  {
    title: "1. Anmeldung bestaetigen",
    body: "Nach dem Absenden erhalten Sie eine Double-Opt-in-Mail. Erst nach der Bestaetigung ist Ihre Wartelisten-Anmeldung aktiv.",
  },
  {
    title: "2. Produkt-Updates erhalten",
    body: "Wir schicken nur relevante Updates: Produktfortschritt, erste Inhalte und Hinweise zum Fruehzugang.",
  },
  {
    title: "3. Pilotplaetze priorisieren",
    body: "Qualifizierte Beratungen mit passendem ICP-Fit laden wir zuerst zu fruehen Pilotgespraechen ein.",
  },
] as const;

const revealEase = [0.22, 1, 0.36, 1] as const;
const timelineItemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.44,
      delay: 0.06 + index * 0.07,
      ease: revealEase,
    },
  }),
};

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
    <div className="rounded-[24px] border border-[rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,rgba(255,255,255,0.024),rgba(255,255,255,0.012))] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.028),0_10px_24px_rgba(0,0,0,0.08)] sm:px-5 sm:py-4.5 lg:px-6">
      <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.18em] text-[var(--consultry-text-faint)] sm:text-[10px]">
        SO LAEUFT ES AB
      </p>
      <ol className="mt-3 grid gap-3 md:hidden">
        {nextSteps.map((step, index) => (
          <motion.li
            animate="visible"
            className="grid grid-cols-[1.8rem_minmax(0,1fr)] gap-x-2.5"
            custom={index}
            initial={shouldReduceMotion ? false : "hidden"}
            key={step.title}
            variants={timelineItemVariants}
          >
            <div className="flex flex-col items-center">
              <motion.span
                animate={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : markerAnimate}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(240,168,94,0.2)] bg-[rgba(240,168,94,0.11)] text-[10px] font-semibold text-[var(--consultry-brand-warm)] shadow-[0_0_0_rgba(240,168,94,0)]"
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
            <div className="min-w-0 pb-1">
              <p className="pt-0.5 text-[12.5px] font-medium leading-[1.25] text-[var(--consultry-text-primary)]">
                {step.title.replace(/^\d+\.\s*/, "")}
              </p>
              <p className="mt-1 hidden text-[11.5px] leading-[1.45] text-[var(--consultry-text-muted)] md:block">
                {step.body}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>

      <div className="relative mt-4 hidden md:block">
        <motion.div
          animate={
            shouldReduceMotion
              ? { opacity: 1, scaleX: 1 }
              : { opacity: [0.58, 0.9, 0.62], scaleX: [0.985, 1, 0.992] }
          }
          className="pointer-events-none absolute left-[calc(16.666%-0.75rem)] right-[calc(16.666%-0.75rem)] top-[0.82rem] h-px origin-left bg-[linear-gradient(90deg,rgba(240,168,94,0.42),rgba(255,255,255,0.12),rgba(240,168,94,0.42))]"
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
        <ol className="grid gap-5 md:grid-cols-3 md:gap-4 lg:gap-5">
          {nextSteps.map((step, index) => (
            <motion.li
              animate="visible"
              className="relative min-w-0"
              custom={index}
              initial={shouldReduceMotion ? false : "hidden"}
              key={step.title}
            variants={timelineItemVariants}
          >
            <div className="flex items-center gap-2.5">
              <motion.span
                animate={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : markerAnimate}
                className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(240,168,94,0.2)] bg-[rgba(34,29,26,0.95)] text-[10px] font-semibold text-[var(--consultry-brand-warm)] shadow-[0_0_0_4px_rgba(31,27,24,0.92)]"
                transition={shouldReduceMotion ? { duration: 0 } : markerTransition(index)}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
              <p className="text-[13px] font-medium leading-[1.28] text-[var(--consultry-text-primary)] lg:text-[13.5px]">
                {step.title.replace(/^\d+\.\s*/, "")}
              </p>
              </div>
              <p className="mt-2 pl-[2.45rem] text-[11.5px] leading-[1.48] text-[var(--consultry-text-muted)] lg:text-[12px]">
                {step.body}
              </p>
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
    <section className="section-shell relative overflow-hidden pb-14 pt-5 sm:pb-16 sm:pt-9 lg:pb-20 lg:pt-11">
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
          <div className="space-y-8 sm:space-y-9 lg:space-y-10">
            <div className="relative max-w-[46rem]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 top-1 h-[18rem] w-[min(30rem,78vw)] rounded-[2.4rem] bg-[radial-gradient(circle_at_18%_28%,rgba(19,17,16,0.92)_0%,rgba(19,17,16,0.72)_30%,rgba(19,17,16,0.18)_72%,transparent_100%)] blur-[24px]"
              />
              <p className="eyebrow rise-in relative z-10">FRUEHER ZUGANG</p>
              <h1 className="rise-in rise-in-delay-1 relative z-10 mt-3 max-w-[12.8ch] text-balance text-[clamp(2.7rem,7vw,4.1rem)] font-[750] leading-[0.92] tracking-[-0.05em] text-[var(--consultry-text-primary)] xl:text-[clamp(3.1rem,4.15vw,4.5rem)]">
                Frueher Zugang zu Consultry
              </h1>
              <p className="rise-in rise-in-delay-2 relative z-10 mt-5 max-w-[33rem] text-[0.98rem] leading-[1.68] text-[var(--consultry-text-secondary)] sm:text-[1.05rem] xl:text-[1.1rem]">
                Tragen Sie sich fuer Produkt-Updates, priorisierte Pilotplaetze und den ersten
                Zugang zur Plattform ein.
              </p>
            </div>

            <WaitlistStepTimeline shouldReduceMotion={shouldReduceMotion} />

            <div className="surface-panel relative overflow-hidden rounded-[30px] px-5 py-5 shadow-[0_26px_56px_rgba(0,0,0,0.16)] sm:px-6 sm:py-6 lg:px-7 lg:py-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 top-6 h-24 w-44 rounded-full bg-[radial-gradient(circle,rgba(240,168,94,0.16)_0%,rgba(240,168,94,0.06)_42%,transparent_76%)] blur-3xl"
              />
              <div className="relative grid gap-5 lg:grid-cols-[minmax(0,15rem)_minmax(26rem,1fr)] lg:items-center lg:gap-7">
                <div className="max-w-[15rem] lg:pl-1">
                  <p className="eyebrow">AUF DIE WARTELISTE</p>
                  <p className="mt-2.5 text-[13px] leading-[1.62] text-[var(--consultry-text-muted)] sm:text-[13.5px]">
                    Double-Opt-in, relevante Updates und priorisierte Pilotplaetze fuer passende
                    Beratungen.
                  </p>
                </div>

                <div className="w-full">
                  <div className="grid-lines rounded-[25px] border border-[rgba(255,255,255,0.16)] bg-[linear-gradient(180deg,rgba(249,248,247,0.98),rgba(232,237,244,0.94))] p-2.5 shadow-[0_18px_34px_rgba(0,0,0,0.14)] backdrop-blur-[2px] sm:rounded-[27px] sm:p-3.5">
                    <WaitlistSignupForm
                      buttonLabel="Auf die Warteliste"
                      placeholder="Ihre E-Mail-Adresse"
                      successDelayMs={shouldReduceMotion ? 140 : 720}
                    />
                  </div>

                  <p className="mt-3.5 text-[12px] leading-[1.6] text-[var(--consultry-text-muted)]">
                    Double-Opt-in erforderlich · Exklusiv fuer DACH-Beratungen · Keine aggressive
                    Sales-Automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
