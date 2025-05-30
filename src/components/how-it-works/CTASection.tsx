
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-800/90"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
          <CardContent className="p-12 text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Shield className="w-4 h-4 mr-2" />
              KNF Licensed & Regulated
            </Badge>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Crypto Journey?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Follow our simple 3-step process and start trading cryptocurrencies in minutes. 
              Join thousands of users who trust Xdeel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Create Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
                  Contact Support
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
