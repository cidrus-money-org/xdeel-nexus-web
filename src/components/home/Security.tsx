
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
    <section className="py-20 bg-gradient-to-b from-[#F9F7FD] to-white w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-[#7B38F3] border-[#7B38F3]/30 bg-white px-4 py-2 rounded-xl">
            Security & Regulation
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2E2E2E] mb-6">
            Security, Regulation, and Peace of Mind
          </h2>
          <p className="text-lg text-[#7C7C7C] max-w-3xl mx-auto leading-relaxed mb-12">
            Your security is our priority. We maintain the highest standards of protection and compliance 
            with European regulations, ensuring your investments are protected by enterprise-grade security 
            measures and full regulatory oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-[#F4F0FF] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#7B38F3] transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-[#7B38F3] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#7C7C7C] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
