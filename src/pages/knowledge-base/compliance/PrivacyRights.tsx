
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

const PrivacyRights = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
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
              <BreadcrumbPage>Data Privacy & User Rights</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base/compliance" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Compliance & Legal
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-blue-600 border-blue-300">
              <Scale className="w-4 h-4 mr-2" />
              Compliance & Legal
            </Badge>
            <span className="text-xdeel-gray">Last updated: 1 month ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Data Privacy & User Rights
          </h1>
          <p className="text-xl text-xdeel-gray">
            How we protect your data and your rights under GDPR
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <Card className="border-blue-200 bg-blue-50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Your Privacy Matters
                </h3>
                <p className="text-blue-800 text-sm">
                  We are committed to protecting your personal data and respecting your privacy rights under GDPR and other applicable laws.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Your Rights Under GDPR</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Right to Access</h4>
                <p className="text-xdeel-gray">You have the right to request access to your personal data and receive information about how we process it.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Right to Rectification</h4>
                <p className="text-xdeel-gray">You can request correction of inaccurate or incomplete personal data.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Right to Erasure</h4>
                <p className="text-xdeel-gray">You can request deletion of your personal data under certain circumstances.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Right to Data Portability</h4>
                <p className="text-xdeel-gray">You can request a copy of your data in a structured, machine-readable format.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">How We Protect Your Data</h2>
            <ul className="text-xdeel-gray space-y-2 mb-8">
              <li>• End-to-end encryption for sensitive data</li>
              <li>• Regular security audits and assessments</li>
              <li>• Strict access controls and authentication</li>
              <li>• Compliance with international security standards</li>
              <li>• Regular staff training on data protection</li>
            </ul>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Data Processing Legal Basis</h2>
            <p className="text-xdeel-gray mb-4">
              We process your personal data based on:
            </p>
            <ul className="text-xdeel-gray space-y-2 mb-8">
              <li>• Contract performance (providing our services)</li>
              <li>• Legal obligations (KYC/AML compliance)</li>
              <li>• Legitimate interests (fraud prevention, security)</li>
              <li>• Your consent (marketing communications)</li>
            </ul>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Contact Our Data Protection Officer</h2>
            <p className="text-xdeel-gray">
              For any data protection inquiries or to exercise your rights, contact our Data Protection Officer at{" "}
              <a href="mailto:dpo@xdeel.com" className="text-xdeel-primary hover:underline">
                dpo@xdeel.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyRights;
