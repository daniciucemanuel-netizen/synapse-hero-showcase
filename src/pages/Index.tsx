import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ServicesSection from "@/components/ServicesSection";

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
        title="Norel Studio — AI-Powered Growth Marketing Agency"
        description="Norel Studio is an AI-powered growth marketing agency specializing in brand strategy, content production, and SEO for startups and scaling businesses."
        canonical="https://norelstudio.com/"
      />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <SocialProofBar />
        <ServicesSection />
        
        <ResultsSection />
        <PortfolioSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
