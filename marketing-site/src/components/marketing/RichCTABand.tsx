import { WaitlistSignupForm } from "@/components/marketing/WaitlistSignupForm";

type RichCTABandProps = {
  eyebrow?: string;
  title: string;
  body: string;
  placeholder: string;
  buttonLabel: string;
  trustLine: string;
  success: string;
};

export function RichCTABand({
  eyebrow,
  title,
  body,
  placeholder,
  buttonLabel,
  trustLine,
  success,
}: RichCTABandProps) {
  return (
    <section
      className="relative overflow-hidden border-y border-[rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,rgba(41,31,27,0.98)_0%,rgba(29,22,19,0.98)_34%,rgba(24,19,17,1)_100%)] pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
      id="waitlist"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.95) 18%, rgba(0,0,0,0.95) 82%, rgba(0,0,0,0.32) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-8%] top-[-36%] h-[165%] opacity-95 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(244,183,109,0.26) 0%, rgba(232,101,90,0.18) 36%, rgba(23,19,17,0) 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-8%] bottom-[-44%] h-[155%] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(156,89,181,0.12) 0%, rgba(23,19,17,0) 62%)",
        }}
      />

      <div className="content-shell relative">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center py-2 text-center">
          {eyebrow ? (
            <p className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.12em] text-white/80">
              {eyebrow}
            </p>
          ) : null}

          <h2 className="mt-3 max-w-[15ch] text-balance text-[clamp(2.3rem,5vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.04em] text-white">
            {title}
          </h2>
          <p className="mt-5 max-w-[52rem] text-[15px] leading-[1.72] text-white/74 sm:text-[17px] lg:text-[19px]">
            {body}
          </p>

          <div className="mt-8 w-full max-w-[35.5rem] rounded-[24px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.92)] p-[5px] shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-[2px] sm:rounded-full">
            <WaitlistSignupForm
              buttonLabel={buttonLabel}
              placeholder={placeholder}
              success={success}
            />
          </div>

          <p className="mt-7 max-w-[44rem] text-center text-[11px] text-white/58 sm:text-[13px]">
            {trustLine}
          </p>
        </div>
      </div>
    </section>
  );
}
