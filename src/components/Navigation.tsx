
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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-xdeel-primary' : 'text-xdeel-gray hover:text-xdeel-dark'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/features') ? 'text-xdeel-primary' : 'text-xdeel-gray hover:text-xdeel-dark'
                }`}
              >
                Features
              </Link>
              <Link 
                to="/how-it-works" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/how-it-works') ? 'text-xdeel-primary' : 'text-xdeel-gray hover:text-xdeel-dark'
                }`}
              >
                How It Works
              </Link>
              <Link 
                to="/faq" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/faq') ? 'text-xdeel-primary' : 'text-xdeel-gray hover:text-xdeel-dark'
                }`}
              >
                FAQ
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-xdeel-primary' : 'text-xdeel-gray hover:text-xdeel-dark'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-xdeel-primary' : 'text-xdeel-gray hover:text-xdeel-dark'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <Link to="/login">
                <Button variant="ghost" className="text-xdeel-gray hover:text-xdeel-dark hover:bg-gray-100">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-xdeel-gray hover:text-xdeel-dark focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
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
                to="/faq" 
                className="text-xdeel-gray hover:text-xdeel-dark block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/about" 
                className="text-xdeel-gray hover:text-xdeel-dark block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
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
                  <Link to="/login" className="w-full" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-center text-xdeel-gray hover:text-xdeel-dark hover:bg-gray-100">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup" className="w-full" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-xdeel-primary hover:bg-xdeel-primary-dark text-white">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
