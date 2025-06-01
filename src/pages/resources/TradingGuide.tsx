
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Calendar, Share2, TrendingUp, DollarSign, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const TradingGuide = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-green-600 border-green-300">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trading
            </Badge>
            <div className="flex items-center text-xdeel-gray space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                15 min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: Dec 1, 2024
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Trading Guide for Beginners
          </h1>
          <p className="text-xl text-xdeel-gray">
            Complete step-by-step guide to cryptocurrency trading on Xdeel
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-4">What You'll Learn</h2>
                <ul className="space-y-2 text-xdeel-gray">
                  <li>• How to create and verify your Xdeel account</li>
                  <li>• Understanding different order types</li>
                  <li>• Reading charts and market data</li>
                  <li>• Risk management strategies</li>
                  <li>• Security best practices while trading</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Getting Started</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Create Your Account</h4>
                      <p className="text-xdeel-gray">
                        Sign up for a Xdeel account and complete the KYC verification process. This ensures 
                        compliance with regulations and protects your account.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Secure Your Account</h4>
                      <p className="text-xdeel-gray">
                        Enable two-factor authentication (2FA) and use a strong, unique password. 
                        Consider using a hardware security key for maximum protection.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Fund Your Account</h4>
                      <p className="text-xdeel-gray">
                        Deposit funds using bank transfer, credit card, or other supported payment methods. 
                        Start with a small amount while you learn.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Understanding Order Types</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <DollarSign className="w-6 h-6 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-blue-800">Market Orders</h4>
                    </div>
                    <p className="text-blue-700 text-sm">
                      Execute immediately at the current market price. Best for quick trades when you want 
                      to buy or sell right away.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <BarChart3 className="w-6 h-6 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-800">Limit Orders</h4>
                    </div>
                    <p className="text-green-700 text-sm">
                      Set a specific price at which you want to buy or sell. The order will only execute 
                      when the market reaches your specified price.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Risk Management</h2>
                
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 mb-6">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-red-600 mr-2" />
                    <h4 className="font-semibold text-red-800">Important Risk Warning</h4>
                  </div>
                  <p className="text-red-700">
                    Cryptocurrency trading involves significant risk. Never invest more than you can afford to lose, 
                    and always do your own research before making trading decisions.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Start Small</h4>
                    <p className="text-xdeel-gray">
                      Begin with small amounts while you learn. Consider practicing with paper trading first.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Diversify Your Portfolio</h4>
                    <p className="text-xdeel-gray">
                      Don't put all your funds into a single cryptocurrency. Spread your risk across different assets.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-2">Use Stop-Loss Orders</h4>
                    <p className="text-xdeel-gray">
                      Set stop-loss orders to automatically sell if prices drop below a certain level.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Trading?</h3>
              <p className="text-white/90 mb-6">
                Put your knowledge into practice with our user-friendly trading platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Start Trading Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  View Security Guide
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Share and Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
            <div className="text-sm text-xdeel-gray">
              Was this article helpful? <Button variant="link" className="p-0 text-xdeel-primary">Let us know</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TradingGuide;
