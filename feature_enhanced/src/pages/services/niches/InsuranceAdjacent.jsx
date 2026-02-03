import React from "react";
import NichePageTemplate from "./NichePageTemplate";
import { NICHE_MENUS } from "@/data/nicheMenus";
import siteImages from "@/data/siteImages";

export default function InsuranceAdjacent() {
  const data = NICHE_MENUS.insurance_adjacent;

  const meta = {
    title: data.title,
    serviceType: data.title,
    description:
      "The fixer after the adjuster leaves: partial dry-outs, post-leak rebuilds, small mold remediation, and documentation support for denied or partial claims.",
    seoTitle:
      "Insurance-Adjacent Repairs Oregon | Post-Leak Rebuilds & Documentation",
    seoDescription:
      "The fixer after the adjuster leaves: partial dry-outs, post-leak rebuilds, small mold remediation, and documentation support for denied or partial claims.",
    keywords:
      "post leak rebuild Oregon, partial dry out, insurance denied repairs, claim documentation support, small mold remediation, water damage repair",
  };

  const hero = {
    badge: "Documentation-Heavy",
    h1: "Insurance-Adjacent Specialty Work",
    subhead:
      "Too small for big restoration. Too complex for a handyman. We handle the gray zone.",
    imageSrc: siteImages.placeholder,
    imageAlt: "Documentation and repair planning after a leak",
    primaryCtaLabel: "Get a Triage Quote",
    primaryCtaHref: "/contact",
  };

  const faqs = [
    {
      question: "What does \"insurance-adjacent\" mean?",
      answer:
        "We handle repairs that fall outside or after an insurance claim—partial approvals, denied claims, or small scopes.",
    },
    {
      question: "Can you help with documentation for my claim?",
      answer:
        "Yes. We provide photos, moisture logs, and scope documentation that can support claim discussions.",
    },
    {
      question: "Do you handle post-leak rebuilds?",
      answer:
        "Yes. We repair drywall, flooring, trim, and finishes after the drying phase is complete.",
    },
    {
      question: "Will you coordinate with my adjuster?",
      answer:
        "We can communicate with adjusters to clarify scope, but final coverage decisions are made by the insurer.",
    },
    {
      question: "What if the claim is denied?",
      answer:
        "We can still complete the repair with a clear, homeowner-funded scope and fair pricing.",
    },
    {
      question: "Do you provide mold remediation for small areas?",
      answer:
        "Yes. We handle small, contained remediation projects and recommend specialists for large-scale issues.",
    },
    {
      question: "How fast can you start?",
      answer:
        "Most small scopes can start within 1-2 weeks depending on materials and scheduling.",
    },
    {
      question: "What is the first step?",
      answer:
        "Contact us for a triage walkthrough and we will outline the smallest reliable fix.",
    },
  ];

  return (
    <NichePageTemplate
      meta={meta}
      hero={hero}
      highlights={[
        "Fast response and clear documentation for next steps.",
        "Capture both insurance-paid and homeowner-pay portions cleanly.",
        "Small scopes executed to code with a professional closeout.",
      ]}
      faqs={faqs}
      menu={data.serviceMenu}
      pricing={data.pricingMatrix}
    />
  );
}
