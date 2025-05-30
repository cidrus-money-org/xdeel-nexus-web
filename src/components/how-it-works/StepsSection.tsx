import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, CreditCard, Wallet, ArrowRight, Check, Clock } from "lucide-react";

export const StepsSection = () => {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Sign Up and Create Your Xdeel Account",
      description: "Quick registration process with email verification. Complete your profile setup and get ready to start trading cryptocurrencies.",
      time: "2 minutes",
      details: "Email verification, basic information, secure password setup",
      benefits: [
        "No credit checks required",
        "Simple identity verification",
        "Quick KYC approval process",
        "Instant account activation"
      ],
      timeline: [
        { step: 1, title: "Fill basic registration form", time: "30 seconds" },
        { step: 2, title: "Verify email address", time: "1 minute" },
        { step: 3, title: "Complete KYC verification", time: "varies" }
      ]
    },
    {
      step: "02", 
      icon: CreditCard,
      title: "Select Your Preferred Deposit Method",
      description: "Choose from various payment options including bank transfers, debit/credit cards, and other supported payment methods.",
      time: "Instant",
      details: "Bank transfer, credit/debit cards, local payment methods",
      benefits: [
        "Multiple payment methods",
        "No hidden fees",
        "Competitive exchange rates",
        "Instant deposits available"
      ],
      timeline: [
        { step: 1, title: "Select payment method", time: "10 seconds" },
        { step: 2, title: "Enter payment details", time: "30 seconds" },
        { step: 3, title: "Confirm transaction", time: "10 seconds" }
      ]
    },
    {
      step: "03",
      icon: Wallet,
      title: "Instantly Purchase and Sell Cryptocurrencies",
      description: "Start buying, selling, and trading cryptocurrencies with real-time prices and immediate transaction processing.",
      time: "Real-time",
      details: "Live market prices, instant execution, secure transactions",
      benefits: [
        "Real-time market data",
        "Instant trade execution",
        "Low transaction fees",
        "Secure wallet storage"
      ],
      timeline: [
        { step: 1, title: "Select cryptocurrency", time: "5 seconds" },
        { step: 2, title: "Enter amount to buy/sell", time: "10 seconds" },
        { step: 3, title: "Review and confirm transaction", time: "5 seconds" }
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
            How It Works
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
            Get Started in 3 Simple Steps
          </h2>
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
                <CardContent className="p-8">
                  {/* Step Header */}
                  <div className="flex flex-col items-center mb-6">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-xdeel-primary text-white rounded-full text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-xdeel-purple rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-xdeel-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-2 text-center">
                      {step.title}
                    </h3>
                    
                    {/* Time Badge */}
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.time}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-xdeel-gray mb-6 text-center">
                    {step.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-medium text-xdeel-dark mb-2 text-center">Benefits</h4>
                    <ul className="space-y-2">
                      {step.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-xdeel-gray">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Timeline */}
                  <div>
                    <h4 className="font-medium text-xdeel-dark mb-2 text-center">Process Timeline</h4>
                    <div className="space-y-3">
                      {step.timeline.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-xdeel-gray">{item.step}. {item.title}</span>
                          <span className="text-xdeel-primary font-medium">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
      </div>
    </section>
  );
};
