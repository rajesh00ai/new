import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function FloatingCTA() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <motion.button
        onClick={scrollToProducts}
        className="bg-brand-orange text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="flex items-center space-x-2">
          <ShoppingCart className="w-6 h-6" />
          <span className="hidden sm:block font-semibold">Buy Now</span>
        </div>
        
        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-brand-orange"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.button>
    </motion.div>
  );
}