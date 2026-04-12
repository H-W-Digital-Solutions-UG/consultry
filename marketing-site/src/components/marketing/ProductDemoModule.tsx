import Image from "next/image";
import { Play } from "lucide-react";
import { MotionReveal } from "@/components/marketing/MotionReveal";

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
            {/* Video / Image placeholder */}
            <MotionReveal className="group relative overflow-hidden rounded-[24px] bg-[#1e1b18] shadow-[0_0_48px_rgba(0,0,0,0.1),0_4px_24px_rgba(0,0,0,0.25)]" x={-24}>
              <div className="relative aspect-[16/10]">
                <Image
                  alt={poster.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 55vw, 92vw"
                  src={poster.src}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,11,10,0.04),rgba(13,11,10,0.32))]" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="inline-flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(26,24,21,0.88)] px-5 py-3 text-[15px] font-medium text-white shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:scale-105"
                    type="button"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#bf5347,#e8913a)] text-white">
                      <Play className="h-5 w-5 fill-current" />
                    </span>
                    {overlayCta}
                  </button>
                </div>

                {/* Bottom bar */}
                <div className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-8">
                  <div className="h-[3px] w-full rounded-full bg-[rgba(255,255,255,0.08)]">
                    <div
                      className="h-full w-[42%] rounded-full"
                      style={{ background: "linear-gradient(90deg, #bf5347, #e8913a)" }}
                    />
                  </div>
                  <p className="mt-2 text-center text-[12px] tracking-[0.04em] text-[rgba(255,255,255,0.3)]">
                    Produktdemo
                  </p>
                </div>
              </div>
            </MotionReveal>

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
