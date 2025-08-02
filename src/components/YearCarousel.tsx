'use client';

import { useRef } from 'react';
// import Slider from 'react-slick';
// Icons replaced with emojis for compatibility
import { motion } from 'framer-motion';

interface CarouselCard {
  id: number;
  title: string;
  description: string;
  sectionId: string;
}

interface YearCarouselProps {
  cards: CarouselCard[];
  onReadMore: (sectionId: string) => void;
}

const YearCarousel = ({ cards, onReadMore }: YearCarouselProps) => {
  // Simplified version without react-slick for now

  return (
    <section className="py-16 bg-gradient-to-r from-book-cream/10 to-book-turquoise/5">
      <div className="container mx-auto px-4">
        
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="book-subtitle text-2xl md:text-3xl mb-4">
            Resumen del Capítulo
          </h2>
          <p className="text-book-text-light max-w-2xl mx-auto">
            Explora los momentos más importantes de este período académico
          </p>
        </motion.div>

        {/* Grid Simple (reemplaza el carrusel temporalmente) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 h-80 flex flex-col group cursor-pointer"
              onClick={() => onReadMore(card.sectionId)}
            >
              
              {/* Número de la tarjeta */}
              <div className="flex items-center justify-between mb-4">
                <div className="section-number w-12 h-12 text-lg">
                  {index + 1}
                </div>
                <div className="w-8 h-8 bg-book-turquoise/20 rounded-full flex items-center justify-center text-book-turquoise group-hover:bg-book-turquoise group-hover:text-white transition-all duration-300">
                  ↓
                </div>
              </div>

              {/* Contenido */}
              <h3 className="text-xl font-bold text-book-navy mb-3 group-hover:text-book-gold-dark transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-book-text-light leading-relaxed flex-grow text-sm">
                {card.description}
              </p>

              {/* Botón */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-book-turquoise font-semibold text-sm group-hover:text-book-gold-dark transition-colors duration-300">
                  Leer más ↓
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-book-text-light text-sm mb-2">
            Haz clic en cualquier tarjeta para ir a esa sección
          </p>
          <div className="w-6 h-6 mx-auto text-book-gold animate-bounce text-xl">
            ↓
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YearCarousel;