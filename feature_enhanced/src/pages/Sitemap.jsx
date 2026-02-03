import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { serviceAreaData } from "@/data/serviceAreas";
import { CALCULATOR_ROUTES } from "@/data/calculators";

const Sitemap = () => {
  // Static Routes
  const mainRoutes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/services", name: "Services Overview" },
    { path: "/contact", name: "Contact" },
    { path: "/reviews", name: "Reviews" },
    { path: "/blog", name: "Blog" },
    { path: "/resources", name: "Resources" },
    { path: "/resources-help", name: "Resources Help" },
    { path: "/sitemap", name: "Sitemap" },
  ];

  const serviceRoutes = [
    {
      path: "/services/water-damage-mitigation",
      name: "Water Damage Mitigation",
    },
    { path: "/services/mold-remediation", name: "Mold Remediation" },
    { path: "/services/bathroom-remodels", name: "Bathroom Remodels" },
    { path: "/services/kitchen-remodels", name: "Kitchen Remodels" },
    { path: "/services/general-contracting", name: "General Contracting" },
    {
      path: "/services/residential-maintenance",
      name: "Residential Maintenance Programs",
    },
    {
      path: "/services/moisture-envelope",
      name: "Water Intrusion, Envelope & Moisture Control",
    },
    {
      path: "/services/aging-in-place",
      name: "Aging-in-Place & Accessibility Retrofits",
    },
    {
      path: "/services/insurance-adjacent",
      name: "Insurance-Adjacent Specialty Work",
    },
    { path: "/services/energy-comfort", name: "Energy & Comfort Retrofits" },
    { path: "/services/commercial", name: "Commercial Maintenance" },
    {
      path: "/services/commercial/tenant-turns",
      name: "Commercial Tenant Turns",
    },
    {
      path: "/services/commercial/preventive-maintenance",
      name: "Commercial Preventive Maintenance",
    },
    {
      path: "/services/commercial/emergency-repairs",
      name: "Emergency Commercial Repairs",
    },
    {
      path: "/services/commercial/ada-compliance",
      name: "ADA Compliance Fixes",
    },
    {
      path: "/services/commercial/service-agreements",
      name: "Commercial Service Agreements",
    },
  ];

  const resourceRoutes = [
    { path: "/resources/calculators", name: "ZIP-Smart Calculators" },
    {
      path: "/resources/home-maintenance-estimator",
      name: "Home Maintenance Estimator",
    },
    {
      path: "/resources/home-maintenance-recordbook",
      name: "Home Maintenance Recordbook (PDF)",
    },
    {
      path: "/resources/home-restoration-resource-guide",
      name: "Resource Guide for Home Restoration (PDF)",
    },
    { path: "/resources/bathroom-remodel-roi", name: "Bathroom Remodel ROI" },
    { path: "/resources/kitchen-remodel-roi", name: "Kitchen Remodel ROI" },
    {
      path: "/resources/water-damage-mitigation-guide",
      name: "Water Damage Mitigation Guide",
    },
    {
      path: "/resources/ada-aging-in-place-guide",
      name: "ADA & Aging in Place Guide",
    },
    ...CALCULATOR_ROUTES,
  ];

  const landingRoutes = [
    {
      path: "/landing/residential-maintenance-programs.html",
      name: "Residential Maintenance Programs (Landing)",
    },
    {
      path: "/landing/residential-maintenance-pricing.html",
      name: "Residential Maintenance Pricing Sheet",
    },
  ];

  const blogRoutes = [
    {
      path: "/blog/water-damage-insurance-oregon",
      name: "Water Damage Insurance Guide",
    },
    {
      path: "/blog/hidden-water-damage-signs",
      name: "Hidden Water Damage Signs",
    },
    {
      path: "/blog/first-24-hours-water-damage",
      name: "First 24 Hours After Water Damage",
    },
    { path: "/blog/mold-vs-mildew", name: "Mold vs Mildew" },
    { path: "/blog/bathroom-remodel-costs", name: "Bathroom Remodel Costs" },
  ];

  // Helper to flatten service area data
  const getServiceAreaRoutes = () => {
    const routes = [];

    // Harney County
    if (serviceAreaData?.["harney-county"]?.towns) {
      serviceAreaData["harney-county"].towns.forEach((town) => {
        routes.push({
          path: `/service-areas/harney-county/${town.slug}`,
          name: `${town.name}, OR - Harney County`,
        });
      });
    }

    // Mid-Valley
    if (serviceAreaData?.["mid-valley"]?.counties) {
      Object.entries(serviceAreaData["mid-valley"].counties).forEach(
        ([countySlug, countyData]) => {
          if (countyData.towns) {
            countyData.towns.forEach((town) => {
              routes.push({
                path: `/service-areas/mid-valley/${town.slug}`,
                name: `${town.name}, OR - ${countyData.label}`,
              });
            });
          }
        },
      );
    }

    return routes;
  };

  const serviceAreaRoutes = getServiceAreaRoutes();

  return (
    <>
      <SEO
        title="Sitemap | Benson Home Solutions"
        description="Complete list of pages on Benson Home Solutions website."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-contractor-black mb-8">
          Sitemap
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4 border-b border-gray-200 pb-2">
              Main Pages
            </h2>
            <ul className="space-y-2">
              {mainRoutes.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className="text-gray-700 hover:text-maroon hover:underline"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4 border-b border-gray-200 pb-2">
              Services
            </h2>
            <ul className="space-y-2">
              {serviceRoutes.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className="text-gray-700 hover:text-maroon hover:underline"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4 border-b border-gray-200 pb-2">
              Resources
            </h2>
            <ul className="space-y-2">
              {resourceRoutes.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className="text-gray-700 hover:text-maroon hover:underline"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4 border-b border-gray-200 pb-2">
              Landing Pages
            </h2>
            <ul className="space-y-2">
              {landingRoutes.map((route) => (
                <li key={route.path}>
                  <a
                    href={route.path}
                    className="text-gray-700 hover:text-maroon hover:underline"
                  >
                    {route.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4 border-b border-gray-200 pb-2">
              Blog Posts
            </h2>
            <ul className="space-y-2">
              {blogRoutes.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className="text-gray-700 hover:text-maroon hover:underline"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-maroon mb-4 border-b border-gray-200 pb-2">
              Service Areas
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {serviceAreaRoutes.map((route) => (
                <div key={route.path}>
                  <Link
                    to={route.path}
                    className="text-gray-700 hover:text-maroon hover:underline block truncate"
                  >
                    {route.name}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
