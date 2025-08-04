import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function FAQPage() {
  const faqs = [
    {
      icon: "🥄",
      question: "What is SARIRA Fig Malt made of?",
      answer: "SARIRA Fig Malt is made from 100% organic figs and premium nuts. No preservatives, no refined sugar, and no artificial flavors — just clean, plant-based nutrition."
    },
    {
      icon: "🍼",
      question: "Is SARIRA safe for children and elders?",
      answer: "Yes! SARIRA is gentle, nutritious, and family-friendly, suitable for children above 1 year and elders alike. It supports digestion, immunity, and energy in all age groups."
    },
    {
      icon: "🍯",
      question: "Can I use SARIRA as a sugar substitute?",
      answer: "Absolutely. SARIRA Fig Malt has a naturally sweet taste from figs and can be used in place of refined sugar in milk, tea, porridge, baking, or toast toppings."
    },
    {
      icon: "💪",
      question: "What are the health benefits of SARIRA?",
      answer: "SARIRA supports digestive health (rich in fiber), energy and stamina, iron and calcium intake, gut-friendly sweetness, and gentle detox and immunity support."
    },
    {
      icon: "🕒",
      question: "How do I consume SARIRA Fig Malt?",
      answer: "You can mix 1 tbsp with warm milk or water, add to smoothies or porridge, use as a toast topping, or bake into muffins or energy balls. Avoid boiling directly to preserve nutrients."
    },
    {
      icon: "🚫",
      question: "Does SARIRA contain grains, preservatives, or added sugar?",
      answer: "No. SARIRA is grain-free, preservative-free, and refined sugar-free. Just figs and nuts — nothing more."
    },
    {
      icon: "🔄",
      question: "What is the shelf life of SARIRA Fig Malt?",
      answer: "SARIRA has a shelf life of 6 months when stored in a cool, dry place. Always close the lid tightly after use."
    },
    {
      icon: "📦",
      question: "Where do you ship and how long does it take?",
      answer: "We ship across India. Orders are usually delivered in 3–7 business days depending on your location. Orders above ₹800 are eligible for free shipping."
    },
    {
      icon: "💳",
      question: "What payment options do you accept?",
      answer: "We accept UPI, debit/credit cards, net banking, and Cash on Delivery (COD) in select locations."
    },
    {
      icon: "📩",
      question: "Who do I contact for queries or returns?",
      answer: "For any support, email us at sariranutrition@gmail.com or WhatsApp us at +91 70104 22748. We're available Mon–Sat, 10AM – 6PM."
    }
  ];

  return (
    <div className="min-h-screen bg-warm-neutral">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-brand-green hover:text-brand-orange transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-brand-green">Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-2">SARIRA Fig Malt – Wellness Made Simple</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">{faq.icon}</div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-brand-green mb-3">{faq.question}</h2>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-brand-orange/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-green mb-4">Still have questions?</h2>
          <p className="text-gray-700 mb-6">
            Feel free to contact our wellness team — we're here to help you on your journey to better living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:sariranutrition@gmail.com"
              className="bg-brand-green text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Email Us
            </a>
            <a 
              href="https://wa.me/917010422748"
              className="bg-brand-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}