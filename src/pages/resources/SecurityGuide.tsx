
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Shield, Lock, Clock, Smartphone, Eye, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityGuide = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/faq" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to FAQ
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-red-600 border-red-300">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </Badge>
            <div className="flex items-center text-xdeel-gray">
              <Clock className="w-4 h-4 mr-2" />
              10 min read
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Security Best Practices
          </h1>
          <p className="text-xl text-xdeel-gray">
            Essential security practices every Xdeel user should follow to protect their account and funds
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Strong Passwords */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Use Unique, Strong Passwords</h2>
              </div>
              <p className="text-xdeel-gray mb-4">
                Your password is the first line of defense. A strong password significantly reduces the risk of unauthorized access.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">✓ Do This</h4>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Use at least 12 characters</li>
                    <li>• Mix uppercase, lowercase, numbers, symbols</li>
                    <li>• Use a unique password for Xdeel</li>
                    <li>• Consider using a passphrase</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">✗ Avoid This</h4>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Using the same password everywhere</li>
                    <li>• Personal information (birthdays, names)</li>
                    <li>• Common passwords (123456, password)</li>
                    <li>• Sharing your password</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Recommended Password Managers</h4>
                <p className="text-blue-700 text-sm mb-2">Use a password manager to generate and store unique passwords securely:</p>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• <strong>1Password</strong> - Premium option with excellent security</li>
                  <li>• <strong>Bitwarden</strong> - Open-source with free tier</li>
                  <li>• <strong>LastPass</strong> - Popular choice with good features</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 2FA */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Smartphone className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Enable Two-Factor Authentication (2FA)</h2>
              </div>
              <p className="text-xdeel-gray mb-6">
                2FA adds an extra layer of security by requiring a second form of verification beyond your password.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">How to Enable 2FA on Xdeel:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                      <div>
                        <p className="text-xdeel-gray">Go to Account Settings → Security</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                      <div>
                        <p className="text-xdeel-gray">Click "Enable 2FA" and scan the QR code with your authenticator app</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                      <div>
                        <p className="text-xdeel-gray">Enter the 6-digit code from your app to confirm setup</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                      <div>
                        <p className="text-xdeel-gray">Save your backup codes in a secure location</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Recommended Authenticator Apps</h4>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• <strong>Google Authenticator</strong> - Simple and reliable</li>
                    <li>• <strong>Authy</strong> - Cloud backup and multi-device sync</li>
                    <li>• <strong>Microsoft Authenticator</strong> - Integrated with Microsoft services</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phishing Protection */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Beware of Phishing and Fake Support</h2>
              </div>
              <p className="text-xdeel-gray mb-6">
                Scammers often impersonate Xdeel to steal your credentials. Learn how to identify and avoid these threats.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">How to Identify Phishing Attempts:</h4>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• <strong>Fake URLs:</strong> Always check you're on the real xdeel.com (look for the lock icon)</li>
                      <li>• <strong>Urgent emails:</strong> "Account will be closed" or "Immediate action required"</li>
                      <li>• <strong>Grammar errors:</strong> Poor spelling and grammar in official communications</li>
                      <li>• <strong>Requesting passwords:</strong> Xdeel will NEVER ask for your password via email</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Fake Support Agents:</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-700 text-sm mb-2">
                      <strong>Remember:</strong> Xdeel support will only contact you through official channels:
                    </p>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Official support email: support@xdeel.com</li>
                      <li>• Phone: +48 66 224 8895</li>
                      <li>• Live chat on xdeel.com</li>
                      <li>• We will NEVER contact you on social media asking for personal information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Login History */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Regularly Review Your Login History</h2>
              </div>
              <p className="text-xdeel-gray mb-4">
                Monitor your account activity to detect any unauthorized access attempts.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-2">How to Check Your Login History:</h4>
                  <ol className="text-xdeel-gray space-y-2 ml-4">
                    <li>1. Log into your Xdeel account</li>
                    <li>2. Go to Account Settings → Security</li>
                    <li>3. Click "Login History" or "Account Activity"</li>
                    <li>4. Review recent logins for unfamiliar locations or devices</li>
                  </ol>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">⚠️ What to Do If You See Suspicious Activity:</h4>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• Change your password immediately</li>
                    <li>• Enable 2FA if not already active</li>
                    <li>• Contact Xdeel support at support@xdeel.com</li>
                    <li>• Log out all devices from your account settings</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Device Security */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Secure Your Devices and Keep Apps Updated</h2>
              <p className="text-xdeel-gray mb-6">
                Your device security directly impacts your account security. Keep everything updated and secure.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Device Security Checklist:</h4>
                  <ul className="text-xdeel-gray space-y-2 text-sm">
                    <li>• Use device lock screens (PIN, fingerprint, face unlock)</li>
                    <li>• Install security updates promptly</li>
                    <li>• Use antivirus software on Windows/Android</li>
                    <li>• Avoid public WiFi for trading</li>
                    <li>• Log out when using shared devices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Browser Security:</h4>
                  <ul className="text-xdeel-gray space-y-2 text-sm">
                    <li>• Keep browsers updated</li>
                    <li>• Use reputable browsers (Chrome, Firefox, Safari)</li>
                    <li>• Clear cache/cookies regularly</li>
                    <li>• Bookmark xdeel.com to avoid typing URLs</li>
                    <li>• Use browser's built-in password manager or external one</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-xdeel-dark mb-4">Need Help with Security?</h3>
            <p className="text-xdeel-gray mb-6">
              Our security team is available 24/7 to help you secure your account.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary/90">
                Contact Security Team
              </Button>
              <Button variant="outline" size="lg">
                Enable 2FA Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SecurityGuide;
