import Link from "next/link";
import { WaxSeal } from "./WaxSeal";

type Action = { label: string; href: string };

/** A closing band: one line, two actions, and the seal. */
export function CtaBand({
  title,
  body,
  primary,
  secondary,
  note,
}: {
  title: string;
  body?: string;
  primary: Action;
  secondary?: Action;
  note?: string;
}) {
  return (
    <section className="border-y border-line bg-bg-deep text-fg">
      <div className="gutter page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p className="eye">The next parcel</p>
            <h2 className="h2 mt-4 max-w-[22ch]">{title}</h2>
            {body ? <p className="lead mt-5 max-w-[34rem] text-fg/55">{body}</p> : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primary.href} className="btn btn-rose">
                {primary.label}
              </Link>
              {secondary ? (
                <Link href={secondary.href} className="btn btn-outline">
                  {secondary.label}
                </Link>
              ) : null}
            </div>
            {note ? <p className="mt-5 text-[0.76rem] text-fg/35">{note}</p> : null}
          </div>
          <div className="hidden justify-end lg:col-span-4 lg:flex">
            <WaxSeal size={132} tone="wax" className="opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
