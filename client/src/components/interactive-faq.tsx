import { useState } from "react";
import { ChevronDown, ChevronUp, FileText, Truck, RotateCcw, Shield, HelpCircle } from "lucide-react";

interface FAQTopic {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  content: string;
}

const faqTopics: FAQTopic[] = [
  {
    id: "shipping",
    title: "Shipping & Delivery",
    icon: Truck,
    content: `
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-brand-green mb-4">Shipping Coverage & Charges</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• We deliver across India (local areas in Tamil Nadu included), excluding certain remote regions.</li>
          <li>• Free shipping on prepaid orders above ₹800.</li>
          <li>• For orders below ₹800, delivery charges vary by location.</li>
        </ul>
        
        <h4 class="text-lg font-medium text-brand-green mt-6 mb-3">Order Processing Time</h4>
        <ul class="space-y-2 text-gray-700">
          <li>• Orders placed before 5 PM are processed within 1 business day.</li>
          <li>• Weekends & public holidays are not processing days.</li>
        </ul>
        
        <h4 class="text-lg font-medium text-brand-green mt-6 mb-3">Delivery Timeline</h4>
        <ul class="space-y-2 text-gray-700">
          <li>• Estimated delivery: 6 – 10 working days across India, depending on your location.</li>
          <li>• Courier tracking via email or SMS provided at dispatch.</li>
        </ul>
        
        <div class="bg-brand-orange/10 p-4 rounded-lg mt-6">
          <h4 class="font-medium text-brand-green mb-2">Order Cancellation & Refund</h4>
          <p class="text-gray-700">If the order is cancelled before dispatch or cannot be delivered to your location, we issue a full refund—including shipping charges—within 48 business hours of processing.</p>
        </div>
      </div>
    `
  },
  {
    id: "returns",
    title: "Returns & Refunds",
    icon: RotateCcw,
    content: `
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-brand-green mb-4">Eligible Returns</h3>
        <p class="text-gray-700 mb-4">We accept unopened items in original packaging only, provided they are returned within 7 days of delivery. Items outside this timeframe or with opened packaging are not eligible for return.</p>
        
        <h4 class="text-lg font-medium text-brand-green mt-6 mb-3">Damaged or Incorrect Items</h4>
        <p class="text-gray-700 mb-4">If you receive a defective, damaged, or incorrect product, contact us within 48 hours with photographic proof. We will arrange a refund or ship a replacement.</p>
        
        <h4 class="text-lg font-medium text-brand-green mt-6 mb-3">Non-Returnable Items</h4>
        <ul class="space-y-2 text-gray-700">
          <li>• Opened or used food products</li>
          <li>• Items damaged due to your fault</li>
          <li>• Returns made after 7 days of delivery</li>
        </ul>
        
        <h4 class="text-lg font-medium text-brand-green mt-6 mb-3">Refund Process</h4>
        <p class="text-gray-700">Once approved, refunds are processed to the original payment method within 5–7 working days—deducting any return shipping charges if applicable.</p>
        
        <div class="bg-brand-orange/10 p-4 rounded-lg mt-6">
          <h4 class="font-medium text-brand-green mb-2">Customer Support</h4>
          <p class="text-gray-700">Need help? Reach us at: <strong>sariranutrition@gmail.com</strong><br/>Hours: Mon-Sat, 10 AM – 6 PM</p>
        </div>
      </div>
    `
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: Shield,
    content: `
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-brand-green mb-4">Information We Collect</h3>
        <p class="text-gray-700 mb-4">When you use our website or place an order, we may collect the following types of information:</p>
        <ul class="space-y-2 text-gray-700">
          <li>• <strong>Personal Information:</strong> Name, phone number, email address, shipping address, billing address</li>
          <li>• <strong>Payment Information:</strong> Processed securely via third-party payment gateways (we do not store your card details)</li>
          <li>• <strong>Order History:</strong> Items purchased, quantity, order value, and delivery records</li>
          <li>• <strong>Device/Usage Data:</strong> IP address, browser type, referring URL, and time spent on pages (for analytics)</li>
          <li>• <strong>Communication:</strong> Emails, WhatsApp, or feedback shared with us</li>
        </ul>
        
        <h4 class="text-lg font-medium text-brand-green mt-6 mb-3">How We Use Your Information</h4>
        <p class="text-gray-700 mb-4">We use your data to:</p>
        <ul class="space-y-2 text-gray-700">
          <li>• Process and fulfill your orders</li>
          <li>• Send order confirmations and delivery updates</li>
          <li>• Provide customer support</li>
          <li>• Send promotional emails (only with your consent)</li>
          <li>• Improve our website, services, and user experience</li>
          <li>• Prevent fraud and ensure secure transactions</li>
        </ul>
        
        <h4 class="text-lg font-medium text-brand-green mt-6 mb-3">Your Rights</h4>
        <p class="text-gray-700 mb-4">You may:</p>
        <ul class="space-y-2 text-gray-700">
          <li>• Request access to your personal data</li>
          <li>• Ask for corrections or deletions</li>
          <li>• Opt out of promotional emails at any time</li>
          <li>• Request account deactivation</li>
        </ul>
        <p class="text-gray-700 mt-4">For any of the above, email us at sariranutrition@gmail.com.</p>
      </div>
    `
  },
  {
    id: "terms",
    title: "Terms of Service",
    icon: FileText,
    content: `
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-brand-green mb-4">Eligibility</h3>
        <p class="text-gray-700 mb-4">You must be at least 18 years of age to purchase from our website. By using the site, you confirm that you are legally capable of entering into a contract.</p>
        
        <h4 class="text-lg font-medium text-brand-green mt-6 mb-3">Orders & Payments</h4>
        <ul class="space-y-2 text-gray-700">
          <li>• All orders placed through the website are subject to acceptance and availability.</li>
          <li>• We reserve the right to refuse or cancel any order for any reason, including pricing errors or stock availability.</li>
          <li>• Payments must be made using approved payment methods (UPI, cards, net banking, etc.). We do not store your payment details.</li>
        </ul>
        
        <h4 class="text-lg font-medium text-brand-green mt-6 mb-3">Use of Website</h4>
        <p class="text-gray-700 mb-4">You agree not to misuse the website or its content. You may not:</p>
        <ul class="space-y-2 text-gray-700">
          <li>• Use the website for unlawful or fraudulent purposes</li>
          <li>• Attempt to gain unauthorized access to our systems</li>
          <li>• Copy, distribute, or reproduce any content without permission</li>
        </ul>
        
        <h4 class="text-lg font-medium text-brand-green mt-6 mb-3">Limitation of Liability</h4>
        <p class="text-gray-700 mb-4">SARIRA shall not be liable for any direct, indirect, incidental, or consequential damages that result from:</p>
        <ul class="space-y-2 text-gray-700">
          <li>• The use or inability to use the website</li>
          <li>• Product misuse</li>
          <li>• Delays or failure in delivery beyond our control</li>
        </ul>
        
        <h4 class="text-lg font-medium text-brand-green mt-6 mb-3">Governing Law</h4>
        <p class="text-gray-700">These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the courts in Chennai, Tamil Nadu.</p>
      </div>
    `
  }
];

