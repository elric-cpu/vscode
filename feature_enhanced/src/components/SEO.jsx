import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import siteImages from "@/data/siteImages";

const SEO = ({
  title,
  description,
  schema,
  type = "website",
  image = siteImages.ogDefault,
  keywords,
}) => {
  const location = useLocation();
  const domain =
    import.meta?.env?.VITE_SITE_URL || "https://bensonhomesolutions.com";
  const canonicalUrl = `${domain}${location.pathname}`;
  const absoluteImage = image?.startsWith("http")
    ? image
    : `${domain}${image}`;

  const siteTitle = "Benson Home Solutions";
  const fullTitle = title.includes(siteTitle)
    ? title
    : `${title} | ${siteTitle}`;

  // Default LocalBusiness Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Benson Home Solutions",
    image: image,
    telephone: "(541) 321-5115",
    email: "Office@bensonhomesolutions.com",
    url: domain,
    address: {
      "@type": "PostalAddress",
      addressRegion: "OR",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoShape",
      region: ["Harney County", "Linn County"],
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {/* Explicitly allow indexing */}
      <meta name="robots" content="index, follow" />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Benson Home Solutions" />
      <meta name="publisher" content="Benson Home Solutions" />
      <meta name="geo.region" content="US-OR" />
      <meta name="geo.placename" content="Harney County, OR" />
      <meta name="geo.position" content="43.5865;-119.0540" />
      <meta name="ICBM" content="43.5865, -119.0540" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
