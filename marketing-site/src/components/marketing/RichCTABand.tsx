"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type RichCTABandProps = {
  eyebrow?: string;
  title: string;
  body: string;
  placeholder: string;
  buttonLabel: string;
  trustLine: string;
  success: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function RichCTABand({
  eyebrow,
  title,
  body,
  placeholder,
  buttonLabel,
  trustLine,
  success,
}: RichCTABandProps) {
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

    // Waitlist backend is intentionally deferred for the overnight build.
    setError(null);
    setSubmitted(true);
  };

  return (
    <section className="bg-[#1e1b18] pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14" id="waitlist">
      <div className="content-shell">
        <div className="relative overflow-hidden rounded-[12px] px-4 py-16 shadow-[var(--consultry-shadow-lg)] sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[-10%] top-[-34%] h-[160%] rounded-full opacity-95 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(122,64,42,0.62) 0%, rgba(70,42,30,0.3) 38%, rgba(30,27,24,0) 72%)",
            }}
          />

          <div className="relative mx-auto flex max-w-[45rem] flex-col items-center text-center">
            {eyebrow ? (
              <p className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.12em] text-white/80">
                {eyebrow}
              </p>
            ) : null}

            <h2 className="mt-3 max-w-[16ch] text-balance text-[clamp(2.2rem,5vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">
              {title}
            </h2>
            <p className="mt-5 max-w-[44rem] text-[15px] leading-[1.65] text-white/75 sm:text-[16px] lg:text-[18px]">
              {body}
            </p>

            <div className="mt-7 w-full max-w-[34.375rem] rounded-[24px] bg-white p-[5px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] sm:rounded-full">
              {submitted ? (
                <div
                  aria-live="polite"
                  className="flex min-h-[50px] flex-col justify-center rounded-[20px] border border-[rgba(22,163,74,0.2)] bg-white px-5 py-3 text-center sm:rounded-full sm:px-6"
                >
                  <p className="flex items-center justify-center gap-2 text-[14px] font-semibold text-[#605d59]">
                    <CheckCircle2 className="h-5 w-5 text-[var(--consultry-brand-coral)]" />
                    {success}
                  </p>
                </div>
              ) : (
                <form className="relative flex flex-col gap-2 sm:flex-row sm:items-center" onSubmit={handleSubmit}>
                  <div className="min-w-0 flex-1">
                    <label className="sr-only" htmlFor="waitlist-email">
                      Geschaeftliche E-Mail-Adresse
                    </label>
                    <input
                      autoComplete="email"
                      className="w-full bg-transparent px-4 py-3 text-[14px] text-[#605d59] outline-none placeholder:text-[#b5b0ad] sm:px-6 sm:text-[16px]"
                      id="waitlist-email"
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder={placeholder}
                      type="email"
                      value={email}
                    />
                  </div>

                  <button
                    className="inline-flex h-full shrink-0 items-center justify-center rounded-full bg-[var(--consultry-brand-coral)] px-8 py-3 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(232,102,89,0.4),0_6px_20px_rgba(0,0,0,0.3)] transition hover:brightness-105"
                    type="submit"
                  >
                    {buttonLabel}
                  </button>

                  {error ? (
                    <p className="w-full px-2 text-xs text-white sm:absolute sm:-bottom-7 sm:left-0 sm:px-0 sm:text-[13px]" aria-live="polite">
                      {error}
                    </p>
                  ) : null}
                </form>
              )}
            </div>

            <p className="mt-7 max-w-[40rem] text-center text-[11px] text-white/60 sm:text-[13px]">
              {trustLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
