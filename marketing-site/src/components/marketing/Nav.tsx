"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { MarketingCtaButton } from "@/components/marketing/MarketingCtaButton";
import { ctaTargets, navLinks } from "@/lib/content/shared";
import { cn } from "@/lib/cn";

function NavCtaContent() {
  return (
    <span className="flex w-full items-center justify-between gap-3">
      <span className="min-w-0 whitespace-nowrap pr-1">Auf die Warteliste</span>
      <span
        aria-hidden="true"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(240,168,94,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05)),linear-gradient(180deg,rgba(240,168,94,0.08),rgba(232,101,90,0.08))] text-[var(--consultry-text-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition duration-200 group-hover:translate-x-0.5 group-hover:border-[rgba(240,168,94,0.34)] group-hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.08)),linear-gradient(180deg,rgba(240,168,94,0.14),rgba(232,101,90,0.12))]"
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={2.1} />
      </span>
    </span>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  const isActiveLink = (href: string) => {
    const [basePath, hash] = href.split("#");

    if (basePath === "/") {
      return hash ? pathname === "/" && currentHash === `#${hash}` : pathname === "/";
    }

    if (hash) {
      return pathname === basePath && currentHash === `#${hash}`;
    }

    return pathname === basePath;
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => {
      setCurrentHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-2 pt-0 sm:px-3 sm:pt-0 lg:px-4">
      <div
        className={cn(
          "translate-y-2 overflow-hidden rounded-[var(--consultry-radius-xl)] border border-[rgba(255,255,255,0.07)] bg-[rgba(36,30,29,0.18)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-[14px] transition duration-300 sm:translate-y-3",
          scrolled &&
            "border-[rgba(255,255,255,0.1)] bg-[rgba(30,27,24,0.72)] shadow-[var(--consultry-shadow-md)] backdrop-blur-xl",
        )}
      >
        <div className="flex h-16 w-full items-center justify-between gap-4 pl-4 pr-3 sm:h-[4.45rem] sm:pl-5 sm:pr-4 lg:pl-7 lg:pr-6 xl:pl-8 xl:pr-7">
          <Link className="inline-flex items-center gap-1.5 overflow-visible sm:gap-2" href="/">
            <span className="inline-flex shrink-0">
              <Image
                alt="Consultry Logo"
                className="block h-auto max-h-[24px] w-auto max-w-full object-contain sm:max-h-[28px]"
                height={379}
                priority
                sizes="(min-width: 640px) 76px, (min-width: 420px) 68px, (min-width: 375px) 64px, 60px"
                src="/images/consultry-logo.png"
                width={385}
              />
            </span>
            <span className="flex items-center text-[1rem] font-bold leading-none tracking-[-0.045em] text-[rgba(246,239,232,0.99)] sm:text-[clamp(1.04rem,1.16vw,1.24rem)]">
              Consultry
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden flex-1 items-center justify-center gap-6 md:flex lg:gap-7">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              const isHovered = hoveredHref === link.href;

              return (
                <Link
                  className="relative inline-flex items-center"
                  aria-current={isActive ? "page" : undefined}
                  href={link.href}
                  key={link.href}
                  onBlur={() => setHoveredHref((current) => (current === link.href ? null : current))}
                  onFocus={() => setHoveredHref(link.href)}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  onMouseLeave={() => setHoveredHref(null)}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-0 rounded-full transition-[opacity,transform] duration-300 ease-out",
                      isHovered && !isActive
                        ? "[background:var(--consultry-brand-gradient)] opacity-100 scale-[1.075]"
                        : "opacity-0 scale-[0.96]",
                    )}
                  />
                  <span
                    className={cn(
                      "relative inline-flex rounded-full p-px transition-all duration-300",
                      isActive ? "[background:var(--consultry-brand-gradient)]" : "bg-transparent",
                    )}
                  >
                    <span
                      className={cn(
                        "relative inline-flex items-center rounded-full px-3.5 py-1.5 text-[15px] font-semibold transition-all duration-300",
                        isActive
                          ? "bg-[rgba(44,37,34,0.92)] text-[#EBE9E8]"
                          : isHovered
                            ? "bg-[rgba(44,37,34,0.84)] text-[var(--consultry-text-primary)]"
                            : "bg-transparent text-[rgba(237,232,226,0.76)] hover:text-[var(--consultry-text-primary)]",
                      )}
                    >
                      {link.label}
                    </span>
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <MarketingCtaButton
              className="group h-[3.2rem] min-w-[15rem] border-[rgba(240,168,94,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)),linear-gradient(180deg,rgba(240,168,94,0.14),rgba(232,101,90,0.08))] px-2 pl-5 pr-2 text-[14px] font-semibold tracking-[-0.01em] text-[rgba(255,248,241,0.98)] shadow-[0_16px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[rgba(240,168,94,0.34)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04)),linear-gradient(180deg,rgba(240,168,94,0.2),rgba(232,101,90,0.12))] hover:shadow-[0_18px_36px_rgba(0,0,0,0.22),0_0_0_1px_rgba(240,168,94,0.08)]"
              href={ctaTargets.nav}
              tracking={{
                ctaId: "nav_desktop_waitlist",
                label: "Auf die Warteliste",
                location: "nav_desktop",
              }}
              variant="secondary"
            >
              <NavCtaContent />
            </MarketingCtaButton>
          </div>

          <button
            aria-expanded={menuOpen}
            aria-label="Navigation öffnen"
            className={cn(
              "inline-flex rounded-full border p-2 text-[var(--consultry-text-primary)] transition duration-300 md:hidden",
              menuOpen
                ? "border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "border-[var(--consultry-border-soft)] bg-white/5",
            )}
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen ? (
          <div className="border-t border-[rgba(255,255,255,0.07)] px-3 pb-3 pt-2 md:hidden sm:px-4">
            <div className="rounded-[calc(var(--consultry-radius-xl)-0.3rem)] border border-[rgba(255,255,255,0.05)] bg-[rgba(24,20,19,0.18)] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_14px_36px_rgba(0,0,0,0.12)] backdrop-blur-[18px]">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = isActiveLink(link.href);

                  return (
                    <Link
                      className="block"
                      href={link.href}
                      key={link.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span
                        className={cn(
                          "flex rounded-full p-px transition-all duration-300",
                          isActive ? "[background:var(--consultry-brand-gradient)]" : "bg-transparent",
                        )}
                      >
                        <span
                          className={cn(
                            "flex w-full items-center rounded-full px-4 py-3 text-[15px] font-semibold transition-all duration-300",
                            isActive
                              ? "bg-[rgba(44,37,34,0.92)] text-[#EBE9E8]"
                              : "bg-[rgba(255,255,255,0.02)] text-[rgba(237,232,226,0.78)] hover:bg-[rgba(44,37,34,0.72)] hover:text-[var(--consultry-text-primary)]",
                          )}
                        >
                          {link.label}
                        </span>
                      </span>
                    </Link>
                  );
                })}
                <MarketingCtaButton
                  className="group mt-1 w-full border-[rgba(240,168,94,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)),linear-gradient(180deg,rgba(240,168,94,0.14),rgba(232,101,90,0.08))] px-2 pl-4 pr-2 text-[15px] font-semibold tracking-[-0.01em] text-[rgba(255,248,241,0.98)] shadow-[0_16px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)]"
                  href={ctaTargets.nav}
                  onClick={() => setMenuOpen(false)}
                  tracking={{
                    ctaId: "nav_mobile_waitlist",
                    label: "Auf die Warteliste",
                    location: "nav_mobile",
                  }}
                  variant="secondary"
                >
                  <NavCtaContent />
                </MarketingCtaButton>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
