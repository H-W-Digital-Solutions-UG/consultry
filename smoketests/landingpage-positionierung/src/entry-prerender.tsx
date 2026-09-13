import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes, PAGES } from "@/app";
import { VARIANTS } from "@/lib/variants";

/** Renders one smoke route to HTML at build time (see scripts/prerender.mjs). */
export function render(path: string): { html: string; title: string; description: string } {
  const variant = VARIANTS.find((v) => v.path === path) ?? VARIANTS[0];
  const { meta } = PAGES[variant.id].content;
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, title: meta.title, description: meta.description };
}

export const ROUTES = VARIANTS.map((v) => ({ id: v.id, path: v.path }));
