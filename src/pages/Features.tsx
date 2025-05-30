
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, CreditCard, Users, Lock, CheckCircle, Repeat, Clock, Euro, Building, Phone, Mail, Globe, Award, UserCheck, TrendingUp } from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: "Hassle-Free and Rapid Setup",
      description: "Get started in minutes with our streamlined onboarding process. No complex procedures or lengthy waiting times.",
      details: [
        "Complete verification in under 10 minutes",
        "Automated document processing",
        "Real-time status updates",
        "No hidden requirements"
      ],
      badge: "Quick"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Methods",
      description: "Support for multiple payment options including bank transfers, cards, and various local payment methods.",
      details: [
        "SEPA instant transfers",
        "SWIFT international payments",
        "Major credit/debit cards",
        "Local European payment methods"
      ],
      badge: "Convenient"
    },
    {
      icon: Clock,
      title: "Instant Cryptocurrency Purchases",
      description: "Buy and sell cryptocurrencies instantly with real-time market prices and immediate transaction processing.",
      details: [
        "Real-time market pricing",
        "Immediate order execution",
        "24/7 trading availability",
        "Competitive spreads"
      ],
      badge: "Instant"
    },
    {
      icon: Repeat,
      title: "Convert and Swap",
      description: "Easily convert between different cryptocurrencies or swap to fiat currencies with competitive rates.",
      details: [
        "Cross-crypto conversions",
        "Fiat to crypto swaps",
        "Best market rates",
        "No conversion delays"
      ],
      badge: "Flexible"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support via phone and email with dedicated European team.",
      details: [
        "Phone: +48 66 224 8895",
        "Email: support@xdeel.com",
        "Multi-language support",
        "Average response: <2 hours"
      ],
      badge: "Always Available"
    },
    {
      icon: Shield,
      title: "KNF Authorization",
      description: "Fully authorized by Polish Financial Supervision Authority, ensuring compliance and user protection.",
      details: [
        "EU regulatory compliance",
        "Consumer protection measures",
        "Regular audits and reporting",
        "Legal framework adherence"
      ],
      badge: "Regulated"
    },
    {
      icon: Lock,
      title: "Advanced Security",
      description: "Bank-grade security measures including multi-factor authentication and encrypted transactions.",
      details: [
        "Multi-signature wallets",
        "End-to-end encryption",
        "2FA authentication",
        "Cold storage protection"
      ],
      badge: "Secure"
    },
    {
      icon: CheckCircle,
      title: "Transparent Fees",
      description: "Clear, competitive pricing with no hidden costs. Know exactly what you pay before every transaction.",
      details: [
        "No hidden fees",
        "Transparent pricing structure",
        "Competitive market rates",
        "Fee calculator available"
      ],
      badge: "Honest"
    }
  ];

  const tradingFeatures = [
    {
      icon: TrendingUp,
      title: "Advanced Trading Tools",
      description: "Professional-grade tools for experienced traders"
    },
    {
      icon: Euro,
      title: "Multiple Currencies",
      description: "Support for EUR, USD, PLN and major cryptocurrencies"
    },
    {
      icon: UserCheck,
      title: "KYC Compliance",
      description: "Streamlined identity verification process"
    },
    {
      icon: Globe,
      title: "European Focus",
      description: "Optimized for European markets and regulations"
    }
  ];

  const securityMeasures = [
    {
      icon: Shield,
      title: "Multi-Layer Security",
      description: "Advanced protection protocols"
    },
    {
      icon: Lock,
      title: "Encrypted Storage",
      description: "Military-grade encryption standards"
    },
    {
      icon: Award,
      title: "Compliance Standards",
      description: "Meeting highest regulatory requirements"
    },
    {
      icon: Building,
      title: "Institutional Grade",
      description: "Enterprise-level security infrastructure"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F4F0FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-xdeel-primary border-xdeel-primary/30 bg-white px-6 py-3 text-base rounded-xl">
              Complete Feature Suite
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-xdeel-dark mb-6">
              Everything You Need for
              <span className="text-xdeel-primary block">Crypto Trading</span>
            </h1>
            <p className="text-xl text-xdeel-gray max-w-4xl mx-auto leading-relaxed mb-8">
              From regulatory compliance to advanced trading tools, we've built every feature 
              with your security, convenience, and success in mind. Experience the future of 
              cryptocurrency trading with European regulatory backing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white px-8 py-4 text-lg rounded-xl">
                Start Trading Now
              </Button>
              <Button variant="outline" className="border-xdeel-primary text-xdeel-primary hover:bg-xdeel-primary hover:text-white px-8 py-4 text-lg rounded-xl">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Core Features
            </h2>
            <p className="text-xl text-xdeel-gray max-w-3xl mx-auto">
              Comprehensive tools and services designed for modern crypto trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-gray-200 hover:border-xdeel-primary/50 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-xdeel-purple rounded-xl flex items-center justify-center group-hover:bg-xdeel-primary transition-colors duration-300 flex-shrink-0">
                      <feature.icon className="w-7 h-7 text-xdeel-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-xdeel-dark">
                          {feature.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-xdeel-gray border-gray-200 rounded-lg">
                          {feature.badge}
                        </Badge>
                      </div>
                      <p className="text-xdeel-gray leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm text-xdeel-gray">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Advanced Trading Capabilities
            </h2>
            <p className="text-xl text-xdeel-gray max-w-3xl mx-auto">
              Professional tools for serious cryptocurrency traders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradingFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white border-gray-200 hover:border-xdeel-primary/50 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-xdeel-purple rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-xdeel-primary transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-xdeel-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-xdeel-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xdeel-gray text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-xdeel-gray max-w-3xl mx-auto">
              Your security is our top priority with enterprise-grade protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {securityMeasures.map((measure, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white border-gray-200 hover:border-xdeel-primary/50 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-xdeel-purple rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-xdeel-primary transition-colors duration-300">
                    <measure.icon className="w-6 h-6 text-xdeel-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-xdeel-dark mb-2">
                    {measure.title}
                  </h3>
                  <p className="text-xdeel-gray text-sm leading-relaxed">
                    {measure.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Regulatory Info */}
          <Card className="bg-gradient-to-r from-xdeel-purple to-white border-xdeel-primary/20 rounded-2xl">
            <CardContent className="p-8 text-center">
              <Shield className="w-16 h-16 text-xdeel-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-xdeel-dark mb-4">
                Fully Regulated & Compliant
              </h3>
              <p className="text-xdeel-gray text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                Licensed and regulated by the Polish Financial Supervision Authority (KNF), 
                ensuring full compliance with European financial regulations and providing 
                maximum protection for your investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center text-xdeel-gray">
                  <Phone className="w-5 h-5 mr-2" />
                  +48 66 224 8895
                </div>
                <div className="flex items-center text-xdeel-gray">
                  <Mail className="w-5 h-5 mr-2" />
                  support@xdeel.com
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-xdeel-primary to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience All Features?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join thousands of users who trust Xdeel for their cryptocurrency trading needs.
            Start your journey with full regulatory protection and professional-grade tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-xdeel-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold">
              Get Started Today
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-xdeel-primary px-8 py-4 text-lg rounded-xl">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
