
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
import { ArrowLeft, AlertCircle, CreditCard, Clock, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Troubleshooting = () => {
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
              <BreadcrumbPage>Failed Payment Troubleshooting</BreadcrumbPage>
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
            <span className="text-xdeel-gray">Last updated: 2 weeks ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Failed Payment Troubleshooting
          </h1>
          <p className="text-xl text-xdeel-gray">
            Common payment issues and how to resolve them quickly
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Common Payment Issues</h2>
            
            <div className="grid gap-6 mb-12">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-900">
                    <XCircle className="w-6 h-6 mr-3" />
                    Card Declined
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-red-900">Possible Causes:</h4>
                    <ul className="text-red-800 space-y-2">
                      <li>• Insufficient funds in your account</li>
                      <li>• Daily spending limit exceeded</li>
                      <li>• Card expired or invalid details</li>
                      <li>• Bank blocking international transactions</li>
                    </ul>
                    <h4 className="font-semibold text-red-900">Solutions:</h4>
                    <ul className="text-red-800 space-y-2">
                      <li>• Check your account balance</li>
                      <li>• Contact your bank to increase limits</li>
                      <li>• Verify card details are correct</li>
                      <li>• Enable international transactions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-900">
                    <Clock className="w-6 h-6 mr-3" />
                    Bank Transfer Delayed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-orange-900">Possible Causes:</h4>
                    <ul className="text-orange-800 space-y-2">
                      <li>• Weekend or bank holiday processing</li>
                      <li>• Additional verification required</li>
                      <li>• Incorrect bank details provided</li>
                      <li>• High transaction volume delays</li>
                    </ul>
                    <h4 className="font-semibold text-orange-900">Solutions:</h4>
                    <ul className="text-orange-800 space-y-2">
                      <li>• Wait for next business day</li>
                      <li>• Check for verification emails</li>
                      <li>• Verify IBAN/account details</li>
                      <li>• Contact support if over 5 days</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-yellow-900">
                    <AlertCircle className="w-6 h-6 mr-3" />
                    Payment Method Not Accepted
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-yellow-900">Possible Causes:</h4>
                    <ul className="text-yellow-800 space-y-2">
                      <li>• Unsupported card type (e.g., prepaid cards)</li>
                      <li>• Geographic restrictions</li>
                      <li>• Currency not supported</li>
                      <li>• Minimum deposit amount not met</li>
                    </ul>
                    <h4 className="font-semibold text-yellow-900">Solutions:</h4>
                    <ul className="text-yellow-800 space-y-2">
                      <li>• Use a different payment method</li>
                      <li>• Check supported countries list</li>
                      <li>• Convert to supported currency</li>
                      <li>• Meet minimum deposit requirements</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Step-by-Step Troubleshooting</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Check Payment Details</h3>
                  <p className="text-xdeel-gray">Verify that all payment information is correct, including card numbers, expiry dates, and billing addresses.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact Your Bank</h3>
                  <p className="text-xdeel-gray">Many payment failures are due to bank security measures. Contact your bank to authorize the transaction.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Try Alternative Payment Method</h3>
                  <p className="text-xdeel-gray">If one payment method fails, try using a different card or bank transfer option.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Wait and Retry</h3>
                  <p className="text-xdeel-gray">Sometimes temporary issues resolve themselves. Wait 15-30 minutes before trying again.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center font-bold mr-4">5</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
                  <p className="text-xdeel-gray">If the issue persists, contact our support team with transaction details for personalized assistance.</p>
                </div>
              </div>
            </div>

            <Card className="border-green-200 bg-green-50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Prevention Tips
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Keep your payment information up to date</li>
                  <li>• Notify your bank before making large transactions</li>
                  <li>• Ensure sufficient funds are available</li>
                  <li>• Use trusted networks for transactions</li>
                  <li>• Enable notifications for transaction updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Need More Help?</h3>
                <p className="text-blue-800 mb-4">
                  If you're still experiencing payment issues after following these steps, our support team is here to help.
                </p>
                <div className="space-y-2 text-blue-800">
                  <p>📧 Email: support@xdeel.com</p>
                  <p>💬 Live Chat: Available 24/7 in your account</p>
                  <p>📞 Phone: +1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Troubleshooting;
