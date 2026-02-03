export const CALCULATORS = [
  {
    slug: "hvac-load",
    title: "HVAC Load Calculator",
    description:
      "Estimate heating & cooling load, recommended system size, and localized replacement ranges.",
    category: "HVAC & Comfort",
  },
  {
    slug: "preventive-maintenance-roi",
    title: "Preventive vs Reactive ROI",
    description:
      "Compare preventive maintenance costs to emergency repairs, downtime, and compliance risk.",
    category: "ROI & Compliance",
  },
  {
    slug: "instant-repair-cost",
    title: "Instant Repair Cost Calculator",
    description:
      "Select system type and urgency to get a ZIP-adjusted repair range instantly.",
    category: "Emergency & Repairs",
  },
  {
    slug: "energy-savings",
    title: "Energy Savings Calculator",
    description:
      "Project monthly and annual savings from efficiency upgrades (residential or commercial).",
    category: "Energy & IAQ",
  },
  {
    slug: "ach",
    title: "ACH (Air Changes per Hour)",
    description:
      "Calculate ACH for indoor air quality and compare to recommended targets.",
    category: "Energy & IAQ",
  },
  {
    slug: "materials-estimator",
    title: "Material / Project Estimator",
    description:
      "Estimate material quantities and cost ranges for paint, drywall, or flooring.",
    category: "Project Planning",
  },
  {
    slug: "asset-lifecycle",
    title: "Asset Lifecycle Extension",
    description:
      "See how preventive spend extends equipment life and delays capital replacement.",
    category: "ROI & Compliance",
  },
  {
    slug: "labor-savings",
    title: "Labor Savings Estimator",
    description:
      "Compare in-house time vs. outsourced or digitized maintenance workflows.",
    category: "Operations",
  },
  {
    slug: "property-value-rent",
    title: "Property Value / Rental Lift",
    description:
      "Estimate rent lift and value gain from cosmetic upgrades and amenity improvements.",
    category: "ROI & Compliance",
  },
];

export const CALCULATOR_ROUTES = CALCULATORS.map((calculator) => ({
  path: `/resources/calculators/${calculator.slug}`,
  name: calculator.title,
}));
