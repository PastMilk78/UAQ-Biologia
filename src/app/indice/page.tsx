'use client';

import { motion } from 'framer-motion';
import { bookData } from '@/data/bookContent';
import IslandCard from '@/components/IslandCard';
// Icons replaced with emojis for compatibility

export default function IndicePage() {
  return (
    <main className="pt-16 min-h-screen bg-gradient-to-br from-book-navy via-book-navy/95 to-book-navy">
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          
          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="book-title text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              {bookData.index.title}
            </h1>
            
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-0.5 bg-book-gold" />
              <span className="mx-6 text-book-turquoise text-3xl animate-spin" style={{animationDuration: '10s'}}>🧭</span>
              <div className="w-32 h-0.5 bg-book-gold" />
            </div>
            
            <p className="book-subtitle text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {bookData.index.subtitle}
            </p>
          </motion.div>

          {/* Introducción */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-book-gold/20">
              <span className="text-book-gold text-4xl mx-auto mb-6 block">🗺️</span>
              <p className="text-white/80 text-lg leading-relaxed">
                Embárcate en un viaje a través de los primeros cinco años de la 
                Licenciatura en Biología de la UAQ. Cada isla representa un capítulo 
                único de esta fascinante historia académica, desde los antecedentes 
                que dieron origen al programa hasta su consolidación como una 
                licenciatura de excelencia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid de Islas */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          
          {/* Subtítulo de sección */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="book-subtitle text-3xl md:text-4xl mb-4">
              Explora los Capítulos
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Haz clic en cualquier isla para comenzar tu exploración
            </p>
          </motion.div>

          {/* Grid de Islas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {bookData.index.islands.map((island, index) => (
              <IslandCard
                key={island.id}
                island={island}
                index={index}
              />
            ))}
          </div>

          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-book-turquoise/10 to-book-gold/10 rounded-xl p-8 max-w-4xl mx-auto border border-book-gold/20">
              <h3 className="book-subtitle text-2xl mb-4">
                Una Historia de Cinco Años
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Este libro digital documenta meticulosamente cada año de los primeros 
                cinco años de existencia de la Licenciatura en Biología, desde agosto 
                de 2001 hasta julio de 2006. Cada capítulo está enriquecido con 
                fotografías históricas, anécdotas de protagonistas y documentos originales 
                que dan vida a esta extraordinaria historia académica.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-book-gold mb-2">6</div>
                  <div className="text-white/70">Capítulos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-book-turquoise mb-2">5</div>
                  <div className="text-white/70">Años Documentados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-book-gold mb-2">∞</div>
                  <div className="text-white/70">Memorias Preservadas</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Elementos decorativos de fondo */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-book-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-book-turquoise/3 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-book-gold/2 rounded-full blur-2xl" />
      </div>
    </main>
  );
}