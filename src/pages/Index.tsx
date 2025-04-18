
import { Hero } from "@/components/Hero";
import { FeaturedPlots } from "@/components/FeaturedPlots";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedPlots />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
