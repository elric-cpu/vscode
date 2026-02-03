import React from "react";
import NichePageTemplate from "./NichePageTemplate";
import { NICHE_MENUS } from "@/data/nicheMenus";
import siteImages from "@/data/siteImages";

export default function AgingInPlace() {
  const data = NICHE_MENUS.aging_in_place;

  const meta = {
    title: data.title,
    serviceType: data.title,
    description:
      "Curbless showers, grab bars, door widening, non-slip flooring, and safer stairs. Accessibility upgrades designed for safety and dignity across Oregon.",
    seoTitle:
      "Aging-in-Place & Accessibility Retrofits Oregon | Safety Upgrades",
    seoDescription:
      "Curbless showers, grab bars, door widening, non-slip flooring, and safer stairs. Accessibility upgrades designed for safety and dignity across Oregon.",
    keywords:
      "aging in place contractor Oregon, grab bar installation, curbless shower, accessibility retrofit, ADA home modifications, door widening",
  };

  const hero = {
    badge: "Demographic Certainty",
    h1: "Aging-in-Place & Accessibility Retrofits",
    subhead:
      "Safety + dignity upgrades with standardized scopes and fast estimates.",
    imageSrc: siteImages.placeholder,
    imageAlt: "Accessible bathroom retrofit with safety features",
    primaryCtaLabel: "Request a Safety Walk-Through",
    primaryCtaHref: "/contact",
  };

  const faqs = [
    {
      question: "What are the most common aging-in-place upgrades?",
      answer:
        "Grab bars, curbless showers, non-slip flooring, stair safety improvements, and wider door clearances are the most common.",
    },
    {
      question: "Do you offer ADA-compliant modifications?",
      answer:
        "Yes. We can align the scope with ADA guidelines and accessibility best practices.",
    },
    {
      question: "How long does a bathroom retrofit take?",
      answer:
        "Most bathroom safety upgrades take 1-2 weeks depending on scope and material availability.",
    },
    {
      question: "Can you stage the work for budget reasons?",
      answer:
        "Yes. We can prioritize safety-critical items first and schedule additional upgrades later.",
    },
    {
      question: "Will you help us choose products?",
      answer:
        "Yes. We recommend safe, durable products and can work with family or caregiver preferences.",
    },
    {
      question: "Is financing available?",
      answer:
        "We can discuss payment options and provide guidance on local assistance programs where available.",
    },
    {
      question: "Do you coordinate with occupational therapists?",
      answer:
        "We can collaborate with therapists or care teams to ensure upgrades meet mobility needs.",
    },
    {
      question: "What is the first step?",
      answer:
        "Schedule a safety walk-through and we will provide a prioritized scope and estimate.",
    },
  ];

  return (
    <NichePageTemplate
      meta={meta}
      hero={hero}
      highlights={[
        "Clear scope options that families can approve quickly.",
        "Safety-first installation details and clean closeout documentation.",
        "Bundles that reduce fall risk and improve daily comfort.",
      ]}
      faqs={faqs}
      menu={data.serviceMenu}
      pricing={data.pricingMatrix}
    />
  );
}
