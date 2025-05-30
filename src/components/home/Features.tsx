
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, CreditCard, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Hassle-Free and Rapid Setup",
      description: "Get started in minutes with our streamlined onboarding process.",
      badge: "Quick"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Methods",
      description: "Support for multiple payment options including bank transfers and cards.",
      badge: "Convenient"
    },
    {
      icon: Shield,
      title: "KNF Authorization",
      description: "Fully authorized by Polish Financial Supervision Authority.",
      badge: "Regulated"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support via phone and email.",
      badge: "Available"
    }
  ];

  return (
    <section className="py-16 bg-white w-full">
      <div className="w-full px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-[#7B38F3] border-[#7B38F3]/30 bg-[#F4F0FF] px-4 py-2 rounded-xl">
            Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2E2E2E] mb-6">
            Everything You Need for Crypto Trading
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-gray-200 hover:border-[#7B38F3]/50 rounded-2xl hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#F4F0FF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7B38F3] transition-colors duration-300 shadow-md">
                  <feature.icon className="w-8 h-8 text-[#7B38F3] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">
                  {feature.title}
                </h3>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-[#7C7C7C] border-gray-200 mb-4 rounded-xl">
                  {feature.badge}
                </Badge>
                <p className="text-[#7C7C7C] leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
