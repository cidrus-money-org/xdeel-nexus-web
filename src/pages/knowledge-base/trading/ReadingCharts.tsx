
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
import { ArrowLeft, TrendingUp, BarChart3, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const ReadingCharts = () => {
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
              <BreadcrumbPage>Reading Trading Charts</BreadcrumbPage>
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
            <span className="text-xdeel-gray">Last updated: 1 week ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Reading Trading Charts
          </h1>
          <p className="text-xl text-xdeel-gray">
            Learn to analyze price charts and technical indicators like a professional trader
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-xdeel-primary" />
              Types of Charts
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Candlestick Charts</h3>
                  <p className="text-xdeel-gray text-sm">Show open, high, low, and close prices in a visual format</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Line Charts</h3>
                  <p className="text-xdeel-gray text-sm">Simple price movement over time, good for beginners</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Bar Charts</h3>
                  <p className="text-xdeel-gray text-sm">Similar to candlesticks but in bar format</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Volume Charts</h3>
                  <p className="text-xdeel-gray text-sm">Show trading volume alongside price movement</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">
              Understanding Candlesticks
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Green (Bullish) Candles</h3>
                <p className="text-xdeel-gray">
                  When the closing price is higher than the opening price. The body shows the range between open and close, while the wicks show the high and low.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Red (Bearish) Candles</h3>
                <p className="text-xdeel-gray">
                  When the closing price is lower than the opening price. Red candles indicate selling pressure.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Doji Candles</h3>
                <p className="text-xdeel-gray">
                  When open and close prices are nearly equal, creating a cross-like shape. Often signals indecision in the market.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-3 text-xdeel-primary" />
              Key Technical Indicators
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Moving Averages (MA)</h3>
                <p className="text-xdeel-gray">
                  Smooth out price data to identify trends. Common periods are 20, 50, and 200 days.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Relative Strength Index (RSI)</h3>
                <p className="text-xdeel-gray">
                  Measures if an asset is overbought (above 70) or oversold (below 30).
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Support and Resistance</h3>
                <p className="text-xdeel-gray">
                  Support is a price level where buying interest emerges. Resistance is where selling pressure appears.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Volume</h3>
                <p className="text-xdeel-gray">
                  Higher volume confirms price movements. Low volume may indicate weak trends.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">
              Chart Timeframes
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1m</div>
                <div>
                  <h4 className="font-semibold mb-1">1-Minute Charts</h4>
                  <p className="text-xdeel-gray">For scalping and very short-term trades</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1h</div>
                <div>
                  <h4 className="font-semibold mb-1">1-Hour Charts</h4>
                  <p className="text-xdeel-gray">Good for day trading and intraday analysis</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1d</div>
                <div>
                  <h4 className="font-semibold mb-1">Daily Charts</h4>
                  <p className="text-xdeel-gray">Most popular for swing trading and trend analysis</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1w</div>
                <div>
                  <h4 className="font-semibold mb-1">Weekly Charts</h4>
                  <p className="text-xdeel-gray">For long-term trend identification</p>
                </div>
              </div>
            </div>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Pro Tip</h3>
                <p className="text-green-800">
                  Start with daily charts to understand the overall trend, then zoom into smaller timeframes for entry and exit points.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReadingCharts;
