
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, BookOpen, Clock, TrendingUp, Shield, CreditCard, Target } from "lucide-react";
import { Link } from "react-router-dom";

const TradingGuide = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/faq" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to FAQ
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-xdeel-primary border-xdeel-primary/30">
              <BookOpen className="w-4 h-4 mr-2" />
              Guide
            </Badge>
            <div className="flex items-center text-xdeel-gray">
              <Clock className="w-4 h-4 mr-2" />
              15 min read
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Trading Guide for Beginners
          </h1>
          <p className="text-xl text-xdeel-gray">
            A comprehensive step-by-step guide to help you start your cryptocurrency trading journey on Xdeel
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* What is Cryptocurrency */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-xdeel-primary mr-3" />
                  <h2 className="text-2xl font-bold text-xdeel-dark">What is Cryptocurrency and How Trading Works</h2>
                </div>
                <p className="text-xdeel-gray mb-4">
                  Cryptocurrency is a digital form of money that uses cryptography for security. Unlike traditional currencies, 
                  cryptocurrencies operate on decentralized networks called blockchains.
                </p>
                <p className="text-xdeel-gray mb-4">
                  Trading cryptocurrency involves buying and selling digital assets to profit from price movements. On Xdeel, 
                  you can trade over 50 different cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), and many others.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-xdeel-dark mb-2">Key Benefits of Trading on Xdeel:</h4>
                  <ul className="text-xdeel-gray space-y-1">
                    <li>• KNF authorized and regulated platform</li>
                    <li>• Real-time market prices</li>
                    <li>• Advanced security measures</li>
                    <li>• 24/7 customer support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Account Creation */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-xdeel-primary mr-3" />
                  <h2 className="text-2xl font-bold text-xdeel-dark">Creating and Verifying Your Account</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Step 1: Sign Up</h4>
                    <p className="text-xdeel-gray">Visit xdeel.com and click "Sign Up". Provide your email address and create a strong password.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Step 2: Email Verification</h4>
                    <p className="text-xdeel-gray">Check your email and click the verification link to activate your account.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Step 3: KYC Verification</h4>
                    <p className="text-xdeel-gray">Complete the Know Your Customer (KYC) process by providing:</p>
                    <ul className="text-xdeel-gray mt-2 ml-4">
                      <li>• Government-issued photo ID</li>
                      <li>• Proof of address (utility bill or bank statement)</li>
                      <li>• Selfie for identity verification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depositing Funds */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-6 h-6 text-xdeel-primary mr-3" />
                  <h2 className="text-2xl font-bold text-xdeel-dark">How to Deposit Funds</h2>
                </div>
                <p className="text-xdeel-gray mb-4">
                  Once your account is verified, you can deposit funds using various payment methods:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-xdeel-dark mb-2">Bank Transfer (SEPA)</h4>
                    <p className="text-sm text-xdeel-gray">• Lowest fees</p>
                    <p className="text-sm text-xdeel-gray">• 1-2 business days</p>
                    <p className="text-sm text-xdeel-gray">• Best for large amounts</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-xdeel-dark mb-2">Credit/Debit Card</h4>
                    <p className="text-sm text-xdeel-gray">• Instant processing</p>
                    <p className="text-sm text-xdeel-gray">• Higher fees</p>
                    <p className="text-sm text-xdeel-gray">• Great for quick trades</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Types */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-xdeel-primary mr-3" />
                  <h2 className="text-2xl font-bold text-xdeel-dark">Market vs. Limit Orders Explained</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Market Orders</h4>
                    <p className="text-xdeel-gray mb-2">
                      Execute immediately at the current market price. Best for when you want to buy or sell quickly.
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm text-green-700">✓ Use when: You want immediate execution and current price is acceptable</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Limit Orders</h4>
                    <p className="text-xdeel-gray mb-2">
                      Set a specific price at which you want to buy or sell. The order only executes when the market reaches your price.
                    </p>
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                      <p className="text-sm text-blue-700">✓ Use when: You want to control the exact price and are willing to wait</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* First Trade */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Placing Your First Trade</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-xdeel-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark">Choose Your Cryptocurrency</h4>
                      <p className="text-xdeel-gray">Start with popular coins like Bitcoin or Ethereum for your first trade.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-xdeel-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark">Select Order Type</h4>
                      <p className="text-xdeel-gray">Choose between market order (immediate) or limit order (specific price).</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-xdeel-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark">Enter Amount</h4>
                      <p className="text-xdeel-gray">Specify how much you want to buy (minimum €10).</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-xdeel-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark">Review and Confirm</h4>
                      <p className="text-xdeel-gray">Check all details including fees before confirming your trade.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Management */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Managing Your Portfolio and Taking Profits</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Portfolio Diversification</h4>
                    <p className="text-xdeel-gray">Don't put all your money in one cryptocurrency. Spread your investment across different coins to reduce risk.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Setting Profit Targets</h4>
                    <p className="text-xdeel-gray">Decide in advance when you'll take profits. Many traders use the strategy of selling 25%, 50%, or 75% at predetermined price levels.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Stop-Loss Orders</h4>
                    <p className="text-xdeel-gray">Use stop-loss orders to automatically sell if prices drop below a certain level, limiting your potential losses.</p>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Important Risk Warning</h4>
                  <p className="text-yellow-700 text-sm">
                    Cryptocurrency trading involves significant risk. Never invest more than you can afford to lose. 
                    Past performance does not guarantee future results.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Continued Learning */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Tips for Continued Learning</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Educational Resources</h4>
                    <ul className="text-xdeel-gray space-y-1">
                      <li>• Read our Security Best Practices guide</li>
                      <li>• Follow crypto news and market analysis</li>
                      <li>• Join our community forums</li>
                      <li>• Attend Xdeel webinars</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Start Small</h4>
                    <ul className="text-xdeel-gray space-y-1">
                      <li>• Begin with small amounts</li>
                      <li>• Practice with limit orders</li>
                      <li>• Keep detailed records</li>
                      <li>• Learn from each trade</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-xdeel-dark mb-4">Ready to Start Trading?</h3>
              <p className="text-xdeel-gray mb-6">
                Join thousands of users who trust Xdeel for secure cryptocurrency trading.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary/90">
                  Create Account
                </Button>
                <Button variant="outline" size="lg">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TradingGuide;
