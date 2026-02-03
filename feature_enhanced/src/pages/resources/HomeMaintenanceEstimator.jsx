import React from "react";
import { Calculator, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import HomeMaintenanceEstimatorWizard from "@/components/maintenance-estimator/HomeMaintenanceEstimatorWizard";

const HomeMaintenanceEstimator = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Home Maintenance Estimator",
    description:
      "Interactive estimator for Benson Home Solutions home maintenance programs.",
  };

  return (
    <>
      <SEO
        title="Home Maintenance Estimator | Benson Home Solutions"
        description="Interactive home maintenance estimator. Select your home size, enter your info, and view an estimate instantly."
        schema={schema}
        type="website"
      />

      <Breadcrumbs />

      <section className="bg-contractor-black text-white py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-maroon text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Calculator className="w-4 h-4" />
            Interactive Estimator
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Home Maintenance Estimator
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Choose your home size, enter your information, and view your
            estimate. We will follow up to confirm scope and availability.
          </p>
          <div className="mt-6">
            <a href="tel:5413215115">
              <Button className="bg-white text-maroon hover:bg-cream font-bold">
                <Phone className="w-4 h-4 mr-2" /> Call (541) 321-5115
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <HomeMaintenanceEstimatorWizard />

          <p className="text-xs text-gray-500 mt-6">
            Privacy: We only use this information to provide the estimate and
            follow up about your maintenance program.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeMaintenanceEstimator;
