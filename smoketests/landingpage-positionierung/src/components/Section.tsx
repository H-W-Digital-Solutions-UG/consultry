import type { ReactNode } from "react";

export type Surface = "light" | "warm" | "dark";

/* Light/warm sections carry a 1px hairline on top so the subtle #FFFBF9 / #FFF5F0
   alternation reads as deliberate; dark sections switch tone instead. */
const surfaces: Record<Surface, string> = {
  light: "bg-surface-light text-ink border-t border-hair",
  warm: "bg-surface-warm text-ink border-t border-hair",
  dark: "bg-surface-dark text-on-dark",
};

export interface SectionProps {
  surface: Surface;
  id?: string;
  title?: string;
  lede?: string;
  titleClass?: string;
  children?: ReactNode;
  className?: string;
}

/** Full-bleed section with the 1200px marketing grid inside. */
export function Section({ surface, id, title, lede, titleClass = "t-display-lg", children, className = "" }: SectionProps) {
  const muted = surface === "dark" ? "text-on-dark-soft" : "text-ink-soft";
  return (
    <section id={id} className={`${surfaces[surface]} py-[clamp(4rem,8vw,6.5rem)] ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        {title && (
          <header className="mb-10">
            <h2 className={`${titleClass} max-w-[24ch]`}>{title}</h2>
            {lede && <p className={`t-lede mt-4 max-w-[60ch] ${muted}`}>{lede}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
