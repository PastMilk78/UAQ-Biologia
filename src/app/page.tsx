'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { bookData } from '@/data/bookContent';

export default function CoverPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center p-8">
      
      {/* Marco dorado principal */}
      <div className="relative w-full max-w-6xl h-[90vh] border-4 border-yellow-400/80 rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 shadow-2xl overflow-hidden">
        
        {/* Botón ABRIR en esquina superior derecha */}
        <div className="absolute top-8 right-8 z-20">
          <Link href="/indice">
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-yellow-300 hover:bg-yellow-400 text-slate-800 font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              ABRIR
            </motion.button>
          </Link>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col items-center justify-start pt-12 px-8 h-full">
          
          {/* Escudos institucionales */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-8 mb-8"
          >
            {/* Escudo UAQ */}
            <div className="w-20 h-24 bg-gradient-to-b from-blue-900 to-blue-800 rounded border-2 border-yellow-400/60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-yellow-300 text-xs font-bold mb-1">⚜️</div>
                <div className="text-white text-xs font-bold">UAQ</div>
              </div>
            </div>
            
            {/* Escudo Biología */}
            <div className="w-20 h-24 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded border-2 border-yellow-300 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-yellow-800 text-lg">🧬</div>
                <div className="text-yellow-900 text-xs font-bold">BIO</div>
              </div>
            </div>
          </motion.div>

          {/* Títulos institucionales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
              UNIVERSIDAD AUTÓNOMA<br />
              DE QUERÉTARO
            </h1>
            <h2 className="text-white text-xl md:text-2xl font-semibold">
              FACULTAD DE BIOLOGÍA
            </h2>
          </motion.div>

          {/* Títulos del libro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-8 max-w-4xl"
          >
            <h3 className="text-yellow-300 text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              HISTORIA DOCUMENTADA<br />
              DE LA CREACIÓN DE LA<br />
              LICENCIATURA EN BIOLOGÍA
            </h3>
            
            <h4 className="text-yellow-200 text-lg md:text-xl lg:text-2xl font-semibold mb-8">
              Y SU DESARROLLO DURANTE<br />
              EL PRIMER LUSTRO DE EXISTENCIA
            </h4>
          </motion.div>

          {/* Imagen central ilustrativa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex-1 flex items-center justify-center max-w-2xl"
          >
            <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-green-800 via-green-700 to-green-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-yellow-400/30">
              {/* Ilustración con elementos de naturaleza */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  {/* Elementos naturales */}
                  <div className="flex justify-center items-center space-x-4 mb-4">
                    <span className="text-6xl">🐘</span>
                    <span className="text-5xl">🦌</span>
                    <span className="text-4xl">🦜</span>
                  </div>
                  <div className="flex justify-center items-center space-x-4">
                    <span className="text-5xl">🦊</span>
                    <span className="text-6xl">🌿</span>
                    <span className="text-4xl">🦋</span>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <span className="text-3xl">🌺</span>
                    <span className="text-3xl">🍃</span>
                    <span className="text-3xl">🌸</span>
                  </div>
                </div>
              </div>
              
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Autor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-8"
          >
            <p className="text-yellow-200 text-lg md:text-xl font-medium">
              Por el Dr. Carlos Isaac Silva Barrón
            </p>
          </motion.div>
        </div>

        {/* Decoraciones del marco */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-400/60 rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-400/60 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-400/60 rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-400/60 rounded-br-lg"></div>
      </div>

      {/* Menú de navegación inferior */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-800/95 backdrop-blur-sm border-t border-yellow-400/30 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-yellow-300 hover:text-yellow-200 transition-colors duration-300 font-medium">
              • Portada
            </Link>
            <Link href="/indice" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
              • Índice
            </Link>
            <Link href="/antecedentes" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
              • Prólogo
            </Link>
            <Link href="/primer-anio" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
              • Primer Año
            </Link>
            <Link href="/segundo-anio" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
              • Segundo Año
            </Link>
            <Link href="/tercer-anio" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
              • Tercer Año
            </Link>
            <Link href="/cuarto-anio" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
              • Cuarto Año
            </Link>
            <Link href="/quinto-anio" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
              • Quinto Año
            </Link>
            <Link href="/anexos" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
              • Anexos
            </Link>
            <Link href="/galeria" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
              • Galería
            </Link>
            <Link href="/accesibilidad" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
              • Declaración de Accesibilidad
            </Link>
            <Link href="/privacidad" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
              • Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}