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
              <div className="h-10 sm:h-12 w-10 sm:w-12 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-brand-green font-bold text-lg sm:text-xl">S</span>
              </div>
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
                  onClick={() => scrollToSection('benefits')} 
                  className="hover:text-brand-orange transition-colors text-left"
                >
                  Benefits
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
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-brand-orange transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 opacity-90">
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
              <li>
                <a 
                  href="/faq" 
                  className="hover:text-brand-orange transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 opacity-90">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+91 70104 22748</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>sariranutrition@gmail.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center opacity-90">
          <p>&copy; 2024 SARIRA. All rights reserved. Traditional Tamil Wellness Products.</p>
        </div>
      </div>
    </footer>
  );
}
