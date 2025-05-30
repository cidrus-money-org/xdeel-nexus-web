
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-xdeel-purple">
              Legal
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Privacy and Cookie Policy
            </h1>
            <p className="text-xl text-xdeel-gray">
              How we protect and handle your personal information.
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto text-xdeel-gray">
            <p>This page contains our privacy and cookie policy information.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
