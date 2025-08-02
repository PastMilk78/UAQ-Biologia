// Contenido completo del libro digital "Historia de la Licenciatura en Biología UAQ"

export const bookData = {
  // Información general del libro
  title: "Historia documentada de la creación de la Licenciatura en Biología",
  subtitle: "Y su desarrollo durante el primer lustro de existencia",
  author: "Dr. Carlos Isaac Silva Barrón",
  year: "2025",
  publisher: "Universidad Autónoma de Querétaro",

  // Portada
  cover: {
    title: "Historia documentada de la creación de la Licenciatura en Biología",
    subtitle: "Y su desarrollo durante el primer lustro de existencia",
    author: "Dr. Carlos Isaac Silva Barrón",
    image: "/images/portada-libro.jpg",
    buttonText: "ABRIR"
  },

  // Índice con islas
  index: {
    title: "Historia documentada de la creación de la Licenciatura en Biología",
    subtitle: "Navega por los capítulos de esta fascinante historia",
    islands: [
      {
        id: "antecedentes",
        title: "Antecedentes",
        description: "Los orígenes y fundamentos que dieron vida a la licenciatura",
        icon: "🌱",
        illustration: "/images/island-antecedentes.svg",
        route: "/antecedentes"
      },
      {
        id: "primer-anio",
        title: "Primer Año",
        description: "Los primeros pasos en la construcción del programa",
        icon: "🎓",
        illustration: "/images/island-primer-anio.svg",
        route: "/primer-anio"
      },
      {
        id: "segundo-anio",
        title: "Segundo Año",
        description: "Consolidación y crecimiento del programa académico",
        icon: "📚",
        illustration: "/images/island-segundo-anio.svg",
        route: "/segundo-anio"
      },
      {
        id: "tercer-anio",
        title: "Tercer Año",
        description: "Expansión y fortalecimiento institucional",
        icon: "🔬",
        illustration: "/images/island-tercer-anio.svg",
        route: "/tercer-anio"
      },
      {
        id: "cuarto-anio",
        title: "Cuarto Año",
        description: "Madurez académica y reconocimiento externo",
        icon: "🏆",
        illustration: "/images/island-cuarto-anio.svg",
        route: "/cuarto-anio"
      },
      {
        id: "quinto-anio",
        title: "Quinto Año",
        description: "Consolidación definitiva y proyección al futuro",
        icon: "🌟",
        illustration: "/images/island-quinto-anio.svg",
        route: "/quinto-anio"
      }
    ]
  },

  // Antecedentes
  antecedentes: {
    title: "Antecedentes",
    subtitle: "Prólogo",
    audioLink: "/audio/prologo-autor.mp3",
    audioText: "Escúchalo de la voz del Dr. Carlos Isaac Silva Barrón",
    sections: [
      {
        number: "1",
        title: "SOBRE EL CONTEXTO HISTÓRICO",
        content: `La creación de la Licenciatura en Biología en la Universidad Autónoma de Querétaro no fue un evento aislado, sino el resultado de una serie de circunstancias históricas, académicas y sociales que convergieron en un momento específico de la historia de nuestra institución.

Durante la década de los años noventa, México experimentaba una transformación significativa en su sistema educativo superior. Las universidades públicas enfrentaban el desafío de diversificar su oferta académica para responder a las necesidades emergentes de una sociedad en constante evolución.`,
        image: "/images/contexto-historico.jpg",
        imageCaption: "Campus de la UAQ en los años 90"
      },
      {
        number: "2", 
        title: "LA VISIÓN INSTITUCIONAL",
        content: `La Universidad Autónoma de Querétaro, bajo el liderazgo visionario de sus autoridades académicas, reconoció la importancia estratégica de incorporar las ciencias biológicas a su oferta educativa. Esta decisión no solo representaba una expansión curricular, sino una apuesta por el futuro científico y tecnológico de la región.

El proyecto de crear una licenciatura en biología surgió de la confluencia de varios factores: la demanda social por profesionales en el área de las ciencias naturales, la disponibilidad de recursos humanos especializados, y la infraestructura necesaria para sustentar un programa académico de calidad.`,
        anecdote: {
          text: "Recuerdo vívidamente las primeras reuniones donde se discutía la viabilidad del proyecto. Había una mezcla de emoción y preocupación en el ambiente. Todos sabíamos que estábamos a punto de embarcarnos en una aventura académica sin precedentes en nuestra universidad.",
          author: "Dr. Carlos Isaac Silva Barrón"
        }
      },
      {
        number: "3",
        title: "LOS PRIMEROS PASOS",
        content: `El proceso de diseño curricular comenzó con un análisis exhaustivo de las necesidades del mercado laboral y las tendencias internacionales en la enseñanza de las ciencias biológicas. Se conformó un comité académico multidisciplinario que trabajó incansablemente durante meses para dar forma a lo que sería el plan de estudios fundacional.

La consulta con expertos nacionales e internacionales fue fundamental. Se establecieron vínculos con universidades de prestigio, se analizaron modelos curriculares exitosos y se adaptaron las mejores prácticas a la realidad específica de nuestra institución y región.`
      }
    ],
    downloadButton: {
      text: "Descargar documento completo",
      file: "/downloads/antecedentes-completo.pdf"
    }
  },

  // Estructura para años (template que se replicará)
  yearTemplate: {
    title: "", // Se llena dinámicamente
    subtitle: "", // Se llena dinámicamente  
    period: "", // Ejemplo: "Agosto 2001 a Julio 2002"
    carousel: [
      // Se llena dinámicamente con tarjetas de resumen
    ],
    sections: [
      // Se llena dinámicamente con secciones numeradas
    ]
  },

  // Primer Año
  primerAnio: {
    title: "Primer Año",
    subtitle: "Los cimientos de una nueva era académica",
    period: "Agosto 2001 a Julio 2002",
    sections: [
      {
        number: 1,
        title: "EL INICIO DE UNA AVENTURA",
        content: `El primer día de clases de la Licenciatura en Biología marcó un hito histórico en la Universidad Autónoma de Querétaro. Veintidós estudiantes pioneros cruzaron las puertas del aula que se convertiría en el laboratorio de una experiencia educativa única.

La emoción era palpable no solo entre los estudiantes, sino también entre los profesores que habían sido cuidadosamente seleccionados para esta misión. Cada uno de ellos era consciente de que estaba participando en la construcción de algo especial, algo que trascendería las fronteras del aula para impactar en la sociedad queretana.`,
        image: "/images/primer-dia-clases.jpg",
        imageCaption: "Primer día de clases, agosto de 2001"
      },
      {
        number: 2,
        title: "CONSTRUYENDO LA INFRAESTRUCTURA",
        content: `Uno de los mayores desafíos del primer año fue la construcción y adecuación de los espacios físicos necesarios para la enseñanza de las ciencias biológicas. Los laboratorios, que hasta entonces existían solo en los planos arquitectónicos, debían materializarse en espacios funcionales y seguros para la práctica científica.

La adquisición de equipo especializado representó otro reto significativo. Microscopios, centrífugas, estufas de cultivo, y una amplia gama de instrumentos de laboratorio debían ser cuidadosamente seleccionados, adquiridos e instalados antes del inicio de las actividades prácticas.`,
        anecdote: {
          text: "Los primeros microscopios llegaron una semana antes del inicio de clases. Recuerdo que pasamos toda la noche desempacándolos y calibrándolos. Era una carrera contra el tiempo, pero la emoción de ver finalmente el equipo funcionando hizo que valiera la pena cada hora de trabajo.",
          author: "Prof. María Elena Rodríguez"
        }
      },
      {
        number: 3,
        title: "LOS ESTUDIANTES PIONEROS",
        content: `Los veintidós estudiantes que conformaron la primera generación no fueron seleccionados al azar. Cada uno de ellos había demostrado no solo excelencia académica, sino también una genuina pasión por las ciencias naturales y una disposición para enfrentar los desafíos inherentes a ser parte de un programa académico en sus primeros pasos.

Provenían de diferentes ciudades de Querétaro y estados vecinos, trayendo consigo una diversidad de perspectivas y experiencias que enriquecería el ambiente académico. Sus nombres quedarían para siempre grabados en la historia de la licenciatura como los verdaderos pioneros de esta aventura educativa.`
      }
    ]
  },

  // Anexos - Descargas
  anexos: {
    title: "Descargas",
    subtitle: "Documentos complementarios por año académico",
    downloads: [
      {
        year: "Primer Año",
        description: "Documentos fundacionales y memorias del primer año académico",
        file: "/downloads/primer-anio-completo.pdf",
        size: "2.3 MB"
      },
      {
        year: "Segundo Año", 
        description: "Expansión académica y primeros logros estudiantiles",
        file: "/downloads/segundo-anio-completo.pdf",
        size: "1.8 MB"
      },
      {
        year: "Tercer Año",
        description: "Consolidación del programa y reconocimiento institucional", 
        file: "/downloads/tercer-anio-completo.pdf",
        size: "2.1 MB"
      },
      {
        year: "Cuarto Año",
        description: "Madurez académica y proyección nacional",
        file: "/downloads/cuarto-anio-completo.pdf", 
        size: "2.5 MB"
      },
      {
        year: "Quinto Año",
        description: "Consolidación definitiva y perspectivas futuras",
        file: "/downloads/quinto-anio-completo.pdf",
        size: "2.0 MB"
      }
    ]
  },

  // Galería
  galeria: {
    title: "Galería Visual",
    sections: [
      {
        title: "Explora la Historia Completa",
        type: "images",
        items: [
          {
            id: 1,
            title: "Ceremonia de Inauguración",
            description: "Acto protocolario de inicio de la licenciatura",
            thumbnail: "/images/gallery/thumb-01.jpg",
            fullImage: "/images/gallery/full-01.jpg"
          },
          {
            id: 2,
            title: "Primeros Laboratorios",
            description: "Instalación del equipo científico inicial",
            thumbnail: "/images/gallery/thumb-02.jpg", 
            fullImage: "/images/gallery/full-02.jpg"
          },
          {
            id: 3,
            title: "Primera Generación",
            description: "Los 22 estudiantes pioneros en su primer día",
            thumbnail: "/images/gallery/thumb-03.jpg",
            fullImage: "/images/gallery/full-03.jpg"
          },
          {
            id: 4,
            title: "Trabajo de Campo",
            description: "Primeras prácticas en el ecosistema queretano",
            thumbnail: "/images/gallery/thumb-04.jpg",
            fullImage: "/images/gallery/full-04.jpg"
          },
          {
            id: 5,
            title: "Profesores Fundadores",
            description: "El cuerpo académico que hizo posible el sueño",
            thumbnail: "/images/gallery/thumb-05.jpg",
            fullImage: "/images/gallery/full-05.jpg"
          },
          {
            id: 6,
            title: "Primera Graduación",
            description: "Ceremonia histórica de la primera generación",
            thumbnail: "/images/gallery/thumb-06.jpg",
            fullImage: "/images/gallery/full-06.jpg"
          },
          {
            id: 7,
            title: "Investigación Inicial", 
            description: "Primeros proyectos de investigación estudiantil",
            thumbnail: "/images/gallery/thumb-07.jpg",
            fullImage: "/images/gallery/full-07.jpg"
          },
          {
            id: 8,
            title: "Reconocimiento Nacional",
            description: "Primeras distinciones académicas recibidas",
            thumbnail: "/images/gallery/thumb-08.jpg",
            fullImage: "/images/gallery/full-08.jpg"
          },
          {
            id: 9,
            title: "Expansión de Instalaciones",
            description: "Crecimiento de la infraestructura académica",
            thumbnail: "/images/gallery/thumb-09.jpg",
            fullImage: "/images/gallery/full-09.jpg"
          },
          {
            id: 10,
            title: "Vínculos Internacionales",
            description: "Primeros intercambios con universidades extranjeras",
            thumbnail: "/images/gallery/thumb-10.jpg",
            fullImage: "/images/gallery/full-10.jpg"
          },
          {
            id: 11,
            title: "Tradición Académica",
            description: "Establecimiento de ceremonias y tradiciones",
            thumbnail: "/images/gallery/thumb-11.jpg",
            fullImage: "/images/gallery/full-11.jpg"
          },
          {
            id: 12,
            title: "Legado Permanente",
            description: "El impacto duradero en la comunidad científica",
            thumbnail: "/images/gallery/thumb-12.jpg",
            fullImage: "/images/gallery/full-12.jpg"
          }
        ]
      },
      {
        title: "Descubre más en video",
        type: "videos",
        description: "Testimonios y documentales sobre la creación de la licenciatura",
        items: [
          {
            id: 1,
            title: "Testimonio del Fundador",
            description: "Dr. Carlos Silva narra los orígenes",
            thumbnail: "/images/video/thumb-01.jpg",
            videoUrl: "/videos/testimonio-fundador.mp4"
          },
          {
            id: 2,
            title: "Primeros Estudiantes",
            description: "Entrevistas con la primera generación",
            thumbnail: "/images/video/thumb-02.jpg",
            videoUrl: "/videos/primeros-estudiantes.mp4"
          },
          {
            id: 3,
            title: "Construcción de Laboratorios",
            description: "Proceso de edificación de instalaciones",
            thumbnail: "/images/video/thumb-03.jpg",
            videoUrl: "/videos/construccion-labs.mp4"
          },
          {
            id: 4,
            title: "Primera Graduación",
            description: "Ceremonia histórica completa",
            thumbnail: "/images/video/thumb-04.jpg",
            videoUrl: "/videos/primera-graduacion.mp4"
          },
          {
            id: 5,
            title: "Impacto Social",
            description: "El programa en la comunidad queretana",
            thumbnail: "/images/video/thumb-05.jpg", 
            videoUrl: "/videos/impacto-social.mp4"
          },
          {
            id: 6,
            title: "Reconocimientos",
            description: "Premios y distinciones recibidas",
            thumbnail: "/images/video/thumb-06.jpg",
            videoUrl: "/videos/reconocimientos.mp4"
          },
          {
            id: 7,
            title: "Investigación Destacada",
            description: "Proyectos científicos sobresalientes",
            thumbnail: "/images/video/thumb-07.jpg",
            videoUrl: "/videos/investigacion.mp4"
          },
          {
            id: 8,
            title: "Legado y Futuro",
            description: "Perspectivas y proyección institucional",
            thumbnail: "/images/video/thumb-08.jpg",
            videoUrl: "/videos/legado-futuro.mp4"
          }
        ]
      }
    ]
  },

  // Navegación
  navigation: {
    home: "/",
    index: "/indice", 
    sections: [
      { id: "antecedentes", title: "Antecedentes", route: "/antecedentes" },
      { id: "primer-anio", title: "Primer Año", route: "/primer-anio" },
      { id: "segundo-anio", title: "Segundo Año", route: "/segundo-anio" },
      { id: "tercer-anio", title: "Tercer Año", route: "/tercer-anio" },
      { id: "cuarto-anio", title: "Cuarto Año", route: "/cuarto-anio" },
      { id: "quinto-anio", title: "Quinto Año", route: "/quinto-anio" },
      { id: "anexos", title: "Anexos", route: "/anexos" },
      { id: "galeria", title: "Galería", route: "/galeria" }
    ]
  },

  // Páginas legales
  legal: {
    accesibilidad: {
      title: "Accesibilidad",
      content: `Este sitio web ha sido desarrollado siguiendo las pautas de accesibilidad web para garantizar que todos los usuarios puedan navegar y acceder al contenido sin barreras.

**Características de accesibilidad implementadas:**

- Navegación por teclado completa
- Textos alternativos en todas las imágenes
- Contraste de colores optimizado
- Estructura semántica clara
- Compatibilidad con lectores de pantalla
- Subtítulos en contenido multimedia

**Mejoras continuas:**
Trabajamos constantemente para mejorar la accesibilidad de nuestro sitio. Si encuentras alguna barrera o tienes sugerencias, no dudes en contactarnos.`
    },
    privacidad: {
      title: "Aviso de Privacidad",
      content: `La Universidad Autónoma de Querétaro se compromete a proteger la privacidad de los usuarios de este sitio web.

**Datos que recopilamos:**
- Información de navegación (páginas visitadas, tiempo de permanencia)
- Datos técnicos (tipo de navegador, sistema operativo)
- Información voluntariamente proporcionada en formularios

**Uso de la información:**
Los datos recopilados se utilizan únicamente para mejorar la experiencia del usuario y generar estadísticas de uso del sitio.

**Derechos del usuario:**
Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales.

**Contacto:**
Para ejercer tus derechos o hacer consultas sobre privacidad, contacta a: privacidad@uaq.mx`
    }
  }
};

export default bookData;