
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Calendar, Share2, Zap, Gauge, TrendingUp, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const GasFees = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-orange-600 border-orange-300">
              <Zap className="w-4 h-4 mr-2" />
              Crypto 101
            </Badge>
            <div className="flex items-center text-xdeel-gray space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                12 min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: Dec 1, 2024
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Understanding Gas Fees and Transactions
          </h1>
          <p className="text-xl text-xdeel-gray">
            How cryptocurrency transaction fees work and why they matter
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-4">What Are Gas Fees?</h2>
                <p className="text-xdeel-gray mb-6">
                  Gas fees are payments made by users to compensate for the computing energy required to 
                  process and validate transactions on a blockchain network. The term "gas" refers to 
                  the computational work needed, similar to how gasoline fuels a car.
                </p>
                
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-2">💡 Key Concept</h4>
                  <p className="text-yellow-700">
                    Gas fees serve two essential purposes: they compensate miners/validators for their work 
                    and help prevent network spam by creating a cost for each transaction.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">How Gas Fees Work</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Ethereum Gas Model</h3>
                    <p className="text-xdeel-gray mb-4">
                      In Ethereum, gas fees are calculated based on:
                    </p>
                    <ul className="list-disc pl-6 text-xdeel-gray space-y-1">
                      <li><span className="font-semibold">Base Fee</span>: The minimum price per unit of gas determined by the network</li>
                      <li><span className="font-semibold">Max Priority Fee</span>: An optional tip to miners/validators</li>
                      <li><span className="font-semibold">Gas Limit</span>: The maximum amount of computational work you're willing to pay for</li>
                    </ul>
                    <p className="text-xdeel-gray mt-4">
                      The total gas fee is calculated as: (Base Fee + Priority Fee) × Gas Used
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Bitcoin Transaction Fees</h3>
                    <p className="text-xdeel-gray mb-4">
                      Bitcoin uses a simpler fee model based on transaction size (in bytes) rather than 
                      computational complexity. Fees are typically expressed as satoshis (the smallest unit of Bitcoin) 
                      per byte of transaction data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Why Gas Fees Fluctuate</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                    <div className="flex items-center mb-3">
                      <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-xdeel-dark">Network Demand</h4>
                    </div>
                    <p className="text-xdeel-gray text-sm">
                      Higher transaction volume means more competition for block space, driving up fees. 
                      This often happens during NFT launches, DeFi opportunities, or market volatility.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                    <div className="flex items-center mb-3">
                      <Gauge className="w-6 h-6 text-green-600 mr-2" />
                      <h4 className="font-semibold text-xdeel-dark">Network Capacity</h4>
                    </div>
                    <p className="text-xdeel-gray text-sm">
                      Networks have limited transaction throughput. When capacity is reached, 
                      users bid higher fees to get their transactions processed faster.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-orange-500 mr-2 mt-1" />
                      <div>
                        <h4 className="font-semibold text-orange-800">Gas Fee Spike Example</h4>
                        <p className="text-xdeel-gray text-sm mt-1">
                          During the peak of the 2021 NFT boom, Ethereum gas fees reached over $200 per transaction, 
                          making smaller transactions economically unfeasible. This led to increased development of 
                          Layer-2 solutions and alternative blockchains with lower fees.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">How to Reduce Gas Fees</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Time Your Transactions</h4>
                      <p className="text-xdeel-gray">
                        Network activity typically varies throughout the day. Transaction fees are often lower 
                        during off-peak hours (late night/early morning in US/European time zones).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Use Layer 2 Solutions</h4>
                      <p className="text-xdeel-gray">
                        For Ethereum transactions, consider Layer 2 networks like Optimism, Arbitrum, or Polygon, 
                        which offer significantly lower fees while maintaining security.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Batch Transactions</h4>
                      <p className="text-xdeel-gray">
                        If possible, combine multiple actions into a single transaction to reduce the overall 
                        gas cost compared to executing them separately.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Use Gas Price Trackers</h4>
                      <p className="text-xdeel-gray">
                        Tools like ETH Gas Station or GasNow provide real-time information on gas prices, 
                        helping you find the optimal time to transact.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Trade with Xdeel - No Hidden Gas Fees</h3>
              <p className="text-white/90 mb-6">
                Xdeel covers cryptocurrency network fees for many transactions and provides transparent fee 
                information for all operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  View Our Fee Structure
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                  Start Trading
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

export default GasFees;
