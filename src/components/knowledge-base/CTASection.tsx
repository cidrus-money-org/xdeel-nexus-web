
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-16 bg-xdeel-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Still Need Help?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Can't find what you're looking for? Our support team is available 24/7 to assist you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary">
            Contact Support
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-xdeel-primary hover:border-white">
            Join Community
          </Button>
        </div>
      </div>
    </section>
  );
};
