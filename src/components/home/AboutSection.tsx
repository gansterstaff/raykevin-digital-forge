
import AnimateOnScroll from '../AnimateOnScroll';
import SectionTitle from '../SectionTitle';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <p className="text-raykevin-purple text-sm font-medium mb-2">Sobre Mí</p>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">
                Kevin Fabricio Ludeña Calderón
              </h2>
              
              <p className="text-lg text-white/70 mb-4">
                Desarrollador Full-Stack & Estratega Digital con un enfoque multidisciplinario.
              </p>
              
              <p className="text-white/80 mb-4">
                Mi trayectoria profesional abarca desde la gestión de contenido y el diseño gráfico 
                hasta el desarrollo web y la implementación de soluciones RAG. Esta combinación 
                única de habilidades me permite ofrecer un enfoque integral a los proyectos digitales.
              </p>
              
              <p className="text-white/80 mb-4">
                He trabajado como Content Manager, Brand Specialist, y he liderado equipos en 
                agencias de publicidad, lo que me ha dado una perspectiva completa del ecosistema 
                digital y las necesidades de las marcas en el entorno actual.
              </p>
              
              <p className="text-white/80 mb-6">
                Mi pasión es transformar ideas en experiencias digitales memorables que no solo se 
                vean bien, sino que también generen resultados tangibles para mis clientes.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/about" 
                  className="neuro-button bg-raykevin-purple/10 inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white hover:text-raykevin-purple shadow-[0_20px_5px_rgba(100,70,190,0.45)]"
                >
                  <span>Conoce más sobre mí</span>
                  <ArrowRight size={16} />
                </Link>
                
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-white/20 rounded-lg bg-transparent hover:bg-white/5 text-white transition-all"
                >
                  Ver mi Portafolio
                </Link>
              </div>
            </div>
            
            <div className="relative hidden md:flex items-center justify-center">
              <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-md p-8 w-full max-w-lg">
                <div className="flex flex-col">
                  <h3 className="text-xl font-light text-white mb-4">Experiencia Profesional</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-raykevin-purple mr-2">•</span>
                      <span className="text-white/80">Content Manager & Brand Specialist</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-raykevin-purple mr-2">•</span>
                      <span className="text-white/80">Desarrollador Web Full-Stack</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-raykevin-purple mr-2">•</span>
                      <span className="text-white/80">Especialista en UI/UX & RAG</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-raykevin-purple mr-2">•</span>
                      <span className="text-white/80">Diseñador Gráfico</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;
