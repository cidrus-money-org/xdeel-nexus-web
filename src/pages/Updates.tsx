
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Updates = () => {
  const updates = [
    {
      title: "Network Types Guide",
      description: "New comprehensive guide covering PoW, PoS, DPoS, and Layer 2 solutions",
      category: "Knowledge Base",
      date: "2024-12-01",
      daysAgo: 0,
      href: "/knowledge-base/network-types"
    },
    {
      title: "Fee Schedule",
      description: "Updated trading and withdrawal fees with new competitive rates",
      category: "Trading",
      date: "2024-11-29",
      daysAgo: 2,
      href: "/resources/fee-schedule"
    },
    {
      title: "Security Best Practices",
      description: "Enhanced security guide with updated 2FA recommendations",
      category: "Security",
      date: "2024-11-28",
      daysAgo: 3,
      href: "/resources/security-guide"
    },
    {
      title: "Supported Countries",
      description: "Current list of supported regions with new additions",
      category: "Compliance",
      date: "2024-11-24",
      daysAgo: 7,
      href: "/resources/supported-countries"
    },
    {
      title: "Gas Fees Explained",
      description: "New article explaining how gas fees work on different networks",
      category: "Knowledge Base",
      date: "2024-11-20",
      daysAgo: 11,
      href: "/knowledge-base/gas-fees"
    },
    {
      title: "Tax Reporting Guide",
      description: "2024 cryptocurrency tax guidelines and reporting requirements",
      category: "Compliance",
      date: "2024-11-17",
      daysAgo: 14,
      href: "/resources/tax-guide"
    },
    {
      title: "What is Bitcoin?",
      description: "Comprehensive guide to understanding Bitcoin and its technology",
      category: "Knowledge Base",
      date: "2024-11-15",
      daysAgo: 16,
      href: "/knowledge-base/what-is-bitcoin"
    },
    {
      title: "Trading Guide for Beginners",
      description: "Complete step-by-step guide updated with new features",
      category: "Trading",
      date: "2024-11-10",
      daysAgo: 21,
      href: "/resources/trading-guide"
    }
  ];

  const formatTimeAgo = (daysAgo: number) => {
    if (daysAgo === 0) return "Today";
    if (daysAgo === 1) return "1 day ago";
    if (daysAgo < 7) return `${daysAgo} days ago`;
    if (daysAgo < 14) return "1 week ago";
    if (daysAgo < 21) return "2 weeks ago";
    if (daysAgo < 30) return "3 weeks ago";
    return "1 month ago";
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Knowledge Base":
        return "bg-blue-100 text-blue-600 border-blue-300";
      case "Trading":
        return "bg-green-100 text-green-600 border-green-300";
      case "Security":
        return "bg-red-100 text-red-600 border-red-300";
      case "Compliance":
        return "bg-gray-100 text-gray-600 border-gray-300";
      default:
        return "bg-gray-100 text-gray-600 border-gray-300";
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Recent Updates
          </h1>
          <p className="text-xl text-xdeel-gray">
            Stay up to date with the latest changes to our guides, policies, and features
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {updates.map((update, index) => (
              <Link key={index} to={update.href}>
                <Card className="hover:shadow-lg hover:border-xdeel-primary/50 transition-all duration-200 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start flex-1">
                        <FileText className="w-5 h-5 text-xdeel-gray mr-4 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <Badge variant="outline" className={`mr-3 text-xs ${getCategoryColor(update.category)}`}>
                              {update.category}
                            </Badge>
                            <div className="flex items-center text-sm text-xdeel-gray">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatTimeAgo(update.daysAgo)}
                            </div>
                          </div>
                          <h3 className="font-semibold text-xdeel-dark mb-2">{update.title}</h3>
                          <p className="text-xdeel-gray text-sm">{update.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xdeel-gray mb-4">
              Want to be notified of updates? Subscribe to our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-xdeel-primary"
              />
              <button className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white px-6 py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Updates;
