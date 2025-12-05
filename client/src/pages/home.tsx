import HeroSection from "@/components/HeroSection";
import TopCategories from "@/components/TopCategories";
import MonthlyTimeline from "@/components/MonthlyTimeline";
import Superlatives from "@/components/Superlatives";
import Moodboard from "@/components/Moodboard";
import ProfileCard from "@/components/ProfileCard";
import FinalQuote from "@/components/FinalQuote";
import SectionDivider from "@/components/SectionDivider";
import FunnyVersion from "@/components/FunnyVersion";
import GenZTagalog from "@/components/GenZTagalog";
import VisualPoster from "@/components/VisualPoster";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <HeroSection />
      
      <TopCategories />
      
      <MonthlyTimeline />
      
      <Superlatives />
      
      <Moodboard />
      
      <ProfileCard />
      
      <FinalQuote />
      
      <SectionDivider 
        title="The Chaotic Energy Zone" 
        subtitle="Where things get fun and a little unhinged"
      />
      
      <FunnyVersion />
      
      <GenZTagalog />
      
      <VisualPoster />
      
      <AnalyticsDashboard />
      
      <Footer />
    </div>
  );
}
