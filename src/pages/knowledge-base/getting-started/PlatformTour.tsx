
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
import { ArrowLeft, Clock, Calendar, Share2, Users, BarChart2, Wallet, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const PlatformTour = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
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
              <BreadcrumbPage>Platform Tour</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-indigo-600 border-indigo-300">
              <Users className="w-4 h-4 mr-2" />
              Getting Started
            </Badge>
            <div className="flex items-center text-xdeel-gray space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                15 min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: Dec 1, 2024
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Xdeel Platform Tour
          </h1>
          <p className="text-xl text-xdeel-gray">
            Get familiar with the Xdeel interface and discover all available features
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Main Dashboard</h2>
                <p className="text-xdeel-gray mb-6">
                  Your dashboard is your command center for all cryptocurrency activities. Here's what you'll find:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                    <div className="flex items-center mb-3">
                      <BarChart2 className="w-6 h-6 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-xdeel-dark">Portfolio Overview</h4>
                    </div>
                    <p className="text-xdeel-gray text-sm">
                      Track your total balance, portfolio performance, and asset allocation at a glance.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                    <div className="flex items-center mb-3">
                      <Wallet className="w-6 h-6 text-green-600 mr-2" />
                      <h4 className="font-semibold text-xdeel-dark">Quick Actions</h4>
                    </div>
                    <p className="text-xdeel-gray text-sm">
                      Access buy, sell, deposit, and withdrawal functions with one-click convenience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Key Platform Areas</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Trading Interface</h4>
                      <p className="text-xdeel-gray mb-3">
                        Access professional trading tools including real-time charts, order books, and advanced order types.
                      </p>
                      <ul className="list-disc pl-6 text-xdeel-gray space-y-1 text-sm">
                        <li>Live price charts with technical indicators</li>
                        <li>Market and limit order options</li>
                        <li>Order history and transaction details</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Wallet Management</h4>
                      <p className="text-xdeel-gray mb-3">
                        Manage all your cryptocurrency holdings in one secure location.
                      </p>
                      <ul className="list-disc pl-6 text-xdeel-gray space-y-1 text-sm">
                        <li>Individual wallet for each supported cryptocurrency</li>
                        <li>Detailed transaction history</li>
                        <li>Send and receive functionality</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Account Settings</h4>
                      <p className="text-xdeel-gray mb-3">
                        Customize your account preferences and security settings.
                      </p>
                      <ul className="list-disc pl-6 text-xdeel-gray space-y-1 text-sm">
                        <li>Security and authentication settings</li>
                        <li>Notification preferences</li>
                        <li>API key management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Explore the Platform</h3>
              <p className="text-white/90 mb-6">
                Take your time to explore all features and familiarize yourself with the Xdeel platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Access Dashboard
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                  View Trading Guide
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

export default PlatformTour;
