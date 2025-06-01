
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Search } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
          <BookOpen className="w-4 h-4 mr-2" />
          Knowledge Base
        </Badge>
        <h1 className="text-4xl lg:text-6xl font-bold text-xdeel-dark mb-6">
          How can we help you?
        </h1>
        <p className="text-xl text-xdeel-gray max-w-3xl mx-auto mb-8">
          Find answers, guides, and resources to help you get the most out of Xdeel. 
          From beginner tutorials to advanced trading strategies.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-xdeel-gray" />
          <Input 
            placeholder="Search guides, topics, and help articles..."
            className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-xdeel-primary rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
