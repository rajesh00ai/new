import { Coffee, UtensilsCrossed, Cookie } from "lucide-react";
import recipeUsagePath from "@assets/img 3_1754285845404.png";

export default function RecipeUsage() {
  const usageIdeas = [
    {
      icon: Coffee,
      title: "Morning Energy Drink",
      description: "Mix 2 tablespoons with warm milk for a nutritious start to your day."
    },
    {
      icon: UtensilsCrossed,
      title: "Smoothie Bowl Topping",
      description: "Sprinkle over yogurt or smoothie bowls for added nutrition and crunch."
    },
    {
      icon: Cookie,
      title: "Healthy Dessert",
      description: "Blend with dates and coconut for guilt-free energy balls."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-brand-green mb-6">Simple & Delicious Ways to Enjoy</h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover versatile recipes and serving suggestions that make SARIRA Fig Malt 
              a delightful addition to your daily wellness routine.
            </p>
            
            <div className="space-y-6">
              {usageIdeas.map((idea, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-orange bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <idea.icon className="text-brand-orange" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green text-lg mb-2">{idea.title}</h4>
                    <p className="text-gray-600">{idea.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={recipeUsagePath} 
              alt="SARIRA Fig Malt prepared as delicious latte with cinnamon stick and fresh figs" 
              className="w-full h-auto rounded-2xl shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
