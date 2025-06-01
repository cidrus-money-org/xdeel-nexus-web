
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { ArrowLeft, Shield, Wallet, Key, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const WalletProtection = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base">Knowledge Base</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base/security">Security</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Protecting Your Wallet</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-red-600 border-red-300">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </Badge>
            <span className="text-xdeel-gray">Last updated: 2 weeks ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Protecting Your Cryptocurrency Wallet
          </h1>
          <p className="text-xl text-xdeel-gray">
            Essential practices to keep your digital assets safe and secure
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Wallet className="w-6 h-6 mr-3 text-xdeel-primary" />
              Types of Wallets
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Hot Wallets</h3>
                  <p className="text-xdeel-gray text-sm">Connected to the internet, convenient for trading</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Cold Wallets</h3>
                  <p className="text-xdeel-gray text-sm">Offline storage, most secure for long-term holding</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Key className="w-6 h-6 mr-3 text-xdeel-primary" />
              Private Key Security
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Never Share Your Private Keys</h3>
                <p className="text-xdeel-gray">
                  Your private key is like your wallet's master password. Anyone with access to it can control your funds. Never share it with anyone, including support staff.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Backup Your Seed Phrase</h3>
                <p className="text-xdeel-gray">
                  Write down your seed phrase (recovery words) on paper and store it in a secure location. Consider using multiple copies in different secure locations.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Use Hardware Wallets for Large Amounts</h3>
                <p className="text-xdeel-gray">
                  For significant cryptocurrency holdings, consider using a hardware wallet like Ledger or Trezor for maximum security.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-xdeel-primary" />
              Best Practices
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Keep Software Updated</h4>
                  <p className="text-xdeel-gray">Always use the latest version of your wallet software</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Use Strong Passwords</h4>
                  <p className="text-xdeel-gray">Create unique, complex passwords for all wallet applications</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Verify Addresses</h4>
                  <p className="text-xdeel-gray">Always double-check recipient addresses before sending funds</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Test Small Amounts First</h4>
                  <p className="text-xdeel-gray">Send a small test transaction before transferring large amounts</p>
                </div>
              </div>
            </div>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Security Reminder</h3>
                <p className="text-green-800">
                  Remember: In cryptocurrency, you are your own bank. Taking responsibility for security is essential to protecting your digital assets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WalletProtection;
