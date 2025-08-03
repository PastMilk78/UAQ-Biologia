'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { 
//   FaHome, 
//   FaList, 
//   FaVolumeUp, 
//   FaPrint, 
//   FaDownload, 
//   FaBars, 
//   FaTimes 
// } from 'react-icons/fa';
import { bookData } from '@/data/bookContent';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Implementar lógica de descarga del PDF completo
    const link = document.createElement('a');
    link.href = '/downloads/historia-biologia-completa.pdf';
    link.download = 'Historia-Biologia-UAQ.pdf';
    link.click();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-md border-b border-yellow-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Navegación Principal */}
          <div className="flex items-center space-x-6">
            
            {/* Home */}
            <Link
              href="/"
              className="flex items-center justify-center w-10 h-10 bg-yellow-400/20 hover:bg-yellow-400 hover:text-slate-800 rounded-full transition-all duration-300 text-yellow-400"
              title="Ir a portada"
            >
              🏠
            </Link>

            {/* Índice */}
            <Link
              href="/indice"
              className="bg-yellow-400 hover:bg-yellow-300 text-slate-800 text-sm px-4 py-2 rounded-full transition-all duration-300 hidden md:inline-flex font-medium"
            >
              ÍNDICE
            </Link>

            {/* Audio Player (futuro) */}
            <button
              className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white hover:text-slate-800 rounded-full transition-all duration-300 text-white opacity-50"
              title="Reproducir audio (próximamente)"
              disabled
            >
              🔊
            </button>

            {/* Imprimir */}
            <button
              onClick={handlePrint}
              className="flex items-center justify-center w-10 h-10 bg-green-400/20 hover:bg-green-400 hover:text-slate-800 rounded-full transition-all duration-300 text-green-400 hidden md:flex"
              title="Imprimir página"
            >
              🖨️
            </button>

            {/* Descargar PDF */}
            <button
              onClick={handleDownloadPDF}
              className="flex items-center justify-center w-10 h-10 bg-blue-400/20 hover:bg-blue-400 hover:text-slate-800 rounded-full transition-all duration-300 text-blue-400 hidden md:flex"
              title="Descargar PDF completo"
            >
              📥
            </button>
          </div>

          {/* Título del libro (centro) */}
          <div className="hidden lg:block text-center flex-1 max-w-md mx-8">
            <h1 className="text-yellow-300 font-bold text-lg truncate">
              Historia de la Licenciatura en Biología
            </h1>
            <p className="text-white/80 text-sm">
              Universidad Autónoma de Querétaro
            </p>
          </div>

          {/* Menú Hamburguesa */}
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-10 h-10 bg-yellow-400/20 hover:bg-yellow-400 hover:text-slate-800 rounded-full transition-all duration-300 text-yellow-400"
            title="Menú de navegación"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Menú Lateral Desplegable */}
        <div className={`fixed top-16 right-0 h-screen w-80 bg-slate-800 border-l border-yellow-400/20 shadow-xl transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Header del menú */}
          <div className="p-6 border-b border-yellow-400/20">
            <h2 className="text-yellow-300 font-bold text-xl mb-2">
              Navegación
            </h2>
            <p className="text-white/70 text-sm">
              Explora todos los capítulos
            </p>
          </div>

          {/* Lista de secciones */}
          <nav className="p-6">
            <ul className="space-y-3">
              {bookData.navigation.sections.map((section, index) => (
                <li key={section.id}>
                  <Link
                    href={section.route}
                    className="flex items-center space-x-3 text-white/90 hover:text-yellow-300 hover:bg-yellow-400/10 transition-all duration-300 py-2 px-3 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-400 text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium">{section.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Acciones adicionales en mobile */}
            <div className="mt-8 pt-6 border-t border-yellow-400/20 md:hidden">
              <div className="flex space-x-4">
                <button
                  onClick={handlePrint}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4 rounded-lg transition-all duration-300"
                >
                  <span className="mr-2">🖨️</span>
                  Imprimir
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg transition-all duration-300"
                >
                  <span className="mr-2">📥</span>
                  PDF
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* Overlay para cerrar menú */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-[-1]"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;