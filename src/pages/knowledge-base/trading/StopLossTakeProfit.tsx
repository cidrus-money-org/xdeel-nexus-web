
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { ArrowLeft, TrendingUp, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";

const StopLossTakeProfit = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base">Knowledge Base</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base/trading">Trading</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Stop Loss & Take Profit</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-green-600 border-green-300">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trading
            </Badge>
            <span className="text-xdeel-gray">Last updated: 4 days ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Stop Loss & Take Profit Orders
          </h1>
          <p className="text-xl text-xdeel-gray">
            Learn how to manage risk and secure profits with automated trading orders
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-red-500" />
              What is a Stop Loss?
            </h2>
            
            <p className="text-xdeel-gray mb-6">
              A stop loss is an order that automatically sells your cryptocurrency when it reaches a specific price, 
              helping you limit potential losses. It's a crucial risk management tool for all traders.
            </p>

            <Card className="border-red-200 bg-red-50 mb-8">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Stop Loss Example</h3>
                <p className="text-sm text-red-800">
                  You buy Bitcoin at $50,000 and set a stop loss at $45,000. If Bitcoin drops to $45,000, 
                  your position will automatically sell, limiting your loss to $5,000.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-green-500" />
              What is Take Profit?
            </h2>
            
            <p className="text-xdeel-gray mb-6">
              A take profit order automatically sells your cryptocurrency when it reaches a target price, 
              securing your gains before the market potentially reverses.
            </p>

            <Card className="border-green-200 bg-green-50 mb-8">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Take Profit Example</h3>
                <p className="text-sm text-green-800">
                  You buy Ethereum at $3,000 and set a take profit at $3,500. If Ethereum rises to $3,500, 
                  your position will automatically sell, securing a $500 profit per ETH.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">How to Set Stop Loss & Take Profit</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Place Your Initial Order</h4>
                  <p className="text-xdeel-gray">Buy or sell your chosen cryptocurrency</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Navigate to Advanced Orders</h4>
                  <p className="text-xdeel-gray">Find the stop loss/take profit section in your trading interface</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Set Your Levels</h4>
                  <p className="text-xdeel-gray">Choose your stop loss (below current price) and take profit (above current price) levels</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Confirm Orders</h4>
                  <p className="text-xdeel-gray">Review and confirm your stop loss and take profit orders</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-red-600">Stop Loss Tips</h3>
                  <ul className="text-sm text-xdeel-gray space-y-1">
                    <li>• Set at 5-10% below entry price</li>
                    <li>• Don't set too tight to avoid false triggers</li>
                    <li>• Adjust as price moves in your favor</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-green-600">Take Profit Tips</h3>
                  <ul className="text-sm text-xdeel-gray space-y-1">
                    <li>• Aim for 2:1 or 3:1 risk-reward ratio</li>
                    <li>• Consider taking partial profits</li>
                    <li>• Use technical analysis for target levels</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Remember</h3>
                <p className="text-blue-800 text-sm">
                  Stop loss and take profit orders are essential tools for disciplined trading. 
                  They help remove emotion from your trading decisions and ensure consistent risk management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StopLossTakeProfit;
