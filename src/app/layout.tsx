import type { Metadata } from 'next';
import '@/styles/globals.css';
import { bookData } from '@/data/bookContent';

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
    <html lang="es">
      <head>
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
      
      <body 
        style={{ 
          margin: 0,
          fontFamily: 'wix-madefor-text-v2, sans-serif',
          backgroundColor: '#ffffff'
        }}
      >
        {children}
      </body>
    </html>
  );
}