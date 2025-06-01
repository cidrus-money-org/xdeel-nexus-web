
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
import { ArrowLeft, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const GettingStartedCategory = () => {
  const articles = [
    {
      title: "Account Setup",
      description: "Create your Xdeel account and get started with cryptocurrency trading",
      href: "/knowledge-base/account-setup",
      readTime: "5 min read",
      lastUpdated: "2 days ago"
    },
    {
      title: "First Steps",
      description: "Your first steps after creating an account",
      href: "/knowledge-base/first-steps",
      readTime: "7 min read",
      lastUpdated: "3 days ago"
    },
    {
      title: "Identity Verification Guide",
      description: "Complete your KYC verification process",
      href: "/knowledge-base/verification-guide",
      readTime: "6 min read",
      lastUpdated: "1 week ago"
    },
    {
      title: "Platform Tour",
      description: "Navigate the Xdeel platform like a pro",
      href: "/knowledge-base/platform-tour",
      readTime: "8 min read",
      lastUpdated: "1 week ago"
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base">Knowledge Base</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Getting Started</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-blue-600 border-blue-300">
              <Users className="w-4 h-4 mr-2" />
              Getting Started
            </Badge>
            <span className="text-xdeel-gray">{articles.length} articles</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Getting Started with Xdeel
          </h1>
          <p className="text-xl text-xdeel-gray">
            Everything you need to know to begin your cryptocurrency journey
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

export default GettingStartedCategory;
