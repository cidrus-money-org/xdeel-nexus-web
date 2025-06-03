
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { ArrowLeft, Building, Globe, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SepaSwift = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base">Knowledge Base</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base/payments">Payments</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>SEPA vs SWIFT</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base/payments" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Payments
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-purple-600 border-purple-300">
              <Building className="w-4 h-4 mr-2" />
              Payments
            </Badge>
            <span className="text-xdeel-gray">Last updated: 1 week ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            SEPA vs SWIFT Transfers
          </h1>
          <p className="text-xl text-xdeel-gray">
            Understanding the differences between European and international bank transfers
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-900">
                    <Building className="w-6 h-6 mr-3" />
                    SEPA Transfers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">European Union Focus</h4>
                        <p className="text-sm text-green-800">Available for EU banks only</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Fast Processing</h4>
                        <p className="text-sm text-green-800">1-2 business days</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">No Fees</h4>
                        <p className="text-sm text-green-800">Free transfers on Xdeel</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-900">
                    <Globe className="w-6 h-6 mr-3" />
                    SWIFT Transfers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 mr-2 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Global Reach</h4>
                        <p className="text-sm text-blue-800">Available worldwide</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Longer Processing</h4>
                        <p className="text-sm text-blue-800">3-5 business days</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 mr-2 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Transfer Fees</h4>
                        <p className="text-sm text-blue-800">€25 per transfer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Detailed Comparison</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">SEPA</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">SWIFT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Coverage</td>
                    <td className="border border-gray-300 px-4 py-2">EU + EEA countries</td>
                    <td className="border border-gray-300 px-4 py-2">Worldwide</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Processing Time</td>
                    <td className="border border-gray-300 px-4 py-2">1-2 business days</td>
                    <td className="border border-gray-300 px-4 py-2">3-5 business days</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Fees</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">Free</td>
                    <td className="border border-gray-300 px-4 py-2">€25</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Minimum Amount</td>
                    <td className="border border-gray-300 px-4 py-2">€10</td>
                    <td className="border border-gray-300 px-4 py-2">€100</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Maximum Amount</td>
                    <td className="border border-gray-300 px-4 py-2">€50,000</td>
                    <td className="border border-gray-300 px-4 py-2">€100,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Currency</td>
                    <td className="border border-gray-300 px-4 py-2">EUR only</td>
                    <td className="border border-gray-300 px-4 py-2">Multiple currencies</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">When to Use Each Method</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Choose SEPA When:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5" />
                      Your bank is in the EU or EEA
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5" />
                      You want faster processing times
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5" />
                      You prefer to avoid transfer fees
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5" />
                      You're transferring smaller amounts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Choose SWIFT When:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5" />
                      Your bank is outside the EU/EEA
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5" />
                      SEPA is not available
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5" />
                      You need to transfer large amounts
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5" />
                      You don't mind paying the transfer fee
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-yellow-200 bg-yellow-50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Important Notes
                </h3>
                <ul className="space-y-2 text-yellow-800">
                  <li>• SEPA transfers are only available in Euros (EUR)</li>
                  <li>• SWIFT transfers may involve currency conversion fees from your bank</li>
                  <li>• Processing times exclude weekends and bank holidays</li>
                  <li>• All transfers require account verification and matching names</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SepaSwift;
