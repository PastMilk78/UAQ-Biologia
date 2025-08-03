'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { bookData } from '@/data/bookContent';

const FloatingIsland = ({ island, position, delay }: { island: any, position: string, delay: number }) => {
  const islandElements = {
    'primer-anio': {
      animals: ['🦎', '🦗', '🐍', '🐢'],
      plants: ['🌿', '🌺', '🍃'],
      bg: 'from-emerald-600 to-green-800',
      title: 'ISLA MARÍA MADRE'
    },
    'segundo-anio': {
      animals: ['🦋', '🐛', '🦗', '🐞'],
      plants: ['🌸', '🌺', '🌻'],
      bg: 'from-sky-500 to-blue-600',
      title: 'ISLA MARÍA MAGDALENA'
    },
    'tercer-anio': {
      animals: ['🐟', '🦀', '🐠', '🐙'],
      plants: ['🌊', '🪸', '🌾'],
      bg: 'from-cyan-600 to-teal-700',
      title: 'ISLA MARÍA CLEOFAS'
    },
    'cuarto-anio': {
      animals: ['🦜', '🕊️', '🦅', '🐦'],
      plants: ['🌴', '🥥', '🌿'],
      bg: 'from-orange-500 to-red-600',
      title: 'ARRECIFE SAN JUANITO'
    },
    'quinto-anio': {
      animals: ['🐢', '🦈', '🐳', '🐙'],
      plants: ['🪸', '🌊', '🌿'],
      bg: 'from-indigo-600 to-purple-700',
      title: 'ZONA MARINA PROTEGIDA'
    }
  };

  const config = islandElements[island.id as keyof typeof islandElements] || islandElements['primer-anio'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay, type: "spring", stiffness: 100 }}
      className={`absolute ${position} cursor-pointer transform-gpu`}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <Link href={island.route}>
        <div className={`relative w-64 h-48 bg-gradient-to-br ${config.bg} rounded-full shadow-2xl border-4 border-yellow-400/50 overflow-hidden`}>
          
          {/* Base de la isla */}
          <div className="absolute bottom-0 w-full h-16 bg-yellow-600/80 rounded-b-full"></div>
          
          {/* Elementos animados */}
          <div className="absolute inset-0 p-4">
            
            {/* Animales que crecen individualmente */}
            <div className="flex justify-around items-end h-full pb-16">
              {config.animals.map((animal, idx) => (
                <motion.div
                  key={idx}
                  className="text-3xl"
                  whileHover={{ 
                    scale: 1.8, 
                    y: -15,
                    rotate: idx % 2 === 0 ? 10 : -10,
                    zIndex: 50
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ zIndex: 10 }}
                >
                  {animal}
                </motion.div>
              ))}
            </div>
            
            {/* Plantas que crecen */}
            <div className="absolute top-4 left-4 right-4 flex justify-between">
              {config.plants.map((plant, idx) => (
                <motion.div
                  key={idx}
                  className="text-2xl"
                  whileHover={{ 
                    scale: 2, 
                    y: -10,
                    rotate: idx % 2 === 0 ? 15 : -15
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {plant}
                </motion.div>
              ))}
            </div>
            
            {/* Título flotante */}
            <motion.div 
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
              whileHover={{ scale: 1.1 }}
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-1">
                <span className="text-yellow-300 font-bold text-sm">{config.title}</span>
              </div>
            </motion.div>
          </div>
          
          {/* Efectos de brillo */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 rounded-full opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default function IndicePage() {
  return (
    <main className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #080A0B 0%, #1A1E22 50%, #2D3339 100%)' }}>
      
      {/* Header de navegación flotante */}
      <div className="fixed top-8 left-8 z-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <Link href="/" className="p-3 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-400/30 hover:bg-yellow-400/30 transition-all duration-300">
            <span className="text-yellow-300 text-xl">🏠</span>
          </Link>
          <div className="px-6 py-3 bg-slate-800/70 backdrop-blur-sm rounded-full border border-yellow-400/30">
            <span className="text-yellow-300 font-bold">ÍNDICE</span>
          </div>
        </motion.div>
      </div>

      {/* Controles flotantes superiores derecha */}
      <div className="fixed top-8 right-8 z-50">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <motion.button 
            className="p-3 bg-slate-800/70 backdrop-blur-sm rounded-full border border-yellow-400/30 hover:bg-yellow-400/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-yellow-300 text-xl">▶️</span>
          </motion.button>
          <motion.button 
            className="p-3 bg-slate-800/70 backdrop-blur-sm rounded-full border border-yellow-400/30 hover:bg-yellow-400/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-yellow-300 text-xl">☰</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Título principal centrado */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center pt-20 pb-12 relative z-20"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 mb-4 leading-tight">
          FAUNA DE LAS ISLAS MARÍAS<br />
          EXPLORACIÓN DIGITAL
        </h1>
        <h2 className="text-xl md:text-2xl text-teal-300 mb-6">
          BIODIVERSIDAD Y ECOSISTEMAS MARINOS<br />
          DEL ARCHIPIÉLAGO MEXICANO
        </h2>
        <p className="text-lg text-yellow-200 italic">
          Facultad de Ciencias Naturales - UAQ
        </p>
        
        {/* Botón Prólogo */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/antecedentes">
            <motion.button 
              className="bg-yellow-300/90 hover:bg-yellow-300 text-slate-800 font-bold px-8 py-3 rounded-full text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              INTRODUCCIÓN
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Islas flotantes dinámicas */}
      <div className="absolute inset-0 z-10">
        <FloatingIsland 
          island={bookData.index.islands[0]} 
          position="top-1/3 left-16" 
          delay={0.8} 
        />
        <FloatingIsland 
          island={bookData.index.islands[1]} 
          position="top-1/2 right-20" 
          delay={1.0} 
        />
        <FloatingIsland 
          island={bookData.index.islands[2]} 
          position="bottom-1/3 left-1/3" 
          delay={1.2} 
        />
        <FloatingIsland 
          island={bookData.index.islands[3]} 
          position="bottom-1/4 right-1/3" 
          delay={1.4} 
        />
        <FloatingIsland 
          island={bookData.index.islands[4]} 
          position="top-1/4 right-1/2" 
          delay={1.6} 
        />
      </div>

      {/* Efectos de fondo */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-pink-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
    </main>
  );
}