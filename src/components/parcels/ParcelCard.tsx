import Link from "next/link";
import type { Parcel } from "@/content/parcels";
import { formatRupees } from "@/lib/links";
import { ParcelPlate } from "./ParcelPlate";

export function ParcelCard({ parcel }: { parcel: Parcel }) {
  return (
    <Link href={`/parcels/${parcel.slug}`} className="group block">
      <div className="overflow-hidden">
        <ParcelPlate
          parcel={parcel}
          sealSize={86}
          className="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line-ink pt-3">
        <p className="label text-rose">{parcel.number}</p>
        <p className="text-[0.82rem] tabular-nums text-ink-soft">{formatRupees(parcel.price)}</p>
      </div>
      <h3 className="mt-2 font-display text-[1.38rem] leading-tight tracking-[-0.015em] text-ink">
        <span className="bg-[linear-gradient(#8e1b2b,#8e1b2b)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
          {parcel.name}
        </span>
      </h3>
      <p className="mt-2 max-w-[30ch] text-[0.86rem] leading-relaxed text-ink/55">{parcel.blurb}</p>
    </Link>
  );
}
