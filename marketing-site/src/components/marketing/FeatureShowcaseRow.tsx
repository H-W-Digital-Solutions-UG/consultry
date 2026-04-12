import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import { cn } from "@/lib/cn";
import type { ProductFeatureRowContent } from "@/lib/content/de/product";

type FeatureShowcaseRowProps = {
  content: ProductFeatureRowContent;
};

export function FeatureShowcaseRow({ content }: FeatureShowcaseRowProps) {
  const textOrder = content.reverse ? "lg:order-1" : "lg:order-2";
  const imageOrder = content.reverse ? "lg:order-2" : "lg:order-1";

  return (
    <div
      className={cn(
        "grid gap-6 lg:items-center",
        content.reverse
          ? "lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]"
          : "lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]",
      )}
    >
      <MotionReveal
        className={cn(content.reverse ? "order-1" : "order-2", textOrder)}
        x={content.reverse ? -28 : 28}
      >
        <div className="max-w-xl">
          <p className="eyebrow">{content.eyebrow}</p>
          <h3 className="display-section text-balance mt-4 text-[var(--consultry-text-primary)]">
            {content.title}
          </h3>
          <p className="body-lg mt-5">{content.body}</p>
          <Link
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--consultry-text-secondary)] transition hover:text-[var(--consultry-text-primary)]"
            href="#video"
          >
            {content.linkLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </MotionReveal>

      <MotionReveal
        className={cn(content.reverse ? "order-2" : "order-1", imageOrder)}
        delay={0.06}
        x={content.reverse ? 28 : -28}
      >
        <div className="surface-panel group overflow-hidden rounded-[var(--consultry-radius-xl)] p-3 transition-transform duration-500 hover:-translate-y-1">
          <div className="overflow-hidden rounded-[calc(var(--consultry-radius-xl)-4px)] border border-[var(--consultry-border-soft)] bg-[rgba(19,17,15,0.96)]">
            <div className="border-b border-[var(--consultry-border-soft)] px-4 py-3">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--consultry-text-faint)]">
                Produktansicht
              </p>
            </div>
            <div className="relative aspect-[16/10]">
              <Image
                alt={content.image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                fill
                loading="eager"
                sizes="(min-width: 1024px) 52vw, 100vw"
                src={content.image.src}
              />
            </div>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
