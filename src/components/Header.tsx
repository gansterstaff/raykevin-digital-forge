
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 w-full transition-all duration-300 px-4 md:px-8 py-4 z-50 ${
        isScrolled ? 'blur-nav' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-light tracking-tight text-white">
            Ray<span className="text-raykevin-purple">Kevin</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-white/80 hover:text-white transition-colors">
              Acerca de
            </a>
            <a href="#services" className="text-sm text-white/80 hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#approach" className="text-sm text-white/80 hover:text-white transition-colors">
              Mi Enfoque
            </a>
            <a href="#testimonials" className="text-sm text-white/80 hover:text-white transition-colors">
              Testimonios
            </a>
            <a href="#faq" className="text-sm text-white/80 hover:text-white transition-colors">
              FAQ
            </a>
            <Link to="/blog" className="text-sm text-white/80 hover:text-white transition-colors">
              Blog
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/51921209325" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neuro-button inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white hover:text-raykevin-purple"
            >
              <MessageCircle size={16} />
              <span>Contactar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-raykevin-darker bg-opacity-95 backdrop-blur-md z-40 pt-24">
          <nav className="flex flex-col items-center gap-8 p-8 animate-fade-in">
            <a 
              href="#about" 
              className="text-lg text-white/80 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Acerca de
            </a>
            <a 
              href="#services" 
              className="text-lg text-white/80 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Servicios
            </a>
            <a 
              href="#approach" 
              className="text-lg text-white/80 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Mi Enfoque
            </a>
            <a 
              href="#testimonials" 
              className="text-lg text-white/80 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Testimonios
            </a>
            <a 
              href="#faq" 
              className="text-lg text-white/80 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              FAQ
            </a>
            <Link 
              to="/blog" 
              className="text-lg text-white/80 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <a 
              href="https://wa.me/51921209325" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neuro-button mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-base font-medium text-white hover:text-raykevin-purple"
              onClick={toggleMobileMenu}
            >
              <MessageCircle size={18} />
              <span>Contactar</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
