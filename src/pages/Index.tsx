
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Stats } from "@/components/home/Stats";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <CTA />
    </Layout>
  );
};

export default Index;
