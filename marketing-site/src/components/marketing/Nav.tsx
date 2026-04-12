"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ctaTargets, navLinks } from "@/lib/content/shared";
import { cn } from "@/lib/cn";

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActiveLink = (href: string) => {
    const [basePath] = href.split("#");

    if (basePath === "/") {
      return pathname === "/";
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

  return (
    <header className="sticky top-0 z-40">
      <div
        className={cn(
          "transition duration-300",
          scrolled &&
            "border-b border-[var(--consultry-border-soft)] bg-[var(--consultry-surface-glass)] shadow-[var(--consultry-shadow-md)] backdrop-blur-xl",
        )}
      >
        <div className="content-shell flex min-h-16 items-center justify-between gap-4 py-3">
          <Link className="inline-flex items-center gap-3" href="/">
            <Image
              alt="Consultry Logo"
              className="object-contain"
              height={50}
              priority
              src="/images/consultry-logo.png"
              style={{ height: "50px", width: "56px" }}
              width={56}
            />
            <span className="text-lg font-semibold tracking-[-0.02em] text-[var(--consultry-text-primary)]">
              Consultry
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                className={cn(
                  "text-[15px] font-normal text-[var(--consultry-text-secondary)] transition hover:text-[var(--consultry-text-primary)]",
                  isActiveLink(link.href) && "text-[var(--consultry-text-primary)]",
                )}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              className="inline-flex items-center gap-1 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-5 py-2.5 text-[14px] font-medium tracking-[0.01em] text-white backdrop-blur-[6px] transition hover:bg-[rgba(255,255,255,0.14)]"
              href={ctaTargets.nav}
            >
              Demo anfragen
              <span aria-hidden="true">→</span>
            </a>
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
