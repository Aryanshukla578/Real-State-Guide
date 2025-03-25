
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury home exterior" 
            className="w-full h-full object-cover animate-image-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-2xl opacity-0 animate-fade-in">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider bg-white/10 backdrop-blur-sm rounded-full border border-white/30 text-white">PREMIUM PROPERTIES</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Discover Your <br />Dream Property
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Expert guidance to find exceptional homes in prime locations that match your lifestyle and investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                View Properties
              </button>
              <button className="btn-secondary text-white border-white/50 hover:bg-white/10">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center opacity-0 animate-fade-in animate-delay-500">
        <a href="#properties" className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 text-white hover:bg-white/20 transition-all duration-300">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
