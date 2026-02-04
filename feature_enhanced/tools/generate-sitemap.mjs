import { writeFile } from "node:fs/promises";
import { serviceAreaData } from "../src/data/serviceAreas.js";
import { CALCULATOR_ROUTES } from "../src/data/calculators.js";
import { GUIDE_ROUTES } from "../src/data/guides.js";

const baseUrl = "https://bensonhomesolutions.com";
const today = new Date().toISOString().slice(0, 10);

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/reviews",
  "/blog",
  "/resources",
  "/resources-help",
  "/service-areas",
  "/sitemap",
];

const serviceRoutes = [
  "/water-damage-restoration",
  "/mold-remediation",
  "/fire-smoke-damage",
  "/bathroom-remodels",
  "/kitchen-remodels",
  "/inspection-repairs",
  "/maintenance-plans",
  "/moisture-control",
  "/accessibility-retrofits",
  "/insurance-claims-repairs",
  "/energy-comfort-retrofits",
  "/commercial-maintenance",
  "/commercial/tenant-turns",
  "/commercial/preventive-maintenance",
  "/commercial/emergency-repairs",
  "/commercial/ada-compliance",
  "/commercial-service-agreements",
];

const resourceRoutes = [
  "/resources/calculators",
  "/resources/home-maintenance-estimator",
  "/resources/home-maintenance-recordbook",
  "/resources/home-restoration-resource-guide",
  "/resources/bathroom-remodel-roi",
  "/resources/kitchen-remodel-roi",
  "/resources/water-damage-restoration-guide",
  "/resources/ada-aging-in-place-guide",
  ...GUIDE_ROUTES.map((route) => route.path),
  ...CALCULATOR_ROUTES.map((route) => route.path),
];

const blogRoutes = [
  "/blog/water-damage-insurance-oregon",
  "/blog/hidden-water-damage-signs",
  "/blog/first-24-hours-water-damage",
  "/blog/mold-vs-mildew",
  "/blog/bathroom-remodel-costs",
];

const landingRoutes = [
  "/landing/residential-maintenance-programs.html",
  "/landing/residential-maintenance-pricing.html",
];

const serviceAreaRoutes = [];

if (serviceAreaData?.["harney-county"]?.towns) {
  serviceAreaRoutes.push("/service-areas/harney-county");
  serviceAreaData["harney-county"].towns.forEach((town) => {
    serviceAreaRoutes.push(`/service-areas/harney-county/${town.slug}`);
  });
}

if (serviceAreaData?.["mid-valley"]?.counties) {
  serviceAreaRoutes.push("/service-areas/mid-willamette-valley");
  Object.values(serviceAreaData["mid-valley"].counties).forEach((county) => {
    county.towns.forEach((town) => {
      serviceAreaRoutes.push(`/service-areas/mid-valley/${town.slug}`);
    });
  });
}

const normalizePath = (path) => (path.startsWith("/") ? path : `/${path}`);
const routes = new Set(
  [
    ...staticRoutes,
    ...serviceRoutes,
    ...resourceRoutes,
    ...blogRoutes,
    ...landingRoutes,
    ...serviceAreaRoutes,
  ].map(normalizePath),
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...routes]
  .sort()
  .map((path) => `  <url><loc>${baseUrl}${path}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n")}
</urlset>
`;

await writeFile(new URL("../public/sitemap.xml", import.meta.url), xml, "utf8");
console.log(`Sitemap generated with ${routes.size} routes.`);
