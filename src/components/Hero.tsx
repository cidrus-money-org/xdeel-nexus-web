
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Shield, Zap, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16 pb-32">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0.6))] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-8 bg-blue-600/20 text-blue-400 border-blue-500/30">
            <Shield className="w-4 h-4 mr-2" />
            Authorized by Polish Financial Supervision Authority (KNF)
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The Simplest Way to
            <span className="text-blue-400 block">Buy & Sell Crypto</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Xdeel makes cryptocurrency accessible to everyone. Hassle-free setup, 
            flexible payment methods, and instant cryptocurrency purchases - all in one secure platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <Zap className="w-5 h-5 mr-2" />
              Start Trading Now
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:bg-gray-800">
              Learn How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 mb-16">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              KNF Authorized
            </div>
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-blue-400" />
              Instant Setup
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-purple-400" />
              24/7 Support
            </div>
          </div>

          {/* Transaction Volume Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">€50M+</div>
              <div className="text-gray-400">Transaction Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-500 mx-auto" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};
