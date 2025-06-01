
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
import { ArrowLeft, Clock, Calendar, Share2, Users, FileText, Camera, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const VerificationGuide = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
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
              <BreadcrumbPage>Identity Verification</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-purple-600 border-purple-300">
              <Users className="w-4 h-4 mr-2" />
              Getting Started
            </Badge>
            <div className="flex items-center text-xdeel-gray space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                12 min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: Dec 1, 2024
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Complete Identity Verification Guide
          </h1>
          <p className="text-xl text-xdeel-gray">
            Step-by-step KYC verification process to unlock full platform features
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Required Documents</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-xdeel-dark">Government ID</h4>
                    <p className="text-xdeel-gray text-sm">Passport, driver's license, or national ID card</p>
                  </div>
                  
                  <div className="text-center p-4 border rounded-lg">
                    <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-xdeel-dark">Proof of Address</h4>
                    <p className="text-xdeel-gray text-sm">Utility bill or bank statement (less than 3 months old)</p>
                  </div>
                  
                  <div className="text-center p-4 border rounded-lg">
                    <Camera className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-xdeel-dark">Selfie</h4>
                    <p className="text-xdeel-gray text-sm">Clear photo holding your ID document</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Verification Process</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Personal Information</h4>
                      <p className="text-xdeel-gray">Enter your full legal name, date of birth, and address as they appear on your documents.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Document Upload</h4>
                      <p className="text-xdeel-gray mb-3">Upload clear, high-quality photos of your identification documents.</p>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Photo Requirements:</h5>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• All corners of the document visible</li>
                          <li>• No glare or shadows</li>
                          <li>• Text must be clearly readable</li>
                          <li>• Document must be valid and not expired</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Identity Verification</h4>
                      <p className="text-xdeel-gray">Take a selfie holding your ID document next to your face for identity confirmation.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xdeel-dark mb-2">Review and Approval</h4>
                      <p className="text-xdeel-gray">Our team reviews your submission within 24-48 hours. You'll receive email updates on your verification status.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Complete Your Verification Today</h3>
              <p className="text-white/90 mb-6">
                Unlock higher trading limits and full access to all Xdeel features with quick KYC verification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Start Verification
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Learn About KYC
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

export default VerificationGuide;
