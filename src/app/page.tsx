'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'madefor-display-bold';
          src: url('https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4e7dc8d2-4b92-4c8f-8fd8-9de80a0b4b9e.woff2') format('woff2');
          font-display: swap;
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'helveticaneuew01-65medi';
          src: url('https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b1ca5d6e-d19b-4f2c-84d2-ef17e6fa7f6e.woff2') format('woff2');
          font-display: swap;
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'bodoni-moda';
          src: url('https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/1e7a9b6c-8d2f-4a3e-9b5c-7f6e8d9a0b1c.woff2') format('woff2');
          font-display: swap;
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'din-next-w01-light';
          src: url('https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5c8a7d9e-6f4b-4e2a-8d3c-9b6e5f8a7c4d.woff2') format('woff2');
          font-display: swap;
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'wix-madefor-text-v2';
          src: url('https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8e6d4b9f-7c5a-4e9b-8f6c-7d5e9a8b6c4f.woff2') format('woff2');
          font-display: swap;
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `}</style>

      <div style={{ 
        minHeight: '100vh',
        background: '#ffffff',
        position: 'relative',
        fontFamily: 'wix-madefor-text-v2, sans-serif'
      }}>
        {/* Header */}
        <header style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            fontFamily: 'madefor-display-bold, sans-serif',
            fontSize: '24px',
            fontWeight: 700,
            color: '#2563eb'
          }}>
            Facultad de Biología UAQ
          </div>
          <nav style={{ display: 'flex', gap: '30px' }}>
            <a href="#inicio" style={{
              fontFamily: 'helveticaneuew01-65medi, sans-serif',
              fontSize: '16px',
              color: '#374151',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}>Inicio</a>
            <a href="#investigacion" style={{
              fontFamily: 'helveticaneuew01-65medi, sans-serif',
              fontSize: '16px',
              color: '#374151',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}>Investigación</a>
            <a href="#programas" style={{
              fontFamily: 'helveticaneuew01-65medi, sans-serif',
              fontSize: '16px',
              color: '#374151',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}>Programas</a>
            <a href="#contacto" style={{
              fontFamily: 'helveticaneuew01-65medi, sans-serif',
              fontSize: '16px',
              color: '#374151',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}>Contacto</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section style={{
          marginTop: '80px',
          padding: '60px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h1 style={{
            fontFamily: 'bodoni-moda, serif',
            fontSize: '72px',
            fontWeight: 700,
            color: '#1f2937',
            lineHeight: 1.1,
            margin: '0 0 20px 0',
            letterSpacing: '-0.02em'
          }}>
            Fauna de las Islas Marías
          </h1>

          <h2 style={{
            fontFamily: 'helveticaneuew01-65medi, sans-serif',
            fontSize: '28px',
            fontWeight: 500,
            color: '#059669',
            margin: '0 0 40px 0',
            lineHeight: 1.3
          }}>
            Biodiversidad y Conservación Marina
          </h2>

          <p style={{
            fontFamily: 'din-next-w01-light, sans-serif',
            fontSize: '20px',
            fontWeight: 300,
            color: '#6b7280',
            maxWidth: '600px',
            lineHeight: 1.6,
            margin: '0 0 60px 0'
          }}>
            Explora la extraordinaria biodiversidad del archipiélago de las Islas Marías, un ecosistema único en el Océano Pacífico mexicano, hogar de especies endémicas y un laboratorio natural para la investigación científica.
          </p>

          <Link 
            href="/indice"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '12px',
              fontFamily: 'helveticaneuew01-65medi, sans-serif',
              fontSize: '18px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(37, 99, 235, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 99, 235, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.3)'
            }}
          >
            Explorar Investigación
          </Link>
        </section>

        {/* Features Section */}
        <section style={{
          padding: '100px 40px',
          background: '#f8fafc'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: 'white',
                marginBottom: '24px'
              }}>
                🏝️
              </div>
              <h3 style={{
                fontFamily: 'helveticaneuew01-65medi, sans-serif',
                fontSize: '24px',
                fontWeight: 600,
                color: '#1f2937',
                margin: '0 0 16px 0'
              }}>
                Ecosistemas Insulares
              </h3>
              <p style={{
                fontFamily: 'din-next-w01-light, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                color: '#6b7280',
                lineHeight: 1.6,
                margin: 0
              }}>
                Estudio de los ecosistemas únicos de las cuatro islas principales: María Madre, María Magdalena, María Cleofas y San Juanito.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: 'white',
                marginBottom: '24px'
              }}>
                🐢
              </div>
              <h3 style={{
                fontFamily: 'helveticaneuew01-65medi, sans-serif',
                fontSize: '24px',
                fontWeight: 600,
                color: '#1f2937',
                margin: '0 0 16px 0'
              }}>
                Especies Endémicas
              </h3>
              <p style={{
                fontFamily: 'din-next-w01-light, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                color: '#6b7280',
                lineHeight: 1.6,
                margin: 0
              }}>
                Investigación de la fauna endémica incluyendo reptiles, aves marinas y especies de importancia ecológica.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: 'white',
                marginBottom: '24px'
              }}>
                🔬
              </div>
              <h3 style={{
                fontFamily: 'helveticaneuew01-65medi, sans-serif',
                fontSize: '24px',
                fontWeight: 600,
                color: '#1f2937',
                margin: '0 0 16px 0'
              }}>
                Investigación Científica
              </h3>
              <p style={{
                fontFamily: 'din-next-w01-light, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                color: '#6b7280',
                lineHeight: 1.6,
                margin: 0
              }}>
                Metodologías avanzadas de investigación marina y conservación de ecosistemas insulares tropicales.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          background: '#1f2937',
          padding: '60px 40px 40px',
          color: 'white'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            <div>
              <h3 style={{
                fontFamily: 'helveticaneuew01-65medi, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                margin: '0 0 20px 0',
                color: 'white'
              }}>
                Universidad
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{
                    fontFamily: 'din-next-w01-light, sans-serif',
                    fontSize: '14px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}>Universidad Autónoma de Querétaro</a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{
                    fontFamily: 'din-next-w01-light, sans-serif',
                    fontSize: '14px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}>Facultad de Ciencias Naturales</a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{
                    fontFamily: 'din-next-w01-light, sans-serif',
                    fontSize: '14px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}>Departamento de Biología</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'helveticaneuew01-65medi, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                margin: '0 0 20px 0',
                color: 'white'
              }}>
                Investigación
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{
                    fontFamily: 'din-next-w01-light, sans-serif',
                    fontSize: '14px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}>Proyectos Activos</a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{
                    fontFamily: 'din-next-w01-light, sans-serif',
                    fontSize: '14px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}>Publicaciones</a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{
                    fontFamily: 'din-next-w01-light, sans-serif',
                    fontSize: '14px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}>Colaboraciones</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'helveticaneuew01-65medi, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                margin: '0 0 20px 0',
                color: 'white'
              }}>
                Contacto
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{
                    fontFamily: 'din-next-w01-light, sans-serif',
                    fontSize: '14px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}>Dirección</a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{
                    fontFamily: 'din-next-w01-light, sans-serif',
                    fontSize: '14px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}>Teléfono</a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{
                    fontFamily: 'din-next-w01-light, sans-serif',
                    fontSize: '14px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}>Email</a>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '1px solid #374151',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: 'din-next-w01-light, sans-serif',
              fontSize: '14px',
              color: '#9ca3af',
              margin: 0
            }}>
              &copy; 2024 Facultad de Biología UAQ. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}