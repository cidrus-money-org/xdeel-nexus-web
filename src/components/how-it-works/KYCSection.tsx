
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
    <section className="py-20 bg-gradient-to-br from-[#F9F7FD] via-[#F4F0FF] to-[#EDE7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-xdeel-primary border-xdeel-primary/40 bg-white/90 px-6 py-3 text-base font-semibold shadow-sm">
            Security & Compliance
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-8">
            Enterprise-Grade Security & Full Regulatory Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Your security and regulatory protection are our highest priorities. We maintain 
            institutional-grade standards with full European compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white/95 backdrop-blur-sm ring-1 ring-gray-200/60 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-xdeel-primary group-hover:to-purple-600 transition-all duration-300 shadow-md">
                  <feature.icon className="w-10 h-10 text-xdeel-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-xdeel-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12 bg-gray-300 h-px" />

        {/* Enhanced Regulatory Compliance Block */}
        <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl px-10 py-12 max-w-5xl mx-auto border border-gray-200/60">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-xdeel-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-6">
              Fully Regulated & Compliant
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto font-medium">
              Licensed and regulated by the Polish Financial Supervision Authority (KNF), 
              ensuring full compliance with European financial regulations and providing 
              maximum protection for your investments and personal data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <div className="flex items-center text-gray-700 font-semibold text-lg bg-gray-50 px-6 py-3 rounded-full">
                <Phone className="w-6 h-6 mr-3 text-xdeel-primary" />
                +48 66 224 8895
              </div>
              <div className="flex items-center text-gray-700 font-semibold text-lg bg-gray-50 px-6 py-3 rounded-full">
                <Mail className="w-6 h-6 mr-3 text-xdeel-primary" />
                support@xdeel.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
