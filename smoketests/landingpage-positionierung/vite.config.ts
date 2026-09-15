import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

/**
 * Dev-only stand-in for the marketing site's `POST /api/waitlist/signup`.
 * Mirrors the production contract (email + newsletterConsent required) so the
 * smoke pages are fully clickable locally. Never bundled into the build.
 */
function waitlistDevMock(): Plugin {
  const mock = (server: { middlewares: { use: (path: string, fn: (req: any, res: any) => void) => void } }) => {
      server.middlewares.use("/api/waitlist/signup", (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          return res.end();
        }
        let raw = "";
        req.on("data", (chunk: Buffer | string) => (raw += chunk));
        req.on("end", () => {
          res.setHeader("Content-Type", "application/json");
          try {
            const body = JSON.parse(raw) as { email?: string; newsletterConsent?: boolean };
            if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ error: "invalid_email" }));
            }
            if (body.newsletterConsent !== true) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ error: "missing_newsletter_consent" }));
            }
            console.log("[waitlist-mock]", body);
            res.end(JSON.stringify({ success: true }));
          } catch {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "invalid_json" }));
          }
        });
      });
  };
  return {
    name: "consultry-waitlist-dev-mock",
    // dev server and `vite preview` both answer the form, so a phone test on the built pages works end to end
    configureServer: mock,
    configurePreviewServer(server) {
      // `vite preview` only resolves `dist/<route>/index.html` with a trailing slash and would otherwise
      // fall back to the SPA shell. Static hosts resolve the folder index themselves; mirror that here so
      // phone tests and Lighthouse see the prerendered HTML.
      server.middlewares.use((req, _res, next) => {
        if (req.url && /^\/[a-z-]+$/.test(req.url)) req.url = `${req.url}/`;
        next();
      });
      mock(server);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), waitlistDevMock()],
  build: { manifest: true },
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  // Phone tests through a tunnel: allow ngrok hostnames on dev and preview servers.
  server: { allowedHosts: [".ngrok-free.dev", ".ngrok.app", ".ngrok.io", ".ngrok-free.app"] },
  preview: { allowedHosts: [".ngrok-free.dev", ".ngrok.app", ".ngrok.io", ".ngrok-free.app"] },
  test: { environment: "node", include: ["src/**/*.test.ts"] },
});
