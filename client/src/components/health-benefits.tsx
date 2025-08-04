import { Heart, Utensils, Bone, ShieldCheck } from "lucide-react";

export default function HealthBenefits() {
  const benefits = [
    {
      icon: Heart,
      title: "Rich in Nutrients",
      description: "Packed with essential vitamins, minerals, and antioxidants for optimal health and vitality."
    },
    {
      icon: Utensils,
      title: "Supports Digestion", 
      description: "Natural fiber content promotes healthy digestive function and gut wellness."
    },
    {
      icon: Bone,
      title: "Strengthens Bones",
      description: "Rich in calcium and magnesium to support strong, healthy bone structure."
    },
    {
      icon: ShieldCheck,
      title: "Boosts Immunity",
      description: "Natural compounds enhance immune system function and disease resistance."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-brand-green to-brand-green/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Wellness Benefits</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the transformative power of traditional Tamil nutrition science 
            backed by modern wellness research.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange transition-all">
                <benefit.icon className="text-3xl" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="opacity-90 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
