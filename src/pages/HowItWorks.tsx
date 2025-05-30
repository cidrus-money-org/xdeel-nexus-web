
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserPlus, CreditCard, Wallet, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Sign Up and Create Your Xdeel Account",
      description: "Quick registration process with email verification. Complete your profile setup and get ready to start trading cryptocurrencies.",
      time: "2 minutes",
      details: "Email verification, basic information, secure password setup"
    },
    {
      step: "02", 
      icon: CreditCard,
      title: "Select Your Preferred Deposit Method",
      description: "Choose from various payment options including bank transfers, debit/credit cards, and other supported payment methods.",
      time: "Instant",
      details: "Bank transfer, credit/debit cards, local payment methods"
    },
    {
      step: "03",
      icon: Wallet,
      title: "Instantly Purchase and Sell Cryptocurrencies",
      description: "Start buying, selling, and trading cryptocurrencies with real-time prices and immediate transaction processing.",
      time: "Real-time",
      details: "Live market prices, instant execution, secure transactions"
    }
  ];

  return (
    <Layout>
      <section className="py-24 bg-xdeel-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
              How It Works
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Get Started in 3 Simple Steps
            </h1>
            <p className="text-xl text-xdeel-gray max-w-3xl mx-auto">
              From registration to your first crypto purchase, we've made the entire 
              process as simple and secure as possible.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white border-gray-200 hover:border-xdeel-primary/50">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-xdeel-primary text-white rounded-full text-xl font-bold mb-6">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-xdeel-purple rounded-lg flex items-center justify-center mx-auto mb-6">
                      <step.icon className="w-8 h-8 text-xdeel-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-4">
                      {step.title}
                    </h3>
                    <p className="text-xdeel-gray mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <p className="text-sm text-xdeel-gray mb-4">
                      {step.details}
                    </p>
                    
                    {/* Time Badge */}
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      {step.time}
                    </Badge>
                  </CardContent>
                </Card>

                {/* Arrow (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-xdeel-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/signup">
              <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white px-8 py-3">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
