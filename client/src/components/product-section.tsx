import productImage from "@assets/img2_1754290190972.png";

export default function ProductSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">
            Fig Malt – Tradition You Can Sip
          </h2>
          <p className="text-lg text-gray-600">
            Made with Organic Figs & Premium Nuts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={productImage} 
              alt="SARIRA Fig Malt Product"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-green mb-6">Key Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="text-gray-700">Fertility booster</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="text-gray-700">Postpartum nourishment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="text-gray-700">Improves gut health</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="text-gray-700">Naturally sweet – no added sugar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="text-gray-700">Rich in iron & fiber</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-warm-neutral to-soft-neutral p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-green mb-2">₹299</div>
                <div className="text-gray-600 mb-6">200g Pouch</div>
                <button className="bg-brand-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all w-full">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}