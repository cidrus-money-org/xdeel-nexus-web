
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Clock, LockKeyhole, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-xdeel-purple to-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
            Getting Started
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Your Simple Path to Cryptocurrency Trading
          </h1>
          <p className="text-xl text-xdeel-gray max-w-3xl mx-auto mb-8">
            Xdeel makes cryptocurrency trading accessible to everyone. Follow our simple, 
            secure process to start your crypto journey in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white">
              Create Account Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Learn About KYC Requirements
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-xdeel-gray">
            <Shield className="h-4 w-4 text-green-500" />
            <span>KNF Regulated</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 text-green-500" />
            <span>2-Minute Setup</span>
            <span className="mx-2">•</span>
            <LockKeyhole className="h-4 w-4 text-green-500" />
            <span>Bank-Level Security</span>
          </div>
        </div>
      </div>
    </section>
  );
};
