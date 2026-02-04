import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileText,
  Award,
  Droplets,
  AlertTriangle,
  Phone,
  ExternalLink,
  CheckCircle,
  Calculator,
  HelpCircle,
  MapPin,
  BookOpen,
  Anchor,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import siteImages from "@/data/siteImages";
import VisualBlock from "@/components/VisualBlock";
import { GUIDES } from "@/data/guides";
import NextStepsBlock from "@/components/internal-links/NextStepsBlock";
import LocationsServedBlock from "@/components/internal-links/LocationsServedBlock";
import {
  GEO_HUB_LINKS,
  MAINTENANCE_LINKS,
  SERVICE_PILLAR_LINKS,
} from "@/data/internalLinks";

const Resources = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    mainEntity: {
      "@type": "Organization",
      name: "Benson Enterprises LLC",
      alternateName: "Benson Home Solutions",
      memberOf: {
        "@type": "Organization",
        name: "Harney County Chamber of Commerce",
        url: "https://www.harneycountychamber.org",
      },
      areaServed: [
        "Harney County",
        "Linn County",
        "Marion County",
        "Polk County",
        "Yamhill County",
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I have to use the restoration company my insurance recommends?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. In Oregon, you have the legal right to hire any licensed contractor you choose. You are not obligated to use your insurer's preferred vendor list.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if a restoration contractor is qualified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Look for IICRC certification, verification of an active CCB license in Oregon, valid insurance, and membership in local organizations like the Chamber of Commerce.",
        },
      },
    ],
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const nextSteps = [
    {
      ...MAINTENANCE_LINKS.home,
      cta: "Explore plans",
    },
    {
      ...MAINTENANCE_LINKS.commercial,
      cta: "Review coverage",
    },
    {
      ...SERVICE_PILLAR_LINKS.water,
      cta: "Emergency response",
    },
    {
      ...SERVICE_PILLAR_LINKS.inspection,
      cta: "Inspection repairs",
    },
  ];

  return (
    <>
      <SEO
        title="Oregon Home Restoration Resources | Benson Home Solutions"
        description="Professional guides, calculators, and homeowner resources for restoration, maintenance planning, and insurance documentation across Oregon."
        keywords="Oregon home restoration resources, water damage guide, insurance claim documentation, maintenance checklist, home maintenance estimator, maintenance calculators, Oregon contractor resources, client portal, subcontractor portal"
        schema={[schema, faqSchema]}
        type="website"
        image={siteImages.ogDefault}
      />

      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-contractor-black text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-90">
          <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            Homeowner Knowledge Base
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Practical Resources for Home Restoration in Oregon
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Guides, calculators, and checklists for water damage, maintenance,
            and inspection repairs across Harney County and the Mid-Willamette
            Valley.
          </p>
          <div className="max-w-lg mx-auto mb-8">
            <VisualBlock
              variant="slate"
              eyebrow="Tools & Guides"
              title="Oregon Homeowner Resource Center"
              subtitle="Actionable checklists, calculators, and restoration guidance built for Oregon conditions."
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollToSection("homeowner-rights")}
              className="bg-maroon hover:bg-red-700 text-white font-bold px-6 py-6"
            >
              Know Your Rights
            </Button>
            <Button
              onClick={() => scrollToSection("emergency-preparedness")}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-contractor-black font-bold px-6 py-6"
            >
              Emergency Prep
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8 space-y-16">
            {/* Tools & Downloads */}
            <section id="tools-downloads" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Anchor className="w-8 h-8 text-maroon" />
                <h2 className="text-3xl font-bold text-contractor-black m-0">
                  Tools & Downloads
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link
                  to="/resources/home-maintenance-estimator"
                  className="group block bg-white p-6 rounded-xl border border-gray-200 hover:border-maroon hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide m-0">
                        Interactive Tool
                    </p>
                    <h3 className="text-lg font-bold text-contractor-black group-hover:text-maroon transition-colors mt-1">
                      Home Maintenance Estimator
                    </h3>
                  </div>
                    <HelpCircle className="w-5 h-5 text-gray-400 group-hover:text-maroon" />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 mb-0">
                    Quick cost range for annual maintenance with ZIP context.
                  </p>
                </Link>

                <Link
                  to="/resources/calculators"
                  className="group block bg-white p-6 rounded-xl border border-gray-200 hover:border-maroon hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide m-0">
                        Calculators
                      </p>
                      <h3 className="text-lg font-bold text-contractor-black group-hover:text-maroon transition-colors mt-1">
                        Maintenance & ROI Calculators
                      </h3>
                    </div>
                    <Calculator className="w-5 h-5 text-gray-400 group-hover:text-maroon" />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 mb-0">
                    HVAC sizing, energy savings, repair costs, and more with ZIP
                    code adjustments.
                  </p>
                </Link>

                <Link
                  to="/resources/home-maintenance-recordbook"
                  className="group block bg-white p-6 rounded-xl border border-gray-200 hover:border-maroon hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide m-0">
                        PDF Download
                      </p>
                      <h3 className="text-lg font-bold text-contractor-black group-hover:text-maroon transition-colors mt-1">
                        Home Maintenance Recordbook
                      </h3>
                    </div>
                    <FileText className="w-5 h-5 text-gray-400 group-hover:text-maroon" />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 mb-0">
                    Track repairs, appliances, warranties, and seasonal tasks.
                  </p>
                </Link>

                <Link
                  to="/resources/home-restoration-resource-guide"
                  className="group block bg-white p-6 rounded-xl border border-gray-200 hover:border-maroon hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide m-0">
                        PDF Download
                      </p>
                      <h3 className="text-lg font-bold text-contractor-black group-hover:text-maroon transition-colors mt-1">
                        Resource Guide for Home Restoration
                      </h3>
                    </div>
                    <FileText className="w-5 h-5 text-gray-400 group-hover:text-maroon" />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 mb-0">
                    Step-by-step restoration guide for Oregon homeowners.
                  </p>
                </Link>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                Prefer direct PDFs?{" "}
                <a
                  href="/resources/home-maintenance-recordbook.pdf"
                  className="text-maroon font-semibold hover:underline"
                >
                  Download the Recordbook
                </a>{" "}
                or{" "}
                <a
                  href="/resources/home-restoration-resource-guide.pdf"
                  className="text-maroon font-semibold hover:underline"
                >
                  download the Restoration Guide
                </a>
                .
              </div>
            </section>

            {/* Guides */}
            <section id="guides" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-maroon" />
                <h2 className="text-3xl font-bold text-contractor-black m-0">
                  Guides & Checklists
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {GUIDES.map((guide) => (
                  <Link
                    key={guide.slug}
                    to={`/resources/guides/${guide.slug}`}
                    className="group block bg-white p-6 rounded-xl border border-gray-200 hover:border-maroon hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide m-0">
                          {guide.category}
                        </p>
                        <h3 className="text-lg font-bold text-contractor-black group-hover:text-maroon transition-colors mt-1">
                          {guide.title}
                        </h3>
                      </div>
                      <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-maroon" />
                    </div>
                    <p className="text-sm text-gray-600 mt-3 mb-0">
                      {guide.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Portals */}
            <section id="portals" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-maroon" />
                <h2 className="text-3xl font-bold text-contractor-black m-0">
                  Portals & Account Access
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/client-portal-login"
                  className="group block bg-white p-6 rounded-xl border border-gray-200 hover:border-maroon hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide m-0">
                        Client Portal
                      </p>
                      <h3 className="text-lg font-bold text-contractor-black group-hover:text-maroon transition-colors mt-1">
                        Client Portal Login
                      </h3>
                    </div>
                    <Users className="w-5 h-5 text-gray-400 group-hover:text-maroon" />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 mb-0">
                    Access project updates, documents, invoices, and schedules.
                  </p>
                </Link>

                <Link
                  to="/subcontractor-portal-login"
                  className="group block bg-white p-6 rounded-xl border border-gray-200 hover:border-maroon hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide m-0">
                        Partner Portal
                      </p>
                      <h3 className="text-lg font-bold text-contractor-black group-hover:text-maroon transition-colors mt-1">
                        Subcontractor Portal Login
                      </h3>
                    </div>
                    <Users className="w-5 h-5 text-gray-400 group-hover:text-maroon" />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 mb-0">
                    View work orders, reporting requirements, and schedules.
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 1: Homeowner Rights */}
            <section id="homeowner-rights" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-maroon" />
                <h2 className="text-3xl font-bold text-contractor-black m-0">
                  Know Your Rights as an Oregon Homeowner
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Navigating insurance claims can be intimidating, but Oregon
                  law provides strong protections for homeowners to prevent
                  coercion. The most critical right you possess during a
                  disaster is the <strong>Right to Choose</strong>.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
                  <h3 className="text-xl font-bold text-yellow-900 mt-0">
                    Crucial Fact:
                  </h3>
                  <p className="mb-0 text-yellow-900">
                    You do <strong>NOT</strong> have to use your insurance
                    company's preferred vendors. While adjusters may strongly
                    suggest a specific restoration company, they cannot force
                    you to use them.
                  </p>
                </div>
                <p>
                  If an insurance carrier pressures you, remind them that you
                  have selected a contractor you trust. You have the right to
                  select <strong>Benson Home Solutions</strong> (Benson
                  Enterprises LLC) or any other qualified, licensed contractor
                  for your restoration work.
                </p>
                <h4 className="font-bold text-gray-900 mt-4">Helpful Links:</h4>
                <ul className="not-prose space-y-2 mt-2">
                  <li>
                    <a
                      href="https://dfr.oregon.gov/Pages/index.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Oregon Division of
                      Financial Regulation (DFR)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.doj.state.or.us/consumer-protection/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Oregon Attorney
                      General Consumer Protection
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 2: Certified Contractors */}
            <section id="certified-contractors" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-maroon" />
                <h2 className="text-3xl font-bold text-contractor-black m-0">
                  Finding Certified & Qualified Contractors
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Not all contractors are created equal. In the restoration
                  industry, the gold standard is the{" "}
                  <strong>
                    IICRC (Institute of Inspection, Cleaning and Restoration
                    Certification)
                  </strong>
                  . An IICRC-certified firm has undergone rigorous training to
                  understand the science of drying and ethics of restoration.
                </p>
                <h3 className="text-xl font-bold text-gray-900">
                  Verify Before You Hire:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>IICRC Certification:</strong>{" "}
                    <a
                      href="https://www.iicrc.org/search/custom.asp?id=4785"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Verify a Pro here
                    </a>
                    .
                  </li>
                  <li>
                    <strong>CCB Licensing:</strong> Always check the{" "}
                    <a
                      href="https://www.oregon.gov/ccb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Oregon Construction Contractors Board
                    </a>{" "}
                    for active licenses and complaint history.
                  </li>
                  <li>
                    <strong>Local Reputation:</strong> Check Google Reviews and
                    membership in local bodies like the{" "}
                    <strong>Harney County Chamber of Commerce</strong>.
                  </li>
                </ul>
                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <p className="font-bold text-blue-900 m-0 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-maroon" />
                    Benson Home Solutions (Benson Enterprises LLC) is IICRC
                    Certified and a proud member of the Harney County Chamber of
                    Commerce.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 3: Water Damage Info */}
            <section id="water-damage-info" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="w-8 h-8 text-maroon" />
                <h2 className="text-3xl font-bold text-contractor-black m-0">
                  Water Damage Restoration Standards
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Proper restoration follows the <strong>S500 Standard</strong>{" "}
                  set by the IICRC. Understanding the category of water is
                  crucial:
                </p>
                <div className="grid md:grid-cols-3 gap-4 not-prose my-6">
                  <div className="border border-gray-200 p-4 rounded bg-white shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Category 1 (Clean)
                    </h4>
                    <p className="text-sm text-gray-600">
                      Broken pipes, supply lines. Safe to dry in place if caught
                      quickly.
                    </p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded bg-white shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Category 2 (Gray)
                    </h4>
                    <p className="text-sm text-gray-600">
                      Washing machine discharge, dishwasher. Contains
                      chemicals/bacteria.
                    </p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded bg-white shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Category 3 (Black)
                    </h4>
                    <p className="text-sm text-gray-600">
                      Sewage, flood waters. Grossly unsanitary. Materials must
                      be removed.
                    </p>
                  </div>
                </div>
                <p>
                  <strong>Regional Note:</strong> In{" "}
                  <strong>Harney County</strong>, freeze-thaw cycles often cause
                  burst pipes in exterior walls. In the{" "}
                  <strong>Willamette Valley</strong>, high humidity means drying
                  must be aggressive to prevent secondary mold growth.
                </p>
                <h4 className="font-bold text-gray-900 mt-4">
                  Industry Resources:
                </h4>
                <ul className="not-prose grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  <li>
                    <a
                      href="https://www.iicrc.org"
                      className="text-blue-600 hover:underline flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> IICRC Standards
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.restorationindustry.org"
                      className="text-blue-600 hover:underline flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Restoration Industry
                      Association
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Sections 4-6: Hazards (Asbestos, Mold, Lead) */}
            <section id="hazards" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-maroon" />
                <h2 className="text-3xl font-bold text-contractor-black m-0">
                  Hazardous Materials: Asbestos, Mold & Lead
                </h2>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-contractor-black mb-3">
                    Asbestos in Oregon
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Any renovation or demolition in a home built before 2004
                    typically requires an asbestos survey in Oregon. Disturbing
                    asbestos releases fibers that cause lung cancer and
                    mesothelioma.
                  </p>
                  <a
                    href="https://www.oregon.gov/deq/aq/Pages/Asbestos.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon font-bold hover:underline flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Oregon DEQ Asbestos
                    Information
                  </a>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-contractor-black mb-3">
                    Mold Prevention & Testing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Mold requires moisture, warmth, and organic food
                    (drywall/wood). In the damp Willamette Valley, keeping
                    indoor humidity below 50% is critical. If mold covers more
                    than 10 sq ft, professional remediation guidelines (EPA)
                    should be followed.
                  </p>
                  <a
                    href="https://www.epa.gov/mold"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon font-bold hover:underline flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> EPA Mold Guide
                  </a>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-contractor-black mb-3">
                    Lead Safety (RRP)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Homes built before 1978 may contain lead-based paint.
                    Contractors must be RRP (Renovation, Repair, and Painting)
                    certified to disturb painted surfaces in these homes to
                    protect children from lead poisoning.
                  </p>
                  <a
                    href="https://www.epa.gov/lead"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon font-bold hover:underline flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> EPA Lead Information
                  </a>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 7: Insurance & Claims */}
            <section id="insurance-claims" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-maroon" />
                <h2 className="text-3xl font-bold text-contractor-black m-0">
                  Insurance Claims & Direct Billing
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Dealing with insurance can be the most stressful part of
                  property damage. We use <strong>Xactimate</strong>, the
                  industry-standard software used by all major insurance
                  carriers, to ensure pricing is accurate and approved.
                </p>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-6">
                  <h3 className="text-lg font-bold text-green-900 mt-0 mb-2">
                    Direct Billing Service
                  </h3>
                  <p className="mb-0 text-green-800">
                    Benson Home Solutions offers hassle-free direct insurance
                    billing. We coordinate documentation, photos, and moisture
                    logs directly with your adjuster so you typically only pay
                    your deductible.
                  </p>
                </div>
                <p>
                  <strong>Tip:</strong> Always document damage with photos/video
                  BEFORE cleanup begins. Don't throw away failed parts (like a
                  burst pipe) until the adjuster inspects them.
                </p>
                <Link to="/blog/water-damage-insurance-oregon">
                  <Button variant="outline" className="mt-4">
                    Read our Oregon Insurance Guide
                  </Button>
                </Link>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 9: Local Resources */}
            <section id="local-resources" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-maroon" />
                <h2 className="text-3xl font-bold text-contractor-black m-0">
                  Local Resources & Business Ratings
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-3">Harney County</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <a
                        href="https://www.harneycountychamber.org"
                        className="text-blue-600 hover:underline flex items-center gap-2"
                      >
                        <ExternalLink className="w-3 h-3" /> Chamber of Commerce
                      </a>
                    </li>
                    <li className="text-gray-500 italic">
                      Benson Enterprises LLC is a proud member
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-3">
                    Business Verification
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <a
                        href="https://www.oregon.gov/ccb"
                        className="text-blue-600 hover:underline flex items-center gap-2"
                      >
                        <ExternalLink className="w-3 h-3" /> Oregon CCB License
                        Search
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.bbb.org"
                        className="text-blue-600 hover:underline flex items-center gap-2"
                      >
                        <ExternalLink className="w-3 h-3" /> Better Business
                        Bureau
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 11: FAQ */}
            <section id="faq" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-8 h-8 text-maroon" />
                <h2 className="text-3xl font-bold text-contractor-black m-0">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold text-contractor-black">
                    Is water damage covered by my insurance?
                  </h4>
                  <p className="text-gray-700 text-sm mt-2">
                    Usually yes, if it is "sudden and accidental" (like a burst
                    pipe). Gradual leaks or flood damage (rising water) are
                    typically excluded.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold text-contractor-black">
                    Can I clean up mold myself?
                  </h4>
                  <p className="text-gray-700 text-sm mt-2">
                    EPA guidelines suggest DIY cleanup only for areas smaller
                    than 10 square feet. For larger infestations, professional
                    remediation is recommended to prevent spreading spores.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold text-contractor-black">
                    How long does drying take?
                  </h4>
                  <p className="text-gray-700 text-sm mt-2">
                    Typically 3-5 days using professional dehumidifiers and air
                    movers, depending on materials and saturation levels.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: About Benson */}
            <section
              id="about-benson"
              className="bg-contractor-black text-white p-8 rounded-xl scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-maroon" />
                <h2 className="text-3xl font-bold m-0">
                  About Benson Home Solutions
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                Operating as <strong>Benson Enterprises LLC</strong>, we are a
                locally owned restoration and construction firm dedicated to
                serving our Oregon neighbors. We bridge the gap between rural
                Harney County and the bustling Willamette Valley, bringing
                certified expertise to every job.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8 text-sm text-gray-300">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-maroon" /> Harney
                    County Chamber Member
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-maroon" /> IICRC
                    Certified Firm
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-maroon" /> Licensed,
                    Bonded & Insured
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-maroon" /> 24/7
                    Emergency Response
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-maroon" /> Direct
                    Insurance Billing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-maroon" /> Local
                    Expertise
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-bold text-white mb-4">Proudly Serving:</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  <strong>Harney County:</strong> Burns, Hines. <br />
                  <strong>Linn County:</strong> Sweet Home, Lebanon,
                  Brownsville, Halsey, Harrisburg, Scio, Tangent, Waterloo,
                  Crabtree, Jefferson, Lacomb, Shedd, Sodaville, Lyons, Mill
                  City, Gates, Detroit. <br />
                  <strong>Marion County:</strong> Salem, Keizer, Silverton,
                  Turner, Stayton, Sublimity, Aumsville, Scotts Mills, Mount
                  Angel, Gervais, Woodburn, Hubbard, Canby, Oregon City,
                  Molalla. <br />
                  <strong>Polk & Yamhill:</strong> Corvallis, Monmouth,
                  Independence, Dallas, Polk City, Rickreall, Falls City, Grand
                  Ronde, Willamina, Sheridan, Yamhill, McMinnville, Newberg,
                  Dundee, Carlton, Dayton, Amity.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="tel:5413215115">
                  <Button className="bg-maroon hover:bg-white hover:text-maroon font-bold">
                    Call (541) 321-5115
                  </Button>
                </a>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-contractor-black"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </section>

            <section className="bg-white border border-gray-200 rounded-xl p-8">
              <NextStepsBlock
                links={nextSteps}
                subtitle="Use these resources to choose the right service or maintenance plan."
              />
              <div className="mt-10">
                <LocationsServedBlock links={GEO_HUB_LINKS} />
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Quick Nav */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
              <h3 className="text-lg font-bold text-contractor-black mb-4">
                In This Guide
              </h3>
              <nav className="space-y-2 text-sm">
                <button
                  onClick={() => scrollToSection("tools-downloads")}
                  className="flex items-center gap-2 text-gray-600 hover:text-maroon w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Anchor className="w-4 h-4" /> Tools & Downloads
                </button>
                <button
                  onClick={() => scrollToSection("guides")}
                  className="flex items-center gap-2 text-gray-600 hover:text-maroon w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <BookOpen className="w-4 h-4" /> Guides
                </button>
                <button
                  onClick={() => scrollToSection("portals")}
                  className="flex items-center gap-2 text-gray-600 hover:text-maroon w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Users className="w-4 h-4" /> Portals
                </button>
                <button
                  onClick={() => scrollToSection("homeowner-rights")}
                  className="flex items-center gap-2 text-gray-600 hover:text-maroon w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4" /> Homeowner Rights
                </button>
                <button
                  onClick={() => scrollToSection("certified-contractors")}
                  className="flex items-center gap-2 text-gray-600 hover:text-maroon w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Award className="w-4 h-4" /> Finding Contractors
                </button>
                <button
                  onClick={() => scrollToSection("water-damage-info")}
                  className="flex items-center gap-2 text-gray-600 hover:text-maroon w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Droplets className="w-4 h-4" /> Water Damage Info
                </button>
                <button
                  onClick={() => scrollToSection("hazards")}
                  className="flex items-center gap-2 text-gray-600 hover:text-maroon w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <AlertTriangle className="w-4 h-4" /> Asbestos & Mold
                </button>
                <button
                  onClick={() => scrollToSection("insurance-claims")}
                  className="flex items-center gap-2 text-gray-600 hover:text-maroon w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <FileText className="w-4 h-4" /> Insurance Claims
                </button>
                <button
                  onClick={() => scrollToSection("local-resources")}
                  className="flex items-center gap-2 text-gray-600 hover:text-maroon w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <MapPin className="w-4 h-4" /> Local Resources
                </button>
                <button
                  onClick={() => scrollToSection("about-benson")}
                  className="flex items-center gap-2 text-gray-600 hover:text-maroon w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Users className="w-4 h-4" /> About Us
                </button>
              </nav>

              <hr className="my-6 border-gray-100" />

              <div className="mt-2 bg-maroon text-white p-6 rounded-lg text-center shadow-lg">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-bold text-xl mb-1">24/7 Emergency</h4>
                <p className="text-sm text-white/90 mb-4">
                  Immediate response for water damage across 5 counties.
                </p>
                <a
                  href="tel:5413215115"
                  className="block w-full py-3 bg-white text-maroon rounded font-bold hover:bg-gray-100 transition-colors"
                >
                  (541) 321-5115
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Resources;
