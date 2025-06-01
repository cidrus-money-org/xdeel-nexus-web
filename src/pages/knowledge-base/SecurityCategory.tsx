
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
import { ArrowLeft, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityCategory = () => {
  const articles = [
    {
      title: "Security Best Practices",
      description: "Essential security measures to protect your account and assets",
      href: "/resources/security-guide",
      readTime: "10 min read",
      lastUpdated: "3 days ago"
    },
    {
      title: "How to Enable 2FA",
      description: "Step-by-step guide to setting up two-factor authentication",
      href: "/knowledge-base/security/enable-2fa",
      readTime: "5 min read",
      lastUpdated: "1 week ago"
    },
    {
      title: "Phishing Awareness",
      description: "Learn to identify and avoid phishing attacks and scams",
      href: "/knowledge-base/security/phishing-awareness",
      readTime: "8 min read",
      lastUpdated: "1 week ago"
    },
    {
      title: "Protecting Your Wallet",
      description: "Best practices for securing your cryptocurrency wallet",
      href: "/knowledge-base/security/wallet-protection",
      readTime: "12 min read",
      lastUpdated: "2 weeks ago"
    },
    {
      title: "Recognizing Fake Support",
      description: "How to identify legitimate support vs scammers",
      href: "/knowledge-base/security/fake-support",
      readTime: "6 min read",
      lastUpdated: "2 weeks ago"
    },
    {
      title: "Reporting Suspicious Activity",
      description: "When and how to report security concerns",
      href: "/knowledge-base/security/report-suspicious",
      readTime: "4 min read",
      lastUpdated: "3 weeks ago"
    },
    {
      title: "Secure Password Tips",
      description: "Creating and managing strong, unique passwords",
      href: "/knowledge-base/security/password-tips",
      readTime: "7 min read",
      lastUpdated: "3 weeks ago"
    }
  ];

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
              <BreadcrumbPage>Security</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-red-600 border-red-300">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </Badge>
            <span className="text-xdeel-gray">{articles.length} articles</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Security & Safety
          </h1>
          <p className="text-xl text-xdeel-gray">
            Protect your account and assets with these essential security practices
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

export default SecurityCategory;
