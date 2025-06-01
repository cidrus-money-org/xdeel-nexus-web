
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-[#F4F0FF] w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#7B38F3] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">
            Stay Updated with Crypto News
          </h3>
          <p className="text-[#7C7C7C] mb-8">
            Get crypto updates, tips & new features delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 rounded-xl border-gray-300 focus:border-[#7B38F3] focus:ring-[#7B38F3] bg-white"
            />
            <Button className="bg-[#7B38F3] hover:bg-[#6a2fe0] text-white px-8 py-3 rounded-xl transition-all duration-200 ease-in-out">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-[#7C7C7C] mb-12">
            No spam, unsubscribe at any time.
          </p>

          {/* Trusted Payment Partners Section */}
          <div className="border-t border-gray-300 pt-8">
            <h4 className="text-[#7C7C7C] font-medium mb-6 text-sm text-center">Trusted Payment Partners</h4>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {/* Visa */}
              <div 
                className="flex items-center bg-[#1a1f71] rounded-lg px-4 py-2 shadow-sm border border-gray-200" 
                title="Visa"
              >
                <span className="text-white font-bold text-sm">Visa</span>
              </div>
              
              {/* Mastercard */}
              <div 
                className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200" 
                title="Mastercard"
              >
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" fill="#eb001b"/>
                  <circle cx="20" cy="12" r="8" fill="#ff5f00"/>
                  <path d="M16 6c1.2 1.6 1.9 3.5 1.9 4s-.7 2.4-1.9 4c-1.2-1.6-1.9-3.5-1.9-4s.7-2.4 1.9-4z" fill="#ff5f00"/>
                </svg>
              </div>
              
              {/* SEPA */}
              <div 
                className="flex items-center bg-[#1e40af] rounded-lg px-4 py-2 shadow-sm border border-gray-200" 
                title="SEPA"
              >
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-2">
                    <span className="text-[#1e40af] font-bold text-xs">€</span>
                  </div>
                  <span className="text-white font-bold text-sm">SEPA</span>
                </div>
              </div>
              
              {/* SWIFT */}
              <div 
                className="flex items-center bg-[#374151] rounded-lg px-4 py-2 shadow-sm border border-gray-200" 
                title="SWIFT"
              >
                <span className="text-white font-bold text-sm">SWIFT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
