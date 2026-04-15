import Image from "next/image";
import { Play } from "lucide-react";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import { cn } from "@/lib/cn";

type ProductDemoModuleProps = {
  eyebrow: string;
  title: string;
  body: string;
  meta?: string;
  overlayCta: string;
  poster: {
    src: string;
    alt: string;
  };
};

function ProductDemoPoster({
  overlayCta,
  poster,
  className,
}: {
  overlayCta: string;
  poster: ProductDemoModuleProps["poster"];
  className?: string;
}) {
  return (
    <MotionReveal
      className={cn(
        "group relative order-first overflow-hidden rounded-[24px] bg-[#1e1b18] shadow-[0_0_48px_rgba(0,0,0,0.1),0_4px_24px_rgba(0,0,0,0.25)] lg:order-none",
        className,
      )}
      x={-24}
    >
      <div className="relative aspect-[16/11] sm:aspect-[16/10]">
        <Image
          alt={poster.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          fill
          sizes="(max-width: 1023px) 92vw, 55vw"
          src={poster.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,11,10,0.04),rgba(13,11,10,0.32))]" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <button
            className="inline-flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(26,24,21,0.88)] px-4 py-2.5 text-[14px] font-medium text-white shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:scale-105 sm:px-5 sm:py-3 sm:text-[15px]"
            type="button"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#bf5347,#e8913a)] text-white sm:h-11 sm:w-11">
              <Play className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
            </span>
            {overlayCta}
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-8">
          <div className="h-[3px] w-full rounded-full bg-[rgba(255,255,255,0.08)]">
            <div
              className="h-full w-[42%] rounded-full"
              style={{ background: "linear-gradient(90deg, #bf5347, #e8913a)" }}
            />
          </div>
          <p className="mt-2 text-center text-[12px] tracking-[0.04em] text-[rgba(255,255,255,0.3)]">
            Produktvorschau
          </p>
        </div>
      </div>
    </MotionReveal>
  );
}

export function ProductDemoModule({
  eyebrow,
  title,
  body,
  meta,
  overlayCta,
  poster,
}: ProductDemoModuleProps) {
  return (
    <section className="section-shell" id="demo">
      <div className="content-shell">
        <div
          className="overflow-hidden rounded-[32px] border px-6 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.12)] sm:px-8 sm:py-8 lg:px-10 lg:py-10"
          style={{
            background: "#24201d",
            borderColor: "rgba(71, 64, 56, 0.7)",
          }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <ProductDemoPoster overlayCta={overlayCta} poster={poster} />

            {/* Copy */}
            <MotionReveal className="max-w-xl lg:py-4" delay={0.08} x={24}>
              <p
                className="text-[14px] font-semibold tracking-[0.2em] sm:text-[16px]"
                style={{ color: "#e8913b" }}
              >
                {eyebrow}
              </p>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,3.35rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#faf7f2]">
                {title}
              </h2>
              <p className="mt-5 text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] text-[rgba(212,207,199,0.92)]">
                {body}
              </p>
              {meta ? (
                <p className="mt-5 text-[15px] leading-[1.7] text-[rgba(212,207,199,0.62)] sm:text-[16px] lg:text-[18px]">
                  {meta}
                </p>
              ) : null}
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
