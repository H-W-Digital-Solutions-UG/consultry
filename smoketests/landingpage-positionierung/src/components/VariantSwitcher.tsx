import { Link, useLocation } from "react-router";
import { VARIANTS } from "@/lib/variants";

/** Review-only cross-links between the smoke variants. Hidden in production unless `?review=1`. */
export function VariantSwitcher() {
  const { pathname, search } = useLocation();
  const review = import.meta.env.DEV || new URLSearchParams(search).has("review");
  if (!review) return null;
  return (
    <nav aria-label="Varianten" className="fixed bottom-3 left-3 z-50 flex flex-wrap gap-1 rounded-md bg-surface-hero/90 p-1.5 shadow-lg backdrop-blur">
      {VARIANTS.map((v) => (
        <Link
          key={v.id}
          to={{ pathname: v.path, search }}
          className={`rounded-sm px-2 py-1 font-mono text-xs ${pathname === v.path ? "bg-brand text-white" : "text-on-dark-soft hover:text-on-dark"}`}
        >
          {v.id}
        </Link>
      ))}
    </nav>
  );
}
