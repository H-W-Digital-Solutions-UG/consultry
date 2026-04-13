import Image from "next/image";
import Link from "next/link";
import {
  footerBrand,
  footerColumns,
  socialLinks,
} from "@/lib/content/shared";

function FooterLink({ href, label }: { href?: string; label: string }) {
  const className =
    "text-sm font-medium text-[rgba(250,250,249,0.72)] transition hover:text-[var(--consultry-text-primary)]";

  if (!href) {
    return <span className={className}>{label}</span>;
  }

  return (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--consultry-surface-hero)] px-0 pb-8 pt-0">
      <div className="mx-auto w-[min(100%-2rem,110rem)]">
        <div className="relative h-7 w-full overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-[rgba(255,255,255,0.08)]" />
          <div className="absolute inset-x-[2%] top-[1px] h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(232,145,58,0)_0%,rgba(232,145,58,0.92)_16%,rgba(232,101,90,0.92)_48%,rgba(155,89,182,0.88)_82%,rgba(155,89,182,0)_100%)]" />
          <div className="absolute inset-x-[6%] top-[4px] h-4 rounded-full bg-[linear-gradient(90deg,rgba(232,145,58,0)_0%,rgba(232,145,58,0.16)_18%,rgba(232,101,90,0.14)_48%,rgba(155,89,182,0.12)_82%,rgba(155,89,182,0)_100%)] blur-md" />
        </div>
        <div className="flex flex-col gap-14 py-12 sm:gap-16 sm:py-14">
          <div className="grid gap-12 xl:grid-cols-[minmax(340px,1fr)_minmax(620px,860px)] xl:items-start">
            <div className="flex min-w-0 items-start gap-6">
              <div className="relative h-[66px] w-[100px] shrink-0 overflow-hidden rounded-2xl">
                <Image
                  alt="Consultry Logo"
                  className="object-contain object-left"
                  fill
                  loading="eager"
                  sizes="100px"
                  src="/images/consultry-logo.png"
                />
              </div>
              <div className="min-w-0">
                <p className="bg-[var(--consultry-brand-gradient)] bg-clip-text text-xl font-bold tracking-[-0.02em] text-transparent">
                  {footerBrand.title}
                </p>
                <p className="mt-3 text-sm text-[rgba(250,250,249,0.5)]">{footerBrand.tagline}</p>
                <div className="mt-3 inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--consultry-success)]" />
                  <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[rgba(250,250,249,0.45)]">
                    {footerBrand.complianceLabel}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-[148px_132px_160px] sm:justify-end">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <p className="font-[var(--font-mono)] text-[11px] tracking-[0.14em] text-[rgba(250,250,249,0.4)]">
                    {column.title}
                  </p>
                  {column.links.length > 0 ? (
                    <ul className="mt-8 space-y-3">
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <FooterLink href={link.href} label={link.label} />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[rgba(255,255,255,0.06)] pt-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] text-[rgba(250,250,249,0.35)]">© 2026 Consultry GmbH</p>

              <div className="flex items-center gap-2.5 sm:justify-end">
                {socialLinks.map((link) => {
                  const baseClass =
                    "inline-flex h-[34px] w-[34px] items-center justify-center rounded-[9px] text-xs font-bold text-white shadow-[0_1px_3px_rgba(0,0,0,0.2)]";
                  const content =
                    link.kind === "linkedin" ? "in" : link.kind === "x" ? "X" : "@";
                  const className =
                    link.kind === "linkedin"
                      ? `${baseClass} bg-[#0a66c2]`
                      : link.kind === "x"
                        ? `${baseClass} bg-[#186b6f]`
                        : `${baseClass} bg-[linear-gradient(135deg,#e8913a,#e8655a)]`;

                  if (!link.href) {
                    return (
                      <span aria-label={link.label} className={className} key={link.label}>
                        {content}
                      </span>
                    );
                  }

                  return (
                    <a
                      aria-label={link.label}
                      className={className}
                      href={link.href}
                      key={link.label}
                      rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
