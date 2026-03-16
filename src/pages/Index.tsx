import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import ResultsSection from "@/components/ResultsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Norel Studio — AI-Powered Growth Marketing Agency | Brand, Content & SEO"
        description="AI-powered growth agency specializing in strategy, content, and distribution. 2.4x organic growth, 32% lead increase. Schedule your free audit today."
        canonical="https://norelstudio.com/"
      />
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ServicesSection />
      <TechStackSection />
      <ResultsSection />
      <PortfolioSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
