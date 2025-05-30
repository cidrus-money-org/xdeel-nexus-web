
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

const Terms = () => {
  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-xdeel-purple">
              Legal
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-xdeel-gray mb-2">
              Last Updated: 01.Aug.2024
            </p>
            <p className="text-xdeel-gray">
              The terms and conditions governing your use of Xdeel.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using Xdeel ("Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Xdeel ("Company," "we," "us," or "our"), concerning your access to and use of the Platform.
              </p>
            </div>

            {/* Section 2 */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">2. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You must be at least 18 years old to use our Platform. By using the Platform, you represent and warrant that you have the legal capacity to enter into these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Platform is not available to residents of countries where cryptocurrency trading is prohibited by law or regulation.
              </p>
            </div>

            {/* Section 3 */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">3. Account Registration</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">a. Account Creation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To access certain features of the Platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for safeguarding your account credentials and for all activities that occur under your account.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">b. Identity Verification</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As part of our compliance with KYC (Know Your Customer) and AML (Anti-Money Laundering) regulations, we may require you to provide identity verification documents.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Failure to provide required verification may result in account limitations or suspension.
              </p>
            </div>

            {/* Section 4 */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">4. Use of the Platform</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">a. Permitted Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use the Platform to buy, sell, and trade cryptocurrencies in accordance with these Terms and applicable laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                All transactions must comply with applicable local, national, and international laws and regulations.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">b. Prohibited Activities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to use the Platform for any unlawful activities, including but not limited to money laundering, terrorist financing, or any other illegal activities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Market manipulation, fraudulent activities, and attempts to circumvent security measures are strictly prohibited.
              </p>
            </div>

            {/* Section 5 */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">5. Transactions on the Platform</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">a. General</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All transactions are final and irreversible once confirmed on the blockchain. We do not guarantee the availability of any particular cryptocurrency.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">b. Fees</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Transaction fees are clearly displayed before you confirm any transaction. Fees may vary based on market conditions and transaction volume.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">c. No Investment Advice</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not provide investment advice. All trading decisions are your own responsibility. Cryptocurrency trading involves significant risk.
              </p>
            </div>

            {/* Section 6 */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">6. Intellectual Property</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">a. Ownership</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Platform and its original content, features, and functionality are owned by Xdeel and are protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">b. Limited License</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable license to access and use the Platform for its intended purpose.
              </p>
            </div>

            {/* Section 7 */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">7. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or the Platform.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon termination, your right to use the Platform will cease immediately, but these Terms will remain in effect regarding your past use.
              </p>
            </div>

            {/* Section 8 */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall Xdeel be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our total liability to you for all damages shall not exceed the amount of fees paid by you to us in the 12 months preceding the claim.
              </p>
            </div>

            {/* Section 9 */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">9. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to defend, indemnify, and hold harmless Xdeel from and against any loss, damage, liability, claim, or demand made against us due to or arising out of your breach of these Terms.
              </p>
            </div>

            {/* Section 10 */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">10. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be interpreted and governed by the laws of Poland. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of Polish courts.
              </p>
            </div>

            {/* Section 11 */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">11. Changes to These Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Platform.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your continued use of the Platform after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Section 12 */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">12. Contact Us</h2>
              <div className="bg-xdeel-purple p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Email:</strong> legal@xdeel.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +48 66 224 8895</p>
                  <p className="text-gray-700"><strong>Address:</strong> Xdeel Legal Department, Warsaw, Poland</p>
                </div>
              </div>
            </div>

            {/* Section 13 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">13. Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms constitute the entire agreement between you and Xdeel regarding your use of the Platform and supersede all prior and contemporaneous agreements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For more details, see <a href="/privacy" className="text-xdeel-primary hover:underline">Privacy and Cookie Policy</a> and <a href="/legal" className="text-xdeel-primary hover:underline">Legal and Compliance</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
