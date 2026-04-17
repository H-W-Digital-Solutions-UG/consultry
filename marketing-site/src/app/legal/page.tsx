import type { Metadata } from "next";
import { LegalDocumentGrid } from "@/components/marketing/LegalDocumentGrid";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Rechtliches",
    description:
      "Zentrale Uebersicht aller rechtlichen Dokumente von Consultry mit schnellen Einstiegen in Datenschutz, Impressum, Cookies und AGB.",
    path: "/legal",
  });
}

export default function LegalPage() {
  return <LegalDocumentGrid />;
}
