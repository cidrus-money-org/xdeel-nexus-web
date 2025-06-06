
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const RecentlyUpdated = () => {
  // Helper function to get relative time
  const getRelativeTime = (daysAgo: number) => {
    if (daysAgo === 0) return "Today";
    if (daysAgo === 1) return "Yesterday";
    if (daysAgo < 7) return `${daysAgo} days ago`;
    if (daysAgo < 14) return "1 week ago";
    if (daysAgo < 30) return `${Math.floor(daysAgo / 7)} weeks ago`;
    return `${Math.floor(daysAgo / 30)} months ago`;
  };

  const recentlyUpdated = [
    {
      title: "Network Types Guide",
      description: "New comprehensive guide covering different blockchain networks",
      lastUpdated: getRelativeTime(0),
      href: "/knowledge-base/network-types"
    },
    {
      title: "Account Setup Guide",
      description: "Updated account creation and verification process",
      lastUpdated: getRelativeTime(1),
      href: "/knowledge-base/account-setup"
    },
    {
      title: "Security Best Practices",
      description: "Enhanced security recommendations and 2FA setup",
      lastUpdated: getRelativeTime(3),
      href: "/resources/security-guide"
    },
    {
      title: "Fee Schedule",
      description: "Updated trading and withdrawal fees",
      lastUpdated: getRelativeTime(5),
      href: "/resources/fee-schedule"
    },
    {
      title: "Supported Countries",
      description: "Current list of supported regions",
      lastUpdated: getRelativeTime(7),
      href: "/resources/supported-countries"
    }
  ];

  return (
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
  );
};
