import type { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { SmokePage } from "@/pages/SmokePage";
import { brain } from "@/content/brain";
import { corpus } from "@/content/corpus";
import { brand } from "@/content/brand";
import { ledger } from "@/content/ledger";
import { access } from "@/content/access";
import { AssertionExplorer } from "@/widgets/AssertionExplorer";
import { CorpusStaircase } from "@/widgets/CorpusStaircase";
import { AlignmentLenses } from "@/widgets/AlignmentLenses";
import { RunLedger } from "@/widgets/RunLedger";
import { AccessSwitch } from "@/widgets/AccessSwitch";
import { VARIANTS, type VariantId } from "@/lib/variants";
import type { PageContent } from "@/content/types";

interface Page {
  content: PageContent;
  widget: ReactNode;
}

/** Per variant: the one-gesture product widget in "So funktioniert es". The hero carries no UI mock. */
export const PAGES: Record<VariantId, Page> = {
  brain: { content: brain, widget: <AssertionExplorer /> },
  corpus: { content: corpus, widget: <CorpusStaircase /> },
  brand: { content: brand, widget: <AlignmentLenses /> },
  ledger: { content: ledger, widget: <RunLedger /> },
  access: { content: access, widget: <AccessSwitch /> },
};

/** Route table without a router, so the same tree renders in the browser and at prerender time. */
export function AppRoutes() {
  return (
    <Routes>
      {VARIANTS.map((v) => (
        <Route
          key={v.id}
          path={v.path}
          element={<SmokePage content={PAGES[v.id].content} widget={PAGES[v.id].widget} />}
        />
      ))}
      <Route path="*" element={<Navigate to={VARIANTS[0].path} replace />} />
    </Routes>
  );
}

/** One route per smoke variant; the root redirects to the first variant. */
export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
