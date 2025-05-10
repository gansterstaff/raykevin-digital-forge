
import { Link } from 'react-router-dom';
import { MessageCircle, Linkedin, Mail, Copyright } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-raykevin-darker py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-2xl font-light tracking-tight text-white">
              Ray<span className="text-raykevin-purple">Kevin</span>
            </Link>
            <p className="mt-4 text-white/70 text-sm">
              Estratega digital multidisciplinario que combina desarrollo, diseño y contenido para crear experiencias digitales impactantes.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Enlaces</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Inicio
              </Link>
              <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                Acerca de RayKevin
              </Link>
              <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                Servicios y Experiencia
              </Link>
              <Link to="/blog" className="text-white/70 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://wa.me/51921209325" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle size={16} />
                <span>+51 921 209 325</span>
              </a>
              <a 
                href="https://linkedin.com/in/raykevin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:contacto@raykevin.com" 
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>contacto@raykevin.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center gap-1 text-sm text-white/50">
            <Copyright size={14} />
            <span>{currentYear} RayKevin. Todos los derechos reservados.</span>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-white/50 hover:text-white/80 transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
