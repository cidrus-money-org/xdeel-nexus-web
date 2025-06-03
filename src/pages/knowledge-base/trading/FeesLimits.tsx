
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
import { ArrowLeft, TrendingUp, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const FeesLimits = () => {
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
              <BreadcrumbPage>Trading Fees & Limits</BreadcrumbPage>
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
            Trading Fees & Limits
          </h1>
          <p className="text-xl text-xdeel-gray">
            Understanding costs and account limits for trading on Xdeel
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Trading Fees</h2>
            <p className="text-xdeel-gray mb-6">
              Xdeel uses a maker-taker fee structure to provide competitive trading costs for all users.
            </p>

            <Card className="border-green-200 bg-green-50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Fee Structure
                </h3>
                <div className="text-green-800 text-sm space-y-2">
                  <p><strong>Maker Fee:</strong> 0.1% - Orders that add liquidity to the order book</p>
                  <p><strong>Taker Fee:</strong> 0.2% - Orders that remove liquidity from the order book</p>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Trading Limits</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Daily Trading Limits</h4>
                <ul className="text-xdeel-gray space-y-1">
                  <li>• Basic Account: €10,000 per day</li>
                  <li>• Verified Account: €100,000 per day</li>
                  <li>• Premium Account: €1,000,000 per day</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Minimum Order Amounts</h4>
                <ul className="text-xdeel-gray space-y-1">
                  <li>• Bitcoin (BTC): 0.0001 BTC</li>
                  <li>• Ethereum (ETH): 0.001 ETH</li>
                  <li>• Other cryptocurrencies: €10 equivalent</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Maximum Order Amounts</h4>
                <p className="text-xdeel-gray">Maximum order size is limited by your account verification level and available balance.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Fee Reductions</h2>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Volume-Based Discounts</h4>
                <p className="text-xdeel-gray mb-2">Higher trading volumes qualify for reduced fees:</p>
                <ul className="text-xdeel-gray space-y-1">
                  <li>• €100,000+ monthly volume: 10% fee reduction</li>
                  <li>• €500,000+ monthly volume: 25% fee reduction</li>
                  <li>• €1,000,000+ monthly volume: 50% fee reduction</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Additional Information</h2>
            <ul className="text-xdeel-gray space-y-2 mb-8">
              <li>• Fees are calculated on the total order value</li>
              <li>• Cancelled orders are not charged any fees</li>
              <li>• Partial fills are charged proportionally</li>
              <li>• Fee schedules may change with advance notice</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeesLimits;
