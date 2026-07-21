/**
 * Centralized data and copy for the TotoAfya Digital investor pitch & Business Model Canvas.
 * All figures are represented in Kenyan Shillings (KES).
 */

export const deckMeta = {
  brand: "TotoAfya Digital",
  tagline: "The Digital Backbone of Maternal Care in Africa",
  audience: "KeNIA · Investors · Accelerators · Grant Committees",
  presenter: "Erick Mwangi · Founder & Technical Development Lead",
  date: "2026",
  askAmount: "KES 20,000,000",
  askUse: "to scale our validated pilot to 5 counties, onboarding 2,500+ mothers in the next 12 months.",
};

// Side-by-side comparison figures for Traction (Pilot Actuals vs. 12-Month Projections)
export const traction = {
  actuals: {
    mothers: "60",
    chvs: "10",
    facilities: "2",
    counties: "1",
    label: "Active Pilot Results",
    footnote: "Nakuru County (Naivasha & Maai Mahiu), in talks for a supervised pilot.",
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
    name: "Erick Mwangi",
    role: "Founder & Technical Dev Lead",
    credential: "Lead product developer. Spent months studying maternal workflows inside Nakuru clinics — sitting with nurses, walking with CHVs, learning what paper registers miss.",
  },
  {
    name: "Michael Omondi",
    role: "Systems Research",
    credential: "Research on current systems. Evaluated existing paper records and digital systems in public clinics, mapping data entry bottlenecks and synchronization failures.",
  },
  {
    name: "Hyacinth Onchangu",
    role: "Clinical Workflows Research",
    credential: "Research on clinical workflows. Documented nurse routines and patient pathways to ensure TotoAfya matches clinical reality and guidelines.",
  },
  {
    name: "Zach Njogu",
    role: "Chief Nurse & Validator",
    credential: "Chief Nurse at Naivasha Hospital / Maai Mahiu Hospital. Validating TotoAfya's interface and logic against real clinical workflows and daily workloads.",
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
