import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import OurStory from "@/components/our-story";
import ProductSection from "@/components/product-section";
import RecipesGrid from "@/components/recipes-grid";
import VisualStory from "@/components/visual-story";
import SariraJournal from "@/components/sarira-journal";
import SariraCircle from "@/components/sarira-circle";
import FAQSection from "@/components/faq-section";
import AIWellnessTips from "@/components/ai-wellness-tips-new";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OurStory />
      <ProductSection />
      <RecipesGrid />
      <VisualStory />
      <SariraJournal />
      <SariraCircle />
      <FAQSection />
      <AIWellnessTips />
      <Footer />
    </div>
  );
}
