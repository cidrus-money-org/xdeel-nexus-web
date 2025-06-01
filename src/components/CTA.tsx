
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-800/90"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
          <CardContent className="p-12 text-center">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Shield className="w-4 h-4 mr-2" />
              KNF Licensed & Regulated
            </Badge>

            {/* Headline */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Crypto Journey?
            </h2>
            
            {/* Subheading */}
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who trust Xdeel for secure, compliant, 
              and simple cryptocurrency trading. Get started in minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                <Zap className="w-5 h-5 mr-2" />
                Create Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold bg-white/5 text-gray-900 hover:text-gray-800">
                Contact Support
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-blue-100">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                KNF Authorization
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Instant Setup
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                24/7 Support
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
