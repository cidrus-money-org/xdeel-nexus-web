
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, FileCheck, Eye } from "lucide-react";

export const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "KNF Regulated",
      description: "Fully authorized by Polish Financial Supervision Authority"
    },
    {
      icon: Lock,
      title: "Multi-Signature Wallets",
      description: "Advanced wallet protection with multiple signature requirements"
    },
    {
      icon: FileCheck,
      title: "Bank-Grade Encryption",
      description: "End-to-end encryption protecting all your transactions"
    },
    {
      icon: Eye,
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 w-full">
      <div className="w-full px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#7B38F3] border-[#7B38F3]/30 bg-white px-4 py-2 rounded-xl">
            Security & Regulation
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2E2E2E] mb-4">
            Security, Regulation, and Peace of Mind
          </h2>
          <p className="text-lg text-[#7C7C7C] max-w-3xl mx-auto">
            Your security is our priority. We maintain the highest standards of protection and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-gray-200 hover:border-[#7B38F3]/50 rounded-2xl hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#F4F0FF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7B38F3] transition-colors duration-300 shadow-md">
                  <feature.icon className="w-8 h-8 text-[#7B38F3] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">
                  {feature.title}
                </h3>
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
