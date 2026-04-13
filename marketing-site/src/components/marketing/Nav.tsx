"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ctaTargets, navLinks } from "@/lib/content/shared";
import { cn } from "@/lib/cn";

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
        <div className="flex h-[4.45rem] w-full items-center justify-between gap-4 px-3 sm:px-4 lg:px-6 xl:px-7">
          <Link className="inline-flex items-center gap-0 overflow-visible" href="/">
            <span className="relative block h-[4.45rem] w-[clamp(8.75rem,11vw,10rem)] shrink-0 overflow-visible">
              <Image
                alt="Consultry Logo"
                className="absolute left-0 top-1/2 h-[clamp(5.5rem,7vw,6.75rem)] w-auto -translate-y-1/2 object-contain"
                height={100}
                priority
                src="/images/consultry-logo.png"
                width={150}
              />
            </span>
            <span className="-ml-2 text-[clamp(0.98rem,1.08vw,1.14rem)] font-medium leading-[0.96] tracking-[-0.024em] text-[rgba(237,232,226,0.9)] sm:-ml-2.5">
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
              className="px-5 py-2 text-[14px] font-medium tracking-[0.01em]"
              href={ctaTargets.nav}
              variant="secondary"
            >
              Demo anfragen
              <span aria-hidden="true">→</span>
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
            <Button className="mt-2 w-full" href={ctaTargets.nav}>
              Demo anfragen
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
