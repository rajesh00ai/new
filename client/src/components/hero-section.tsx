import heroProductPath from "@assets/WhatsApp Image 2025-07-24 at 12.04.08_7bef17f0_1754285708678.jpg";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-warm-neutral to-soft-neutral py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center hero-grid">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-green leading-tight mb-6 animate-fade-in-up hero-title">
                <span className="inline-block animate-slide-in-left">Feed Your Roots.</span>
                <br />
                <span className="inline-block animate-slide-in-right animation-delay-300">Fuel Your Rise.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 hero-subtitle">
                Functional wellness rooted in Tamil tradition, blended for today's lifestyle.
              </p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mobile-stack"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button 
                onClick={scrollToProducts}
                className="bg-brand-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all text-center mobile-full-width"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Fig Malt
              </motion.button>
              <motion.a 
                href="tel:+917010422748" 
                className="border-2 border-brand-orange text-brand-orange px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-brand-orange hover:text-white transition-all text-center flex items-center justify-center mobile-full-width"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="hidden sm:inline">Join Our WhatsApp Circle</span>
                <span className="sm:hidden">WhatsApp</span>
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { label: "Fertility Boost", delay: 0.7 },
                { label: "Postpartum Support", delay: 0.8 },
                { label: "Immunity", delay: 0.9 },
                { label: "No Preservatives", delay: 1.0 }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="text-center p-3 sm:p-4 bg-white bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all cursor-pointer mobile-compact"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-orange rounded-full mx-auto mb-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="text-xs sm:text-sm font-medium text-brand-green">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.img 
              src={heroProductPath} 
              alt="SARIRA Fig Malt - Premium organic wellness blend with natural figs, grains & herbal goodness" 
              className="w-full h-auto rounded-2xl shadow-2xl" 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute -top-4 -right-4 bg-brand-orange text-white px-4 py-2 rounded-full font-semibold shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              No Added Sugar
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
