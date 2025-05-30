
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, CreditCard, Repeat } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Quick Sign Up",
      description: "Create your account in minutes with our streamlined verification process.",
      step: "01"
    },
    {
      icon: CreditCard,
      title: "Add Payment Method",
      description: "Connect your bank account or card for seamless transactions.",
      step: "02"
    },
    {
      icon: Repeat,
      title: "Start Trading",
      description: "Buy, sell, and convert cryptocurrencies instantly with competitive rates.",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-[#7B38F3] border-[#7B38F3]/30 bg-[#F4F0FF] px-4 py-2 rounded-xl">
            How It Works
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2E2E2E] mb-6">
            Get Started in Three Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-gray-200 hover:border-[#7B38F3]/50 rounded-2xl relative overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="absolute top-4 right-4 text-6xl font-bold text-[#F4F0FF] group-hover:text-[#7B38F3]/20 transition-colors duration-300">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-[#F4F0FF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7B38F3] transition-colors duration-300 relative z-10">
                  <step.icon className="w-8 h-8 text-[#7B38F3] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-[#7C7C7C] leading-relaxed relative z-10">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
