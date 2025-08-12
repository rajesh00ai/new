import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSarira from "@/components/about-sarira";
import ProductSection from "@/components/product-section";
import RecipesGrid from "@/components/recipes-grid";
import VisualStory from "@/components/visual-story";
import FAQSection from "@/components/faq-section";
import AIWellnessTips from "@/components/ai-wellness-tips-new";
import Footer from "@/components/footer-fixed";
import FloatingCTA from "@/components/floating-cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSarira />
      <ProductSection />
      <RecipesGrid />
      <VisualStory />
      <FAQSection />
      <AIWellnessTips />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
