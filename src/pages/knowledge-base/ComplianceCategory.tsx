
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { ArrowLeft, Scale, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ComplianceCategory = () => {
  const articles = [
    {
      title: "KYC Overview",
      description: "Understanding Know Your Customer requirements and processes",
      href: "/kyc-overview",
      readTime: "8 min read",
      lastUpdated: "1 week ago"
    },
    {
      title: "AML Compliance",
      description: "Anti-Money Laundering policies and regulatory compliance",
      href: "/knowledge-base/compliance/aml-compliance",
      readTime: "12 min read",
      lastUpdated: "2 weeks ago"
    },
    {
      title: "Restricted Jurisdictions",
      description: "Countries and regions where Xdeel services are not available",
      href: "/knowledge-base/compliance/restricted-jurisdictions",
      readTime: "5 min read",
      lastUpdated: "3 weeks ago"
    },
    {
      title: "Data Privacy & User Rights",
      description: "How we protect your data and your rights under GDPR",
      href: "/knowledge-base/compliance/privacy-rights",
      readTime: "10 min read",
      lastUpdated: "1 month ago"
    },
    {
      title: "Terms of Service Explained",
      description: "Plain English explanation of our terms and conditions",
      href: "/knowledge-base/compliance/terms-explained",
      readTime: "15 min read",
      lastUpdated: "1 month ago"
    }
  ];

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
              <BreadcrumbPage>Compliance & Legal</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-gray-600 border-gray-300">
              <Scale className="w-4 h-4 mr-2" />
              Compliance & Legal
            </Badge>
            <span className="text-xdeel-gray">{articles.length} articles</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Compliance & Legal
          </h1>
          <p className="text-xl text-xdeel-gray">
            Regulations, legal requirements, and compliance information
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {articles.map((article, index) => (
              <Link key={index} to={article.href}>
                <Card className="hover:shadow-lg hover:border-xdeel-primary/50 transition-all duration-200 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{article.title}</CardTitle>
                      <div className="flex items-center text-sm text-xdeel-gray">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {article.description}
                    </CardDescription>
                    <div className="text-sm text-xdeel-gray">
                      Last updated: {article.lastUpdated}
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComplianceCategory;
