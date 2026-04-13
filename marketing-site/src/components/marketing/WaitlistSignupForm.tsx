"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type WaitlistSignupFormProps = {
  buttonLabel: string;
  placeholder: string;
  success: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistSignupForm({
  buttonLabel,
  placeholder,
  success,
}: WaitlistSignupFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = email.trim();

    if (!emailPattern.test(value)) {
      setError("Bitte geben Sie eine gueltige geschaeftliche E-Mail-Adresse ein.");
      setSubmitted(false);
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        aria-live="polite"
        className="flex min-h-[50px] flex-col justify-center rounded-[20px] border border-[rgba(22,163,74,0.18)] bg-[rgba(255,255,255,0.96)] px-5 py-3 text-center sm:rounded-full sm:px-6"
      >
        <p className="flex items-center justify-center gap-2 text-[14px] font-semibold text-[var(--consultry-surface-dark)]">
          <CheckCircle2 className="h-5 w-5 text-[var(--consultry-brand-coral)]" />
          {success}
        </p>
      </div>
    );
  }

  return (
    <form className="relative flex flex-col gap-2 sm:flex-row sm:items-center" onSubmit={handleSubmit}>
      <div className="min-w-0 flex-1">
        <label className="sr-only" htmlFor="waitlist-email">
          Geschaeftliche E-Mail-Adresse
        </label>
        <input
          autoComplete="email"
          className="w-full bg-transparent px-4 py-3 text-[14px] text-[var(--consultry-surface-dark)] outline-none placeholder:text-[rgba(34,29,26,0.42)] sm:px-6 sm:text-[16px]"
          id="waitlist-email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder={placeholder}
          type="email"
          value={email}
        />
      </div>

      <Button
        className="h-full shrink-0 transform-gpu px-8 py-3 text-[14px] shadow-[0_6px_20px_rgba(0,0,0,0.26)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0 hover:scale-[1.035] hover:shadow-[0_14px_28px_rgba(0,0,0,0.24)] active:translate-y-0 active:scale-[1.012]"
        type="submit"
      >
        {buttonLabel}
      </Button>

      {error ? (
        <p
          aria-live="polite"
          className="w-full px-2 text-xs text-white sm:absolute sm:-bottom-7 sm:left-0 sm:px-0 sm:text-[13px]"
        >
          {error}
        </p>
      ) : null}
    </form>
  );
}
