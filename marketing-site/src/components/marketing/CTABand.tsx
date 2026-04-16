import { MotionReveal } from "@/components/marketing/MotionReveal";
import { Button } from "@/components/ui/Button";

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
  const getAnalyticsProps = (
    cta: { href: string; label: string },
    location: "cta_band_primary" | "cta_band_secondary",
  ) => {
    if (cta.href === "/warteliste") {
      return {
        "data-analytics-destination-path": cta.href,
        "data-analytics-destination-type": "internal_waitlist",
        "data-analytics-event": "cta_click",
        "data-analytics-label": cta.label,
        "data-analytics-location": location,
      } as const;
    }

    if (cta.href === "/kontakt") {
      return {
        "data-analytics-destination-path": cta.href,
        "data-analytics-destination-type": "internal_contact",
        "data-analytics-event": "cta_click",
        "data-analytics-label": cta.label,
        "data-analytics-location": location,
      } as const;
    }

    return {};
  };

  return (
    <section className="relative overflow-hidden border-y border-[rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,rgba(45,34,29,0.96)_0%,rgba(27,21,19,0.98)_38%,rgba(24,19,17,1)_100%)] py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.95) 18%, rgba(0,0,0,0.95) 82%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-10%] top-[-42%] h-[170%] opacity-90 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(244,183,109,0.24) 0%, rgba(232,101,90,0.18) 34%, rgba(21,17,15,0) 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-8%] bottom-[-48%] h-[160%] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(156,89,181,0.12) 0%, rgba(21,17,15,0) 62%)",
        }}
      />

      <MotionReveal className="content-shell relative">
        <div className="mx-auto flex max-w-[68rem] flex-col items-center gap-5 py-2 text-center sm:gap-6">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="max-w-[17ch] text-balance text-[clamp(2.25rem,4vw,3.35rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-white">
            {title}
          </h2>
          <p className="max-w-[64ch] text-[15px] leading-[1.7] text-[rgba(255,255,255,0.7)] sm:text-[17px] lg:text-[19px]">
            {body}
          </p>

          <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <Button
              {...getAnalyticsProps(primaryCta, "cta_band_primary")}
              className="min-w-[13rem] px-9 py-3.5 text-[17px] font-semibold sm:text-[18px]"
              href={primaryCta.href}
            >
              {primaryCta.label}
            </Button>

            {secondaryCta ? (
              <Button
                {...getAnalyticsProps(secondaryCta, "cta_band_secondary")}
                className="min-w-[13rem] px-9 py-3.5 text-[17px] font-semibold sm:text-[18px]"
                href={secondaryCta.href}
                variant="secondary"
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
