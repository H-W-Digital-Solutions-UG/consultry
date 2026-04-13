"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { startTransition, useEffect, useRef, useState } from "react";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import type { ProductArchitectureContent } from "@/lib/content/de/product";
import { cn } from "@/lib/cn";

type ProductArchitectureProps = {
  content: ProductArchitectureContent;
};

function ProductArchitectureHeader({
  overline,
  title,
}: {
  overline: string;
  title: string;
}) {
  return (
    <div className="mx-auto max-w-[52rem] text-center">
      <p className="eyebrow">{overline}</p>
      <h2 className="mt-4 text-balance text-[clamp(1.95rem,3.5vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#fafaf9]">
        {title}
      </h2>
    </div>
  );
}

export function ProductArchitecture({ content }: ProductArchitectureProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const activeLayer = content.layers[activeIndex] ?? content.layers[0];
  const layerCount = content.layers.length;
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const railProgressHeight = useTransform(scrollYProgress, (latest) => {
    const boundedProgress = Math.min(Math.max(latest, 0), 1);

    return `${boundedProgress * 100}%`;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateViewportMode = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateViewportMode();
    mediaQuery.addEventListener("change", updateViewportMode);

    return () => {
      mediaQuery.removeEventListener("change", updateViewportMode);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop || layerCount === 0) {
      return;
    }

    const nextIndex =
      layerCount === 1
        ? 0
        : Math.min(layerCount - 1, Math.round(latest * (layerCount - 1)));

    startTransition(() => {
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    });
  });

  const setStep = (index: number) => {
    startTransition(() => {
      setActiveIndex(index);
    });
  };

  const scrollToStep = (index: number) => {
    const nextIndex = Math.min(Math.max(index, 0), Math.max(layerCount - 1, 0));

    setStep(nextIndex);

    if (!isDesktop || !scrollRef.current) {
      return;
    }

    const sectionTop = scrollRef.current.getBoundingClientRect().top + window.scrollY;
    const maxScrollableDistance = Math.max(
      scrollRef.current.offsetHeight - window.innerHeight,
      0,
    );
    const progress = layerCount > 1 ? nextIndex / (layerCount - 1) : 0;

    window.scrollTo({
      top: sectionTop + progress * maxScrollableDistance,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const panelShell =
    "relative overflow-hidden rounded-[12px] bg-[#2c2926] px-6 py-10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)] ring-1 ring-[rgba(255,255,255,0.06)] sm:px-10 sm:py-12 lg:px-[clamp(2.5rem,3.2vw,3.75rem)] lg:py-[clamp(2.25rem,2.8vw,3.25rem)] xl:px-[clamp(3rem,3.6vw,4.25rem)] xl:py-[clamp(2.5rem,3vw,3.75rem)]";

  return (
    <section className="relative section-shell-tight" id="architecture">
      <div className="content-shell lg:hidden">
        <MotionReveal className={panelShell} delay={0.06} y={24}>
          <ProductArchitectureHeader
            overline={content.workflowOverline}
            title={content.workflowTitle}
          />

          <div className="mt-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              {content.layers.map((layer, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    className={cn(
                      "flex w-full items-start overflow-hidden rounded-r-[12px] text-left transition-colors duration-300",
                      isActive
                        ? "bg-[#3a3833]"
                        : "bg-transparent hover:bg-[rgba(58,56,51,0.4)]",
                    )}
                    key={layer.id}
                    onClick={() => scrollToStep(index)}
                    type="button"
                  >
                    <div
                      className={cn(
                        "self-stretch w-[3px] shrink-0 transition-colors duration-300",
                        isActive ? "bg-[#e8913a]" : "bg-transparent",
                      )}
                    />
                    <div className="px-6 py-5">
                      <p className="text-[18px] font-semibold text-[#fafaf9]">
                        {layer.title}
                      </p>
                      <p className="mt-2 max-w-[32ch] text-[15px] leading-7 text-[#a8a29e]">
                        {layer.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="overflow-hidden rounded-[24px] bg-[#3a3833] p-5">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-[#4a4744]"
                  exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -16 }}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 16 }}
                  key={activeLayer.id}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    alt={activeLayer.preview.alt}
                    className="object-contain"
                    fill
                    sizes="92vw"
                    src={activeLayer.preview.src}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </MotionReveal>
      </div>

      <div
        className="relative mt-4 hidden lg:block"
        ref={scrollRef}
        style={{ height: `${Math.max(layerCount, 3) * 68}vh` }}
      >
        <div className="sticky top-20 flex h-[calc(100svh-5rem)] items-center">
          <div className="content-shell w-full">
            <MotionReveal className={panelShell} delay={0.06} y={24}>
              <div className="relative">
                <ProductArchitectureHeader
                  overline={content.workflowOverline}
                  title={content.workflowTitle}
                />

                <div className="absolute right-0 top-0 flex items-center gap-2">
                  <span className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-[#b8b1aa]">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(layerCount).padStart(2, "0")}
                  </span>

                  <button
                    aria-label="Vorherigen Workflow-Schritt anzeigen"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[#d2cbc5] transition hover:border-[rgba(232,145,58,0.35)] hover:text-[#fafaf9] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[rgba(255,255,255,0.08)]"
                    disabled={activeIndex === 0}
                    onClick={() => scrollToStep(activeIndex - 1)}
                    type="button"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>

                  <button
                    aria-label="Naechsten Workflow-Schritt anzeigen"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[#d2cbc5] transition hover:border-[rgba(232,145,58,0.35)] hover:text-[#fafaf9] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[rgba(255,255,255,0.08)]"
                    disabled={activeIndex === layerCount - 1}
                    onClick={() => scrollToStep(activeIndex + 1)}
                    type="button"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-7 grid items-stretch gap-6 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,340px)_minmax(0,1fr)] xl:gap-10">
                <div className="relative min-w-0 space-y-1.5">
                  <p className="pb-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[#8f8882]">
                    Klicken oder scrollen
                  </p>
                  <div className="absolute bottom-7 left-[15px] top-7 w-[3px] rounded-full bg-[#4d4a45]" />
                  <motion.div
                    className="absolute left-[15px] top-7 w-[3px] rounded-full"
                    style={{
                      height: railProgressHeight,
                      background:
                        "linear-gradient(180deg, #e8913b 0%, rgba(232, 102, 89, 0.78) 52%, #9c59b5 100%)",
                    }}
                  />

                  {content.layers.map((layer, index) => {
                    const isActive = index === activeIndex;
                    const isComplete = index < activeIndex;

                    return (
                      <button
                        aria-current={isActive ? "step" : undefined}
                        className={cn(
                          "group relative z-10 grid w-full grid-cols-[2rem_minmax(0,1fr)] items-start gap-4 text-left",
                        )}
                        key={layer.id}
                        onClick={() => scrollToStep(index)}
                        type="button"
                      >
                        <div className="flex justify-center pt-4">
                          <div
                            className={cn(
                              "relative flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300",
                              isActive || isComplete
                                ? "border-[rgba(232,145,58,0.92)] shadow-[0_0_8px_rgba(232,145,58,0.25)]"
                                : "border-[#5b5550]",
                            )}
                            style={{
                              background:
                                isActive || isComplete
                                  ? "radial-gradient(circle, rgba(232,145,58,0.22) 0%, rgba(232,101,90,0.14) 50%, rgba(44,41,38,0.98) 100%)"
                                  : "#2f2b27",
                            }}
                          >
                            <span
                              className={cn(
                                "h-2.5 w-2.5 rounded-full transition-colors duration-300",
                                isActive || isComplete ? "bg-[#bf5347]" : "bg-[#5b5550]",
                              )}
                            />
                          </div>
                        </div>

                        <div
                          className={cn(
                            "min-w-0 rounded-[12px] px-4 py-4 transition-colors duration-300 xl:px-5",
                            isActive
                              ? "bg-[#3a3833]"
                              : "bg-transparent group-hover:bg-[rgba(58,56,51,0.4)]",
                          )}
                        >
                          <motion.p
                            animate={{
                              opacity: isActive ? 1 : 0.92,
                              x: isActive && !shouldReduceMotion ? 2 : 0,
                            }}
                            className="text-[15px] font-semibold leading-normal text-[#fafaf9] xl:text-[16px]"
                            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                          >
                            {layer.title}
                          </motion.p>
                          <p className="mt-1 max-w-[28ch] text-[13px] leading-[21px] text-[#a8a29e] xl:text-[14px] xl:leading-[22px]">
                            {layer.summary}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex min-h-[320px] min-w-0 overflow-hidden rounded-[24px] bg-[#3a3833] p-4 xl:min-h-[380px] xl:p-5">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      className="relative w-full overflow-hidden rounded-[16px] bg-[#4a4744]"
                      exit={{
                        opacity: 0,
                        scale: shouldReduceMotion ? 1 : 0.992,
                        x: shouldReduceMotion ? 0 : -20,
                      }}
                      initial={{
                        opacity: 0,
                        scale: shouldReduceMotion ? 1 : 0.992,
                        x: shouldReduceMotion ? 0 : 20,
                      }}
                      key={activeLayer.id}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        alt={activeLayer.preview.alt}
                        className="object-contain"
                        fill
                        priority={activeIndex === 0}
                        sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 56vw, 92vw"
                        src={activeLayer.preview.src}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
