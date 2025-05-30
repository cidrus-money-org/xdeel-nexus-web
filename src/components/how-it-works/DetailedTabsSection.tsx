
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check, Shield, HelpCircle, CircleCheck } from "lucide-react";

export const DetailedTabsSection = () => {
  const paymentMethods = [
    { name: "Bank Transfer", fee: "0-1%", time: "1-3 business days", recommended: false },
    { name: "Debit/Credit Card", fee: "1.5%", time: "Instant", recommended: true },
    { name: "SEPA Transfer", fee: "0%", time: "1 business day", recommended: false },
    { name: "Apple Pay", fee: "1.5%", time: "Instant", recommended: false }
  ];

  const tradableCryptos = [
    "Bitcoin (BTC)",
    "Ethereum (ETH)",
    "Binance Coin (BNB)",
    "Cardano (ADA)",
    "Solana (SOL)",
    "XRP",
    "Polkadot (DOT)",
    "Dogecoin (DOGE)",
    "And 30+ more cryptocurrencies"
  ];

  return (
    <section className="py-16 bg-xdeel-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
            Detailed Information
          </Badge>
          <h2 className="text-3xl font-bold text-xdeel-dark mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-xdeel-gray max-w-2xl mx-auto">
            Find detailed information about our account creation process, payment methods, and trading options.
          </p>
        </div>

        <Tabs defaultValue="payment" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="account">Account Setup</TabsTrigger>
            <TabsTrigger value="payment">Payment Methods</TabsTrigger>
            <TabsTrigger value="trading">Trading Options</TabsTrigger>
          </TabsList>
          
          {/* Account Setup Tab */}
          <TabsContent value="account" className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-xdeel-dark">Account Setup Process</h3>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-4 text-xdeel-dark">Required Information</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CircleCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block">Email Address</span>
                        <span className="text-sm text-xdeel-gray">Used for account verification and communication</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block">Password</span>
                        <span className="text-sm text-xdeel-gray">Minimum 8 characters with special characters and numbers</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block">Personal Details</span>
                        <span className="text-sm text-xdeel-gray">Full name, address, date of birth</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block">Identification</span>
                        <span className="text-sm text-xdeel-gray">Government-issued ID for verification</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-4 text-xdeel-dark">Account Security</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-xdeel-primary mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block">Two-Factor Authentication (2FA)</span>
                        <span className="text-sm text-xdeel-gray">Add an extra layer of security with authenticator apps</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-xdeel-primary mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block">Email Confirmations</span>
                        <span className="text-sm text-xdeel-gray">Verify significant account changes via email</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-xdeel-primary mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block">Device Management</span>
                        <span className="text-sm text-xdeel-gray">Monitor and control which devices can access your account</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-xdeel-primary mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block">Transaction PINs</span>
                        <span className="text-sm text-xdeel-gray">Additional verification for high-value transactions</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Alert className="bg-blue-50 border-blue-200">
                <HelpCircle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800">KYC Verification Required</AlertTitle>
                <AlertDescription className="text-blue-700">
                  To comply with regulations, all users must complete Know Your Customer (KYC) verification before trading. 
                  This typically takes 24-48 hours for approval, but many accounts are approved instantly.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
          
          {/* Payment Methods Tab */}
          <TabsContent value="payment" className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-xdeel-dark">Available Payment Methods</h3>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-3 text-left text-xdeel-dark">Payment Method</th>
                    <th className="border p-3 text-left text-xdeel-dark">Fee</th>
                    <th className="border p-3 text-left text-xdeel-dark">Processing Time</th>
                    <th className="border p-3 text-left text-xdeel-dark">Recommended</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentMethods.map((method, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border p-3 text-xdeel-dark font-medium">{method.name}</td>
                      <td className="border p-3 text-xdeel-gray">{method.fee}</td>
                      <td className="border p-3 text-xdeel-gray">{method.time}</td>
                      <td className="border p-3">
                        {method.recommended ? (
                          <Badge className="bg-green-100 text-green-700 border-green-200">Recommended</Badge>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4 text-xdeel-dark">Deposit Limits</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="font-medium w-32">Minimum:</span>
                    <span className="text-xdeel-gray">€20 or equivalent</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium w-32">Maximum (Daily):</span>
                    <span className="text-xdeel-gray">€10,000 or equivalent</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium w-32">Maximum (Monthly):</span>
                    <span className="text-xdeel-gray">€100,000 or equivalent</span>
                  </li>
                </ul>
                <p className="text-sm text-xdeel-gray mt-4">
                  * Higher limits are available for verified business accounts
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4 text-xdeel-dark">Currencies Accepted</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>EUR (€)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>USD ($)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>GBP (£)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>PLN (zł)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>CHF (Fr)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>And more...</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Trading Options Tab */}
          <TabsContent value="trading" className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-xdeel-dark">Trading Capabilities</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-medium mb-4 text-xdeel-dark">Available Cryptocurrencies</h4>
                <div className="grid grid-cols-2 gap-3">
                  {tradableCryptos.map((crypto, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-xdeel-gray">{crypto}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4 text-xdeel-dark">Trading Features</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium block">Market Orders</span>
                      <span className="text-sm text-xdeel-gray">Buy or sell at the current market price</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium block">Limit Orders</span>
                      <span className="text-sm text-xdeel-gray">Set your desired price for buying or selling</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium block">Recurring Buys</span>
                      <span className="text-sm text-xdeel-gray">Automatically purchase crypto on a schedule</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium block">Portfolio Tracking</span>
                      <span className="text-sm text-xdeel-gray">Monitor your holdings and performance</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <div>
              <h4 className="text-lg font-medium mb-4 text-xdeel-dark">Trading Fees</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-2">Standard Account</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Maker Fee:</span>
                      <span className="text-sm font-medium">0.25%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Taker Fee:</span>
                      <span className="text-sm font-medium">0.35%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Withdrawal Fee:</span>
                      <span className="text-sm font-medium">Network cost + 0.5€</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Premium Account</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Maker Fee:</span>
                      <span className="text-sm font-medium">0.10%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Taker Fee:</span>
                      <span className="text-sm font-medium">0.20%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Withdrawal Fee:</span>
                      <span className="text-sm font-medium">Network cost only</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
