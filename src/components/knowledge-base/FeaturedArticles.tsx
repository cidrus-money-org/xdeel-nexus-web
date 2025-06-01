
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Bitcoin, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedArticles = () => {
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
      title: "Different Types of Networks",
      description: "Understanding PoW, PoS, Layer 2s and more",
      readTime: "14 min read",
      category: "Crypto 101",
      href: "/knowledge-base/network-types",
      icon: Zap
    }
  ];

  return (
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
  );
};
