import React from "react";
import NichePageTemplate from "./NichePageTemplate";
import { NICHE_MENUS } from "@/data/nicheMenus";
import siteImages from "@/data/siteImages";

export default function MoistureEnvelope() {
  const data = NICHE_MENUS.moisture_envelope;

  const meta = {
    title: data.title,
    serviceType: data.title,
    description:
      "Pre-loss moisture diagnostics and targeted repairs: flashing corrections, crawlspace mitigation, leak diagnostics, and drainage fixes. Serving Harney County & Mid-Valley Oregon.",
    seoTitle:
      "Water Intrusion & Moisture Control Oregon | Envelope Diagnostics",
    seoDescription:
      "Pre-loss moisture diagnostics and targeted repairs: flashing corrections, crawlspace mitigation, leak diagnostics, and drainage fixes. Serving Harney County & Mid-Valley Oregon.",
    keywords:
      "water intrusion repair Oregon, moisture control contractor, leak diagnostics, window flashing correction, crawlspace moisture mitigation, drainage grading",
  };

  const hero = {
    badge: "Silent Goldmine",
    h1: "Water Intrusion, Envelope & Moisture Control",
    subhead:
      "Pre-loss moisture work that stops damage early... before it becomes a claim.",
    imageSrc: siteImages.placeholder,
    imageAlt: "Moisture inspection and building envelope diagnostics",
    primaryCtaLabel: "Book a Moisture Assessment",
    primaryCtaHref: "/contact",
  };

  return (
    <NichePageTemplate
      meta={meta}
      hero={hero}
      highlights={[
        "Fast diagnostics with photos and clear recommendations.",
        "Small, targeted scopes with strong long-term reliability.",
        "Documentation for homeowners, property managers, and future resale.",
      ]}
      menu={data.serviceMenu}
      pricing={data.pricingMatrix}
    />
  );
}
