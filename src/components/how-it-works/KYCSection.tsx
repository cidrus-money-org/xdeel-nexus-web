
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, CircleCheck } from "lucide-react";

export const KYCSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
            Compliance
          </Badge>
          <h2 className="text-3xl font-bold text-xdeel-dark mb-4">
            KYC Verification Process
          </h2>
          <p className="text-xdeel-gray max-w-2xl mx-auto">
            As a regulated exchange, we require identity verification to comply with KNF regulations and protect our users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4 text-xdeel-dark">Why KYC is Required</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-xdeel-primary mr-3 mt-1" />
                <div>
                  <span className="font-medium block">Prevent Fraud</span>
                  <p className="text-sm text-xdeel-gray">
                    KYC helps us prevent identity theft, money laundering, and other fraudulent activities on our platform.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-xdeel-primary mr-3 mt-1" />
                <div>
                  <span className="font-medium block">Regulatory Compliance</span>
                  <p className="text-sm text-xdeel-gray">
                    As an authorized exchange by KNF (Polish Financial Supervision Authority), we must verify the identity of our users.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-xdeel-primary mr-3 mt-1" />
                <div>
                  <span className="font-medium block">Account Security</span>
                  <p className="text-sm text-xdeel-gray">
                    KYC ensures that only you can access your account and funds, adding an extra layer of security.
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white">
                Learn More About KYC Requirements
              </Button>
            </div>
          </div>
          
          <Card className="bg-xdeel-purple border-0 shadow-md">
            <CardHeader>
              <CardTitle>KYC Process Overview</CardTitle>
              <CardDescription>Complete verification in as little as 2 minutes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <div className="bg-xdeel-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium">Upload ID Document</h4>
                  <p className="text-sm text-xdeel-gray">Passport, ID card, or driver's license</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-xdeel-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium">Take a Selfie</h4>
                  <p className="text-sm text-xdeel-gray">A quick photo for identity verification</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-xdeel-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium">Proof of Address</h4>
                  <p className="text-sm text-xdeel-gray">Utility bill or bank statement from the last 3 months</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-xdeel-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium">Review & Approval</h4>
                  <p className="text-sm text-xdeel-gray">Typically completed within 24 hours</p>
                </div>
              </div>
              
              <Alert className="bg-green-50 border-green-200">
                <CircleCheck className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 text-sm">
                  Many users receive instant approval with our automated verification system.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
