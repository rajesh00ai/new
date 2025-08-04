import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProductShowcase from "@/components/product-showcase";
import HealthBenefits from "@/components/health-benefits";
import RecipeUsage from "@/components/recipe-usage";
import AboutSarira from "@/components/about-sarira";
import AIWellnessTips from "@/components/ai-wellness-tips";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <HealthBenefits />
      <RecipeUsage />
      <AboutSarira />
      <AIWellnessTips />
      <ContactSection />
      <Footer />
    </div>
  );
}
