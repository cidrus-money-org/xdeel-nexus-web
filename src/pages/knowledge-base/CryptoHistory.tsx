
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Calendar, Share2, History, Bitcoin, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const CryptoHistory = () => {
  const milestones = [
    {
      year: 2008,
      title: "Bitcoin Whitepaper",
      description: "Satoshi Nakamoto publishes 'Bitcoin: A Peer-to-Peer Electronic Cash System'",
      icon: Bitcoin,
      color: "border-orange-400 bg-orange-50"
    },
    {
      year: 2009,
      title: "Genesis Block",
      description: "The first block in the Bitcoin blockchain is mined",
      icon: Bitcoin,
      color: "border-orange-400 bg-orange-50"
    },
    {
      year: 2010,
      title: "First Purchase",
      description: "The first real-world Bitcoin purchase - two pizzas for 10,000 BTC",
      icon: Bitcoin,
      color: "border-orange-400 bg-orange-50"
    },
    {
      year: 2011,
      title: "Altcoins Emerge",
      description: "First alternative cryptocurrencies like Litecoin appear",
      icon: BarChart2,
      color: "border-blue-400 bg-blue-50"
    },
    {
      year: 2013,
      title: "Price Milestone",
      description: "Bitcoin price exceeds $1,000 for the first time",
      icon: BarChart2,
      color: "border-blue-400 bg-blue-50"
    },
    {
      year: 2015,
      title: "Ethereum Launch",
      description: "Ethereum network goes live, introducing smart contracts",
      icon: History,
      color: "border-purple-400 bg-purple-50"
    },
    {
      year: 2017,
      title: "ICO Boom",
      description: "Initial Coin Offerings (ICOs) gain popularity as a fundraising method",
      icon: History,
      color: "border-purple-400 bg-purple-50"
    },
    {
      year: 2020,
      title: "DeFi Explosion",
      description: "Decentralized Finance (DeFi) sees massive growth",
      icon: History,
      color: "border-green-400 bg-green-50"
    },
    {
      year: 2021,
      title: "NFT Popularity",
      description: "Non-Fungible Tokens (NFTs) gain mainstream attention",
      icon: History,
      color: "border-pink-400 bg-pink-50"
    },
    {
      year: 2022,
      title: "Ethereum Merge",
      description: "Ethereum transitions from Proof of Work to Proof of Stake",
      icon: History,
      color: "border-blue-400 bg-blue-50"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-blue-600 border-blue-300">
              <History className="w-4 h-4 mr-2" />
              Crypto 101
            </Badge>
            <div className="flex items-center text-xdeel-gray space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                15 min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: Dec 1, 2024
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            The History and Evolution of Cryptocurrency
          </h1>
          <p className="text-xl text-xdeel-gray">
            From Bitcoin's inception to the modern crypto ecosystem
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
                  Cryptocurrency has evolved dramatically since its inception in 2008. What started as a white paper 
                  by the mysterious Satoshi Nakamoto has grown into a multi-trillion dollar industry that's 
                  reshaping finance, technology, and the very concept of money.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">💡 Historical Significance</h4>
                  <p className="text-blue-700">
                    The emergence of cryptocurrency represents one of the most significant financial innovations 
                    since the advent of digital banking, with potential long-term impacts comparable to the 
                    development of the internet itself.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Key Milestones in Cryptocurrency History</h2>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  {/* Timeline events */}
                  <div className="space-y-8">
                    {milestones.map((milestone, index) => {
                      const IconComponent = milestone.icon;
                      return (
                        <div key={index} className="flex items-start relative">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 z-10 border-2 ${milestone.color}`}>
                            <IconComponent className="w-5 h-5 text-gray-700" />
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className="text-lg font-semibold text-xdeel-dark">{milestone.title}</h3>
                              <span className="bg-xdeel-primary/10 text-xdeel-primary px-2 py-1 rounded text-xs font-medium">
                                {milestone.year}
                              </span>
                            </div>
                            <p className="text-xdeel-gray mt-2">{milestone.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">The Impact and Future of Cryptocurrency</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Financial Revolution</h3>
                    <p className="text-xdeel-gray mb-4">
                      Cryptocurrencies have challenged traditional financial systems by offering alternative 
                      payment methods, investment opportunities, and ways to store value that operate outside 
                      established banking systems.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Technological Innovation</h3>
                    <p className="text-xdeel-gray mb-4">
                      Blockchain technology has applications well beyond cryptocurrency, including supply chain 
                      management, voting systems, identity verification, and intellectual property protection.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Regulatory Evolution</h3>
                    <p className="text-xdeel-gray mb-4">
                      As cryptocurrencies gained popularity, regulations evolved from non-existent to increasingly 
                      structured frameworks designed to protect consumers while fostering innovation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-xdeel-dark mb-3">Looking Ahead</h3>
                    <p className="text-xdeel-gray mb-4">
                      The future of cryptocurrency may include Central Bank Digital Currencies (CBDCs), greater 
                      mainstream adoption, enhanced scalability solutions, and integration with traditional financial systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Be Part of Cryptocurrency History</h3>
              <p className="text-white/90 mb-6">
                Start your cryptocurrency journey today with Xdeel and join the financial revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Create Account
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Explore Trading Options
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

export default CryptoHistory;
