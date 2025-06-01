
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Calendar, Share2, Bitcoin, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const WhatIsBitcoin = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-orange-600 border-orange-300">
              <Bitcoin className="w-4 h-4 mr-2" />
              Crypto 101
            </Badge>
            <div className="flex items-center text-xdeel-gray space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                8 min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: Dec 1, 2024
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            What is Bitcoin (BTC)?
          </h1>
          <p className="text-xl text-xdeel-gray">
            A comprehensive introduction to the world's first and most well-known cryptocurrency
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
                  Bitcoin (BTC) is the world's first cryptocurrency, created in 2009 by an anonymous person or group 
                  known as Satoshi Nakamoto. It introduced the concept of a decentralized digital currency that 
                  operates without the need for central banks or government control.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">💡 Key Takeaway</h4>
                  <p className="text-blue-700">
                    Bitcoin is often called "digital gold" because it serves as a store of value and has a 
                    limited supply of 21 million coins that will ever exist.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">How Bitcoin Works</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Blockchain Technology</h3>
                    <p className="text-xdeel-gray mb-4">
                      Bitcoin operates on a technology called blockchain - a distributed ledger that records 
                      all transactions across a network of computers. Each "block" contains transaction data 
                      and is linked to the previous block, creating an unalterable chain of records.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Mining and Validation</h3>
                    <p className="text-xdeel-gray mb-4">
                      New bitcoins are created through a process called "mining," where powerful computers 
                      solve complex mathematical problems to validate transactions and add new blocks to 
                      the blockchain. Miners are rewarded with newly created bitcoins for their work.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Peer-to-Peer Network</h3>
                    <p className="text-xdeel-gray mb-4">
                      Bitcoin transactions occur directly between users without intermediaries like banks. 
                      The network of computers (nodes) maintains the blockchain and ensures all transactions 
                      are valid and secure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Key Features of Bitcoin</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <Shield className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xdeel-dark">Decentralized</h4>
                        <p className="text-xdeel-gray text-sm">No central authority controls Bitcoin</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xdeel-dark">Limited Supply</h4>
                        <p className="text-xdeel-gray text-sm">Only 21 million bitcoins will ever exist</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <Bitcoin className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xdeel-dark">Transparent</h4>
                        <p className="text-xdeel-gray text-sm">All transactions are publicly visible</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <Shield className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xdeel-dark">Secure</h4>
                        <p className="text-xdeel-gray text-sm">Protected by cryptographic algorithms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Bitcoin vs Traditional Money</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 p-3 text-left font-semibold">Feature</th>
                        <th className="border border-gray-200 p-3 text-left font-semibold">Bitcoin</th>
                        <th className="border border-gray-200 p-3 text-left font-semibold">Traditional Money</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3 font-medium">Control</td>
                        <td className="border border-gray-200 p-3">Decentralized</td>
                        <td className="border border-gray-200 p-3">Central banks</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 p-3 font-medium">Supply</td>
                        <td className="border border-gray-200 p-3">Fixed (21 million)</td>
                        <td className="border border-gray-200 p-3">Unlimited printing</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 font-medium">Transactions</td>
                        <td className="border border-gray-200 p-3">24/7 global</td>
                        <td className="border border-gray-200 p-3">Business hours</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 p-3 font-medium">Fees</td>
                        <td className="border border-gray-200 p-3">Low network fees</td>
                        <td className="border border-gray-200 p-3">Bank fees</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Getting Started with Bitcoin on Xdeel</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Create Your Account</h4>
                      <p className="text-xdeel-gray">Sign up and complete the verification process to ensure security and compliance.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Fund Your Account</h4>
                      <p className="text-xdeel-gray">Deposit funds using bank transfer, credit card, or other supported payment methods.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Buy Bitcoin</h4>
                      <p className="text-xdeel-gray">Use our simple interface to purchase Bitcoin at current market prices.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Secure Storage</h4>
                      <p className="text-xdeel-gray">Your Bitcoin is securely stored in our regulated, insured platform.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-xdeel-primary to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Bitcoin Journey?</h3>
              <p className="text-white/90 mb-6">
                Join thousands of users who trust Xdeel for secure and easy Bitcoin trading.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Start Trading Bitcoin
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-xdeel-primary">
                  Read Trading Guide
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

export default WhatIsBitcoin;
