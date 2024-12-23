import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Thanks Everyday
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-rose-500 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-rose-500 transition-colors">How it Works</a>
            <a href="#team" className="text-gray-600 hover:text-rose-500 transition-colors">Team</a>
            <a href="#contact" className="text-gray-600 hover:text-rose-500 transition-colors">Contact</a>
            <Button className="bg-gradient-to-r from-rose-400 to-purple-600 hover:from-rose-500 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-rose-500">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-rose-500">How it Works</a>
              <a href="#team" className="block px-3 py-2 text-gray-600 hover:text-rose-500">Team</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-rose-500">Contact</a>
              <Button className="w-full bg-gradient-to-r from-rose-400 to-purple-600 hover:from-rose-500 hover:to-purple-700 text-white mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;