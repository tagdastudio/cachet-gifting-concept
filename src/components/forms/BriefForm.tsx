"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { site } from "@/content/site";
import { mailLink, waLink } from "@/lib/links";

type Kind = "atelier" | "corporate" | "wedding";

const COPY: Record<Kind, { subject: string; occasion: string; quantity: string; company: boolean; hint: string }> = {
  atelier: {
    subject: "A parcel, to be commissioned",
    occasion: "Which occasion?",
    quantity: "How many parcels?",
    company: false,
    hint: "Occasion, who it is for, and the date you need it. We will come back with two or three ways to do it.",
  },
  corporate: {
    subject: "Corporate gifting, brief",
    occasion: "What is it for?",
    quantity: "How many parcels?",
    company: true,
    hint: "Quantity, a budget per box, and the date they need to land. We will send a spec sheet and a sample.",
  },
  wedding: {
    subject: "Wedding parcels, brief",
    occasion: "Which function?",
    quantity: "How many boxes?",
    company: false,
    hint: "The date, the number of rooms or guests, and the palette you are working with. We can hold a date for a week.",
  },
};

const OCCASIONS = [
  "Wedding",
  "Housewarming",
  "Festive",
  "Corporate",
  "Anniversary",
  "Thank you",
  "Something else",
];

const BUDGETS = ["Under ₹3,000 a parcel", "₹3,000 – ₹5,000", "₹5,000 – ₹8,000", "Above ₹8,000", "Not sure yet"];

/** A short brief, composed in the browser. Nothing is posted anywhere; the visitor chooses how to send it. */
export function BriefForm({ kind, className = "" }: { kind: Kind; className?: string }) {
  const [brief, setBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const copy = COPY[kind];

  function compose(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (key: string) => String(data.get(key) ?? "").trim();

    const lines = [
      `${copy.subject} — ${site.name}`,
      "",
      `Name — ${field("name")}`,
      `Reply to — ${field("contact")}`,
      copy.company ? `Company — ${field("company")}` : "",
      `${copy.occasion} — ${field("occasion")}`,
      field("date") ? `Date — ${field("date")}` : "",
      `${copy.quantity} — ${field("quantity")}`,
      `Budget — ${field("budget")}`,
      "",
      "Notes",
      field("note") || "—",
      "",
      "Sent from the concept site. Prices and dates are illustrative.",
    ].filter(Boolean);

    setBrief(lines.join("\n"));
    setCopied(false);
  }

  async function copyBrief() {
    if (!brief) return;
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={className}>
      {brief ? (
        <div className="frame bg-paper-2/60 p-6 sm:p-8">
          <div className="flex items-baseline justify-between gap-4 border-b border-line-ink pb-4">
            <p className="label text-rose">Your brief</p>
            <button type="button" onClick={() => setBrief(null)} className="link-line text-[0.78rem] text-ink-soft">
              Edit it
            </button>
          </div>
          <pre className="mt-5 whitespace-pre-wrap font-body text-[0.9rem] leading-[1.7] text-ink/80">{brief}</pre>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={waLink(brief)} target="_blank" rel="noreferrer" className="btn btn-ink">
              Send on WhatsApp
            </a>
            <a href={mailLink(copy.subject, brief)} className="btn btn-ink-outline">
              Send by email
            </a>
            <button type="button" onClick={copyBrief} className="btn btn-ink-outline">
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <p className="mt-4 text-[0.72rem] leading-relaxed text-ink-soft">
            On the concept, WhatsApp opens a share sheet rather than a studio number.
          </p>
        </div>
      ) : (
        <form onSubmit={compose} className="frame bg-paper-2/40 p-6 sm:p-8">
          <p className="max-w-[40rem] text-[0.92rem] leading-relaxed text-ink/65">{copy.hint}</p>

          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            <Field label="Your name">
              <input name="name" required autoComplete="name" className="field mt-2" placeholder="Name" />
            </Field>
            <Field label="Phone or email">
              <input name="contact" required autoComplete="email" className="field mt-2" placeholder="How we reply" />
            </Field>

            {copy.company ? (
              <Field label="Company">
                <input name="company" className="field mt-2" placeholder="Optional" />
              </Field>
            ) : null}

            <Field label="Occasion">
              <Select name="occasion" options={OCCASIONS} />
            </Field>

            <Field label="Date needed">
              <input name="date" type="date" className="field mt-2 text-ink/80" />
            </Field>

            <Field label={copy.quantity}>
              <input name="quantity" type="number" min={1} defaultValue={kind === "wedding" ? 80 : 1} className="field mt-2" />
            </Field>

            <Field label="Budget a parcel">
              <Select name="budget" options={BUDGETS} />
            </Field>

            <Field label="Anything we should know" full>
              <textarea
                name="note"
                rows={3}
                className="field mt-2 resize-y"
                placeholder="Names, colours, allergies, the venue, the thing you are worried about."
              />
            </Field>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <button type="submit" className="btn btn-ink">
              Compose the brief
            </button>
            <p className="max-w-[22rem] text-[0.72rem] leading-relaxed text-ink-soft">
              Nothing is sent from this page. We put your brief together, then you choose WhatsApp or email.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({ label, children, full = false }: { label: string; children: ReactNode; full?: boolean }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="label text-ink-soft">{label}</span>
      {children}
    </label>
  );
}

function Select({ name, options }: { name: string; options: string[] }) {
  return (
    <span className="relative block">
      <select name={name} className="field mt-2 appearance-none pr-7">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 8"
        fill="none"
        className="pointer-events-none absolute bottom-4 right-0 size-2.5 text-ink-soft"
      >
        <path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}


