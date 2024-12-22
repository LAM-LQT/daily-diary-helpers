import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-purple-700">AI Diary</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-700 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-700 transition-colors">How it Works</a>
            <a href="#team" className="text-gray-700 hover:text-purple-700 transition-colors">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-700 transition-colors">Contact</a>
            <Button className="bg-purple-700 hover:bg-purple-800">Get Started</Button>
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
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-purple-700">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-purple-700">How it Works</a>
              <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-purple-700">Team</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-700">Contact</a>
              <Button className="w-full bg-purple-700 hover:bg-purple-800 mt-4">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;