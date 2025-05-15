// src/components/AnimatedCarousel.tsx
import React from 'react';
import './AnimatedCarousel.css'; // Importar el archivo CSS

interface AnimatedCarouselProps {
  children: React.ReactNode;
  duration?: string; // Duración de la animación, por ejemplo '30s'
}

const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({ children, duration = '30s' }) => {
  // Duplicamos los hijos para crear un efecto de loop infinito
  const childrenArray = React.Children.toArray(children);
  // Duplicamos dos veces para asegurar un loop más suave
  const duplicatedChildren = [...childrenArray, ...childrenArray, ...childrenArray];

  return (
    <div className="animated-carousel-container overflow-hidden py-4">
      <div
        className="animated-carousel-wrapper flex"
        style={{ animationDuration: duration }}
      >
        {duplicatedChildren.map((child, index) => (
          // Usamos un div para envolver cada hijo y controlar el ancho y margen
          // Ajustamos el tamaño para que se vean mejor los testimonios
          <div key={index} className="animated-carousel-item flex-shrink-0 min-w-0 overflow-hidden px-3 mr-6 w-[280px] sm:w-[320px] lg:w-[360px]">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCarousel;