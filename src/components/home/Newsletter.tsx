
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="w-full px-6 lg:px-8">
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
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 rounded-xl border-gray-300 focus:border-[#7B38F3] focus:ring-[#7B38F3]"
            />
            <Button className="bg-[#7B38F3] hover:bg-[#6a2fe0] text-white px-8 py-3 rounded-xl transition-all duration-200 ease-in-out">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-[#7C7C7C] mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
