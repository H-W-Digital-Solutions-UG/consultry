import type { Metadata } from "next";
import { LegalDocumentGrid } from "@/components/marketing/LegalDocumentGrid";
import { LegalDocumentNav } from "@/components/marketing/LegalDocumentNav";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Rechtliches",
    description:
      "Zentrale Uebersicht aller rechtlichen Dokumente von Consultry mit schnellen Einstiegen in Datenschutz, Impressum, Cookies und AGB.",
    path: "/rechtliches",
  });
}

export default function RechtlichesPage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(232,145,58,0.16),rgba(191,83,71,0.08),transparent)]" />
        <div className="mx-auto w-[min(100%-2rem,90rem)]">
          <div className="max-w-[62rem]">
            <p className="eyebrow">RECHTLICHES</p>
            <h1 className="mt-6 text-[clamp(2.6rem,6vw,4.25rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-[var(--consultry-text-primary)]">
              Alle rechtlichen Dokumente an einem Ort.
            </h1>
            <p className="mt-6 max-w-[46rem] text-[15px] leading-7 text-[var(--consultry-text-muted)]">
              Diese Seite sammelt die aktuell veroeffentlichten Rechtstexte von Consultry. Von
              hier aus gelangen Sie direkt zu Datenschutz, Impressum, Cookies und den derzeitigen
              AGB-Hinweisen.
            </p>
            <LegalDocumentNav currentHref="/rechtliches" />
          </div>

          <div className="mt-8 h-px w-full bg-[rgba(255,255,255,0.1)]" />

          <div className="mt-10">
            <LegalDocumentGrid />
          </div>
        </div>
      </section>
    </main>
  );
}
