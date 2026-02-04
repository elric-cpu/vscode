export const GEO_HUB_LINKS = [
  {
    label: "Harney County service area",
    to: "/service-areas/harney-county",
    description: "Burns, Hines, and surrounding high desert communities.",
    intent: "location",
  },
  {
    label: "Mid-Willamette Valley service area",
    to: "/service-areas/mid-willamette-valley",
    description: "Linn, Marion, Polk, and Yamhill county coverage.",
    intent: "location",
  },
];

export const TOOLS_HUB_LINK = {
  label: "Maintenance and ROI calculators",
  to: "/resources/calculators",
  description: "ZIP-adjusted tools for budgets, planning, and ROI.",
  intent: "estimate",
};

export const TOP_TOOL_LINKS = [
  {
    label: "Home maintenance estimator",
    to: "/resources/home-maintenance-estimator",
    description: "Annual budget range with ZIP-based pricing.",
    intent: "estimate",
  },
  {
    label: "Preventive vs reactive ROI",
    to: "/resources/calculators/preventive-maintenance-roi",
    description: "Compare preventive spend to emergency costs.",
    intent: "compare",
  },
  {
    label: "Instant repair cost calculator",
    to: "/resources/calculators/instant-repair-cost",
    description: "Fast repair ranges by system and urgency.",
    intent: "estimate",
  },
  {
    label: "HVAC load calculator",
    to: "/resources/calculators/hvac-load",
    description: "Sizing guidance and localized replacement ranges.",
    intent: "plan",
  },
  {
    label: "Asset lifecycle extension",
    to: "/resources/calculators/asset-lifecycle",
    description: "Model replacement timing and life extension.",
    intent: "plan",
  },
];

export const MAINTENANCE_LINKS = {
  home: {
    label: "home maintenance program",
    to: "/maintenance-plans",
    description: "Subscription maintenance with documented scopes.",
    intent: "subscribe",
  },
  commercial: {
    label: "commercial maintenance program",
    to: "/commercial-maintenance",
    description: "Facilities maintenance for properties under 50k sq ft.",
    intent: "subscribe",
  },
};

export const SERVICE_PILLAR_LINKS = {
  water: {
    label: "water damage restoration",
    to: "/water-damage-restoration",
    description: "24/7 extraction, drying, and documentation.",
    intent: "service",
  },
  mold: {
    label: "mold remediation",
    to: "/mold-remediation",
    description: "Containment, removal, and moisture correction.",
    intent: "service",
  },
  fire: {
    label: "fire and smoke damage cleanup",
    to: "/fire-smoke-damage",
    description: "Cleanup, odor control, and rebuild coordination.",
    intent: "service",
  },
  inspection: {
    label: "inspection repairs",
    to: "/inspection-repairs",
    description: "Punch lists, pre-sale repairs, and code fixes.",
    intent: "service",
  },
  moisture: {
    label: "moisture control",
    to: "/moisture-control",
    description: "Leak diagnostics and envelope repairs.",
    intent: "service",
  },
};

export const GUIDE_LINKS = [
  {
    label: "Annual home maintenance budget guide",
    to: "/resources/guides/annual-home-maintenance-budget",
    description: "What to plan for by system and season.",
    intent: "guide",
  },
  {
    label: "Seasonal maintenance checklist",
    to: "/resources/guides/seasonal-maintenance-checklist",
    description: "Spring, summer, fall, and winter checklists.",
    intent: "guide",
  },
  {
    label: "Inspection report repairs guide",
    to: "/resources/guides/inspection-report-repairs",
    description: "Common items, priorities, and next steps.",
    intent: "guide",
  },
  {
    label: "Hidden water damage signs",
    to: "/resources/guides/signs-of-hidden-water-damage",
    description: "Symptoms, risks, and when to call a pro.",
    intent: "guide",
  },
];
