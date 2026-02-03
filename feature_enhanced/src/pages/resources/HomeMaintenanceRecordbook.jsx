import React from "react";
import { Download, FileText } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

const PDF_PATH = "/resources/home-maintenance-recordbook.pdf";

const HomeMaintenanceRecordbook = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Home Maintenance Recordbook",
    fileFormat: "application/pdf",
    url: PDF_PATH,
  };

  return (
    <>
      <SEO
        title="Home Maintenance Recordbook (PDF) | Benson Home Solutions"
        description="Download or view the Benson Home Solutions Home Maintenance Recordbook PDF."
        schema={schema}
        type="website"
      />

      <Breadcrumbs />

      <section className="bg-contractor-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-maroon text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <FileText className="w-4 h-4" /> PDF Resource
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Home Maintenance Recordbook
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            View online or download the fillable recordbook to track repairs,
            warranties, appliance data, and ongoing home upkeep.
          </p>
          <div className="mt-6">
            <a href={PDF_PATH} download>
              <Button className="bg-white text-maroon hover:bg-cream font-bold">
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <iframe
              title="Home Maintenance Recordbook"
              src={PDF_PATH}
              className="w-full"
              style={{ height: "80vh" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMaintenanceRecordbook;
