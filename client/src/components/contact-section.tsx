import { Phone, MessageCircle, Truck } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call to Order",
      description: "Speak directly with our wellness experts",
      action: "tel:+917010422748",
      actionText: "+91 70104 22748"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Order",
      description: "Quick and easy ordering via WhatsApp",
      action: "https://wa.me/917010422748",
      actionText: "Message Us"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Premium products delivered to your door",
      action: "",
      actionText: "Pan-India Shipping"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-green to-brand-green/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Start Your Wellness Journey</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to experience the benefits of traditional Tamil wellness? 
            Contact us today to order your SARIRA Fig Malt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <method.icon className="text-2xl text-brand-orange" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
              <p className="opacity-90 mb-4">{method.description}</p>
              {method.action ? (
                <a 
                  href={method.action} 
                  className="text-brand-orange font-semibold text-lg hover:underline"
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {method.actionText}
                </a>
              ) : (
                <span className="text-brand-orange font-semibold text-lg">
                  {method.actionText}
                </span>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="tel:+917010422748" 
            className="bg-brand-orange text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all inline-flex items-center"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h5.5a1 1 0 01.8.4l2.7 3.6h5a1 1 0 01.7 1.7l-3 3a1 1 0 01-.7.3H10a1 1 0 01-.8-.4L6.5 8H3a1 1 0 01-1-1V4z" />
            </svg>
            Order SARIRA Fig Malt Now
          </a>
        </div>
      </div>
    </section>
  );
}
