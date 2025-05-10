
import { MessageCircle, Code, Palette, MessageSquare, LineChart, Layout, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import GlassCard from '@/components/GlassCard';

const Services = () => {
  const services = [
    {
      icon: <Code size={24} className="text-raykevin-purple" />,
      title: "Desarrollo Web y Full-Stack",
      description: "Creación de sitios web y aplicaciones web personalizadas, optimizadas y escalables.",
      items: [
        "Desarrollo Front-End (React, Vue, Angular)",
        "Desarrollo Back-End (Node.js, Python, PHP)",
        "Integración de APIs y servicios",
        "Bases de datos y almacenamiento",
        "Soluciones e-commerce",
        "Mantenimiento y actualización"
      ]
    },
    {
      icon: <Palette size={24} className="text-raykevin-purple" />,
      title: "Diseño UI/UX",
      description: "Creación de interfaces intuitivas y experiencias de usuario que conectan y convierten.",
      items: [
        "Diseño de interfaces de usuario",
        "Arquitectura de información",
        "Prototipos y wireframes",
        "Pruebas de usabilidad",
        "Optimización de conversión",
        "Sistemas de diseño"
      ]
    },
    {
      icon: <MessageSquare size={24} className="text-raykevin-purple" />,
      title: "Estrategia de Contenido",
      description: "Planificación y desarrollo de contenido estratégico que conecta con tu audiencia.",
      items: [
        "Estrategia de contenido digital",
        "Copywriting y redacción web",
        "SEO On-page y técnico",
        "Content marketing",
        "Email marketing",
        "Gestión de redes sociales"
      ]
    },
    {
      icon: <LineChart size={24} className="text-raykevin-purple" />,
      title: "Optimización y Automatización",
      description: "Mejora de procesos digitales para maximizar resultados y eficiencia.",
      items: [
        "Optimización de rendimiento web",
        "Automatización de procesos",
        "Integración de herramientas",
        "Análisis de datos y métricas",
        "Testing y mejora continua",
        "Consultoría tecnológica"
      ]
    },
    {
      icon: <Layout size={24} className="text-raykevin-purple" />,
      title: "RAG (Retrieval-Augmented Generation)",
      description: "Implementación de soluciones de IA generativa mejorada con recuperación de información.",
      items: [
        "Desarrollo de chatbots inteligentes",
        "Sistemas de recomendación",
        "Búsqueda semántica avanzada",
        "Procesamiento de lenguaje natural",
        "Integración de modelos de IA",
        "Personalización de respuestas automáticas"
      ]
    }
  ];

  const projects = [
    {
      title: "Plataforma de E-learning",
      description: "Desarrollo completo de una plataforma educativa con sistema de cursos, pagos y comunidad integrada.",
      skills: ["Full-Stack", "UI/UX", "Automatización"]
    },
    {
      title: "Tienda Online Premium",
      description: "Diseño y desarrollo de e-commerce de alta conversión con estrategia de contenido optimizada para SEO.",
      skills: ["E-commerce", "Diseño UI/UX", "SEO"]
    },
    {
      title: "Dashboard Analítico",
      description: "Interfaz de visualización de datos para empresa SaaS, con integración de múltiples fuentes de datos.",
      skills: ["Visualización de Datos", "Front-End", "API Integration"]
    }
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <SectionTitle 
                title="Servicios y Experiencia" 
                subtitle="Soluciones digitales completas que combinan desarrollo, diseño y estrategia."
                centered
              />
              
              <div className="max-w-3xl mx-auto text-center mb-12">
                <p className="text-white/80">
                  Mi enfoque multidisciplinario me permite ofrecer servicios que cubren todo el ciclo de vida de un proyecto digital, 
                  desde la conceptualización estratégica hasta la implementación técnica y la optimización continua.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        
        <section className="section-padding bg-raykevin-darker">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <SectionTitle 
                title="Servicios Detallados" 
                subtitle="Una visión completa de las soluciones que puedo ofrecerte."
              />
              
              <div className="grid grid-cols-1 gap-8">
                {services.map((service, index) => (
                  <AnimateOnScroll key={index}>
                    <GlassCard className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="bg-raykevin-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
                        <p className="text-white/70 mb-4">{service.description}</p>
                      </div>
                      
                      <div className="md:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check size={18} className="text-raykevin-purple mt-1 flex-shrink-0" />
                              <span className="text-white/80">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <SectionTitle 
                title="Proyectos Destacados" 
                subtitle="Un vistazo a algunos de los trabajos que representan mi enfoque y capacidades."
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <AnimateOnScroll key={index}>
                    <GlassCard className="h-full flex flex-col">
                      <h3 className="text-xl font-medium text-white mb-3">{project.title}</h3>
                      <p className="text-white/70 mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, i) => (
                          <span key={i} className="bg-raykevin-purple/20 text-raykevin-purple px-3 py-1 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </AnimateOnScroll>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-xl text-white mb-6">¿Listo para impulsar tu proyecto?</h3>
                
                <a 
                  href="https://wa.me/51921209325" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="neuro-button inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-white hover:text-raykevin-purple"
                >
                  <MessageCircle size={18} />
                  <span>Solicitar presupuesto</span>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Services;
