import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@/styles/tokens.css";
import { App } from "@/app";

const root = document.getElementById("root")!;
const tree = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Prerendered routes (dist/<route>/index.html) hydrate; the bare shell renders from scratch.
if (root.hasChildNodes()) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
