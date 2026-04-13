import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/marketing/MotionReveal";

type CTABandProps = {
  eyebrow?: string;
  title: string;
  body: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function CTABand({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
}: CTABandProps) {
  return (
    <section className="bg-[#1e1b18] py-16 sm:py-20 lg:py-24">
      <MotionReveal className="content-shell">
        <div className="relative overflow-hidden rounded-[12px] px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[-8%] top-[-34%] h-[155%] rounded-full opacity-95 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(122,64,42,0.62) 0%, rgba(70,42,30,0.3) 38%, rgba(30,27,24,0) 72%)",
            }}
          />

          <div className="relative mx-auto flex max-w-[56rem] flex-col items-center gap-5">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="max-w-[18ch] text-balance text-[clamp(2rem,3.2vw,2.375rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white">
              {title}
            </h2>
            <p className="max-w-[56ch] text-[15px] leading-[1.65] text-[rgba(255,255,255,0.65)] sm:text-[17px] lg:text-[18px]">
              {body}
            </p>

            <div className="mt-1 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <Button
                className="bg-white px-9 py-3.5 text-[17px] font-semibold text-[#bf5347] shadow-[0_2px_16px_rgba(255,255,255,0.15)] hover:bg-[#f5f5f4] sm:text-[18px]"
                href={primaryCta.href}
              >
                {primaryCta.label}
              </Button>

              {secondaryCta ? (
                <Button
                  className="border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.08)] px-9 py-3.5 text-[17px] font-semibold text-white hover:bg-[rgba(255,255,255,0.12)] sm:text-[18px]"
                  href={secondaryCta.href}
                  variant="secondary"
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
