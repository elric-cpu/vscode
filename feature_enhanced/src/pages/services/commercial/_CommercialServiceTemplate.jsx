import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/faq/FaqSection";
import { buildFaqSchema } from "@/lib/seo/faqSchema";

export default function CommercialServiceTemplate({
  title,
  description,
  bullets,
  seoTitle,
  seoDescription,
  keywords,
  faqs = [],
}) {
  const faqSchema = faqs.length ? buildFaqSchema(faqs) : null;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={keywords}
        schema={faqSchema ? [faqSchema] : undefined}
      />
      <Breadcrumbs />

      <section className="bg-contractor-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-cream max-w-3xl">{description}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/services/commercial/service-agreements">
              <Button
                size="lg"
                className="bg-maroon hover:bg-opacity-90 text-white w-full sm:w-auto"
              >
                Service Agreements
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:5413215115">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cream text-cream hover:bg-cream hover:text-contractor-black w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (541) 321-5115
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-contractor-black mb-6">
            What’s Included
          </h2>
          <div className="space-y-3">
            {bullets.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-maroon flex-shrink-0 mt-1" />
                <span className="text-restoration-gray">{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg bg-cream border border-gray-200">
            <h3 className="text-xl font-bold text-contractor-black mb-2">
              Want predictable budgeting?
            </h3>
            <p className="text-restoration-gray mb-4">
              We offer annual agreements with defined response times, scheduled
              walkthroughs, and documentation for your records.
            </p>
            <Link to="/services/commercial/service-agreements">
              <Button className="bg-maroon hover:bg-opacity-90 text-white">
                Start the Agreement Funnel
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} className="bg-white" />
    </>
  );
}
