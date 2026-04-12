"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { startTransition, useState } from "react";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import type { ProductArchitectureContent } from "@/lib/content/de/product";
import { cn } from "@/lib/cn";

type ProductArchitectureProps = {
  content: ProductArchitectureContent;
};

export function ProductArchitecture({ content }: ProductArchitectureProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeLayer = content.layers[activeIndex] ?? content.layers[0];

  const progressWidth =
    content.layers.length > 1
      ? `${(activeIndex / (content.layers.length - 1)) * 75}%`
      : "0%";

  return (
    <section className="section-shell-tight" id="architecture">
      <div className="content-shell">
        {/* Row 1 — Section Header */}
        <MotionReveal className="mx-auto max-w-3xl text-center" y={18}>
          <p className="eyebrow">{content.overline}</p>
          <h2 className="display-section mt-4 text-balance text-[var(--consultry-text-primary)]">
            {content.title}
          </h2>
          <p className="body-lg mx-auto mt-5 max-w-2xl">{content.body}</p>
        </MotionReveal>

        {/* Row 2 — Horizontal Stepper + Content */}
        <MotionReveal
          className="mt-10 overflow-hidden rounded-[12px] bg-[#2c2926] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)] ring-1 ring-[rgba(255,255,255,0.06)]"
          delay={0.06}
          y={24}
        >
          {/* Stepper Bar */}
          <div className="border-b border-[rgba(255,255,255,0.06)] bg-[rgba(41,38,36,0.82)] px-10 py-7">
            <div className="relative">
              {/* Track line */}
              <div className="absolute left-[12.5%] right-[12.5%] top-[5px] h-[3px] -translate-y-1/2 rounded-full bg-[#4d4a45]" />
              {/* Progress line */}
              <motion.div
                animate={{ width: progressWidth }}
                className="absolute left-[12.5%] top-[5px] h-[3px] -translate-y-1/2 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #e8913b 0%, rgba(232, 102, 89, 0.75) 45%, #9c59b5 100%)",
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.35,
                  ease: "easeInOut",
                }}
              />

              {/* Step tabs */}
              <div className="relative z-10 grid grid-cols-4 gap-4">
                {content.layers.map((layer, index) => {
                  const isActive = index === activeIndex;
                  const isComplete = index < activeIndex;

                  return (
                    <button
                      className="flex flex-col items-center gap-4 text-center"
                      key={layer.id}
                      onClick={() => {
                        startTransition(() => {
                          setActiveIndex(index);
                        });
                      }}
                      type="button"
                    >
                      <div
                        className={cn(
                          "relative flex h-[10px] w-[10px] items-center justify-center rounded-full transition-all duration-300",
                          isActive || isComplete
                            ? "shadow-[0_0_8px_rgba(232,145,58,0.25)]"
                            : "",
                        )}
                        style={{
                          background:
                            isActive || isComplete ? "#bf5347" : "#5b5550",
                          border:
                            isActive || isComplete
                              ? "2px solid rgba(232, 145, 58, 0.92)"
                              : "none",
                        }}
                      />
                      <p
                        className={cn(
                          "transition-colors duration-300",
                          isActive
                            ? "text-[13px] font-semibold text-[#fafaf9]"
                            : isComplete
                              ? "text-[12px] font-medium text-[#a6a199]"
                              : "text-[12px] font-medium text-[#736e69]",
                        )}
                      >
                        {layer.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content area — animated step */}
          <div className="relative min-h-[28rem] overflow-hidden px-[60px] py-12">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="grid items-center gap-[60px] lg:grid-cols-[minmax(0,1fr)_minmax(400px,560px)]"
                exit={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : -18,
                }}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 18,
                }}
                key={activeLayer.id}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.35,
                  ease: "easeOut",
                }}
              >
                {/* Left: Copy */}
                <div className="max-w-[36rem]">
                  <p className="font-[var(--font-mono)] text-[14px] tracking-[0.06em] text-[#f0a85e]">
                    [{String(activeIndex + 1).padStart(2, "0")}]
                  </p>
                  <div className="mt-3 h-px w-10 bg-[rgba(240,168,94,0.4)]" />
                  <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#f0a85e]">
                    {activeLayer.eyebrow}
                  </p>
                  <h3 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#fafaf9]">
                    {activeLayer.title}
                  </h3>
                  <p className="mt-4 text-[18px] leading-[1.6] text-[rgba(250,250,249,0.65)]">
                    {activeLayer.summary}
                  </p>

                  {/* Capability tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeLayer.capabilities.map((cap) => (
                      <span
                        className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(19,17,15,0.55)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--consultry-text-faint)]"
                        key={cap}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <Link
                    className="mt-6 inline-flex items-center gap-2 text-[16px] font-medium text-[#dda49e] transition hover:text-[#fafaf9]"
                    href="/produkt#video"
                  >
                    Mehr zu {activeLayer.title}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Right: Preview */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-[#211d1a] shadow-[0_8px_40px_rgba(0,0,0,0.18)]">
                  <Image
                    alt={activeLayer.preview.alt}
                    className="object-contain"
                    fill
                    sizes="(min-width: 1280px) 46vw, (min-width: 1024px) 52vw, 92vw"
                    src={activeLayer.preview.src}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
