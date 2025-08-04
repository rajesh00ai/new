import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import usageImage1 from "@assets/img2_1754285845406.png";
import usageImage2 from "@assets/img4_1754285845407.png";
import usageImage3 from "@assets/img7_1754285845408.png";
import usageImage4 from "@assets/img8_1754285845408.png";

export default function UsageIdeas() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const usageIdeas = [
    {
      id: 1,
      title: "Toast Topping",
      description: "Spread SARIRA Fig Malt on warm toast for a nutritious breakfast",
      image: usageImage1
    },
    {
      id: 2,
      title: "Chapati Filler",
      description: "Use as a sweet, healthy filling for chapatis and parathas",
      image: usageImage2
    },
    {
      id: 3,
      title: "Porridge Mix",
      description: "Stir into oatmeal or quinoa porridge for natural sweetness",
      image: usageImage3
    },
    {
      id: 4,
      title: "Smoothie Boost",
      description: "Add to smoothies for extra nutrition and rich flavor",
      image: usageImage4
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % usageIdeas.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + usageIdeas.length) % usageIdeas.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">
            Creative Usage Ideas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore versatile ways to enjoy SARIRA Fig Malt throughout your day
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {usageIdeas.map((idea) => (
                <div key={idea.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-brand-green">
                        {idea.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {idea.description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex space-x-2">
                          {usageIdeas.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentSlide(index)}
                              className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentSlide ? 'bg-brand-orange' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {currentSlide + 1} of {usageIdeas.length}
                        </span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <img 
                        src={idea.image} 
                        alt={idea.title}
                        className="w-full h-auto rounded-2xl shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-green hover:text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-green hover:text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}