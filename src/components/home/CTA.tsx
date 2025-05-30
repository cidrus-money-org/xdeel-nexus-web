
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#8B5CF6] to-[#7B38F3] w-full">
      <div className="w-full px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl rounded-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
                Ready to Start Your Crypto Journey?
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of users who trust Xdeel for secure, compliant, 
                and simple cryptocurrency trading. Get started in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link to="/signup">
                  <Button size="lg" className="bg-white text-[#7B38F3] hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-200 ease-in-out font-semibold">
                    Create Account
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl transition-all duration-200 ease-in-out">
                    Contact Support
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
                <div>€100M+ Transaction Volume</div>
                <div>50K+ Active Users</div>
                <div>KNF Authorized</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
