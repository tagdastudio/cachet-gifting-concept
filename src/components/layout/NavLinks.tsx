"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-7">
      {site.nav.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`group relative inline-flex min-h-11 items-center text-[0.63rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                active ? "text-champagne" : "text-fg/70 hover:text-fg"
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-2 h-px origin-left bg-current transition-transform duration-500 ${
                  active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
