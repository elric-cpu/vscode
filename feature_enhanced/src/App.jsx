import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";
import Home from "@/pages/Home";
import ServicesOverview from "@/pages/ServicesOverview";
import WaterDamageMitigation from "@/pages/services/WaterDamageMitigation";
import MoldRemediation from "@/pages/services/MoldRemediation";
import FireSmokeDamage from "@/pages/services/FireSmokeDamage";
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
import ServiceAreas from "@/pages/ServiceAreas";
import HarneyCountyHub from "@/pages/service-areas/HarneyCountyHub";
import MidWillametteValleyHub from "@/pages/service-areas/MidWillametteValleyHub";
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
import CalculatorsHub from "@/pages/resources/CalculatorsHub";
import AnnualHomeMaintenanceBudgetGuide from "@/pages/resources/guides/AnnualHomeMaintenanceBudgetGuide";
import SeasonalMaintenanceChecklistGuide from "@/pages/resources/guides/SeasonalMaintenanceChecklistGuide";
import CommercialPreventiveMaintenanceEssentialsGuide from "@/pages/resources/guides/CommercialPreventiveMaintenanceEssentialsGuide";
import InspectionReportRepairsGuide from "@/pages/resources/guides/InspectionReportRepairsGuide";
import InspectionRepairsCostGuide from "@/pages/resources/guides/InspectionRepairsCostGuide";
import SignsOfHiddenWaterDamageGuide from "@/pages/resources/guides/SignsOfHiddenWaterDamageGuide";
import MoldWhenToCallAProGuide from "@/pages/resources/guides/MoldWhenToCallAProGuide";
import FireSmokeWhatToDoFirstGuide from "@/pages/resources/guides/FireSmokeWhatToDoFirstGuide";
import HVACLoadCalculator from "@/pages/resources/calculators/HVACLoadCalculator";
import PreventiveMaintenanceROICalculator from "@/pages/resources/calculators/PreventiveMaintenanceROICalculator";
import InstantRepairCostCalculator from "@/pages/resources/calculators/InstantRepairCostCalculator";
import EnergySavingsCalculator from "@/pages/resources/calculators/EnergySavingsCalculator";
import ACHCalculator from "@/pages/resources/calculators/ACHCalculator";
import MaterialsEstimatorCalculator from "@/pages/resources/calculators/MaterialsEstimatorCalculator";
import AssetLifecycleCalculator from "@/pages/resources/calculators/AssetLifecycleCalculator";
import LaborSavingsCalculator from "@/pages/resources/calculators/LaborSavingsCalculator";
import PropertyValueCalculator from "@/pages/resources/calculators/PropertyValueCalculator";
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
              path="/water-damage-restoration"
              element={<WaterDamageMitigation />}
            />
            <Route path="/mold-remediation" element={<MoldRemediation />} />
            <Route path="/fire-smoke-damage" element={<FireSmokeDamage />} />
            <Route path="/bathroom-remodels" element={<BathroomRemodels />} />
            <Route path="/kitchen-remodels" element={<KitchenRemodels />} />
            <Route path="/inspection-repairs" element={<GeneralContracting />} />
            <Route
              path="/maintenance-plans"
              element={<ResidentialMaintenancePrograms />}
            />
            <Route path="/moisture-control" element={<MoistureEnvelope />} />
            <Route
              path="/accessibility-retrofits"
              element={<AgingInPlace />}
            />
            <Route
              path="/insurance-claims-repairs"
              element={<InsuranceAdjacent />}
            />
            <Route
              path="/energy-comfort-retrofits"
              element={<EnergyComfort />}
            />

            <Route
              path="/commercial-maintenance"
              element={<CommercialMaintenance />}
            />
            <Route
              path="/commercial/tenant-turns"
              element={<TenantTurns />}
            />
            <Route
              path="/commercial/preventive-maintenance"
              element={<PreventiveMaintenance />}
            />
            <Route
              path="/commercial/emergency-repairs"
              element={<EmergencyRepairs />}
            />
            <Route
              path="/commercial/ada-compliance"
              element={<ADACompliance />}
            />
            <Route
              path="/commercial-service-agreements"
              element={<CommercialServiceAgreements />}
            />
            <Route
              path="/services/water-damage-mitigation"
              element={<Navigate to="/water-damage-restoration" replace />}
            />
            <Route
              path="/services/mold-remediation"
              element={<Navigate to="/mold-remediation" replace />}
            />
            <Route
              path="/services/fire-smoke-damage"
              element={<Navigate to="/fire-smoke-damage" replace />}
            />
            <Route
              path="/services/bathroom-remodels"
              element={<Navigate to="/bathroom-remodels" replace />}
            />
            <Route
              path="/services/kitchen-remodels"
              element={<Navigate to="/kitchen-remodels" replace />}
            />
            <Route
              path="/services/general-contracting"
              element={<Navigate to="/inspection-repairs" replace />}
            />
            <Route
              path="/services/residential-maintenance"
              element={<Navigate to="/maintenance-plans" replace />}
            />
            <Route
              path="/services/moisture-envelope"
              element={<Navigate to="/moisture-control" replace />}
            />
            <Route
              path="/services/aging-in-place"
              element={<Navigate to="/accessibility-retrofits" replace />}
            />
            <Route
              path="/services/insurance-adjacent"
              element={<Navigate to="/insurance-claims-repairs" replace />}
            />
            <Route
              path="/services/energy-comfort"
              element={<Navigate to="/energy-comfort-retrofits" replace />}
            />
            <Route
              path="/services/commercial"
              element={<Navigate to="/commercial-maintenance" replace />}
            />
            <Route
              path="/services/commercial/tenant-turns"
              element={<Navigate to="/commercial/tenant-turns" replace />}
            />
            <Route
              path="/services/commercial/preventive-maintenance"
              element={<Navigate to="/commercial/preventive-maintenance" replace />}
            />
            <Route
              path="/services/commercial/emergency-repairs"
              element={<Navigate to="/commercial/emergency-repairs" replace />}
            />
            <Route
              path="/services/commercial/ada-compliance"
              element={<Navigate to="/commercial/ada-compliance" replace />}
            />
            <Route
              path="/services/commercial/service-agreements"
              element={<Navigate to="/commercial-service-agreements" replace />}
            />

            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route
              path="/service-areas/harney-county"
              element={<HarneyCountyHub />}
            />
            <Route
              path="/service-areas/mid-willamette-valley"
              element={<MidWillametteValleyHub />}
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
            <Route path="/resources/calculators" element={<CalculatorsHub />} />
            <Route
              path="/resources/bathroom-remodel-roi"
              element={<BathroomRemodelROI />}
            />
            <Route
              path="/resources/water-damage-restoration-guide"
              element={<WaterDamageMitigationGuide />}
            />
            <Route
              path="/resources/water-damage-mitigation-guide"
              element={<Navigate to="/resources/water-damage-restoration-guide" replace />}
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
            <Route
              path="/resources/guides/annual-home-maintenance-budget"
              element={<AnnualHomeMaintenanceBudgetGuide />}
            />
            <Route
              path="/resources/guides/seasonal-maintenance-checklist"
              element={<SeasonalMaintenanceChecklistGuide />}
            />
            <Route
              path="/resources/guides/commercial-preventive-maintenance-essentials"
              element={<CommercialPreventiveMaintenanceEssentialsGuide />}
            />
            <Route
              path="/resources/guides/inspection-report-repairs"
              element={<InspectionReportRepairsGuide />}
            />
            <Route
              path="/resources/guides/inspection-repairs-cost-guide"
              element={<InspectionRepairsCostGuide />}
            />
            <Route
              path="/resources/guides/signs-of-hidden-water-damage"
              element={<SignsOfHiddenWaterDamageGuide />}
            />
            <Route
              path="/resources/guides/mold-when-to-call-a-pro"
              element={<MoldWhenToCallAProGuide />}
            />
            <Route
              path="/resources/guides/fire-smoke-what-to-do-first"
              element={<FireSmokeWhatToDoFirstGuide />}
            />
            <Route
              path="/resources/calculators/hvac-load"
              element={<HVACLoadCalculator />}
            />
            <Route
              path="/resources/calculators/preventive-maintenance-roi"
              element={<PreventiveMaintenanceROICalculator />}
            />
            <Route
              path="/resources/calculators/instant-repair-cost"
              element={<InstantRepairCostCalculator />}
            />
            <Route
              path="/resources/calculators/energy-savings"
              element={<EnergySavingsCalculator />}
            />
            <Route
              path="/resources/calculators/ach"
              element={<ACHCalculator />}
            />
            <Route
              path="/resources/calculators/materials-estimator"
              element={<MaterialsEstimatorCalculator />}
            />
            <Route
              path="/resources/calculators/asset-lifecycle"
              element={<AssetLifecycleCalculator />}
            />
            <Route
              path="/resources/calculators/labor-savings"
              element={<LaborSavingsCalculator />}
            />
            <Route
              path="/resources/calculators/property-value-rent"
              element={<PropertyValueCalculator />}
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


