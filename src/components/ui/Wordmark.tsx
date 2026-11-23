import Link from "next/link";
import { site } from "@/content/site";
import { WaxSeal } from "./WaxSeal";

/** The lockup: a small pressed seal and the name, set wide. The seal alone is enough at small sizes. */
export function Wordmark({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <WaxSeal size={compact ? 20 : 26} detail="mark" className="transition-transform duration-500 group-hover:rotate-[-8deg]" />
      <span className="font-display text-[0.98rem] uppercase leading-none tracking-[0.16em] sm:text-[1.06rem]">
        {site.wordmark}
      </span>
    </Link>
  );
}
