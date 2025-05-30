
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, FileCheck, Eye, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const KYCSection = () => {
  console.log("KYCSection component is rendering"); // Debug log
  
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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-xdeel-primary border-xdeel-primary bg-white px-6 py-3 text-base font-bold shadow-lg">
            Security & Compliance
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">
            Enterprise-Grade Security & Full Regulatory Compliance
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-semibold">
            Your security and regulatory protection are our highest priorities. We maintain 
            institutional-grade standards with full European compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white ring-2 ring-gray-300 hover:ring-xdeel-primary rounded-2xl border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-xdeel-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-800 text-base leading-relaxed font-medium">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12 bg-gray-400 h-0.5" />

        {/* Enhanced Regulatory Compliance Block */}
        <div className="bg-white shadow-2xl rounded-3xl px-10 py-12 max-w-5xl mx-auto border-2 border-gray-300">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-xdeel-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">
              Fully Regulated & Compliant
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-10 max-w-4xl mx-auto font-semibold">
              Licensed and regulated by the Polish Financial Supervision Authority (KNF), 
              ensuring full compliance with European financial regulations and providing 
              maximum protection for your investments and personal data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <div className="flex items-center text-gray-900 font-bold text-lg bg-gray-100 px-6 py-3 rounded-full border-2 border-gray-300">
                <Phone className="w-6 h-6 mr-3 text-xdeel-primary" />
                +48 66 224 8895
              </div>
              <div className="flex items-center text-gray-900 font-bold text-lg bg-gray-100 px-6 py-3 rounded-full border-2 border-gray-300">
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
