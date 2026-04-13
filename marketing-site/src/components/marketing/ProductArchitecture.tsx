"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ProductArchitectureContent } from "@/lib/content/de/product";
import { useActiveSection } from "@/components/marketing/useActiveSection";

type ProductArchitectureProps = {
  content: ProductArchitectureContent;
};

function getLayerStepperLabel(layerId: string) {
  switch (layerId) {
    case "account-growth":
      return "Account Growth";
    case "staffing-capacity":
      return "Team & Capacity";
    case "knowledge-reuse":
      return "Knowledge Reuse";
    case "proposal-workflow":
      return "Proposal Workflow";
    case "delivery-control":
      return "Delivery Control";
    default:
      return layerId;
  }
}

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
  const layerIds = content.layers.map((layer) => layer.id);
  const { activeId, progress } = useActiveSection(layerIds, {
    anchorFraction: 0.34,
  });
  const activeIndex = Math.max(content.layers.findIndex((layer) => layer.id === activeId), 0);
  const trackInset = 100 / (content.layers.length * 2);
  const trackWidth = 100 - trackInset * 2;

  return (
    <section className="relative section-shell-tight" id="architecture">
      <div className="content-shell">
        <div className="relative rounded-[12px] bg-[#2c2926] px-6 py-10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)] ring-1 ring-[rgba(255,255,255,0.06)] sm:px-10 sm:py-12">
          <ProductArchitectureHeader overline={content.overline} title={content.title} />
          <p className="mx-auto mt-5 max-w-[56rem] text-center text-[17px] leading-[1.65] text-[rgba(212,207,199,0.72)]">
            {content.body}
          </p>

          <div className="mt-10 grid gap-5 md:hidden">
            {content.layers.map((layer, index) => (
              <article
                className="overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#332f2c]"
                key={layer.id}
              >
                <div className="p-6 sm:p-7">
                  <p className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.16em] text-[#f0a85e]">
                    {layer.eyebrow}
                  </p>
                  <h3 className="mt-4 text-[1.625rem] font-semibold text-[#fafaf9]">
                    {layer.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#c8c2bb]">{layer.summary}</p>

                  <ul className="mt-5 grid gap-2 text-sm leading-[1.6] text-[#fafaf9] sm:grid-cols-2">
                    {layer.capabilities.map((capability) => (
                      <li
                        className="rounded-[12px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-3"
                        key={capability}
                      >
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[rgba(255,255,255,0.06)] bg-[#2c2926] p-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[#211d1a]">
                    <Image
                      alt={layer.preview.alt}
                      className="object-contain"
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 92vw, 44vw"
                      src={layer.preview.src}
                    />
                  </div>
                  <p className="mt-4 text-[13px] leading-[1.6] text-[#a8a29e]">
                    {layer.preview.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden items-start gap-6 md:grid md:grid-cols-[minmax(280px,0.88fr)_minmax(0,1.12fr)] lg:gap-8 lg:grid-cols-[minmax(360px,0.78fr)_minmax(440px,1fr)] xl:grid-cols-[minmax(390px,0.72fr)_minmax(500px,1.02fr)]">
            <aside className="md:sticky md:top-24 md:self-start">
              <div className="overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#332f2c] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.18)]">
                <div className="min-h-[14.5rem] border-b border-[rgba(255,255,255,0.06)] bg-[rgba(41,38,36,0.82)] px-6 py-8">
                  <p className="pb-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[#8f8882]">
                    Module
                  </p>
                  <div className="relative mt-5">
                    <div
                      className="absolute top-3 z-0 h-[3px] rounded-full bg-[#4d4a45]"
                      style={{
                        left: `${trackInset}%`,
                        right: `${trackInset}%`,
                      }}
                    />
                    <div
                      className="absolute top-3 z-10 h-[3px] rounded-full"
                      style={{
                        background: "var(--consultry-step-progress-gradient)",
                        left: `${trackInset}%`,
                        width: `${trackWidth * progress}%`,
                      }}
                    />
                    <div
                      className="relative z-20 grid gap-3"
                      style={{
                        gridTemplateColumns: `repeat(${content.layers.length}, minmax(0, 1fr))`,
                      }}
                    >
                      {content.layers.map((layer, index) => {
                        const isActive = layer.id === activeId;
                        const isComplete = index < activeIndex;

                        return (
                          <Link
                            aria-current={isActive ? "step" : undefined}
                            className="group flex flex-col items-center gap-3 text-center"
                            href={`#${layer.id}`}
                            key={layer.id}
                          >
                            <div
                              className={cn(
                                "relative flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300",
                                isActive
                                  ? "border-[rgba(232,145,58,0.92)] shadow-[0_0_8px_rgba(232,145,58,0.25)]"
                                  : isComplete
                                    ? "border-[rgba(240,168,94,0.78)]"
                                    : "border-[#5b5550]",
                              )}
                              style={{
                                background:
                                  isActive
                                    ? "radial-gradient(circle, rgba(232,145,58,0.22) 0%, rgba(232,101,90,0.14) 50%, rgba(44,41,38,0.98) 100%)"
                                    : isComplete
                                      ? "rgba(240,168,94,0.08)"
                                    : "#2f2b27",
                              }}
                            >
                              <span
                                className={cn(
                                  "h-2.5 w-2.5 rounded-full",
                                  isActive ? "bg-[#bf5347]" : isComplete ? "bg-[var(--consultry-brand-warm)]" : "bg-[#5b5550]",
                                )}
                              />
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.18em] text-[#8f8882]">
                                [{String(index + 1).padStart(2, "0")}]
                              </p>
                              <p
                                className={cn(
                                  "mt-2 text-[11px] font-medium leading-[1.35] transition",
                                  isActive
                                    ? "text-[#fafaf9]"
                                    : isComplete
                                      ? "text-[#d9d4cf]"
                                      : "text-[#a8a29e] group-hover:text-[#fafaf9]",
                                )}
                              >
                                {getLayerStepperLabel(layer.id)}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-5">
                    <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[#8f8882]">
                      Schnellzugriff
                    </p>
                    <div className="mt-3 grid gap-2">
                      {content.layers.map((layer, index) => {
                        const isActive = layer.id === activeId;
                        const isComplete = index < activeIndex;

                        return (
                          <Link
                            aria-current={isActive ? "true" : undefined}
                            className={cn(
                              "group flex items-center justify-between rounded-[14px] border px-3 py-3 transition",
                              isActive
                                ? "border-[rgba(232,145,58,0.38)] bg-[rgba(232,145,58,0.12)] shadow-[0_0_0_1px_rgba(232,145,58,0.06)]"
                                : isComplete
                                  ? "border-[rgba(240,168,94,0.18)] bg-[rgba(255,255,255,0.025)] hover:border-[rgba(240,168,94,0.3)] hover:bg-[rgba(255,255,255,0.035)]"
                                  : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.045)]",
                            )}
                            href={`#${layer.id}`}
                            key={`${layer.id}-quicklink`}
                          >
                            <div className="min-w-0">
                              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[#8f8882]">
                                [{String(index + 1).padStart(2, "0")}]
                              </p>
                              <p
                                className={cn(
                                  "mt-1 text-[13px] font-medium leading-[1.35]",
                                  isActive
                                    ? "text-[#fafaf9]"
                                    : isComplete
                                      ? "text-[#e3ddd6]"
                                      : "text-[#b5aea8] group-hover:text-[#fafaf9]",
                                )}
                              >
                                {layer.title}
                              </p>
                            </div>
                            <span
                              aria-hidden="true"
                              className={cn(
                                "ml-3 h-2.5 w-2.5 shrink-0 rounded-full transition",
                                isActive
                                  ? "bg-[var(--consultry-brand-coral)]"
                                  : isComplete
                                    ? "bg-[var(--consultry-brand-warm)]"
                                    : "bg-[#5b5550] group-hover:bg-[#8f8882]",
                              )}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="space-y-12">
              {content.layers.map((layer) => (
                <article
                  className="scroll-mt-28 overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#332f2c]"
                  id={layer.id}
                  key={layer.id}
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#211d1a]">
                    <Image
                      alt={layer.preview.alt}
                      className="object-contain"
                      fill
                      priority={layer.id === content.layers[0]?.id}
                      sizes="(max-width: 1279px) 52vw, 46vw"
                      src={layer.preview.src}
                    />
                  </div>
                  <div className="border-t border-[rgba(255,255,255,0.06)] px-6 py-5">
                    <p className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.16em] text-[#f0a85e]">
                      {layer.eyebrow}
                    </p>
                    <h3 className="mt-4 text-[1.625rem] font-semibold text-[#fafaf9]">
                      {layer.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.75] text-[#c8c2bb]">
                      {layer.summary}
                    </p>
                    <ul className="mt-5 grid gap-2 text-sm leading-[1.6] text-[#fafaf9] sm:grid-cols-2">
                      {layer.capabilities.map((capability) => (
                        <li
                          className="rounded-[12px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-3"
                          key={capability}
                        >
                          {capability}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-[14px] leading-[1.65] text-[#a8a29e]">
                      {layer.preview.caption}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#332f2c] px-6 py-8 sm:px-8">
            <p className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.16em] text-[#f0a85e]">
              {content.workflowOverline}
            </p>
            <h3 className="mt-4 text-[1.875rem] font-semibold text-[#fafaf9]">
              {content.workflowTitle}
            </h3>
            <p className="mt-4 max-w-[52rem] text-[16px] leading-[1.7] text-[#c8c2bb]">
              {content.workflowBody}
            </p>
            <ol className="mt-6 grid gap-3 md:grid-cols-3">
              {content.workflowSteps.map((step, index) => (
                <li
                  className="rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-4"
                  key={step}
                >
                  <p className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.14em] text-[#f0a85e]">
                    Schritt {index + 1}
                  </p>
                  <p className="mt-2 text-[15px] font-medium leading-[1.6] text-[#fafaf9]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
