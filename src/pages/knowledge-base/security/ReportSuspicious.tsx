
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
import { ArrowLeft, Shield, AlertTriangle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ReportSuspicious = () => {
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
              <BreadcrumbPage>Reporting Suspicious Activity</BreadcrumbPage>
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
            <span className="text-xdeel-gray">Last updated: 3 weeks ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Reporting Suspicious Activity
          </h1>
          <p className="text-xl text-xdeel-gray">
            When and how to report security concerns
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">When to Report</h2>
            
            <Card className="border-yellow-200 bg-yellow-50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Report These Activities Immediately
                </h3>
                <ul className="text-yellow-800 space-y-2 text-sm">
                  <li>• Unauthorized login attempts</li>
                  <li>• Suspicious transactions you didn't make</li>
                  <li>• Phishing emails or fake websites</li>
                  <li>• Account compromises</li>
                  <li>• Fake support contacts</li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">How to Report</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Immediate Action</h4>
                  <p className="text-xdeel-gray">Secure your account first - change passwords, enable 2FA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Gather Information</h4>
                  <p className="text-xdeel-gray">Collect screenshots, emails, transaction IDs, and timestamps</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Contact Support</h4>
                  <p className="text-xdeel-gray">Email security@xdeel.com with all relevant details</p>
                </div>
              </div>
            </div>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Emergency Security Contact
                </h3>
                <p className="text-blue-800 mb-4">
                  For urgent security matters, contact us immediately:
                </p>
                <div className="inline-flex items-center bg-white px-6 py-3 rounded-lg border border-gray-200">
                  <Mail className="w-5 h-5 text-xdeel-primary mr-3" />
                  <a href="mailto:security@xdeel.com" className="text-xdeel-primary font-semibold hover:underline">
                    security@xdeel.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReportSuspicious;
