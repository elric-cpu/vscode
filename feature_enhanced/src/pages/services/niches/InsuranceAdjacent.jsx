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

  return (
    <NichePageTemplate
      meta={meta}
      hero={hero}
      highlights={[
        "Fast response and clear documentation for next steps.",
        "Capture both insurance-paid and homeowner-pay portions cleanly.",
        "Small scopes executed to code with a professional closeout.",
      ]}
      menu={data.menu}
      pricing={data.pricingMatrix}
    />
  );
}
