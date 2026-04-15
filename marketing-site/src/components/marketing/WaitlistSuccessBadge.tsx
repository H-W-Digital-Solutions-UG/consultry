"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type WaitlistSuccessBadgeProps = {
  className?: string;
  size?: "sm" | "lg";
};

const sizeClasses = {
  sm: {
    shell: "h-12 w-12",
    icon: "h-5 w-5",
  },
  lg: {
    shell: "h-18 w-18 sm:h-20 sm:w-20",
    icon: "h-8 w-8 sm:h-9 sm:w-9",
  },
} as const;

const revealEase = [0.22, 1, 0.36, 1] as const;

export function WaitlistSuccessBadge({
  className,
  size = "sm",
}: WaitlistSuccessBadgeProps) {
  const shouldReduceMotion = useReducedMotion();
  const classes = sizeClasses[size];

  return (
    <div className={cn("relative inline-flex items-center justify-center", classes.shell, className)}>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-[rgba(244,183,109,0.34)] bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.34),transparent_38%),linear-gradient(145deg,rgba(232,145,58,0.88),rgba(191,83,71,0.9))] shadow-[0_16px_34px_rgba(191,83,71,0.22)]"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.84, rotate: -8 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: revealEase }}
      />

      <motion.span
        aria-hidden="true"
        className="absolute inset-[-0.45rem] rounded-full border border-[rgba(244,183,109,0.24)]"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.78 }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0, 0.34, 0],
                scale: [0.78, 1.18, 1.28],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 1.05, ease: "easeOut", times: [0, 0.42, 1] }
        }
      />

      <motion.span
        aria-hidden="true"
        className="absolute inset-[-0.8rem] rounded-full bg-[radial-gradient(circle,rgba(244,183,109,0.28)_0%,rgba(244,183,109,0.08)_42%,transparent_72%)] blur-md"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.76 }}
        animate={shouldReduceMotion ? undefined : { opacity: [0, 0.42, 0.18], scale: [0.76, 1.1, 1] }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.88, ease: revealEase }}
      />

      <motion.span
        aria-hidden="true"
        className="relative z-10 inline-flex items-center justify-center text-white"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.52, rotate: -14 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.42, delay: 0.14, ease: [0.34, 1.56, 0.64, 1] }
        }
      >
        <Check className={classes.icon} strokeWidth={2.6} />
      </motion.span>
    </div>
  );
}
