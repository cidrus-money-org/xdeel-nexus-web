
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
import { ArrowLeft, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FakeSupport = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
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
                  <Link to="/knowledge-base/security">Security</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Recognizing Fake Support</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base/security" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Security
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-red-600 border-red-300">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </Badge>
            <span className="text-xdeel-gray">Last updated: 2 weeks ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Recognizing Fake Support
          </h1>
          <p className="text-xl text-xdeel-gray">
            Learn to identify legitimate support vs scammers
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <Card className="border-red-200 bg-red-50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-2 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Warning Signs
                </h3>
                <p className="text-red-800">
                  Scammers often impersonate official support to steal your credentials and funds.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">How to Identify Fake Support</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-red-600">❌ Red Flags</h4>
                <ul className="text-xdeel-gray space-y-2">
                  <li>• Unsolicited contact via DM or email</li>
                  <li>• Requests for passwords or private keys</li>
                  <li>• Urgency tactics ("act now or lose your funds")</li>
                  <li>• Poor grammar or spelling</li>
                  <li>• Requests to download software</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-600">✅ Legitimate Support</h4>
                <ul className="text-xdeel-gray space-y-2">
                  <li>• Only responds to tickets you created</li>
                  <li>• Never asks for passwords or keys</li>
                  <li>• Uses official channels and email domains</li>
                  <li>• Professional communication</li>
                  <li>• Can verify your account details</li>
                </ul>
              </div>
            </div>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Official Support Channels
                </h3>
                <p className="text-green-800 text-sm">
                  Always contact support through official channels: support@xdeel.com or through your account dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FakeSupport;
