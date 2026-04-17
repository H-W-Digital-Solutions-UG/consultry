import type { Metadata } from "next";
import CookiesPage from "@/app/cookies/page";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Cookies",
    description:
      "Cookie-Hinweise, Consent-Steuerung und Informationen zu technisch notwendigen sowie optionalen Statistik-Diensten auf consultry.de.",
    path: "/legal/cookies",
  });
}

export default function LegalCookiesPage() {
  return <CookiesPage />;
}
