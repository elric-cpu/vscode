import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleStaffPortal = () => {
    toast({
      title: "🚧 Coming Soon!",
      description: "The Staff Portal is currently under development. Check back soon!",
      duration: 4000,
    });
  };

  const handlePayInvoice = () => {
    toast({
      title: "🚧 Coming Soon!",
      description: "Online invoice payment will be available soon. Please contact us for payment options.",
      duration: 4000,
    });
  };

  return (
    <footer className="bg-contractor-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="https://horizons-cdn.hostinger.com/ae3477ac-6bf1-4f8b-8f34-eb7eaf405699/25b40853ea3bb45850a91acd0a670aaf.png" alt="Benson Home Solutions logo" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-xl font-bold mb-2">Benson Home Solutions</p>
            <p className="text-cream text-sm mb-4">Oregon Construction & Restoration</p>
            <p className="text-structural-gray text-sm">CCB# 258533</p>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4 text-cream">Contact Us</p>
            <div className="space-y-3">
              <a href="tel:5413215115" className="flex items-center gap-2 text-structural-gray hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (541) 321-5115
              </a>
              <a href="tel:5414130480" className="flex items-center gap-2 text-structural-gray hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (541) 413-0480
              </a>
              <a href="mailto:Office@bensonhomesolutions.com" className="flex items-center gap-2 text-structural-gray hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                Office@bensonhomesolutions.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4 text-cream">Service Areas</p>
            <div className="space-y-2">
              <Link to="/service-areas/harney-county/burns" className="block text-structural-gray hover:text-white transition-colors">
                Burns, OR
              </Link>
              <Link to="/service-areas/harney-county/hines" className="block text-structural-gray hover:text-white transition-colors">
                Hines, OR
              </Link>
              <Link to="/service-areas/mid-valley/sweet-home" className="block text-structural-gray hover:text-white transition-colors">
                Sweet Home, OR
              </Link>
              <p className="text-structural-gray text-sm pt-2">Lebanon, Albany & Mid-Valley</p>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4 text-cream">Quick Links</p>
            <div className="space-y-2 mb-6">
              <Link to="/services" className="block text-structural-gray hover:text-white transition-colors">
                Our Services
              </Link>
              <Link to="/about" className="block text-structural-gray hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/resources" className="block text-structural-gray hover:text-white transition-colors">
                Resources
              </Link>
              <Link to="/resources-help" className="block text-structural-gray hover:text-white transition-colors">
                Resource Links & Help
              </Link>
              <Link to="/sitemap" className="block text-structural-gray hover:text-white transition-colors">
                Sitemap
              </Link>
              <Link to="/contact" className="block text-structural-gray hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <div className="space-y-2">
              <button
                onClick={handleStaffPortal}
                className="flex items-center gap-2 text-cream hover:text-white transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Staff Portal
              </button>
              <button
                onClick={handlePayInvoice}
                className="flex items-center gap-2 text-cream hover:text-white transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Pay Invoice
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-restoration-gray mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-structural-gray text-sm text-center md:text-left">
              © {new Date().getFullYear()} Benson Home Solutions. All rights reserved.
            </p>
            <p className="text-cream text-sm text-center md:text-right">
              Free estimates available. Emergency water mitigation available.
            </p>
          </div>
          <p className="text-structural-gray text-xs text-center mt-4">
            Licensed, Bonded & Insured • CCB# 258533 • Serving Harney County & Mid-Valley Oregon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;