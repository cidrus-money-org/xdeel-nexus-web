
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
import { ArrowLeft, CreditCard, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const DepositFunds = () => {
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
              <BreadcrumbPage>How to Deposit Funds</BreadcrumbPage>
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
            <span className="text-xdeel-gray">Last updated: 3 days ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            How to Deposit Funds
          </h1>
          <p className="text-xl text-xdeel-gray">
            Step-by-step guide to adding money to your Xdeel account
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Available Deposit Methods</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Bank Transfer (SEPA)
                  </h3>
                  <p className="text-green-800 mb-2">
                    <strong>Processing Time:</strong> 1-2 business days
                  </p>
                  <p className="text-green-700 text-sm">
                    <strong>Fees:</strong> Free for SEPA transfers
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    SWIFT Wire Transfer
                  </h3>
                  <p className="text-blue-800 mb-2">
                    <strong>Processing Time:</strong> 3-5 business days
                  </p>
                  <p className="text-blue-700 text-sm">
                    <strong>Fees:</strong> €25 per transfer
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Step-by-Step Deposit Process</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Log into Your Account</h4>
                  <p className="text-xdeel-gray">Sign in to your Xdeel account and navigate to the "Wallet" section.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Select "Deposit"</h4>
                  <p className="text-xdeel-gray">Click on the "Deposit" button and choose EUR as your deposit currency.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Choose Transfer Method</h4>
                  <p className="text-xdeel-gray">Select either SEPA transfer (EU banks) or SWIFT transfer (international banks).</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Get Bank Details</h4>
                  <p className="text-xdeel-gray">Copy the provided bank account details including IBAN, BIC, and your unique reference code.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Initiate Transfer</h4>
                  <p className="text-xdeel-gray">Use your bank's online banking or visit a branch to send the transfer with the provided details.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Wait for Processing</h4>
                  <p className="text-xdeel-gray">Your deposit will appear in your account once processed. You'll receive an email confirmation.</p>
                </div>
              </div>
            </div>

            <Card className="border-yellow-200 bg-yellow-50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Important Notes
                </h3>
                <ul className="text-yellow-800 space-y-2">
                  <li>• Always include the reference code provided by Xdeel</li>
                  <li>• The sender name must match your verified Xdeel account name</li>
                  <li>• Minimum deposit amount is €10</li>
                  <li>• Maximum deposit amount is €50,000 per transaction</li>
                  <li>• Deposits from third-party accounts are not accepted</li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Deposit Limits</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Verification Level</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Daily Limit</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Monthly Limit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Basic</td>
                    <td className="border border-gray-300 px-4 py-2">€1,000</td>
                    <td className="border border-gray-300 px-4 py-2">€5,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Verified</td>
                    <td className="border border-gray-300 px-4 py-2">€10,000</td>
                    <td className="border border-gray-300 px-4 py-2">€50,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Pro</td>
                    <td className="border border-gray-300 px-4 py-2">€50,000</td>
                    <td className="border border-gray-300 px-4 py-2">€500,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Troubleshooting</h2>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Deposit Not Showing?</h4>
                <p className="text-xdeel-gray">Check that you used the correct reference code and that the transfer was sent from your verified bank account.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Transfer Rejected?</h4>
                <p className="text-xdeel-gray">Ensure the sender name matches your Xdeel account exactly and that you're within your deposit limits.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Still Need Help?</h4>
                <p className="text-xdeel-gray">Contact our support team with your transaction reference for assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DepositFunds;
