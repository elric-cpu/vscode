import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";
import Home from "@/pages/Home";
import ServicesOverview from "@/pages/ServicesOverview";
import WaterDamageMitigation from "@/pages/services/WaterDamageMitigation";
import MoldRemediation from "@/pages/services/MoldRemediation";
import BathroomRemodels from "@/pages/services/BathroomRemodels";
import KitchenRemodels from "@/pages/services/KitchenRemodels";
import GeneralContracting from "@/pages/services/GeneralContracting";
import ResidentialMaintenancePrograms from "@/pages/services/residential/ResidentialMaintenancePrograms";
import CommercialMaintenance from "@/pages/services/commercial/CommercialMaintenance";
import TenantTurns from "@/pages/services/commercial/TenantTurns";
import PreventiveMaintenance from "@/pages/services/commercial/PreventiveMaintenance";
import EmergencyRepairs from "@/pages/services/commercial/EmergencyRepairs";
import ADACompliance from "@/pages/services/commercial/ADACompliance";
import CommercialServiceAgreements from "@/pages/services/commercial/CommercialServiceAgreements";
import MoistureEnvelope from "@/pages/services/niches/MoistureEnvelope";
import AgingInPlace from "@/pages/services/niches/AgingInPlace";
import InsuranceAdjacent from "@/pages/services/niches/InsuranceAdjacent";
import EnergyComfort from "@/pages/services/niches/EnergyComfort";
import ServiceArea from "@/pages/ServiceArea";
import About from "@/pages/About";
import Reviews from "@/pages/Reviews";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import Resources from "@/pages/Resources";
import ResourcesHelp from "@/pages/ResourcesHelp";
import Sitemap from "@/pages/Sitemap";
import BathroomRemodelROI from "@/pages/resources/BathroomRemodelROI";
import WaterDamageMitigationGuide from "@/pages/resources/WaterDamageMitigationGuide";
import KitchenRemodelROI from "@/pages/resources/KitchenRemodelROI";
import AgingInPlaceGuide from "@/pages/resources/AgingInPlaceGuide";
import HomeMaintenanceEstimator from "@/pages/resources/HomeMaintenanceEstimator";
import HomeMaintenanceRecordbook from "@/pages/resources/HomeMaintenanceRecordbook";
import HomeRestorationResourceGuide from "@/pages/resources/HomeRestorationResourceGuide";
import WaterDamageInsuranceOregon from "@/pages/blog/WaterDamageInsuranceOregon";
import HiddenWaterDamageSigns from "@/pages/blog/HiddenWaterDamageSigns";
import ClientPortal from "@/pages/ClientPortal";
import ClientPortalLogin from "@/pages/ClientPortalLogin";
import ClientPortalRegister from "@/pages/ClientPortalRegister";
import ClientPortalForgotPassword from "@/pages/ClientPortalForgotPassword";
import AuthResetPassword from "@/pages/AuthResetPassword";
import ClientCompleteProfile from "@/pages/ClientCompleteProfile";
import SubcontractorPortal from "@/pages/SubcontractorPortal";
import SubcontractorPortalLogin from "@/pages/SubcontractorPortalLogin";
import SubcontractorPortalRegister from "@/pages/SubcontractorPortalRegister";
import SubcontractorCompleteProfile from "@/pages/SubcontractorCompleteProfile";
import AuthCallback from "@/pages/AuthCallback";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Analytics />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesOverview />} />
            <Route
              path="/services/water-damage-mitigation"
              element={<WaterDamageMitigation />}
            />
            <Route
              path="/services/mold-remediation"
              element={<MoldRemediation />}
            />
            <Route
              path="/services/bathroom-remodels"
              element={<BathroomRemodels />}
            />
            <Route
              path="/services/kitchen-remodels"
              element={<KitchenRemodels />}
            />
            <Route
              path="/services/general-contracting"
              element={<GeneralContracting />}
            />
            <Route
              path="/services/residential-maintenance"
              element={<ResidentialMaintenancePrograms />}
            />
            <Route
              path="/services/moisture-envelope"
              element={<MoistureEnvelope />}
            />
            <Route path="/services/aging-in-place" element={<AgingInPlace />} />
            <Route
              path="/services/insurance-adjacent"
              element={<InsuranceAdjacent />}
            />
            <Route
              path="/services/energy-comfort"
              element={<EnergyComfort />}
            />

            <Route
              path="/services/commercial"
              element={<CommercialMaintenance />}
            />
            <Route
              path="/services/commercial/tenant-turns"
              element={<TenantTurns />}
            />
            <Route
              path="/services/commercial/preventive-maintenance"
              element={<PreventiveMaintenance />}
            />
            <Route
              path="/services/commercial/emergency-repairs"
              element={<EmergencyRepairs />}
            />
            <Route
              path="/services/commercial/ada-compliance"
              element={<ADACompliance />}
            />
            <Route
              path="/services/commercial/service-agreements"
              element={<CommercialServiceAgreements />}
            />

            {/* Dynamic Service Area Route */}
            <Route
              path="/service-areas/:region/:town"
              element={<ServiceArea />}
            />

            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<Blog />} />
            {/* Specific blog post routes must come before the generic slug route */}
            <Route
              path="/blog/water-damage-insurance-oregon"
              element={<WaterDamageInsuranceOregon />}
            />
            <Route
              path="/blog/hidden-water-damage-signs"
              element={<HiddenWaterDamageSigns />}
            />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources-help" element={<ResourcesHelp />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route
              path="/resources/bathroom-remodel-roi"
              element={<BathroomRemodelROI />}
            />
            <Route
              path="/resources/water-damage-mitigation-guide"
              element={<WaterDamageMitigationGuide />}
            />
            <Route
              path="/resources/kitchen-remodel-roi"
              element={<KitchenRemodelROI />}
            />
            <Route
              path="/resources/ada-aging-in-place-guide"
              element={<AgingInPlaceGuide />}
            />
            <Route
              path="/resources/home-maintenance-estimator"
              element={<HomeMaintenanceEstimator />}
            />
            <Route
              path="/resources/home-maintenance-recordbook"
              element={<HomeMaintenanceRecordbook />}
            />
            <Route
              path="/resources/home-restoration-resource-guide"
              element={<HomeRestorationResourceGuide />}
            />

            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/auth/reset" element={<AuthResetPassword />} />

            <Route path="/client-portal-login" element={<ClientPortalLogin />} />
            <Route
              path="/client-portal-forgot-password"
              element={<ClientPortalForgotPassword />}
            />
            <Route
              path="/client-portal-register"
              element={<ClientPortalRegister />}
            />
            <Route
              path="/client-complete-profile"
              element={<ClientCompleteProfile />}
            />
            <Route
              path="/client-portal"
              element={
                <ProtectedRoute role="client">
                  <ClientPortal />
                </ProtectedRoute>
              }
            />

            <Route
              path="/subcontractor-portal-login"
              element={<SubcontractorPortalLogin />}
            />
            <Route
              path="/subcontractor-portal-register"
              element={<SubcontractorPortalRegister />}
            />
            <Route
              path="/subcontractor-complete-profile"
              element={<SubcontractorCompleteProfile />}
            />
            <Route
              path="/subcontractor-portal"
              element={
                <ProtectedRoute role="subcontractor">
                  <SubcontractorPortal />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
