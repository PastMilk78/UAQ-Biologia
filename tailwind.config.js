/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores del libro digital
        book: {
          'navy': '#002F46',        // Azul oscuro de fondo
          'gold': '#FFD700',        // Dorado para encabezados
          'gold-dark': '#B8860B',   // Dorado oscuro
          'turquoise': '#40E0D0',   // Verde turquesa para subtítulos
          'turquoise-dark': '#20B2AA', // Turquesa más oscuro
          'cream': '#FFF8DC',       // Crema para fondos suaves
          'gray-light': '#F5F5F5',  // Gris claro
          'text': '#333333',        // Texto principal
          'text-light': '#666666',  // Texto secundario
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'elegant': ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'chapter': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
        'section': ['2rem', { lineHeight: '1.3', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'book': '0 10px 25px rgba(0, 47, 70, 0.3)',
        'card': '0 5px 15px rgba(0, 0, 0, 0.1)',
        'modal': '0 25px 50px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'water': "url('/images/water-texture.png')",
        'paper': "url('/images/paper-texture.png')",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}