
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Calendar, Share2, Network, Layers, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const NetworkTypes = () => {
  const networks = [
    {
      name: "Proof of Work (PoW)",
      description: "Miners compete to solve complex mathematical puzzles to validate transactions and create new blocks.",
      examples: "Bitcoin, Litecoin, Dogecoin",
      pros: ["Established security track record", "Highly decentralized", "No initial investment required to participate"],
      cons: ["Energy intensive", "Slower transaction processing", "Potential for mining centralization"],
      icon: Shield,
      color: "bg-amber-100 text-amber-600 border-amber-300"
    },
    {
      name: "Proof of Stake (PoS)",
      description: "Validators are selected to create new blocks based on the amount of cryptocurrency they have staked as collateral.",
      examples: "Ethereum (post-Merge), Cardano, Solana, Polkadot",
      pros: ["Energy efficient", "Reduced hardware requirements", "Potentially higher transaction throughput"],
      cons: ["Rich get richer concerns", "Less battle-tested than PoW", "Initial investment required to participate"],
      icon: Zap,
      color: "bg-green-100 text-green-600 border-green-300"
    },
    {
      name: "Delegated Proof of Stake (DPoS)",
      description: "Token holders vote for a limited number of delegates who are responsible for validating transactions and securing the network.",
      examples: "EOS, Tron, Cosmos",
      pros: ["Very high throughput", "Energy efficient", "Democratic governance"],
      cons: ["More centralized than PoW or PoS", "Potential for delegate collusion", "Voting power concentrated with large holders"],
      icon: Network,
      color: "bg-blue-100 text-blue-600 border-blue-300"
    },
    {
      name: "Layer 2 Solutions",
      description: "Secondary frameworks built on top of existing blockchains that handle transactions off the main chain to improve scalability.",
      examples: "Bitcoin Lightning Network, Ethereum's Optimism, Arbitrum, Polygon",
      pros: ["Significantly lower fees", "Higher transaction throughput", "Maintains base layer security"],
      cons: ["Additional complexity", "May have different security assumptions", "Sometimes requires specialized wallets"],
      icon: Layers,
      color: "bg-purple-100 text-purple-600 border-purple-300"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-indigo-600 border-indigo-300">
              <Network className="w-4 h-4 mr-2" />
              Crypto 101
            </Badge>
            <div className="flex items-center text-xdeel-gray space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                14 min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: Dec 1, 2024
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Different Types of Networks
          </h1>
          <p className="text-xl text-xdeel-gray">
            Understanding Proof of Work, Proof of Stake, Layer 2s and more
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Introduction to Blockchain Networks</h2>
                <p className="text-xdeel-gray mb-6">
                  Blockchain networks use different consensus mechanisms to validate transactions and secure their 
                  networks. These mechanisms determine how new blocks are added to the blockchain, who can add them, 
                  and how the network maintains security and decentralization.
                </p>
                
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 mb-2">💡 Why It Matters</h4>
                  <p className="text-purple-700">
                    The type of network a cryptocurrency uses affects its security, transaction speed, energy 
                    consumption, and overall scalability. Understanding these differences helps you make more 
                    informed decisions about which cryptocurrencies to use or invest in.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Network Types */}
            <div className="space-y-8 mb-8">
              {networks.map((network, index) => {
                const IconComponent = network.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${network.color.split(' ').slice(0, 2).join(' ')}`}>
                          <IconComponent className={`w-6 h-6 ${network.color.split(' ').slice(2, 3).join(' ')}`} />
                        </div>
                        <h2 className="text-2xl font-bold text-xdeel-dark">{network.name}</h2>
                      </div>
                      
                      <p className="text-xdeel-gray mb-6">
                        {network.description}
                      </p>

                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h4 className="font-semibold text-xdeel-dark mb-2">Examples</h4>
                        <p className="text-xdeel-gray">{network.examples}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">Advantages</h4>
                          <ul className="text-green-700 space-y-1 text-sm">
                            {network.pros.map((pro, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2">✓</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <h4 className="font-semibold text-red-800 mb-2">Limitations</h4>
                          <ul className="text-red-700 space-y-1 text-sm">
                            {network.cons.map((con, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Making Sense of Network Types</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 p-3 text-left font-semibold">Factor</th>
                        <th className="border border-gray-200 p-3 text-left font-semibold">PoW</th>
                        <th className="border border-gray-200 p-3 text-left font-semibold">PoS</th>
                        <th className="border border-gray-200 p-3 text-left font-semibold">Layer 2</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3 font-medium">Energy Usage</td>
                        <td className="border border-gray-200 p-3">High</td>
                        <td className="border border-gray-200 p-3">Low</td>
                        <td className="border border-gray-200 p-3">Varies</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 p-3 font-medium">Transaction Speed</td>
                        <td className="border border-gray-200 p-3">Slow</td>
                        <td className="border border-gray-200 p-3">Medium</td>
                        <td className="border border-gray-200 p-3">Fast</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 font-medium">Security Level</td>
                        <td className="border border-gray-200 p-3">Very High</td>
                        <td className="border border-gray-200 p-3">High</td>
                        <td className="border border-gray-200 p-3">Moderate to High</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 p-3 font-medium">Decentralization</td>
                        <td className="border border-gray-200 p-3">High</td>
                        <td className="border border-gray-200 p-3">Medium</td>
                        <td className="border border-gray-200 p-3">Varies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

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

export default NetworkTypes;
