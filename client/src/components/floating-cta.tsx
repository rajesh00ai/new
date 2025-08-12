import { ShoppingCart } from "lucide-react";

export default function FloatingCTA() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={scrollToProducts}
        className="bg-brand-orange text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all group animate-bounce"
      >
        <div className="flex items-center space-x-2">
          <ShoppingCart className="w-6 h-6" />
          <span className="hidden sm:block font-semibold">Buy Now</span>
        </div>
      </button>
    </div>
  );
}