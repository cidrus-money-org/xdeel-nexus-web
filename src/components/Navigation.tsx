
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 w-full shadow-sm">
      <div className="w-full px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/fa03512c-6722-42a7-bdbb-c74fe62f602c.png" 
                alt="Xdeel" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-[#7B38F3] bg-[#F4F0FF]' : 'text-[#7C7C7C] hover:text-[#2E2E2E]'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/features') ? 'text-[#7B38F3] bg-[#F4F0FF]' : 'text-[#7C7C7C] hover:text-[#2E2E2E]'
                }`}
              >
                Features
              </Link>
              <Link 
                to="/how-it-works" 
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/how-it-works') ? 'text-[#7B38F3] bg-[#F4F0FF]' : 'text-[#7C7C7C] hover:text-[#2E2E2E]'
                }`}
              >
                How It Works
              </Link>
              <Link 
                to="/knowledge-base" 
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/knowledge-base') ? 'text-[#7B38F3] bg-[#F4F0FF]' : 'text-[#7C7C7C] hover:text-[#2E2E2E]'
                }`}
              >
                Knowledge Base
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-[#7B38F3] bg-[#F4F0FF]' : 'text-[#7C7C7C] hover:text-[#2E2E2E]'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <a href="https://my.xdeel.com/#signin" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="text-[#7C7C7C] hover:text-[#2E2E2E] hover:bg-gray-100 rounded-lg">
                  Sign In
                </Button>
              </a>
              <a href="https://my.xdeel.com/#signup" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#7B38F3] hover:bg-[#6a2fe0] text-white rounded-xl shadow-md hover:scale-105 transition-all duration-200">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#7C7C7C] hover:text-[#2E2E2E] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 rounded-b-xl shadow-lg">
              <Link 
                to="/" 
                className="text-xdeel-gray hover:text-xdeel-dark block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className="text-xdeel-gray hover:text-xdeel-dark block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-xdeel-gray hover:text-xdeel-dark block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/knowledge-base" 
                className="text-xdeel-gray hover:text-xdeel-dark block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Knowledge Base
              </Link>
              <Link 
                to="/contact" 
                className="text-xdeel-gray hover:text-xdeel-dark block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3 space-y-2 flex-col">
                  <a href="https://my.xdeel.com/#signin" target="_blank" rel="noopener noreferrer" className="w-full" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-center text-xdeel-gray hover:text-xdeel-dark hover:bg-gray-100">
                      Sign In
                    </Button>
                  </a>
                  <a href="https://my.xdeel.com/#signup" target="_blank" rel="noopener noreferrer" className="w-full" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-xdeel-primary hover:bg-xdeel-primary-dark text-white">
                      Sign Up
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
