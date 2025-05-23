
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Calendar } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import SectionTitle from '../SectionTitle';
import { useIsMobile } from '@/hooks/use-mobile';

interface Project {
  id: number;
  title: string;
  date: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    fallback: string;
  };
  color: string;
}

const ProjectCardsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Añadimos un proyecto más para tener 5 en total
  const projects: Project[] = [
    {
      id: 1,
      title: "Plataforma E-commerce",
      date: "Mayo 2023",
      tags: ["React", "Node.js", "MongoDB"],
      author: {
        name: "Tienda Virtual",
        avatar: "/lovable-uploads/323ae7b6-75b2-4ab4-b2fd-95d2c27e3533.png",
        fallback: "TV",
      },
      color: "from-raykevin-purple-light/30 to-raykevin-purple/50"
    },
    {
      id: 2,
      title: "Dashboard Analítico",
      date: "Agosto 2023",
      tags: ["Next.js", "TypeScript", "D3.js"],
      author: {
        name: "Data Insights",
        avatar: "/lovable-uploads/086c2af4-48ae-4728-8291-c5e628e12222.png",
        fallback: "DI",
      },
      color: "from-raykevin-purple/40 to-raykevin-purple-dark/60"
    },
    {
      id: 3,
      title: "App de Gestión",
      date: "Noviembre 2023",
      tags: ["React Native", "Firebase"],
      author: {
        name: "Task Manager",
        avatar: "/lovable-uploads/3c29a91e-8284-4f0f-af72-36b1b9a61e2e.png",
        fallback: "TM",
      },
      color: "from-raykevin-purple-light/20 to-raykevin-purple/40"
    },
    {
      id: 4,
      title: "Portal Educativo",
      date: "Febrero 2024",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      author: {
        name: "Learn Platform",
        avatar: "/lovable-uploads/Perfil Fabricio.jpg",
        fallback: "LP",
      },
      color: "from-raykevin-purple/30 to-raykevin-purple-dark/50"
    },
    {
      id: 5,
      title: "Sistema de Citas",
      date: "Abril 2024",
      tags: ["React", "Redux", "Firebase"],
      author: {
        name: "Health App",
        avatar: "/lovable-uploads/Perfil Fabricio.jpg",
        fallback: "HA",
      },
      color: "from-raykevin-purple-light/25 to-raykevin-purple/45"
    },
  ];

  // Handle click outside to close expanded card
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setExpandedCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="section-padding pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left panel with title */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="glass-card p-6 border-l-4 border-gradient-to-b from-raykevin-purple to-raykevin-purple-dark h-full">
              <SectionTitle 
                title="Mis Proyectos Realizados" 
                subtitle="Descubre algunos de los proyectos más destacados en los que he trabajado."
                centered={false}
                className="mb-6"
              />
              <p className="text-sm text-white/60 mt-auto">
                Director Creativo Kevin Fabricio
              </p>
            </div>
          </div>
          
          {/* Right panel with stacked cards */}
          <div className="md:w-2/3 lg:w-3/4 relative">
            {/* Mobile view with vertical stacked cards */}
            {isMobile ? (
              <div className="space-y-4 px-2">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    className={cn(
                      "w-full glass-card border border-white/10 backdrop-blur-lg overflow-hidden",
                      `bg-gradient-to-br ${project.color}`
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="p-6 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-white/60" />
                        <span className="text-sm text-white/60">{project.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-medium text-white mb-4">
                        {project.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white"
                          >
                            <Tag size={12} />
                            {tag}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-auto flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={project.author.avatar} alt={project.author.name} />
                          <AvatarFallback>{project.author.fallback}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-white/80">{project.author.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              // Desktop view with overlapping cards
              <div className="h-[350px] relative pl-2" ref={containerRef}>
                <div className="h-[350px] relative">
                  {projects.map((project, index) => {
                    // Calculate position based on index and whether the card is expanded
                    const isExpanded = expandedCard === project.id;
                    const zIndex = projects.length - index;
                    
                    // Mayor desplazamiento horizontal entre tarjetas (190px)
                    const offsetX = index * 190;
                    
                    return (
                      <motion.div
                        key={project.id}
                        className={cn(
                          "absolute top-0 left-0 w-[280px] h-[340px]",
                          "glass-card border border-white/10 backdrop-blur-lg overflow-hidden cursor-pointer",
                          `bg-gradient-to-br ${project.color}`
                        )}
                        style={{ 
                          zIndex,
                          // Posicionamiento inicial - cada tarjeta está más a la derecha que la anterior
                          left: `${offsetX}px`,
                        }}
                        animate={{
                          // Al expandir, mueve la tarjeta hacia la izquierda para destacarla
                          x: isExpanded ? -40 : 0,
                          // Al expandir, elimina la opacidad y escala reducida
                          scale: isExpanded ? 1.05 : 1 - (index * 0.02),
                          opacity: isExpanded ? 1 : 1 - (index * 0.03), // Menos reducción de opacidad
                          // Añadir elevación en Z al expandir
                          zIndex: isExpanded ? 100 : zIndex,
                          transition: { duration: 0.4, ease: "easeOut" }
                        }}
                        initial={{
                          scale: 1 - (index * 0.02),
                          opacity: 1 - (index * 0.03)
                        }}
                        onClick={() => setExpandedCard(project.id === expandedCard ? null : project.id)}
                      >
                        <div className="p-6 h-full flex flex-col">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar size={16} className="text-white/60" />
                            <span className="text-sm text-white/60">{project.date}</span>
                          </div>
                          
                          <h3 className="text-xl md:text-2xl font-medium text-white mb-4">
                            {project.title}
                          </h3>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, idx) => (
                              <div 
                                key={idx} 
                                className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white"
                              >
                                <Tag size={12} />
                                {tag}
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-auto flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={project.author.avatar} alt={project.author.name} />
                              <AvatarFallback>{project.author.fallback}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-white/80">{project.author.name}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCardsSection;