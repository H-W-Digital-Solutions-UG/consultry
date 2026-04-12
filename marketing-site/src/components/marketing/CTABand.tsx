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
    <section
      className="py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(180deg, rgba(191, 84, 71, 0.15) 0%, rgba(232, 145, 59, 0.08) 50%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #1f140f 0%, #1e1b18 100%)",
      }}
    >
      <MotionReveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="text-[clamp(1.75rem,4vw,2.375rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
          {title}
        </h2>
        <p className="max-w-xl text-[16px] leading-[1.6] text-[rgba(255,255,255,0.65)] sm:text-[18px]">
          {body}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button
            className="bg-white px-9 py-3.5 text-[18px] font-semibold text-[#bf5347] shadow-[0_2px_16px_rgba(255,255,255,0.15)] hover:bg-[#f5f5f4]"
            href={primaryCta.href}
          >
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button
              className="border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] px-9 py-3.5 text-[18px] font-semibold text-white hover:bg-[rgba(255,255,255,0.12)]"
              href={secondaryCta.href}
              variant="secondary"
            >
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </MotionReveal>
    </section>
  );
}
