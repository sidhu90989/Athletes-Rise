import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AssessmentSection } from "@/components/AssessmentSection";
import { DashboardPreview } from "@/components/DashboardPreview";
import { PerformanceAnalysis } from "@/components/PerformanceAnalysis";
import { Footer } from "@/components/Footer";
import { ExploreGames } from "@/components/ExploreGames";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AssessmentSection />
        <PerformanceAnalysis />
        <DashboardPreview />
      </main>
      <Footer />
      <ExploreGames />
    </div>
  );
};

export default Index;