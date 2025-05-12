
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

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

  const navLinks = [
    { title: "Acerca", path: "/about" },
    { title: "Servicios", path: "/services" },
    { title: "Blog", path: "/blog" },
    { title: "Contacto", path: "/contact" }
  ];

  const homeNavLinks = [
    { title: "Acerca de", href: "#about" },
    { title: "Servicios", href: "#services" },
    { title: "Mi Enfoque", href: "#approach" },
    { title: "Testimonios", href: "#testimonials" },
    { title: "FAQ", href: "#faq" }
  ];

  return (
    <header 
      className={`fixed top-0 w-full transition-all duration-300 px-4 md:px-8 py-4 z-50 ${
        isScrolled ? 'blur-nav' : 'bg-transparent'
      } overflow-hidden`}
    >
      {/* Background image in top left corner */}
      <div className="absolute top-0 left-0 w-full h-[300%] -z-10 pointer-events-none">
        <img 
          src="/lovable-uploads/e6102a9a-9ee2-442f-80b7-7fcf08621fae.png" 
          alt="Background gradient" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-light tracking-tight text-white relative z-10">
            Ray<span className="text-raykevin-purple">Kevin</span>
          </Link>

          {/* Desktop Navigation (now hidden on all screens) */}
          <nav className="hidden">
            {homeNavLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {link.title}
              </a>
            ))}
            
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} className="text-sm text-white/80 hover:text-white transition-colors">
                {link.title}
              </Link>
            ))}
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
          
          {/* Hamburger Menu (on all screen sizes now) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="text-white" 
                aria-label="Toggle Menu"
              >
                <Menu size={24} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-raykevin-darker/90 backdrop-blur-lg border border-white/10 text-white w-56">
              {/* Home page section links */}
              {window.location.pathname === '/' && homeNavLinks.map(link => (
                <DropdownMenuItem key={link.href} asChild>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white hover:bg-white/5 cursor-pointer w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                </DropdownMenuItem>
              ))}
              
              {/* Site navigation */}
              {navLinks.map(link => (
                <DropdownMenuItem key={link.path} asChild>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-white hover:bg-white/5 cursor-pointer w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </DropdownMenuItem>
              ))}
              
              {/* Acceder link (new) */}
              <DropdownMenuItem asChild>
                <Link 
                  to="/admin/login" 
                  className="text-white/80 hover:text-white hover:bg-white/5 cursor-pointer w-full flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogIn size={16} />
                  Acceder
                </Link>
              </DropdownMenuItem>
              
              {/* Contact link (for mobile) */}
              <DropdownMenuItem asChild>
                <a 
                  href="https://wa.me/51921209325" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-raykevin-purple hover:text-raykevin-purple-light hover:bg-white/5 cursor-pointer w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contactar por WhatsApp
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Menu (kept for compatibility) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-raykevin-darker bg-opacity-95 backdrop-blur-md z-40 pt-24">
          <nav className="flex flex-col items-center gap-8 p-8 animate-fade-in">
            {homeNavLinks.map(link => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-lg text-white/80 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                {link.title}
              </a>
            ))}
            
            {navLinks.map(link => (
              <Link 
                key={link.path}
                to={link.path}
                className="text-lg text-white/80 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                {link.title}
              </Link>
            ))}
            
            <Link
              to="/admin/login"
              className="text-lg text-white/80 hover:text-white transition-colors flex items-center gap-2"
              onClick={toggleMobileMenu}
            >
              <LogIn size={18} />
              <span>Acceder</span>
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
