export function Arrow({ className = "size-3", dir = "up-right" }: { className?: string; dir?: "up-right" | "right" }) {
  if (dir === "right") {
    return (
      <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className={`shrink-0 ${className}`}>
        <path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className={`shrink-0 ${className}`}>
      <path d="M3.5 12.5 12.5 3.5M5.5 3.5h7v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
