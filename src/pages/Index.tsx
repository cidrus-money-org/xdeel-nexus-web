
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Security } from "@/components/home/Security";
import { Stats } from "@/components/home/Stats";
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
      <Stats />
      <Comparison />
      <Newsletter />
      <CTA />
    </Layout>
  );
};

export default Index;
