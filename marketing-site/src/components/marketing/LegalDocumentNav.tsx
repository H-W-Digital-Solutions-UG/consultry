import Link from "next/link";
import { cn } from "@/lib/cn";
import { legalNavigationItems } from "@/lib/legal-documents";

type LegalDocumentNavProps = {
  currentHref?: string;
};

export function LegalDocumentNav({ currentHref }: LegalDocumentNavProps) {
  return (
    <nav aria-label="Rechtliche Dokumente" className="mt-8">
      <ul className="flex flex-wrap gap-2.5">
        {legalNavigationItems.map((item) => {
          const isActive = item.href === currentHref;

          return (
            <li key={item.href}>
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex rounded-full p-px transition-all duration-300",
                  isActive
                    ? "[background:var(--consultry-brand-gradient)]"
                    : "border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.05)]",
                )}
                href={item.href}
              >
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300",
                    isActive
                      ? "bg-[rgba(44,37,34,0.94)] text-[rgba(246,239,232,0.98)]"
                      : "text-[rgba(237,232,226,0.76)]",
                  )}
                >
                  {item.navLabel}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
