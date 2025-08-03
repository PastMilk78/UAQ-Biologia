import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
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
  title: 'Fauna de las Islas Marías | Facultad de Ciencias Naturales - UAQ',
  description: 'Exploración digital de la biodiversidad y ecosistemas marinos del archipiélago de las Islas Marías - Universidad Autónoma de Querétaro',
  keywords: [
    'UAQ',
    'Universidad Autónoma de Querétaro',
    'Islas Marías',
    'Fauna Marina',
    'Biodiversidad',
    'Ecosistemas Marinos',
    'Ciencias Naturales',
    'Biología Marina',
    'Archipiélago Mexicano',
    'Exploración Digital'
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
    title: 'Fauna de las Islas Marías | Facultad de Ciencias Naturales - UAQ',
    description: 'Exploración digital interactiva de la biodiversidad y ecosistemas marinos del archipiélago de las Islas Marías',
    url: 'https://fauna-islas-marias-uaq.com',
    siteName: 'Fauna Islas Marías UAQ',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fauna de las Islas Marías - Facultad de Ciencias Naturales UAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fauna de las Islas Marías | Facultad de Ciencias Naturales - UAQ',
    description: 'Exploración digital interactiva de la biodiversidad marina del archipiélago de las Islas Marías',
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
              "description": "Exploración digital de la biodiversidad y ecosistemas marinos del archipiélago de las Islas Marías",
              "inLanguage": "es",
              "genre": "Scientific Research",
              "about": "Biodiversidad marina y ecosistemas del archipiélago de las Islas Marías, México"
            }),
          }}
        />
      </head>
      
      <body className={`${inter.className} antialiased`} style={{ background: 'linear-gradient(135deg, #080A0B 0%, #1A1E22 50%, #2D3339 100%)' }}>
        {/* Header solo se oculta en la portada */}
        <div id="header-container">
          <Header />
        </div>
        
        <main className="relative">
          {children}
        </main>
        
        <ChatBot />
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