import { Layout } from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  CreditCard, 
  Users, 
  HelpCircle, 
  BookOpen, 
  Phone, 
  Mail, 
  MessageCircle,
  FileText,
  Zap,
  Lock,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const gettingStartedFaqs = [
    {
      question: "How do I create a Xdeel account?",
      answer: "Creating an account is simple and takes just 2 minutes. Click 'Sign Up', provide your email address, create a secure password, and verify your email. You'll then be able to access all Xdeel features immediately. After email verification, you can begin the KYC process to unlock full trading capabilities."
    },
    {
      question: "What documents do I need for account verification?",
      answer: "For complete account verification, you'll need: (1) A government-issued photo ID (passport, national ID, or driver's license), (2) A recent selfie for facial verification, (3) Proof of address from the last 3 months (utility bill, bank statement, or official government correspondence). All documents should be clear, unedited, and show all four corners."
    },
    {
      question: "How long does the verification process take?",
      answer: "Most accounts are verified within 24-48 hours. Our automated system can provide instant verification for clear, high-quality documents. Complex cases or unclear documentation may take up to 5 business days. You'll receive email updates throughout the process."
    },
    {
      question: "Can I start trading before full verification?",
      answer: "You can explore the platform and set up payment methods, but trading requires complete KYC verification. This is a regulatory requirement that helps us maintain the highest security standards and comply with financial regulations."
    }
  ];

  const tradingFaqs = [
    {
      question: "What cryptocurrencies can I trade on Xdeel?",
      answer: "Xdeel supports over 50 major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), Cardano (ADA), Polkadot (DOT), Chainlink (LINK), and many more. We regularly add new coins based on market demand and regulatory compliance. Check our trading pairs page for the complete list."
    },
    {
      question: "What are your trading fees?",
      answer: "Our transparent fee structure ranges from 0.10% to 0.35% per trade, depending on your account tier and trading volume. Maker fees (adding liquidity) are lower than taker fees (removing liquidity). VIP users enjoy reduced fees. There are no hidden charges - all fees are clearly displayed before you confirm any transaction."
    },
    {
      question: "What are the minimum and maximum trading amounts?",
      answer: "Minimum trade: €10 or equivalent. Maximum daily trading: €10,000 for standard accounts, €50,000 for premium accounts. Monthly limits: €100,000 standard, €500,000 premium. Business accounts have higher limits available upon request and additional verification."
    },
    {
      question: "Do you offer advanced trading features?",
      answer: "Yes! Xdeel offers limit orders, stop-loss orders, market orders, recurring buys (DCA), portfolio rebalancing, and advanced charting tools. Professional traders can access API endpoints for algorithmic trading and real-time market data feeds."
    }
  ];

  const paymentFaqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We support multiple payment options: SEPA bank transfers (1-2 business days, lowest fees), Credit/Debit cards - Visa, Mastercard (instant, higher fees), Apple Pay and Google Pay (instant), Local payment methods (varies by region), Wire transfers for large amounts. Each method has different processing times and fee structures."
    },
    {
      question: "How quickly can I deposit and withdraw funds?",
      answer: "Deposit times: Card payments (instant), SEPA transfers (1-2 business days), Wire transfers (2-5 business days). Withdrawal times: SEPA (1-2 business days), Wire transfers (3-5 business days), Crypto withdrawals (network dependent, typically 15-60 minutes). Weekend deposits may be processed on the next business day."
    },
    {
      question: "Are there any deposit or withdrawal limits?",
      answer: "Daily deposit limits: €10,000 (standard), €50,000 (premium). Monthly limits: €100,000 (standard), €500,000 (premium). Withdrawal limits mirror deposit limits. Cryptocurrency withdrawal limits vary by coin and are displayed in your account. Higher limits available for verified business accounts."
    },
    {
      question: "What currencies do you support?",
      answer: "Fiat currencies: EUR (primary), USD, GBP, CHF, SEK, NOK, DKK, PLN, CZK. Cryptocurrencies: 50+ major coins and tokens. Currency conversion is automatic with transparent exchange rates displayed before confirmation."
    }
  ];

  const securityFaqs = [
    {
      question: "How secure is my money and data on Xdeel?",
      answer: "Xdeel employs bank-grade security: 95% of funds stored in offline cold storage, Multi-factor authentication (2FA) required, End-to-end encryption for all data, Regular third-party security audits, SOC 2 Type II compliance, Insurance coverage for digital assets, Advanced monitoring systems for suspicious activity."
    },
    {
      question: "What happens if I lose access to my 2FA device?",
      answer: "Contact our support team immediately with your account details and backup recovery codes (provided during 2FA setup). Our security team will verify your identity through multiple channels before assisting with account recovery. This process typically takes 24-48 hours for security reasons."
    },
    {
      question: "Is Xdeel regulated?",
      answer: "Yes, Xdeel is fully authorized and regulated by the Polish Financial Supervision Authority (KNF) under license number [License Number]. We comply with EU financial regulations, Anti-Money Laundering (AML) directives, Know Your Customer (KYC) requirements, and maintain strict data protection standards under GDPR."
    },
    {
      question: "How do you protect against fraud?",
      answer: "Our fraud prevention includes: Real-time transaction monitoring, Machine learning algorithms for suspicious activity detection, Device fingerprinting and geolocation tracking, Email and SMS notifications for all account activities, Withdrawal whitelist options, Account freezing capabilities for suspicious activities."
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "24/7 phone support for urgent issues",
      contact: "+48 66 224 8895",
      availability: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed support for complex queries",
      contact: "support@xdeel.com",
      availability: "Response within 4 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help for quick questions",
      contact: "Available on website",
      availability: "9 AM - 11 PM CET"
    }
  ];

  const resources = [
    {
      title: "Trading Guide for Beginners",
      description: "Complete guide to cryptocurrency trading on Xdeel",
      type: "Guide",
      readTime: "15 min read",
      href: "/resources/trading-guide"
    },
    {
      title: "Security Best Practices",
      description: "How to keep your account and funds secure",
      type: "Security",
      readTime: "10 min read",
      href: "/resources/security-guide"
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers",
      type: "Technical",
      readTime: "30 min read",
      href: "/resources/api-docs"
    },
    {
      title: "Fee Schedule",
      description: "Complete breakdown of all fees and charges",
      type: "Pricing",
      readTime: "5 min read",
      href: "/resources/fee-schedule"
    },
    {
      title: "Supported Countries",
      description: "List of countries where Xdeel is available",
      type: "Legal",
      readTime: "3 min read",
      href: "/resources/supported-countries"
    },
    {
      title: "Tax Reporting Guide",
      description: "How to report cryptocurrency transactions for taxes",
      type: "Tax",
      readTime: "20 min read",
      href: "/resources/tax-guide"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
            <BookOpen className="w-4 h-4 mr-2" />
            Knowledge Base
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Xdeel Help Center
          </h1>
          <p className="text-xl text-xdeel-gray max-w-3xl mx-auto mb-8">
            Everything you need to know about using Xdeel. From getting started to advanced trading strategies, 
            security best practices, and regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary/90">
              Contact Support
            </Button>
            <Button variant="outline" size="lg">
              Browse All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-xdeel-dark">500K+</div>
              <div className="text-xdeel-gray">Active Users</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-xdeel-dark">99.9%</div>
              <div className="text-xdeel-gray">Uptime</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-xdeel-dark">24/7</div>
              <div className="text-xdeel-gray">Support</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-xdeel-dark">30+</div>
              <div className="text-xdeel-gray">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="trading">Trading</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-xdeel-primary" />
                    Getting Started with Xdeel
                  </CardTitle>
                  <CardDescription>
                    Everything you need to know to begin your cryptocurrency journey with Xdeel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {gettingStartedFaqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`getting-started-${index}`}
                        className="border border-gray-200 rounded-lg px-6 data-[state=open]:shadow-lg data-[state=open]:border-xdeel-primary/50 transition-all duration-200 bg-white"
                      >
                        <AccordionTrigger className="text-left font-semibold text-xdeel-dark hover:text-xdeel-primary py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-xdeel-gray pb-6 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trading">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-xdeel-primary" />
                    Trading on Xdeel
                  </CardTitle>
                  <CardDescription>
                    Learn about trading features, fees, limits, and advanced tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {tradingFaqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`trading-${index}`}
                        className="border border-gray-200 rounded-lg px-6 data-[state=open]:shadow-lg data-[state=open]:border-xdeel-primary/50 transition-all duration-200 bg-white"
                      >
                        <AccordionTrigger className="text-left font-semibold text-xdeel-dark hover:text-xdeel-primary py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-xdeel-gray pb-6 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-xdeel-primary" />
                    Deposits & Withdrawals
                  </CardTitle>
                  <CardDescription>
                    Payment methods, processing times, limits, and supported currencies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {paymentFaqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`payments-${index}`}
                        className="border border-gray-200 rounded-lg px-6 data-[state=open]:shadow-lg data-[state=open]:border-xdeel-primary/50 transition-all duration-200 bg-white"
                      >
                        <AccordionTrigger className="text-left font-semibold text-xdeel-dark hover:text-xdeel-primary py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-xdeel-gray pb-6 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-xdeel-primary" />
                    Security & Compliance
                  </CardTitle>
                  <CardDescription>
                    Account security, regulatory compliance, and fraud protection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {securityFaqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`security-${index}`}
                        className="border border-gray-200 rounded-lg px-6 data-[state=open]:shadow-lg data-[state=open]:border-xdeel-primary/50 transition-all duration-200 bg-white"
                      >
                        <AccordionTrigger className="text-left font-semibold text-xdeel-dark hover:text-xdeel-primary py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-xdeel-gray pb-6 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-xdeel-dark mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-xdeel-gray">
              Our support team is here to help you 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-xdeel-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-xdeel-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-xdeel-dark mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-xdeel-gray mb-4">
                    {channel.description}
                  </p>
                  <div className="text-xdeel-primary font-medium mb-2">
                    {channel.contact}
                  </div>
                  <div className="text-sm text-xdeel-gray">
                    {channel.availability}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-xdeel-dark mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-xdeel-gray">
              Guides, documentation, and educational content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Link key={index} to={resource.href}>
                <Card className="hover:shadow-lg hover:border-xdeel-primary/50 transition-all duration-200 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                      <FileText className="w-5 h-5 text-xdeel-gray" />
                    </div>
                    <h3 className="text-lg font-semibold text-xdeel-dark mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-xdeel-gray mb-3">
                      {resource.description}
                    </p>
                    <div className="text-sm text-xdeel-gray">
                      {resource.readTime}
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
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Can't find what you're looking for? Our support team is available 24/7 to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-xdeel-primary">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
