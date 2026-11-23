import type { FaqGroup } from "@/components/ui/FaqList";

export const faqGroups: FaqGroup[] = [
  {
    title: "Ordering",
    items: [
      {
        q: "How far ahead should I order?",
        a: "Ten days for a single parcel, three weeks for a wedding or a large corporate run. Festive weeks book out earlier. If you are late, message us anyway; we keep a small number of same-week slots for people who ask nicely.",
      },
      {
        q: "Can I choose what goes inside?",
        a: "Yes. Every parcel on the site can be adjusted, and the atelier exists for the ones that are not on the site. We will tell you honestly when a substitution is a good idea and when it is not.",
      },
      {
        q: "Do you take payment online?",
        a: "No. This is a concept site and it takes no payment. A real order would be confirmed by a written quote, with a deposit to hold the date and the balance before dispatch.",
      },
      {
        q: "Can I send one parcel, or is there a minimum?",
        a: "One is fine. The Desk parcel has a minimum of ten because of how the notebook and pen are bought, and everything else starts at a single box.",
      },
    ],
  },
  {
    title: "Contents",
    items: [
      {
        q: "Are the parcels vegetarian?",
        a: "The food parcels are vegetarian and eggless unless the card says otherwise. The chocolate is made in a kitchen that handles milk and nuts. None of our parcels contain alcohol.",
      },
      {
        q: "What about allergies?",
        a: "Tell us before we pack. The kitchen handles nuts, milk and wheat, so we cannot promise an allergen-free environment, but we can leave an item out and replace it with something safe. Nuts are never swapped in silently.",
      },
      {
        q: "Can I put my own product in the parcel?",
        a: "Usually. We need to see it, weigh it and check that it survives the box. For a corporate run we can work with your samples, your packaging, or a mix of both.",
      },
    ],
  },
  {
    title: "Delivery",
    items: [
      {
        q: "Where do you deliver?",
        a: "Hand delivery across Hyderabad, including the venue on the morning of a wedding. Courier across India on request, packed for the journey and tracked where the courier allows it.",
      },
      {
        q: "Can you deliver to a hotel or a venue?",
        a: "Yes, and it is one of the things we do most. We deliver to the concierge or the event manager with a name list, and we confirm the count before we leave.",
      },
      {
        q: "What if a parcel arrives damaged?",
        a: "Send a photograph the same day. We replace the contents where we can and refund the parcel where we cannot. We would rather hear about it than not.",
      },
    ],
  },
  {
    title: "Corporate and weddings",
    items: [
      {
        q: "Can the card carry our logo?",
        a: "Yes, once, and small. The card is the one place we will print a logo; the box stays ours. If you need full branding we will quote it as a separate run.",
      },
      {
        q: "Do you make samples?",
        a: "For orders above twenty-five parcels, yes: one finished sample, charged at the parcel price and credited against the order. It is the only way to approve paper and ribbon honestly.",
      },
      {
        q: "Can you hold a date?",
        a: "A week, without payment. After that we need a deposit, because the paper and the wax are bought ahead and the week is the thing we are actually selling.",
      },
    ],
  },
];
