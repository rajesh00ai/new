export default function RecipesGrid() {
  const recipes = [
    {
      id: 1,
      title: "Classic Warm Fig Malt Drink",
      description: "A daily immunity booster for all ages. Rich in antioxidants and energy nutrition to add strength and comfort your day.",
      category: "Classic Energy Balls"
    },
    {
      id: 2,
      title: "Fig Malt Banana Smoothie",
      description: "A kids-friendly fiber-rich breakfast. Blend one scoop of SARIRA fig malt with banana and milk for a filling snack.",
      category: "Fig Malt Smoothie"
    },
    {
      id: 3,
      title: "Sugar-Free Fig Malt Muffins",
      description: "Kid-friendly guilt-free snacks perfect for little ones. Just egg-free whole wheat with fig malt added with your favorite nuts muffins.",
      category: "Sugar-Free Fig Malt Muffins"
    },
    {
      id: 4,
      title: "SARIRA Energy Balls",
      description: "No-bake bites for busy days. Mix with other nuts, dates and coconut, then roll into balls and refrigerate.",
      category: "SARIRA Energy Balls"
    },
    {
      id: 5,
      title: "Wholesome Toast Topper",
      description: "A sweet surprise in everyday meals. Sprinkle SARIRA on your multigrain toast, chapatti, or a simple piece of bread."
    },
    {
      id: 6,
      title: "Nourishing Porridge Mix",
      description: "Gentle porridge ideas for tiny tummies and new moms. Blend perfectly with fig nuts and nourish both mother and child."
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-gradient-to-br from-warm-neutral to-soft-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">
            One Spoon, Many Possibilities
          </h2>
          <p className="text-lg text-gray-600">
            Explore creative, everyday ways to use SARIRA Fig Malt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">
                <div className="text-sm text-brand-orange font-medium mb-2">
                  {recipe.category}
                </div>
                <h3 className="text-xl font-semibold text-brand-green mb-3">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {recipe.description}
                </p>
              </div>
              <button className="text-brand-orange hover:text-brand-green transition-colors font-medium">
                View Recipe →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border border-brand-orange text-brand-orange px-8 py-3 rounded-full font-medium hover:bg-brand-orange hover:text-white transition-all">
            Explore Detailed Recipes
          </button>
        </div>
      </div>
    </section>
  );
}