import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Thanks Everyday
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a>
            <a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Team</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
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
              <a href="#features" className="block px-3 py-2 text-muted-foreground hover:text-primary">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-muted-foreground hover:text-primary">How it Works</a>
              <a href="#team" className="block px-3 py-2 text-muted-foreground hover:text-primary">Team</a>
              <a href="#contact" className="block px-3 py-2 text-muted-foreground hover:text-primary">Contact</a>
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground mt-4">
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