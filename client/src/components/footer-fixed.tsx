import logoPath from "@assets/SARIRA-03_1754285266680.png";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-green text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <img 
                src={logoPath} 
                alt="SARIRA Wellness Logo" 
                className="h-10 sm:h-12 w-auto mr-3"
              />
              <span className="font-bold text-xl sm:text-2xl">SARIRA</span>
            </div>
            <p className="opacity-90 leading-relaxed text-sm sm:text-base">
              Bringing traditional Tamil wellness wisdom to modern health-conscious individuals 
              through premium, organic nutrition products.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-base sm:text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90 text-sm sm:text-base">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="hover:text-brand-orange transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')} 
                  className="hover:text-brand-orange transition-colors text-left"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-brand-orange transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('recipes')} 
                  className="hover:text-brand-orange transition-colors text-left"
                >
                  Recipes
                </button>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-base sm:text-lg mb-4">Support</h4>
            <ul className="space-y-2 opacity-90 text-sm sm:text-base">
              <li>
                <a 
                  href="/shipping" 
                  className="hover:text-brand-orange transition-colors"
                >
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a 
                  href="/returns" 
                  className="hover:text-brand-orange transition-colors"
                >
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="hover:text-brand-orange transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="hover:text-brand-orange transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-base sm:text-lg mb-4">Contact</h4>
            <div className="space-y-3 opacity-90 text-sm sm:text-base">
              <div>
                <p className="mb-1">Call us:</p>
                <a 
                  href="tel:+917010422748" 
                  className="hover:text-brand-orange transition-colors font-medium"
                >
                  +91 70104 22748
                </a>
              </div>
              <div>
                <p className="mb-1">WhatsApp:</p>
                <a 
                  href="https://wa.me/917010422748" 
                  className="hover:text-brand-orange transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message Us
                </a>
              </div>
              <div>
                <p className="mb-1">Email:</p>
                <a 
                  href="mailto:hello@sarira.in" 
                  className="hover:text-brand-orange transition-colors font-medium"
                >
                  hello@sarira.in
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-white border-opacity-20 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="opacity-75 text-sm">
            © 2025 SARIRA Wellness. All rights reserved. | Traditional wisdom meets modern wellness.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}