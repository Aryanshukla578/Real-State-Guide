
import { Home, Instagram, Facebook, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-estate-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Home className="w-6 h-6 text-accent" />
              <span className="text-xl font-serif font-medium">LuxuryEstates</span>
            </div>
            
            <p className="text-white/70 mb-6">
              Specializing in luxury properties and premium real estate services for discerning clients.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#properties" className="text-white/70 hover:text-white transition-colors">Properties</a>
              </li>
              <li>
                <a href="#buying" className="text-white/70 hover:text-white transition-colors">Buying Guide</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Me</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Property Buying</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Property Selling</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Property Management</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Investment Consulting</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Market Analysis</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Get updates on new properties and real estate insights.
            </p>
            <form className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-l-md placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-accent/70"
                />
                <button 
                  type="submit" 
                  className="bg-accent hover:bg-accent-dark px-4 py-3 rounded-r-md transition-colors focus:outline-none"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LuxuryEstates. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
