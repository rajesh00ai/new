import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-warm-neutral">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-brand-green hover:text-brand-orange transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-brand-green">Shipping & Delivery</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">1. Shipping Coverage & Charges</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• We deliver across India (local areas in Tamil Nadu included), excluding certain remote regions.</li>
              <li>• Free shipping on prepaid orders above ₹800.</li>
              <li>• For orders below ₹800, delivery charges vary by location.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">2. Order Processing Time</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Orders placed before 5 PM are processed within 1 business day.</li>
              <li>• Weekends & public holidays are not processing days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">3. Delivery Timeline</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Estimated delivery: 6 – 10 working days across India, depending on your location.</li>
              <li>• Courier tracking via email or SMS provided at dispatch.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">4. Failed Deliveries or Erroneous Address</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Customers are responsible for reshipping fees if the order is returned due to incomplete or incorrect address.</li>
              <li>• SARIRA is not liable for lost packages from address errors.</li>
            </ul>
          </section>

          <section className="bg-brand-green/5 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-brand-green mb-4">Order Cancellation & Refund</h2>
            <p className="text-gray-700">
              If the order is cancelled before dispatch or cannot be delivered to your location, we issue a full refund—including shipping charges—within 48 business hours of processing.
            </p>
          </section>

          <section className="bg-brand-orange/5 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-brand-green mb-4">📩 Customer Support</h2>
            <p className="text-gray-700 mb-2">Need help? Reach us at:</p>
            <p className="text-gray-700">📧 sariranutrition@gmail.com</p>
            <p className="text-gray-700">Hours: Mon-Sat, 10 AM – 6 PM</p>
          </section>
        </div>
      </div>
    </div>
  );
}