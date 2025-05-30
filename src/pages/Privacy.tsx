
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-xdeel-purple">
              Legal
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Privacy and Cookie Policy
            </h1>
            <p className="text-lg text-xdeel-gray mb-2">
              Last Updated: 01.Aug.2024
            </p>
            <p className="text-xdeel-gray">
              How we protect and handle your personal information.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">1. Data Controller</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Xdeel (referred to as "we," "us," or "our") is the data controller responsible for your personal information. We are committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our registered office is located in Warsaw, Poland, and we are authorized by the Polish Financial Supervision Authority (KNF).
              </p>
            </div>

            {/* Section 2 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">2. Information We Collect</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">a. Information You Provide</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you register for an account or use our services, we collect information you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Personal identification information (name, date of birth, address)</li>
                <li>Contact information (email address, phone number)</li>
                <li>Identity verification documents (passport, national ID, driver's license)</li>
                <li>Financial information (bank account details, transaction history)</li>
                <li>Communications with our support team</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">b. Information Collected Automatically</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use our platform, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent on platform, transaction patterns)</li>
                <li>Location data (approximate location based on IP address)</li>
                <li>Security information (login attempts, security events)</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">c. Information from Third Parties</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may receive information about you from third parties, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Identity verification services</li>
                <li>Credit reporting agencies</li>
                <li>Blockchain networks and cryptocurrency exchanges</li>
                <li>Payment processors and financial institutions</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Providing and maintaining our cryptocurrency exchange services</li>
                <li>Verifying your identity and complying with KYC/AML requirements</li>
                <li>Processing transactions and maintaining transaction records</li>
                <li>Detecting and preventing fraud, money laundering, and other illegal activities</li>
                <li>Communicating with you about your account and our services</li>
                <li>Improving our platform and developing new features</li>
                <li>Complying with legal obligations and regulatory requirements</li>
                <li>Protecting our rights and interests</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">4. Legal Basis for Processing Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under GDPR, we process your personal information based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Contract:</strong> Processing necessary to perform our services under our Terms of Service</li>
                <li><strong>Legal Obligation:</strong> Compliance with KYC, AML, and other financial regulations</li>
                <li><strong>Legitimate Interest:</strong> Fraud prevention, platform security, and service improvement</li>
                <li><strong>Consent:</strong> Marketing communications and optional services (where applicable)</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">5. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your personal information with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Service Providers:</strong> Third-party vendors who provide services on our behalf</li>
                <li><strong>Regulatory Authorities:</strong> Government agencies and financial regulators as required</li>
                <li><strong>Law Enforcement:</strong> When required by law or to protect our legal rights</li>
                <li><strong>Business Partners:</strong> Cryptocurrency exchanges and payment processors for transaction processing</li>
                <li><strong>Professional Advisors:</strong> Lawyers, accountants, and other professional service providers</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>

            {/* Section 6 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">6. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your personal information may be transferred to and processed in countries outside the European Economic Area (EEA). When we transfer your data internationally, we ensure appropriate safeguards are in place, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Other appropriate safeguards recognized under data protection law</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">7. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>End-to-end encryption for data transmission</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security audits and penetration testing</li>
                <li>Employee training on data protection and security</li>
                <li>Multi-factor authentication and other access controls</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">8. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Generally:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Account information is retained for the duration of your account and up to 7 years after closure</li>
                <li>Transaction records are retained for at least 5 years as required by financial regulations</li>
                <li>Identity verification documents are retained as required by KYC/AML regulations</li>
                <li>Marketing preferences are retained until you withdraw consent</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">9. Your Rights (GDPR)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under GDPR, you have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Right of Access:</strong> Request copies of your personal information</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your information</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing based on consent</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@xdeel.com" className="text-xdeel-primary hover:underline">privacy@xdeel.com</a>.
              </p>
            </div>

            {/* Section 10 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">10. Cookies and Similar Technologies</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">a. What Are Cookies?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our services.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">b. Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">c. Third-Party Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party services that place cookies on your device, including analytics providers, advertising networks, and social media platforms.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">d. How We Use Cookies</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Maintaining your login session</li>
                <li>Remembering your preferences and settings</li>
                <li>Analyzing website traffic and user behavior</li>
                <li>Preventing fraud and enhancing security</li>
                <li>Providing personalized content and advertisements</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">e. Your Choices Regarding Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control cookies through your browser settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Block all cookies</li>
                <li>Accept only first-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Receive notifications when cookies are set</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                For more information about managing cookies, visit <a href="https://www.allaboutcookies.org" className="text-xdeel-primary hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
              </p>
            </div>

            {/* Section 11 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">11. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy and Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Providing notice through our platform</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your continued use of our services after such notification constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Section 12 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">12. Contact Us</h2>
              <div className="bg-xdeel-purple p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy and Cookie Policy or want to exercise your rights, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:privacy@xdeel.com" className="text-xdeel-primary hover:underline">privacy@xdeel.com</a></p>
                  <p className="text-gray-700"><strong>Phone:</strong> <a href="tel:+48662248895" className="text-xdeel-primary hover:underline">+48 66 224 8895</a></p>
                  <p className="text-gray-700"><strong>Address:</strong> Xdeel Privacy Officer, Warsaw, Poland</p>
                  <p className="text-gray-700"><strong>Data Protection Officer:</strong> <a href="mailto:dpo@xdeel.com" className="text-xdeel-primary hover:underline">dpo@xdeel.com</a></p>
                </div>
              </div>
            </div>

            {/* Legal Footer Reference */}
            <div className="mb-8 pt-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                For more details, view our <a href="/terms" className="text-xdeel-primary hover:underline">Terms of Service</a> and <a href="/legal" className="text-xdeel-primary hover:underline">Legal and Compliance</a> pages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
