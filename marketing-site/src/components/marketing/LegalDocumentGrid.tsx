import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { legalDocuments } from "@/lib/legal-documents";

export function LegalDocumentGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {legalDocuments.map((document) => (
        <Link
          className="group rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] px-5 py-5 transition duration-300 hover:border-[rgba(255,255,255,0.14)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] sm:px-6 sm:py-6"
          href={document.href}
          key={document.href}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[rgba(255,162,117,0.9)]">
                Dokument
              </p>
              <h2 className="mt-3 text-[1.22rem] font-semibold leading-[1.12] tracking-[-0.025em] text-[var(--consultry-text-primary)]">
                {document.title}
              </h2>
            </div>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-[var(--consultry-text-primary)] transition duration-300 group-hover:translate-x-0.5 group-hover:border-[rgba(255,162,117,0.24)] group-hover:bg-[rgba(255,255,255,0.08)]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-4 max-w-[34rem] text-[14px] leading-[1.72] text-[var(--consultry-text-secondary)]">
            {document.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
