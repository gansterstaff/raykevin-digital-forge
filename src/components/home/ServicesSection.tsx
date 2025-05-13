
import { Code, Palette, MessageSquare, LineChart, ArrowRight } from 'lucide-react';
import GlassCard from '../GlassCard';
import AnimateOnScroll from '../AnimateOnScroll';
import SectionTitle from '../SectionTitle';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <GlassCard className="h-full flex flex-col">
      <div className="bg-raykevin-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
      <p className="text-white/70 text-sm flex-grow">{description}</p>
    </GlassCard>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Code size={24} className="text-raykevin-purple" />,
      title: "Desarrollo Web y Full-Stack",
      description: "Creación de aplicaciones web modernas, responsivas y de alto rendimiento con las mejores prácticas de desarrollo."
    },
    {
      icon: <Palette size={24} className="text-raykevin-purple" />,
      title: "Diseño UI/UX",
      description: "Interfaces intuitivas y atractivas que mejoran la experiencia del usuario mientras cumplen los objetivos de negocio."
    },
    {
      icon: <MessageSquare size={24} className="text-raykevin-purple" />,
      title: "Estrategia de Contenido",
      description: "Planificación y desarrollo de contenido estratégico que conecta con tu audiencia y comunica tu mensaje con claridad."
    },
    {
      icon: <LineChart size={24} className="text-raykevin-purple" />,
      title: "Optimización y Automatización",
      description: "Mejora de procesos digitales, optimización de rendimiento y automatización para maximizar resultados."
    }
  ];

  return (
    <section id="services" className="section-padding bg-black relative overflow-hidden">
      {/* Background image - improved z-index and overflow handling */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/lovable-uploads/323ae7b6-75b2-4ab4-b2fd-95d2c27e3533.png" 
          alt="Background" 
          className="w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-raykevin-darker/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <SectionTitle 
            title="Servicios Destacados" 
            subtitle="Soluciones digitales integrales que combinan tecnología, diseño y estrategia."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimateOnScroll key={index}>
                <ServiceCard {...service} />
              </AnimateOnScroll>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center text-raykevin-purple hover:text-raykevin-purple-light transition-colors"
            >
              <span>Ver todos mis servicios y experiencia</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ServicesSection;
