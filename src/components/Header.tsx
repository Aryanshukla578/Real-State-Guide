
import { useState, useEffect } from 'react';
import { Menu, X, Home, Search, User, MessageSquare } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Home className="w-6 h-6 text-accent" />
          <span className="text-lg font-serif font-medium">LuxuryEstates</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#" className="nav-link hover:text-accent font-medium text-sm">Home</a>
          <a href="#properties" className="nav-link hover:text-accent font-medium text-sm">Properties</a>
          <a href="#buying" className="nav-link hover:text-accent font-medium text-sm">Buying</a>
          <a href="#about" className="nav-link hover:text-accent font-medium text-sm">About</a>
          <a href="#contact" className="nav-link hover:text-accent font-medium text-sm">Contact</a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-sm font-medium hover:text-accent transition-colors">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
          <button className="btn-primary flex items-center space-x-1 text-sm">
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <a href="#" className="flex items-center space-x-2">
              <Home className="w-6 h-6 text-accent" />
              <span className="text-lg font-serif font-medium">LuxuryEstates</span>
            </a>
            <button 
              className="p-2 focus:outline-none" 
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 text-xl">
            <a href="#" className="py-2 hover:text-accent" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#properties" className="py-2 hover:text-accent" onClick={() => setIsMenuOpen(false)}>Properties</a>
            <a href="#buying" className="py-2 hover:text-accent" onClick={() => setIsMenuOpen(false)}>Buying</a>
            <a href="#about" className="py-2 hover:text-accent" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="py-2 hover:text-accent" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
          
          <div className="mt-auto space-y-4">
            <button className="w-full btn-secondary flex items-center justify-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Search Properties</span>
            </button>
            <button className="w-full btn-primary flex items-center justify-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
