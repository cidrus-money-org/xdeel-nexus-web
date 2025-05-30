
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Shield, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-8 bg-blue-100 text-blue-800 border-blue-200">
            <Shield className="w-4 h-4 mr-2" />
            EU Licensed VASP - Fully Regulated
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Simplest Way to
            <span className="text-blue-600 block">Buy & Sell Crypto</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Xdeel makes cryptocurrency accessible to everyone. Fast KYC verification, 
            secure wallet, and instant on/off-ramp - all in one compliant platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <Zap className="w-5 h-5 mr-2" />
              Start Trading Now
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-gray-300 hover:border-blue-600 hover:text-blue-600">
              Learn How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 mb-16">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-500" />
              EU VASP Licensed
            </div>
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-blue-500" />
              Instant Verification
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-500" />
              Bank-Grade Security
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};
