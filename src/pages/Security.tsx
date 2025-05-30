
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, Server, AlertTriangle, Mail, CheckCircle } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Server,
      title: "Multi-Layered Architecture",
      description: "Isolated environments for public, internal, and blockchain layers."
    },
    {
      icon: Lock,
      title: "Bank-Grade Encryption",
      description: "All sensitive data is encrypted both in transit and at rest."
    },
    {
      icon: Shield,
      title: "Cold Wallet Storage",
      description: "The majority of crypto assets are stored offline in multi-signature, cold storage."
    },
    {
      icon: Shield,
      title: "Anti-Phishing Protections",
      description: "Domain signing and security headers prevent spoofing and scam attempts."
    },
    {
      icon: CheckCircle,
      title: "Secure Code Practices",
      description: "Regular code audits, version control, and cryptographic integrity checks."
    },
    {
      icon: Shield,
      title: "DDoS Protection & Rate Limiting",
      description: "Real-time mitigation against platform abuse or denial-of-service attacks."
    }
  ];

  const userSecurityFeatures = [
    {
      title: "Two-Factor Authentication (2FA)",
      description: "Required for account access and withdrawals."
    },
    {
      title: "Session Monitoring",
      description: "View and control login activity and force logout remotely."
    },
    {
      title: "Suspicious Login Detection",
      description: "Alerts and temporary account locks in case of abnormal access."
    },
    {
      title: "Withdrawal Whitelisting",
      description: "Option to allow crypto withdrawals only to pre-approved wallet addresses."
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-[#7B38F3] border-[#7B38F3]/30 bg-[#F4F0FF]">
            <Shield className="w-4 h-4 mr-2" />
            Security & Protection
          </Badge>
          <h1 className="text-4xl font-bold text-[#2E2E2E] mb-6">
            Enterprise-Grade Security, Built for Crypto Confidence
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Xdeel is built from the ground up with your security in mind. From cold storage to advanced encryption, 
            we implement the most robust protections in the industry. Our systems are regularly tested and monitored 
            to safeguard your assets and data.
          </p>
        </div>

        {/* Key Security Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2E2E2E] mb-8 text-center">Key Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#F4F0FF] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#7B38F3] transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[#7B38F3] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2E2E2E] mb-3">{feature.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* User Account Security */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2E2E2E] mb-8">
            <Users className="w-6 h-6 inline mr-3 text-[#7B38F3]" />
            User Account Security
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userSecurityFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-[#2E2E2E] mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Access Controls */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2E2E2E] mb-6">
            <Lock className="w-6 h-6 inline mr-3 text-[#7B38F3]" />
            Internal Access Controls
          </h2>
          <div className="bg-[#F9F7FD] border border-[#7B38F3]/20 rounded-lg p-8">
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#7B38F3] mr-3 mt-0.5 flex-shrink-0" />
                Strict role-based access for employees.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#7B38F3] mr-3 mt-0.5 flex-shrink-0" />
                Segregated environments and production-level isolation.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#7B38F3] mr-3 mt-0.5 flex-shrink-0" />
                Internal compliance reviews and breach simulations.
              </li>
            </ul>
          </div>
        </section>

        {/* Third-Party Security & Audits */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2E2E2E] mb-6">
            <Eye className="w-6 h-6 inline mr-3 text-[#7B38F3]" />
            Third-Party Security & Audits
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-[#7B38F3] mr-3 mt-0.5 flex-shrink-0" />
                Periodic penetration testing by certified cybersecurity firms.
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-[#7B38F3] mr-3 mt-0.5 flex-shrink-0" />
                Vendor risk management and integration only with audited providers.
              </li>
            </ul>
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2E2E2E] mb-6">
            <AlertTriangle className="w-6 h-6 inline mr-3 text-[#7B38F3]" />
            Incident Response
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              We maintain a 24/7 security incident response framework.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In case of a platform threat, our team investigates, mitigates, and transparently communicates 
              in accordance with regulatory best practices.
            </p>
          </div>
        </section>

        {/* Report a Vulnerability */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2E2E2E] mb-6">
            <Mail className="w-6 h-6 inline mr-3 text-[#7B38F3]" />
            Report a Vulnerability
          </h2>
          <Card className="bg-[#F4F0FF] border-[#7B38F3]/30">
            <CardContent className="p-8 text-center">
              <p className="text-gray-700 leading-relaxed mb-4">
                We encourage responsible disclosure.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                To report a bug or vulnerability, please email us at:
              </p>
              <div className="inline-flex items-center bg-white px-6 py-3 rounded-lg border border-gray-200">
                <Mail className="w-5 h-5 text-[#7B38F3] mr-3" />
                <a href="mailto:security@xdeel.com" className="text-[#7B38F3] font-semibold hover:underline">
                  security@xdeel.com
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Security;
