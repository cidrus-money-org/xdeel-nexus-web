
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Security } from "@/components/home/Security";
import { Comparison } from "@/components/home/Comparison";
import { Newsletter } from "@/components/home/Newsletter";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <Comparison />
      <Newsletter />
    </Layout>
  );
};

export default Index;
