import { Button } from "@/components/ui/Button";

type HeroMinimalProps = {
  overline: string;
  title: string;
  body: string;
  align?: "left" | "center";
  primaryCta?: {
    label: string;
    href: string;
  };
};

export function HeroMinimal({
  overline,
  title,
  body,
  align = "center",
  primaryCta,
}: HeroMinimalProps) {
  const centered = align === "center";

  return (
    <section className="section-shell relative overflow-hidden pt-14 sm:pt-18">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,145,58,0.22),transparent_32%),linear-gradient(180deg,rgba(191,83,71,0.12),transparent_55%)]" />
      <div className="content-shell">
        <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
          <p className="eyebrow rise-in">{overline}</p>
          <h1 className="display-section text-balance rise-in rise-in-delay-1 mt-5 text-[var(--consultry-text-primary)] sm:text-[clamp(3.2rem,5vw,4rem)]">
            {title}
          </h1>
          <p
            className={[
              "body-lg rise-in rise-in-delay-2 mt-6 text-balance",
              centered ? "mx-auto max-w-2xl" : "max-w-2xl",
            ].join(" ")}
          >
            {body}
          </p>
          {primaryCta ? (
            <div className={["rise-in rise-in-delay-3 mt-8", centered && "flex justify-center"].join(" ")}>
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