export default function InteractiveFAQ() {
  const [activeTopic, setActiveTopic] = useState<string>("shipping");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTopicChange = (topicId: string) => {
    if (topicId === activeTopic || isAnimating) return;
    
    setIsAnimating(true);
    
    // Fade out current content
    setTimeout(() => {
      setActiveTopic(topicId);
      setIsAnimating(false);
    }, 150);
  };

  const activeTopicData = faqTopics.find(topic => topic.id === activeTopic);

  return (
    <section id="interactive-faq" className="py-16 md:py-20 bg-gradient-to-br from-warm-neutral to-soft-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-brand-orange mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our products, policies, and services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topic Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-brand-green mb-6">Topics</h3>
              <nav className="space-y-2" role="tablist" aria-label="FAQ Topics">
                {faqTopics.map((topic) => {
                  const Icon = topic.icon;
                  const isActive = activeTopic === topic.id;
                  
                  return (
                    <button
                      key={topic.id}
                      onClick={() => handleTopicChange(topic.id)}
                      className={`
                        w-full flex items-center p-4 rounded-xl text-left transition-all duration-300 transform
                        ${isActive 
                          ? 'bg-brand-green text-white shadow-lg scale-105' 
                          : 'bg-gray-50 text-gray-700 hover:bg-brand-orange/10 hover:text-brand-orange hover:scale-102'
                        }
                        focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2
                      `}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${topic.id}`}
                      tabIndex={isActive ? 0 : -1}
                    >
                      <Icon className={`w-5 h-5 mr-3 flex-shrink-0 ${isActive ? 'text-white' : 'text-brand-orange'}`} />
                      <span className="font-medium">{topic.title}</span>
                      {isActive && (
                        <ChevronUp className="w-4 h-4 ml-auto" />
                      )}
                      {!isActive && (
                        <ChevronDown className="w-4 h-4 ml-auto opacity-50" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Content Header */}
              <div className="bg-gradient-to-r from-brand-green to-brand-green/80 p-6 text-white">
                <div className="flex items-center">
                  {activeTopicData && (
                    <>
                      <activeTopicData.icon className="w-6 h-6 mr-3" />
                      <h3 className="text-2xl font-bold">{activeTopicData.title}</h3>
                    </>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div 
                className={`
                  p-6 md:p-8 transition-all duration-300 ease-in-out
                  ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}
                `}
                role="tabpanel"
                id={`panel-${activeTopic}`}
                aria-labelledby={`tab-${activeTopic}`}
              >
                {activeTopicData && (
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: activeTopicData.content }}
                  />
                )}
              </div>

              {/* Contact CTA */}
              <div className="bg-gray-50 p-6 border-t">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-brand-green mb-1">Still have questions?</h4>
                    <p className="text-gray-600 text-sm">Our wellness team is here to help you</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="mailto:sariranutrition@gmail.com"
                      className="bg-brand-green text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all text-center"
                    >
                      Email Us
                    </a>
                    <a 
                      href="https://wa.me/917010422748"
                      className="bg-brand-orange text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Quick access to important pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {faqTopics.map((topic) => (
              <button
                key={`quick-${topic.id}`}
                onClick={() => handleTopicChange(topic.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${activeTopic === topic.id 
                    ? 'bg-brand-green text-white' 
                    : 'bg-white text-brand-green border border-brand-green hover:bg-brand-green hover:text-white'
                  }
                `}
              >
                {topic.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}