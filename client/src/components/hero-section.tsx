import heroProductPath from "@assets/WhatsApp Image 2025-07-24 at 12.04.08_7bef17f0_1754285708678.jpg";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-bold text-5xl lg:text-6xl text-brand-green leading-tight">
                Traditional Tamil
                <span className="text-brand-orange"> Wellness</span>
                <br />
                Redefined
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the ancient wisdom of Tamil nutrition with our premium Fig Malt blend. 
                Crafted with organic figs, almonds, and cashews for modern wellness needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProducts}
                className="bg-brand-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all text-center"
              >
                Explore Products
              </button>
              <a 
                href="tel:+917010422748" 
                className="border-2 border-brand-orange text-brand-orange px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-orange hover:text-white transition-all text-center flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Order Now
              </a>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-green">100%</div>
                <div className="text-sm text-gray-600">Organic</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-green">Ancient</div>
                <div className="text-sm text-gray-600">Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-green">Natural</div>
                <div className="text-sm text-gray-600">Ingredients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroProductPath} 
              alt="SARIRA Fig Malt - Premium organic wellness blend with natural figs, grains & herbal goodness" 
              className="w-full h-auto rounded-2xl shadow-2xl" 
            />
            <div className="absolute -top-4 -right-4 bg-brand-orange text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              No Added Sugar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
