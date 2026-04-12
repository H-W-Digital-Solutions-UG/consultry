"use client";

import Image from "next/image";
import { startTransition, useDeferredValue, useState } from "react";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import type { ProductArchitectureContent } from "@/lib/content/de/product";
import { cn } from "@/lib/cn";

type ProductArchitectureProps = {
  content: ProductArchitectureContent;
};

export function ProductArchitecture({ content }: ProductArchitectureProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const deferredIndex = useDeferredValue(activeIndex);
  const activeLayer = content.layers[deferredIndex] ?? content.layers[0];
  const activeWorkflowIndex = Math.min(
    deferredIndex,
    Math.max(content.workflowSteps.length - 1, 0),
  );

  return (
    <section className="section-shell-tight" id="architecture">
      <div className="content-shell">
        <MotionReveal className="mx-auto max-w-4xl text-center" y={18}>
          <p className="eyebrow">{content.overline}</p>
          <h2 className="display-section mt-4 text-balance text-[var(--consultry-text-primary)]">
            {content.title}
          </h2>
          <p className="body-lg mx-auto mt-5 max-w-3xl">{content.body}</p>
        </MotionReveal>

        <div className="mt-10 overflow-hidden rounded-[32px] border border-[var(--consultry-border-soft)] bg-[#2c2926] shadow-[var(--consultry-shadow-lg)]">
          <div className="grid gap-0 lg:grid-cols-[390px_minmax(0,1fr)]">
            <MotionReveal className="border-b border-[var(--consultry-border-soft)] p-6 lg:border-b-0 lg:border-r lg:p-7" x={-18}>
              <div className="space-y-3">
                {content.layers.map((layer, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      aria-pressed={isActive}
                      className={cn(
                        "block w-full rounded-[18px] border px-5 py-5 text-left transition duration-300",
                        isActive
                          ? "border-[rgba(232,145,58,0.32)] bg-[rgba(255,255,255,0.06)] shadow-[inset_3px_0_0_0_rgba(232,145,58,0.85)]"
                          : "border-transparent bg-transparent hover:border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.025)]",
                      )}
                      key={layer.id}
                      onClick={() => {
                        startTransition(() => {
                          setActiveIndex(index);
                        });
                      }}
                      type="button"
                    >
                      <p className="eyebrow text-[var(--consultry-brand-warm)]">{layer.eyebrow}</p>
                      <p className="mt-2 text-[1.375rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--consultry-text-primary)]">
                        {layer.title}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[var(--consultry-text-muted)]">{layer.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {layer.capabilities.slice(0, isActive ? layer.capabilities.length : 2).map((capability) => (
                          <span
                            className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(19,17,15,0.55)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--consultry-text-faint)]"
                            key={capability}
                          >
                            {capability}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </MotionReveal>

            <MotionReveal className="p-6 sm:p-7 lg:p-8" delay={0.08} x={18}>
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
                <div className="overflow-hidden rounded-[26px] border border-[rgba(255,255,255,0.08)] bg-[rgba(19,17,15,0.78)]">
                  <div className="border-b border-[rgba(255,255,255,0.06)] px-6 py-5">
                    <p className="eyebrow">{activeLayer.eyebrow}</p>
                    <h3 className="mt-3 text-[clamp(1.9rem,3vw,2.75rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--consultry-text-primary)]">
                      {activeLayer.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[var(--consultry-text-muted)]">
                      {activeLayer.summary}
                    </p>
                  </div>

                  <div className="px-6 py-6">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.06)] bg-[#211d1a]">
                      <Image
                        alt={activeLayer.preview.alt}
                        className="object-cover"
                        fill
                        sizes="(min-width: 1280px) 46vw, (min-width: 1024px) 52vw, 92vw"
                        src={activeLayer.preview.src}
                      />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-[var(--consultry-text-faint)]">
                      {activeLayer.preview.caption}
                    </p>
                  </div>
                </div>

                <div className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(58,56,51,0.92),rgba(26,24,21,0.98))] p-5">
                  <p className="eyebrow">{content.workflowOverline}</p>
                  <h3 className="mt-4 text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--consultry-text-primary)]">
                    {content.workflowTitle}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--consultry-text-muted)]">
                    {content.workflowBody}
                  </p>

                  <div className="mt-5 space-y-3">
                    {content.workflowSteps.map((step, index) => (
                      <div
                        className={cn(
                          "flex items-center justify-between rounded-[var(--consultry-radius-md)] border px-4 py-3 text-sm transition-transform duration-300 hover:-translate-y-0.5",
                          index === activeWorkflowIndex
                            ? "border-[rgba(232,145,58,0.32)] bg-[rgba(232,145,58,0.1)] text-[var(--consultry-text-primary)]"
                            : "border-[var(--consultry-border-soft)] bg-white/3 text-[var(--consultry-text-muted)]",
                        )}
                        key={step}
                      >
                        <span>{step}</span>
                        <span className="text-xs uppercase tracking-[0.18em] text-[var(--consultry-text-faint)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[var(--consultry-radius-md)] border border-[var(--consultry-border-soft)] bg-[rgba(19,17,15,0.9)] p-4">
                    <p className="text-sm leading-6 text-[var(--consultry-text-muted)]">
                      {activeLayer.capabilities.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
