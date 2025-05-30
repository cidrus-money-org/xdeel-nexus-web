
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, Zap, Shield, CreditCard } from "lucide-react";

export const AppPreview = () => {
  const mobileFeatures = [
    {
      icon: Zap,
      title: "Instant Trading",
      description: "Buy and sell crypto in seconds"
    },
    {
      icon: Shield,
      title: "Secure Wallet",
      description: "Your funds are always protected"
    },
    {
      icon: CreditCard,
      title: "Easy Deposits",
      description: "Add funds with your bank card"
    }
  ];

  return (
    <section className="py-20 bg-white w-full">
      <div className="w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="outline" className="mb-4 text-[#7B38F3] border-[#7B38F3]/30 bg-[#F4F0FF] px-4 py-2 rounded-xl">
              Mobile App
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2E2E2E] mb-6">
              Manage Crypto on the Go
            </h2>
            <p className="text-lg text-[#7C7C7C] mb-8 leading-relaxed">
              Take your crypto portfolio with you. Our mobile app provides full trading functionality 
              with the same security and ease of use you expect from Xdeel.
            </p>

            <div className="space-y-6 mb-8">
              {mobileFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F4F0FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#7B38F3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2E2E2E]">{feature.title}</h3>
                    <p className="text-[#7C7C7C]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-[#7B38F3] hover:bg-[#6a2fe0] text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-[#F4F0FF] to-[#E0D4FF] rounded-3xl shadow-2xl flex items-center justify-center">
                <Smartphone className="w-24 h-24 text-[#7B38F3]" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#7B38F3]/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#F4F0FF] rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
