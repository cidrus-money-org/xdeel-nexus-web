
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Network, Layers } from "lucide-react";

export const NetworkTypesContent = () => {
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
    <>
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
    </>
  );
};
