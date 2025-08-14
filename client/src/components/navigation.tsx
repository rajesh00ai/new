import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-shrink-0 flex items-center">
              <div className="h-12 w-12 bg-brand-green rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">S</span>
              </div>
            </div>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-brand-green hover:text-brand-orange transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-brand-orange transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('recipes')} 
                className="text-gray-700 hover:text-brand-orange transition-colors font-medium"
              >
                Recipes
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="text-gray-700 hover:text-brand-orange transition-colors font-medium"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-gray-700 hover:text-brand-orange transition-colors font-medium"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('wellness-ai')} 
                className="text-gray-700 hover:text-brand-orange transition-colors font-medium"
              >
                Wellness AI
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <a 
              href="tel:+917010422748" 
              className="bg-brand-orange text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              Shop Now
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'recipes', label: 'Recipes' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'faq', label: 'FAQ' },
                  { id: 'wellness-ai', label: 'Wellness AI' }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block px-3 py-2 text-gray-700 hover:text-brand-orange font-medium w-full text-left transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.a
                  href="tel:+917010422748"
                  className="block px-3 py-2 bg-brand-orange text-white rounded-lg font-medium text-center mx-3 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  Shop Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
