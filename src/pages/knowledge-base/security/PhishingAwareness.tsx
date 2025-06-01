
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
import { ArrowLeft, Shield, AlertTriangle, Mail, Link2, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const PhishingAwareness = () => {
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
              <BreadcrumbPage>Phishing Awareness</BreadcrumbPage>
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
            Phishing Awareness: Protect Yourself from Scams
          </h1>
          <p className="text-xl text-xdeel-gray">
            Learn to identify and avoid phishing attacks targeting crypto users
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <Card className="mb-8 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Stay Alert</h3>
                    <p className="text-red-800">
                      Phishing attacks are one of the most common ways criminals steal cryptocurrency. Always verify before you trust.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-xdeel-primary" />
              Common Phishing Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Fake Emails</h3>
                  <p className="text-xdeel-gray text-sm">Emails that look like they're from Xdeel but aren't</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Fake Websites</h3>
                  <p className="text-xdeel-gray text-sm">Websites that mimic Xdeel's design to steal login credentials</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Social Media Scams</h3>
                  <p className="text-xdeel-gray text-sm">Fake support accounts offering "help" on social platforms</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">SMS/Text Scams</h3>
                  <p className="text-xdeel-gray text-sm">Text messages claiming urgent account issues</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-xdeel-primary" />
              How to Spot Phishing Attempts
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Check the URL</h3>
                <p className="text-xdeel-gray">
                  Always verify you're on the real Xdeel website. Look for "https://xdeel.com" in your browser's address bar. Be wary of slight variations like "xdee1.com" or "xdeel-app.com".
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Examine Email Addresses</h3>
                <p className="text-xdeel-gray">
                  Legitimate Xdeel emails come from @xdeel.com addresses. Be suspicious of emails from free email providers or domains that look similar to Xdeel.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Look for Urgency Tactics</h3>
                <p className="text-xdeel-gray">
                  Phishing messages often create false urgency ("Your account will be closed in 24 hours!"). Xdeel will never threaten immediate account closure via email.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Grammar and Spelling</h3>
                <p className="text-xdeel-gray">
                  Professional companies like Xdeel proofread their communications. Multiple spelling errors or poor grammar are red flags.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">
              What to Do If You Suspect Phishing
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Don't click any links</h4>
                  <p className="text-xdeel-gray">Close the suspicious email or message immediately</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Log in directly</h4>
                  <p className="text-xdeel-gray">Go to xdeel.com directly by typing it in your browser</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Check your account</h4>
                  <p className="text-xdeel-gray">Review your account status and recent activity</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Report the attempt</h4>
                  <p className="text-xdeel-gray">Forward phishing emails to security@xdeel.com</p>
                </div>
              </div>
            </div>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Remember</h3>
                <p className="text-green-800">
                  Xdeel will never ask for your password, 2FA codes, or private keys via email, SMS, or social media. When in doubt, contact our official support team directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PhishingAwareness;
