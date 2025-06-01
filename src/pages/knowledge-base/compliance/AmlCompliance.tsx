
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
import { ArrowLeft, Scale, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const AmlCompliance = () => {
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
              <BreadcrumbPage>AML Compliance</BreadcrumbPage>
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
            <span className="text-xdeel-gray">Last updated: 2 weeks ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Anti-Money Laundering (AML) Compliance
          </h1>
          <p className="text-xl text-xdeel-gray">
            Understanding our AML policies and regulatory compliance measures
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">What is AML?</h2>
            <p className="text-xdeel-gray mb-6">
              Anti-Money Laundering (AML) refers to a set of laws, regulations, and procedures designed to prevent criminals from disguising illegally obtained funds as legitimate income.
            </p>

            <Card className="border-blue-200 bg-blue-50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Our AML Commitment
                </h3>
                <p className="text-blue-800 text-sm">
                  Xdeel is committed to preventing money laundering and terrorist financing through robust compliance measures and continuous monitoring.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Key AML Measures</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Customer Due Diligence (CDD)</h4>
                <p className="text-xdeel-gray">We verify customer identities and assess risk levels through comprehensive KYC procedures.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Transaction Monitoring</h4>
                <p className="text-xdeel-gray">All transactions are monitored for suspicious patterns and activities that may indicate money laundering.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Reporting Obligations</h4>
                <p className="text-xdeel-gray">We report suspicious activities to relevant authorities as required by law.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Record Keeping</h4>
                <p className="text-xdeel-gray">We maintain detailed records of all transactions and customer information for regulatory compliance.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Your Responsibilities</h2>
            <ul className="text-xdeel-gray space-y-2 mb-8">
              <li>• Provide accurate and complete information during registration</li>
              <li>• Report any suspicious activities you observe</li>
              <li>• Cooperate with our compliance requests</li>
              <li>• Keep your account information up to date</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AmlCompliance;
