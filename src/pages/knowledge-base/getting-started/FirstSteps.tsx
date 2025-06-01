
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
import { ArrowLeft, Clock, Calendar, Share2, Users, Shield, Wallet, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const FirstSteps = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
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
              <BreadcrumbPage>First Steps</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-green-600 border-green-300">
              <Users className="w-4 h-4 mr-2" />
              Getting Started
            </Badge>
            <div className="flex items-center text-xdeel-gray space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                10 min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: Dec 1, 2024
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            First Steps After Account Creation
          </h1>
          <p className="text-xl text-xdeel-gray">
            Essential actions to take after setting up your Xdeel account
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Essential First Steps</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 border rounded-lg bg-blue-50 border-blue-200">
                    <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-xdeel-dark mb-2">Enable 2FA</h4>
                    <p className="text-xdeel-gray text-sm">Secure your account with two-factor authentication</p>
                  </div>
                  
                  <div className="text-center p-6 border rounded-lg bg-green-50 border-green-200">
                    <Wallet className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-xdeel-dark mb-2">Add Payment Method</h4>
                    <p className="text-xdeel-gray text-sm">Connect your bank account or debit card</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Security Setup Priority</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Enable Two-Factor Authentication (2FA)</h4>
                      <p className="text-xdeel-gray mb-3">This is your most important security step. 2FA adds an extra layer of protection to your account.</p>
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <p className="text-red-700 text-sm">
                          <strong>Critical:</strong> Never skip this step. 2FA prevents unauthorized access even if your password is compromised.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Set Up Email Notifications</h4>
                      <p className="text-xdeel-gray">Configure alerts for login attempts, transactions, and security changes.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Review Privacy Settings</h4>
                      <p className="text-xdeel-gray">Adjust your privacy preferences and understand data usage policies.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready for Your First Trade?</h3>
              <p className="text-white/90 mb-6">
                Complete these essential steps and start trading cryptocurrencies securely on Xdeel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  View Trading Guide
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Explore Security Features
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

export default FirstSteps;
