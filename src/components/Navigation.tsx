
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">Xdeel</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                How It Works
              </a>
              <a href="#faq" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-800">
              <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                How It Works
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                FAQ
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
              <div className="pt-4 pb-3 border-t border-gray-800">
                <div className="flex items-center px-3 space-y-2 flex-col">
                  <Button variant="ghost" className="w-full justify-center text-gray-300 hover:text-white hover:bg-gray-800">
                    Sign In
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
