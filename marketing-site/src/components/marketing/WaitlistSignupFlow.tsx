"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { WaitlistQualifierForm } from "@/components/marketing/WaitlistQualifierForm";
import { WaitlistSignupForm } from "@/components/marketing/WaitlistSignupForm";
import { WaitlistSuccessBadge } from "@/components/marketing/WaitlistSuccessBadge";

type WaitlistSignupFlowProps = {
  qualificationEnabled: boolean;
};

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

function WaitlistStepRail() {
  return (
    <aside className="rounded-[24px] border border-[rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.015))] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-5 sm:py-5">
      <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--consultry-text-faint)]">
        SO LAEUFT ES AB
      </p>
      <ol className="mt-3 grid gap-2.5">
        {nextSteps.map((step, index) => (
          <li
            className="grid gap-1.5 rounded-[16px] border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] px-3 py-3"
            key={step.title}
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[rgba(240,168,94,0.12)] px-1.5 text-[10px] font-semibold text-[var(--consultry-brand-warm)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[13px] font-medium leading-[1.3] text-[var(--consultry-text-primary)]">
                {step.title.replace(/^\d+\.\s*/, "")}
              </p>
            </div>
            <p className="pl-7 text-[12px] leading-[1.55] text-[var(--consultry-text-muted)]">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function WaitlistSignupFlow({
  qualificationEnabled,
}: WaitlistSignupFlowProps) {
  const shouldReduceMotion = useReducedMotion();
  const [stage, setStage] = useState<"capture" | "qualify">("capture");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const qualifierRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (stage !== "qualify") {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      qualifierRef.current?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start",
      });
      document.getElementById("waitlist-team-size")?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [shouldReduceMotion, stage]);

  return (
    <section className="section-shell relative overflow-hidden pb-12 pt-4 sm:pb-14 sm:pt-8 lg:pb-16 lg:pt-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(240,168,94,0.18),transparent_28%),radial-gradient(circle_at_76%_10%,rgba(155,89,181,0.12),transparent_24%),linear-gradient(180deg,rgba(191,83,71,0.08),transparent_55%)]" />
      <div className="content-shell relative">
        <div className="mx-auto max-w-[84rem]">
          <AnimatePresence initial={false} mode="wait">
            {stage === "capture" ? (
              <motion.div
                key="capture"
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 sm:space-y-5"
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.42, ease: revealEase }}
              >
                <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(17rem,0.72fr)] lg:items-end lg:gap-7 xl:gap-8">
                  <div className="max-w-[43rem]">
                    <p className="eyebrow">FRUEHER ZUGANG</p>
                    <h1 className="mt-3 max-w-[12.8ch] text-balance text-[clamp(2.7rem,7vw,4.1rem)] font-[750] leading-[0.92] tracking-[-0.05em] text-[var(--consultry-text-primary)] xl:text-[clamp(3.1rem,4.15vw,4.5rem)]">
                      Frueher Zugang zu Consultry
                    </h1>
                    <p className="mt-4 max-w-[33rem] text-[0.98rem] leading-[1.62] text-[var(--consultry-text-secondary)] sm:text-[1.05rem] xl:text-[1.1rem]">
                      Tragen Sie sich fuer Produkt-Updates, priorisierte Pilotplaetze und den
                      ersten Zugang zur Plattform ein.
                    </p>
                  </div>

                  <WaitlistStepRail />
                </div>

                <div className="surface-panel overflow-hidden rounded-[28px] px-4 py-4 shadow-[0_22px_46px_rgba(0,0,0,0.15)] sm:px-5 sm:py-5 lg:px-6 lg:py-5">
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,15rem)_minmax(24rem,1fr)] lg:items-center lg:gap-6">
                    <div className="max-w-[15rem]">
                      <p className="eyebrow">AUF DIE WARTELISTE</p>
                      <p className="mt-2 text-[13px] leading-[1.58] text-[var(--consultry-text-muted)] sm:text-[13.5px]">
                        Double-Opt-in, relevante Updates und priorisierte Pilotplaetze fuer passende
                        Beratungen.
                      </p>
                    </div>

                    <div className="w-full">
                      <div className="rounded-[24px] border border-[rgba(255,255,255,0.16)] bg-[linear-gradient(180deg,rgba(249,248,247,0.98),rgba(232,237,244,0.94))] p-2.5 shadow-[0_18px_34px_rgba(0,0,0,0.16)] backdrop-blur-[2px] sm:rounded-[26px] sm:p-3">
                        <WaitlistSignupForm
                          buttonLabel="Auf die Warteliste"
                          onSuccess={(email) => {
                            setSubmittedEmail(email);
                            setStage("qualify");
                          }}
                          placeholder="Ihre E-Mail-Adresse"
                          redirectPath={null}
                          successDelayMs={shouldReduceMotion ? 140 : 720}
                        />
                      </div>

                      <p className="mt-3 text-[12px] leading-[1.6] text-[var(--consultry-text-muted)]">
                        Double-Opt-in erforderlich · Exklusiv fuer DACH-Beratungen · Keine aggressive
                        Sales-Automation
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="qualify"
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5 sm:space-y-6"
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.46, ease: revealEase }}
              >
                <motion.div
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="relative surface-panel max-w-[72rem] overflow-hidden rounded-[30px] px-5 py-6 shadow-[0_22px_48px_rgba(0,0,0,0.16)] sm:px-7 sm:py-7 lg:px-9 lg:py-9"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: revealEase }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_12%_18%,rgba(244,183,109,0.18),transparent_42%),radial-gradient(circle_at_78%_22%,rgba(191,83,71,0.16),transparent_34%)]" />
                  <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-7">
                    <div className="flex shrink-0 justify-start">
                      <WaitlistSuccessBadge size="lg" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--consultry-brand-warm)]">
                        ANMELDUNG ERFASST
                      </p>
                      <h2 className="mt-3 text-balance text-[clamp(2rem,4vw,3.2rem)] font-[720] leading-[0.98] tracking-[-0.04em] text-[var(--consultry-text-primary)]">
                        Sie sind auf der Warteliste
                      </h2>
                      <p className="mt-4 max-w-[48rem] text-[15px] leading-[1.72] text-[var(--consultry-text-secondary)] sm:text-[15.5px]">
                        Wenn Sie moechten, ergaenzen Sie jetzt noch ein paar optionale Angaben. Wir
                        bringen das Formular direkt in den Fokus, damit Sie es ohne zusaetzliches
                        Scrollen bequem ausfuellen koennen.
                      </p>
                      {submittedEmail ? (
                        <p className="mt-4 inline-flex rounded-full border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.04)] px-3 py-1.5 text-[13px] text-[var(--consultry-text-secondary)]">
                          {submittedEmail}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  ref={qualifierRef}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full max-w-[72rem]"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.44, delay: 0.08, ease: revealEase }}
                >
                  <WaitlistQualifierForm enabled={qualificationEnabled} layout="wide" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
