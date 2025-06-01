
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
import { ArrowLeft, CreditCard, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentsCategory = () => {
  const articles = [
    {
      title: "How to Deposit Funds",
      description: "Step-by-step guide to adding money to your Xdeel account",
      href: "/knowledge-base/payments/deposit-funds",
      readTime: "6 min read",
      lastUpdated: "3 days ago"
    },
    {
      title: "Withdrawal Process",
      description: "Learn how to withdraw your funds safely and efficiently",
      href: "/knowledge-base/payments/withdraw-funds",
      readTime: "8 min read",
      lastUpdated: "5 days ago"
    },
    {
      title: "Payment Methods",
      description: "Available payment options and their processing times",
      href: "/knowledge-base/payments/payment-methods",
      readTime: "5 min read",
      lastUpdated: "1 week ago"
    },
    {
      title: "SEPA vs SWIFT Transfers",
      description: "Understanding European vs international bank transfers",
      href: "/knowledge-base/payments/sepa-swift",
      readTime: "7 min read",
      lastUpdated: "1 week ago"
    },
    {
      title: "Failed Payment Troubleshooting",
      description: "Common payment issues and how to resolve them",
      href: "/knowledge-base/payments/troubleshooting",
      readTime: "9 min read",
      lastUpdated: "2 weeks ago"
    }
  ];

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
              <BreadcrumbPage>Payments</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-purple-600 border-purple-300">
              <CreditCard className="w-4 h-4 mr-2" />
              Payments
            </Badge>
            <span className="text-xdeel-gray">{articles.length} articles</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Payments & Transfers
          </h1>
          <p className="text-xl text-xdeel-gray">
            Everything you need to know about deposits, withdrawals, and payment methods
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

export default PaymentsCategory;
