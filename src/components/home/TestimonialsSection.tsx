
import { Quote, Star, StarHalf } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import AnimateOnScroll from '../AnimateOnScroll';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GlassCard from '../GlassCard';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  image?: string;
  colorAccent?: "default" | "light" | "dark";
  rating?: number; // Add rating property (out of 5)
}

const testimonials: TestimonialProps[] = [
  {
    content: "RayKevin transformó por completo nuestra presencia digital. Su enfoque multidisciplinario combinando desarrollo web, diseño UX y estrategia de contenido nos dio exactamente lo que necesitábamos.",
    author: "María González",
    position: "CEO, InnovaTech",
    image: "/lovable-uploads/323ae7b6-75b2-4ab4-b2fd-95d2c27e3533.png",
    colorAccent: "default",
    rating: 5
  },
  {
    content: "Trabajar con RayKevin ha sido una experiencia excepcional. No solo entregó un producto técnicamente impecable, sino que realmente entendió nuestras necesidades de negocio.",
    author: "Carlos Méndez",
    position: "Director de Marketing, GrowthHub",
    colorAccent: "light",
    rating: 4.5
  },
  {
    content: "Su capacidad para integrar diseño atractivo con funcionalidad robusta es incomparable. RayKevin no solo desarrolló nuestra plataforma, sino que nos guió en todo el proceso estratégico.",
    author: "Laura Sánchez",
    position: "Fundadora, CreativeScope",
    image: "/lovable-uploads/3c29a91e-8284-4f0f-af72-36b1b9a61e2e.png",
    colorAccent: "dark",
    rating: 5
  },
  {
    content: "Finalmente me siento en control de mi presencia digital. Gracias a RayKevin por hacer el proceso tan claro y efectivo.",
    author: "Mark Julio",
    position: "Emprendedor",
    image: "/lovable-uploads/323ae7b6-75b2-4ab4-b2fd-95d2c27e3533.png",
    colorAccent: "default",
    rating: 4
  },
  {
    content: "Simple, confiable y efectivo. Es perfecto para mi negocio y los clientes lo notan de inmediato.",
    author: "Linda Kiely",
    position: "Vendedora E-commerce",
    image: "/lovable-uploads/3c29a91e-8284-4f0f-af72-36b1b9a61e2e.png",
    colorAccent: "light",
    rating: 4.5
  },
  {
    content: "Esta herramienta nos ha ahorrado horas cada mes. ¡Altamente recomendado para cualquier negocio que quiera destacar!",
    author: "James Luis",
    position: "Fundador Startup",
    colorAccent: "dark",
    rating: 5
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

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="px-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-white/10 hover:bg-white/20 border-white/20" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-white/10 hover:bg-white/20 border-white/20" />
            </div>
          </Carousel>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

// Star rating component to display full, half, or empty stars
const StarRating = ({ rating = 5 }: { rating?: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const totalStars = 5;
  
  return (
    <div className="flex items-center gap-1 mb-4">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={18} className="text-yellow-400 fill-yellow-400" />
      ))}
      
      {hasHalfStar && (
        <StarHalf size={18} className="text-yellow-400 fill-yellow-400" />
      )}
      
      {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={`empty-${i}`} size={18} className="text-yellow-400" />
      ))}
      
      <span className="ml-2 text-xs text-white/70">{rating.toFixed(1)}</span>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <GlassCard className="rounded-3xl min-h-[280px] flex flex-col justify-between transition-all duration-300 hover:translate-y-[-5px]">
      <div>
        <Quote className="text-raykevin-purple mb-2" size={32} />
        
        {/* Add star rating */}
        <StarRating rating={testimonial.rating} />
        
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
