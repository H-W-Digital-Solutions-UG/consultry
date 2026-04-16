"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ctaTargets, navLinks } from "@/lib/content/shared";
import { cn } from "@/lib/cn";

function NavCtaContent() {
  return (
    <span className="flex w-full items-center justify-between gap-3">
      <span className="min-w-0 whitespace-nowrap pr-1">Auf die Warteliste</span>
      <span
        aria-hidden="true"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] text-[var(--consultry-text-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-200 group-hover:translate-x-0.5 group-hover:border-[rgba(244,183,109,0.24)] group-hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))]"
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
    <header className="sticky top-0 z-40">
      <div
        className={cn(
          "transition duration-300",
          scrolled &&
            "border-b border-[var(--consultry-border-soft)] bg-[var(--consultry-surface-glass)] shadow-[var(--consultry-shadow-md)] backdrop-blur-xl",
        )}
      >
        <div className="flex h-16 w-full items-center justify-between gap-4 px-3 sm:h-[4.45rem] sm:px-4 lg:px-6 xl:px-7">
          <Link className="inline-flex items-center gap-1.5 overflow-visible sm:gap-2" href="/">
            <span className="block w-[60px] shrink-0 min-[375px]:w-[64px] min-[420px]:w-[68px] sm:w-[76px]">
              <Image
                alt="Consultry Logo"
                className="block h-auto w-full object-contain"
                height={379}
                priority
                sizes="(min-width: 640px) 76px, (min-width: 420px) 68px, (min-width: 375px) 64px, 60px"
                src="/images/consultry-logo.png"
                width={385}
              />
            </span>
            <span className="translate-y-[1px] text-[1rem] font-bold leading-[0.94] tracking-[-0.045em] text-[rgba(246,239,232,0.99)] sm:text-[clamp(1.04rem,1.16vw,1.24rem)]">
              Consultry
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              const isHovered = hoveredHref === link.href;

              return (
                <Link
                  className={cn(
                    "relative inline-flex items-center py-1 text-[15px] font-normal transition-colors duration-300",
                    isActive || isHovered
                      ? "text-[var(--consultry-text-primary)]"
                      : "text-[var(--consultry-text-secondary)] hover:text-[var(--consultry-text-primary)]",
                  )}
                  aria-current={isActive ? "page" : undefined}
                  href={link.href}
                  key={link.href}
                  onBlur={() => setHoveredHref((current) => (current === link.href ? null : current))}
                  onFocus={() => setHoveredHref(link.href)}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  onMouseLeave={() => setHoveredHref(null)}
                >
                  <span className="relative inline-flex items-center">
                    {link.label}
                    {isActive ? (
                      <span className="pointer-events-none absolute -bottom-2.5 left-0 h-[2px] w-full rounded-full bg-[linear-gradient(90deg,rgba(232,145,59,0.92)_0%,rgba(232,102,89,0.7)_46%,rgba(156,89,181,0.88)_100%)] opacity-90" />
                    ) : null}
                    {isHovered ? (
                      <motion.span
                        animate={{ opacity: 1, scaleX: 1 }}
                        className="pointer-events-none absolute -bottom-2.5 left-0 h-[2px] w-full origin-left rounded-full bg-[linear-gradient(90deg,rgba(237,232,226,0.34)_0%,rgba(205,189,219,0.56)_52%,rgba(156,89,181,0.76)_100%)] shadow-[0_0_8px_rgba(156,89,181,0.12)]"
                        initial={{ opacity: 0, scaleX: 0.72 }}
                        layoutId="nav-link-hover-indicator"
                        transition={{
                          layout: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.18, ease: "easeOut" },
                          scaleX: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
                        }}
                      />
                    ) : null}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              data-analytics-destination-path={ctaTargets.nav}
              data-analytics-destination-type="internal_waitlist"
              data-analytics-event="cta_click"
              data-analytics-label="Auf die Warteliste"
              data-analytics-location="nav_desktop"
              className="group h-[3.2rem] min-w-[15rem] px-2 pl-5 pr-2 text-[14px] font-semibold tracking-[-0.01em] shadow-[0_14px_30px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.05)]"
              href={ctaTargets.nav}
              variant="secondary"
            >
              <NavCtaContent />
            </Button>
          </div>

          <button
            aria-expanded={menuOpen}
            aria-label="Navigation öffnen"
            className="inline-flex rounded-full border border-[var(--consultry-border-soft)] bg-white/5 p-2 text-[var(--consultry-text-primary)] md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-b border-[var(--consultry-border-soft)] bg-[rgba(26,24,21,0.98)] px-4 py-5 backdrop-blur-xl md:hidden">
          <div className="content-shell flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                className="text-base font-medium text-[var(--consultry-text-secondary)]"
                href={link.href}
                key={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              data-analytics-destination-path={ctaTargets.nav}
              data-analytics-destination-type="internal_waitlist"
              data-analytics-event="cta_click"
              data-analytics-label="Auf die Warteliste"
              data-analytics-location="nav_mobile"
              className="group mt-2 w-full px-2 pl-4 pr-2 text-[15px] font-semibold tracking-[-0.01em]"
              href={ctaTargets.nav}
              onClick={() => setMenuOpen(false)}
              variant="secondary"
            >
              <NavCtaContent />
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
