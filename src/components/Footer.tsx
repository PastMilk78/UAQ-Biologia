'use client';

import Link from 'next/link';
import { bookData } from '@/data/bookContent';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800/90 border-t border-yellow-400/20">
      
      {/* Contenido Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Información del Libro */}
          <div>
            <h3 className="text-yellow-300 font-bold text-xl mb-4">
              {bookData.title}
            </h3>
            <p className="text-white/80 mb-2">
              {bookData.subtitle}
            </p>
            <p className="text-white/70 mb-4">
              Por: {bookData.author}
            </p>
            <p className="text-white/50 text-sm">
              Una obra que documenta los primeros cinco años de existencia 
              de la Licenciatura en Biología de la UAQ, desde sus antecedentes 
              hasta su consolidación como programa académico de excelencia.
            </p>
          </div>

          {/* Enlaces de Navegación */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Capítulos
            </h4>
            <nav>
              <ul className="space-y-2">
                {bookData.navigation.sections.slice(0, 8).map((section) => (
                  <li key={section.id}>
                    <Link
                      href={section.route}
                      className="text-white/70 hover:text-yellow-300 transition-colors duration-300 text-sm"
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Enlaces Adicionales */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Recursos Adicionales
            </h4>
            <nav>
              <ul className="space-y-2">
                {bookData.navigation.sections.slice(8).map((section) => (
                  <li key={section.id}>
                    <Link
                      href={section.route}
                      className="text-white/70 hover:text-yellow-300 transition-colors duration-300 text-sm"
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Universidad */}
            <div className="mt-6 pt-4 border-t border-yellow-400/20">
              <p className="text-yellow-300 font-medium text-sm mb-1">
                Universidad Autónoma de Querétaro
              </p>
              <p className="text-white/50 text-xs">
                Facultad de Biología
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-yellow-400/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright Notice */}
            <div className="text-center md:text-left">
              <p className="text-white/50 text-sm">
                © {currentYear} by UMDesigner. Todos los derechos reservados.
              </p>
            </div>

            {/* Enlaces Rápidos */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link 
                href="/indice" 
                className="text-white/70 hover:text-yellow-300 transition-colors duration-300"
              >
                Índice
              </Link>
              <span className="text-white/30">|</span>
              <Link 
                href="/antecedentes" 
                className="text-white/70 hover:text-yellow-300 transition-colors duration-300"
              >
                Prólogo
              </Link>
              <span className="text-white/30">|</span>
              <Link 
                href="/anexos" 
                className="text-white/70 hover:text-yellow-300 transition-colors duration-300"
              >
                Anexos
              </Link>
              <span className="text-white/30">|</span>
              <Link 
                href="/galeria" 
                className="text-white/70 hover:text-yellow-300 transition-colors duration-300"
              >
                Galería
              </Link>
            </div>
          </div>

          {/* Créditos adicionales */}
          <div className="mt-4 pt-4 border-t border-yellow-400/10 text-center">
            <p className="text-white/30 text-xs">
              Sitio web desarrollado como libro digital interactivo • 
              Optimizado para una experiencia de lectura inmersiva
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;