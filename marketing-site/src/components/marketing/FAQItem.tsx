"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="overflow-hidden rounded-[var(--consultry-radius-md)] border border-[var(--consultry-border-soft)] bg-white/4">
      <button
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left"
        onClick={onToggle}
        type="button"
      >
        <span className="text-base font-medium text-[var(--consultry-text-primary)]">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-[var(--consultry-text-muted)] transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="body-md px-5 pb-5">{answer}</p>
        </div>
      </div>
    </div>
  );
}
