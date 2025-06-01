
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
import { ArrowLeft, Shield, Smartphone, Key, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Enable2FA = () => {
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
              <BreadcrumbPage>How to Enable 2FA</BreadcrumbPage>
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
            <span className="text-xdeel-gray">Last updated: 1 week ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            How to Enable Two-Factor Authentication (2FA)
          </h1>
          <p className="text-xl text-xdeel-gray">
            Secure your Xdeel account with an extra layer of protection using two-factor authentication
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <Card className="mb-8 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Why Enable 2FA?</h3>
                    <p className="text-blue-800">
                      Two-factor authentication adds an extra security layer by requiring both your password and a verification code from your mobile device to access your account.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Smartphone className="w-6 h-6 mr-3 text-xdeel-primary" />
              Step 1: Download an Authenticator App
            </h2>
            
            <p className="text-lg text-xdeel-gray mb-6">
              First, you'll need to install an authenticator app on your smartphone. We recommend:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Google Authenticator</h3>
                  <p className="text-xdeel-gray text-sm">Free, reliable, and widely supported</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Authy</h3>
                  <p className="text-xdeel-gray text-sm">Multi-device support with cloud backup</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Key className="w-6 h-6 mr-3 text-xdeel-primary" />
              Step 2: Enable 2FA in Your Xdeel Account
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Log into your Xdeel account</h4>
                  <p className="text-xdeel-gray">Navigate to your account dashboard</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Go to Security Settings</h4>
                  <p className="text-xdeel-gray">Click on "Account" → "Security" in the navigation menu</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Find Two-Factor Authentication</h4>
                  <p className="text-xdeel-gray">Look for the "2FA" or "Two-Factor Authentication" section</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Click "Enable 2FA"</h4>
                  <p className="text-xdeel-gray">You'll see a QR code appear on your screen</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">5</div>
                <div>
                  <h4 className="font-semibold mb-1">Scan the QR Code</h4>
                  <p className="text-xdeel-gray">Open your authenticator app and scan the QR code</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">6</div>
                <div>
                  <h4 className="font-semibold mb-1">Enter the Verification Code</h4>
                  <p className="text-xdeel-gray">Type the 6-digit code from your authenticator app</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">7</div>
                <div>
                  <h4 className="font-semibold mb-1">Save Your Backup Codes</h4>
                  <p className="text-xdeel-gray">Download and securely store the backup codes provided</p>
                </div>
              </div>
            </div>

            <Card className="mb-8 border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-orange-900 mb-2">Important: Save Your Backup Codes</h3>
                    <p className="text-orange-800">
                      Keep your backup codes in a safe place. If you lose access to your authenticator app, these codes are the only way to regain access to your account.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">
              Troubleshooting Common Issues
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">QR Code Won't Scan</h3>
                <p className="text-xdeel-gray">
                  If the QR code isn't scanning, try manually entering the secret key provided below the QR code into your authenticator app.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Code Not Working</h3>
                <p className="text-xdeel-gray">
                  Make sure your phone's time is synchronized. Authenticator codes are time-sensitive and require accurate device time.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Lost Access to Authenticator</h3>
                <p className="text-xdeel-gray">
                  Use one of your backup codes to log in, then set up 2FA again with a new device. Contact support if you've lost both your device and backup codes.
                </p>
              </div>
            </div>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-2">You're All Set!</h3>
                    <p className="text-green-800">
                      Your account is now protected with two-factor authentication. You'll need to enter a code from your authenticator app each time you log in.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Enable2FA;
