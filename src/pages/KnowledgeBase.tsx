
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  BookOpen, 
  Shield, 
  CreditCard, 
  Users, 
  Code, 
  Scale,
  Bitcoin,
  Zap,
  TrendingUp,
  FileText,
  Globe,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const KnowledgeBase = () => {
  const categories = [
    {
      icon: Users,
      title: "Getting Started",
      description: "Account setup, verification, and first steps",
      color: "bg-blue-100 text-blue-600",
      articles: 4,
      href: "#getting-started"
    },
    {
      icon: TrendingUp,
      title: "Trading",
      description: "Learn to buy, sell, and trade cryptocurrencies",
      color: "bg-green-100 text-green-600",
      articles: 6,
      href: "#trading"
    },
    {
      icon: CreditCard,
      title: "Payments",
      description: "Deposits, withdrawals, and payment methods",
      color: "bg-purple-100 text-purple-600",
      articles: 5,
      href: "#payments"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Protect your account and assets",
      color: "bg-red-100 text-red-600",
      articles: 7,
      href: "#security"
    },
    {
      icon: Bitcoin,
      title: "Blockchain & Crypto 101",
      description: "Understanding cryptocurrency fundamentals",
      color: "bg-orange-100 text-orange-600",
      articles: 6,
      href: "#crypto-101"
    },
    {
      icon: Code,
      title: "API & Technical Docs",
      description: "Developer resources and documentation",
      color: "bg-indigo-100 text-indigo-600",
      articles: 3,
      href: "#api"
    },
    {
      icon: Scale,
      title: "Compliance & Legal",
      description: "Regulations, KYC, and legal requirements",
      color: "bg-gray-100 text-gray-600",
      articles: 5,
      href: "#compliance"
    }
  ];

  const featuredArticles = [
    {
      title: "Trading Guide for Beginners",
      description: "Complete step-by-step guide to cryptocurrency trading",
      readTime: "15 min read",
      category: "Trading",
      href: "/resources/trading-guide",
      icon: TrendingUp
    },
    {
      title: "Security Best Practices",
      description: "Essential security measures every user should follow",
      readTime: "10 min read",
      category: "Security",
      href: "/resources/security-guide",
      icon: Shield
    },
    {
      title: "What is Bitcoin (BTC)?",
      description: "Understanding the world's first cryptocurrency",
      readTime: "8 min read",
      category: "Crypto 101",
      href: "/knowledge-base/what-is-bitcoin",
      icon: Bitcoin
    },
    {
      title: "API Documentation",
      description: "Complete technical reference for developers",
      readTime: "30 min read",
      category: "Technical",
      href: "/resources/api-docs",
      icon: Code
    }
  ];

  const recentlyUpdated = [
    {
      title: "Fee Schedule",
      description: "Updated trading and withdrawal fees",
      lastUpdated: "2 days ago",
      href: "/resources/fee-schedule"
    },
    {
      title: "Supported Countries",
      description: "Current list of supported regions",
      lastUpdated: "1 week ago",
      href: "/resources/supported-countries"
    },
    {
      title: "Tax Reporting Guide",
      description: "2024 cryptocurrency tax guidelines",
      lastUpdated: "2 weeks ago",
      href: "/resources/tax-guide"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
            <BookOpen className="w-4 h-4 mr-2" />
            Knowledge Base
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-xdeel-dark mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-xdeel-gray max-w-3xl mx-auto mb-8">
            Find answers, guides, and resources to help you get the most out of Xdeel. 
            From beginner tutorials to advanced trading strategies.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-xdeel-gray" />
            <Input 
              placeholder="Search guides, topics, and help articles..."
              className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-xdeel-primary rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-xdeel-dark mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-xdeel-gray">
              Find the information you need organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl hover:border-xdeel-primary/50 transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-center">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-xdeel-gray">{category.articles} articles</span>
                    <ArrowRight className="w-4 h-4 text-xdeel-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-xdeel-dark mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-xdeel-gray">
              Most popular and essential guides to get you started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article, index) => (
              <Link key={index} to={article.href}>
                <Card className="hover:shadow-xl hover:border-xdeel-primary/50 transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-xdeel-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <article.icon className="w-6 h-6 text-xdeel-primary" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="text-xs mb-2">
                          {article.category}
                        </Badge>
                        <h3 className="text-xl font-semibold text-xdeel-dark mb-2">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xdeel-gray mb-4">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-xdeel-gray">{article.readTime}</span>
                      <ArrowRight className="w-4 h-4 text-xdeel-primary" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Updated */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-xdeel-dark mb-2">
                Recently Updated
              </h2>
              <p className="text-xl text-xdeel-gray">
                Stay up to date with the latest changes
              </p>
            </div>
            <Button variant="outline">
              View All Updates
            </Button>
          </div>

          <div className="space-y-4">
            {recentlyUpdated.map((article, index) => (
              <Link key={index} to={article.href}>
                <Card className="hover:shadow-lg hover:border-xdeel-primary/50 transition-all duration-200 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 text-xdeel-gray mr-3" />
                        <div>
                          <h3 className="font-semibold text-xdeel-dark">{article.title}</h3>
                          <p className="text-xdeel-gray text-sm">{article.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-xdeel-gray">{article.lastUpdated}</span>
                        <ArrowRight className="w-4 h-4 text-xdeel-primary mt-1 ml-auto" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-xdeel-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Can't find what you're looking for? Our support team is available 24/7 to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-xdeel-primary">
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KnowledgeBase;
