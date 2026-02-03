import React from "react";
import { Download, FileText, Info } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

const PDF_PATH = "/resources/home-restoration-resource-guide.pdf";

const HomeRestorationResourceGuide = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Resource Guide for Home Restoration",
    fileFormat: "application/pdf",
    url: PDF_PATH,
  };

  return (
    <>
      <SEO
        title="Resource Guide for Home Restoration (PDF) | Benson Home Solutions"
        description="Download or view the Benson Home Solutions Resource Guide for Home Restoration PDF."
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
            Resource Guide for Home Restoration
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            View online or download the restoration resource guide.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={PDF_PATH} download>
              <Button className="bg-white text-maroon hover:bg-cream font-bold">
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </Button>
            </a>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Info className="w-4 h-4" />
              If the PDF is not displaying yet, add the file to{" "}
              <span className="font-semibold">/public/resources</span>.
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <iframe
              title="Resource Guide for Home Restoration"
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

export default HomeRestorationResourceGuide;
