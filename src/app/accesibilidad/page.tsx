'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { bookData } from '@/data/bookContent';

export default function AccesibilidadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Botón de regreso */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center text-yellow-300 hover:text-yellow-200 transition-colors duration-300">
            ← Regresar a Portada
          </Link>
        </motion.div>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4">
            Declaración de Accesibilidad
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800/50 rounded-xl p-8 border border-yellow-400/20"
        >
          <div className="text-white leading-relaxed space-y-6">
            <p className="text-lg">
              Este sitio web ha sido desarrollado siguiendo las pautas de accesibilidad web para garantizar que todos los usuarios puedan navegar y acceder al contenido sin barreras.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mt-8 mb-4">
                Características de accesibilidad implementadas:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>Navegación por teclado completa</li>
                <li>Textos alternativos en todas las imágenes</li>
                <li>Contraste de colores optimizado</li>
                <li>Estructura semántica clara</li>
                <li>Compatibilidad con lectores de pantalla</li>
                <li>Subtítulos en contenido multimedia</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mt-8 mb-4">
                Mejoras continuas:
              </h3>
              <p className="text-white/90">
                Trabajamos constantemente para mejorar la accesibilidad de nuestro sitio. Si encuentras alguna barrera o tienes sugerencias, no dudes en contactarnos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}