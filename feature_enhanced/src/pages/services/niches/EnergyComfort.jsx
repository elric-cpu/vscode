import React from "react";
import NichePageTemplate from "./NichePageTemplate";
import { NICHE_MENUS } from "@/data/nicheMenus";
import siteImages from "@/data/siteImages";

export default function EnergyComfort() {
  const data = NICHE_MENUS.energy_comfort;

  const meta = {
    title: data.title,
    serviceType: data.title,
    description:
      "Comfort audits, air sealing, insulation upgrades, and performance improvements for windows and doors. Reduce drafts, improve comfort, and lower bills.",
    seoTitle:
      "Energy & Comfort Retrofits Oregon | Air Sealing & Insulation Upgrades",
    seoDescription:
      "Comfort audits, air sealing, insulation upgrades, and performance improvements for windows and doors. Reduce drafts, improve comfort, and lower bills.",
    keywords:
      "air sealing Oregon, insulation upgrade contractor, comfort audit, draft reduction, window door performance, energy retrofit not solar",
  };

  const hero = {
    badge: "Comfort-First",
    h1: "Energy & Comfort Retrofits",
    subhead:
      "Reduce drafts and improve comfort with diagnostics and targeted upgrades... not hype.",
    imageSrc: siteImages.placeholder,
    imageAlt: "Home energy efficiency work and insulation upgrade",
    primaryCtaLabel: "Book a Comfort Audit",
    primaryCtaHref: "/contact",
  };

  const faqs = [
    {
      question: "What is a comfort audit?",
      answer:
        "A comfort audit evaluates drafts, insulation gaps, and HVAC performance to identify the highest-ROI upgrades.",
    },
    {
      question: "Do you offer insulation upgrades?",
      answer:
        "Yes. We handle targeted insulation and air sealing improvements to reduce drafts and improve comfort.",
    },
    {
      question: "Will this reduce my energy bill?",
      answer:
        "Most projects improve comfort immediately and reduce bills over time, especially when paired with HVAC tuning.",
    },
    {
      question: "Is this the same as solar or full energy retrofits?",
      answer:
        "No. We focus on envelope and comfort improvements that deliver quick, practical results without major systems.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Small scopes can be completed in 1-3 days; larger scopes may take 1-2 weeks.",
    },
    {
      question: "Can you bundle this with maintenance?",
      answer:
        "Yes. Many clients combine comfort upgrades with annual maintenance to maximize ROI.",
    },
    {
      question: "Do you provide before/after testing?",
      answer:
        "We document findings and can provide airflow and insulation notes for comparison.",
    },
    {
      question: "What is the first step?",
      answer:
        "Book a comfort audit and we will recommend the smallest reliable fix first.",
    },
  ];

  return (
    <NichePageTemplate
      meta={meta}
      hero={hero}
      highlights={[
        "Diagnostic-first recommendations that avoid wasted spend.",
        "Bundled scopes that pair well with maintenance programs.",
        "Better comfort now and lower bills over time.",
      ]}
      faqs={faqs}
      menu={data.serviceMenu}
      pricing={data.pricingMatrix}
    />
  );
}
