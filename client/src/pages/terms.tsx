import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-warm-neutral">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-brand-green hover:text-brand-orange transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-brand-green">Terms of Service</h1>
          <p className="text-gray-600 mt-2">Last updated: August 2025</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <p className="text-gray-700 mb-6">
              Welcome to www.sarirawellness.com (the "Website"), operated by SARIRA Wellness. By accessing or using our website, purchasing our products, or interacting with our services, you agree to the following terms and conditions. Please read them carefully before using this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">1. Eligibility</h2>
            <p className="text-gray-700">
              You must be at least 18 years of age to purchase from our website. By using the site, you confirm that you are legally capable of entering into a contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">2. Product Information</h2>
            <p className="text-gray-700">
              We make every effort to display product descriptions, ingredients, prices, and images accurately. However, SARIRA does not warrant that all product details are always current or error-free. We reserve the right to modify product specifications without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">3. Orders & Payments</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• All orders placed through the website are subject to acceptance and availability.</li>
              <li>• We reserve the right to refuse or cancel any order for any reason, including pricing errors or stock availability.</li>
              <li>• Payments must be made using approved payment methods (UPI, cards, net banking, etc.). We do not store your payment details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">4. Shipping & Delivery</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Orders are processed within 1–2 business days. Delivery timelines are estimates and not guaranteed.</li>
              <li>• For full details, please refer to our <Link href="/shipping" className="text-brand-orange hover:underline">Shipping Policy</Link>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">5. Returns & Refunds</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• We accept returns only in cases of damaged, defective, or incorrect items.</li>
              <li>• Refunds will be processed as per our <Link href="/returns" className="text-brand-orange hover:underline">Return Policy</Link>.</li>
              <li>• SARIRA reserves the right to reject any return request that does not meet our criteria.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">6. Use of Website</h2>
            <p className="text-gray-700 mb-4">You agree not to misuse the website or its content. You may not:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Use the website for unlawful or fraudulent purposes</li>
              <li>• Attempt to gain unauthorized access to our systems</li>
              <li>• Copy, distribute, or reproduce any content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this site — including logos, product descriptions, images, and text — is the property of SARIRA and protected under applicable copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">SARIRA shall not be liable for any direct, indirect, incidental, or consequential damages that result from:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• The use or inability to use the website</li>
              <li>• Product misuse</li>
              <li>• Delays or failure in delivery beyond our control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">9. Privacy</h2>
            <p className="text-gray-700">
              Your personal information is handled in accordance with our <Link href="/privacy" className="text-brand-orange hover:underline">Privacy Policy</Link>. By using our site, you consent to the collection and use of your data as described there.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">10. Modifications to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to update or change these terms at any time. Continued use of the website after any changes implies acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-green mb-4">11. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the courts in Chennai, Tamil Nadu.
            </p>
          </section>

          <section className="bg-brand-orange/5 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-brand-green mb-4">📩 Contact Us</h2>
            <p className="text-gray-700">For questions about these Terms, contact us at:</p>
            <p className="text-gray-700">📧 sariranutrition@gmail.com</p>
            <p className="text-gray-700 mt-4 font-medium">SARIRA – Wellness with Transparency.</p>
            <p className="text-gray-700">Thank you for choosing us to be part of your health journey.</p>
          </section>
        </div>
      </div>
    </div>
  );
}