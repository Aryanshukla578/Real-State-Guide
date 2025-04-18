
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-900/90 to-blue-800/90">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find Your Perfect Plot in India
        </h1>
        <p className="text-xl text-white/90 mb-8">
          Discover premium plots across India with expert guidance
        </p>
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <Input
            placeholder="Enter location or plot size..."
            className="bg-white/95 h-12 text-lg"
          />
          <Button className="h-12 px-8 bg-[#c4a052] hover:bg-[#b39142]">
            <Search className="mr-2 h-5 w-5" />
            Search Plots
          </Button>
        </div>
      </div>
    </div>
  );
};
