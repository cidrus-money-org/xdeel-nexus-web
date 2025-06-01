
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Shield, Euro, Zap, Clock, HeadphonesIcon, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

export const Comparison = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const comparisonFeatures = [
    {
      icon: Zap,
      name: "Account Verification",
      description: "Get verified and start trading quickly",
      xdeel: "Verified in minutes",
      traditional: "Days of manual checks",
      badge: "Instant"
    },
    {
      icon: Euro,
      name: "SEPA/SWIFT Transfers",
      description: "European banking integration",
      xdeel: "Full SEPA & SWIFT support",
      traditional: "Limited banking options",
      badge: "EU Banking"
    },
    {
      icon: Shield,
      name: "Licensed in EU",
      description: "Regulated and compliant operations",
      xdeel: "KNF licensed & regulated",
      traditional: "Often unregulated",
      badge: "EU Licensed"
    },
    {
      icon: CreditCard,
      name: "Direct Fiat to Crypto",
      description: "Seamless currency conversion",
      xdeel: "Direct conversion",
      traditional: "Multiple steps required",
      badge: "Direct"
    },
    {
      icon: HeadphonesIcon,
      name: "24/7 Support",
      description: "Round-the-clock assistance",
      xdeel: "24/7 expert assistance",
      traditional: "Business hours only",
      badge: "24/7"
    },
    {
      icon: Shield,
      name: "Bank-Grade Security",
      description: "Military-grade protection",
      xdeel: "Military-grade encryption",
      traditional: "Security varies widely",
      badge: "Encrypted"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-[#F4F0FF] via-[#F8F6FF] to-white w-full border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-[#7B38F3] border-[#7B38F3]/30 bg-white px-4 py-2 rounded-xl text-sm font-medium">
            Comparison
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#2E2E2E] mb-4">
            Why Businesses & Traders Choose Xdeel
          </h2>
          <p className="text-lg text-[#7C7C7C] max-w-3xl mx-auto leading-relaxed">
            Compare Xdeel to traditional exchanges and see the difference. Built for professionals who demand reliability, speed, and regulatory compliance.
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 items-center p-4 bg-gradient-to-r from-[#7B38F3]/5 to-[#A855F7]/5 border-b border-gray-100">
              <div className="col-span-5">
                <h3 className="text-lg font-bold text-[#2E2E2E]">Feature</h3>
              </div>
              <div className="col-span-3 text-center">
                <div className="inline-flex items-center space-x-2">
                  <img 
                    src="/lovable-uploads/a04c51e1-686a-444a-aca8-79f1c89c8647.png" 
                    alt="Xdeel Logo" 
                    className="w-7 h-7 object-contain"
                  />
                  <span className="text-[#7B38F3] font-bold text-lg">Xdeel</span>
                </div>
              </div>
              <div className="col-span-4 text-center">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-7 h-7 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                  <span className="text-gray-600 font-bold text-lg">Traditional</span>
                </div>
              </div>
            </div>

            {/* Feature Rows */}
            {comparisonFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const isVisible = visibleItems.includes(index);
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  data-index={index}
                  className={`grid grid-cols-12 gap-4 items-center p-3 py-3 transition-all duration-700 hover:bg-gray-50/50 ${
                    isEven ? 'bg-[#F9F6FF]/30' : 'bg-white'
                  } ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  } ${index !== comparisonFeatures.length - 1 ? 'border-b border-gray-100' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Feature Info */}
                  <div className="col-span-5 space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 bg-[#7B38F3]/10 rounded-lg">
                        <IconComponent className="w-4 h-4 text-[#7B38F3]" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#2E2E2E]">{feature.name}</h4>
                        <p className="text-xs text-[#7C7C7C]">{feature.description}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs text-[#7B38F3] border-[#7B38F3]/30 ml-7">
                      {feature.badge}
                    </Badge>
                  </div>

                  {/* Xdeel Column */}
                  <div className="col-span-3 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-700" />
                      </div>
                      <div className="text-left">
                        <p className="text-[#2E2E2E] font-semibold text-sm">{feature.xdeel}</p>
                      </div>
                    </div>
                  </div>

                  {/* Traditional Column */}
                  <div className="col-span-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <X className="w-3 h-3 text-red-700" />
                      </div>
                      <div className="text-left">
                        <p className="text-[#7C7C7C] font-medium text-sm">{feature.traditional}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Summary CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#7B38F3] to-[#A855F7] rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-3">
              Ready to Experience the Xdeel Advantage?
            </h3>
            <p className="text-[#E8DCFF] mb-6 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses and traders who chose Xdeel for faster, safer, and fully compliant cryptocurrency trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#7B38F3] px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
                Start Trading Today
              </button>
              <button className="border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
