
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  return (
    <>
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
            
            <p className="text-sm text-[#7C7C7C]">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Payment Partners Section */}
      <section className="py-12 bg-white w-full">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center">
            <h3 className="text-gray-600 font-medium mb-8 text-sm">Trusted Payment Partners</h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {/* Visa */}
              <div className="flex items-center bg-white rounded-lg border border-gray-200 px-4 py-3 shadow-sm" title="Visa">
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6">
                  <rect width="60" height="24" rx="4" fill="#1a1f71"/>
                  <text x="8" y="16" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">Visa</text>
                </svg>
              </div>
              
              {/* Mastercard */}
              <div className="flex items-center bg-white rounded-lg border border-gray-200 px-4 py-3 shadow-sm" title="Mastercard">
                <svg width="70" height="24" viewBox="0 0 70 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6">
                  <circle cx="18" cy="12" r="8" fill="#eb001b"/>
                  <circle cx="32" cy="12" r="8" fill="#ff5f00"/>
                  <path d="M25 6c1.8 2.4 2.8 5.3 2.8 6s-1 3.6-2.8 6c-1.8-2.4-2.8-5.3-2.8-6s1-3.6 2.8-6z" fill="#ff5f00"/>
                  <text x="42" y="16" fill="#000000" fontSize="8" fontWeight="bold">mastercard</text>
                </svg>
              </div>
              
              {/* SEPA */}
              <div className="flex items-center bg-white rounded-lg border border-gray-200 px-4 py-3 shadow-sm" title="SEPA">
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6">
                  <rect width="60" height="24" rx="4" fill="#ffffff"/>
                  <circle cx="14" cy="12" r="6" fill="#1e40af"/>
                  <text x="15.5" y="16" fill="#ffffff" fontSize="8" fontWeight="bold">€</text>
                  <text x="25" y="16" fill="#1e40af" fontSize="10" fontWeight="bold">SEPA</text>
                </svg>
              </div>
              
              {/* SWIFT */}
              <div className="flex items-center bg-gray-100 rounded-lg border border-gray-200 px-4 py-3 shadow-sm" title="SWIFT">
                <svg width="50" height="24" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6">
                  <rect width="50" height="24" rx="4" fill="#374151"/>
                  <text x="6" y="16" fill="#ffffff" fontSize="10" fontWeight="bold">SWIFT</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
