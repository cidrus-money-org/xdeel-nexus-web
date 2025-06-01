
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Calendar, Share2, Shield, Lock, Smartphone, Key } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityGuide = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-red-600 border-red-300">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </Badge>
            <div className="flex items-center text-xdeel-gray space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                10 min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: Nov 28, 2024
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Security Best Practices
          </h1>
          <p className="text-xl text-xdeel-gray">
            Essential security measures every crypto user should follow
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Why Security Matters</h2>
                <p className="text-xdeel-gray mb-6">
                  Cryptocurrency transactions are irreversible, making security paramount. Unlike traditional 
                  banking, there's no central authority to reverse fraudulent transactions or recover lost funds.
                </p>
                
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">🚨 Remember</h4>
                  <p className="text-red-700">
                    You are your own bank in the crypto world. The security of your assets is entirely in your hands.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Account Security Fundamentals</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                      <Lock className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Strong, Unique Passwords</h4>
                      <p className="text-xdeel-gray mb-3">
                        Use a password that's at least 12 characters long with a mix of uppercase, lowercase, 
                        numbers, and symbols. Never reuse passwords across different platforms.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <strong>Tip:</strong> Use a password manager like 1Password, Bitwarden, or LastPass 
                          to generate and store unique passwords securely.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Enable Two-Factor Authentication (2FA)</h4>
                      <p className="text-xdeel-gray mb-3">
                        2FA adds an extra layer of security by requiring a second form of verification. 
                        Even if someone gets your password, they won't be able to access your account.
                      </p>
                      <div className="space-y-2">
                        <div className="bg-green-50 p-3 rounded border border-green-200">
                          <p className="text-sm text-green-700">
                            <strong>Recommended:</strong> Use authenticator apps like Google Authenticator, 
                            Authy, or Microsoft Authenticator
                          </p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                          <p className="text-sm text-yellow-700">
                            <strong>Avoid:</strong> SMS-based 2FA when possible, as it's vulnerable to SIM swapping attacks
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Recognizing and Avoiding Phishing</h2>
                
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400 mb-6">
                  <h4 className="font-semibold text-orange-800 mb-2">⚠️ Common Phishing Tactics</h4>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• Fake emails claiming urgent account verification needed</li>
                    <li>• Suspicious links in social media messages</li>
                    <li>• Fake customer support asking for private keys or passwords</li>
                    <li>• Websites that look like Xdeel but have slightly different URLs</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-xdeel-dark">How to Stay Safe:</h4>
                    <ul className="space-y-2 text-xdeel-gray text-sm">
                      <li>• Always type xdeel.com directly into your browser</li>
                      <li>• Check for the padlock icon and "https://" in the URL</li>
                      <li>• Bookmark the official Xdeel website</li>
                      <li>• Never click links in suspicious emails</li>
                      <li>• Verify communications through official channels</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-xdeel-dark">Red Flags:</h4>
                    <ul className="space-y-2 text-xdeel-gray text-sm">
                      <li>• Urgent language ("Act now or lose access!")</li>
                      <li>• Requests for private keys or seed phrases</li>
                      <li>• Suspicious sender addresses</li>
                      <li>• Grammatical errors and poor formatting</li>
                      <li>• Unexpected verification requests</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Wallet Security</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                      <Key className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Private Key Management</h4>
                      <p className="text-xdeel-gray mb-3">
                        Your private keys are the most important piece of information in crypto. 
                        They control access to your funds.
                      </p>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-sm text-red-700">
                          <strong>Never share your private keys, seed phrases, or recovery words with anyone.</strong> 
                          Xdeel will never ask for this information.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xdeel-dark mb-3">Best Practices for Key Storage:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h5 className="font-medium text-green-800 mb-2">✓ Do</h5>
                        <ul className="text-green-700 space-y-1 text-sm">
                          <li>• Write down seed phrases on paper</li>
                          <li>• Store in multiple secure locations</li>
                          <li>• Use hardware wallets for large amounts</li>
                          <li>• Keep backups in fireproof safes</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h5 className="font-medium text-red-800 mb-2">✗ Don't</h5>
                        <ul className="text-red-700 space-y-1 text-sm">
                          <li>• Store keys digitally on connected devices</li>
                          <li>• Take photos of seed phrases</li>
                          <li>• Store in cloud storage</li>
                          <li>• Share with family without proper security</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Secure Your Account Today</h3>
              <p className="text-white/90 mb-6">
                Take a few minutes now to implement these security measures and protect your crypto assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Enable 2FA Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  Security Settings
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

export default SecurityGuide;
