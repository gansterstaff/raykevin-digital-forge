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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      } overflow-visible`}
    >

      <div className="container mx-auto">
        <div className="flex items-center justify-between w-full"> {/* Added w-full for clarity */}
          <Link to="/" className="text-2xl font-light tracking-tight text-white relative z-10">
            Ray<span className="text-raykevin-purple">Kevin</span>
          </Link>

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
            <DropdownMenuContent align="end" className="bg-raykevin-darker/90 backdrop-blur-lg border border-white/10 text-white w-auto md:w-56 mr-4 md:mr-0">
              {/* Home page section links */}
              {window.location.pathname === '/' && homeNavLinks.map(link => (
                <DropdownMenuItem key={link.href} asChild>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white hover:bg-white/5 cursor-pointer w-full "
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
                >
                  Contactar por WhatsApp
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

    </header>
  );
};

export default Header;
