"use client";

import { useId } from "react";
import { site } from "@/content/site";

const TAU = Math.PI * 2;
/** A tiny deterministic generator, so the seal is identical on the server and the client. */
function random(seed: number) {
  let state = seed % 2147483647;
  if (state <= 0) state += 2147483646;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

/** Points around a circle with an uneven radius, the way poured wax never quite makes a circle. */
function wobbly(radius: number, wobble: number, seed: number, count = 13): [number, number][] {
  const next = random(seed);
  return Array.from({ length: count }, (_, index) => {
    const angle = (index / count) * TAU - Math.PI / 2;
    const r = radius * (1 - wobble / 2 + next() * wobble);
    return [100 + Math.cos(angle) * r, 100 + Math.sin(angle) * r];
  });
}

/** A closed Catmull-Rom curve, so the edge is soft rather than faceted. */
function smooth(points: [number, number][]): string {
  const count = points.length;
  const at = (value: number) => {
    const [x, y] = points[(value + count) % count];
    return `${x.toFixed(2)} ${y.toFixed(2)}`;
  };
  let path = `M ${at(0)}`;
  for (let index = 0; index < count; index += 1) {
    const [x1, y1] = points[index];
    const [x2, y2] = points[(index + 1) % count];
    const [x0, y0] = points[(index - 1 + count) % count];
    const [x3, y3] = points[(index + 2) % count];
    const c1 = `${(x1 + (x2 - x0) / 6).toFixed(2)} ${(y1 + (y2 - y0) / 6).toFixed(2)}`;
    const c2 = `${(x2 - (x3 - x1) / 6).toFixed(2)} ${(y2 - (y3 - y1) / 6).toFixed(2)}`;
    path += ` C ${c1}, ${c2}, ${x2.toFixed(2)} ${y2.toFixed(2)}`;
  }
  return `${path} Z`;
}

const OUTER = smooth(wobbly(84, 0.085, 11));
const OUTER_SOFT = smooth(wobbly(79, 0.06, 23));
const RIM = smooth(wobbly(70, 0.035, 31));
const FIELD = smooth(wobbly(61, 0.03, 47));

/** A drip that ran past the edge before it cooled: pointed at the top, pooled at the bottom. */
const DRIP =
  "M 0 -15 C 4.4 -9.2 8.8 -4.2 9.4 2.4 C 10.2 9.8 5.6 14.8 -1.2 14.8 C -8 14.8 -11.6 8.6 -10.4 1.4 C -9.6 -3.6 -5.2 -9.4 0 -15 Z";

const TONES = {
  wax: {
    a: "#9c3549",
    b: "#8e1b2b",
    c: "#6d1322",
    d: "#4a0c18",
    lit: "#cf8d99",
    mono: "#3f070e",
    monoTint: "#b8616f",
  },
  champagne: {
    a: "#e6d2bb",
    b: "#c7a489",
    c: "#a5825f",
    d: "#7b5c3e",
    lit: "#f7ead9",
    mono: "#6b4d30",
    monoTint: "#e2c4a2",
  },
  ink: {
    a: "#4a3c42",
    b: "#2b2126",
    c: "#1d1519",
    d: "#120c0f",
    lit: "#8c737c",
    mono: "#0c0709",
    monoTint: "#6d565f",
  },
} as const;

export type SealTone = keyof typeof TONES;

/**
 * A wax seal, drawn rather than photographed: an uneven poured edge, two drips, a raised rim, a stamped
 * field and a monogram pressed into it. It is the identity of the brand, so it is a component, not an image.
 *
 * `mark` drops the engraved detail for sizes below ~36px, where it would only muddy.
 */
export function WaxSeal({
  size = 96,
  tone = "wax",
  detail = "full",
  monogram = site.monogram,
  className = "",
}: {
  size?: number;
  tone?: SealTone;
  detail?: "full" | "mark";
  monogram?: string;
  className?: string;
}) {
  const c = TONES[tone];
  // Every instance needs its own paint servers: a shared id resolves to the first copy in the document,
  // which can sit inside a closed dialog and render the seal invisible.
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const id = `seal-${tone}-${uid}`;
  const label = `${site.name} wax seal`;
  const single = monogram.length === 1;
  // Below ~110px the star and the year turn to mush; the monogram takes their space instead.
  const compact = size < 110;
  const fontSize = single ? (compact ? 86 : 70) : compact ? 62 : 50;
  const spacing = single ? 0 : -3.6;
  const baseY = single ? (compact ? 125 : 122) : compact ? 118 : 114;

  if (detail === "mark") {
    return (
      <svg viewBox="0 0 200 200" width={size} height={size} role="img" aria-label={label} className={className}>
        <defs>
          <radialGradient id={`${id}-m`} cx="36%" cy="30%" r="72%">
            <stop offset="0%" stopColor={c.a} />
            <stop offset="52%" stopColor={c.b} />
            <stop offset="100%" stopColor={c.d} />
          </radialGradient>
        </defs>
        <path d={OUTER} fill={`url(#${id}-m)`} />
        <path d={RIM} fill="none" stroke={c.lit} strokeOpacity="0.42" strokeWidth="3.5" />
        <path d={FIELD} fill="none" stroke={c.d} strokeOpacity="0.5" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" width={size} height={size} role="img" aria-label={label} className={className}>
      <defs>
        <radialGradient id={`${id}-face`} cx="35%" cy="28%" r="78%">
          <stop offset="0%" stopColor={c.a} />
          <stop offset="34%" stopColor={c.b} />
          <stop offset="72%" stopColor={c.c} />
          <stop offset="100%" stopColor={c.d} />
        </radialGradient>
        <radialGradient id={`${id}-field`} cx="58%" cy="62%" r="66%">
          <stop offset="0%" stopColor={c.d} stopOpacity="0.34" />
          <stop offset="62%" stopColor={c.c} stopOpacity="0.1" />
          <stop offset="100%" stopColor={c.d} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-rim`} x1="12%" y1="4%" x2="82%" y2="96%">
          <stop offset="0%" stopColor={c.lit} stopOpacity="0.55" />
          <stop offset="38%" stopColor={c.lit} stopOpacity="0.16" />
          <stop offset="72%" stopColor={c.d} stopOpacity="0.3" />
          <stop offset="100%" stopColor={c.d} stopOpacity="0.62" />
        </linearGradient>
        <linearGradient id={`${id}-sheen`} x1="18%" y1="0%" x2="70%" y2="80%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="46%" stopColor="#ffffff" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-poolL`}>
          <stop offset="0%" stopColor={c.lit} stopOpacity="0.16" />
          <stop offset="100%" stopColor={c.lit} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-poolD`}>
          <stop offset="0%" stopColor={c.d} stopOpacity="0.34" />
          <stop offset="100%" stopColor={c.d} stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-drop`} x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#2a0712" floodOpacity="0.55" />
        </filter>
        <filter id={`${id}-blur`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.8" />
        </filter>
        <filter id={`${id}-press`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        <clipPath id={`${id}-clip`}>
          <path d={OUTER} />
        </clipPath>
        <filter id={`${id}-grain`} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      {/* the seal, with its shadow and the two places the wax ran */}
      <g filter={`url(#${id}-drop)`}>
        <g transform="translate(47 162) rotate(-14)">
          <path d={DRIP} fill={`url(#${id}-face)`} />
        </g>
        <g transform="translate(151 158) rotate(17) scale(.86)">
          <path d={DRIP} fill={`url(#${id}-face)`} />
        </g>
        <path d={OUTER} fill={`url(#${id}-face)`} />

        {/* poured pigment never sits evenly: two soft pools, one light, one dark */}
        <g clipPath={`url(#${id}-clip)`}>
          <ellipse cx="64" cy="60" rx="52" ry="38" fill={`url(#${id}-poolL)`} />
          <ellipse cx="134" cy="150" rx="62" ry="46" fill={`url(#${id}-poolD)`} />
          <rect
            width="200"
            height="200"
            filter={`url(#${id}-grain)`}
            opacity="0.07"
            style={{ mixBlendMode: "overlay" }}
          />
        </g>

        {/* the raised rim: a soft outer ring and a darker inner shoulder */}
        <path d={OUTER_SOFT} fill="none" stroke={`url(#${id}-rim)`} strokeWidth="8" />
        <path d={RIM} fill="none" stroke={c.d} strokeOpacity="0.24" strokeWidth="3.4" filter={`url(#${id}-blur)`} />

        {/* the pressed field, slightly below the rim */}
        <path d={FIELD} fill={`url(#${id}-field)`} />
        <path d={FIELD} fill="none" stroke={c.d} strokeOpacity="0.3" strokeWidth="2.4" filter={`url(#${id}-blur)`} />

        {/* the beaded ring of a hand-cut die */}
        <circle
          cx="100"
          cy="100"
          r="53.5"
          fill="none"
          stroke={c.lit}
          strokeOpacity="0.34"
          strokeWidth="1.5"
          strokeDasharray="1 4.4"
          strokeLinecap="round"
        />
        <circle cx="100" cy="100" r="48" fill="none" stroke={c.d} strokeOpacity="0.18" strokeWidth="0.8" />

        {/* the monogram, pressed: a dark wall, a lit wall, then the face */}
        <g fontFamily="var(--font-display), Georgia, serif" fontSize={fontSize} letterSpacing={spacing} textAnchor="middle">
          <text x={101.6} y={baseY + 1.6} fill={c.d} fillOpacity="0.72" filter={`url(#${id}-press)`}>
            {monogram}
          </text>
          <text x={100.9} y={baseY + 0.9} fill={c.mono} fillOpacity="0.62">
            {monogram}
          </text>
          {compact ? null : (
            <text x={99} y={baseY - 0.9} fill={c.monoTint} fillOpacity="0.46">
              {monogram}
            </text>
          )}
          <text x={100} y={baseY} fill={c.mono} fillOpacity="0.8">
            {monogram}
          </text>
        </g>

        {compact ? null : (
          <>
            {/* a small four-point star above the monogram, and the year below */}
            <g fill={c.lit} fillOpacity="0.54">
              <path d="M100 62.5 102.2 70.3 110 72.5 102.2 74.7 100 82.5 97.8 74.7 90 72.5 97.8 70.3Z" />
            </g>
            <text
              x="100"
              y="136"
              textAnchor="middle"
              fill={c.lit}
              fillOpacity="0.5"
              fontFamily="var(--ff-body), system-ui, sans-serif"
              fontSize="7.4"
              letterSpacing="3.1"
            >
              EST. 2019
            </text>
          </>
        )}

        {/* the light that lands on poured wax */}
        <path d={OUTER} fill={`url(#${id}-sheen)`} />
      </g>
    </svg>
  );
}


