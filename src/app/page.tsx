'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { bookData } from '@/data/bookContent';
// Icons replaced with emojis for compatibility

export default function CoverPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-book-navy via-book-navy to-book-navy/90 flex items-center justify-center relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-book-gold/5 rounded-full blur-xl" />
        <div className="absolute bottom-32 right-24 w-48 h-48 bg-book-turquoise/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-book-gold/3 rounded-full blur-lg" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        
        {/* Imagen de portada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="mb-12"
        >
          <div className="relative w-80 h-96 mx-auto mb-8">
            {/* Placeholder para la imagen de portada */}
            <div className="w-full h-full bg-gradient-to-b from-book-cream to-white rounded-2xl shadow-book border-4 border-book-gold/20 flex flex-col items-center justify-center p-8 relative overflow-hidden">
              
              {/* Decoración de esquinas */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-book-gold/40 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-book-gold/40 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-book-gold/40 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-book-gold/40 rounded-br-lg" />
              
              {/* Icono central */}
              <div className="mb-6">
                <span className="text-6xl">📚</span>
              </div>
              
              {/* Texto de la portada */}
              <h1 className="text-book-navy font-elegant text-xl font-bold text-center leading-tight mb-4">
                Historia Documentada
              </h1>
              <div className="w-16 h-0.5 bg-book-gold/60 mb-4" />
              <p className="text-book-navy/70 text-sm text-center">
                Licenciatura en Biología
              </p>
              
              {/* Año */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <span className="text-book-gold/60 font-bold text-sm">2025</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="book-title text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            {bookData.cover.title}
          </h1>
          
          <h2 className="book-subtitle text-xl md:text-2xl lg:text-3xl mb-8 font-light">
            {bookData.cover.subtitle}
          </h2>
          
          {/* Línea decorativa */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-0.5 bg-book-gold" />
            <span className="mx-4 text-book-turquoise text-2xl">🏛️</span>
            <div className="w-24 h-0.5 bg-book-gold" />
          </div>
          
          <p className="text-book-turquoise text-lg md:text-xl font-medium">
            {bookData.cover.author}
          </p>
        </motion.div>

        {/* Botón de apertura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <Link href="/indice">
            <button className="book-btn book-btn-primary text-2xl px-12 py-6 shadow-lg hover:shadow-xl group relative overflow-hidden">
              <span className="relative z-10 flex items-center space-x-3">
                <span className="group-hover:rotate-12 transition-transform duration-300">📖</span>
                <span>{bookData.cover.buttonText}</span>
              </span>
              
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </Link>
        </motion.div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-book-turquoise/70 text-sm space-y-2"
        >
          <p>Universidad Autónoma de Querétaro</p>
          <p>Facultad de Ciencias Naturales</p>
          <p className="text-book-gold/60">© 2025 by UMDesigner</p>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-book-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-book-gold/70 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </main>
  );
}