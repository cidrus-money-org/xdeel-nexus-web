
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/knowledge-base/HeroSection";
import { CategoriesGrid } from "@/components/knowledge-base/CategoriesGrid";
import { FeaturedArticles } from "@/components/knowledge-base/FeaturedArticles";
import { RecentlyUpdated } from "@/components/knowledge-base/RecentlyUpdated";
import { CTASection } from "@/components/knowledge-base/CTASection";

const KnowledgeBase = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesGrid />
      <FeaturedArticles />
      <RecentlyUpdated />
      <CTASection />
    </Layout>
  );
};

export default KnowledgeBase;
