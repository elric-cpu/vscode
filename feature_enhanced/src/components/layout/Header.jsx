import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceAreaData } from "@/data/serviceAreas";
import siteImages from "@/data/siteImages";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsAreasOpen(false);
  }, [location]);

  const serviceGroups = [
    {
      label: "Emergency & Restoration",
      items: [
        { name: "Water Damage Restoration", path: "/water-damage-restoration" },
        { name: "Mold Remediation", path: "/mold-remediation" },
        { name: "Fire & Smoke Damage", path: "/fire-smoke-damage" },
        {
          name: "Insurance Claims Repairs",
          path: "/insurance-claims-repairs",
        },
      ],
    },
    {
      label: "Maintenance & Planning",
      items: [
        { name: "Maintenance Plans", path: "/maintenance-plans" },
        { name: "Commercial Maintenance", path: "/commercial-maintenance" },
        {
          name: "Commercial Service Agreements",
          path: "/commercial-service-agreements",
        },
      ],
    },
    {
      label: "Diagnostics & Upgrades",
      items: [
        { name: "Moisture Control", path: "/moisture-control" },
        { name: "Accessibility Retrofits", path: "/accessibility-retrofits" },
        { name: "Energy Comfort Retrofits", path: "/energy-comfort-retrofits" },
      ],
    },
    {
      label: "Selective Remodeling",
      items: [
        { name: "Inspection Repairs", path: "/inspection-repairs" },
        { name: "Bathroom Remodels", path: "/bathroom-remodels" },
        { name: "Kitchen Remodels", path: "/kitchen-remodels" },
      ],
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white border-b border-gray-200"}`}
    >
      <div className="bg-maroon text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <span className="font-semibold">CCB# 258533</span>
              <span className="hidden sm:inline">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="tel:5413215115"
                className="hover:text-cream transition-colors flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                (541) 321-5115
              </a>
              <a
                href="tel:5414130480"
                className="hover:text-cream transition-colors"
              >
                (541) 413-0480
              </a>
              <a
                href="mailto:Office@bensonhomesolutions.com"
                className="hover:text-cream transition-colors hidden md:inline"
              >
                Office@bensonhomesolutions.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={siteImages.logo}
              alt="Benson Home Solutions logo"
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-contractor-black">
                Benson Home Solutions
              </span>
              <span className="text-xs text-restoration-gray">
                Oregon Maintenance & Restoration
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-contractor-black hover:text-maroon transition-colors font-medium"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-contractor-black hover:text-maroon transition-colors font-medium flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-[560px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                <div className="grid grid-cols-2 gap-4 p-4">
                  {serviceGroups.map((group) => (
                    <div key={group.label} className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        {group.label}
                      </p>
                      <div className="space-y-1">
                        {group.items.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block px-3 py-2 rounded text-contractor-black hover:bg-cream hover:text-maroon transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="col-span-2">
                    <Link
                      to="/services"
                      className="flex items-center justify-between px-4 py-2 text-maroon hover:bg-cream font-semibold border-t border-gray-200"
                    >
                      View All Services
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Mega Menu/Dropdown */}
            <div className="relative group">
              <button className="text-contractor-black hover:text-maroon transition-colors font-medium flex items-center gap-1">
                Service Areas
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 p-6 grid grid-cols-3 gap-8">
                {/* Harney Column */}
                <div className="col-span-1 border-r border-gray-100 pr-4">
                  <h3 className="font-bold text-maroon mb-3 border-b border-gray-100 pb-2">
                    {serviceAreaData["harney-county"].label}
                  </h3>
                  <Link
                    to="/service-areas/harney-county"
                    className="block text-sm font-semibold text-maroon mb-2"
                  >
                    View Harney County
                  </Link>
                  <div className="space-y-1">
                    {serviceAreaData["harney-county"].towns.map((town) => (
                      <Link
                        key={town.slug}
                        to={`/service-areas/harney-county/${town.slug}`}
                        className="block text-sm text-gray-600 hover:text-maroon hover:bg-gray-50 px-2 py-1 rounded"
                      >
                        {town.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mid-Valley Columns (Spanning 2) */}
                <div className="col-span-2">
                  <h3 className="font-bold text-maroon mb-3 border-b border-gray-100 pb-2">
                    {serviceAreaData["mid-valley"].label}
                  </h3>
                  <Link
                    to="/service-areas/mid-willamette-valley"
                    className="inline-flex text-sm font-semibold text-maroon mb-3"
                  >
                    View Mid-Willamette Valley
                  </Link>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(serviceAreaData["mid-valley"].counties).map(
                      ([key, county]) => (
                        <div key={key}>
                          <h4 className="font-semibold text-contractor-black mb-2 text-sm uppercase tracking-wider">
                            {county.label}
                          </h4>
                          <div className="space-y-1 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                            {county.towns.map((town) => (
                              <Link
                                key={town.slug}
                                to={`/service-areas/mid-valley/${town.slug}`}
                                className="block text-sm text-gray-600 hover:text-maroon hover:bg-gray-50 px-2 py-1 rounded"
                              >
                                {town.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div className="col-span-3 border-t border-gray-100 pt-3">
                  <Link
                    to="/service-areas"
                    className="flex items-center justify-between px-3 py-2 text-maroon hover:bg-cream font-semibold rounded"
                  >
                    View All Service Areas
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="text-contractor-black hover:text-maroon transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/resources"
              className="text-contractor-black hover:text-maroon transition-colors font-medium"
            >
              Resources
            </Link>
            <div className="relative group">
              <button className="text-contractor-black hover:text-maroon transition-colors font-medium flex items-center gap-1">
                Portals
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                <div className="p-3 space-y-1">
                  <Link
                    to="/client-portal-login"
                    className="block px-3 py-2 rounded text-contractor-black hover:bg-cream hover:text-maroon transition-colors"
                  >
                    Client Portal Login
                  </Link>
                  <Link
                    to="/subcontractor-portal-login"
                    className="block px-3 py-2 rounded text-contractor-black hover:bg-cream hover:text-maroon transition-colors"
                  >
                    Partner Portal Login
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className="text-contractor-black hover:text-maroon transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:5413215115"
              className="hidden lg:flex items-center gap-2 bg-maroon text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-contractor-black hover:text-maroon transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 overflow-hidden"
            >
              <div className="py-4 space-y-2 max-h-[80vh] overflow-y-auto">
                <Link
                  to="/"
                  className="block py-2 text-contractor-black hover:text-maroon font-medium"
                >
                  Home
                </Link>

                {/* Mobile Services */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between py-2 text-contractor-black hover:text-maroon font-medium"
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2 border-l-2 border-gray-100 ml-2"
                      >
                        {serviceGroups.map((group) => (
                          <div key={group.label} className="py-2">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                              {group.label}
                            </p>
                            <div className="mt-2 space-y-2">
                              {group.items.map((service) => (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  className="block py-1 text-sm text-gray-600 hover:text-maroon"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Service Areas */}
                <div>
                  <button
                    onClick={() => setIsAreasOpen(!isAreasOpen)}
                    className="w-full flex items-center justify-between py-2 text-contractor-black hover:text-maroon font-medium"
                  >
                    Service Areas
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isAreasOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isAreasOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2 border-l-2 border-gray-100 ml-2"
                      >
                        {/* Harney Mobile */}
                        <div className="py-2">
                          <h4 className="font-bold text-maroon text-sm mb-1">
                            {serviceAreaData["harney-county"].label}
                          </h4>
                          <Link
                            to="/service-areas/harney-county"
                            className="block py-1 text-sm text-maroon font-semibold"
                          >
                            View Harney County
                          </Link>
                          {serviceAreaData["harney-county"].towns.map(
                            (town) => (
                              <Link
                                key={town.slug}
                                to={`/service-areas/harney-county/${town.slug}`}
                                className="block py-1 text-sm text-gray-600 ml-2"
                              >
                                {town.name}
                              </Link>
                            ),
                          )}
                        </div>

                        {/* Mid-Valley Mobile */}
                        <div className="py-2">
                          <h4 className="font-bold text-maroon text-sm mb-1">
                            {serviceAreaData["mid-valley"].label}
                          </h4>
                          <Link
                            to="/service-areas/mid-willamette-valley"
                            className="block py-1 text-sm text-maroon font-semibold"
                          >
                            View Mid-Willamette Valley
                          </Link>
                          {Object.entries(
                            serviceAreaData["mid-valley"].counties,
                          ).map(([key, county]) => (
                            <div key={key} className="mb-3 ml-2">
                              <h5 className="font-semibold text-xs uppercase text-gray-500 mb-1">
                                {county.label}
                              </h5>
                              <div className="grid grid-cols-2 gap-1">
                                {county.towns.map((town) => (
                                  <Link
                                    key={town.slug}
                                    to={`/service-areas/mid-valley/${town.slug}`}
                                    className="block py-1 text-sm text-gray-600"
                                  >
                                    {town.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <Link
                          to="/service-areas"
                          className="block py-2 text-sm text-maroon font-semibold"
                        >
                          View All Service Areas
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/about"
                  className="block py-2 text-contractor-black hover:text-maroon font-medium"
                >
                  About
                </Link>
                <Link
                  to="/resources"
                  className="block py-2 text-contractor-black hover:text-maroon font-medium"
                >
                  Resources
                </Link>
                <div className="border-t border-gray-100 pt-2">
                  <p className="text-xs uppercase tracking-widest text-gray-500 px-2 mb-1">
                    Portals
                  </p>
                  <Link
                    to="/client-portal-login"
                    className="block py-2 text-contractor-black hover:text-maroon font-medium"
                  >
                    Client Portal Login
                  </Link>
                  <Link
                    to="/subcontractor-portal-login"
                    className="block py-2 text-contractor-black hover:text-maroon font-medium"
                  >
                    Partner Portal Login
                  </Link>
                </div>
                <Link
                  to="/contact"
                  className="block py-2 text-contractor-black hover:text-maroon font-medium"
                >
                  Contact
                </Link>

                <a
                  href="tel:5413215115"
                  className="flex items-center justify-center gap-2 bg-maroon text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all mt-4"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
