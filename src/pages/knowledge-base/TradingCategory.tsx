
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
import { ArrowLeft, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TradingCategory = () => {
  const articles = [
    {
      title: "Trading Guide for Beginners",
      description: "Complete step-by-step guide to start trading cryptocurrencies",
      href: "/resources/trading-guide",
      readTime: "12 min read",
      lastUpdated: "2 days ago"
    },
    {
      title: "Market Orders vs Limit Orders",
      description: "Understanding different order types and when to use them",
      href: "/knowledge-base/trading/order-types",
      readTime: "8 min read",
      lastUpdated: "5 days ago"
    },
    {
      title: "Reading Trading Charts",
      description: "Learn to analyze price charts and technical indicators",
      href: "/knowledge-base/trading/reading-charts",
      readTime: "15 min read",
      lastUpdated: "1 week ago"
    },
    {
      title: "Setting Stop Loss & Take Profit",
      description: "Risk management strategies to protect your investments",
      href: "/knowledge-base/trading/stop-loss-take-profit",
      readTime: "10 min read",
      lastUpdated: "1 week ago"
    },
    {
      title: "Trading Fees & Limits",
      description: "Understanding costs and account limits for trading",
      href: "/knowledge-base/trading/fees-limits",
      readTime: "6 min read",
      lastUpdated: "2 weeks ago"
    },
    {
      title: "Common Trading Mistakes",
      description: "Avoid these frequent pitfalls when trading crypto",
      href: "/knowledge-base/trading/common-mistakes",
      readTime: "9 min read",
      lastUpdated: "2 weeks ago"
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base">Knowledge Base</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Trading</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-green-600 border-green-300">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trading
            </Badge>
            <span className="text-xdeel-gray">{articles.length} articles</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Trading Guides
          </h1>
          <p className="text-xl text-xdeel-gray">
            Learn to buy, sell, and trade cryptocurrencies like a pro
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

export default TradingCategory;
