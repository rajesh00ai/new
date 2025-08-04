import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "What is SARIRA Fig Malt made of?",
      answer: "SARIRA Fig Malt is made from organic figs, premium nuts including almonds and cashews, and natural spices. It contains no artificial preservatives, colors, or added sugars."
    },
    {
      question: "Is SARIRA safe for children and elders?",
      answer: "Yes, SARIRA Fig Malt is completely natural and safe for all ages. It's especially beneficial for children as a healthy snack and for elders as a nutritious supplement."
    },
    {
      question: "Can I use SARIRA as a sugar substitute?",
      answer: "Absolutely! SARIRA Fig Malt is naturally sweet from figs and can be used as a healthier alternative to sugar in many recipes and beverages."
    },
    {
      question: "What are the health benefits of SARIRA?",
      answer: "SARIRA provides multiple benefits including improved digestion, fertility support, postpartum nourishment, immunity boost, and rich iron and fiber content."
    },
    {
      question: "How do I consume SARIRA Fig Malt?",
      answer: "You can enjoy SARIRA in many ways - mix with warm milk, spread on toast, add to smoothies, or eat directly. Start with 1-2 teaspoons daily."
    },
    {
      question: "Does SARIRA contain grains, preservatives, or added sugar?",
      answer: "No, SARIRA is grain-free, preservative-free, and contains no added sugars. It's naturally sweetened by organic figs."
    },
    {
      question: "What is the shelf life of SARIRA Fig Malt?",
      answer: "SARIRA Fig Malt has a shelf life of 12 months when stored in a cool, dry place. Once opened, consume within 3 months for best quality."
    },
    {
      question: "Where do you ship and how long does it take?",
      answer: "We ship across India. Delivery typically takes 3-7 business days depending on your location. Express delivery options are available."
    },
    {
      question: "What payment options do you accept?",
      answer: "We accept all major payment methods including UPI, credit/debit cards, net banking, and cash on delivery for select locations."
    },
    {
      question: "Who do I contact for queries or returns?",
      answer: "You can reach us at sariranutrition@gmail.com or call +91 70104 22748. Our customer service team is available Monday to Saturday, 9 AM to 6 PM."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-warm-neutral to-soft-neutral">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            SARIRA Fig Malt – Wellness Made Simple
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-brand-green pr-4">
                  {faq.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-brand-orange flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-orange flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? Feel free to{" "}
            <a 
              href="mailto:sariranutrition@gmail.com" 
              className="text-brand-orange hover:text-brand-green transition-colors"
            >
              contact our wellness team
            </a>
            {" "}– we're here to help you on your journey to better living.
          </p>
        </div>
      </div>
    </section>
  );
}