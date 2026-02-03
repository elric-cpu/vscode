import React from "react";
import { Link } from "react-router-dom";
import {
  Calculator,
  MapPin,
  ShieldCheck,
  LineChart,
  MessageCircle,
  Calendar,
  FileText,
  Activity,
  Smartphone,
  Gauge,
} from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CALCULATORS } from "@/data/calculators";

const groupByCategory = (items) =>
  items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

const CalculatorsHub = () => {
  const grouped = groupByCategory(CALCULATORS);

  return (
    <>
      <SEO
        title="Construction & Maintenance Calculators | Benson Home Solutions"
        description="ZIP-smart calculators for HVAC sizing, preventive maintenance ROI, energy savings, repair costs, and project estimating in Oregon."
        type="website"
      />
      <Breadcrumbs />

      <section className="bg-contractor-black text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-maroon text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <Calculator className="w-4 h-4" /> ZIP-Smart Calculators
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              Maintenance, Energy, and ROI Tools
            </h1>
            <p className="text-xl text-cream mb-4">
              Fast, localized estimates for property owners and facility teams
              across Oregon.
            </p>
            <p className="text-sm text-gray-200">
              Each calculator uses ZIP-based cost factors and default values you
              can override. Summary results are instant; detailed PDF reports
              unlock after email submission.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {Object.entries(grouped).map(([category, tools]) => (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-maroon" />
                <h2 className="text-2xl font-bold text-contractor-black m-0">
                  {category}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <Link
                    key={tool.slug}
                    to={`/resources/calculators/${tool.slug}`}
                    className="group block bg-white p-6 rounded-xl border border-gray-200 hover:border-maroon hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide m-0">
                          Interactive Tool
                        </p>
                        <h3 className="text-lg font-bold text-contractor-black group-hover:text-maroon transition-colors mt-1">
                          {tool.title}
                        </h3>
                      </div>
                      <Calculator className="w-5 h-5 text-gray-400 group-hover:text-maroon" />
                    </div>
                    <p className="text-sm text-gray-600 mt-3 mb-0">
                      {tool.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Gauge className="w-7 h-7 text-maroon" />
            <h2 className="text-3xl font-bold text-contractor-black m-0">
              Essential Digital Tools & Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Maintenance Request Portal",
                desc: "Submit, track, and manage service requests with photo uploads and status updates.",
                icon: <MessageCircle className="w-5 h-5" />,
                to: "/client-portal-login",
              },
              {
                title: "Preventive Maintenance Scheduler",
                desc: "Set recurring inspections and seasonal checklists to prevent breakdowns.",
                icon: <Calendar className="w-5 h-5" />,
                to: "/services/commercial/preventive-maintenance",
              },
              {
                title: "Document Management",
                desc: "Access service logs, compliance records, and equipment histories in one place.",
                icon: <FileText className="w-5 h-5" />,
                to: "/client-portal-login",
              },
              {
                title: "Real-Time Asset Monitoring",
                desc: "Track critical equipment status and proactive alerts for commercial facilities.",
                icon: <Activity className="w-5 h-5" />,
                to: "/services/commercial",
              },
              {
                title: "Mobile Scheduling App",
                desc: "Schedule inspections and onsite work orders directly from your phone.",
                icon: <Smartphone className="w-5 h-5" />,
                to: "/contact",
              },
              {
                title: "Live Chat / Virtual Assistant",
                desc: "Get fast answers and triage issues before they become emergencies.",
                icon: <MessageCircle className="w-5 h-5" />,
                to: "/contact",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-maroon hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3 text-maroon">
                  {item.icon}
                  <h3 className="text-lg font-bold text-contractor-black m-0">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-restoration-gray m-0">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-7 h-7 text-maroon" />
            <h2 className="text-3xl font-bold text-contractor-black m-0">
              Site Performance & Security Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Performance Monitoring",
                desc: "Track load time, lighthouse scores, and real-world field metrics.",
                icon: <Gauge className="w-5 h-5" />,
              },
              {
                title: "Security Scanning",
                desc: "Protect lead data with continuous vulnerability and malware checks.",
                icon: <ShieldCheck className="w-5 h-5" />,
              },
              {
                title: "SEO & Analytics",
                desc: "Measure which calculators and tools drive the most leads.",
                icon: <LineChart className="w-5 h-5" />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-cream border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3 text-maroon">
                  {item.icon}
                  <h3 className="text-lg font-bold text-contractor-black m-0">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-restoration-gray m-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact">
              <Button className="bg-maroon hover:bg-red-700 text-white font-bold">
                Talk With a Specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalculatorsHub;
