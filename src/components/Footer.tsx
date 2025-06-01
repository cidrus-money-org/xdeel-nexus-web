
import { Separator } from "@/components/ui/separator";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerLinks = {
    "Company": [
      { name: "How It Works", href: "/how-it-works" },
      { name: "Features", href: "/features" }
    ],
    "Support": [
      { name: "Support", href: "/contact" },
      { name: "FAQ", href: "/faq" }
    ],
    "Legal": [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy and Cookie Policy", href: "/privacy" },
      { name: "Legal and Compliance", href: "/legal" },
      { name: "Compliance and KYC Overview", href: "/kyc-overview" },
      { name: "Security", href: "/security" }
    ]
  };

  return (
    <footer className="bg-[#1A1B2F] text-gray-300">
      <div className="w-full px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
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
              <h3 className="text-white font-medium mb-4 text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-[#7B38F3] transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trusted Payment Partners */}
        <div className="mb-8">
          <Separator className="bg-gray-800 mb-6" />
          <div className="flex justify-end">
            <div>
              <h3 className="text-gray-400 font-medium mb-4 text-xs">Trusted Payment Partners</h3>
              <div className="flex items-center gap-x-4">
                {/* SEPA */}
                <div className="flex items-center rounded-full bg-white/5 px-3 py-2" aria-label="SEPA payments accepted" title="SEPA">
                  <svg width="48" height="20" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 opacity-90 hover:opacity-100 transition-opacity">
                    <rect width="48" height="20" rx="3" fill="#ffffff" stroke="#003d82" strokeWidth="1"/>
                    <circle cx="10" cy="10" r="4" fill="#003d82"/>
                    <text x="11.5" y="13.5" fill="#ffffff" fontSize="6" fontWeight="bold">€</text>
                    <text x="18" y="13" fill="#003d82" fontSize="5" fontWeight="bold">SEPA</text>
                  </svg>
                </div>
                
                {/* Visa */}
                <div className="flex items-center rounded-full bg-white/5 px-3 py-2" aria-label="Visa payments accepted" title="Visa">
                  <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 opacity-90 hover:opacity-100 transition-opacity">
                    <rect width="50" height="20" rx="3" fill="#ffffff"/>
                    <text x="4" y="14" fill="#1a1f71" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">VISA</text>
                  </svg>
                </div>
                
                {/* Mastercard */}
                <div className="flex items-center rounded-full bg-white/5 px-3 py-2" aria-label="Mastercard payments accepted" title="Mastercard">
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 opacity-90 hover:opacity-100 transition-opacity">
                    <circle cx="13" cy="10" r="6" fill="#eb001b"/>
                    <circle cx="27" cy="10" r="6" fill="#ff5f00"/>
                    <path d="M20 6c1.2 1.8 1.8 3.9 1.8 4s-.6 2.2-1.8 4c-1.2-1.8-1.8-3.9-1.8-4s.6-2.2 1.8-4z" fill="#ff5f00"/>
                    <text x="8" y="17" fill="#000000" fontSize="3" fontWeight="bold">Mastercard</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

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
