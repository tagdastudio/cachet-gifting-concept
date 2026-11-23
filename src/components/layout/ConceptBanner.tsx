import { Arrow } from "@/components/ui/Arrow";

/** The concept notice: a thin rose band above the header. It comes off for a real launch. */
export function ConceptBanner() {
  return (
    <div className="relative z-50 h-[var(--concept-h)] overflow-hidden bg-rose text-paper">
      <div className="gutter page flex h-full items-center justify-between gap-4 text-[0.56rem] font-semibold uppercase tracking-[0.18em]">
        <span className="flex min-w-0 items-center gap-2">
          <span className="hidden rounded-full border border-paper/40 px-1.5 py-px text-[0.48rem] tracking-[0.16em] sm:inline">
            Concept
          </span>
          <span className="truncate sm:hidden">A concept, not a live shop</span>
          <span className="hidden sm:inline">A concept gifting house — not a live shop.</span>
        </span>
        <a
          href="https://tagda.studio"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap"
        >
          <span className="hidden sm:inline">A concept by Tagda Studio</span>
          <span className="sm:hidden">Tagda Studio</span>
          <Arrow className="size-2.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
