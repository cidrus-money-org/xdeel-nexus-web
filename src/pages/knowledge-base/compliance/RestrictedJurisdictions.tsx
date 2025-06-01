
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
import { ArrowLeft, Scale, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const RestrictedJurisdictions = () => {
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
                  <Link to="/knowledge-base/compliance">Compliance & Legal</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Restricted Jurisdictions</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base/compliance" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Compliance & Legal
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-red-600 border-red-300">
              <Scale className="w-4 h-4 mr-2" />
              Compliance & Legal
            </Badge>
            <span className="text-xdeel-gray">Last updated: 3 weeks ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Restricted Jurisdictions
          </h1>
          <p className="text-xl text-xdeel-gray">
            Countries and regions where Xdeel services are not available
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
                  Important Notice
                </h3>
                <p className="text-red-800 text-sm">
                  Xdeel services are not available in certain jurisdictions due to regulatory restrictions and compliance requirements.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Restricted Countries</h2>
            <p className="text-xdeel-gray mb-6">
              Due to regulatory requirements and sanctions, Xdeel services are currently not available to residents of the following countries and regions:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="text-xdeel-gray space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>• Afghanistan</li>
                <li>• Belarus</li>
                <li>• Burma (Myanmar)</li>
                <li>• Central African Republic</li>
                <li>• Cuba</li>
                <li>• Democratic Republic of Congo</li>
                <li>• Iran</li>
                <li>• Iraq</li>
                <li>• Libya</li>
                <li>• Mali</li>
                <li>• Nicaragua</li>
                <li>• North Korea</li>
                <li>• Russia</li>
                <li>• Somalia</li>
                <li>• South Sudan</li>
                <li>• Sudan</li>
                <li>• Syria</li>
                <li>• Venezuela</li>
                <li>• Yemen</li>
                <li>• Zimbabwe</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Why These Restrictions?</h2>
            <div className="space-y-4 mb-8">
              <p className="text-xdeel-gray">
                These restrictions are in place due to:
              </p>
              <ul className="text-xdeel-gray space-y-2">
                <li>• International sanctions and embargoes</li>
                <li>• Local regulatory restrictions</li>
                <li>• Anti-money laundering compliance requirements</li>
                <li>• Risk assessment and management policies</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Account Restrictions</h2>
            <p className="text-xdeel-gray mb-4">
              If you are a resident of a restricted jurisdiction, you will not be able to:
            </p>
            <ul className="text-xdeel-gray space-y-2 mb-8">
              <li>• Create a new Xdeel account</li>
              <li>• Access trading services</li>
              <li>• Deposit or withdraw funds</li>
              <li>• Use any Xdeel products or services</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RestrictedJurisdictions;
