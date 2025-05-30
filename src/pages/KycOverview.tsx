
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

const KycOverview = () => {
  return (
    <Layout>
      <section className="py-24 bg-xdeel-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
              Compliance
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Compliance and KYC Overview
            </h1>
            <p className="text-xl text-xdeel-gray">
              Understanding our identity verification and compliance procedures.
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto text-xdeel-gray">
            <p>This page contains information about our KYC and compliance procedures.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KycOverview;
