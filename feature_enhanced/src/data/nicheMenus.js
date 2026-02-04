// Pricing ranges are designed for conversion: simple anchors + clear next step.
// Final pricing is confirmed after a quick site verification.

export const PRICING_NOTES = [
  "Prices shown are typical ranges. Final pricing depends on access, conditions, and scope details.",
  "Permit fees, specialty testing, and material selections are handled as needed and disclosed before work starts.",
  "Service areas: Harney County and Mid-Valley (Sweet Home / Lebanon / Albany / Corvallis).",
];

function moneyRange(min, max) {
  return `$${min.toLocaleString()}-$${max.toLocaleString()}`;
}

export const NICHE_MENUS = {
  residential_maintenance: {
    slug: "maintenance-plans",
    title: "Residential Maintenance Plans",
    ctaLabel: "Get Exact Pricing",
    ctaHref: "/resources/home-maintenance-estimator",
    anchors: {
      enrollmentFee: "$0-$149 onboarding (typical)",
      responseWindow: "Member-first scheduling windows",
    },
    pricingMatrix: {
      title: "Typical Monthly Pricing",
      columns: ["Basic", "Plus (Most Popular)", "Priority"],
      rows: [
        {
          label: "Small Home (up to ~1,600 sq ft)",
          values: [
            moneyRange(79, 119),
            moneyRange(129, 189),
            moneyRange(199, 289),
          ],
        },
        {
          label: "Medium Home (~1,600-2,800 sq ft)",
          values: [
            moneyRange(99, 149),
            moneyRange(169, 239),
            moneyRange(249, 349),
          ],
        },
        {
          label: "Large Home (2,800+ sq ft)",
          values: [
            moneyRange(129, 199),
            moneyRange(219, 329),
            moneyRange(319, 449),
          ],
        },
      ],
      finePrint: [
        "Includes recurring checklist visits and documentation. Includes allowances per tier; heavy repairs are quoted separately.",
        "Add-ons: dryer vent clean-out, minor carpentry, appliance hook-ups, seasonal weatherization.",
      ],
    },
    serviceMenu: {
      title: "Popular Add-Ons",
      items: [
        {
          name: "Dryer vent clean-out",
          typical: moneyRange(129, 229),
          includes: [
            "Exterior termination check",
            "Lint removal",
            "Photo documentation",
          ],
        },
        {
          name: "Gutter cleaning (single story)",
          typical: moneyRange(199, 399),
          includes: [
            "Debris removal",
            "Downspout flush",
            "Before/after photos",
          ],
        },
        {
          name: "Caulking & sealing touch-up (per zone)",
          typical: moneyRange(149, 349),
          includes: [
            "Window/door perimeter",
            "Tub/shower touch-ups",
            "Targeted exterior seal points",
          ],
        },
      ],
    },
  },

  moisture_envelope: {
    slug: "moisture-envelope",
    title: "Water Intrusion, Envelope & Moisture Control",
    ctaLabel: "Book a Moisture Inspection",
    ctaHref: "/contact",
    anchors: {
      positioning: "Pre-loss, non-cat moisture work (not restoration)",
      margin: "Typical 45-70% gross (scope dependent)",
    },
    serviceMenu: {
      title: "Service Menu",
      items: [
        {
          name: "Targeted leak diagnosis (1 area)",
          typical: moneyRange(295, 495),
          includes: [
            "Moisture mapping",
            "Photo documentation",
            "Simple repair recommendations",
          ],
        },
        {
          name: "Full envelope investigation + report",
          typical: moneyRange(650, 1250),
          includes: [
            "Roof-to-wall + penetrations",
            "Window/door flashing review",
            "Written recommendations + priority list",
          ],
        },
        {
          name: "Crawlspace moisture control plan",
          typical: moneyRange(395, 895),
          includes: [
            "Vapor barrier evaluation",
            "Ventilation review",
            "Drainage and grading guidance",
          ],
        },
      ],
    },
    pricingMatrix: {
      title: "Typical Repair Ranges",
      columns: ["Small", "Medium", "Large"],
      rows: [
        {
          label: "Window/door flashing correction (per opening)",
          values: [
            moneyRange(450, 850),
            moneyRange(850, 1650),
            moneyRange(1650, 3200),
          ],
        },
        {
          label: "Roof-to-wall transition correction",
          values: [
            moneyRange(650, 1250),
            moneyRange(1250, 2500),
            moneyRange(2500, 5500),
          ],
        },
        {
          label: "Drainage/grading fix (localized)",
          values: [
            moneyRange(750, 1500),
            moneyRange(1500, 3500),
            moneyRange(3500, 9000),
          ],
        },
      ],
      finePrint: [
        "Repairs are quoted after diagnostics because the fix depends on what is actually failing (flashing, sealant, drainage, cladding transitions).",
      ],
    },
  },

  aging_in_place: {
    slug: "aging-in-place",
    title: "Aging-in-Place & Accessibility Retrofits",
    ctaLabel: "Request an Accessibility Quote",
    ctaHref: "/contact",
    anchors: {
      positioning: "Sell safety + dignity, not construction",
      speed: "Short sales cycles with standardized scopes",
    },
    serviceMenu: {
      title: "Service Menu",
      items: [
        {
          name: "Home safety walk-through + recommendations",
          typical: moneyRange(195, 395),
          includes: [
            "Fall-risk checklist",
            "Simple priority list",
            "Budget ranges",
          ],
        },
        {
          name: "Grab bars / rail systems (installed)",
          typical: moneyRange(225, 650),
          includes: [
            "Layout guidance",
            "Anchoring into framing",
            "Hardware included (standard)",
          ],
        },
        {
          name: "Door widening (typical interior)",
          typical: moneyRange(850, 1800),
          includes: [
            "Framing as needed",
            "New casing/trim",
            "Paint touch-up (basic)",
          ],
        },
      ],
    },
    pricingMatrix: {
      title: "Common Projects",
      columns: ["Entry Level", "Standard", "Premium"],
      rows: [
        {
          label: "Curbless shower conversion",
          values: [
            moneyRange(6500, 9500),
            moneyRange(9500, 14500),
            moneyRange(14500, 22000),
          ],
        },
        {
          label: "Stair solutions (handrails to lifts)",
          values: [
            moneyRange(450, 1200),
            moneyRange(1200, 4500),
            moneyRange(4500, 12000),
          ],
        },
        {
          label: "Non-slip flooring (small area)",
          values: [
            moneyRange(650, 1400),
            moneyRange(1400, 2800),
            moneyRange(2800, 5200),
          ],
        },
      ],
      finePrint: [
        "We confirm clearances, framing conditions, and finish selections before final pricing.",
      ],
    },
  },

  insurance_adjacent: {
    slug: "insurance-claims-repairs",
    title: "Insurance Claims Repairs",
    ctaLabel: "Get a Fast Triage Visit",
    ctaHref: "/contact",
    anchors: {
      positioning: "The fixer after the adjuster leaves",
      sweetSpot: "Too small for big restoration, too complex for a handyman",
    },
    serviceMenu: {
      title: "Service Menu",
      items: [
        {
          name: "Post-leak triage visit + moisture map",
          typical: moneyRange(350, 650),
          includes: [
            "Moisture readings",
            "Photo documentation",
            "Immediate next steps",
          ],
        },
        {
          name: "Partial dry-out package (small loss)",
          typical: moneyRange(900, 2500),
          includes: [
            "Equipment set",
            "Daily monitoring (typical)",
            "Simple drying log",
          ],
        },
        {
          name: "Claim documentation support",
          typical: moneyRange(250, 600),
          includes: [
            "Photo organization",
            "Scope summary",
            "Adjuster-ready notes",
          ],
        },
      ],
    },
    pricingMatrix: {
      title: "Typical Rebuild Ranges",
      columns: ["Small", "Medium", "Large"],
      rows: [
        {
          label: "Post-leak drywall/paint rebuild (single room)",
          values: [
            moneyRange(950, 2500),
            moneyRange(2500, 5200),
            moneyRange(5200, 9800),
          ],
        },
        {
          label: "Cabinet toe-kick / base repair",
          values: [
            moneyRange(650, 1500),
            moneyRange(1500, 3200),
            moneyRange(3200, 7500),
          ],
        },
        {
          label: "Small mold remediation (localized)",
          values: [
            moneyRange(1200, 2800),
            moneyRange(2800, 6500),
            moneyRange(6500, 14000),
          ],
        },
      ],
      finePrint: [
        "We can split scopes into insurance-covered and homeowner-pay portions when appropriate.",
      ],
    },
  },

  commercial_maintenance: {
    slug: "commercial-maintenance",
    title: "Small Commercial & Light Industrial Facilities Maintenance",
    ctaLabel: "Start a Service Agreement",
    ctaHref: "/commercial-service-agreements",
    anchors: {
      positioning:
        "Predictable scopes + documentation for properties under 50k sq ft",
      repeat: "Designed for repeat clients and annual agreements",
    },
    pricingMatrix: {
      title: "Typical Agreement Anchors",
      columns: ["Core", "Preferred", "Priority"],
      rows: [
        {
          label: "Under 10k sq ft",
          values: [
            moneyRange(450, 850),
            moneyRange(850, 1450),
            moneyRange(1450, 2400),
          ],
        },
        {
          label: "10k-25k sq ft",
          values: [
            moneyRange(750, 1250),
            moneyRange(1250, 2200),
            moneyRange(2200, 3600),
          ],
        },
        {
          label: "25k-50k sq ft",
          values: [
            moneyRange(1100, 1900),
            moneyRange(1900, 3200),
            moneyRange(3200, 5200),
          ],
        },
      ],
      finePrint: [
        "Monthly retainers cover scheduled site walks, documentation, and prioritized dispatch. Repairs are billed per scope with pre-approval.",
      ],
    },
    serviceMenu: {
      title: "Common Work Orders",
      items: [
        {
          name: "Tenant turn punch list (small suite)",
          typical: moneyRange(950, 3500),
          includes: [
            "Drywall/paint touch-ups",
            "Hardware/door adjustments",
            "Fixture swaps (basic)",
          ],
        },
        {
          name: "Preventive maintenance site walk",
          typical: moneyRange(250, 650),
          includes: [
            "Safety/maintenance checklist",
            "Photo punch list",
            "Budget ranges",
          ],
        },
        {
          name: "ADA compliance fixes (targeted)",
          typical: moneyRange(650, 5500),
          includes: [
            "Grab bars/rails",
            "Door hardware",
            "Signage and minor adjustments",
          ],
        },
      ],
    },
  },

  energy_comfort: {
    slug: "energy-comfort",
    title: "Energy & Comfort Retrofits",
    ctaLabel: "Book a Comfort Audit",
    ctaHref: "/contact",
    anchors: {
      positioning: "Comfort and bill reduction without solar hype",
      method: "Diagnostics + education, then targeted work",
    },
    serviceMenu: {
      title: "Service Menu",
      items: [
        {
          name: "Comfort audit (whole-home)",
          typical: moneyRange(295, 595),
          includes: [
            "Air leak assessment",
            "Insulation check",
            "Priority plan",
          ],
        },
        {
          name: "Air sealing package (targeted)",
          typical: moneyRange(1200, 3500),
          includes: [
            "Common leak points sealed",
            "Verification walk-through",
            "Before/after notes",
          ],
        },
        {
          name: "Insulation upgrade (attic typical)",
          typical: moneyRange(1800, 6500),
          includes: [
            "Baffles and air sealing as needed",
            "Blown or batt options",
            "Depth markers (as applicable)",
          ],
        },
      ],
    },
    pricingMatrix: {
      title: "Typical Upgrade Ranges",
      columns: ["Small Home", "Medium Home", "Large Home"],
      rows: [
        {
          label: "Attic insulation + air seal (combined)",
          values: [
            moneyRange(2200, 5200),
            moneyRange(5200, 9500),
            moneyRange(9500, 16500),
          ],
        },
        {
          label: "Window/door performance improvements",
          values: [
            moneyRange(450, 1800),
            moneyRange(1800, 6500),
            moneyRange(6500, 18000),
          ],
        },
        {
          label: "Crawlspace insulation/moisture combo",
          values: [
            moneyRange(1800, 4500),
            moneyRange(4500, 9000),
            moneyRange(9000, 18000),
          ],
        },
      ],
      finePrint: [
        "We focus on the highest ROI comfort fixes first: air sealing and insulation before expensive replacements.",
      ],
    },
  },
};

