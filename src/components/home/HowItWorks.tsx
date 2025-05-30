
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
    <section className="py-24 bg-xdeel-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
            How It Works
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
            Get Started in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-xdeel-primary text-white rounded-full text-xl font-bold mb-6">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-xdeel-purple rounded-lg flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-xdeel-primary" />
                </div>
                <h3 className="text-xl font-semibold text-xdeel-dark mb-4">
                  {step.title}
                </h3>
                <p className="text-xdeel-gray leading-relaxed">
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
