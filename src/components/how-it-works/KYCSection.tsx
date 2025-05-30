
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, FileCheck, Eye, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const KYCSection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "KNF Regulated",
      description: "Fully authorized by Polish Financial Supervision Authority with complete EU compliance"
    },
    {
      icon: Lock,
      title: "Multi-Signature Wallets",
      description: "Advanced wallet protection with multiple signature requirements and cold storage"
    },
    {
      icon: FileCheck,
      title: "Bank-Grade Encryption",
      description: "End-to-end encryption protecting all transactions with military-grade security"
    },
    {
      icon: Eye,
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations and privacy standards"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#F9F7FD] to-[#F4F0FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80 px-4 py-2">
            Security & Compliance
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-6">
            Enterprise-Grade Security & Full Regulatory Compliance
          </h2>
          <p className="text-xl text-xdeel-gray max-w-3xl mx-auto leading-relaxed">
            Your security and regulatory protection are our highest priorities. We maintain 
            institutional-grade standards with full European compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-md hover:scale-105 transition-all duration-300 bg-white ring-1 ring-gray-200 rounded-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-xdeel-primary transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-xdeel-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-xdeel-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-xdeel-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-8 bg-gray-200" />

        {/* Elevated Regulatory Compliance Block */}
        <div className="bg-white shadow-sm rounded-xl px-8 py-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-xdeel-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-xdeel-dark mb-4">
              Fully Regulated & Compliant
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              Licensed and regulated by the Polish Financial Supervision Authority (KNF), 
              ensuring full compliance with European financial regulations and providing 
              maximum protection for your investments and personal data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto text-center">
              <div className="flex items-center text-gray-700 font-medium">
                <Phone className="w-5 h-5 mr-2 text-xdeel-primary" />
                +48 66 224 8895
              </div>
              <div className="flex items-center text-gray-700 font-medium">
                <Mail className="w-5 h-5 mr-2 text-xdeel-primary" />
                support@xdeel.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
