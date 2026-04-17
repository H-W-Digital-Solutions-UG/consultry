import type { Metadata } from "next";
import DatenschutzPage from "@/app/datenschutz/page";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Datenschutzrichtlinie",
    description:
      "Datenschutzrichtlinie von Consultry mit Informationen zu erhobenen Daten, Rechtsgrundlagen, Betroffenenrechten und Kontaktwegen.",
    path: "/legal/datenschutz",
  });
}

export default function LegalDatenschutzPage() {
  return <DatenschutzPage />;
}
