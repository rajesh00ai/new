import { useQuery } from "@tanstack/react-query";
import productShowcasePath from "@assets/img1_1754285845395.png";
import { Leaf, Brain, Dumbbell, Shield } from "lucide-react";
import type { Product } from "@shared/schema";

export default function ProductShowcase() {
  const { data: products } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const mainProduct = products && products.length > 0 ? products[0] : null;

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">Premium Fig Malt Collection</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our flagship product crafted with the finest organic ingredients, 
            following traditional Tamil wellness practices for modern health benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src={productShowcasePath} 
              alt="SARIRA Fig Malt with organic figs, almonds and cashews surrounding the package" 
              className="w-full h-auto rounded-2xl shadow-xl" 
            />
            
            <div className="absolute -top-4 -right-4 bg-brand-orange text-white px-4 py-2 rounded-full font-semibold">
              Premium Quality
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-brand-green mb-4">
                {mainProduct?.name || "SARIRA Fig Malt"}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {mainProduct?.description || "Our signature blend combines the natural sweetness of organic figs with the protein-rich goodness of almonds and cashews. A perfect harmony of taste and nutrition."}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center">
                  <Leaf className="text-brand-green text-xl" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-brand-green">Organic Figs</div>
                  <div className="text-sm text-gray-600">Rich in fiber & antioxidants</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-orange bg-opacity-10 rounded-full flex items-center justify-center">
                  <Brain className="text-brand-orange text-xl" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-brand-green">Almonds</div>
                  <div className="text-sm text-gray-600">Brain & heart health</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center">
                  <Dumbbell className="text-brand-green text-xl" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-brand-green">Cashews</div>
                  <div className="text-sm text-gray-600">Protein & healthy fats</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-orange bg-opacity-10 rounded-full flex items-center justify-center">
                  <Shield className="text-brand-orange text-xl" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-brand-green">Natural Immunity</div>
                  <div className="text-sm text-gray-600">Boosts immune system</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+917010422748" 
                className="bg-brand-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all text-center flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Order Now: +91 7010422748
              </a>
              <button className="border-2 border-brand-green text-brand-green px-8 py-3 rounded-full font-semibold hover:bg-brand-green hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
