'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { bookData } from '@/data/bookContent';
// Icons replaced with emojis for compatibility

export default function AntecedentesPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { antecedentes } = bookData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAudioPlay = () => {
    setIsPlaying(!isPlaying);
    // Aquí iría la lógica del reproductor de audio
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = antecedentes.downloadButton.file;
    link.download = 'antecedentes-biologia-uaq.pdf';
    link.click();
  };

  return (
    <main className="pt-16 min-h-screen bg-gradient-to-b from-book-cream to-white">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-book-navy to-book-navy/90 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="book-title text-5xl md:text-6xl mb-6">
              {antecedentes.title}
            </h1>
            
            <h2 className="book-subtitle text-2xl md:text-3xl mb-8">
              {antecedentes.subtitle}
            </h2>

            {/* Audio Player */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-book-gold/20">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <button
                  onClick={handleAudioPlay}
                  className="w-16 h-16 bg-book-gold hover:bg-book-gold-dark text-book-navy rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                >
                  <span className={`${isPlaying ? 'animate-pulse' : ''}`}>▶️</span>
                </button>
                <div className="text-left">
                  <p className="text-book-turquoise font-semibold">
                    {antecedentes.audioText}
                  </p>
                  <p className="text-white/70 text-sm">
                    Duración: 12 minutos aproximadamente
                  </p>
                </div>
              </div>
              
              {/* Simulación de barra de audio */}
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-book-gold h-2 rounded-full w-0 transition-all duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Secciones del capítulo */}
          {antecedentes.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-20"
              id={`section-${index + 1}`}
            >
              
              {/* Layout de dos columnas */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Columna izquierda - Número y título */}
                <div className="lg:col-span-3">
                  <div className="sticky top-32">
                    <div className="section-number mb-6 mx-auto lg:mx-0">
                      {section.number}
                    </div>
                    <h2 className="book-title text-2xl md:text-3xl text-center lg:text-left mb-4">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Columna derecha - Contenido */}
                <div className="lg:col-span-9">
                  
                  {/* Texto principal */}
                  <div className="book-text text-lg leading-relaxed mb-8">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Imagen si existe */}
                  {section.image && (
                    <div className="mb-8">
                      <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center mb-4">
                        <p className="text-gray-500 text-center">
                          Imagen: {section.imageCaption}
                        </p>
                      </div>
                      <p className="text-book-text-light italic text-center text-sm">
                        {section.imageCaption}
                      </p>
                    </div>
                  )}

                  {/* Anécdota si existe */}
                  {section.anecdote && (
                    <div className="anecdote-block mb-8">
                      <div className="relative">
                        <span className="text-book-turquoise text-3xl mb-4">💬</span>
                        <div className="book-quote">
                          <p className="text-lg leading-relaxed mb-4">
                            {section.anecdote.text}
                          </p>
                          <cite className="text-book-turquoise font-semibold">
                            — {section.anecdote.author}
                          </cite>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Botón de descarga */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button
              onClick={handleDownload}
              className="book-btn book-btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl group"
            >
              <span className="mr-3 group-hover:animate-bounce">📥</span>
              {antecedentes.downloadButton.text}
            </button>
            <p className="text-book-text-light text-sm mt-4">
              Documento completo en formato PDF (2.1 MB)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navegación entre capítulos */}
      <section className="py-16 bg-book-navy/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-book-text-light mb-2">Siguiente capítulo:</p>
              <motion.div whileHover={{ scale: 1.05 }}>
                <a
                  href="/primer-anio"
                  className="book-btn book-btn-secondary px-6 py-3"
                >
                  Primer Año →
                </a>
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-book-text-light mb-2">¿Perdido?</p>
              <motion.div whileHover={{ scale: 1.05 }}>
                <a
                  href="/indice"
                  className="book-btn book-btn-outline px-6 py-3"
                >
                  Volver al Índice
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Botón flotante para volver arriba */}
      <button
        onClick={scrollToTop}
        className="back-to-top"
        aria-label="Volver al inicio"
      >
        ↑
      </button>
    </main>
  );
}