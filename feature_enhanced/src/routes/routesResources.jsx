import React from "react";
import { Navigate } from "react-router-dom";
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
import AIEstimatingWorkspace from "@/pages/resources/AIEstimatingWorkspace";

export const resourceRoutes = [
  { path: "/resources", element: <Resources /> },
  { path: "/resources-help", element: <ResourcesHelp /> },
  { path: "/sitemap", element: <Sitemap /> },
  { path: "/resources/calculators", element: <CalculatorsHub /> },
  { path: "/resources/bathroom-remodel-roi", element: <BathroomRemodelROI /> },
  { path: "/resources/water-damage-restoration-guide", element: <WaterDamageMitigationGuide /> },
  {
    path: "/resources/water-damage-mitigation-guide",
    element: <Navigate to="/resources/water-damage-restoration-guide" replace />,
  },
  { path: "/resources/kitchen-remodel-roi", element: <KitchenRemodelROI /> },
  { path: "/resources/ada-aging-in-place-guide", element: <AgingInPlaceGuide /> },
  { path: "/resources/home-maintenance-estimator", element: <HomeMaintenanceEstimator /> },
  { path: "/resources/home-maintenance-recordbook", element: <HomeMaintenanceRecordbook /> },
  { path: "/resources/home-restoration-resource-guide", element: <HomeRestorationResourceGuide /> },
  { path: "/resources/guides/annual-home-maintenance-budget", element: <AnnualHomeMaintenanceBudgetGuide /> },
  { path: "/resources/guides/seasonal-maintenance-checklist", element: <SeasonalMaintenanceChecklistGuide /> },
  { path: "/resources/guides/commercial-preventive-maintenance-essentials", element: <CommercialPreventiveMaintenanceEssentialsGuide /> },
  { path: "/resources/guides/inspection-report-repairs", element: <InspectionReportRepairsGuide /> },
  { path: "/resources/guides/inspection-repairs-cost-guide", element: <InspectionRepairsCostGuide /> },
  { path: "/resources/guides/signs-of-hidden-water-damage", element: <SignsOfHiddenWaterDamageGuide /> },
  { path: "/resources/guides/mold-when-to-call-a-pro", element: <MoldWhenToCallAProGuide /> },
  { path: "/resources/guides/fire-smoke-what-to-do-first", element: <FireSmokeWhatToDoFirstGuide /> },
  { path: "/resources/calculators/hvac-load", element: <HVACLoadCalculator /> },
  { path: "/resources/calculators/preventive-maintenance-roi", element: <PreventiveMaintenanceROICalculator /> },
  { path: "/resources/calculators/instant-repair-cost", element: <InstantRepairCostCalculator /> },
  { path: "/resources/calculators/energy-savings", element: <EnergySavingsCalculator /> },
  { path: "/resources/calculators/ach", element: <ACHCalculator /> },
  { path: "/resources/calculators/materials-estimator", element: <MaterialsEstimatorCalculator /> },
  { path: "/resources/calculators/asset-lifecycle", element: <AssetLifecycleCalculator /> },
  { path: "/resources/calculators/labor-savings", element: <LaborSavingsCalculator /> },
  { path: "/resources/calculators/property-value-rent", element: <PropertyValueCalculator /> },
  { path: "/resources/ai-estimating-workspace", element: <AIEstimatingWorkspace /> },
];
