import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import ServicesOverview from '@/pages/ServicesOverview';
import WaterDamageMitigation from '@/pages/services/WaterDamageMitigation';
import MoldRemediation from '@/pages/services/MoldRemediation';
import BathroomRemodels from '@/pages/services/BathroomRemodels';
import KitchenRemodels from '@/pages/services/KitchenRemodels';
import GeneralContracting from '@/pages/services/GeneralContracting';
import ServiceArea from '@/pages/ServiceArea';
import About from '@/pages/About';
import Reviews from '@/pages/Reviews';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import Resources from '@/pages/Resources';
import ResourcesHelp from '@/pages/ResourcesHelp';
import Sitemap from '@/pages/Sitemap';
import BathroomRemodelROI from '@/pages/resources/BathroomRemodelROI';
import WaterDamageMitigationGuide from '@/pages/resources/WaterDamageMitigationGuide';
import KitchenRemodelROI from '@/pages/resources/KitchenRemodelROI';
import AgingInPlaceGuide from '@/pages/resources/AgingInPlaceGuide';
import WaterDamageInsuranceOregon from '@/pages/blog/WaterDamageInsuranceOregon';
import HiddenWaterDamageSigns from '@/pages/blog/HiddenWaterDamageSigns';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesOverview />} />
            <Route path="/services/water-damage-mitigation" element={<WaterDamageMitigation />} />
            <Route path="/services/mold-remediation" element={<MoldRemediation />} />
            <Route path="/services/bathroom-remodels" element={<BathroomRemodels />} />
            <Route path="/services/kitchen-remodels" element={<KitchenRemodels />} />
            <Route path="/services/general-contracting" element={<GeneralContracting />} />
            
            {/* Dynamic Service Area Route */}
            <Route path="/service-areas/:region/:town" element={<ServiceArea />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<Blog />} />
            {/* Specific blog post routes must come before the generic slug route */}
            <Route path="/blog/water-damage-insurance-oregon" element={<WaterDamageInsuranceOregon />} />
            <Route path="/blog/hidden-water-damage-signs" element={<HiddenWaterDamageSigns />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources-help" element={<ResourcesHelp />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/resources/bathroom-remodel-roi" element={<BathroomRemodelROI />} />
            <Route path="/resources/water-damage-mitigation-guide" element={<WaterDamageMitigationGuide />} />
            <Route path="/resources/kitchen-remodel-roi" element={<KitchenRemodelROI />} />
            <Route path="/resources/ada-aging-in-place-guide" element={<AgingInPlaceGuide />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;