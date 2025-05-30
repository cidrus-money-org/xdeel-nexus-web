
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Security } from "@/components/home/Security";
import { AppPreview } from "@/components/home/AppPreview";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { Comparison } from "@/components/home/Comparison";
import { Newsletter } from "@/components/home/Newsletter";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <AppPreview />
      <Stats />
      <Testimonials />
      <Comparison />
      <Newsletter />
      <CTA />
    </Layout>
  );
};

export default Index;
