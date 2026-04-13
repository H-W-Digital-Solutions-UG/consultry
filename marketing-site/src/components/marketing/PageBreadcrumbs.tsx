import Link from "next/link";

export type BreadcrumbLink = {
  label: string;
  href?: string;
};

type PageBreadcrumbsProps = {
  items: readonly BreadcrumbLink[];
};

export function PageBreadcrumbs({ items }: PageBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="content-shell pt-10">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--consultry-text-muted)]">
        {items.map((item, index) => (
          <li className="flex items-center gap-2" key={`${item.label}-${index}`}>
            {item.href ? (
              <Link className="transition hover:text-[var(--consultry-text-primary)]" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--consultry-text-primary)]">{item.label}</span>
            )}
            {index < items.length - 1 ? <span aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
