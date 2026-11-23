import { WaxSeal } from "@/components/ui/WaxSeal";
import type { Parcel } from "@/content/parcels";

/**
 * A parcel seen from above: closed, ribboned and sealed. Drawn rather than photographed, so the six
 * colourways stay in the same four-colour world as the rest of the site.
 */
export function ParcelPlate({
  parcel,
  sealSize = 92,
  className = "",
}: {
  parcel: Parcel;
  sealSize?: number;
  className?: string;
}) {
  const { plate } = parcel;
  const id = `plate-${parcel.slug}`;

  return (
    <div className={`relative aspect-square w-full ${className}`} style={{ backgroundColor: plate.ground }}>
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full" role="img" aria-label={`${parcel.name}, closed and sealed.`}>
        <defs>
          <linearGradient id={`${id}-face`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07" />
            <stop offset="46%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.12" />
          </linearGradient>
          <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000000" floodOpacity="0.28" />
          </filter>
        </defs>

        <g filter={`url(#${id}-shadow)`}>
          <rect x="58" y="52" width="284" height="284" rx="2" fill={plate.box} />
          <rect x="58" y="52" width="284" height="284" rx="2" fill={`url(#${id}-face)`} />
          <rect x="74" y="68" width="252" height="252" fill="none" stroke="#000000" strokeOpacity="0.14" />
          <rect x="74" y="68" width="252" height="252" fill="none" stroke="#ffffff" strokeOpacity="0.09" transform="translate(1 1)" />

          {/* the ribbon, crossing under the seal */}
          <rect x="177" y="52" width="46" height="284" fill={plate.ribbon} />
          <rect x="177" y="52" width="3" height="284" fill="#000000" fillOpacity="0.16" />
          <rect x="220" y="52" width="3" height="284" fill="#000000" fillOpacity="0.16" />
          <rect x="58" y="177" width="284" height="46" fill={plate.ribbon} />
          <rect x="58" y="177" width="284" height="3" fill="#000000" fillOpacity="0.16" />
          <rect x="58" y="220" width="284" height="3" fill="#000000" fillOpacity="0.16" />

          {/* a fold where the lid meets the box */}
          <rect x="58" y="318" width="284" height="1.5" fill="#000000" fillOpacity="0.16" />
          <rect x="58" y="321" width="284" height="1" fill="#ffffff" fillOpacity="0.07" />
        </g>
      </svg>

      <div className="absolute inset-0 grid place-items-center">
        <WaxSeal size={sealSize} tone={plate.seal === "#c7a489" ? "champagne" : "wax"} />
      </div>
    </div>
  );
}
