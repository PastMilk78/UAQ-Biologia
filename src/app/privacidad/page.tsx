'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { bookData } from '@/data/bookContent';

export default function PrivacidadPage() {
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
            Política de Privacidad
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
              La Universidad Autónoma de Querétaro se compromete a proteger la privacidad de los usuarios de este sitio web.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mt-8 mb-4">
                Datos que recopilamos:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>Información de navegación (páginas visitadas, tiempo de permanencia)</li>
                <li>Datos técnicos (tipo de navegador, sistema operativo)</li>
                <li>Información voluntariamente proporcionada en formularios</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mt-8 mb-4">
                Uso de la información:
              </h3>
              <p className="text-white/90">
                Los datos recopilados se utilizan únicamente para mejorar la experiencia del usuario y generar estadísticas de uso del sitio.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mt-8 mb-4">
                Derechos del usuario:
              </h3>
              <p className="text-white/90">
                Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mt-8 mb-4">
                Contacto:
              </h3>
              <p className="text-white/90">
                Para ejercer tus derechos o hacer consultas sobre privacidad, contacta a: privacidad@uaq.mx
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}