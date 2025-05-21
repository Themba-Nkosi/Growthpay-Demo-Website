
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <div className="growth-logo">
              <span className="growth text-xl text-primary">GROWTH</span>
              <span className="play text-xl text-white bg-black px-2">PLAY</span>
              <div className="dots">
                <div className="dot bg-yellow-400"></div>
                <div className="dot bg-red-500"></div>
                <div className="dot bg-green-500"></div>
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="transition-colors font-medium text-white hover:text-primary"
            >
              About
            </a>
            <a 
              href="#program" 
              className="transition-colors font-medium text-white hover:text-primary"
            >
              Program
            </a>
            <a 
              href="#cohort" 
              className="transition-colors font-medium text-white hover:text-primary"
            >
              Entrepreneurs
            </a>
            <a 
              href="#testimonials" 
              className="transition-colors font-medium text-white hover:text-primary"
            >
              Success Stories
            </a>
            <a 
              href="https://growthplay.co.za/index.php/apply" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Apply Today
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black shadow-lg`}>
        <div className="container mx-auto px-4 py-4 space-y-3">
          <a 
            href="#about" 
            className="block text-white hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#program" 
            className="block text-white hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Program
          </a>
          <a 
            href="#cohort" 
            className="block text-white hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Entrepreneurs
          </a>
          <a 
            href="#testimonials" 
            className="block text-white hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Success Stories
          </a>
          <a 
            href="https://growthplay.co.za/index.php/apply" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full btn-primary mt-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Apply Today
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
