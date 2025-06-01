
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, DollarSign, Clock, CreditCard, Banknote, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FeeSchedule = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/faq" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to FAQ
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-green-600 border-green-300">
              <DollarSign className="w-4 h-4 mr-2" />
              Pricing
            </Badge>
            <div className="flex items-center text-xdeel-gray">
              <Clock className="w-4 h-4 mr-2" />
              5 min read
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Fee Schedule
          </h1>
          <p className="text-xl text-xdeel-gray">
            Transparent breakdown of all fees and charges on the Xdeel platform
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Trading Fees */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <DollarSign className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Trading Fees (Maker/Taker)</h2>
              </div>

              <p className="text-xdeel-gray mb-6">
                Our trading fees are based on your 30-day trading volume and whether you're adding (maker) or removing (taker) liquidity from the order book.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">30-Day Volume (EUR)</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Maker Fee</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Taker Fee</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Account Tier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">€0 - €10,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">0.25%</td>
                      <td className="border border-gray-300 px-4 py-3">0.35%</td>
                      <td className="border border-gray-300 px-4 py-3">Standard</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">€10,001 - €50,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">0.20%</td>
                      <td className="border border-gray-300 px-4 py-3">0.30%</td>
                      <td className="border border-gray-300 px-4 py-3">Bronze</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">€50,001 - €100,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">0.15%</td>
                      <td className="border border-gray-300 px-4 py-3">0.25%</td>
                      <td className="border border-gray-300 px-4 py-3">Silver</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">€100,001 - €500,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">0.10%</td>
                      <td className="border border-gray-300 px-4 py-3">0.20%</td>
                      <td className="border border-gray-300 px-4 py-3">Gold</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">€500,001+</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">0.05%</td>
                      <td className="border border-gray-300 px-4 py-3">0.15%</td>
                      <td className="border border-gray-300 px-4 py-3">Platinum</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">💡 Maker Orders</h4>
                  <p className="text-blue-700 text-sm">
                    Orders that add liquidity to the order book (limit orders that don't execute immediately). 
                    These get lower fees as they help provide market depth.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">⚡ Taker Orders</h4>
                  <p className="text-orange-700 text-sm">
                    Orders that remove liquidity from the order book (market orders or limit orders that execute immediately). 
                    These pay slightly higher fees.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deposit Fees */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Banknote className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Deposit Fees by Asset</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-4">Fiat Currency Deposits</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Payment Method</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fee</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Processing Time</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Min/Max</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">SEPA Bank Transfer</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">Free</td>
                          <td className="border border-gray-300 px-4 py-3">1-2 business days</td>
                          <td className="border border-gray-300 px-4 py-3">€10 - €100,000</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Credit/Debit Card</td>
                          <td className="border border-gray-300 px-4 py-3">3.5%</td>
                          <td className="border border-gray-300 px-4 py-3">Instant</td>
                          <td className="border border-gray-300 px-4 py-3">€10 - €10,000</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">SWIFT Wire Transfer</td>
                          <td className="border border-gray-300 px-4 py-3">€25</td>
                          <td className="border border-gray-300 px-4 py-3">3-5 business days</td>
                          <td className="border border-gray-300 px-4 py-3">€1,000 - €500,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-4">Cryptocurrency Deposits</h4>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <p className="text-green-700 font-semibold">All cryptocurrency deposits are free!</p>
                    <p className="text-green-600 text-sm mt-1">
                      We only require the standard network confirmation requirements for each blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Withdrawal Fees */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Withdrawal Fees</h2>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-4">Fiat Currency Withdrawals</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Method</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fee</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Processing Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">SEPA Bank Transfer</td>
                          <td className="border border-gray-300 px-4 py-3">€2</td>
                          <td className="border border-gray-300 px-4 py-3">1-2 business days</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">SWIFT Wire Transfer</td>
                          <td className="border border-gray-300 px-4 py-3">€35</td>
                          <td className="border border-gray-300 px-4 py-3">3-5 business days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-4">Cryptocurrency Withdrawals</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cryptocurrency</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Network Fee</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Min Withdrawal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Bitcoin (BTC)</td>
                          <td className="border border-gray-300 px-4 py-3">0.0005 BTC</td>
                          <td className="border border-gray-300 px-4 py-3">0.001 BTC</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Ethereum (ETH)</td>
                          <td className="border border-gray-300 px-4 py-3">0.01 ETH</td>
                          <td className="border border-gray-300 px-4 py-3">0.02 ETH</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Litecoin (LTC)</td>
                          <td className="border border-gray-300 px-4 py-3">0.01 LTC</td>
                          <td className="border border-gray-300 px-4 py-3">0.02 LTC</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Other assets</td>
                          <td className="border border-gray-300 px-4 py-3">Variable</td>
                          <td className="border border-gray-300 px-4 py-3">See platform</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card Payment Fees */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <CreditCard className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Card Payment Fees</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">European Cards</h4>
                  <ul className="space-y-2 text-xdeel-gray">
                    <li>• <strong>Visa/Mastercard Debit:</strong> 3.5%</li>
                    <li>• <strong>Visa/Mastercard Credit:</strong> 3.5%</li>
                    <li>• <strong>Maestro:</strong> 3.5%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Non-European Cards</h4>
                  <ul className="space-y-2 text-xdeel-gray">
                    <li>• <strong>All card types:</strong> 3.5% + €0.50</li>
                    <li>• <strong>Currency conversion:</strong> Additional 1.5%</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-blue-800 mb-2">💳 Card Payment Limits</h4>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• Daily limit: €10,000 per verified account</li>
                  <li>• Monthly limit: €50,000 per verified account</li>
                  <li>• Single transaction: €10 minimum, €5,000 maximum</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <HelpCircle className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Fee FAQ</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-2">How are fees calculated?</h4>
                  <p className="text-xdeel-gray">
                    Trading fees are calculated as a percentage of the total trade value. For example, if you buy €1,000 worth of Bitcoin 
                    with a 0.35% taker fee, you'll pay €3.50 in fees.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-2">Where can I view my fees in the dashboard?</h4>
                  <p className="text-xdeel-gray">
                    Go to Account → Trading History to see a detailed breakdown of all fees paid. You can also view your current 
                    fee tier in Account → Settings → Trading Fees.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-2">Do you offer fee discounts?</h4>
                  <p className="text-xdeel-gray">
                    Yes! Higher trading volumes automatically qualify you for lower fees. We also offer special rates for institutional 
                    clients and market makers. Contact our business team for custom pricing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-2">Are there any hidden fees?</h4>
                  <p className="text-xdeel-gray">
                    No hidden fees, ever. All fees are clearly displayed before you confirm any transaction. What you see is what you pay.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-xdeel-dark mb-4">Questions About Fees?</h3>
            <p className="text-xdeel-gray mb-6">
              Our support team is here to help explain our fee structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary/90">
                Contact Support
              </Button>
              <Button variant="outline" size="lg">
                View Account Fees
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeeSchedule;
