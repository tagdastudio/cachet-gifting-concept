"use client";

import { useMemo, useSyncExternalStore } from "react";
import type { Parcel } from "@/content/parcels";
import { occasionFilters, priceFilters } from "@/content/parcels";
import { ParcelCard } from "./ParcelCard";

const FILTER_EVENT = "cachet:filters";

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(FILTER_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(FILTER_EVENT, callback);
  };
}

const getSnapshot = () => window.location.search;
const getServerSnapshot = () => "";

export function ParcelIndex({ parcels }: { parcels: Parcel[] }) {
  const search = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const params = useMemo(() => new URLSearchParams(search), [search]);

  const occasion = params.get("occasion") ?? "All";
  const price = params.get("price") ?? "All prices";
  const band = priceFilters.find((item) => item.label === price) ?? priceFilters[0];

  const visible = useMemo(
    () =>
      parcels.filter((parcel) => {
        const matchOccasion = occasion === "All" || parcel.occasions.includes(occasion);
        const matchPrice = parcel.price >= band.min && parcel.price <= band.max;
        return matchOccasion && matchPrice;
      }),
    [parcels, occasion, band],
  );

  function update(key: "occasion" | "price", value: string) {
    const next = new URLSearchParams(window.location.search);
    if (value === "All" || value === "All prices") next.delete(key);
    else next.set(key, value);
    const query = next.toString();
    window.history.replaceState(null, "", query ? `?${query}` : window.location.pathname);
    window.dispatchEvent(new Event(FILTER_EVENT));
  }

  function reset() {
    window.history.replaceState(null, "", window.location.pathname);
    window.dispatchEvent(new Event(FILTER_EVENT));
  }

  return (
    <div>
      <div className="gutter page">
        <div className="flex flex-col gap-6 border-b border-line-ink pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-5">
            <FilterRow
              label="Occasion"
              options={occasionFilters}
              value={occasion}
              onChange={(value) => update("occasion", value)}
            />
            <FilterRow
              label="Price"
              options={priceFilters.map((item) => item.label)}
              value={price}
              onChange={(value) => update("price", value)}
            />
          </div>
          <div className="flex items-center justify-between gap-5 lg:flex-col lg:items-end">
            <p className="text-[0.8rem] tabular-nums text-ink-soft" aria-live="polite">
              {visible.length} of {parcels.length} parcels
            </p>
            <button type="button" onClick={reset} className="link-line min-h-11 text-[0.8rem] font-medium text-ink">
              Clear filters
            </button>
          </div>
        </div>
      </div>

      <div className="gutter page mt-9">
        {visible.length ? (
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((parcel) => (
              <ParcelCard key={parcel.slug} parcel={parcel} />
            ))}
          </div>
        ) : (
          <div className="border border-line-ink px-6 py-14 text-center">
            <p className="font-display text-[1.8rem] text-ink">Nothing under that combination.</p>
            <p className="mt-2 text-[0.9rem] text-ink-soft">Release a filter, or let us make one to order.</p>
            <button type="button" onClick={reset} className="btn btn-ink mt-6">
              Show every parcel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (next: string) => void;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2.5">
      <p className="label text-ink-soft">{label}</p>
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-0.5">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={value === option}
            className="chip shrink-0"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
