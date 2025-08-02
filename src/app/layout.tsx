import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { bookData } from '@/data/bookContent';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Historia de la Licenciatura en Biología UAQ',
  description: 'Historia documentada de la creación de la Licenciatura en Biología y su desarrollo durante el primer lustro de existencia - Universidad Autónoma de Querétaro',
  keywords: [
    'UAQ',
    'Universidad Autónoma de Querétaro',
    'Licenciatura en Biología',
    'Historia',
    'Dr. Carlos Isaac Silva Barrón',
    'Biología',
    'Educación Superior',
    'Ciencias Naturales',
    'Libro Digital',
    'Historia Académica'
  ],
  authors: [{ name: bookData.author }],
  creator: 'UMDesigner',
  publisher: bookData.publisher,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Historia de la Licenciatura en Biología UAQ',
    description: 'Libro digital interactivo sobre los primeros cinco años de la Licenciatura en Biología de la Universidad Autónoma de Querétaro',
    url: 'https://historia-biologia-uaq.com',
    siteName: 'Historia Biología UAQ',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Historia de la Licenciatura en Biología UAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Historia de la Licenciatura en Biología UAQ',
    description: 'Libro digital interactivo sobre los primeros cinco años de la Licenciatura en Biología UAQ',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'theme-color': '#002F46',
    'color-scheme': 'dark light',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          as="style"
        />
        
        {/* Structured Data - Book */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              "name": bookData.title,
              "alternateName": bookData.subtitle,
              "author": {
                "@type": "Person",
                "name": bookData.author
              },
              "publisher": {
                "@type": "Organization",
                "name": bookData.publisher
              },
              "datePublished": bookData.year,
              "description": "Historia documentada de la creación de la Licenciatura en Biología y su desarrollo durante el primer lustro de existencia",
              "inLanguage": "es",
              "genre": "Academic History",
              "about": "Historia académica de la Licenciatura en Biología de la Universidad Autónoma de Querétaro"
            }),
          }}
        />
      </head>
      
      <body className={`${inter.className} antialiased`}>
        {/* Header solo se oculta en la portada */}
        <div id="header-container">
          <Header />
        </div>
        
        <main className="relative">
          {children}
        </main>
        
        <Footer />
        
        {/* Script para ocultar header en portada */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const headerContainer = document.getElementById('header-container');
                const currentPath = window.location.pathname;
                
                if (currentPath === '/' || currentPath === '') {
                  headerContainer.style.display = 'none';
                } else {
                  headerContainer.style.display = 'block';
                }
                
                // Observer para cambios de ruta
                const observer = new MutationObserver(() => {
                  const newPath = window.location.pathname;
                  if (newPath === '/' || newPath === '') {
                    headerContainer.style.display = 'none';
                  } else {
                    headerContainer.style.display = 'block';
                  }
                });
                
                observer.observe(document.body, { 
                  childList: true, 
                  subtree: true 
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}