
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerLinks = {
    "Company": [
      { name: "How It Works", href: "/how-it-works" },
      { name: "Features", href: "/features" },
      { name: "Contact", href: "/contact" }
    ],
    "Support": [
      { name: "FAQ", href: "/faq" },
      { name: "Support", href: "/contact" }
    ],
    "Legal": [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy and Cookie Policy", href: "/privacy" },
      { name: "Legal and Compliance", href: "/legal" },
      { name: "Compliance and KYC Overview", href: "/kyc-overview" }
    ]
  };

  return (
    <footer className="bg-[#1A1B2F] text-gray-300">
      <div className="w-full px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/fa03512c-6722-42a7-bdbb-c74fe62f602c.png" 
                alt="Xdeel Logo" 
                className="h-8"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The simplest and most secure way to buy, sell, and trade cryptocurrency. 
              Authorized by Polish Financial Supervision Authority (KNF).
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-[#7B38F3]" />
                <span>+48 66 224 8895</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-[#7B38F3]" />
                <span>support@xdeel.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-[#7B38F3] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Account & Payment Methods Section */}
          <div>
            {/* Accepted Payment Methods */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Accepted Payment Methods</h3>
              <div className="flex justify-end items-center gap-x-4 mb-6">
                {/* SEPA */}
                <div className="bg-white rounded-lg px-3 py-2 flex items-center shadow-sm">
                  <span className="text-[#003d82] font-bold text-sm">SEPA</span>
                </div>
                
                {/* Visa */}
                <div className="bg-white rounded-lg px-3 py-2 flex items-center shadow-sm">
                  <span className="text-[#1a1f71] font-bold text-sm">VISA</span>
                </div>
                
                {/* MasterCard */}
                <div className="bg-white rounded-lg px-3 py-2 flex items-center shadow-sm">
                  <div className="flex items-center">
                    <div className="w-5 h-3 bg-[#eb001b] rounded-full"></div>
                    <div className="w-5 h-3 bg-[#ff5f00] rounded-full -ml-2"></div>
                    <span className="text-black font-semibold text-xs ml-1">Mastercard</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Links */}
            <h3 className="text-white font-semibold mb-4">Account</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/login"
                  className="text-gray-400 hover:text-[#7B38F3] transition-colors duration-200"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link 
                  to="/signup"
                  className="text-gray-400 hover:text-[#7B38F3] transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link 
                  to="/security"
                  className="text-gray-400 hover:text-[#7B38F3] transition-colors duration-200"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Xdeel. All rights reserved. Authorized by Polish Financial Supervision Authority (KNF).
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>🇵🇱 KNF Authorized</span>
            <span>🔒 Bank-Grade Security</span>
            <span>⚡ Instant Trading</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
