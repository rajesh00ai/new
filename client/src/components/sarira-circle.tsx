import { Home, UtensilsCrossed, Store } from "lucide-react";

export default function SariraCircle() {
  const circles = [
    {
      icon: Home,
      title: "For Families",
      description: "Join our growing community of families who choose to embrace healthy living, food culture and holistic wellness."
    },
    {
      icon: UtensilsCrossed,
      title: "Nourishing Recipes",
      description: "Access exclusive recipes and tips. Dive into our treasure trove that gives health-led fusion."
    },
    {
      icon: Store,
      title: "For Stores & Retailers",
      description: "Bring SARIRA to your shelf – and to your community. Contact us about bringing authentic Tamil wellness to more."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">
            Join the SARIRA Circle
          </h2>
          <p className="text-lg text-gray-600">
            Become part of our wellness community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {circles.map((circle, index) => {
            const Icon = circle.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-warm-neutral to-soft-neutral p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="text-xl font-semibold text-brand-green mb-4">
                  {circle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {circle.description}
                </p>
                <button className="bg-brand-orange text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">
                  {index === 0 && "Join our WhatsApp"}
                  {index === 1 && "Explore Recipes"}
                  {index === 2 && "Become a Retailer"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}