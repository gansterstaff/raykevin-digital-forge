
import { MessageCircle, Code, Palette, MessageSquare, LineChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import GlassCard from '@/components/GlassCard';

const About = () => {
  const skills = [
    { name: "Desarrollo Front-End", icon: <Code size={20} className="text-raykevin-purple" /> },
    { name: "Desarrollo Back-End", icon: <Code size={20} className="text-raykevin-purple" /> },
    { name: "Diseño UI/UX", icon: <Palette size={20} className="text-raykevin-purple" /> },
    { name: "Estrategia de Contenido", icon: <MessageSquare size={20} className="text-raykevin-purple" /> },
    { name: "SEO", icon: <LineChart size={20} className="text-raykevin-purple" /> },
    { name: "RAG (Retrieval-Augmented Generation)", icon: <Code size={20} className="text-raykevin-purple" /> },
    { name: "Gestión de Proyectos", icon: <MessageSquare size={20} className="text-raykevin-purple" /> },
    { name: "Automatización", icon: <LineChart size={20} className="text-raykevin-purple" /> },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <SectionTitle 
                title="Acerca de RayKevin" 
                subtitle="Mi historia y mi porqué como estratega digital multidisciplinario."
                centered
              />
              
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-square rounded-full overflow-hidden border-4 border-raykevin-purple/30">
                      <img 
                        src="/lovable-uploads/Perfil Fabricio.jpg" 
                        alt="RayKevin" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-medium text-white mb-4">
                      Hola, soy RayKevin
                    </h3>
                    
                    <p className="text-white/80 mb-4">
                      Desarrollador full-stack y estratega digital con más de una década de experiencia 
                      combinando desarrollo web, diseño UI/UX y estrategias de contenido para crear 
                      experiencias digitales completas e impactantes.
                    </p>
                    
                    <p className="text-white/80">
                      Mi trayectoria profesional me ha llevado desde roles de Content Manager y 
                      Community Manager hasta especializarme en desarrollo web y experiencias de usuario, 
                      permitiéndome tener una visión integral del ecosistema digital.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        
        <section className="section-padding bg-raykevin-darker">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <SectionTitle 
                title="Mi Trayectoria" 
                subtitle="El camino que me ha llevado a convertirme en el profesional que soy hoy."
              />
              
              <div className="max-w-3xl">
                <p className="text-white/80 mb-6">
                  Mi carrera comenzó en el ámbito del contenido digital y la gestión de comunidades, 
                  donde aprendí la importancia de la comunicación efectiva y la conexión con las audiencias. 
                  Con el tiempo, mi curiosidad me llevó a profundizar en el desarrollo web y el diseño de 
                  interfaces, complementando mi comprensión del lado humano con habilidades técnicas sólidas.
                </p>
                
                <p className="text-white/80 mb-6">
                  A lo largo de los años, he trabajado con startups, agencias y empresas establecidas, 
                  contribuyendo a proyectos diversos que han refinado mi capacidad para traducir 
                  necesidades de negocio en soluciones digitales efectivas. Mi experiencia en Content 
                  Management, Community Management, Edición y Diseño Gráfico ha sido fundamental para 
                  desarrollar un enfoque holístico que va más allá del código.
                </p>
                
                <p className="text-white/80">
                  Hoy, combino todas estas disciplinas para ofrecer servicios que abarcan el ciclo 
                  completo del desarrollo digital: desde la conceptualización estratégica hasta la 
                  implementación técnica y la optimización continua.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <SectionTitle 
                title="Mi Misión" 
                subtitle="Lo que me impulsa y el impacto que busco generar con mi trabajo."
              />
              
              <div className="max-w-3xl">
                <GlassCard className="mb-8">
                  <p className="text-xl text-white italic">
                    "Crear soluciones digitales que no solo sean técnicamente excelentes, 
                    sino que también conecten de manera significativa con las personas y 
                    generen resultados tangibles para los negocios."
                  </p>
                </GlassCard>
                
                <p className="text-white/80 mb-6">
                  Mi objetivo es eliminar la barrera entre la tecnología y la estrategia de negocio, 
                  ofreciendo soluciones que combinen lo mejor de ambos mundos. Creo firmemente que el 
                  mejor desarrollo tecnológico es aquel que sirve a un propósito claro y está respaldado 
                  por una visión estratégica sólida.
                </p>
                
                <p className="text-white/80">
                  Me apasiona ayudar a emprendedores, profesionales y empresas a aprovechar todo el 
                  potencial digital para alcanzar sus objetivos, proporcionándoles no solo herramientas 
                  técnicas, sino también el conocimiento y la estrategia para utilizarlas de manera efectiva.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        
        <section className="section-padding bg-raykevin-darker">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <SectionTitle 
                title="Mis Habilidades" 
                subtitle="Las competencias y tecnologías que conforman mi caja de herramientas profesional."
              />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <AnimateOnScroll key={index}>
                    <GlassCard className="flex items-center gap-3">
                      {skill.icon}
                      <span className="text-white">{skill.name}</span>
                    </GlassCard>
                  </AnimateOnScroll>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-xl text-white mb-6">¿Te identificas con mi enfoque?</h3>
                
                <a 
                  href="https://wa.me/51921209325" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="neuro-button inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-white hover:text-raykevin-purple"
                >
                  <MessageCircle size={18} />
                  <span>Hablemos de tus objetivos</span>
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

export default About;
