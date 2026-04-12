import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { HomepageStep } from "@/lib/content/de/homepage";

type FeatureShowcaseStepProps = {
  step: HomepageStep;
};

export function FeatureShowcaseStep({ step }: FeatureShowcaseStepProps) {
  const steps = [
    "Signal Intelligence",
    "Smart Matching",
    "Delivery Analytics",
    "Knowledge Hub",
  ];
  const activeIndex = Math.max(Number(step.stepLabel.replace(/\D/g, "")) - 1, 0);
  const progressWidth = `${activeIndex * 33.33}%`;

  return (
    <article className="overflow-hidden rounded-[12px] bg-[#2c2926] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)] ring-1 ring-[rgba(255,255,255,0.06)]" id={step.id}>
      <div className="rounded-t-[12px] border-b border-[rgba(255,255,255,0.06)] bg-[rgba(41,38,36,0.8)] px-4 py-4 sm:px-6 sm:py-5 md:px-8">
        <div className="relative hidden md:block">
          <div className="absolute left-[6.5rem] right-[6.5rem] top-[13px] h-[3px] bg-[#4d4a45]" />
          <div
            className="absolute left-[6.5rem] top-[13px] h-[3px]"
            style={{
              width: progressWidth,
              background: "linear-gradient(90deg, #e8913b 0%, rgba(232, 102, 89, 0.75) 45%, #9c59b5 100%)",
            }}
          />
          <div className="relative z-10 grid grid-cols-4 gap-4">
            {steps.map((label, index) => {
              const isActive = index === activeIndex;
              const isComplete = index < activeIndex;

              return (
                <div className="flex flex-col items-center gap-5 text-center" key={label}>
                  <div
                    className={[
                      "relative flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300",
                      isActive || isComplete
                        ? "border-[rgba(232,145,58,0.92)] shadow-[0_0_8px_rgba(232,145,58,0.25)]"
                        : "border-[#5b5550]",
                    ].join(" ")}
                    style={{
                      background:
                        isActive || isComplete
                          ? "radial-gradient(circle, rgba(232,145,58,0.22) 0%, rgba(232,101,90,0.14) 50%, rgba(44,41,38,0.98) 100%)"
                          : "#2f2b27",
                    }}
                  >
                    <span
                      className={[
                        "h-2.5 w-2.5 rounded-full",
                        isActive || isComplete ? "bg-[#bf5347]" : "bg-[#5b5550]",
                      ].join(" ")}
                    />
                  </div>
                  <p
                    className={[
                      "text-xs",
                      isActive
                        ? "font-semibold text-[var(--consultry-text-primary)]"
                        : isComplete
                          ? "font-medium text-[#a6a199]"
                          : "font-medium text-[#736e69]",
                    ].join(" ")}
                  >
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto md:hidden">
          {steps.map((label, index) => (
            <div
              className={[
                "whitespace-nowrap rounded-full border px-3 py-1.5 text-xs",
                index === activeIndex
                  ? "border-[rgba(232,145,58,0.35)] bg-[rgba(232,145,58,0.12)] text-[var(--consultry-text-primary)]"
                  : "border-[var(--consultry-border-soft)] bg-white/4 text-[#736e69]",
              ].join(" ")}
              key={label}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5 md:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] md:items-start md:gap-6 md:px-8 md:pb-8">
        <div className="max-w-[31rem]">
          <p className="font-[var(--font-mono)] text-[13px] tracking-[0.06em] text-[var(--consultry-brand-warm)] sm:text-[14px]">
            {step.stepLabel}
          </p>
          <div className="mt-2.5 h-px w-10 bg-[rgba(240,168,94,0.4)]" />
          <p className="mt-3 font-[var(--font-mono)] text-[12px] uppercase tracking-[0.06em] text-[var(--consultry-brand-warm)] sm:text-[13px]">
            {step.eyebrow}
          </p>
          <h3 className="mt-3 text-[clamp(1.95rem,8vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--consultry-text-primary)]">
            {step.title}
          </h3>
          <p className="mt-3 text-[15px] leading-[1.6] text-[var(--consultry-text-muted)] sm:text-[16px]">
            {step.body}
          </p>
          <a
            className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium text-[#dda49e] transition hover:text-[var(--consultry-text-primary)] sm:text-[16px]"
            href="/produkt#video"
          >
            {step.ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[12px] bg-[#211d1a] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <Image
            alt={step.image.alt}
            className="object-contain"
            fill
            loading={activeIndex === 0 ? "eager" : undefined}
            sizes="(max-width: 768px) calc(100vw - 3rem), (max-width: 1024px) 320px, 520px"
            src={step.image.src}
          />
        </div>
      </div>
    </article>
  );
}
