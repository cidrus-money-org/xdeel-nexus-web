
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
import { ArrowLeft, CreditCard, Clock, CheckCircle, AlertCircle, Banknote, Building, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentMethods = () => {
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
              <BreadcrumbPage>Payment Methods</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base/payments" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Payments
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-purple-600 border-purple-300">
              <CreditCard className="w-4 h-4 mr-2" />
              Payments
            </Badge>
            <span className="text-xdeel-gray">Last updated: 1 week ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Available Payment Methods
          </h1>
          <p className="text-xl text-xdeel-gray">
            Explore all the ways you can fund your Xdeel account and withdraw your funds
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Deposit Methods</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-900">
                    <Building className="w-6 h-6 mr-3" />
                    Bank Transfer (SEPA)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Processing Time:</span>
                      <span>1-2 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Fees:</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Min/Max:</span>
                      <span>€10 - €50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Availability:</span>
                      <span>EU banks only</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-900">
                    <Banknote className="w-6 h-6 mr-3" />
                    SWIFT Wire Transfer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Processing Time:</span>
                      <span>3-5 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Fees:</span>
                      <span>€25 per transfer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Min/Max:</span>
                      <span>€100 - €100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Availability:</span>
                      <span>International</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Withdrawal Methods</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-900">
                    <Building className="w-6 h-6 mr-3" />
                    Bank Transfer (SEPA)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Processing Time:</span>
                      <span>1-2 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Fees:</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Min/Max:</span>
                      <span>€10 - €50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Availability:</span>
                      <span>EU banks only</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-900">
                    <Banknote className="w-6 h-6 mr-3" />
                    SWIFT Wire Transfer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Processing Time:</span>
                      <span>3-5 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Fees:</span>
                      <span>€25 per transfer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Min/Max:</span>
                      <span>€100 - €100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Availability:</span>
                      <span>International</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-yellow-200 bg-yellow-50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Coming Soon
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-800">
                  <div className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    <span>Credit/Debit Cards</span>
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="w-5 h-5 mr-2" />
                    <span>Mobile Payments</span>
                  </div>
                </div>
                <p className="text-yellow-700 text-sm mt-3">
                  We're working on adding more payment methods to make funding your account even easier.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Payment Processing Times</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Method</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Deposit Time</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Withdrawal Time</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Fees</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">SEPA Transfer</td>
                    <td className="border border-gray-300 px-4 py-2">1-2 business days</td>
                    <td className="border border-gray-300 px-4 py-2">1-2 business days</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">Free</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">SWIFT Transfer</td>
                    <td className="border border-gray-300 px-4 py-2">3-5 business days</td>
                    <td className="border border-gray-300 px-4 py-2">3-5 business days</td>
                    <td className="border border-gray-300 px-4 py-2">€25</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Important Information</h2>
            <div className="space-y-4 mb-8">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Account Verification Required
                  </h4>
                  <p className="text-xdeel-gray">
                    All payment methods require a verified Xdeel account. Higher verification levels unlock increased limits.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Same Name Policy
                  </h4>
                  <p className="text-xdeel-gray">
                    The name on your bank account must match your verified Xdeel account name exactly.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Business Hours
                  </h4>
                  <p className="text-xdeel-gray">
                    Processing times exclude weekends and bank holidays. Transfers initiated on Friday may not process until Monday.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentMethods;
