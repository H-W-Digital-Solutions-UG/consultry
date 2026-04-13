"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { startTransition, useEffect, useRef, useState } from "react";
import { FeatureShowcaseStep } from "@/components/marketing/FeatureShowcaseStep";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import type { HomepageStep } from "@/lib/content/de/homepage";

type FeatureShowcaseScrollerProps = {
  steps: HomepageStep[];
};

export function FeatureShowcaseScroller({ steps }: FeatureShowcaseScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  const stepCount = steps.length;
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const progressWidth = useTransform(scrollYProgress, (latest) => {
    if (stepCount <= 1) {
      return "0%";
    }

    const boundedProgress = Math.min(Math.max(latest, 0), 1);

    return `${boundedProgress * 75}%`;
  });

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsHydrated(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (stepCount === 0) {
      return;
    }

    const boundedProgress = Math.min(Math.max(latest, 0), 1);
    let nextIndex = 0;

    if (stepCount > 1) {
      for (let index = stepCount - 1; index >= 0; index -= 1) {
        const stepThreshold = index / (stepCount - 1);

        if (boundedProgress >= stepThreshold - 0.001) {
          nextIndex = index;
          break;
        }
      }
    }

    startTransition(() => {
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    });
  });

  const scrollToStep = (index: number) => {
    const nextIndex = Math.min(Math.max(index, 0), Math.max(stepCount - 1, 0));

    startTransition(() => {
      setActiveIndex(nextIndex);
    });

    if (!scrollRef.current || stepCount <= 1) {
      return;
    }

    const sectionTop = scrollRef.current.getBoundingClientRect().top + window.scrollY;
    const maxScrollableDistance = Math.max(
      scrollRef.current.offsetHeight - window.innerHeight,
      0,
    );
    const progress = nextIndex / (stepCount - 1);

    window.scrollTo({
      top: sectionTop + progress * maxScrollableDistance,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const activeStep = steps[activeIndex];

  return (
    <section className="pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
      <div className="content-shell">
        <SectionHeader
          align="center"
          body="Consultry verbindet Pipeline, Matching, Delivery und Knowledge in einer durchgängigen Plattform. Kein Tool-Wechsel, keine Datensilos."
          className="max-w-[44rem]"
          overline="DIE PLATTFORM"
          title="Vom Signal zum Projekt — nahtlos"
        />
      </div>

      <div className="content-shell mt-6 space-y-3 sm:mt-7 sm:space-y-4 lg:hidden">
        {steps.map((step) => (
          <FeatureShowcaseStep key={step.id} step={step} />
        ))}
      </div>

      <div
        className="relative mt-8 hidden lg:block"
        ref={scrollRef}
        style={{ height: `${steps.length * 100}vh` }}
      >
        <div className="sticky top-20 flex h-[calc(100svh-5rem)] items-center">
          <div className="w-full">
            <div className="overflow-hidden rounded-[12px] bg-[#2c2926] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)] ring-1 ring-[rgba(255,255,255,0.06)]">
              <div className="border-b border-[rgba(255,255,255,0.06)] bg-[rgba(41,38,36,0.82)] px-10 py-7">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[#8f8882]">
                    Klicken oder scrollen
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-[#b8b1aa]">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(stepCount).padStart(2, "0")}
                    </span>

                    <button
                      aria-label="Vorherigen Schritt anzeigen"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[#d2cbc5] transition hover:border-[rgba(232,145,58,0.35)] hover:text-[#fafaf9] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[rgba(255,255,255,0.08)]"
                      disabled={activeIndex === 0}
                      onClick={() => scrollToStep(activeIndex - 1)}
                      type="button"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>

                    <button
                      aria-label="Naechsten Schritt anzeigen"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[#d2cbc5] transition hover:border-[rgba(232,145,58,0.35)] hover:text-[#fafaf9] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[rgba(255,255,255,0.08)]"
                      disabled={activeIndex === stepCount - 1}
                      onClick={() => scrollToStep(activeIndex + 1)}
                      type="button"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-[12.5%] right-[12.5%] top-3.5 h-[3px] -translate-y-1/2 rounded-full bg-[#4d4a45]" />
                  <motion.div
                    className="absolute left-[12.5%] top-3.5 h-[3px] -translate-y-1/2 rounded-full"
                    style={{
                      width: progressWidth,
                      background:
                        "linear-gradient(90deg, #e8913b 0%, rgba(232, 102, 89, 0.75) 45%, #9c59b5 100%)",
                    }}
                  />

                  <div className="relative z-10 grid grid-cols-4 gap-4">
                    {steps.map((step, index) => {
                      const isActive = index === activeIndex;
                      const isComplete = index < activeIndex;

                      return (
                        <button
                          aria-current={isActive ? "step" : undefined}
                          className="flex flex-col items-center gap-5 text-center"
                          key={step.id}
                          onClick={() => scrollToStep(index)}
                          type="button"
                        >
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
                                "h-2.5 w-2.5 rounded-full transition-colors duration-300",
                                isActive || isComplete ? "bg-[#bf5347]" : "bg-[#5b5550]",
                              ].join(" ")}
                            />
                          </div>
                          <p
                            className={[
                              "text-center transition-colors duration-300",
                              isActive
                                ? "text-[13px] font-semibold text-[#fafaf9]"
                                : isComplete
                                  ? "text-[12px] font-medium text-[#a6a199]"
                                  : "text-[12px] font-medium text-[#736e69]",
                            ].join(" ")}
                          >
                            {step.stepperLabel}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[34rem] overflow-hidden px-[60px] py-12">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="grid items-center gap-[60px] lg:grid-cols-[minmax(0,1fr)_minmax(440px,560px)]"
                    exit={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : -18,
                    }}
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 18,
                    }}
                    key={activeStep.id}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" }}
                  >
                    <div className="max-w-[36rem]">
                      <p className="font-[var(--font-mono)] text-[14px] tracking-[0.06em] text-[#f0a85e]">
                        {activeStep.stepLabel}
                      </p>
                      <div className="mt-3 h-px w-10 bg-[rgba(240,168,94,0.4)]" />
                      <p className="mt-4 font-[var(--font-mono)] text-[13px] uppercase tracking-[0.06em] text-[#f0a85e]">
                        {activeStep.eyebrow}
                      </p>
                      <h3 className="mt-4 text-[clamp(2.75rem,3vw,3.35rem)] font-bold leading-[1.12] tracking-[-0.03em] text-[#fafaf9]">
                        {activeStep.title}
                      </h3>
                      <p className="mt-4 text-[18px] leading-[1.6] text-[rgba(250,250,249,0.65)]">
                        {activeStep.body}
                      </p>
                      <Link
                        className="mt-5 inline-flex items-center gap-2 text-[16px] font-medium text-[#dda49e] transition hover:text-[#fafaf9]"
                        href="/produkt#video"
                      >
                        {activeStep.ctaLabel}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    {isHydrated ? (
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-[#211d1a] shadow-[0_8px_40px_rgba(0,0,0,0.18)]">
                        <Image
                          alt={activeStep.image.alt}
                          className="object-contain"
                          fill
                          priority={activeIndex === 0}
                          sizes="(max-width: 1280px) 42vw, 560px"
                          src={activeStep.image.src}
                        />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] w-full rounded-[12px] bg-[rgba(33,29,26,0.95)] shadow-[0_8px_40px_rgba(0,0,0,0.18)]" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
