"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { WaitlistSuccessBadge } from "@/components/marketing/WaitlistSuccessBadge";
import { Button } from "@/components/ui/Button";

const revealEase = [0.22, 1, 0.36, 1] as const;

export function WaitlistCapturedPopup() {
  const [open, setOpen] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const dismiss = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pb-6 pt-22 sm:items-center sm:px-6 sm:pt-6">
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-[rgba(12,10,9,0.62)] backdrop-blur-[6px]"
            exit={{ opacity: 0 }}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.24, ease: "easeOut" }}
          />

          <motion.section
            animate={{ opacity: 1, y: 0, scale: 1 }}
            aria-labelledby="waitlist-captured-title"
            aria-live="polite"
            aria-modal="true"
            className="surface-panel relative z-10 w-full max-w-[56rem] rounded-[34px] px-6 py-6 shadow-[0_28px_90px_rgba(8,6,5,0.46)] sm:px-8 sm:py-8 lg:px-10 lg:py-10"
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
            role="dialog"
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.34, ease: revealEase }}
          >
            <button
              aria-label="Popup schließen"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--consultry-border-soft)] bg-[rgba(255,255,255,0.04)] text-[var(--consultry-text-secondary)] transition hover:border-[rgba(244,183,109,0.26)] hover:text-[var(--consultry-text-primary)]"
              onClick={dismiss}
              type="button"
            >
              <X className="h-5 w-5" strokeWidth={2.2} />
            </button>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7">
              <WaitlistSuccessBadge className="shrink-0" size="lg" />

              <div className="min-w-0 max-w-[40rem] pr-10 sm:pr-14">
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--consultry-text-faint)] sm:text-[12px]">
                  ANMELDUNG ERFASST
                </p>
                <h2
                  className="mt-4 text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-[var(--consultry-text-primary)]"
                  id="waitlist-captured-title"
                >
                  E-Mail bestätigen.
                </h2>
                <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
                  <p className="max-w-[34rem] text-[16px] leading-[1.7] text-[var(--consultry-text-secondary)] sm:text-[17px]">
                    Bitte bestätigen Sie jetzt die E-Mail in Ihrem Postfach. Ohne Double-Opt-in
                    können wir Sie nicht in die Warteliste aufnehmen.
                  </p>
                  <Button className="min-w-[12rem] self-start lg:self-auto" onClick={dismiss} size="lg">
                    Verstanden
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
