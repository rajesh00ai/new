import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-warm-neutral">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-brand-green hover:text-brand-orange transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-brand-green">Returns & Refunds</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">1. Eligible Returns</h2>
            <p className="text-gray-700">
              We accept unopened items in original packaging only, provided they are returned within 7 days of delivery. 
              Items outside this timeframe or with opened packaging are not eligible for return.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">2. Damaged or Incorrect Items</h2>
            <p className="text-gray-700">
              If you receive a defective, damaged, or incorrect product, contact us within 48 hours with photographic proof. 
              We will arrange a refund or ship a replacement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">3. Non-Returnable Items</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Opened or used food products</li>
              <li>• Items damaged due to your fault</li>
              <li>• Returns made after 7 days of delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">4. Refund Process</h2>
            <p className="text-gray-700">
              Once approved, refunds are processed to the original payment method within 5–7 working days—deducting any return shipping charges if applicable.
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