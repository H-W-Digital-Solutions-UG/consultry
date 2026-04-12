"use client";

import "@/bones/registry";
import { Skeleton } from "boneyard-js/react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { HomepageHero } from "@/lib/content/de/homepage";

type HeroShowcaseRowMotionProps = {
  hero: HomepageHero;
};

type ValueCardProps = {
  accent: "primary" | "secondary";
  body: string;
  title: string;
};

function HeroShowcaseRowFallback() {
  return (
    <div className="grid w-full max-w-[1140px] gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-[minmax(260px,1fr)_520px_minmax(260px,1fr)] lg:items-center lg:gap-8">
      <div className="order-2 rounded-[12px] border border-[rgba(232,145,58,0.18)] bg-[rgba(44,40,38,0.88)] p-6 shadow-[0_18px_38px_rgba(0,0,0,0.22)] md:order-2 lg:order-1">
        <div className="h-11 w-11 rounded-[10px] bg-[rgba(191,83,71,0.18)]" />
        <div className="mt-5 h-6 w-44 rounded-full bg-[rgba(250,250,249,0.08)]" />
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full rounded-full bg-[rgba(250,250,249,0.06)]" />
          <div className="h-4 w-[88%] rounded-full bg-[rgba(250,250,249,0.05)]" />
          <div className="h-4 w-[72%] rounded-full bg-[rgba(250,250,249,0.05)]" />
        </div>
      </div>

      <div className="order-1 mx-auto aspect-[520/380] w-full max-w-[520px] rounded-[12px] bg-[rgba(33,29,26,0.95)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] md:col-span-2 lg:col-span-1 lg:order-2" />

      <div className="order-3 rounded-[12px] border border-[rgba(232,145,58,0.18)] bg-[rgba(44,40,38,0.88)] p-6 shadow-[0_18px_38px_rgba(0,0,0,0.22)]">
        <div className="h-11 w-11 rounded-[10px] bg-[rgba(232,145,58,0.18)]" />
        <div className="mt-5 h-6 w-48 rounded-full bg-[rgba(250,250,249,0.08)]" />
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full rounded-full bg-[rgba(250,250,249,0.06)]" />
          <div className="h-4 w-[82%] rounded-full bg-[rgba(250,250,249,0.05)]" />
          <div className="h-4 w-[74%] rounded-full bg-[rgba(250,250,249,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function ValueCard({ accent, body, title }: ValueCardProps) {
  const isPrimary = accent === "primary";

  return (
    <div
      className="rounded-[12px] p-px shadow-[0_18px_38px_rgba(0,0,0,0.22)]"
      style={{ background: "var(--consultry-card-border-gradient)" }}
    >
      <article className="h-full rounded-[11px] bg-[#2c2826] px-5 py-6 text-left sm:px-7 sm:py-7">
        <div
          className={[
            "mb-4 flex h-11 w-11 items-center justify-center rounded-[10px]",
            isPrimary ? "bg-[rgba(191,83,71,0.15)]" : "bg-[rgba(232,145,58,0.15)]",
          ].join(" ")}
        >
          <div
            className={[
              "h-5 w-5 rounded-[4px]",
              isPrimary ? "bg-[var(--consultry-brand-primary)]" : "bg-[#e8913a]",
            ].join(" ")}
          />
        </div>
        <p className="text-[17px] font-semibold leading-[1.35] text-[#fafaf9] sm:text-[18px]">{title}</p>
        <p className="mt-3 max-w-[28ch] text-[14px] leading-[1.55] text-[#a8a5a0] sm:text-[15px]">{body}</p>
      </article>
    </div>
  );
}

export function HeroShowcaseRowMotion({ hero }: HeroShowcaseRowMotionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsHydrated(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Skeleton
      fallback={<HeroShowcaseRowFallback />}
      loading={!isHydrated}
      name="homepage-hero-showcase-row"
    >
      <div className="grid w-full max-w-[1140px] gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-[minmax(260px,1fr)_520px_minmax(260px,1fr)] lg:items-center lg:gap-8">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="order-2 md:order-2 lg:order-1"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -32 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
        >
          <ValueCard
            accent="primary"
            body={hero.sideCards[0]?.body ?? ""}
            title={hero.sideCards[0]?.title ?? ""}
          />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="order-1 mx-auto flex w-full max-w-[520px] flex-col items-center gap-5 md:col-span-2 lg:col-span-1 lg:order-2"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.985, y: shouldReduceMotion ? 0 : 18 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[520/380] w-full overflow-visible rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <Image
              alt={hero.image.alt}
              className="object-contain"
              fill
              loading="eager"
              priority
              sizes="(max-width: 1024px) min(92vw, 520px), 520px"
              src={hero.image.src}
            />
          </div>
          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-[14px]">
            <Button
              className="w-full max-w-[15.5rem] px-5 py-2.5 text-[15px] sm:w-auto sm:max-w-none sm:px-8 sm:py-3 sm:text-[18px]"
              href={hero.primaryCta.href}
              size="lg"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              className="w-full max-w-[15.5rem] border-[rgba(250,250,249,0.2)] bg-transparent px-5 py-2.5 text-[15px] text-[#fafaf9] hover:bg-white/6 sm:w-auto sm:max-w-none sm:px-8 sm:py-3 sm:text-[18px]"
              href={hero.secondaryCta.href}
              size="lg"
              variant="secondary"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="order-3"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 32 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
        >
          <ValueCard
            accent="secondary"
            body={hero.sideCards[1]?.body ?? ""}
            title={hero.sideCards[1]?.title ?? ""}
          />
        </motion.div>
      </div>
    </Skeleton>
  );
}
