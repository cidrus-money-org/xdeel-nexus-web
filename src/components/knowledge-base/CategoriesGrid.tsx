
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  TrendingUp, 
  CreditCard, 
  Shield, 
  Bitcoin, 
  Code, 
  Scale,
  ArrowRight
} from "lucide-react";

export const CategoriesGrid = () => {
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

  return (
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
  );
};
