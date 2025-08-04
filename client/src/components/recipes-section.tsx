import { Coffee, Utensils, Cookie, ArrowRight } from "lucide-react";
import recipeImagePath from "@assets/img 3_1754285845404.png";

export default function RecipesSection() {
  const recipes = [
    {
      id: 1,
      title: "Classic Fig Malt Drink",
      description: "Traditional warm drink perfect for breakfast or evening relaxation",
      icon: Coffee,
      ingredients: ["2 tbsp SARIRA Fig Malt", "1 cup warm milk", "Pinch of cardamom"],
      image: recipeImagePath
    },
    {
      id: 2,
      title: "Fig Smoothie Bowl",
      description: "Nutritious breakfast bowl topped with fresh fruits and nuts",
      icon: Utensils,
      ingredients: ["2 tbsp SARIRA Fig Malt", "1 banana", "Greek yogurt", "Mixed berries"],
      image: recipeImagePath
    },
    {
      id: 3,
      title: "Fig Malt Muffins",
      description: "Healthy baked treats sweetened naturally with fig malt",
      icon: Cookie,
      ingredients: ["3 tbsp SARIRA Fig Malt", "Whole wheat flour", "Eggs", "Baking powder"],
      image: recipeImagePath
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-neutral to-soft-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">
            Delicious Recipes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover creative ways to incorporate SARIRA Fig Malt into your daily nutrition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => {
            const Icon = recipe.icon;
            return (
              <div 
                key={recipe.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-brand-green bg-opacity-90 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-3">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {recipe.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-brand-green mb-2">Key Ingredients:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="flex items-center text-brand-orange hover:text-brand-green transition-colors font-medium">
                    Read Full Recipe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}