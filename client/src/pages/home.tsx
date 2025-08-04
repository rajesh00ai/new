import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import KeyBenefits from "@/components/key-benefits";
import OurStory from "@/components/our-story";
import RecipesSection from "@/components/recipes-section";
import UsageIdeas from "@/components/usage-ideas";
import GallerySection from "@/components/gallery-section";
import StoreLocator from "@/components/store-locator";
import ProductShowcase from "@/components/product-showcase";
import HealthBenefits from "@/components/health-benefits";
import AIWellnessTips from "@/components/ai-wellness-tips";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <KeyBenefits />
      <OurStory />
      <RecipesSection />
      <UsageIdeas />
      <ProductShowcase />
      <GallerySection />
      <StoreLocator />
      <HealthBenefits />
      <AIWellnessTips />
      <ContactSection />
      <Footer />
    </div>
  );
}
