
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, FileText, Clock, Download, Calculator, AlertTriangle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const TaxGuide = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/faq" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to FAQ
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-orange-600 border-orange-300">
              <FileText className="w-4 h-4 mr-2" />
              Tax
            </Badge>
            <div className="flex items-center text-xdeel-gray">
              <Clock className="w-4 h-4 mr-2" />
              20 min read
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Tax Reporting Guide
          </h1>
          <p className="text-xl text-xdeel-gray">
            Comprehensive guide to understanding and reporting your cryptocurrency transactions for tax purposes
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Disclaimer */}
          <Card className="mb-8 border-orange-200 bg-orange-50">
            <CardContent className="p-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Important Disclaimer</h3>
                  <p className="text-orange-700 text-sm">
                    This guide provides general information only and should not be considered as professional tax advice. 
                    Tax laws vary by jurisdiction and change frequently. Always consult with a qualified tax professional 
                    or accountant for advice specific to your situation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Data is Required */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">What Data is Required for Tax Reporting</h2>
              </div>
              
              <p className="text-xdeel-gray mb-6">
                For accurate tax reporting, you'll need detailed records of all your cryptocurrency transactions. 
                Here's what tax authorities typically require:
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Essential Transaction Data</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2">For Each Purchase</h5>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Date and time of transaction</li>
                        <li>• Amount of cryptocurrency purchased</li>
                        <li>• Purchase price in fiat currency</li>
                        <li>• Fees paid</li>
                        <li>• Exchange or platform used</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-2">For Each Sale</h5>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Date and time of transaction</li>
                        <li>• Amount of cryptocurrency sold</li>
                        <li>• Sale price in fiat currency</li>
                        <li>• Fees paid</li>
                        <li>• Original purchase price (cost basis)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Additional Records to Keep</h4>
                  <ul className="text-xdeel-gray space-y-2 ml-4">
                    <li>• Transfers between wallets or exchanges</li>
                    <li>• Cryptocurrency received as income (mining, staking, airdrops)</li>
                    <li>• Cryptocurrency used for purchases</li>
                    <li>• Hard forks and cryptocurrency splits</li>
                    <li>• Screenshots or receipts of all transactions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Transaction History */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Download className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">How to Download Your Transaction History from Xdeel</h2>
              </div>

              <p className="text-xdeel-gray mb-6">
                Xdeel makes it easy to export your complete transaction history for tax reporting purposes.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Step-by-Step Download Process</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                      <div>
                        <h5 className="font-semibold text-xdeel-dark">Log into Your Account</h5>
                        <p className="text-xdeel-gray text-sm">Access your Xdeel account and navigate to the main dashboard.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                      <div>
                        <h5 className="font-semibold text-xdeel-dark">Go to Transaction History</h5>
                        <p className="text-xdeel-gray text-sm">Click on "Account" → "Transaction History" or "Trading History".</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                      <div>
                        <h5 className="font-semibold text-xdeel-dark">Select Date Range</h5>
                        <p className="text-xdeel-gray text-sm">Choose the tax year you need (e.g., January 1 - December 31, 2024).</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                      <div>
                        <h5 className="font-semibold text-xdeel-dark">Download Report</h5>
                        <p className="text-xdeel-gray text-sm">Click "Export" or "Download CSV" to get your complete transaction history.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Available Export Formats</h4>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• <strong>CSV:</strong> Compatible with Excel and most tax software</li>
                    <li>• <strong>PDF:</strong> For record keeping and manual calculations</li>
                    <li>• <strong>API Access:</strong> For advanced users and automated tools</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regional Differences */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Calculator className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Differences by Region</h2>
              </div>

              <p className="text-xdeel-gray mb-6">
                Tax treatment of cryptocurrencies varies significantly by country. Here are the key differences 
                in major jurisdictions where Xdeel operates:
              </p>

              <div className="space-y-6">
                {/* European Union */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-xdeel-dark mb-4">🇪🇺 European Union (General)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-xdeel-dark mb-2">Tax Treatment</h5>
                      <ul className="text-xdeel-gray space-y-1 text-sm">
                        <li>• Capital gains tax on cryptocurrency sales</li>
                        <li>• VAT-exempt for crypto-to-crypto trades</li>
                        <li>• Income tax on mining and staking rewards</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-xdeel-dark mb-2">Reporting Requirements</h5>
                      <ul className="text-xdeel-gray space-y-1 text-sm">
                        <li>• Annual tax returns required</li>
                        <li>• Some countries require crypto holdings disclosure</li>
                        <li>• Professional advice recommended</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Germany */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-xdeel-dark mb-4">🇩🇪 Germany</h4>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Special Rule: 1-Year Holding Period</h5>
                    <p className="text-green-700 text-sm">
                      Cryptocurrencies held for more than 1 year are tax-free when sold. 
                      Gains from sales within 1 year are subject to income tax.
                    </p>
                  </div>
                </div>

                {/* Poland */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-xdeel-dark mb-4">🇵🇱 Poland</h4>
                  <ul className="text-xdeel-gray space-y-1 text-sm">
                    <li>• 19% flat tax on cryptocurrency gains</li>
                    <li>• Each transaction is a taxable event</li>
                    <li>• Annual PIT-38 form required for reporting</li>
                  </ul>
                </div>

                {/* UK */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-xdeel-dark mb-4">🇬🇧 United Kingdom</h4>
                  <ul className="text-xdeel-gray space-y-1 text-sm">
                    <li>• Capital gains tax with annual allowance (£6,000 for 2023/24)</li>
                    <li>• HMRC requires detailed transaction records</li>
                    <li>• Different rules for trading vs. investing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What to Declare */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-6">What to Declare and When</h2>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Taxable Events</h4>
                  <p className="text-xdeel-gray mb-4">
                    Most tax authorities consider these events as taxable:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <h5 className="font-semibold text-red-800 mb-2">Always Taxable</h5>
                      <ul className="text-red-700 space-y-1 text-sm">
                        <li>• Selling crypto for fiat currency</li>
                        <li>• Trading one crypto for another</li>
                        <li>• Using crypto to buy goods/services</li>
                        <li>• Receiving crypto as income</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h5 className="font-semibold text-green-800 mb-2">Usually Not Taxable</h5>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Buying crypto with fiat currency</li>
                        <li>• Transferring between your own wallets</li>
                        <li>• Holding cryptocurrency (no gain/loss)</li>
                        <li>• Gifting crypto (varies by country)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Reporting Deadlines</h4>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 mb-2">⏰ Important Dates</h5>
                    <ul className="text-yellow-700 space-y-1 text-sm">
                      <li>• <strong>Most EU countries:</strong> March 31 - May 31 (varies by country)</li>
                      <li>• <strong>UK:</strong> January 31 following the tax year</li>
                      <li>• <strong>Check local deadlines</strong> as they vary significantly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tax Tools */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Tools to Help Automate Crypto Tax Filing</h2>
              
              <p className="text-xdeel-gray mb-6">
                Several specialized software tools can help automate the process of calculating crypto taxes:
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-4">Popular Crypto Tax Software</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-xdeel-dark mb-2">Koinly</h5>
                      <p className="text-xdeel-gray text-sm mb-2">Comprehensive crypto tax software with support for 50+ countries</p>
                      <ul className="text-xdeel-gray text-xs space-y-1">
                        <li>• Automatic transaction import</li>
                        <li>• Multiple tax calculation methods</li>
                        <li>• Professional reports</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-xdeel-dark mb-2">CoinTracker</h5>
                      <p className="text-xdeel-gray text-sm mb-2">User-friendly platform with portfolio tracking</p>
                      <ul className="text-xdeel-gray text-xs space-y-1">
                        <li>• Real-time portfolio tracking</li>
                        <li>• Tax loss harvesting</li>
                        <li>• API integrations</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-xdeel-dark mb-2">Accointing</h5>
                      <p className="text-xdeel-gray text-sm mb-2">European-focused with GDPR compliance</p>
                      <ul className="text-xdeel-gray text-xs space-y-1">
                        <li>• EU tax law compliance</li>
                        <li>• Privacy-focused</li>
                        <li>• Multi-language support</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-xdeel-dark mb-2">Blockpit</h5>
                      <p className="text-xdeel-gray text-sm mb-2">Specialized for German and Austrian tax laws</p>
                      <ul className="text-xdeel-gray text-xs space-y-1">
                        <li>• DACH region focus</li>
                        <li>• Professional grade reporting</li>
                        <li>• Tax advisor partnerships</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">How These Tools Work</h4>
                  <ol className="text-xdeel-gray space-y-2 ml-4">
                    <li>1. <strong>Import your transactions:</strong> Upload your Xdeel CSV file or connect via API</li>
                    <li>2. <strong>Automatic categorization:</strong> The software categorizes your transactions</li>
                    <li>3. <strong>Calculate gains/losses:</strong> Uses FIFO, LIFO, or other methods to calculate taxes</li>
                    <li>4. <strong>Generate reports:</strong> Creates tax reports compatible with your country's requirements</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-xdeel-dark mb-4">Need Help with Tax Reporting?</h3>
            <p className="text-xdeel-gray mb-6">
              Remember: This guide is for informational purposes only. Always consult with a qualified tax professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Download Transaction History
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                Find Tax Professional
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TaxGuide;
