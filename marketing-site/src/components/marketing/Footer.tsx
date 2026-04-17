import Image from "next/image";
import Link from "next/link";
import { companyProfile } from "@/lib/company";
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
          <div className="grid gap-14 xl:grid-cols-[minmax(19rem,24rem)_minmax(0,1fr)] xl:items-start xl:gap-20">
            <div className="flex min-w-0 max-w-[24rem] items-start gap-6">
              <div className="h-[68px] w-[76px] shrink-0 overflow-hidden rounded-2xl">
                <div className="relative h-full w-full py-[5px] pr-[4px]">
                  <Image
                    alt="Consultry Logo"
                    className="object-contain object-left"
                    fill
                    loading="eager"
                    sizes="76px"
                    src="/images/consultry-logo.png"
                  />
                </div>
              </div>
              <div className="min-w-0">
                <p className="gradient-text text-[1.05rem] font-medium tracking-[-0.025em] sm:text-[1.12rem]">
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

            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14 xl:gap-x-20 xl:pl-8">
              {footerColumns.map((column) => (
                <div className="min-w-0 max-w-[13.5rem]" key={column.title}>
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[rgba(250,250,249,0.4)]">
                    {column.title}
                  </p>
                  {column.links.length > 0 ? (
                    <ul className="mt-6 space-y-3.5">
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
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="text-[13px] text-[rgba(250,250,249,0.35)]">
                © 2026 {companyProfile.legalName}
              </p>

              <div className="flex items-center gap-2.5 md:justify-end">
                {socialLinks.map((link) => {
                  const baseClass =
                    "inline-flex h-[34px] items-center justify-center rounded-[9px] font-bold text-white shadow-[0_1px_3px_rgba(0,0,0,0.2)]";
                  const content = link.kind === "linkedin" ? "in" : "XING";
                  const className =
                    link.kind === "linkedin"
                      ? `${baseClass} w-[34px] text-xs bg-[#0a66c2]`
                      : `${baseClass} min-w-[52px] px-2 text-[10px] tracking-[0.08em] bg-[#126567]`;

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
