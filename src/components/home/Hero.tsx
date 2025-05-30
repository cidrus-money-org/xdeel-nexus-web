
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-xdeel-purple pt-16 pb-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
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
          <p className="text-xl text-xdeel-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Xdeel makes cryptocurrency accessible to everyone. Hassle-free setup, 
            flexible payment methods, and instant cryptocurrency purchases - all in one secure platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/signup">
              <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white px-8 py-3 text-lg">
                Start Trading Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-xdeel-primary text-xdeel-primary hover:bg-xdeel-primary hover:text-white">
                Learn How It Works
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-xdeel-gray">
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
      </div>
    </section>
  );
};
