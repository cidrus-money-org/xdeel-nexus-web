
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
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

          {/* Trusted Payment Partners */}
          <div>
            <h3 className="text-white font-medium mb-4 text-sm">Trusted Payment Partners</h3>
            <div className="flex items-center gap-x-4">
              {/* SEPA */}
              <div className="bg-white rounded-md px-3 py-2 flex items-center shadow-sm" aria-label="SEPA payments accepted">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#003d82] rounded-full flex items-center justify-center mr-1">
                    <span className="text-white text-xs font-bold">€</span>
                  </div>
                  <span className="text-[#003d82] font-bold text-xs">SEPA</span>
                </div>
              </div>
              
              {/* Visa */}
              <div className="h-6 flex items-center" aria-label="Visa payments accepted">
                <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.4 1.2L15.6 14.8H12.2L15 1.2H18.4ZM31.6 1.2L28.8 14.8H25.4L28.2 1.2H31.6ZM9.8 1.2L6.2 11.4L5.4 7.8L4.2 2.4C4 1.6 3.4 1.2 2.6 1.2H0.2L0 2C1.8 2.4 3.4 3 4.8 3.8L7.4 14.8H11L17.4 1.2H9.8ZM43.4 1.2H46.2L48 14.8H44.8L44.4 12.6H40.6L39.8 14.8H36.4L43.4 1.2ZM41.4 9.8H43.8L43 6.2L41.4 9.8Z" fill="#1a1f71"/>
                </svg>
              </div>
              
              {/* Mastercard */}
              <div className="h-6 flex items-center" aria-label="Mastercard payments accepted">
                <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="11" r="10" fill="#eb001b"/>
                  <circle cx="22" cy="11" r="10" fill="#ff5f00"/>
                  <path d="M18 5c1.326 2.067 2 4.444 2 7s-.674 4.933-2 7c-1.326-2.067-2-4.444-2-7s.674-4.933 2-7z" fill="#ff5f00"/>
                </svg>
              </div>
            </div>
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
