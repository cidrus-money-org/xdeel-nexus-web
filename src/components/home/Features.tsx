
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
    <section className="py-24 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-xdeel-purple">
            Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
            Everything You Need for Crypto Trading
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-gray-200 hover:border-xdeel-primary/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-xdeel-purple rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-xdeel-primary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-xdeel-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-xdeel-dark mb-2">
                  {feature.title}
                </h3>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-xdeel-gray border-gray-200 mb-3">
                  {feature.badge}
                </Badge>
                <p className="text-xdeel-gray leading-relaxed text-sm">
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
