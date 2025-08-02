'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface IslandCardProps {
  island: {
    id: string;
    title: string;
    description: string;
    icon: string;
    illustration: string;
    route: string;
  };
  index: number;
}

const IslandCard = ({ island, index }: IslandCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={island.route}>
        <div className="island-card relative h-64 md:h-72">
          
          {/* Número de capítulo */}
          <div className="absolute -top-3 -left-3 z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-book-gold to-book-gold-dark rounded-full flex items-center justify-center text-book-navy font-bold text-lg shadow-lg">
              {index + 1}
            </div>
          </div>

          {/* Icono principal */}
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
            {island.icon}
          </div>

          {/* Contenido */}
          <div className="relative z-10">
            <h3 className="book-title text-2xl md:text-3xl mb-4 group-hover:text-book-gold-dark transition-colors duration-300">
              {island.title}
            </h3>
            
            <p className="text-book-text leading-relaxed mb-6 text-sm md:text-base">
              {island.description}
            </p>

            {/* Botón de acción */}
            <div className="mt-auto">
              <span className="book-btn book-btn-primary text-sm group-hover:scale-105 transition-transform duration-300">
                Explorar Capítulo
              </span>
            </div>
          </div>

          {/* Decoración de fondo */}
          <div className="absolute inset-0 bg-gradient-to-t from-book-cream/10 to-transparent rounded-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-book-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </Link>
    </motion.div>
  );
};

export default IslandCard;