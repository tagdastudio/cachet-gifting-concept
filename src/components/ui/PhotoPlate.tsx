import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  quote?: string;
  caption?: string;
  /** A note set in the margin, in the manner of a catalogue plate. */
  margin?: string;
  tone?: "light" | "dark";
  height?: string;
  position?: string;
  priority?: boolean;
  /** Photographs are placeholders and graded toward the room; a client's own photography gets a lighter grade. */
  filter?: string;
  className?: string;
};

/** A full-bleed photographic plate. The photograph is the argument; the type only annotates it. */
export function PhotoPlate({
  src,
  alt,
  quote,
  caption,
  margin,
  tone = "dark",
  height = "h-[clamp(18rem,52vw,40rem)]",
  position = "center",
  priority = false,
  filter = "brightness(1.12) contrast(1.02)",
  className = "",
}: Props) {
  return (
    <figure className={`overflow-hidden ${tone === "dark" ? "bg-bg" : "bg-paper"} ${className}`}>
      <div className={`relative w-full ${height}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: position, filter }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a0d]/85 via-[#0e0a0d]/5 to-[#0e0a0d]/20" />
        {quote || margin ? (
          <div className="absolute inset-x-0 bottom-0">
            <div className="gutter page pb-8 pt-16 lg:pb-12">
              <div className="flex items-end justify-between gap-8">
                {quote ? (
                  <p className="max-w-[16ch] font-display text-[clamp(1.9rem,4.4vw,4rem)] leading-[0.98] tracking-[-0.024em] text-fg">
                    {quote}
                  </p>
                ) : (
                  <span />
                )}
                {margin ? (
                  <p className="hidden max-w-[12rem] text-right text-[0.6rem] uppercase leading-relaxed tracking-[0.18em] text-fg/55 sm:block">
                    {margin}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {caption ? (
        <figcaption
          className={`gutter page py-3 text-[0.76rem] leading-relaxed ${
            tone === "dark" ? "text-fg/40" : "text-ink-soft"
          }`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
