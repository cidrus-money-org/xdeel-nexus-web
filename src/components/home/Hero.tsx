
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-xdeel-purple pt-16 pb-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Trust Badge */}
            <Badge variant="secondary" className="mb-8 bg-white/80 text-xdeel-primary border-xdeel-primary/20">
              <Shield className="w-4 h-4 mr-2" />
              Authorized by Polish Financial Supervision Authority (KNF)
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-xdeel-dark mb-6 leading-tight">
              The Simplest Way to
              <span className="text-xdeel-primary block">Buy & Sell Crypto</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-xdeel-gray mb-8 max-w-2xl leading-relaxed">
              Xdeel makes cryptocurrency accessible to everyone. Hassle-free setup, 
              flexible payment methods, and instant cryptocurrency purchases - all in one secure platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/signup">
                <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white px-8 py-3 text-lg w-full sm:w-auto">
                  Start Trading Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-xdeel-primary text-xdeel-primary hover:bg-xdeel-primary hover:text-white w-full sm:w-auto">
                  Learn How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 text-sm text-xdeel-gray">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-500" />
                KNF Authorized
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-xdeel-primary" />
                Bank-Grade Security
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-500" />
                24/7 Support
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/24821aa9-f534-46a1-a643-c3e584ade79e.png" 
                alt="Cryptocurrency trading platform illustration" 
                className="w-full max-w-lg h-auto object-contain"
              />
              {/* Optional floating elements for visual enhancement */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-xdeel-yellow rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-xdeel-primary rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
