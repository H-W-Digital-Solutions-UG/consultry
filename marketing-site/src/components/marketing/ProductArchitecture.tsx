"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
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
    <div className="mx-auto max-w-[42rem] text-center">
      <p className="eyebrow">{overline}</p>
      <h2 className="mt-4 text-balance text-[clamp(2.5rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#fafaf9]">
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
    setStep(index);

    if (!isDesktop || !scrollRef.current) {
      return;
    }

    const sectionTop = scrollRef.current.getBoundingClientRect().top + window.scrollY;
    const maxScrollableDistance = Math.max(
      scrollRef.current.offsetHeight - window.innerHeight,
      0,
    );
    const progress = layerCount > 1 ? index / (layerCount - 1) : 0;

    window.scrollTo({
      top: sectionTop + progress * maxScrollableDistance,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const panelShell =
    "overflow-hidden rounded-[12px] bg-[#2c2926] px-6 py-10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)] ring-1 ring-[rgba(255,255,255,0.06)] sm:px-10 sm:py-12 lg:px-[88px] lg:py-[88px] xl:px-[120px] xl:py-[104px]";

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
              <ProductArchitectureHeader
                overline={content.workflowOverline}
                title={content.workflowTitle}
              />

              <div className="mt-12 flex items-start gap-8 xl:gap-14">
                <div className="w-[340px] shrink-0 xl:w-[360px]">
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
                        <motion.div
                          animate={{ backgroundColor: isActive ? "#e8913a" : "rgba(232,145,58,0)" }}
                          className="self-stretch w-[3px] shrink-0"
                          transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                        />
                        <div className="px-10 py-6">
                          <motion.p
                            animate={{
                              opacity: isActive ? 1 : 0.92,
                              x: isActive && !shouldReduceMotion ? 2 : 0,
                            }}
                            className="text-[16px] font-semibold leading-normal text-[#fafaf9]"
                            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                          >
                            {layer.title}
                          </motion.p>
                          <p className="mt-1 max-w-[30ch] text-[14px] leading-[22px] text-[#a8a29e]">
                            {layer.summary}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex min-h-[500px] flex-1 overflow-hidden rounded-[24px] bg-[#3a3833] p-5 xl:min-h-[540px] xl:p-6">
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
