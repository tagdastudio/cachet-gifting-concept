export type NavItem = { label: string; href: string };

/**
 * One object is the whole client rebrand: name, wordmark, monogram, city, contact, hours, delivery and concept flag.
 * The demo values are fictional. Replace them with a client's approved details before launch.
 */
export const site = {
  name: "Cachet",
  wordmark: "Cachet",
  monogram: "C",
  descriptor: "A gifting house for the occasions that matter.",
  tagline: "Gifts, sent sealed.",
  city: "Hyderabad",
  region: "Telangana",
  address: ["6-3-1090, Road No. 1", "Banjara Hills, Hyderabad 500034"],
  addressNote: "Illustrative address for the concept.",
  hours: [
    { day: "Tuesday to Saturday", time: "11:00 – 19:00" },
    { day: "Sunday", time: "By appointment" },
    { day: "Monday", time: "Closed" },
  ],
  /** Minutes from midnight, Asia/Kolkata. 0 is Sunday, matching Date#getDay. */
  openHours: [
    { day: 0, open: 11 * 60, close: 16 * 60 },
    { day: 1, open: -1, close: -1 },
    { day: 2, open: 11 * 60, close: 19 * 60 },
    { day: 3, open: 11 * 60, close: 19 * 60 },
    { day: 4, open: 11 * 60, close: 19 * 60 },
    { day: 5, open: 11 * 60, close: 19 * 60 },
    { day: 6, open: 11 * 60, close: 19 * 60 },
  ],
  timezone: "Asia/Kolkata",
  hoursNote: "The showroom is small. A message before you come means someone is free to sit with you.",
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  whatsapp: "910000000000",
  whatsappDisplay: "WhatsApp",
  email: "hello@cachet.example",
  instagram: "@cachet.demo",
  instagramUrl: "https://www.instagram.com/",
  mapUrl: "https://www.google.com/maps?q=Banjara+Hills+Hyderabad",
  directionsLabel: "Open in Maps",
  delivery: "Hand delivery across Hyderabad. Courier across India on request, packed for the journey.",
  deliveryShort: "Hand delivery in Hyderabad. India on request.",
  concept: true,
  themeColor: "#150f14",
  lang: "en",
  title: "Cachet — Gifts, sent sealed",
  description:
    "A gifting house in Hyderabad for weddings, new houses and the people who have everything. Six parcels, packed by hand and closed with a wax seal.",
  nav: [
    { label: "Parcels", href: "/parcels" },
    { label: "The atelier", href: "/atelier" },
    { label: "Weddings", href: "/weddings" },
    { label: "Corporate", href: "/corporate" },
    { label: "Visit", href: "/visit" },
  ] satisfies NavItem[],
} as const;

export type Site = typeof site;
