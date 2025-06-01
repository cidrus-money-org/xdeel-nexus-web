
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const XdeelIntegrationSection = () => {
  return (
    <>
      <Card className="mb-8">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-xdeel-dark mb-6">How Xdeel Supports Different Networks</h2>
          
          <p className="text-xdeel-gray mb-6">
            Xdeel provides access to cryptocurrencies across all major network types, allowing you to 
            diversify your portfolio and take advantage of the unique benefits each network offers.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="font-semibold text-xdeel-dark mb-2">Multi-Chain Support</h4>
                <p className="text-xdeel-gray">
                  Buy, sell, and trade assets across Bitcoin, Ethereum, and multiple other blockchain networks.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="font-semibold text-xdeel-dark mb-2">Layer 2 Integration</h4>
                <p className="text-xdeel-gray">
                  Benefit from lower fees and faster transactions through our integration with popular Layer 2 solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="font-semibold text-xdeel-dark mb-2">Staking Services</h4>
                <p className="text-xdeel-gray">
                  Earn passive income by staking your PoS cryptocurrencies directly through the Xdeel platform.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                4
              </div>
              <div>
                <h4 className="font-semibold text-xdeel-dark mb-2">Educational Resources</h4>
                <p className="text-xdeel-gray">
                  Access detailed information on each network type to make informed investment decisions.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Explore Our Multi-Chain Exchange</h3>
        <p className="text-white/90 mb-6">
          Trade across different networks with competitive fees and a seamless experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary">
            Start Trading Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
            Compare Network Fees
          </Button>
        </div>
      </div>
    </>
  );
};
