"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { waLink } from "@/lib/links";
import { Wordmark } from "@/components/ui/Wordmark";
import { Arrow } from "@/components/ui/Arrow";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-over-hero={overHero ? "true" : "false"}
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color] duration-500 ${
        overHero ? "border-transparent bg-transparent" : "border-line/70 bg-bg/90 backdrop-blur-md"
      }`}
    >
      <div className="gutter page flex h-[4.5rem] items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label="Primary" className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink("Hi Velvet Parcel, I'd like help with a gift.")}
            target="_blank"
            rel="noreferrer"
            className={`hidden min-h-11 items-center gap-2 border px-4 text-[0.63rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 sm:inline-flex ${
              overHero ? "border-fg/30 hover:border-fg" : "border-line hover:border-fg/60"
            }`}
          >
            Enquire
            <Arrow className="size-2.5" />
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

