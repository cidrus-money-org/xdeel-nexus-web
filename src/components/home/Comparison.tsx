
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Shield, Euro, Zap, Clock, HeadphonesIcon, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

export const Comparison = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const features = [
    {
      icon: Zap,
      feature: "Instant Verification",
      description: "Get verified and start trading immediately",
      xdeel: "Verified in minutes",
      xdeelType: "success" as const,
      traditional: "Delays and manual checks",
      traditionalType: "fail" as const
    },
    {
      icon: Euro,
      feature: "SEPA/SWIFT Transfers",
      description: "Direct European banking integration",
      xdeel: "Full SEPA & SWIFT support",
      xdeelType: "success" as const,
      traditional: "Limited options",
      traditionalType: "limited" as const
    },
    {
      icon: Shield,
      feature: "Licensed in EU",
      description: "Authorized by Polish Financial Supervision Authority",
      xdeel: "KNF Authorized",
      xdeelType: "success" as const,
      traditional: "Often unregulated",
      traditionalType: "fail" as const
    },
    {
      icon: CreditCard,
      feature: "Direct Fiat to Crypto",
      description: "No middleman, direct conversion",
      xdeel: "Direct conversion",
      xdeelType: "success" as const,
      traditional: "Multiple steps required",
      traditionalType: "limited" as const
    },
    {
      icon: HeadphonesIcon,
      feature: "24/7 Support",
      description: "Round-the-clock customer assistance",
      xdeel: "Always available",
      xdeelType: "success" as const,
      traditional: "Business hours only",
      traditionalType: "fail" as const
    },
    {
      icon: Clock,
      feature: "Bank-Grade Security",
      description: "Enterprise-level protection for your assets",
      xdeel: "Military-grade encryption",
      xdeelType: "success" as const,
      traditional: "Security varies",
      traditionalType: "limited" as const
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

  const getStatusIcon = (type: 'success' | 'fail' | 'limited') => {
    switch (type) {
      case 'success':
        return <Check className="w-5 h-5 text-green-500" />;
      case 'fail':
        return <X className="w-5 h-5 text-red-500" />;
      case 'limited':
        return <span className="text-amber-600 text-sm font-medium">Limited</span>;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F4F0FF] via-[#F8F6FF] to-white w-full border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-[#7B38F3] border-[#7B38F3]/30 bg-white px-6 py-3 rounded-xl text-sm font-medium">
            Comparison
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#2E2E2E] mb-6">
            Why Choose Xdeel?
          </h2>
          <p className="text-xl text-[#7C7C7C] max-w-3xl mx-auto leading-relaxed">
            See how Xdeel compares to traditional cryptocurrency exchanges and discover the difference.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <Card 
                key={index}
                data-index={index}
                className={`bg-white/70 backdrop-blur-sm border border-gray-200/50 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    {/* Feature Info */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-[#7B38F3]/10 rounded-lg">
                          <IconComponent className="w-6 h-6 text-[#7B38F3]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#2E2E2E]">{item.feature}</h3>
                      </div>
                      <p className="text-sm text-[#7C7C7C] leading-relaxed">{item.description}</p>
                    </div>

                    {/* Xdeel Column */}
                    <div className="text-center">
                      <div className="mb-3">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-[#7B38F3] rounded-full mb-3">
                          <span className="text-white font-bold text-sm">X</span>
                        </div>
                        <h4 className="text-sm font-semibold text-[#7B38F3] uppercase tracking-wide">Xdeel</h4>
                      </div>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        {getStatusIcon(item.xdeelType)}
                      </div>
                      <p className="text-sm font-medium text-[#2E2E2E]">{item.xdeel}</p>
                    </div>

                    {/* Traditional Column */}
                    <div className="text-center">
                      <div className="mb-3">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-400 rounded-full mb-3">
                          <span className="text-white font-bold text-sm">T</span>
                        </div>
                        <h4 className="text-sm font-semibold text-[#7C7C7C] uppercase tracking-wide">Traditional</h4>
                      </div>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        {getStatusIcon(item.traditionalType)}
                      </div>
                      <p className="text-sm font-medium text-[#7C7C7C]">{item.traditional}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-[#7C7C7C] mb-6 max-w-2xl mx-auto">
              Join thousands of users who have already switched to Xdeel for faster, safer, and more reliable cryptocurrency trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#7B38F3] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#6a2fe0] transition-colors shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
              <button className="border border-[#7B38F3] text-[#7B38F3] px-8 py-3 rounded-xl font-semibold hover:bg-[#7B38F3] hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
