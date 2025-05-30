
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, CreditCard, Users, Lock, CheckCircle } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "EU VASP Licensed",
      description: "Fully regulated and compliant with European Union standards for Virtual Asset Service Providers.",
      badge: "Regulated"
    },
    {
      icon: Zap,
      title: "Instant KYC Verification",
      description: "Complete identity verification in minutes, not days. Get verified and start trading immediately.",
      badge: "Fast"
    },
    {
      icon: CreditCard,
      title: "Easy On/Off-Ramp",
      description: "Seamlessly convert between fiat and crypto with bank transfers, cards, and multiple payment methods.",
      badge: "Convenient"
    },
    {
      icon: Lock,
      title: "Secure Wallet",
      description: "Bank-grade security with multi-signature technology and cold storage for maximum protection.",
      badge: "Secure"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Expert customer support available around the clock to help with any questions or issues.",
      badge: "Support"
    },
    {
      icon: CheckCircle,
      title: "Transparent Fees",
      description: "No hidden costs. Clear, competitive pricing with detailed fee breakdown for all transactions.",
      badge: "Honest"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Crypto Trading
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From regulatory compliance to user experience, we've built every feature 
            with your security and convenience in mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 mr-3">
                        {feature.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
