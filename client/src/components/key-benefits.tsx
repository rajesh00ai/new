import { Leaf, Heart, Zap, Shield, Baby, Smile } from "lucide-react";

export default function KeyBenefits() {
  const benefits = [
    {
      icon: Leaf,
      title: "No Added Sugar",
      description: "Natural sweetness from organic figs"
    },
    {
      icon: Heart,
      title: "Rich in Fiber",
      description: "Supports healthy digestion naturally"
    },
    {
      icon: Zap,
      title: "Supports Digestion",
      description: "Traditional Tamil digestive wellness"
    },
    {
      icon: Shield,
      title: "Calcium & Iron Rich",
      description: "Essential minerals for strong bones"
    },
    {
      icon: Baby,
      title: "Fertility Booster",
      description: "Ancient wisdom for reproductive health"
    },
    {
      icon: Smile,
      title: "Gut Friendly",
      description: "Gentle on stomach, easy to digest"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">
            Key Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the natural goodness of SARIRA Fig Malt, crafted with ancient Tamil wisdom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-warm-neutral to-soft-neutral rounded-2xl hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange group-hover:bg-opacity-10 transition-all duration-300">
                  <Icon className="w-8 h-8 text-brand-green group-hover:text-brand-orange transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-brand-green mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}