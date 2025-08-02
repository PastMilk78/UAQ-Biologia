# 📚 Historia de la Licenciatura en Biología UAQ

Libro digital interactivo que documenta la creación y desarrollo de la Licenciatura en Biología de la Universidad Autónoma de Querétaro durante su primer lustro de existencia.

## 🎯 Descripción

Este proyecto es un sitio web tipo libro digital desarrollado en **Next.js 14** que presenta la historia documentada de la creación de la Licenciatura en Biología UAQ, narrada por el **Dr. Carlos Isaac Silva Barrón**.

## 🚀 Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/historia-biologia-uaq.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start

# Exportar sitio estático
npm run export
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── page.tsx           # Portada del libro
│   ├── layout.tsx         # Layout principal
│   ├── indice/            # Página de índice con islas
│   ├── antecedentes/      # Capítulo de antecedentes
│   ├── primer-anio/       # Primer año (template)
│   ├── anexos/           # Descargas por año
│   ├── galeria/          # Galería visual
│   └── [otros-capitulos] # Otros años académicos
├── components/            # Componentes React
│   ├── Header.tsx        # Barra de navegación
│   ├── Footer.tsx        # Pie de página
│   ├── IslandCard.tsx    # Cards del índice
│   ├── YearCarousel.tsx  # Carrusel de años
│   └── [otros]          # Más componentes
├── data/                 # Contenido del libro
│   └── bookContent.ts   # Todos los datos
└── styles/              # Estilos globales
    └── globals.css      # CSS personalizado
```

## 🎨 Diseño Visual

### Colores Principales
- **Azul Oscuro:** `#002F46` (Fondo principal)
- **Dorado:** `#FFD700` (Encabezados y elementos destacados)
- **Verde Turquesa:** `#40E0D0` (Subtítulos y acentos)
- **Crema:** `#FFF8DC` (Fondos suaves)

### Tipografías
- **Encabezados:** Playfair Display (serif elegante)
- **Texto:** Inter (sans-serif clara)
- **Énfasis:** Cursiva para citas y anécdotas

## 📖 Páginas Incluidas

### 🏠 **Portada (`/`)**
- Imagen central de portada
- Título y subtítulo del libro
- Información del autor
- Botón "ABRIR" para acceder

### 🧭 **Índice (`/indice`)**
- 6 islas ilustradas navegables
- Antecedentes + 5 años académicos
- Animaciones y efectos interactivos

### 📚 **Antecedentes (`/antecedentes`)**
- Prólogo narrado
- Reproductor de audio
- Secciones numeradas (1, 2, 3...)
- Anécdotas destacadas
- Descarga de documento completo

### 📆 **Capítulos por Año**
- **Primer Año:** `/primer-anio`
- **Segundo Año:** `/segundo-anio`
- **Tercer Año:** `/tercer-anio`
- **Cuarto Año:** `/cuarto-anio`
- **Quinto Año:** `/quinto-anio`

Cada año incluye:
- Carrusel de tarjetas de resumen
- Secciones numeradas con texto narrativo
- Fotografías históricas
- Anécdotas sobre fondos especiales
- Flecha flotante para volver arriba

### 📎 **Anexos (`/anexos`)**
- Descargas por año académico
- Botones de descarga PDF
- Información de tamaño de archivos

### 🖼️ **Galería (`/galeria`)**
- **Galería de Imágenes:** Grid 4x3 con modal
- **Videos:** 8 reproductores embebidos
- Numeración y descripciones

## 🧩 Componentes Principales

### `Header.tsx`
- Navegación fija superior
- Iconos: Inicio, Índice, Audio, Imprimir, Descargar
- Menú hamburguesa lateral
- Se oculta en la portada

### `IslandCard.tsx`
- Cards interactivos del índice
- Animaciones hover y click
- Ilustraciones 3D amigables
- Numeración por capítulo

### `YearCarousel.tsx`
- Carrusel horizontal con `react-slick`
- Tarjetas de resumen
- Botones "Leer más" con scroll automático
- Responsive design

### `Footer.tsx`
- Enlaces a todas las secciones
- Información del autor y universidad
- Copyright "© 2025 by UMDesigner"

## ⚡ Características Técnicas

- ✅ **Next.js 14** con App Router
- ✅ **TypeScript** para tipado estático
- ✅ **Tailwind CSS** con colores personalizados
- ✅ **Framer Motion** para animaciones elegantes
- ✅ **React Slick** para carruseles
- ✅ **React Player** para videos
- ✅ **Responsive Design** completo
- ✅ **SEO optimizado** con metadata
- ✅ **Accesibilidad** (ARIA labels, contraste)

## 📱 Responsividad

### Desktop (1200px+)
- Layout completo con todas las funcionalidades
- Carruseles de 3 columnas
- Navegación horizontal

### Tablet (768px - 1199px)
- Carruseles de 2 columnas
- Menú adaptativo
- Imágenes optimizadas

### Mobile (320px - 767px)
- Layout de una columna
- Menú hamburguesa
- Carruseles de 1 elemento
- Botones táctiles optimizados

## 🔧 Configuración

### Tailwind Config
Los colores del libro están definidos en `tailwind.config.js`:

```js
colors: {
  book: {
    'navy': '#002F46',
    'gold': '#FFD700',
    'turquoise': '#40E0D0',
    'cream': '#FFF8DC',
    // ...más colores
  }
}
```

### Contenido del Libro
Todo el contenido está centralizado en `src/data/bookContent.ts`:

```ts
export const bookData = {
  title: "Historia documentada...",
  author: "Dr. Carlos Isaac Silva Barrón",
  antecedentes: { /* ... */ },
  primerAnio: { /* ... */ },
  // ...más capítulos
};
```

## 📦 Dependencias Principales

```json
{
  "next": "14.0.0",
  "react": "18.2.0",
  "typescript": "5.2.0",
  "tailwindcss": "^3.3.5",
  "framer-motion": "^10.16.0",
  "react-slick": "^0.29.0",
  "react-player": "^2.13.0"
}
```

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm run build
# Deploy automático con Git integration
```

### Netlify
```bash
npm run export
# Upload de la carpeta `out/`
```

### Servidor Tradicional
```bash
npm run build
npm start
# Servidor en puerto 3000
```

## 📈 Performance

- **Imágenes optimizadas** con Next.js Image
- **Lazy loading** automático
- **Code splitting** por rutas
- **Fonts optimizados** con Google Fonts
- **CSS purificado** con Tailwind
- **Animaciones GPU-aceleradas**

## 🎯 Funcionalidades Futuras

- [ ] **Audio Player** funcional con controles
- [ ] **Búsqueda** dentro del contenido
- [ ] **Marcadores** para páginas favoritas
- [ ] **Modo oscuro/claro**
- [ ] **Notas** del usuario
- [ ] **Compartir** secciones específicas
- [ ] **Impresión** optimizada
- [ ] **Offline mode** con Service Worker

## 📞 Soporte y Contacto

- **Autor:** Dr. Carlos Isaac Silva Barrón
- **Desarrollo:** UMDesigner
- **Universidad:** Universidad Autónoma de Querétaro
- **Facultad:** Ciencias Naturales

## 📄 Licencia

© 2025 by UMDesigner. Todos los derechos reservados.

---

**Desarrollado con ❤️ para preservar la historia académica de la UAQ**