"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { startTransition, useEffect, useRef, useState, type FormEvent } from "react";
import { trackGenerateLead } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import { WaitlistSuccessBadge } from "@/components/marketing/WaitlistSuccessBadge";
import { waitlistSessionKey } from "@/lib/waitlist";

type WaitlistSignupFormProps = {
  buttonLabel: string;
  onSuccess?: (email: string) => void;
  placeholder: string;
  success?: string;
  successDelayMs?: number;
  redirectPath?: string | null;
};

type SubmitState = "idle" | "submitting" | "success";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const revealEase = [0.22, 1, 0.36, 1] as const;
const minimumSubmitFeedbackMs = 520;

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function readResponseMessage(response: Response) {
  const raw = await response.text().catch(() => "");

  if (!raw) {
    return "";
  }

  try {
    const parsed = JSON.parse(raw) as { message?: string; error?: string };
    return parsed.message ?? parsed.error ?? raw;
  } catch {
    return raw;
  }
}

export function WaitlistSignupForm({
  buttonLabel,
  onSuccess,
  placeholder,
  success = "E-Mail gesendet",
  successDelayMs,
  redirectPath = "/warteliste/danke",
}: WaitlistSignupFormProps) {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const redirectTimeoutRef = useRef<number | null>(null);
  const isSubmitting = submitState === "submitting";
  const isSuccess = submitState === "success";
  const successHint = onSuccess
    ? "Optionalen Kontext laden ..."
    : "Weiterleitung zur Bestaetigungsseite ...";

  useEffect(() => {
    if (redirectPath) {
      router.prefetch(redirectPath);
    }

    return () => {
      if (redirectTimeoutRef.current !== null) {
        window.clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, [redirectPath, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitState !== "idle") {
      return;
    }

    const value = email.trim();

    if (!emailPattern.test(value)) {
      setError("Bitte geben Sie eine gueltige E-Mail-Adresse ein.");
      return;
    }

    if (!newsletterConsent) {
      setError("Bitte bestaetigen Sie die Einwilligung fuer Wartelisten- und Produkt-Updates.");
      return;
    }

    setError(null);
    setSubmitState("submitting");
    const submitStartedAt = performance.now();
    let nextError: string | null = null;
    let submitted = false;

    try {
      const searchParams = new URLSearchParams(window.location.search);
      const payload = {
        email: value,
        newsletterConsent,
        signupPageUrl: window.location.href,
        countryDomain: window.location.hostname,
        utmSource: searchParams.get("utm_source") ?? undefined,
        utmMedium: searchParams.get("utm_medium") ?? undefined,
        utmCampaign: searchParams.get("utm_campaign") ?? undefined,
      };

      const response = await fetch("/api/waitlist/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const responseMessage = (await readResponseMessage(response)).toLowerCase();

        if (responseMessage.includes("waitlist_not_configured")) {
          throw new Error("waitlist_not_configured");
        }

        if (
          response.status === 429 ||
          responseMessage.includes("too many") ||
          responseMessage.includes("rate limit")
        ) {
          throw new Error("rate_limited");
        }

        if (
          responseMessage.includes("already") ||
          responseMessage.includes("exists") ||
          responseMessage.includes("duplicate")
        ) {
          throw new Error("already_joined");
        }

        if (
          response.status === 400 ||
          responseMessage.includes("missing_newsletter_consent") ||
          responseMessage.includes("valid email") ||
          responseMessage.includes("invalid email")
        ) {
          throw new Error(
            responseMessage.includes("missing_newsletter_consent")
              ? "missing_newsletter_consent"
              : "invalid_email",
          );
        }

        throw new Error("submit_failed");
      }

      try {
        window.sessionStorage.setItem(waitlistSessionKey, value);
      } catch {
        // Ignore session storage failures and still continue to the thank-you page.
      }
      trackGenerateLead();
      submitted = true;
    } catch (submitError) {
      if (submitError instanceof Error) {
        if (submitError.message === "waitlist_not_configured") {
          nextError =
            "Die Warteliste ist gerade nicht verfuegbar. Bitte versuchen Sie es spaeter noch einmal.";
        } else if (submitError.message === "rate_limited") {
          nextError =
            "Zu viele Anmeldungen in kurzer Zeit. Bitte versuchen Sie es in ein paar Minuten erneut.";
        } else if (submitError.message === "already_joined") {
          nextError = "Diese E-Mail-Adresse steht bereits auf der Warteliste.";
        } else if (submitError.message === "invalid_email") {
          nextError = "Bitte geben Sie eine gueltige E-Mail-Adresse ein.";
        } else if (submitError.message === "missing_newsletter_consent") {
          nextError =
            "Bitte bestaetigen Sie die Einwilligung fuer Wartelisten- und Produkt-Updates.";
        } else {
          nextError =
            "Ihre Anmeldung konnte gerade nicht gespeichert werden. Bitte versuchen Sie es spaeter noch einmal.";
        }
      } else {
        nextError =
          "Ihre Anmeldung konnte gerade nicht gespeichert werden. Bitte versuchen Sie es spaeter noch einmal.";
      }
    }

    const elapsed = performance.now() - submitStartedAt;
    if (elapsed < minimumSubmitFeedbackMs) {
      await wait(minimumSubmitFeedbackMs - elapsed);
    }

    if (submitted) {
      setSubmitState("success");

      redirectTimeoutRef.current = window.setTimeout(() => {
        if (onSuccess) {
          onSuccess(value);
          return;
        }

        if (redirectPath) {
          startTransition(() => {
            router.push(redirectPath);
          });
        }
      }, successDelayMs ?? (shouldReduceMotion ? 160 : 980));
      return;
    }

    setError(nextError);
    setSubmitState("idle");
  };

  return (
    <form
      aria-busy={submitState !== "idle"}
      className="relative"
      onSubmit={handleSubmit}
    >
      <AnimatePresence initial={false} mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            animate={{ opacity: 1, y: 0, scale: 1 }}
            aria-live="polite"
            className="flex min-h-[4.9rem] items-center gap-3 rounded-[18px] border border-[rgba(191,83,71,0.14)] bg-[linear-gradient(145deg,rgba(255,249,243,0.98),rgba(255,242,231,0.92))] px-4 py-3.5 shadow-[0_12px_24px_rgba(191,83,71,0.12)] sm:gap-4 sm:px-4 sm:py-4"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.38, ease: revealEase }}
          >
            <WaitlistSuccessBadge size="sm" />
            <div className="min-w-0">
              <p className="text-[14px] font-semibold text-[var(--consultry-surface-dark)] sm:text-[14.5px]">
                {success}
              </p>
              <p className="mt-1 text-[12px] leading-[1.55] text-[rgba(34,29,26,0.68)] sm:text-[13px]">
                {successHint}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form-fields"
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-2.5 sm:gap-3"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.28, ease: revealEase }}
          >
            <div className="rounded-[18px] border border-[rgba(21,18,17,0.07)] bg-[linear-gradient(180deg,rgba(233,239,247,0.9),rgba(243,246,251,0.84))] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:rounded-[20px] sm:px-5 sm:py-3.5">
              <label
                className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-[rgba(34,29,26,0.52)] sm:text-[11px]"
                htmlFor="waitlist-email"
              >
                Geschaeftliche E-Mail-Adresse
              </label>
              <input
                autoComplete="email"
                className="mt-2 w-full bg-transparent py-1.5 text-[16px] leading-[1.35] text-[var(--consultry-surface-dark)] outline-none placeholder:text-[rgba(34,29,26,0.38)] sm:py-2 sm:text-[17px]"
                id="waitlist-email"
                inputMode="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder={placeholder}
                spellCheck="false"
                type="email"
                value={email}
              />
              <p className="mt-1 text-[11px] leading-[1.55] text-[rgba(34,29,26,0.58)] sm:text-[12px]">
                Nutzen Sie am besten Ihre geschaeftliche Adresse.
              </p>
            </div>

            <div className="rounded-[18px] border border-[rgba(21,18,17,0.07)] bg-[rgba(255,255,255,0.72)] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)] sm:rounded-[20px] sm:px-5">
              <label className="grid grid-cols-[1.1rem_minmax(0,1fr)] items-start gap-x-3 text-[11px] leading-[1.58] text-[rgba(34,29,26,0.78)] sm:text-[11.5px]">
                <input
                  checked={newsletterConsent}
                  className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 accent-[var(--consultry-brand-coral)]"
                  name="newsletterConsent"
                  onChange={(event) => setNewsletterConsent(event.target.checked)}
                  type="checkbox"
                />
                <span>
                  Ich moechte E-Mails von Consultry zu Produkt-Updates, fruehem Zugang und
                  Pilotplaetzen erhalten. Versand und Verwaltung erfolgen ueber Loops (USA).
                  Hinweise zur Verarbeitung, zu Datentransfers und meinen Rechten stehen in der
                  Datenschutzerklaerung. Ich kann meine Einwilligung jederzeit ueber den
                  Abmeldelink widerrufen.
                </span>
              </label>

              <p className="mt-3 text-[10.5px] leading-[1.5] text-[rgba(34,29,26,0.58)] sm:text-[11px]">
                Double-Opt-in: Sie erhalten zunaechst eine Bestaetigungs-E-Mail.
              </p>
              <p className="mt-2 text-[10.5px] leading-[1.5] text-[rgba(34,29,26,0.66)] sm:text-[11px]">
                <a
                  className="underline decoration-[rgba(34,29,26,0.26)] underline-offset-4 transition hover:text-[var(--consultry-surface-dark)]"
                  href="/datenschutz"
                >
                  Datenschutzerklaerung
                </a>{" "}
                ·{" "}
                <a
                  className="underline decoration-[rgba(34,29,26,0.26)] underline-offset-4 transition hover:text-[var(--consultry-surface-dark)]"
                  href="/impressum"
                >
                  Impressum
                </a>
              </p>
            </div>

            <Button
              className="w-full justify-center px-7 py-3.5 text-[15px] shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_14px_26px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-[1.005] sm:py-3.5 sm:text-[15.5px]"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2.5">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      opacity="0.28"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    />
                    <path
                      d="M12 3a9 9 0 0 1 9 9"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2.4"
                    />
                  </svg>
                  <span>{buttonLabel}</span>
                </span>
              ) : (
                buttonLabel
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {error ? (
        <p
          aria-live="polite"
          className="mt-3 px-1 text-[13px] text-[var(--consultry-brand-coral)]"
        >
          {error}
        </p>
      ) : null}
    </form>
  );
}
