
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-24 bg-xdeel-yellow w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-gray-200 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-6">
                Ready to Start Your Crypto Journey?
              </h2>
              
              <p className="text-xl text-xdeel-gray mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of users who trust Xdeel for secure, compliant, 
                and simple cryptocurrency trading. Get started in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/signup">
                  <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white px-8 py-3 text-lg">
                    Create Account
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-xdeel-primary/30 text-xdeel-primary hover:bg-xdeel-purple px-8 py-3 text-lg">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
