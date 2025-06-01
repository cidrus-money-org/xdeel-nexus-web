
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
import { ArrowLeft, Bitcoin, Key, Lock, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Keys = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
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
                  <Link to="/knowledge-base/crypto-101">Blockchain & Crypto 101</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Private and Public Keys</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-orange-600 border-orange-300">
              <Bitcoin className="w-4 h-4 mr-2" />
              Blockchain & Crypto 101
            </Badge>
            <span className="text-xdeel-gray">Last updated: 3 weeks ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            What Are Private and Public Keys?
          </h1>
          <p className="text-xl text-xdeel-gray">
            Understanding the cryptographic keys that secure your cryptocurrency
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-xdeel-primary" />
              Public Keys
            </h2>
            
            <p className="text-lg text-xdeel-gray mb-6">
              A public key is like your bank account number - it's safe to share with others and is used to receive cryptocurrency. When someone wants to send you crypto, they use your public key (or the wallet address derived from it).
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Safe to Share</h3>
                  <p className="text-xdeel-gray text-sm">You can publicly share your public key or wallet address</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Receive Funds</h3>
                  <p className="text-xdeel-gray text-sm">Others use your public key to send you cryptocurrency</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Verify Signatures</h3>
                  <p className="text-xdeel-gray text-sm">Used to verify that transactions were signed by the private key</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Derived from Private Key</h3>
                  <p className="text-xdeel-gray text-sm">Mathematical relationship but can't be reversed</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-xdeel-primary" />
              Private Keys
            </h2>
            
            <p className="text-lg text-xdeel-gray mb-6">
              A private key is like your PIN code or password - it must be kept secret at all times. This key gives you complete control over your cryptocurrency and is used to sign transactions when sending funds.
            </p>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Complete Control</h3>
                <p className="text-xdeel-gray">
                  Whoever has your private key has full control of your cryptocurrency. This is why the phrase "not your keys, not your crypto" exists.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Never Share</h3>
                <p className="text-xdeel-gray">
                  Never share your private key with anyone, including customer support. Legitimate services will never ask for your private key.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Backup Securely</h3>
                <p className="text-xdeel-gray">
                  Write down your private key or seed phrase and store it in a secure, offline location. If you lose it, you lose access to your funds forever.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Key className="w-6 h-6 mr-3 text-xdeel-primary" />
              How They Work Together
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Key Generation</h4>
                  <p className="text-xdeel-gray">A private key is generated randomly, and the public key is derived from it</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Address Creation</h4>
                  <p className="text-xdeel-gray">The public key is used to create your wallet address</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Receiving Funds</h4>
                  <p className="text-xdeel-gray">Others send crypto to your wallet address (derived from your public key)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Sending Funds</h4>
                  <p className="text-xdeel-gray">You use your private key to sign transactions when sending crypto</p>
                </div>
              </div>
            </div>

            <Card className="mb-8 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Security Warning</h3>
                <p className="text-red-800">
                  If someone gains access to your private key, they can steal all your cryptocurrency. Always keep it secret and secure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Remember</h3>
                <p className="text-green-800">
                  Public key = Bank account number (safe to share). Private key = PIN code (never share). This is the foundation of cryptocurrency security.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Keys;
