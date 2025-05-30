
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#F4F0FF] to-[#EDE7FF] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative">
        <Card className="bg-white shadow-lg ring-1 ring-gray-200 border-0">
          <CardContent className="p-12 text-center">
            <Badge variant="secondary" className="mb-6 bg-xdeel-primary/10 text-xdeel-primary border-xdeel-primary/20">
              <Shield className="w-4 h-4 mr-2" />
              KNF Licensed & Regulated
            </Badge>

            <h2 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-6">
              Ready to Start Your Crypto Journey?
            </h2>
            
            <p className="text-xl text-xdeel-gray mb-8 max-w-2xl mx-auto leading-relaxed">
              Follow our simple 3-step process and start trading cryptocurrencies in minutes. 
              Join thousands of users who trust Xdeel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white px-8 py-3 text-lg">
                  Create Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-xdeel-primary/30 text-xdeel-primary hover:bg-xdeel-primary/5 px-8 py-3 text-lg">
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
