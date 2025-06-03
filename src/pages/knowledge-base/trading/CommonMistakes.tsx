
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
import { ArrowLeft, TrendingUp, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const CommonMistakes = () => {
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
              <BreadcrumbPage>Common Trading Mistakes</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base/trading" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Trading
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-green-600 border-green-300">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trading
            </Badge>
            <span className="text-xdeel-gray">Last updated: 2 weeks ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Common Trading Mistakes
          </h1>
          <p className="text-xl text-xdeel-gray">
            Avoid these frequent pitfalls when trading cryptocurrency
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Most Common Trading Mistakes</h2>
            
            <div className="space-y-6 mb-8">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    1. Trading Without a Plan
                  </h3>
                  <p className="text-red-800 mb-2">
                    <strong>The Mistake:</strong> Jumping into trades without a clear strategy or exit plan.
                  </p>
                  <p className="text-red-700 text-sm">
                    <strong>How to Avoid:</strong> Always set clear entry and exit points before opening a position. Define your risk tolerance and stick to your plan.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    2. FOMO (Fear of Missing Out)
                  </h3>
                  <p className="text-red-800 mb-2">
                    <strong>The Mistake:</strong> Buying into rallies or popular coins without proper research.
                  </p>
                  <p className="text-red-700 text-sm">
                    <strong>How to Avoid:</strong> Stick to your research and trading plan. There will always be new opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    3. Not Using Stop Losses
                  </h3>
                  <p className="text-red-800 mb-2">
                    <strong>The Mistake:</strong> Holding losing positions hoping they'll recover.
                  </p>
                  <p className="text-red-700 text-sm">
                    <strong>How to Avoid:</strong> Always set stop losses to limit your downside risk. Cut losses early and let profits run.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    4. Overtrading
                  </h3>
                  <p className="text-red-800 mb-2">
                    <strong>The Mistake:</strong> Making too many trades, often driven by emotions.
                  </p>
                  <p className="text-red-700 text-sm">
                    <strong>How to Avoid:</strong> Quality over quantity. Wait for high-probability setups that match your strategy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    5. Risking Too Much Per Trade
                  </h3>
                  <p className="text-red-800 mb-2">
                    <strong>The Mistake:</strong> Putting too large a percentage of your portfolio into single trades.
                  </p>
                  <p className="text-red-700 text-sm">
                    <strong>How to Avoid:</strong> Never risk more than 1-2% of your total portfolio on a single trade.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Emotional Trading Mistakes</h2>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Revenge Trading</h4>
                <p className="text-xdeel-gray">Trying to quickly recover losses by making impulsive trades. Take breaks after losses to clear your head.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Ignoring Market Conditions</h4>
                <p className="text-xdeel-gray">Trading the same way in bull and bear markets. Adapt your strategy to current market conditions.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Chasing Losses</h4>
                <p className="text-xdeel-gray">Increasing position sizes after losses to "get even faster." This often leads to even bigger losses.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Technical Mistakes</h2>
            <ul className="text-xdeel-gray space-y-2 mb-8">
              <li>• Not understanding order types (market vs. limit orders)</li>
              <li>• Ignoring trading fees when calculating profits</li>
              <li>• Poor timing of entries and exits</li>
              <li>• Not keeping a trading journal to learn from mistakes</li>
              <li>• Following tips from social media without verification</li>
            </ul>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Best Practices</h2>
            <ul className="text-xdeel-gray space-y-2 mb-8">
              <li>• Start with small position sizes while learning</li>
              <li>• Keep a detailed trading journal</li>
              <li>• Continuously educate yourself about markets</li>
              <li>• Practice with paper trading before using real money</li>
              <li>• Never invest more than you can afford to lose</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommonMistakes;
