
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Shield, Euro, Zap, Clock, HeadphonesIcon, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

export const Comparison = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const featureCategories = [
    {
      title: "Speed & Verification",
      features: [
        {
          icon: Zap,
          name: "Account Verification",
          xdeel: "Verified in minutes",
          traditional: "Days of manual checks",
          badge: "Instant"
        },
        {
          icon: CreditCard,
          name: "Fiat to Crypto",
          xdeel: "Direct conversion",
          traditional: "Multiple steps required",
          badge: "Direct"
        }
      ]
    },
    {
      title: "Regulatory & Banking",
      features: [
        {
          icon: Shield,
          name: "EU Authorization",
          xdeel: "KNF licensed & regulated",
          traditional: "Often unregulated",
          badge: "EU Licensed"
        },
        {
          icon: Euro,
          name: "European Banking",
          xdeel: "Full SEPA & SWIFT support",
          traditional: "Limited banking options",
          badge: "SEPA Ready"
        }
      ]
    },
    {
      title: "Security & Support",
      features: [
        {
          icon: Clock,
          name: "Asset Protection",
          xdeel: "Military-grade encryption",
          traditional: "Security varies widely",
          badge: "Encrypted"
        },
        {
          icon: HeadphonesIcon,
          name: "Customer Support",
          xdeel: "24/7 expert assistance",
          traditional: "Business hours only",
          badge: "24/7"
        }
      ]
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
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#F4F0FF] via-[#F8F6FF] to-white w-full border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-[#7B38F3] border-[#7B38F3]/30 bg-white px-6 py-3 rounded-xl text-sm font-medium">
            Comparison
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#2E2E2E] mb-6">
            Why Businesses & Traders Choose Xdeel
          </h2>
          <p className="text-xl text-[#7C7C7C] max-w-3xl mx-auto leading-relaxed">
            Compare Xdeel to traditional exchanges and see the difference. Built for professionals who demand reliability, speed, and regulatory compliance.
          </p>
        </div>

        {/* Comparison Header */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div></div>
          <div className="text-center">
            <div className="bg-[#7B38F3] text-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">X</span>
              </div>
              <h3 className="text-xl font-bold">Xdeel</h3>
              <p className="text-[#E8DCFF] text-sm mt-2">Modern, regulated, fast</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-500 text-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">T</span>
              </div>
              <h3 className="text-xl font-bold">Traditional</h3>
              <p className="text-gray-300 text-sm mt-2">Legacy exchanges</p>
            </div>
          </div>
        </div>

        {/* Feature Categories */}
        <div className="space-y-12">
          {featureCategories.map((category, categoryIndex) => {
            const isVisible = visibleItems.includes(categoryIndex);
            
            return (
              <div 
                key={categoryIndex}
                data-index={categoryIndex}
                className={`transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">{category.title}</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#7B38F3] to-[#A855F7] mx-auto rounded-full"></div>
                </div>

                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl rounded-3xl overflow-hidden">
                  <CardContent className="p-0">
                    {category.features.map((feature, featureIndex) => {
                      const IconComponent = feature.icon;
                      
                      return (
                        <div key={featureIndex} className={`grid md:grid-cols-3 gap-6 items-center p-8 ${featureIndex !== category.features.length - 1 ? 'border-b border-gray-100' : ''}`}>
                          {/* Feature Info */}
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <div className="p-3 bg-[#7B38F3]/10 rounded-xl">
                                <IconComponent className="w-6 h-6 text-[#7B38F3]" />
                              </div>
                              <div>
                                <h4 className="text-lg font-bold text-[#2E2E2E]">{feature.name}</h4>
                                <Badge variant="outline" className="text-xs text-[#7B38F3] border-[#7B38F3]/30 mt-1">
                                  {feature.badge}
                                </Badge>
                              </div>
                            </div>
                          </div>

                          {/* Xdeel Column */}
                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-2 mb-3">
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <Check className="w-5 h-5 text-white" />
                              </div>
                            </div>
                            <p className="text-[#2E2E2E] font-semibold">{feature.xdeel}</p>
                          </div>

                          {/* Traditional Column */}
                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-2 mb-3">
                              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                <X className="w-5 h-5 text-white" />
                              </div>
                            </div>
                            <p className="text-[#7C7C7C] font-medium">{feature.traditional}</p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Summary CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#7B38F3] to-[#A855F7] rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Xdeel Advantage?
            </h3>
            <p className="text-[#E8DCFF] mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Join thousands of businesses and traders who chose Xdeel for faster, safer, and fully compliant cryptocurrency trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#7B38F3] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg text-lg">
                Start Trading Today
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
