import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Instagram, Camera, Mail } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Animate the navbar links
    if (isOpen) {
      gsap.fromTo(
        '.mobile-menu-link',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#1A2417]/90 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-[#D4B483]" />
            <span className="text-[#D4B483] font-semibold text-xl">
              Khoe,<span className="text-white"> Aaron Titan</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#portfolio" className="text-white hover:text-[#D4B483] transition-colors">
              Portfolio
            </a>
            <a href="#about" className="text-white hover:text-[#D4B483] transition-colors">
              Tentang
            </a>
            <a href="#services" className="text-white hover:text-[#D4B483] transition-colors">
              Layanan
            </a>
            <a href="#contact" className="text-white hover:text-[#D4B483] transition-colors">
              Kontak
            </a>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-[#D4B483] hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-[#D4B483] hover:text-white transition-colors">
              <Camera className="h-5 w-5" />
            </a>
            <a href="#contact" 
              className="bg-[#D4B483] hover:bg-[#C69C6D] text-[#1A2417] px-4 py-2 rounded-lg transition-colors"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#1A2417]/95 pt-24 px-4 md:hidden flex flex-col z-40">
          <div className="flex flex-col space-y-6">
            <a href="#portfolio" className="mobile-menu-link text-white text-2xl font-medium hover:text-[#D4B483] transition-colors">
              Portfolio
            </a>
            <a href="#about" className="mobile-menu-link text-white text-2xl font-medium hover:text-[#D4B483] transition-colors">
              Tentang
            </a>
            <a href="#services" className="mobile-menu-link text-white text-2xl font-medium hover:text-[#D4B483] transition-colors">
              Layanan
            </a>
            <a href="#contact" className="mobile-menu-link text-white text-2xl font-medium hover:text-[#D4B483] transition-colors">
              Kontak
            </a>
          </div>

          {/* Social Links in Mobile Menu */}
          <div className="mt-auto mb-12">
            <div className="flex space-x-8 justify-center my-8">
              <a href="#" className="mobile-menu-link text-[#D4B483] hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="mobile-menu-link text-[#D4B483] hover:text-white transition-colors">
                <Camera className="h-6 w-6" />
              </a>
              <a href="#" className="mobile-menu-link text-[#D4B483] hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <a href="#contact" 
              className="mobile-menu-link block text-center bg-[#D4B483] hover:bg-[#C69C6D] text-[#1A2417] px-6 py-3 rounded-lg transition-colors"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;