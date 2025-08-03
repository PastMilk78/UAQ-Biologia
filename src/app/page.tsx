'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / centerY * -10
    const rotateY = (x - centerX) / centerX * 10
    
    setMousePosition({ x: rotateY, y: rotateX })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.gstatic.com/s/bodonimoda/v20/aFT67PyzsOwC2RKJ9pJD4GCnFxBAVjJ4P0U.woff2');
        @import url('https://fonts.gstatic.com/s/madefor/v2/A_d94a_iWqo7LZhOC72ZW9I.woff2');
        @import url('https://fonts.gstatic.com/s/dinnext/v2/R70djykVROCDTmd5KTgJ.woff2');

        @font-face {
          font-family: 'bodoni-moda';
          src: url('https://fonts.gstatic.com/s/bodonimoda/v20/aFT67PyzsOwC2RKJ9pJD4GCnFxBAVjJ4P0U.woff2') format('woff2');
          font-display: swap;
        }
        @font-face {
          font-family: 'helveticaneuew01-65medi';
          src: url('https://fonts.gstatic.com/s/helveticaneuew01-65medi/v1/jb27oJwCc1wBaGd_9KkS4DVZJnBX5EJNbdI') format('woff2');
          font-display: swap;
        }
        @font-face {
          font-family: 'din-next-w01-light';
          src: url('https://fonts.gstatic.com/s/dinnext/v2/R70djykVROCDTmd5KTgJ.woff2') format('woff2');
          font-display: swap;
        }
        @font-face {
          font-family: 'wix-madefor-text-v2';
          src: url('https://fonts.gstatic.com/s/madefor/v2/A_d94a_iWqo7LZhOC72ZW9I.woff2') format('woff2');
          font-display: swap;
        }

        .shield {
          width: 80px;
          height: 100px;
          background: linear-gradient(145deg, #1E40AF, #3B82F6);
          border-radius: 10px 10px 50% 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 24px;
          box-shadow: 0 8px 16px rgba(30, 64, 175, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .shield:hover {
          transform: translateZ(30px) scale(1.1) rotateY(10deg) !important;
          box-shadow: 0 12px 24px rgba(30, 64, 175, 0.5);
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <main 
        className="min-h-screen flex items-center justify-center p-5" 
        style={{ 
          background: 'linear-gradient(135deg, #080A0B 0%, #1A1E22 50%, #2D3339 100%)',
          fontFamily: 'wix-madefor-text-v2, sans-serif'
        }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '60px 80px',
            maxWidth: '800px',
            width: '100%',
            textAlign: 'center',
            boxShadow: `0 30px 60px rgba(0, 0, 0, 0.3), 
                        0 10px 20px rgba(0, 0, 0, 0.2),
                        inset 0 0 0 1px rgba(255, 255, 255, 0.1)`,
            backdropFilter: 'blur(10px)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(10px)`
          }}
        >
          {/* Shields Container */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '40px',
            position: 'relative',
            zIndex: 2
          }}>
            <div className="shield" style={{ transform: 'translateZ(20px)' }}>🏛️</div>
            <div className="shield" style={{ transform: 'translateZ(20px)' }}>🔬</div>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'bodoni-moda, serif',
            fontSize: '48px',
            fontWeight: 700,
            color: '#1E40AF',
            margin: '0 0 20px 0',
            lineHeight: 1.2,
            transform: 'translateZ(15px)',
            transition: 'all 0.3s ease'
          }}>
            Fauna de las Islas Marías
          </h1>

          {/* Subtitle */}
          <h2 style={{
            fontFamily: 'helveticaneuew01-65medi, sans-serif',
            fontSize: '24px',
            color: '#059669',
            margin: '0 0 40px 0',
            fontWeight: 500,
            transform: 'translateZ(10px)',
            transition: 'all 0.3s ease'
          }}>
            Una Exploración Digital
          </h2>

          {/* Central Illustration */}
          <div style={{
            width: '300px',
            height: '300px',
            margin: '0 auto 40px',
            background: 'radial-gradient(circle, #E0F2FE 0%, #BAE6FD 50%, #7DD3FC 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(125, 211, 252, 0.3)',
            transform: 'translateZ(25px)',
            transition: 'all 0.3s ease',
            overflow: 'hidden'
          }}>
            {/* Rotating background effect */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              animation: 'rotate 10s linear infinite'
            }} />
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                fontSize: '80px',
                marginBottom: '20px',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                transition: 'all 0.3s ease'
              }}>
                🏝️
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '15px',
                marginTop: '20px'
              }}>
                {['🦎', '🐛', '🦋', '🐍', '🌺', '🌿', '🦗', '🐢'].map((emoji, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: '32px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      transform: 'translateZ(5px)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateZ(15px) scale(1.4) rotate(15deg)'
                      e.currentTarget.style.filter = 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateZ(5px) scale(1) rotate(0deg)'
                      e.currentTarget.style.filter = 'none'
                    }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Author */}
          <p style={{
            fontFamily: 'din-next-w01-light, sans-serif',
            fontSize: '18px',
            color: '#6B7280',
            fontWeight: 300,
            transform: 'translateZ(5px)',
            transition: 'all 0.3s ease',
            marginBottom: '40px'
          }}>
            Facultad de Ciencias Naturales - UAQ
          </p>

          {/* Navigation Link */}
          <div style={{ transform: 'translateZ(15px)' }}>
            <Link 
              href="/indice"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(145deg, #1E40AF, #3B82F6)',
                color: 'white',
                padding: '12px 32px',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(30, 64, 175, 0.3)',
                fontSize: '16px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(30, 64, 175, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)'
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(30, 64, 175, 0.3)'
              }}
            >
              Explorar Islas
            </Link>
          </div>

          {/* UAQ Logo */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            opacity: 0.1,
            transform: 'translateZ(1px)',
            fontSize: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            🎓
          </div>
        </div>
      </main>
    </>
  )
}