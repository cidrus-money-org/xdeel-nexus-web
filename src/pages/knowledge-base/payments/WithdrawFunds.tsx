
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { ArrowLeft, CreditCard, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WithdrawFunds = () => {
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
              <BreadcrumbPage>Withdrawal Process</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-purple-600 border-purple-300">
              <CreditCard className="w-4 h-4 mr-2" />
              Payments
            </Badge>
            <span className="text-xdeel-gray">Last updated: 5 days ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            How to Withdraw Funds
          </h1>
          <p className="text-xl text-xdeel-gray">
            Learn how to safely withdraw your funds from Xdeel
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <Card className="border-blue-200 bg-blue-50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Before You Withdraw</h3>
                <p className="text-blue-800">
                  Ensure your account is fully verified and you have completed all necessary security steps including 2FA.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Withdrawal Methods</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Bank Transfer</h3>
                  <p className="text-xdeel-gray text-sm mb-2">Withdraw to your linked bank account</p>
                  <p className="text-xs text-xdeel-gray">Processing time: 1-3 business days</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Cryptocurrency</h3>
                  <p className="text-xdeel-gray text-sm mb-2">Withdraw to external crypto wallet</p>
                  <p className="text-xs text-xdeel-gray">Processing time: 10-60 minutes</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Step-by-Step Withdrawal Process</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Navigate to Withdrawals</h4>
                  <p className="text-xdeel-gray">Go to your account dashboard and click on "Withdraw"</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Select Withdrawal Method</h4>
                  <p className="text-xdeel-gray">Choose between bank transfer or cryptocurrency withdrawal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Enter Amount</h4>
                  <p className="text-xdeel-gray">Specify the amount you want to withdraw</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Review and Confirm</h4>
                  <p className="text-xdeel-gray">Check all details and confirm your withdrawal</p>
                </div>
              </div>
            </div>

            <Card className="border-yellow-200 bg-yellow-50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Important Notes
                </h3>
                <ul className="text-yellow-800 space-y-1 text-sm">
                  <li>• Minimum withdrawal amounts apply</li>
                  <li>• Withdrawal fees may apply depending on the method</li>
                  <li>• Large withdrawals may require additional verification</li>
                  <li>• Always double-check recipient addresses for crypto withdrawals</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Security Tips
                </h3>
                <p className="text-green-800 text-sm">
                  Always use 2FA, verify withdrawal emails, and never share your account credentials with anyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WithdrawFunds;
