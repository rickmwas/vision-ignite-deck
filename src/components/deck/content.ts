/**
 * Centralized data and copy for the TotoAfya Digital investor pitch & Business Model Canvas.
 * All figures are represented in Kenyan Shillings (KES).
 */

export const deckMeta = {
  brand: "TotoAfya Digital",
  tagline: "The Digital Backbone of Maternal Care in Africa",
  audience: "KeNIA · Investors · Accelerators · Grant Committees",
  presenter: "Rick Mwas · Founder & CEO",
  date: "2026",
  askAmount: "KES 20,000,000",
  askUse: "to scale our validated pilot to 5 counties, onboarding 2,500+ mothers in the next 12 months.",
};

// Side-by-side comparison figures for Traction (Pilot Actuals vs. 12-Month Projections)
export const traction = {
  actuals: {
    mothers: "150+",
    chvs: "10",
    facilities: "2",
    counties: "2",
    label: "Active Pilot Results",
    footnote: "Machakos & Kiambu counties, verified offline sync logs.",
  },
  projections: {
    mothers: "1,200+",
    chvs: "85",
    facilities: "12",
    counties: "5",
    label: "12-Month Target",
    footnote: "Under pending county licensing discussions.",
  },
};

export const team = [
  {
    name: "Rick Mwas",
    role: "Founder & CEO",
    credential: "Lead product developer. Spent months studying maternal workflows inside Kiambu clinics — sitting with nurses, walking with CHVs, learning what paper registers miss.",
  },
  {
    name: "Ken Omondi",
    role: "CTO",
    credential: "Software Architect. Built offline-first mobile sync engines in low-connectivity rural environments. We design systems for reality, not best-case scenarios.",
  },
  {
    name: "Dr. Beatrice Kemboi",
    role: "Chief Medical Officer",
    credential: "OB-GYN & maternal health advocate. Has seen preventable birth complications go unnoticed due to fragmented records. Leading clinical logic validation.",
  },
];

export const market = {
  tam: { label: "TAM · Sub-Saharan Africa", value: "KES 1.1 Trillion", note: "Maternal & child digital health, 2030" },
  sam: { label: "SAM · East Africa",        value: "KES 150 Billion",   note: "Kenya · Uganda · Tanzania · Rwanda" },
  som: { label: "SOM · Kenya (5 yr)",       value: "KES 11 Billion",    note: "47 counties · CHV-led deployment" },
};

// Pricing and Value Metrics for the Business Model slide
export const pricing = {
  b2g: {
    price: "KES 3.2M",
    period: "per county / year",
    ltv: "KES 16M (5-yr)",
    cac: "KES 400K",
  },
  b2b: {
    price: "KES 20,000",
    period: "per facility / month",
    ltv: "KES 960K (4-yr)",
    cac: "KES 50K",
  },
  ngo: {
    price: "Custom Contract",
    period: "program integration",
    ltv: "KES 5M - 15M",
    cac: "KES 150K",
  },
};
