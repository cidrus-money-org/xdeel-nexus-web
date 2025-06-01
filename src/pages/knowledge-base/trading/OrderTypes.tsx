
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { ArrowLeft, Clock, Calendar, Share2, TrendingUp, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const OrderTypes = () => {
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
              <BreadcrumbPage>Market Orders vs Limit Orders</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
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
                8 min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: Nov 26, 2024
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Market Orders vs Limit Orders
          </h1>
          <p className="text-xl text-xdeel-gray">
            Understanding different order types and when to use them for optimal trading
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Order Types Overview</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6 bg-blue-50 border-blue-200">
                    <div className="flex items-center mb-4">
                      <Zap className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-xdeel-dark">Market Orders</h3>
                    </div>
                    <p className="text-xdeel-gray mb-4">
                      Execute immediately at the current market price. Fast but price not guaranteed.
                    </p>
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Best for:</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Quick trades when speed matters</li>
                        <li>• High liquidity assets</li>
                        <li>• Emergency exits</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-6 bg-green-50 border-green-200">
                    <div className="flex items-center mb-4">
                      <Target className="w-8 h-8 text-green-600 mr-3" />
                      <h3 className="text-xl font-semibold text-xdeel-dark">Limit Orders</h3>
                    </div>
                    <p className="text-xdeel-gray mb-4">
                      Execute only at your specified price or better. Price guaranteed but execution not.
                    </p>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Best for:</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Price-sensitive trading</li>
                        <li>• Planned entries/exits</li>
                        <li>• Low liquidity markets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">How Each Order Type Works</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-4">Market Orders</h3>
                    <p className="text-xdeel-gray mb-4">
                      When you place a market order, you're asking to buy or sell immediately at whatever the current market price is. 
                      This means your order will execute quickly, but you might pay a slightly higher price (for buys) or receive 
                      a slightly lower price (for sells) than expected.
                    </p>
                    
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Example:</h4>
                      <p className="text-yellow-700 text-sm">
                        Bitcoin is trading at $45,000. You place a market buy order for 1 BTC. Your order executes 
                        immediately, but due to market movement, you might pay $45,050 instead of $45,000.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-4">Limit Orders</h3>
                    <p className="text-xdeel-gray mb-4">
                      With limit orders, you specify the exact price at which you want to buy or sell. Your order will only 
                      execute if the market reaches your specified price or better. This gives you price control but 
                      doesn't guarantee execution.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Example:</h4>
                      <p className="text-blue-700 text-sm">
                        Bitcoin is trading at $45,000. You place a limit buy order for 1 BTC at $44,500. Your order 
                        will only execute if Bitcoin's price drops to $44,500 or lower.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Trading?</h3>
              <p className="text-white/90 mb-6">
                Now that you understand order types, practice with small amounts to get comfortable with each type.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Start Trading
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Trading Guide
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

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

export default OrderTypes;
