
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
import { ArrowLeft, Scale, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const TermsExplained = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
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
                  <Link to="/knowledge-base/compliance">Compliance & Legal</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Terms of Service Explained</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base/compliance" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Compliance & Legal
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-gray-600 border-gray-300">
              <Scale className="w-4 h-4 mr-2" />
              Compliance & Legal
            </Badge>
            <span className="text-xdeel-gray">Last updated: 1 month ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Terms of Service Explained
          </h1>
          <p className="text-xl text-xdeel-gray">
            Plain English explanation of our terms and conditions
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <Card className="border-blue-200 bg-blue-50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Terms Made Simple
                </h3>
                <p className="text-blue-800 text-sm">
                  We've broken down our terms of service into simple, easy-to-understand language.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Key Points</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Account Responsibility</h4>
                <p className="text-xdeel-gray">You are responsible for keeping your account secure and for all activities that occur under your account.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Service Availability</h4>
                <p className="text-xdeel-gray">We strive for 99.9% uptime but cannot guarantee uninterrupted service due to maintenance or technical issues.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Trading Risks</h4>
                <p className="text-xdeel-gray">Cryptocurrency trading involves significant risk. You should only trade with funds you can afford to lose.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Prohibited Activities</h4>
                <p className="text-xdeel-gray">You cannot use our platform for illegal activities, money laundering, or market manipulation.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Fees and Charges</h2>
            <ul className="text-xdeel-gray space-y-2 mb-8">
              <li>• Trading fees are clearly displayed before each transaction</li>
              <li>• Withdrawal fees vary by cryptocurrency and network</li>
              <li>• No hidden fees - all charges are transparent</li>
              <li>• Fee schedule is available in our resources section</li>
            </ul>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Dispute Resolution</h2>
            <p className="text-xdeel-gray mb-4">
              If you have a dispute with us:
            </p>
            <ol className="text-xdeel-gray space-y-2 mb-8">
              <li>1. Contact our support team first</li>
              <li>2. We'll work to resolve issues within 14 days</li>
              <li>3. Unresolved disputes may go to arbitration</li>
              <li>4. EU customers have additional rights under EU law</li>
            </ol>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Account Termination</h2>
            <p className="text-xdeel-gray mb-4">
              We may suspend or terminate accounts for:
            </p>
            <ul className="text-xdeel-gray space-y-2 mb-8">
              <li>• Violation of terms of service</li>
              <li>• Suspicious or illegal activity</li>
              <li>• Regulatory requirements</li>
              <li>• Extended inactivity (12+ months)</li>
            </ul>

            <Card className="border-gray-200 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Questions About Terms?
                </h3>
                <p className="text-gray-800 text-sm">
                  If you have questions about our terms of service, please contact our legal team at{" "}
                  <a href="mailto:legal@xdeel.com" className="text-xdeel-primary hover:underline">
                    legal@xdeel.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsExplained;
