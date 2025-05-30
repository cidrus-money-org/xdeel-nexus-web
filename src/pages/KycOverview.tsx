
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const KycOverview = () => {
  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-xdeel-purple">
              Compliance
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Compliance and KYC Overview
            </h1>
            <p className="text-lg text-xdeel-gray mb-2">
              Last Updated: 01.Aug.2024
            </p>
            <p className="text-xdeel-gray">
              Our comprehensive Anti-Money Laundering and Counter-Terrorism Financing framework.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Xdeel is committed to maintaining the highest standards of compliance with Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) regulations. This overview outlines our comprehensive approach to regulatory compliance, customer due diligence, and risk management in the cryptocurrency trading environment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a regulated cryptocurrency exchange authorized by the Polish Financial Supervision Authority (KNF), we implement robust systems and procedures to prevent financial crimes and ensure full compliance with applicable laws and regulations.
              </p>
            </div>

            {/* Section 2 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Purpose</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The purpose of our AML/CTF program is to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Prevent money laundering and terrorist financing activities</li>
                <li>Ensure compliance with all applicable laws and regulations</li>
                <li>Protect our platform and customers from financial crimes</li>
                <li>Maintain the integrity of the financial system</li>
                <li>Support law enforcement investigations when required</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Scope and Application</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This compliance framework applies to all Xdeel operations, employees, and customers. It covers all cryptocurrency transactions, account activities, and customer relationships facilitated through our platform.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our policies are designed to comply with Polish AML/CTF laws, EU directives, and international best practices including FATF recommendations.
              </p>
            </div>

            {/* Section 4 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Definitions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">Money Laundering</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The process of making illegally obtained money appear legitimate by disguising its true source through a series of complex transactions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">Terrorist Financing</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The provision or collection of funds with the intention or knowledge that they will be used to carry out terrorist acts.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">Customer Due Diligence (CDD)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The process of identifying and verifying customer identity, understanding their business relationships, and assessing money laundering risks.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">AML Principles</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our AML program is built on the following core principles:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Risk-Based Approach:</strong> Tailoring our controls to the specific risks we face</li>
                <li><strong>Customer Due Diligence:</strong> Knowing our customers and understanding their transactions</li>
                <li><strong>Ongoing Monitoring:</strong> Continuously monitoring customer activities and transactions</li>
                <li><strong>Reporting:</strong> Promptly reporting suspicious activities to authorities</li>
                <li><strong>Record Keeping:</strong> Maintaining comprehensive records for regulatory purposes</li>
                <li><strong>Training:</strong> Ensuring all staff understand their AML obligations</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">AML Program Components</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our comprehensive AML program includes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Written policies and procedures</li>
                <li>Designated AML compliance officer</li>
                <li>Customer identification and verification procedures</li>
                <li>Ongoing customer due diligence and monitoring</li>
                <li>Suspicious activity reporting procedures</li>
                <li>Record retention policies</li>
                <li>Employee training programs</li>
                <li>Independent testing and audit procedures</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Policy Approval & Revision</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our AML/CTF policies are approved by senior management and reviewed annually or when regulatory changes occur. All policy updates are communicated to relevant staff and implemented through updated procedures and training.
              </p>
            </div>

            {/* Section 8 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Risk-Based Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We assess and categorize customers based on their risk profile, considering factors such as:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Geographic location and jurisdiction</li>
                <li>Nature of business or employment</li>
                <li>Source of funds and wealth</li>
                <li>Transaction patterns and volumes</li>
                <li>Politically Exposed Person (PEP) status</li>
                <li>Sanctions list screening results</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Customer Due Diligence (CDD)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our CDD procedures ensure we understand our customers and their legitimate business needs while identifying potential risks.
              </p>
            </div>

            {/* Section 10 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Identification and Verification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All customers must provide valid identification documents and complete our verification process before accessing trading services. We verify:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Full legal name and date of birth</li>
                <li>Residential address</li>
                <li>Government-issued photo identification</li>
                <li>Source of funds declarations</li>
                <li>Sanctions and PEP screening</li>
              </ul>
            </div>

            {/* Section 11 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Risk Classification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Customers are classified into risk categories:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Low Risk:</strong> Standard verification and monitoring</li>
                <li><strong>Medium Risk:</strong> Enhanced documentation and periodic reviews</li>
                <li><strong>High Risk:</strong> Enhanced due diligence and ongoing monitoring</li>
              </ul>
            </div>

            {/* Section 12 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Enhanced Due Diligence (EDD)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EDD measures apply to high-risk customers and include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Additional identity verification</li>
                <li>Source of wealth documentation</li>
                <li>Regular account reviews</li>
                <li>Senior management approval</li>
                <li>Enhanced transaction monitoring</li>
              </ul>
            </div>

            {/* Section 13 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Simplified Due Diligence (SDD)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                SDD may apply to very low-risk customers from trusted jurisdictions with appropriate regulatory oversight, subject to ongoing risk assessment.
              </p>
            </div>

            {/* Section 14 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Monitoring</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We maintain comprehensive monitoring systems to detect suspicious activities and ensure ongoing compliance.
              </p>
            </div>

            {/* Section 15 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Transaction Monitoring</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our automated systems monitor all transactions for suspicious patterns, unusual activities, and compliance with customer profiles. Alerts are investigated promptly by our compliance team.
              </p>
            </div>

            {/* Section 16 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Internal Investigations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When suspicious activity is detected, we conduct thorough internal investigations, document findings, and take appropriate action including reporting to authorities when required.
              </p>
            </div>

            {/* Section 17 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Politically Exposed Persons (PEPs)</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">Definition</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                PEPs are individuals who hold or have held prominent public positions and their family members and close associates, who may present higher risks for money laundering.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">Measures for PEPs</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All PEPs are subject to enhanced due diligence procedures, including senior management approval, enhanced ongoing monitoring, and regular review of their business relationship.
              </p>
            </div>

            {/* Section 18 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Identification of Suspicious Activity</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">Examples and Employee Responsibility</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All employees are trained to identify suspicious activities, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Unusual transaction patterns or amounts</li>
                <li>Transactions inconsistent with customer profile</li>
                <li>Attempts to avoid reporting requirements</li>
                <li>Use of multiple accounts or identities</li>
                <li>Transactions involving high-risk jurisdictions</li>
              </ul>
            </div>

            {/* Section 19 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Reporting Procedure</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">Suspicious Transaction Reports (STRs)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When suspicious activity is identified, we file STRs with the appropriate authorities within required timeframes while maintaining strict confidentiality.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">Tipping Off</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strictly prohibit tipping off customers about STR filings or ongoing investigations to ensure the integrity of law enforcement efforts.
              </p>
            </div>

            {/* Section 20 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Record Keeping</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We maintain comprehensive records of all customer identification data, transaction records, and compliance activities for a minimum of 5 years, as required by regulation. These records are available to regulatory authorities upon request.
              </p>
            </div>

            {/* Section 21 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Staff Training</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All employees receive comprehensive AML/CTF training covering:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Recognition of suspicious activities</li>
                <li>Customer due diligence procedures</li>
                <li>Reporting obligations and procedures</li>
                <li>Record keeping requirements</li>
                <li>Sanctions screening and compliance</li>
                <li>Latest regulatory developments</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Training is provided during onboarding and annually thereafter, with additional updates when regulations change.
              </p>
            </div>

            {/* Section 22 */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mt-8 mb-4 text-xdeel-dark">Prohibited Activities and Countries</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">Prohibited Businesses</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not provide services to businesses involved in:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Illegal gambling or gaming operations</li>
                <li>Adult entertainment or pornography</li>
                <li>Weapons, firearms, or military equipment</li>
                <li>Illegal substances or controlled materials</li>
                <li>Money service businesses without proper licensing</li>
                <li>High-risk financial services</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3 text-xdeel-dark">Prohibited Countries</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not provide services to residents or entities from countries subject to comprehensive sanctions or those identified as high-risk jurisdictions by international bodies such as FATF.
              </p>
            </div>

            {/* Download Section */}
            <div className="mb-8 pt-8">
              <div className="bg-xdeel-purple p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 text-xdeel-dark flex items-center">
                  <Download className="w-5 h-5 mr-2 text-xdeel-primary" />
                  Download the Full KYC Policy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For complete details of our AML/CTF policies and procedures, download our comprehensive policy document.
                </p>
                <a 
                  href="https://my.xdeel.com/media/Cidrus_Sp_z_o_o_AML_CFT_policy.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xdeel-primary hover:underline font-medium"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Full KYC Policy (PDF)
                </a>
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

export default KycOverview;
