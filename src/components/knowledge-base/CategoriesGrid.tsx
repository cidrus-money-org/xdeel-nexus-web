
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
import { Link } from "react-router-dom";

export const CategoriesGrid = () => {
  const categories = [
    {
      icon: Users,
      title: "Getting Started",
      description: "Account setup, verification, and first steps",
      color: "bg-blue-100 text-blue-600",
      articles: 4,
      href: "/knowledge-base/getting-started",
      articleList: [
        { title: "Account Setup", href: "/knowledge-base/account-setup" },
        { title: "First Steps", href: "/knowledge-base/first-steps" },
        { title: "Identity Verification", href: "/knowledge-base/verification-guide" },
        { title: "Platform Tour", href: "/knowledge-base/platform-tour" }
      ]
    },
    {
      icon: TrendingUp,
      title: "Trading",
      description: "Learn to buy, sell, and trade cryptocurrencies",
      color: "bg-green-100 text-green-600",
      articles: 6,
      href: "/knowledge-base/trading",
      articleList: [
        { title: "Trading Guide for Beginners", href: "/resources/trading-guide" },
        { title: "Market Orders vs Limit Orders", href: "/knowledge-base/trading/order-types" },
        { title: "Reading Charts", href: "/knowledge-base/trading/reading-charts" },
        { title: "Stop Loss & Take Profit", href: "/knowledge-base/trading/stop-loss-take-profit" },
        { title: "Trading Fees & Limits", href: "/knowledge-base/trading/fees-limits" },
        { title: "Common Trading Mistakes", href: "/knowledge-base/trading/common-mistakes" }
      ]
    },
    {
      icon: CreditCard,
      title: "Payments",
      description: "Deposits, withdrawals, and payment methods",
      color: "bg-purple-100 text-purple-600",
      articles: 5,
      href: "/knowledge-base/payments",
      articleList: [
        { title: "How to Deposit Funds", href: "/knowledge-base/payments/deposit-funds" },
        { title: "Withdrawal Process", href: "/knowledge-base/payments/withdraw-funds" },
        { title: "Payment Methods", href: "/knowledge-base/payments/payment-methods" },
        { title: "SEPA vs SWIFT Transfers", href: "/knowledge-base/payments/sepa-swift" },
        { title: "Failed Payment Troubleshooting", href: "/knowledge-base/payments/troubleshooting" }
      ]
    },
    {
      icon: Shield,
      title: "Security",
      description: "Protect your account and assets",
      color: "bg-red-100 text-red-600",
      articles: 7,
      href: "/knowledge-base/security",
      articleList: [
        { title: "Security Best Practices", href: "/resources/security-guide" },
        { title: "How to Enable 2FA", href: "/knowledge-base/security/enable-2fa" },
        { title: "Phishing Awareness", href: "/knowledge-base/security/phishing-awareness" },
        { title: "Protecting Your Wallet", href: "/knowledge-base/security/wallet-protection" },
        { title: "Recognizing Fake Support", href: "/knowledge-base/security/fake-support" },
        { title: "Reporting Suspicious Activity", href: "/knowledge-base/security/report-suspicious" },
        { title: "Secure Password Tips", href: "/knowledge-base/security/password-tips" }
      ]
    },
    {
      icon: Bitcoin,
      title: "Blockchain & Crypto 101",
      description: "Understanding cryptocurrency fundamentals",
      color: "bg-orange-100 text-orange-600",
      articles: 6,
      href: "/knowledge-base/crypto-101",
      articleList: [
        { title: "What is Bitcoin (BTC)?", href: "/knowledge-base/what-is-bitcoin" },
        { title: "What is Ethereum (ETH)?", href: "/knowledge-base/what-is-ethereum" },
        { title: "How Blockchain Works", href: "/knowledge-base/how-blockchain-works" },
        { title: "What Are Private and Public Keys?", href: "/knowledge-base/crypto-101/keys" },
        { title: "Understanding Gas Fees", href: "/knowledge-base/gas-fees" },
        { title: "Stablecoins vs Traditional Crypto", href: "/knowledge-base/crypto-101/stablecoins" }
      ]
    },
    {
      icon: Code,
      title: "API & Technical Docs",
      description: "Developer resources and documentation",
      color: "bg-indigo-100 text-indigo-600",
      articles: 3,
      href: "/knowledge-base/api-docs",
      articleList: [
        { title: "API Documentation", href: "/resources/api-docs" },
        { title: "API Authentication", href: "/knowledge-base/api-docs/authentication" },
        { title: "Webhook Integration", href: "/knowledge-base/api-docs/webhooks" }
      ]
    },
    {
      icon: Scale,
      title: "Compliance & Legal",
      description: "Regulations, KYC, and legal requirements",
      color: "bg-gray-100 text-gray-600",
      articles: 5,
      href: "/knowledge-base/compliance",
      articleList: [
        { title: "KYC Overview", href: "/kyc-overview" },
        { title: "AML Compliance", href: "/knowledge-base/compliance/aml-compliance" },
        { title: "Restricted Jurisdictions", href: "/knowledge-base/compliance/restricted-jurisdictions" },
        { title: "Data Privacy & User Rights", href: "/knowledge-base/compliance/privacy-rights" },
        { title: "Terms of Service Explained", href: "/knowledge-base/compliance/terms-explained" }
      ]
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
            <Link key={index} to={category.href}>
              <Card className="hover:shadow-xl hover:border-xdeel-primary/50 transition-all duration-300 cursor-pointer group h-full">
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
                  <div className="mb-4">
                    <div className="space-y-2">
                      {category.articleList.slice(0, 3).map((article, articleIndex) => (
                        <div 
                          key={articleIndex}
                          className="block text-sm text-xdeel-gray hover:text-xdeel-primary transition-colors text-left"
                        >
                          • {article.title}
                        </div>
                      ))}
                      {category.articles > 3 && (
                        <p className="text-xs text-xdeel-gray">+ {category.articles - 3} more articles</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-xdeel-gray">{category.articles} articles</span>
                    <ArrowRight className="w-4 h-4 text-xdeel-primary group-hover:translate-x-1 transition-transform" />
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
