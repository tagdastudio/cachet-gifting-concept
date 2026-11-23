export type ParcelItem = {
  name: string;
  note: string;
};

export type Parcel = {
  slug: string;
  number: string;
  name: string;
  price: number;
  blurb: string;
  description: string;
  forWho: string;
  occasions: string[];
  notes: string[];
  contents: ParcelItem[];
  care: string;
  leadTime: string;
  /** The plate: a flat-lay of the closed box, drawn from the same four colours as the site. */
  plate: {
    box: string;
    lid: string;
    ribbon: string;
    seal: string;
    ground: string;
  };
  featured: boolean;
};

export const parcels: Parcel[] = [
  {
    slug: "the-wedding-parcel",
    number: "No. 01",
    name: "The Wedding Parcel",
    price: 6400,
    blurb: "A welcome box for the room, set on the bed before the first guest arrives.",
    description:
      "Built around the first hour of a wedding: something to drink, something to wear, something to keep. The box is covered in a deep rose paper and closed with a single wax seal carrying the couple's initials. Names are written, not printed, unless you would rather they were printed.",
    forWho: "Destination weddings, welcome hampers, bridal parties.",
    occasions: ["Wedding", "Keepsake"],
    notes: ["Initials in wax", "Packed for travel", "Made in batches of 25"],
    contents: [
      { name: "Silk eye mask", note: "Mulberry silk, rose or ivory, in a cotton pouch." },
      { name: "Oud candle", note: "120 g, poured in Hyderabad, 30 hours." },
      { name: "Rose & cardamom tea", note: "100 g loose leaf in a black tin." },
      { name: "Two date & pistachio bites", note: "Wrapped as a pair, for the morning after." },
      { name: "The letter", note: "Your words, hand-written on cream card." },
    ],
    care: "Keep the candle out of direct sun. The tea is best within four months.",
    leadTime: "3 weeks",
    plate: { box: "#3a1c2a", lid: "#4a2434", ribbon: "#c7a489", seal: "#a62b4e", ground: "#e8dcd5" },
    featured: true,
  },
  {
    slug: "the-house-parcel",
    number: "No. 02",
    name: "The House Parcel",
    price: 4800,
    blurb: "For the door that has just been opened, and the boxes still in the hall.",
    description:
      "A housewarming parcel that assumes nothing is unpacked yet: a candle for the first evening, a board for the first meal eaten sitting down, salt in a small brass bowl because every kitchen needs some. The card asks for nothing in return.",
    forWho: "New homes, new cities, first flats.",
    occasions: ["Housewarming", "Thank you"],
    notes: ["No food", "Reusable contents", "Hand-delivered in the city"],
    contents: [
      { name: "Fig & cedar candle", note: "180 g, 40 hours, in a reusable glass." },
      { name: "Teak serving board", note: "Small, oiled, cut from a single piece." },
      { name: "Brass salt bowl", note: "Turned by hand, with a small spoon." },
      { name: "Linen tea towel", note: "Woven in Panipat, undyed." },
      { name: "The letter", note: "Your words, hand-written on cream card." },
    ],
    care: "Wipe the board with oil twice a year. The brass will darken; it is meant to.",
    leadTime: "10 days",
    plate: { box: "#1d2a2b", lid: "#253436", ribbon: "#c7a489", seal: "#a62b4e", ground: "#e8dcd5" },
    featured: true,
  },
  {
    slug: "the-long-table",
    number: "No. 03",
    name: "The Long Table",
    price: 5600,
    blurb: "For the festival that runs late and the table that keeps growing.",
    description:
      "The festive parcel, kept deliberately useful. Everything on the table, nothing that ends up in a cupboard: a candle for the doorway, sweets that are actually eaten, a box of tea for the guests who stay. The box is ivory, the ribbon is oxblood, and the seal is stamped rather than printed.",
    forWho: "Diwali, Eid, Christmas, and the family that hosts all three.",
    occasions: ["Festive", "Family", "Clients"],
    notes: ["Contains nuts", "Eggless", "Ships from October"],
    contents: [
      { name: "Two brass diyas", note: "Weighted so they do not tip, made in Moradabad." },
      { name: "Pistachio & rose barfi", note: "Six pieces, boxed the week it is sent." },
      { name: "Assam second flush", note: "100 g loose leaf, in a black tin." },
      { name: "Saffron candle", note: "120 g, poured in Hyderabad." },
      { name: "The letter", note: "Your words, hand-written on cream card." },
    ],
    care: "The barfi is best within ten days. Keep the tea dry and the candle upright.",
    leadTime: "12 days in season",
    plate: { box: "#f3ebe6", lid: "#e8dcd5", ribbon: "#7e1b38", seal: "#a62b4e", ground: "#1e161c" },
    featured: true,
  },
  {
    slug: "the-desk",
    number: "No. 04",
    name: "The Desk",
    price: 3900,
    blurb: "A quiet parcel for the person who has just started, or just shipped.",
    description:
      "The corporate parcel we would actually want to receive. It fits in a drawer, it survives a move, and it does not say the company name more than once. Built for a first day, a promotion, or a client you would like to keep.",
    forWho: "New joiners, promotions, client thank-yous.",
    occasions: ["Corporate", "Thank you"],
    notes: ["Minimum 10 boxes", "Logo on the card only", "Ships flat"],
    contents: [
      { name: "A5 notebook", note: "Lined, cloth-bound, lies flat." },
      { name: "Brass pen", note: "Refillable, weighted, no branding." },
      { name: "Single-origin chocolate", note: "70% Idukki, 60 g bar." },
      { name: "Desk candle", note: "90 g, fig, in a small tin." },
      { name: "The card", note: "One line from the team, printed on cream card." },
    ],
    care: "Chocolate is best within six weeks. Keep it away from a warm desk.",
    leadTime: "2 weeks",
    plate: { box: "#191114", lid: "#241a1f", ribbon: "#c7a489", seal: "#a62b4e", ground: "#e8dcd5" },
    featured: false,
  },
  {
    slug: "the-small-hours",
    number: "No. 05",
    name: "The Small Hours",
    price: 3400,
    blurb: "For the weeks that are harder than they should be.",
    description:
      "A parcel for a hospital stay, a difficult month, or a friend who has gone quiet. Nothing asks anything of the person opening it: tea, a candle, something soft, and a card that says you are thinking of them without asking for an update.",
    forWho: "Recovery, condolence, new parents, a hard month.",
    notes: ["No strong scent", "Nothing to assemble", "Sent without a price"],
    occasions: ["Thank you", "Keepsake", "Family"],
    contents: [
      { name: "Chamomile & lemon balm", note: "60 g loose leaf, caffeine-free." },
      { name: "Unscented candle", note: "150 g, beeswax, 30 hours." },
      { name: "Cotton throw", note: "Waffle weave, 130 × 180 cm, undyed." },
      { name: "Honey", note: "250 g, wild, from the Nilgiris." },
      { name: "The letter", note: "Your words, hand-written on cream card." },
    ],
    care: "Warm the honey gently if it crystallises. The throw washes cold.",
    leadTime: "7 days",
    plate: { box: "#2a2622", lid: "#35302a", ribbon: "#e4c9c0", seal: "#a62b4e", ground: "#e8dcd5" },
    featured: false,
  },
  {
    slug: "the-keepsake",
    number: "No. 06",
    name: "The Keepsake",
    price: 8200,
    blurb: "For the anniversary that deserves an object, not another dinner.",
    description:
      "The largest parcel we make, and the slowest. A scent, a piece of silk, something brass, and a letter in a sealed envelope that the recipient is meant to keep. We can hold the parcel for a date and deliver it by hand in the city.",
    forWho: "Anniversaries, milestones, a proposal.",
    notes: ["Scented", "Hand-delivered in Hyderabad", "Allow three weeks"],
    occasions: ["Anniversary", "Keepsake", "Wedding"],
    contents: [
      { name: "Attar, 6 ml", note: "Rose and sandalwood, blended in Kannauj." },
      { name: "Silk scarf", note: "Hand-rolled hem, oxblood, 90 × 90 cm." },
      { name: "Brass box", note: "Small, engraved with a date if you wish." },
      { name: "Dark chocolate, 70%", note: "Two bars, single origin." },
      { name: "The letter, sealed", note: "Hand-written, closed with wax, in an envelope." },
    ],
    care: "Keep the attar out of light. The silk is dry-clean only.",
    leadTime: "3 weeks",
    plate: { box: "#4a2434", lid: "#592b3e", ribbon: "#c7a489", seal: "#c7a489", ground: "#150f14" },
    featured: true,
  },
];

export const occasionFilters = ["All", "Wedding", "Housewarming", "Festive", "Corporate", "Anniversary", "Thank you"] as const;

export const priceFilters = [
  { label: "All prices", min: 0, max: 20000 },
  { label: "Under ₹4,000", min: 0, max: 3999 },
  { label: "₹4,000 – ₹6,000", min: 4000, max: 6000 },
  { label: "Above ₹6,000", min: 6001, max: 20000 },
] as const;

export const getParcel = (slug: string) => parcels.find((parcel) => parcel.slug === slug);
