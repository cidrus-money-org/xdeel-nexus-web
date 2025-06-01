
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
import { ArrowLeft, Bitcoin, DollarSign, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

const Stablecoins = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
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
                  <Link to="/knowledge-base/crypto-101">Blockchain & Crypto 101</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Stablecoins vs Traditional Crypto</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-orange-600 border-orange-300">
              <Bitcoin className="w-4 h-4 mr-2" />
              Blockchain & Crypto 101
            </Badge>
            <span className="text-xdeel-gray">Last updated: 1 month ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Stablecoins vs Traditional Cryptocurrencies
          </h1>
          <p className="text-xl text-xdeel-gray">
            Understanding the difference between stable and volatile digital assets
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <DollarSign className="w-6 h-6 mr-3 text-xdeel-primary" />
              What Are Stablecoins?
            </h2>
            
            <p className="text-lg text-xdeel-gray mb-6">
              Stablecoins are cryptocurrencies designed to maintain a stable value relative to a reference asset, usually the US Dollar. They combine the benefits of digital currencies with price stability.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">USDC (USD Coin)</h3>
                  <p className="text-xdeel-gray text-sm">Backed 1:1 by US dollars held in reserve</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">USDT (Tether)</h3>
                  <p className="text-xdeel-gray text-sm">Most widely used stablecoin, pegged to USD</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">DAI</h3>
                  <p className="text-xdeel-gray text-sm">Decentralized stablecoin backed by crypto collateral</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">BUSD</h3>
                  <p className="text-xdeel-gray text-sm">Binance USD, regulated stablecoin</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <TrendingDown className="w-6 h-6 mr-3 text-xdeel-primary" />
              Traditional Cryptocurrencies
            </h2>
            
            <p className="text-lg text-xdeel-gray mb-6">
              Traditional cryptocurrencies like Bitcoin and Ethereum are known for their price volatility. Their value can fluctuate significantly based on market demand, adoption, and various other factors.
            </p>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Price Volatility</h3>
                <p className="text-xdeel-gray">
                  Bitcoin can gain or lose 10-20% of its value in a single day, making it unsuitable for stable value storage.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Investment Potential</h3>
                <p className="text-xdeel-gray">
                  High volatility also means high potential returns (or losses), attracting investors seeking growth.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Market-Driven Value</h3>
                <p className="text-xdeel-gray">
                  Prices are determined by supply and demand, news events, regulatory changes, and market sentiment.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">
              Key Differences
            </h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left">Aspect</th>
                    <th className="border border-gray-300 p-3 text-left">Stablecoins</th>
                    <th className="border border-gray-300 p-3 text-left">Traditional Crypto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Price Stability</td>
                    <td className="border border-gray-300 p-3">High (pegged to USD)</td>
                    <td className="border border-gray-300 p-3">Low (highly volatile)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Investment Potential</td>
                    <td className="border border-gray-300 p-3">Low returns</td>
                    <td className="border border-gray-300 p-3">High returns/losses</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Use Case</td>
                    <td className="border border-gray-300 p-3">Payments, trading pairs</td>
                    <td className="border border-gray-300 p-3">Investment, speculation</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Risk Level</td>
                    <td className="border border-gray-300 p-3">Low</td>
                    <td className="border border-gray-300 p-3">High</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">
              When to Use Each
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-green-900">Use Stablecoins When:</h3>
                  <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                    <li>Making payments or transfers</li>
                    <li>Storing value short-term</li>
                    <li>Trading (as a stable base)</li>
                    <li>Avoiding volatility</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-blue-900">Use Traditional Crypto When:</h3>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>Long-term investment</li>
                    <li>Seeking growth potential</li>
                    <li>Supporting specific projects</li>
                    <li>Portfolio diversification</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Portfolio Balance</h3>
                <p className="text-orange-800">
                  Many users hold both stablecoins (for stability and trading) and traditional cryptocurrencies (for growth potential) in their portfolios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Stablecoins;
