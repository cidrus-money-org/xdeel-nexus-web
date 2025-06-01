
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
import { ArrowLeft, Bitcoin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Crypto101Category = () => {
  const articles = [
    {
      title: "What is Bitcoin (BTC)?",
      description: "Comprehensive guide to understanding Bitcoin and its technology",
      href: "/knowledge-base/what-is-bitcoin",
      readTime: "15 min read",
      lastUpdated: "2 weeks ago"
    },
    {
      title: "What is Ethereum (ETH)?",
      description: "Learn about Ethereum, smart contracts, and decentralized applications",
      href: "/knowledge-base/what-is-ethereum",
      readTime: "12 min read",
      lastUpdated: "2 weeks ago"
    },
    {
      title: "How Blockchain Works",
      description: "Understanding the technology behind cryptocurrencies",
      href: "/knowledge-base/how-blockchain-works",
      readTime: "18 min read",
      lastUpdated: "3 weeks ago"
    },
    {
      title: "What Are Private and Public Keys?",
      description: "Understanding cryptographic keys and how they secure your crypto",
      href: "/knowledge-base/crypto-101/keys",
      readTime: "10 min read",
      lastUpdated: "3 weeks ago"
    },
    {
      title: "Understanding Gas Fees",
      description: "Learn how transaction fees work on different blockchain networks",
      href: "/knowledge-base/gas-fees",
      readTime: "8 min read",
      lastUpdated: "1 month ago"
    },
    {
      title: "Stablecoins vs Traditional Crypto",
      description: "Differences between stablecoins and volatile cryptocurrencies",
      href: "/knowledge-base/crypto-101/stablecoins",
      readTime: "9 min read",
      lastUpdated: "1 month ago"
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base">Knowledge Base</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Blockchain & Crypto 101</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-orange-600 border-orange-300">
              <Bitcoin className="w-4 h-4 mr-2" />
              Blockchain & Crypto 101
            </Badge>
            <span className="text-xdeel-gray">{articles.length} articles</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Blockchain & Crypto 101
          </h1>
          <p className="text-xl text-xdeel-gray">
            Understanding cryptocurrency fundamentals and blockchain technology
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

export default Crypto101Category;
