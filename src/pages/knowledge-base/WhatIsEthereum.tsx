
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Calendar, Share2, Zap, Code, Coins } from "lucide-react";
import { Link } from "react-router-dom";

const WhatIsEthereum = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-blue-600 border-blue-300">
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
            What is Ethereum (ETH)?
          </h1>
          <p className="text-xl text-xdeel-gray">
            Understanding the world's second-largest cryptocurrency and its smart contract capabilities
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Introduction</h2>
                <p className="text-xdeel-gray mb-6">
                  Ethereum (ETH) is a decentralized blockchain platform that enables smart contracts and 
                  decentralized applications (DApps). Created by Vitalik Buterin in 2015, Ethereum goes 
                  beyond Bitcoin's simple transactions to create a programmable blockchain.
                </p>
                
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 mb-2">💡 Key Difference</h4>
                  <p className="text-purple-700">
                    While Bitcoin is primarily digital money, Ethereum is a programmable platform 
                    that can run complex applications and smart contracts.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Smart Contracts Explained</h2>
                
                <p className="text-xdeel-gray mb-6">
                  Smart contracts are self-executing contracts with terms directly written into code. 
                  They automatically execute when predetermined conditions are met, without requiring 
                  intermediaries like lawyers or banks.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Example: Insurance Smart Contract</h4>
                  <p className="text-blue-700 text-sm">
                    A flight insurance smart contract could automatically pay out if a flight is delayed 
                    by more than 2 hours, using real-time flight data without human intervention.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-xdeel-dark">Programmable</h4>
                    <p className="text-xdeel-gray text-sm">Written in code</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-xdeel-dark">Automatic</h4>
                    <p className="text-xdeel-gray text-sm">Self-executing</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Coins className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-xdeel-dark">Trustless</h4>
                    <p className="text-xdeel-gray text-sm">No intermediaries</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Ethereum's Ecosystem</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Decentralized Finance (DeFi)</h3>
                    <p className="text-xdeel-gray mb-4">
                      DeFi applications built on Ethereum allow users to lend, borrow, trade, and earn 
                      interest on cryptocurrencies without traditional banks.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Non-Fungible Tokens (NFTs)</h3>
                    <p className="text-xdeel-gray mb-4">
                      NFTs are unique digital assets representing ownership of art, collectibles, or 
                      other digital items, primarily built on Ethereum.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Decentralized Applications (DApps)</h3>
                    <p className="text-xdeel-gray mb-4">
                      Applications that run on the Ethereum blockchain, from games to social networks, 
                      operating without central control.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Ethereum 2.0 and Proof of Stake</h2>
                
                <p className="text-xdeel-gray mb-6">
                  Ethereum has transitioned from Proof of Work (mining) to Proof of Stake (staking), 
                  making it more energy-efficient and scalable. This upgrade, known as "The Merge," 
                  occurred in September 2022.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Before: Proof of Work</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• High energy consumption</li>
                      <li>• Miners compete to solve puzzles</li>
                      <li>• Slower transaction processing</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Now: Proof of Stake</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• 99.95% less energy usage</li>
                      <li>• Validators stake ETH</li>
                      <li>• Faster and more scalable</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Start Trading Ethereum on Xdeel</h3>
              <p className="text-white/90 mb-6">
                Experience secure and regulated Ethereum trading with competitive fees and instant execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Buy Ethereum Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Learn More About DeFi
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

export default WhatIsEthereum;
