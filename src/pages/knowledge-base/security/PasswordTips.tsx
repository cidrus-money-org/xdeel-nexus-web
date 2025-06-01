
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
import { ArrowLeft, Shield, CheckCircle, X } from "lucide-react";
import { Link } from "react-router-dom";

const PasswordTips = () => {
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
              <BreadcrumbPage>Secure Password Tips</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base/security" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Security
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-red-600 border-red-300">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </Badge>
            <span className="text-xdeel-gray">Last updated: 3 weeks ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Secure Password Tips
          </h1>
          <p className="text-xl text-xdeel-gray">
            Creating and managing strong, unique passwords
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Password Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-green-900 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Do This
                  </h3>
                  <ul className="text-green-800 space-y-2 text-sm">
                    <li>• Use at least 12 characters</li>
                    <li>• Mix uppercase, lowercase, numbers, symbols</li>
                    <li>• Use unique passwords for each account</li>
                    <li>• Use a password manager</li>
                    <li>• Enable two-factor authentication</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-red-900 flex items-center">
                    <X className="w-5 h-5 mr-2" />
                    Avoid This
                  </h3>
                  <ul className="text-red-800 space-y-2 text-sm">
                    <li>• Personal information (birthdays, names)</li>
                    <li>• Common words or phrases</li>
                    <li>• Sequential numbers (123456)</li>
                    <li>• Reusing passwords across sites</li>
                    <li>• Sharing passwords with others</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Password Strength Examples</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">❌ Weak: password123</h4>
                <p className="text-red-800 text-sm">Common word + simple numbers = easily guessed</p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Better: MyBirthday1990!</h4>
                <p className="text-yellow-800 text-sm">Personal info is still guessable</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">✅ Strong: R#9mK$2pLx8nQ@7w</h4>
                <p className="text-green-800 text-sm">Random mix of characters - use a password manager!</p>
              </div>
            </div>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Recommended Password Managers
                </h3>
                <p className="text-blue-800 text-sm mb-2">
                  Use a reputable password manager like Bitwarden, 1Password, or LastPass to generate and store unique passwords.
                </p>
                <p className="text-blue-800 text-sm">
                  Never store passwords in browsers or unencrypted files.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PasswordTips;
