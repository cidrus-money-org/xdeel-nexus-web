import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  UserPlus, 
  CreditCard, 
  Wallet, 
  ArrowRight, 
  Check, 
  Shield, 
  Clock, 
  LockKeyhole, 
  HelpCircle,
  CircleCheck,
  AlertCircle,
  ArrowDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { FAQSection } from "@/components/how-it-works/FAQSection";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Sign Up and Create Your Xdeel Account",
      description: "Quick registration process with email verification. Complete your profile setup and get ready to start trading cryptocurrencies.",
      time: "2 minutes",
      details: "Email verification, basic information, secure password setup",
      benefits: [
        "No credit checks required",
        "Simple identity verification",
        "Quick KYC approval process",
        "Instant account activation"
      ],
      timeline: [
        { step: 1, title: "Fill basic registration form", time: "30 seconds" },
        { step: 2, title: "Verify email address", time: "1 minute" },
        { step: 3, title: "Complete KYC verification", time: "varies" }
      ]
    },
    {
      step: "02", 
      icon: CreditCard,
      title: "Select Your Preferred Deposit Method",
      description: "Choose from various payment options including bank transfers, debit/credit cards, and other supported payment methods.",
      time: "Instant",
      details: "Bank transfer, credit/debit cards, local payment methods",
      benefits: [
        "Multiple payment methods",
        "No hidden fees",
        "Competitive exchange rates",
        "Instant deposits available"
      ],
      timeline: [
        { step: 1, title: "Select payment method", time: "10 seconds" },
        { step: 2, title: "Enter payment details", time: "30 seconds" },
        { step: 3, title: "Confirm transaction", time: "10 seconds" }
      ]
    },
    {
      step: "03",
      icon: Wallet,
      title: "Instantly Purchase and Sell Cryptocurrencies",
      description: "Start buying, selling, and trading cryptocurrencies with real-time prices and immediate transaction processing.",
      time: "Real-time",
      details: "Live market prices, instant execution, secure transactions",
      benefits: [
        "Real-time market data",
        "Instant trade execution",
        "Low transaction fees",
        "Secure wallet storage"
      ],
      timeline: [
        { step: 1, title: "Select cryptocurrency", time: "5 seconds" },
        { step: 2, title: "Enter amount to buy/sell", time: "10 seconds" },
        { step: 3, title: "Review and confirm transaction", time: "5 seconds" }
      ]
    }
  ];

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
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-xdeel-purple to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
              Getting Started
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
              Your Simple Path to Cryptocurrency Trading
            </h1>
            <p className="text-xl text-xdeel-gray max-w-3xl mx-auto mb-8">
              Xdeel makes cryptocurrency trading accessible to everyone. Follow our simple, 
              secure process to start your crypto journey in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white">
                Create Account Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn About KYC Requirements
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-xdeel-gray">
              <Shield className="h-4 w-4 text-green-500" />
              <span>KNF Regulated</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 text-green-500" />
              <span>2-Minute Setup</span>
              <span className="mx-2">•</span>
              <LockKeyhole className="h-4 w-4 text-green-500" />
              <span>Bank-Level Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
              How It Works
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-xdeel-gray max-w-3xl mx-auto">
              From registration to your first crypto purchase, we've made the entire 
              process as simple and secure as possible.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white border-gray-200 hover:border-xdeel-primary/50">
                  <CardContent className="p-8">
                    {/* Step Header */}
                    <div className="flex flex-col items-center mb-6">
                      {/* Step Number */}
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-xdeel-primary text-white rounded-full text-xl font-bold mb-4">
                        {step.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-xdeel-purple rounded-lg flex items-center justify-center mb-4">
                        <step.icon className="w-8 h-8 text-xdeel-primary" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-xdeel-dark mb-2 text-center">
                        {step.title}
                      </h3>
                      
                      {/* Time Badge */}
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.time}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-xdeel-gray mb-6 text-center">
                      {step.description}
                    </p>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-medium text-xdeel-dark mb-2 text-center">Benefits</h4>
                      <ul className="space-y-2">
                        {step.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-xdeel-gray">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Timeline */}
                    <div>
                      <h4 className="font-medium text-xdeel-dark mb-2 text-center">Process Timeline</h4>
                      <div className="space-y-3">
                        {step.timeline.map((item, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-xdeel-gray">{item.step}. {item.title}</span>
                            <span className="text-xdeel-primary font-medium">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-xdeel-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
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

      {/* KYC Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
              Compliance
            </Badge>
            <h2 className="text-3xl font-bold text-xdeel-dark mb-4">
              KYC Verification Process
            </h2>
            <p className="text-xdeel-gray max-w-2xl mx-auto">
              As a regulated exchange, we require identity verification to comply with KNF regulations and protect our users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4 text-xdeel-dark">Why KYC is Required</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-xdeel-primary mr-3 mt-1" />
                  <div>
                    <span className="font-medium block">Prevent Fraud</span>
                    <p className="text-sm text-xdeel-gray">
                      KYC helps us prevent identity theft, money laundering, and other fraudulent activities on our platform.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-xdeel-primary mr-3 mt-1" />
                  <div>
                    <span className="font-medium block">Regulatory Compliance</span>
                    <p className="text-sm text-xdeel-gray">
                      As an authorized exchange by KNF (Polish Financial Supervision Authority), we must verify the identity of our users.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-xdeel-primary mr-3 mt-1" />
                  <div>
                    <span className="font-medium block">Account Security</span>
                    <p className="text-sm text-xdeel-gray">
                      KYC ensures that only you can access your account and funds, adding an extra layer of security.
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white">
                  Learn More About KYC Requirements
                </Button>
              </div>
            </div>
            
            <Card className="bg-xdeel-purple border-0 shadow-md">
              <CardHeader>
                <CardTitle>KYC Process Overview</CardTitle>
                <CardDescription>Complete verification in as little as 2 minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-xdeel-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</div>
                  <div>
                    <h4 className="font-medium">Upload ID Document</h4>
                    <p className="text-sm text-xdeel-gray">Passport, ID card, or driver's license</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xdeel-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</div>
                  <div>
                    <h4 className="font-medium">Take a Selfie</h4>
                    <p className="text-sm text-xdeel-gray">A quick photo for identity verification</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xdeel-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</div>
                  <div>
                    <h4 className="font-medium">Proof of Address</h4>
                    <p className="text-sm text-xdeel-gray">Utility bill or bank statement from the last 3 months</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xdeel-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</div>
                  <div>
                    <h4 className="font-medium">Review & Approval</h4>
                    <p className="text-sm text-xdeel-gray">Typically completed within 24 hours</p>
                  </div>
                </div>
                
                <Alert className="bg-green-50 border-green-200">
                  <CircleCheck className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-700 text-sm">
                    Many users receive instant approval with our automated verification system.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-800/90"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardContent className="p-12 text-center">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                KNF Licensed & Regulated
              </Badge>

              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Your Crypto Journey?
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Follow our simple 3-step process and start trading cryptocurrencies in minutes. 
                Join thousands of users who trust Xdeel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/signup">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                    Create Account
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
