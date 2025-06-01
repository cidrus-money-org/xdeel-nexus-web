
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { ArrowLeft, Clock, Calendar, Share2, Users, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AccountSetup = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
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
                  <Link to="/knowledge-base#getting-started">Getting Started</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Account Setup</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-blue-600 border-blue-300">
              <Users className="w-4 h-4 mr-2" />
              Getting Started
            </Badge>
            <div className="flex items-center text-xdeel-gray space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                8 min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: Dec 1, 2024
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            How to Set Up Your Xdeel Account
          </h1>
          <p className="text-xl text-xdeel-gray">
            Complete guide to creating and verifying your account
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Creating Your Account</h2>
                <p className="text-xdeel-gray mb-6">
                  Setting up your Xdeel account is quick and straightforward. Follow these steps to get started with secure cryptocurrency trading.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Visit Xdeel Website</h4>
                      <p className="text-xdeel-gray">Go to the Xdeel homepage and click the "Sign Up" button in the top navigation.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Enter Your Information</h4>
                      <p className="text-xdeel-gray mb-3">Provide your email address and create a strong password.</p>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Password Requirements:</h5>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• At least 8 characters long</li>
                          <li>• Include uppercase and lowercase letters</li>
                          <li>• Include at least one number</li>
                          <li>• Include at least one special character</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Verify Your Email</h4>
                      <p className="text-xdeel-gray">Check your inbox for a verification email and click the confirmation link.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Account Verification</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                      <h4 className="font-semibold text-xdeel-dark">Basic Verification</h4>
                    </div>
                    <p className="text-xdeel-gray text-sm mb-3">
                      Complete basic verification to start trading with limited features.
                    </p>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Email verification</li>
                      <li>• Phone number verification</li>
                      <li>• Basic personal information</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                    <div className="flex items-center mb-3">
                      <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-xdeel-dark">Full Verification</h4>
                    </div>
                    <p className="text-xdeel-gray text-sm mb-3">
                      Complete KYC verification for full platform access and higher limits.
                    </p>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Government-issued ID</li>
                      <li>• Proof of address</li>
                      <li>• Selfie verification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Trading?</h3>
              <p className="text-white/90 mb-6">
                Complete your account setup and start your cryptocurrency journey with Xdeel today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Create Account Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Learn About Verification
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

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

export default AccountSetup;
