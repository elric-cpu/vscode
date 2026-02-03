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

  return (
    <NichePageTemplate
      meta={meta}
      hero={hero}
      highlights={[
        "Clear scope options that families can approve quickly.",
        "Safety-first installation details and clean closeout documentation.",
        "Bundles that reduce fall risk and improve daily comfort.",
      ]}
      menu={data.serviceMenu}
      pricing={data.pricingMatrix}
    />
  );
}
