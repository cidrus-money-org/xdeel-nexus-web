
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Share2 } from "lucide-react";
import { NetworkTypesHeader } from "@/components/knowledge-base/network-types/NetworkTypesHeader";
import { NetworkTypesContent } from "@/components/knowledge-base/network-types/NetworkTypesContent";
import { NetworkComparisonTable } from "@/components/knowledge-base/network-types/NetworkComparisonTable";
import { XdeelIntegrationSection } from "@/components/knowledge-base/network-types/XdeelIntegrationSection";

const NetworkTypes = () => {
  return (
    <Layout>
      <NetworkTypesHeader />

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <NetworkTypesContent />
            <NetworkComparisonTable />
            <XdeelIntegrationSection />
          </div>

          <Separator className="my-8" />

          {/* Share and Navigation */}
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

export default NetworkTypes;
