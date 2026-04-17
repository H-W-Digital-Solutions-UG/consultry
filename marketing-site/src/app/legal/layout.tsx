import type { ReactNode } from "react";
import { LegalDocumentNav } from "@/components/marketing/LegalDocumentNav";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <section
        className="relative -mt-[4.45rem] overflow-hidden pb-20 pt-[calc(4.45rem+4rem)] sm:pb-24 sm:pt-[calc(4.45rem+5rem)]"
        style={{
          background: "var(--consultry-hero-background)",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(232,145,58,0.16),rgba(191,83,71,0.08),transparent)]" />
        <div className="mx-auto w-[min(100%-2rem,90rem)]">
          <div className="max-w-[62rem]">
            <p className="eyebrow">RECHTLICHES</p>
            <h1 className="mt-6 text-[clamp(2.6rem,6vw,4.25rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-[var(--consultry-text-primary)]">
              Rechtliches
            </h1>
            <p className="mt-6 max-w-[48rem] text-[15px] leading-7 text-[var(--consultry-text-muted)]">
              Datenschutz, Impressum, Cookies und weitere Rechtstexte sind hier in einer
              gemeinsamen Übersicht gebündelt. Die Dokumentnavigation bleibt zwischen den
              Unterseiten konsistent, während sich darunter nur das jeweilige Dokument ändert.
            </p>
            <LegalDocumentNav />
          </div>

          <div className="mt-8 h-px w-full bg-[rgba(255,255,255,0.1)]" />

          <div className="mt-10">{children}</div>
        </div>
      </section>
    </main>
  );
}
