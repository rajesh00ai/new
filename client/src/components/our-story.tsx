import traditionalImagePath from "@assets/img 6_1754285845405.png";

export default function OurStory() {
  return (
    <section className="py-20 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                Inspired by Tamil traditions and grandmother's wisdom, SARIRA brings you the authentic taste 
                of wellness that has nourished families for generations.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                Rooted in Siddha medicine and used in traditional rituals, our Fig Malt has been a cornerstone 
                of postpartum nutrition and family wellness in Tamil culture.
              </p>
            </div>

            <div className="bg-brand-orange bg-opacity-10 p-6 rounded-2xl border-l-4 border-brand-orange">
              <p className="text-lg italic font-medium text-brand-orange mb-2">
                Tamil Wisdom
              </p>
              <p className="text-white opacity-90 leading-relaxed">
                "அந்தணர் நூல் வழி நின்றார் அத்திப் பழம் போல்"
              </p>
              <p className="text-sm text-white opacity-75 mt-2">
                Like the fig fruit that follows the sacred texts, our traditions guide us to wellness
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-orange mb-2">Siddha</div>
                <div className="text-sm opacity-75">Medicine</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-orange mb-2">Traditional</div>
                <div className="text-sm opacity-75">Rituals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-orange mb-2">Postpartum</div>
                <div className="text-sm opacity-75">Nutrition</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={traditionalImagePath} 
              alt="Traditional Tamil wellness foods and practices" 
              className="w-full h-auto rounded-2xl shadow-2xl" 
            />
            <div className="absolute inset-0 bg-brand-orange bg-opacity-20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}