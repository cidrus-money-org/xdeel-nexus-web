
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

const Legal = () => {
  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-xdeel-purple">
              Legal
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Legal and Compliance
            </h1>
            <p className="text-lg text-xdeel-gray mb-2">
              Last Updated: 01.Aug.2024
            </p>
            <p className="text-xdeel-gray">
              Our legal framework and compliance information.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Risk Warning</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Important Risk Disclosure:</strong> Trading and holding virtual currencies involves substantial risk. Virtual currencies are highly volatile and speculative investments that can result in significant financial losses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The value of virtual currencies can fluctuate widely and unpredictably. Past performance is not indicative of future results. You should carefully consider whether trading or holding virtual currencies is suitable for you in light of your financial condition and risk tolerance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Virtual currencies are not backed by any government or central authority, and their regulatory status varies by jurisdiction. Changes in regulations or government policies may adversely affect the value and liquidity of virtual currencies.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>You should only invest what you can afford to lose.</strong> Before engaging in any virtual currency transactions, please ensure you understand the risks involved and seek independent financial advice if necessary.
              </p>
            </div>

            {/* Section 2 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Statement of Customer's Responsibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Customer Compliance Obligations:</strong> It is your responsibility to comply with all applicable laws and regulations in your jurisdiction when using Xdeel's services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF):</strong> You must ensure that all funds used on our platform are from legitimate sources and comply with your local AML and CTF regulations. You agree not to use our services for any illegal activities, including money laundering, terrorist financing, or any other criminal activities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Tax Obligations:</strong> You are solely responsible for determining and fulfilling your tax obligations related to virtual currency transactions in your jurisdiction. This includes reporting gains, losses, and any other tax implications of your trading activities. Xdeel does not provide tax advice, and you should consult with a qualified tax professional regarding your specific situation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Regulatory Compliance:</strong> You must comply with all applicable financial regulations, licensing requirements, and restrictions in your jurisdiction. Some jurisdictions may prohibit or restrict virtual currency activities, and it is your responsibility to ensure compliance with such restrictions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our services, you acknowledge and agree that you are solely responsible for compliance with all applicable laws and regulations, and you indemnify Xdeel against any claims or losses resulting from your non-compliance.
              </p>
            </div>

            {/* Section 3 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Customer Complaints Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Xdeel, we are committed to providing excellent customer service. If you have a complaint about our services, please follow this process:
              </p>
              
              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">1. Lodging a Complaint</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Submit your complaint in writing via email to <a href="mailto:complaints@xdeel.com" className="text-xdeel-primary hover:underline">complaints@xdeel.com</a> or through our contact form. Please provide detailed information about your complaint, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Your account details (without sharing sensitive information)</li>
                <li>Date and time of the incident</li>
                <li>Description of the issue</li>
                <li>Any supporting documentation</li>
                <li>Your desired resolution</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">2. Acknowledgment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will acknowledge receipt of your complaint within 24 hours during business days and provide you with a complaint reference number for tracking purposes.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">3. Investigation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will thoroughly investigate your complaint and may contact you for additional information if required. Our investigation will be conducted fairly and impartially, and we will keep you informed of our progress.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">4. Resolution</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We aim to resolve all complaints within 15 business days. We will provide you with a written response outlining our findings and any remedial action taken. If we cannot resolve your complaint within this timeframe, we will inform you of the reasons for the delay and provide an expected resolution date.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are not satisfied with our resolution, you may escalate your complaint to the relevant financial services ombudsman or regulatory authority in your jurisdiction.
              </p>
            </div>

            {/* Section 4 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Withdrawal Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our withdrawal policy ensures the security of your funds while providing efficient access to your assets. Please review the following terms:
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">1. Eligibility</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Withdrawals are available to verified account holders who have completed our KYC (Know Your Customer) process. Your account must be in good standing with no outstanding compliance issues or security concerns.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">2. Processing Time</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Withdrawal requests are typically processed within 24-48 hours during business days. However, processing times may vary depending on the cryptocurrency network, security checks, and transaction volume. Large withdrawals may require additional verification and processing time.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">3. Limits</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Daily and monthly withdrawal limits apply based on your account verification level. Higher verification levels allow for increased withdrawal limits. Specific limits are displayed in your account dashboard and may be adjusted based on regulatory requirements or risk assessments.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">4. Fees</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Withdrawal fees vary by cryptocurrency and are clearly displayed before you confirm your withdrawal. These fees cover network transaction costs and processing. Fee structures are subject to change based on network conditions and operational costs.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">5. Accuracy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for ensuring the accuracy of withdrawal addresses and transaction details. Cryptocurrency transactions are irreversible, and Xdeel cannot recover funds sent to incorrect addresses. We recommend using small test transactions for new addresses.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">6. Compliance Checks</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All withdrawals are subject to automated and manual security checks to prevent fraud and ensure compliance with AML/CTF regulations. We reserve the right to reject or delay withdrawals that do not meet our security or compliance standards.
              </p>
            </div>

            {/* Legal Footer Reference */}
            <div className="mb-8 pt-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                See also our <a href="/terms" className="text-xdeel-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-xdeel-primary hover:underline">Privacy and Cookie Policy</a> for complete legal information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
