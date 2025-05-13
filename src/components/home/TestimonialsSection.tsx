import { Quote } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import AnimateOnScroll from '../AnimateOnScroll';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import GlassCard from '../GlassCard';
interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  image?: string;
  colorAccent?: "default" | "light" | "dark";
}

const testimonials: TestimonialProps[] = [
  {
    content: "RayKevin transformó por completo nuestra presencia digital. Su enfoque multidisciplinario combinando desarrollo web, diseño UX y estrategia de contenido nos dio exactamente lo que necesitábamos.",
    author: "María González",
    position: "CEO, InnovaTech",
    image: "/lovable-uploads/323ae7b6-75b2-4ab4-b2fd-95d2c27e3533.png",
    colorAccent: "default"
  },
  {
    content: "Trabajar con RayKevin ha sido una experiencia excepcional. No solo entregó un producto técnicamente impecable, sino que realmente entendió nuestras necesidades de negocio.",
    author: "Carlos Méndez",
    position: "Director de Marketing, GrowthHub",
    colorAccent: "light"
  },
  {
    content: "Su capacidad para integrar diseño atractivo con funcionalidad robusta es incomparable. RayKevin no solo desarrolló nuestra plataforma, sino que nos guió en todo el proceso estratégico.",
    author: "Laura Sánchez",
    position: "Fundadora, CreativeScope",
    image: "/lovable-uploads/3c29a91e-8284-4f0f-af72-36b1b9a61e2e.png",
    colorAccent: "dark"
  },
  {
    content: "Finalmente me siento en control de mi presencia digital. Gracias a RayKevin por hacer el proceso tan claro y efectivo.",
    author: "Mark Julio",
    position: "Emprendedor",
    image: "/lovable-uploads/323ae7b6-75b2-4ab4-b2fd-95d2c27e3533.png",
    colorAccent: "default"
  },
  {
    content: "Simple, confiable y efectivo. Es perfecto para mi negocio y los clientes lo notan de inmediato.",
    author: "Linda Kiely",
    position: "Vendedora E-commerce",
    image: "/lovable-uploads/3c29a91e-8284-4f0f-af72-36b1b9a61e2e.png",
    colorAccent: "light"
  },
  {
    content: "Esta herramienta nos ha ahorrado horas cada mes. ¡Altamente recomendado para cualquier negocio que quiera destacar!",
    author: "James Luis",
    position: "Fundador Startup",
    colorAccent: "dark"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-5">
              Lo que dicen mis clientes
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Mi enfoque multidisciplinario está transformando la manera en que las empresas gestionan su presencia digital. Esto es lo que algunos de mis clientes dicen sobre su experiencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <GlassCard className="rounded-3xl min-h-[280px] flex flex-col justify-between transition-all duration-300 hover:translate-y-[-5px]">
      <div>
        <Quote className="text-raykevin-purple mb-4" size={32} />
        <p className="text-white mb-6 text-sm md:text-base">
          "{testimonial.content}"
        </p>
      </div>

      <div className="flex items-center">
        {testimonial.image ? (
          <Avatar className="h-12 w-12 border-2 border-white/20">
            <AvatarImage src={testimonial.image} alt={testimonial.author} />
            <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
          </Avatar>
        ) : (
          <Avatar className="h-12 w-12 bg-raykevin-purple/50 border-2 border-white/20">
            <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
          </Avatar>
        )}
        <div className="ml-3">
          <h4 className="text-white font-medium text-sm md:text-base">
            {testimonial.author}
          </h4>
          <p className="text-white/50 text-xs md:text-sm">
            {testimonial.position}
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default TestimonialsSection;
