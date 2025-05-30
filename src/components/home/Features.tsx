
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, CreditCard, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Hassle-Free and Rapid Setup",
      description: "Get started in minutes with our streamlined onboarding process.",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Methods",
      description: "Support for multiple payment options including bank transfers and cards.",
    },
    {
      icon: Shield,
      title: "KNF Authorization",
      description: "Fully authorized by Polish Financial Supervision Authority.",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support via phone and email.",
    }
  ];

  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-[#7B38F3] border-[#7B38F3]/30 bg-[#F4F0FF] px-4 py-2 rounded-xl">
            Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2E2E2E] mb-6">
            Everything You Need for Crypto Trading
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-[#F4F0FF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#7B38F3] transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-[#7B38F3] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#7C7C7C] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
