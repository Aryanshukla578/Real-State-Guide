
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import BuyingGuide from "@/components/BuyingGuide";
import AgentProfile from "@/components/AgentProfile";
import SearchProperties from "@/components/SearchProperties";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedListings />
      <BuyingGuide />
      <AgentProfile />
      <SearchProperties />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
