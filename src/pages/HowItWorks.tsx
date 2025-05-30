
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/how-it-works/HeroSection";
import { StepsSection } from "@/components/how-it-works/StepsSection";
import { DetailedTabsSection } from "@/components/how-it-works/DetailedTabsSection";
import { KYCSection } from "@/components/how-it-works/KYCSection";
import { CTASection } from "@/components/how-it-works/CTASection";

const HowItWorks = () => {
  return (
    <Layout>
      <HeroSection />
      <StepsSection />
      <DetailedTabsSection />
      <KYCSection />
      <CTASection />
    </Layout>
  );
};

export default HowItWorks;
