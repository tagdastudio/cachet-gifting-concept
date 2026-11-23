export type NoteBlock =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; items: string[] };

export type JournalNote = {
  slug: string;
  title: string;
  standfirst: string;
  date: string;
  reading: string;
  image: string;
  imageAlt: string;
  blocks: NoteBlock[];
};

export const notes: JournalNote[] = [
  {
    slug: "the-case-for-the-seal",
    title: "The case for the seal",
    standfirst:
      "A sticker is faster, cheaper and easier to ship. We still pour wax, because the last thing a gift does is close.",
    date: "14 November 2026",
    reading: "4 min read",
    image: "/media/sealed-letter.jpg",
    imageAlt: "A black embossed envelope closed with a wax seal, lit from one side.",
    blocks: [
      {
        kind: "p",
        text: "A parcel is finished the moment it is sealed. Until then it is a collection of good intentions in a box; after, it is a thing that cannot be opened without leaving a mark. That is the whole argument, and it is not a small one.",
      },
      {
        kind: "h",
        text: "A seal is a promise with a cost",
      },
      {
        kind: "p",
        text: "Anyone can print a label. Wax takes a little time, a little heat and the acceptance that some seals will come out crooked. A crooked seal is not a defect; it is evidence that a person did it. We keep the crooked ones.",
      },
      {
        kind: "quote",
        text: "The gift is not the wax. The wax is the part that says someone stopped.",
      },
      {
        kind: "p",
        text: "There is a practical side too. Wax holds a ribbon in place without tape, it tells the recipient which way up the box should be opened, and it survives a courier better than most people expect. In summer we use a harder blend; in December, a softer one that takes a deeper impression.",
      },
      {
        kind: "h",
        text: "What we stamp",
      },
      {
        kind: "list",
        items: [
          "One monogram, the same die for every parcel.",
          "A wedding seal can carry the couple's initials, cut once and kept.",
          "Corporate seals stay blank, so the card can carry the name instead.",
        ],
      },
      {
        kind: "p",
        text: "If a client asks us to skip it, we do. A seal is an invitation, not a requirement, and a gift that arrives wrong is worse than a gift that arrives plain.",
      },
    ],
  },
  {
    slug: "what-to-write-on-the-card",
    title: "What to write on the card",
    standfirst:
      "Six lines that work, three that do not, and why the shortest note in the box is usually the one kept.",
    date: "2 November 2026",
    reading: "3 min read",
    image: "/media/candlelit-table.jpg",
    imageAlt: "A dark table set with a candle, glassware and a dried branch.",
    blocks: [
      {
        kind: "p",
        text: "We read a lot of cards. Most of them say the same four things, in the same order, and most of them are fine. The ones people keep are shorter than the ones they write first.",
      },
      {
        kind: "h",
        text: "Start with the thing you would say out loud",
      },
      {
        kind: "p",
        text: "If you would not say it across a table, it will read strangely on card. 'Congratulations on the new role' is a sentence from a form. 'You are going to be so good at this' is a sentence from a person.",
      },
      {
        kind: "quote",
        text: "Write the first line as if the card were a message, not a certificate.",
      },
      {
        kind: "h",
        text: "Three things to leave out",
      },
      {
        kind: "list",
        items: [
          "The price, in any form, including a hint.",
          "An apology for the gift being small. It is not small to them.",
          "A request for a photograph of them opening it.",
        ],
      },
      {
        kind: "p",
        text: "And one thing to add: a detail only the two of you know. A street, a joke, the name of a dog. It costs nothing and it is the reason the card ends up in a drawer instead of a bin.",
      },
    ],
  },
];

export const getNote = (slug: string) => notes.find((note) => note.slug === slug);
