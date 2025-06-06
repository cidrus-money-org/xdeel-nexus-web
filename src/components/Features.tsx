
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, CreditCard, Users, Lock, CheckCircle, Repeat, Clock } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Hassle-Free and Rapid Setup",
      description: "Get started in minutes with our streamlined onboarding process. No complex procedures or lengthy waiting times.",
      badge: "Quick"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Methods",
      description: "Support for multiple payment options including bank transfers, cards, and various local payment methods.",
      badge: "Convenient"
    },
    {
      icon: Clock,
      title: "Instant Cryptocurrency Purchases",
      description: "Buy and sell cryptocurrencies instantly with real-time market prices and immediate transaction processing.",
      badge: "Instant"
    },
    {
      icon: Repeat,
      title: "Convert and Swap",
      description: "Easily convert between different cryptocurrencies or swap to fiat currencies with competitive rates.",
      badge: "Flexible"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support via phone (+48 66 224 8895) and email (support@xdeel.com).",
      badge: "Always Available"
    },
    {
      icon: Shield,
      title: "KNF Authorization",
      description: "Fully authorized by Polish Financial Supervision Authority, ensuring compliance and user protection.",
      badge: "Regulated"
    },
    {
      icon: Lock,
      title: "Advanced Security",
      description: "Bank-grade security measures including multi-factor authentication and encrypted transactions.",
      badge: "Secure"
    },
    {
      icon: CheckCircle,
      title: "Transparent Fees",
      description: "Clear, competitive pricing with no hidden costs. Know exactly what you pay before every transaction.",
      badge: "Honest"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-400 border-blue-500/30 bg-blue-600/10">
            Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Everything You Need for Crypto Trading
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From regulatory compliance to user experience, we've built every feature 
            with your security and convenience in mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-gray-900/50 border-gray-700 hover:border-blue-500/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-400 border-gray-600">
                      {feature.badge}
                    </Badge>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
