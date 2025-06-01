
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Globe, Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const SupportedCountries = () => {
  const fullySupportedCountries = [
    "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark",
    "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland",
    "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands",
    "Norway", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden"
  ];

  const limitedSupportCountries = [
    { country: "United Kingdom", limitations: "No SEPA transfers, higher card fees" },
    { country: "Switzerland", limitations: "Limited to bank transfers and select cards" },
    { country: "Canada", limitations: "Wire transfers only, no card payments" },
    { country: "Australia", limitations: "Wire transfers only, no card payments" }
  ];

  const restrictedCountries = [
    "Afghanistan", "Belarus", "Burma (Myanmar)", "Central African Republic", "Democratic Republic of Congo",
    "Iran", "Iraq", "Libya", "Mali", "North Korea", "Russia", "Somalia", "South Sudan", "Sudan",
    "Syria", "Venezuela", "Yemen", "Zimbabwe"
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/faq" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to FAQ
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-blue-600 border-blue-300">
              <Globe className="w-4 h-4 mr-2" />
              Legal
            </Badge>
            <div className="flex items-center text-xdeel-gray">
              <Clock className="w-4 h-4 mr-2" />
              3 min read
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Supported Countries
          </h1>
          <p className="text-xl text-xdeel-gray">
            Complete list of countries where Xdeel operates and the services available in each region
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Service Availability Overview</h2>
              <p className="text-xdeel-gray mb-6">
                Xdeel is authorized by the Polish Financial Supervision Authority (KNF) and operates primarily within 
                the European Economic Area (EEA). Our services are also available in select countries outside the EU 
                with certain limitations.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-green-800">Full Support</h4>
                  <p className="text-green-700 text-sm">30 countries</p>
                  <p className="text-green-600 text-xs">All features available</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 text-center">
                  <AlertTriangle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-yellow-800">Limited Support</h4>
                  <p className="text-yellow-700 text-sm">4 countries</p>
                  <p className="text-yellow-600 text-xs">Restricted features</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 text-center">
                  <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-red-800">Not Supported</h4>
                  <p className="text-red-700 text-sm">18+ countries</p>
                  <p className="text-red-600 text-xs">Service not available</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fully Supported Countries */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Countries with Full Support</h2>
              </div>
              
              <p className="text-xdeel-gray mb-6">
                These countries have access to all Xdeel features including SEPA transfers, card payments, 
                full KYC verification, and all trading pairs.
              </p>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-3">Available Services:</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-green-700 text-sm">
                  <li>✓ Full account verification</li>
                  <li>✓ SEPA bank transfers (free deposits)</li>
                  <li>✓ Credit/debit card payments</li>
                  <li>✓ All cryptocurrency trading pairs</li>
                  <li>✓ Instant cryptocurrency purchases</li>
                  <li>✓ 24/7 customer support</li>
                  <li>✓ Advanced trading features</li>
                  <li>✓ API access</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {fullySupportedCountries.map((country, index) => (
                  <div key={index} className="flex items-center p-3 border rounded-lg bg-white">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-xdeel-dark text-sm">{country}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Limited Support Countries */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Countries with Limited Services</h2>
              </div>
              
              <p className="text-xdeel-gray mb-6">
                These countries can access Xdeel with certain restrictions on payment methods or features.
              </p>

              <div className="space-y-4">
                {limitedSupportCountries.map((item, index) => (
                  <div key={index} className="border border-yellow-300 rounded-lg p-4 bg-yellow-50">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-1">{item.country}</h4>
                        <p className="text-yellow-700 text-sm">{item.limitations}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                <ul className="text-yellow-700 space-y-1 text-sm">
                  <li>• Higher verification requirements may apply</li>
                  <li>• Additional processing time for some transactions</li>
                  <li>• Contact support for specific country limitations</li>
                  <li>• Some advanced features may not be available</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Restricted Countries */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <XCircle className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Restricted Countries</h2>
              </div>
              
              <p className="text-xdeel-gray mb-6">
                Due to international sanctions, regulatory requirements, or compliance policies, 
                Xdeel cannot provide services to residents or entities from these countries.
              </p>

              <div className="bg-red-50 p-4 rounded-lg mb-6 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Important Notice</h4>
                <p className="text-red-700 text-sm">
                  Attempting to access Xdeel services from restricted countries using VPNs or other means 
                  is strictly prohibited and may result in account suspension and loss of funds.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {restrictedCountries.map((country, index) => (
                  <div key={index} className="flex items-center p-3 border border-red-200 rounded-lg bg-red-50">
                    <XCircle className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                    <span className="text-red-800 text-sm">{country}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compliance */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-6">How We Ensure Compliance</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Regulatory Framework</h4>
                  <p className="text-xdeel-gray mb-4">
                    Xdeel operates under the authorization of the Polish Financial Supervision Authority (KNF) 
                    and follows EU financial regulations including:
                  </p>
                  <ul className="text-xdeel-gray space-y-2 ml-4">
                    <li>• Anti-Money Laundering (AML) Directive</li>
                    <li>• Know Your Customer (KYC) requirements</li>
                    <li>• General Data Protection Regulation (GDPR)</li>
                    <li>• Payment Services Directive 2 (PSD2)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Geographic Restrictions</h4>
                  <p className="text-xdeel-gray">
                    Our geographic restrictions are based on international sanctions lists including those 
                    maintained by the EU, UN, and other international bodies. These restrictions are regularly 
                    updated to ensure compliance with changing regulations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Verification Process</h4>
                  <p className="text-xdeel-gray">
                    All users must complete identity verification including proof of address to ensure they 
                    are residents of supported countries. This helps us maintain compliance and protect our 
                    platform from regulatory risks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-xdeel-dark mb-4">Questions About Country Support?</h3>
            <p className="text-xdeel-gray mb-6">
              Contact our compliance team for specific questions about service availability in your region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary/90">
                Contact Compliance Team
              </Button>
              <Button variant="outline" size="lg">
                View Legal Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SupportedCountries;
