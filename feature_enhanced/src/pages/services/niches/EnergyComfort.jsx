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

  return (
    <NichePageTemplate
      meta={meta}
      hero={hero}
      highlights={[
        "Diagnostic-first recommendations that avoid wasted spend.",
        "Bundled scopes that pair well with maintenance programs.",
        "Better comfort now and lower bills over time.",
      ]}
      menu={data.serviceMenu}
      pricing={data.pricingMatrix}
    />
  );
}
