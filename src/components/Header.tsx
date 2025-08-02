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
    <header className="fixed top-0 left-0 right-0 z-50 bg-book-navy/95 backdrop-blur-md border-b border-book-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Navegación Principal */}
          <div className="flex items-center space-x-6">
            
            {/* Home */}
            <Link
              href="/indice"
              className="flex items-center justify-center w-10 h-10 bg-book-gold/20 hover:bg-book-gold hover:text-book-navy rounded-full transition-all duration-300 text-book-gold"
              title="Ir al índice"
            >
              🏠
            </Link>

            {/* Índice */}
            <Link
              href="/indice"
              className="book-btn book-btn-outline text-sm px-4 py-2 hidden md:inline-flex"
            >
              ÍNDICE
            </Link>

            {/* Audio Player (futuro) */}
            <button
              className="flex items-center justify-center w-10 h-10 bg-book-turquoise/20 hover:bg-book-turquoise hover:text-white rounded-full transition-all duration-300 text-book-turquoise"
              title="Reproducir audio (próximamente)"
              disabled
            >
              🔊
            </button>

            {/* Imprimir */}
            <button
              onClick={handlePrint}
              className="flex items-center justify-center w-10 h-10 bg-book-gold/20 hover:bg-book-gold hover:text-book-navy rounded-full transition-all duration-300 text-book-gold hidden md:flex"
              title="Imprimir página"
            >
              🖨️
            </button>

            {/* Descargar PDF */}
            <button
              onClick={handleDownloadPDF}
              className="flex items-center justify-center w-10 h-10 bg-book-turquoise/20 hover:bg-book-turquoise hover:text-white rounded-full transition-all duration-300 text-book-turquoise hidden md:flex"
              title="Descargar PDF completo"
            >
              📥
            </button>
          </div>

          {/* Título del libro (centro) */}
          <div className="hidden lg:block text-center flex-1 max-w-md mx-8">
            <h1 className="text-book-gold font-elegant text-lg font-semibold truncate">
              Historia de la Licenciatura en Biología
            </h1>
            <p className="text-book-turquoise text-sm">
              Universidad Autónoma de Querétaro
            </p>
          </div>

          {/* Menú Hamburguesa */}
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-10 h-10 bg-book-gold/20 hover:bg-book-gold hover:text-book-navy rounded-full transition-all duration-300 text-book-gold"
            title="Menú de navegación"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Menú Lateral Desplegable */}
        <div className={`fixed top-16 right-0 h-screen w-80 bg-book-navy border-l border-book-gold/20 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Header del menú */}
          <div className="p-6 border-b border-book-gold/20">
            <h2 className="text-book-gold font-elegant text-xl font-semibold mb-2">
              Navegación
            </h2>
            <p className="text-book-turquoise text-sm">
              Explora todos los capítulos
            </p>
          </div>

          {/* Lista de secciones */}
          <nav className="p-6">
            <ul className="space-y-4">
              {bookData.navigation.sections.map((section, index) => (
                <li key={section.id}>
                  <Link
                    href={section.route}
                    className="flex items-center space-x-3 text-white hover:text-book-gold transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="w-8 h-8 bg-book-gold/20 rounded-full flex items-center justify-center text-book-gold text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span>{section.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Acciones adicionales en mobile */}
            <div className="mt-8 pt-6 border-t border-book-gold/20 md:hidden">
              <div className="flex space-x-4">
                <button
                  onClick={handlePrint}
                  className="flex-1 book-btn book-btn-secondary text-sm py-2"
                >
                  <span className="mr-2">🖨️</span>
                  Imprimir
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="flex-1 book-btn book-btn-primary text-sm py-2"
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