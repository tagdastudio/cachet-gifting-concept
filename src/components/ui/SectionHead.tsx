import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./Arrow";

/** A section opening: a small eyebrow, a line of display type, and one link in the margin. */
export function SectionHead({
  eyebrow,
  title,
  intro,
  link,
  tone = "ink",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  link?: { label: string; href: string };
  tone?: "ink" | "light";
  className?: string;
}) {
  const muted = tone === "ink" ? "text-ink-soft" : "text-fg/55";
  return (
    <div className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}>
      <div className="lg:col-span-8">
        <p className={`eye ${tone === "ink" ? "eye-ink" : ""}`}>{eyebrow}</p>
        <h2 className={`h2 mt-4 max-w-[20ch] ${tone === "light" ? "text-fg" : "text-ink"}`}>{title}</h2>
      </div>
      <div className="lg:col-span-4">
        {intro ? <p className={`max-w-[30rem] text-[0.95rem] leading-relaxed ${muted}`}>{intro}</p> : null}
        {link ? (
          <Link
            href={link.href}
            className={`group mt-4 inline-flex items-center gap-2 border-b pb-1 text-[0.64rem] font-semibold uppercase tracking-[0.18em] ${
              tone === "ink" ? "border-ink/30 text-ink" : "border-fg/30 text-fg"
            }`}
          >
            {link.label}
            <Arrow className="size-2.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
