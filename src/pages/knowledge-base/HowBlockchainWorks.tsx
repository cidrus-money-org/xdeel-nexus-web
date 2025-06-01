import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Calendar, Share2, Link as LinkIcon, Shield, Database } from "lucide-react";
import { Link } from "react-router-dom";

const HowBlockchainWorks = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-green-600 border-green-300">
              <Database className="w-4 h-4 mr-2" />
              Crypto 101
            </Badge>
            <div className="flex items-center text-xdeel-gray space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                10 min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: Dec 1, 2024
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            How Blockchain Works
          </h1>
          <p className="text-xl text-xdeel-gray">
            Understanding the foundational technology behind cryptocurrencies
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xdeel-gray mb-8 text-xl">
              Blockchain technology is the innovative foundation that powers cryptocurrencies like Bitcoin and Ethereum. 
              This guide explains how blockchain works in simple terms, including its key components and why it's transforming 
              various industries.
            </p>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-4">What is Blockchain Technology?</h2>
                <p className="text-xdeel-gray mb-6">
                  At its core, a blockchain is a distributed digital ledger that records transactions across many computers.
                  This technology ensures that once a transaction is recorded, it cannot be altered retroactively 
                  without altering subsequent blocks and network consensus.
                </p>
                
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">Definition</h4>
                  <p className="text-green-700">
                    A blockchain is a type of distributed ledger technology (DLT) consisting of growing lists of records 
                    (blocks) that are securely linked together using cryptography.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Key Components of Blockchain</h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Database className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Blocks</h3>
                        <p className="text-xdeel-gray mb-4">
                          Blocks are data structures within the blockchain that contain sets of transactions. Each block includes:
                        </p>
                        <ul className="list-disc pl-6 text-xdeel-gray space-y-1">
                          <li>A timestamp when the block was created</li>
                          <li>Transaction data</li>
                          <li>A reference to the previous block (creating the "chain")</li>
                          <li>A unique identifier (hash)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <LinkIcon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Chain</h3>
                        <p className="text-xdeel-gray mb-4">
                          The chain connects blocks in sequential order. Each block contains a reference (hash) to the 
                          previous block, creating an unbroken and tamper-evident chain. This linkage is what makes 
                          blockchain secure and immutable.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Shield className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Consensus Mechanisms</h3>
                        <p className="text-xdeel-gray mb-4">
                          Consensus mechanisms ensure all network participants agree on the blockchain's state. 
                          Popular mechanisms include:
                        </p>
                        <ul className="list-disc pl-6 text-xdeel-gray space-y-1">
                          <li><span className="font-semibold">Proof of Work</span>: Miners solve complex puzzles (Bitcoin)</li>
                          <li><span className="font-semibold">Proof of Stake</span>: Validators stake currency (Ethereum 2.0)</li>
                          <li><span className="font-semibold">Delegated Proof of Stake</span>: Elected validators (EOS)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">The Blockchain Process Simplified</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Transaction Request</h4>
                      <p className="text-xdeel-gray">A user initiates a transaction (e.g., sending cryptocurrency to another user).</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Transaction Broadcast</h4>
                      <p className="text-xdeel-gray">The transaction is broadcast to a network of computers (nodes).</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Validation</h4>
                      <p className="text-xdeel-gray">Network nodes verify the transaction's validity using known algorithms.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Block Creation</h4>
                      <p className="text-xdeel-gray">The verified transaction is combined with others to create a new data block.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Adding to Chain</h4>
                      <p className="text-xdeel-gray">The new block is added to the existing blockchain in a way that is permanent and unalterable.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      6
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Transaction Complete</h4>
                      <p className="text-xdeel-gray">The transaction is now complete and recorded on the blockchain permanently.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Blockchain Technology?</h3>
              <p className="text-white/90 mb-6">
                Start trading cryptocurrencies on Xdeel and be part of the blockchain revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Create Account
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Explore More Articles
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

export default HowBlockchainWorks;
