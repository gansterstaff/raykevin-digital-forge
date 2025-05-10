
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import GlassCard from '@/components/GlassCard';
import { Link } from 'react-router-dom';

const BlogPost = ({ title, excerpt, date, readTime, category, slug }: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}) => {
  return (
    <GlassCard className="h-full flex flex-col">
      <div className="mb-4">
        <span className="bg-raykevin-purple/20 text-raykevin-purple px-3 py-1 text-xs rounded-full">
          {category}
        </span>
      </div>
      
      <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
      <p className="text-white/70 mb-4 flex-grow">{excerpt}</p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-white/50 text-sm">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1 text-white/50 text-sm">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>
        
        <Link 
          to={`/blog/${slug}`} 
          className="text-raykevin-purple hover:text-raykevin-purple-light transition-colors flex items-center gap-1"
        >
          <span>Leer</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </GlassCard>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "Integrando UX y Desarrollo: La clave para productos digitales exitosos",
      excerpt: "Descubre cómo la colaboración estrecha entre diseñadores UX y desarrolladores desde las etapas iniciales puede transformar radicalmente los resultados de un proyecto digital.",
      date: "10 May, 2025",
      readTime: "5 min",
      category: "Diseño UX",
      slug: "integrando-ux-desarrollo"
    },
    {
      title: "Optimización de rendimiento web: Técnicas avanzadas para 2025",
      excerpt: "Un análisis de las últimas técnicas y herramientas para mejorar la velocidad de carga y rendimiento de aplicaciones web modernas.",
      date: "5 May, 2025",
      readTime: "8 min",
      category: "Desarrollo",
      slug: "optimizacion-rendimiento-web-2025"
    },
    {
      title: "El rol del contenido en la experiencia de usuario digital",
      excerpt: "Cómo una estrategia de contenido bien planificada puede transformar la experiencia de usuario y mejorar significativamente las conversiones.",
      date: "28 Abr, 2025",
      readTime: "6 min",
      category: "Contenido",
      slug: "rol-contenido-experiencia-usuario"
    },
    {
      title: "Implementando RAG en aplicaciones web modernas",
      excerpt: "Una guía práctica para integrar tecnologías de Retrieval-Augmented Generation en tus proyectos de desarrollo web para crear experiencias más inteligentes.",
      date: "20 Abr, 2025",
      readTime: "10 min",
      category: "IA",
      slug: "implementando-rag-aplicaciones-web"
    },
    {
      title: "Diseño responsivo en 2025: Más allá del mobile-first",
      excerpt: "Nuevas tendencias y enfoques para crear interfaces que funcionen perfectamente en todos los dispositivos, desde wearables hasta pantallas gigantes.",
      date: "15 Abr, 2025",
      readTime: "7 min",
      category: "Diseño",
      slug: "diseno-responsivo-2025"
    },
    {
      title: "La importancia de la accesibilidad web en el desarrollo moderno",
      excerpt: "Por qué la accesibilidad no es solo una consideración ética, sino también un factor crucial para el éxito de tu producto digital.",
      date: "10 Abr, 2025",
      readTime: "9 min",
      category: "Accesibilidad",
      slug: "importancia-accesibilidad-web"
    },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <SectionTitle 
                title="Blog" 
                subtitle="Artículos sobre desarrollo, diseño y estrategia digital."
                centered
              />
            </AnimateOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {blogPosts.map((post, index) => (
                <AnimateOnScroll key={index}>
                  <BlogPost {...post} />
                </AnimateOnScroll>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <button className="neuro-button px-8 py-3 text-base font-medium text-white hover:text-raykevin-purple">
                Cargar más artículos
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;
