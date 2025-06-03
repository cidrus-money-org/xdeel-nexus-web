
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { ArrowLeft, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { PaymentIssuesGrid } from "@/components/knowledge-base/troubleshooting/PaymentIssuesGrid";
import { TroubleshootingSteps } from "@/components/knowledge-base/troubleshooting/TroubleshootingSteps";
import { PreventionTips } from "@/components/knowledge-base/troubleshooting/PreventionTips";
import { SupportContact } from "@/components/knowledge-base/troubleshooting/SupportContact";

const troubleshootingSteps = [
  {
    title: "Check Payment Details",
    description: "Verify that all payment information is correct, including card numbers, expiry dates, and billing addresses."
  },
  {
    title: "Contact Your Bank",
    description: "Many payment failures are due to bank security measures. Contact your bank to authorize the transaction."
  },
  {
    title: "Try Alternative Payment Method",
    description: "If one payment method fails, try using a different card or bank transfer option."
  },
  {
    title: "Wait and Retry",
    description: "Sometimes temporary issues resolve themselves. Wait 15-30 minutes before trying again."
  },
  {
    title: "Contact Support",
    description: "If the issue persists, contact our support team with transaction details for personalized assistance."
  }
];

const preventionTips = [
  "Keep your payment information up to date",
  "Notify your bank before making large transactions",
  "Ensure sufficient funds are available",
  "Use trusted networks for transactions",
  "Enable notifications for transaction updates"
];

const contactInfo = {
  email: "support@xdeel.com",
  chat: "Available 24/7 in your account",
  phone: "+48 66 224 8895"
};

const Troubleshooting = () => {
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
                  <Link to="/knowledge-base/payments">Payments</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Failed Payment Troubleshooting</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/knowledge-base/payments" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Payments
          </Link>
          
          <div className="flex items-center mb-6">
            <Badge variant="outline" className="mr-4 text-purple-600 border-purple-300">
              <CreditCard className="w-4 h-4 mr-2" />
              Payments
            </Badge>
            <span className="text-xdeel-gray">Last updated: 2 weeks ago</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Failed Payment Troubleshooting
          </h1>
          <p className="text-xl text-xdeel-gray">
            Common payment issues and how to resolve them quickly
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Common Payment Issues</h2>
            
            <PaymentIssuesGrid />

            <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Step-by-Step Troubleshooting</h2>
            
            <TroubleshootingSteps steps={troubleshootingSteps} />

            <PreventionTips tips={preventionTips} />

            <SupportContact contactInfo={contactInfo} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Troubleshooting;
