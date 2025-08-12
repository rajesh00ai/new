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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-green leading-tight mb-6">
                <span className="inline-block">Feed Your Roots.</span>
                <br />
                <span className="inline-block">Fuel Your Rise.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                Functional wellness rooted in Tamil tradition, blended for today's lifestyle.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProducts}
                className="bg-brand-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all text-center w-full sm:w-auto"
              >
                Try Fig Malt
              </button>
              <a 
                href="tel:+917010422748" 
                className="border-2 border-brand-orange text-brand-orange px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-brand-orange hover:text-white transition-all text-center flex items-center justify-center w-full sm:w-auto"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="hidden sm:inline">WhatsApp Order</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8">
              {["Fertility Boost", "Postpartum Support", "Immunity", "No Preservatives"].map((label, index) => (
                <div 
                  key={label}
                  className="text-center p-3 sm:p-4 bg-white bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-orange rounded-full mx-auto mb-2" />
                  <div className="text-xs sm:text-sm font-medium text-brand-green">{label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroProductPath} 
              alt="SARIRA Fig Malt - Premium organic wellness blend with natural figs, grains & herbal goodness" 
              className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" 
              loading="eager"
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
