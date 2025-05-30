
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <Layout>
      <section className="py-24 bg-xdeel-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
              About Us
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              About Xdeel
            </h1>
            <p className="text-xl text-xdeel-gray max-w-3xl mx-auto">
              Learn more about our mission to make cryptocurrency accessible to everyone.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
