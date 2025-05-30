
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, CreditCard, Wallet } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account in 2 minutes"
    },
    {
      step: "02", 
      icon: CreditCard,
      title: "Add Payment Method",
      description: "Choose your preferred deposit method"
    },
    {
      step: "03",
      icon: Wallet,
      title: "Start Trading",
      description: "Buy and sell crypto instantly"
    }
  ];

  return (
    <section className="py-16 bg-[#F4F0FF] w-full">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-[#7B38F3] border-[#7B38F3]/30 bg-white/80 px-4 py-2 rounded-xl">
            How It Works
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2E2E2E] mb-6">
            Get Started in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7B38F3] text-white rounded-2xl text-xl font-bold mb-6 shadow-lg">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-[#F4F0FF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <step.icon className="w-8 h-8 text-[#7B38F3]" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#7C7C7C] leading-relaxed">
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
