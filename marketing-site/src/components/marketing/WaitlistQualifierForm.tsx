"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { trackQualifyLead } from "@/lib/analytics";
import {
  consultingFocusOptions,
  pilotInterestOptions,
  primaryPainOptions,
  teamSizeOptions,
  waitlistSessionKey,
  type ConsultingFocusValue,
  type PilotInterestValue,
  type PrimaryPainValue,
  type TeamSizeValue,
} from "@/lib/waitlist";

type SubmitState = "idle" | "submitting" | "success" | "error";

type WaitlistQualifierFormProps = {
  enabled?: boolean;
  embedded?: boolean;
  layout?: "default" | "wide";
};

export function WaitlistQualifierForm({
  embedded = false,
  enabled = true,
  layout = "default",
}: WaitlistQualifierFormProps) {
  const pilotInterestOption = pilotInterestOptions[0];
  const [storedEmail, setStoredEmail] = useState<string | null | undefined>(undefined);
  const [teamSize, setTeamSize] = useState<TeamSizeValue | "">("");
  const [consultingFocus, setConsultingFocus] = useState<ConsultingFocusValue | "">("");
  const [primaryPain, setPrimaryPain] = useState<PrimaryPainValue | "">("");
  const [pilotInterest, setPilotInterest] = useState<PilotInterestValue | "">("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);
  const isWide = layout === "wide";
  const panelClassName = isWide
    ? "surface-panel rounded-[30px] px-5 py-5 sm:px-7 sm:py-7 lg:px-10 lg:py-10"
    : embedded
      ? "rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-5 py-5 sm:px-6 sm:py-6"
      : "surface-panel rounded-[28px] px-6 py-6 sm:px-8 sm:py-8";

  useEffect(() => {
    try {
      const email = window.sessionStorage.getItem(waitlistSessionKey);
      setStoredEmail(email);
    } catch {
      setStoredEmail(null);
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!storedEmail) {
      setSubmitState("error");
      setError("Die gespeicherte Wartelisten-Anmeldung wurde nicht gefunden.");
      return;
    }


    setSubmitState("submitting");
    setError(null);

    const payload = {
      email: storedEmail,
      ...(teamSize ? { teamSize } : {}),
      ...(consultingFocus ? { consultingFocus } : {}),
      ...(primaryPain ? { primaryPain } : {}),
      ...(pilotInterest ? { pilotInterest } : {}),
    };

    try {
      const response = await fetch("/api/waitlist/qualify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error ?? "qualify_failed");
      }

      setSubmitState("success");
      trackQualifyLead();
    } catch (submitError) {
      const message =
        submitError instanceof Error && submitError.message === "contact_not_found"
          ? "Die Wartelisten-Anmeldung wurde nicht gefunden. Bitte melden Sie sich zuerst über die Warteliste an."
          : "Ihre Antworten konnten gerade nicht gespeichert werden. Versuchen Sie es bitte später noch einmal.";

      setSubmitState("error");
      setError(message);
    }
  };

  if (storedEmail === undefined) {
    return (
      <section className={panelClassName}>
        <p className="text-sm text-[var(--consultry-text-secondary)]">
          Wir laden Ihre Wartelisten-Details.
        </p>
      </section>
    );
  }

  if (!storedEmail) {
    return (
      <section className={panelClassName}>
        <p className="eyebrow">OPTIONALE EINORDNUNG</p>
        <h2 className="mt-4 text-[1.6rem] font-semibold leading-[1.15] text-[var(--consultry-text-primary)]">
          Einordnung nur nach Anmeldung möglich.
        </h2>
        <p className="mt-4 text-[15px] leading-[1.72] text-[var(--consultry-text-secondary)]">
          Wir konnten in diesem Browser keine frische Wartelisten-Anmeldung finden. Wenn Sie uns
          direkt etwas mitgeben wollen, schreiben Sie uns über die Kontaktseite.
        </p>
        <div className="mt-6">
          <Button href="/kontakt" variant="secondary">
            Zur Kontaktseite
          </Button>
        </div>
      </section>
    );
  }

  if (!enabled) {
    return (
      <section className={panelClassName}>
        <p className="eyebrow">OPTIONALE EINORDNUNG</p>
        <h2 className="mt-4 text-[1.6rem] font-semibold leading-[1.15] text-[var(--consultry-text-primary)]">
          Ihre Anmeldung ist aktiv.
        </h2>
        <p className="mt-4 text-[15px] leading-[1.72] text-[var(--consultry-text-secondary)]">
          Die zusätzliche Einordnung ist für die nächste Ausbaustufe vorgesehen. Sobald Sie Ihre
          Anmeldung bestätigt haben, erhalten Sie die ersten Wartelisten-Updates direkt per E-Mail.
        </p>
        <p className="mt-3 text-sm text-[var(--consultry-text-muted)]">{storedEmail}</p>
        <div className="mt-6">
          <Link
            className="text-sm text-[var(--consultry-text-secondary)] transition hover:text-[var(--consultry-text-primary)]"
            href="/kontakt"
          >
            Wenn Sie früher mit uns sprechen wollen, schreiben Sie uns direkt
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={panelClassName}>
      <p
        className={cn(
          "text-[15px] leading-[1.72] text-[var(--consultry-text-secondary)]",
          isWide && "max-w-[48rem] text-[15.5px]",
        )}
      >
        Vier kurze Angaben, mit denen wir Ihren Bedarf einordnen und Pilotplätze passend
        priorisieren.
      </p>
      <p className="mt-3 text-sm text-[var(--consultry-text-muted)]">{storedEmail}</p>

      {submitState === "success" ? (
        <div
          className={cn(
            "mt-6 rounded-[20px] border border-[rgba(244,183,109,0.22)] bg-[rgba(255,255,255,0.03)] px-5 py-5",
            isWide && "max-w-[48rem]",
          )}
        >
          <p className="text-[15px] font-semibold text-[var(--consultry-text-primary)]">
            Danke. Ihre Angaben sind gespeichert.
          </p>
          <p className="mt-2 text-[14px] leading-[1.65] text-[var(--consultry-text-secondary)]">
            Wenn Sie Pilot-Interesse angekreuzt haben, melden wir uns binnen 48 Stunden. Sonst
            hören Sie als Erste zum Launch.
          </p>
        </div>
      ) : (
        <form
          className={cn(
            "mt-6 space-y-5",
            isWide && "lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6 lg:space-y-0",
          )}
          onSubmit={handleSubmit}
        >
          <div className={cn(isWide && "lg:min-w-0")}>
            <label
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]"
              htmlFor="waitlist-team-size"
            >
              Größe Ihrer Beratung
            </label>
            <select
              className="mt-2 w-full rounded-[16px] border border-[var(--consultry-border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-[15px] text-[var(--consultry-text-primary)] outline-none transition focus:border-[rgba(244,183,109,0.35)]"
              id="waitlist-team-size"
              onChange={(event) => setTeamSize(event.target.value as TeamSizeValue | "")}
              value={teamSize}
            >
              <option value="">Bitte auswählen</option>
              {teamSizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={cn(isWide && "lg:min-w-0")}>
            <label
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]"
              htmlFor="waitlist-focus"
            >
              Beratungsfokus
            </label>
            <select
              className="mt-2 w-full rounded-[16px] border border-[var(--consultry-border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-[15px] text-[var(--consultry-text-primary)] outline-none transition focus:border-[rgba(244,183,109,0.35)]"
              id="waitlist-focus"
              onChange={(event) =>
                setConsultingFocus(event.target.value as ConsultingFocusValue | "")
              }
              value={consultingFocus}
            >
              <option value="">Bitte auswählen</option>
              {consultingFocusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={cn(isWide && "lg:col-span-2")}>
            <label
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]"
              htmlFor="waitlist-pain"
            >
              Größter operativer Engpass
            </label>
            <select
              className="mt-2 w-full rounded-[16px] border border-[var(--consultry-border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-[15px] text-[var(--consultry-text-primary)] outline-none transition focus:border-[rgba(244,183,109,0.35)]"
              id="waitlist-pain"
              onChange={(event) => setPrimaryPain(event.target.value as PrimaryPainValue | "")}
              value={primaryPain}
            >
              <option value="">Bitte auswählen</option>
              {primaryPainOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <fieldset className={cn(isWide && "lg:col-span-2")}>
            <legend className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]">
              Interesse an der Pilotphase
            </legend>
            <label className="mt-3 flex cursor-pointer items-start gap-3 rounded-[16px] border border-[var(--consultry-border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-4 text-[14px] text-[var(--consultry-text-primary)] transition hover:border-[rgba(244,183,109,0.28)]">
              <input
                checked={pilotInterest === pilotInterestOption.value}
                className="mt-0.5"
                name="pilot-interest"
                onChange={(event) =>
                  setPilotInterest(event.target.checked ? pilotInterestOption.value : "")
                }
                type="checkbox"
                value={pilotInterestOption.value}
              />
              <span>{pilotInterestOption.label}</span>
            </label>
          </fieldset>

          {error ? (
            <p
              aria-live="polite"
              className={cn(
                "text-sm text-[var(--consultry-brand-coral)]",
                isWide && "lg:col-span-2",
              )}
            >
              {error}
            </p>
          ) : null}

          <div
            className={cn(
              "flex",
              isWide && "lg:col-span-2",
            )}
          >
            <Button disabled={submitState === "submitting"} type="submit">
              {submitState === "submitting" ? "Speichern …" : "Antworten senden"}
            </Button>
          </div>
        </form>
      )}
    </section>
  );
}
