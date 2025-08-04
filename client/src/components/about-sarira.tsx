import traditionalFoodsPath from "@assets/img 6_1754285845405.png";

export default function AboutSarira() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-warm-neutral to-soft-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-brand-green mb-6">The SARIRA Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                SARIRA embodies the ancient Tamil philosophy of holistic wellness, where food is medicine 
                and medicine is food. Our name, derived from Sanskrit meaning "body" or "physical form," 
                reflects our commitment to nourishing the body with nature's finest ingredients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Rooted in centuries-old Tamil wellness traditions, we combine time-tested recipes with 
                modern nutritional science to create products that honor our heritage while meeting 
                contemporary health needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-brand-green mb-2">Ancient</div>
                <div className="text-gray-600">Tamil Wisdom</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-brand-orange mb-2">Modern</div>
                <div className="text-gray-600">Science</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={traditionalFoodsPath} 
              alt="Traditional Tamil wellness foods and SARIRA Fig Malt displayed together" 
              className="w-full h-auto rounded-2xl shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
