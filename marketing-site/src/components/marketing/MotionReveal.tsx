"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
  once?: boolean;
  amount?: number;
};

const revealEase = [0.22, 1, 0.36, 1] as const;

export function MotionReveal({
  children,
  className,
  delay = 0,
  duration = 0.58,
  x = 0,
  y = 24,
  scale = 1,
  once = true,
  amount = 0.2,
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? false : { opacity: 0, x, y, scale }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration, ease: revealEase, delay }
      }
      viewport={shouldReduceMotion ? undefined : { once, amount }}
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, x: 0, y: 0, scale: 1 }
      }
    >
      {children}
    </motion.div>
  );
}
