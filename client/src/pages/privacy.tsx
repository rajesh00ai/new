import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-warm-neutral">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-brand-green hover:text-brand-orange transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-brand-green">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last updated: August 2025</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <p className="text-gray-700 mb-6">
              Welcome to SARIRA. Your privacy is important to us, and we are committed to protecting the personal information you share with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">When you use our website or place an order, we may collect the following types of information:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Personal Information:</strong> Name, phone number, email address, shipping address, billing address</li>
              <li>• <strong>Payment Information:</strong> Processed securely via third-party payment gateways (we do not store your card details)</li>
              <li>• <strong>Order History:</strong> Items purchased, quantity, order value, and delivery records</li>
              <li>• <strong>Device/Usage Data:</strong> IP address, browser type, referring URL, and time spent on pages (for analytics)</li>
              <li>• <strong>Communication:</strong> Emails, WhatsApp, or feedback shared with us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your data to:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Process and fulfill your orders</li>
              <li>• Send order confirmations and delivery updates</li>
              <li>• Provide customer support</li>
              <li>• Send promotional emails (only with your consent)</li>
              <li>• Improve our website, services, and user experience</li>
              <li>• Prevent fraud and ensure secure transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">3. Sharing Your Information</h2>
            <p className="text-gray-700 mb-4">We do not sell, rent, or trade your personal information. We only share it with:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Logistics and courier partners (to deliver your order)</li>
              <li>• Payment gateways (to securely process your transaction)</li>
              <li>• Email/SMS marketing tools (only if you opt-in for updates)</li>
            </ul>
            <p className="text-gray-700 mt-4">All partners are expected to comply with strict data protection standards.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">4. Cookies & Tracking</h2>
            <p className="text-gray-700">
              Our website uses cookies to enhance your browsing experience and help us understand user behavior. You can adjust your browser settings to disable cookies at any time, although this may impact site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">5. Data Security</h2>
            <p className="text-gray-700">
              We use industry-standard encryption and security protocols to protect your data from unauthorized access, misuse, or disclosure. Your payment details are handled by trusted third-party gateways that are PCI-DSS compliant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">You may:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Request access to your personal data</li>
              <li>• Ask for corrections or deletions</li>
              <li>• Opt out of promotional emails at any time</li>
              <li>• Request account deactivation</li>
            </ul>
            <p className="text-gray-700 mt-4">For any of the above, email us at sariranutrition@gmail.com.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700">
              Our products are intended for purchase by adults. We do not knowingly collect personal data from children under 18.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">8. Policy Updates</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. The latest version will always be available on our website, and your continued use indicates acceptance.
            </p>
          </section>

          <section className="bg-brand-orange/5 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-brand-green mb-4">📩 Contact Us</h2>
            <p className="text-gray-700">For questions, feedback, or privacy concerns, contact:</p>
            <p className="text-gray-700 font-medium">SARIRA Wellness</p>
            <p className="text-gray-700">Email: sariranutrition@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}