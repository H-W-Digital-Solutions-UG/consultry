"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type RichCTABandProps = {
  eyebrow: string;
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
    <section className="pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14" id="waitlist">
      <div className="content-shell">
        <div className="overflow-hidden rounded-[12px] px-4 py-6 shadow-[var(--consultry-shadow-lg)] sm:px-6 sm:py-8 lg:px-8 lg:py-10" style={{ backgroundImage: "var(--consultry-brand-gradient)" }}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-8">
            <div className="max-w-2xl">
              <p className="font-[var(--font-mono)] text-[13px] uppercase tracking-[0.12em] text-white/80">
                {eyebrow}
              </p>
              <h2 className="mt-3 text-balance text-[clamp(1.85rem,8vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">
                {title}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.6] text-white/75 sm:text-[16px] lg:text-[18px] lg:leading-7">{body}</p>
              <p className="mt-5 max-w-xl text-[12px] text-white/60 sm:text-sm">{trustLine}</p>
            </div>

            <div className="rounded-[24px] bg-white p-[5px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] sm:rounded-full">
              {submitted ? (
                <div
                  aria-live="polite"
                  className="flex min-h-[72px] flex-col justify-center rounded-[20px] border border-[rgba(22,163,74,0.2)] bg-white px-5 py-4 text-center sm:rounded-full sm:px-6"
                >
                  <p className="flex items-center justify-center gap-2 text-base font-semibold text-[#605d59]">
                    <CheckCircle2 className="h-5 w-5 text-[var(--consultry-brand-coral)]" />
                    {success}
                  </p>
                </div>
              ) : (
                <form className="relative flex flex-col gap-2.5 sm:gap-3 lg:flex-row lg:items-center" onSubmit={handleSubmit}>
                  <div className="min-w-0 flex-1">
                    <label className="sr-only" htmlFor="waitlist-email">
                      Geschaeftliche E-Mail-Adresse
                    </label>
                    <input
                      autoComplete="email"
                      className="w-full bg-transparent px-4 py-3.5 text-[15px] text-[#605d59] outline-none placeholder:text-[#b5b0ad] sm:px-5 sm:py-4 sm:text-base"
                      id="waitlist-email"
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder={placeholder}
                      type="email"
                      value={email}
                    />
                  </div>

                  {error ? (
                    <p className="w-full px-2 text-xs text-white sm:text-sm lg:absolute lg:-bottom-7 lg:left-0 lg:px-0" aria-live="polite">
                      {error}
                    </p>
                  ) : null}

                  <button
                    className="inline-flex h-full w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--consultry-brand-coral)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(232,102,89,0.4),0_6px_20px_rgba(0,0,0,0.3)] transition hover:brightness-105 sm:px-8 sm:py-4 lg:w-auto"
                    type="submit"
                  >
                    {buttonLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
