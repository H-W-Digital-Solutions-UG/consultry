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
  const [currentHash, setCurrentHash] = useState("");

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
            <span className="bg-[linear-gradient(90deg,#e8913a_10%,#e8655a_25%,#9b59b6_60%)] bg-clip-text text-[18px] font-semibold leading-6 tracking-[-0.017em] text-transparent">
              Consultry
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                className={cn(
                  "relative text-[15px] font-normal text-[var(--consultry-text-secondary)] transition hover:text-[var(--consultry-text-primary)] after:absolute after:-bottom-2.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-[linear-gradient(90deg,#e8913b_0%,rgba(232,102,89,0.78)_46%,#9c59b5_100%)] after:opacity-0 after:scale-x-0 after:transition after:duration-500 after:ease-out",
                  isActiveLink(link.href) &&
                    "text-[var(--consultry-text-primary)] after:opacity-100 after:scale-x-100",
                )}
                aria-current={isActiveLink(link.href) ? "page" : undefined}
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
              Deep Dive anfragen
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
              Deep Dive anfragen
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
