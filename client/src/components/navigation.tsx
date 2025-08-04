import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/Logo_1754285787063.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={logoPath} 
                alt="SARIRA Logo" 
                className="h-12 w-auto mr-2"
              />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-brand-green hover:text-brand-orange transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')} 
                className="text-gray-700 hover:text-brand-orange transition-colors font-medium"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('benefits')} 
                className="text-gray-700 hover:text-brand-orange transition-colors font-medium"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-brand-orange transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-brand-orange transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <a 
              href="tel:+917010422748" 
              className="bg-brand-orange text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              Order Now
            </a>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-green hover:text-brand-orange"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-brand-green hover:text-brand-orange font-medium w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block px-3 py-2 text-gray-700 hover:text-brand-orange font-medium w-full text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="block px-3 py-2 text-gray-700 hover:text-brand-orange font-medium w-full text-left"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-brand-orange font-medium w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-brand-orange font-medium w-full text-left"
              >
                Contact
              </button>
              <a 
                href="tel:+917010422748" 
                className="block px-3 py-2 bg-brand-orange text-white rounded-lg font-medium text-center mx-3 mt-4"
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
