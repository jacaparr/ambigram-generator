import { useState } from 'react'

export default function Home() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [isRotated, setIsRotated] = useState(false)

  const generateAmbigram = () => {
    if (!text1.trim()) {
      alert('Por favor escribe la primera palabra')
      return
    }
    if (!text2.trim()) {
      alert('Por favor escribe la segunda palabra')
      return
    }

    setLoading(true)

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
        <defs>
          <style>
            .ambigram-text {
              font-family: Arial, sans-serif;
              font-size: 80px;
              font-weight: bold;
              fill: #000;
            }
          </style>
        </defs>
        <rect width="800" height="400" fill="#ffffff"/>
        <line x1="100" y1="200" x2="700" y2="200" stroke="#ccc" stroke-width="2"/>
        <text x="400" y="230" text-anchor="middle" class="ambigram-text">${text1.toUpperCase()}</text>
        <g transform="rotate(180 400 200)">
          <text x="400" y="230" text-anchor="middle" class="ambigram-text">${text2.toUpperCase()}</text>
        </g>
      </svg>
    `

    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    setImageUrl(url)
    setLoading(false)
    setIsRotated(false)
  }

  const downloadSVG = () => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
        <defs>
          <style>
            .ambigram-text {
              font-family: Arial, sans-serif;
              font-size: 80px;
              font-weight: bold;
              fill: #000;
            }
          </style>
        </defs>
        <rect width="800" height="400" fill="#ffffff"/>
        <line x1="100" y1="200" x2="700" y2="200" stroke="#ccc" stroke-width="2"/>
        <text x="400" y="230" text-anchor="middle" class="ambigram-text">${text1.toUpperCase()}</text>
        <g transform="rotate(180 400 200)">
          <text x="400" y="230" text-anchor="middle" class="ambigram-text">${text2.toUpperCase()}</text>
        </g>
      </svg>
    `

    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ambigrama-${text1}-${text2}.svg`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '0.5rem' }}>
          Generador de Ambigramas
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem' }}>
          Crea ambigramas rotacionales online - 100% gratis, sin marca de agua
        </p>

        <div style={{
          background: '#1a202c',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              background: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              marginRight: '1rem'
            }}>1</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', margin: 0 }}>Escribe tus dos palabras</h2>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#9ca3af', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              Palabra 1 (vista normal)
            </label>
            <input
              type="text"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="Ej: AMOR"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.125rem',
                background: '#2d3748',
                border: 'none',
                borderRadius: '0.5rem',
                color: 'white',
                outline: 'none'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: '#9ca3af', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              Palabra 2 (vista girada 180°)
            </label>
            <input
              type="text"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              placeholder="Ej: ROMA"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.125rem',
                background: '#2d3748',
                border: 'none',
                borderRadius: '0.5rem',
                color: 'white',
                outline: 'none'
              }}
            />
          </div>
        </div>

        <div style={{
          background: '#1a202c',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              background: '#8b5cf6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              marginRight: '1rem'
            }}>2</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', margin: 0 }}>Genera tu ambigrama</h2>
          </div>
          <button
            onClick={generateAmbigram}
            disabled={loading || !text1.trim() || !text2.trim()}
            style={{
              width: '100%',
              padding: '1rem',
              background: (loading || !text1.trim() || !text2.trim()) ? '#4b5563' : 'linear-gradient(to right, #3b82f6, #a78bfa)',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: (loading || !text1.trim() || !text2.trim()) ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Generando...' : 'Generar Ambigrama'}
          </button>
        </div>

        {imageUrl && (
          <div style={{
            background: '#1a202c',
            borderRadius: '1rem',
            padding: '2rem',
            marginBottom: '1.5rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                background: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginRight: '1rem'
              }}>3</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', margin: 0 }}>Tu ambigrama está listo</h2>
            </div>
            <div style={{
              background: '#ffffff',
              borderRadius: '0.5rem',
              padding: '2rem',
              marginBottom: '1rem'
            }}>
              <img
                src={imageUrl}
                alt="Ambigrama generado"
                style={{
                  width: '100%',
                  height: 'auto',
                  transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.8s ease-in-out'
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setIsRotated(!isRotated)}
                style={{
                  flex: '1 1 200px',
                  padding: '1rem',
                  background: '#6366f1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                🔄 {isRotated ? 'Vista Normal' : 'Girar 180°'}
              </button>
              <button
                onClick={downloadSVG}
                style={{
                  flex: '1 1 200px',
                  padding: '1rem',
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                ⬇️ Descargar SVG
              </button>
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '3rem' }}>
          <div style={{
            background: '#1a202c',
            borderRadius: '1rem',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✨</div>
            <div style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.25rem' }}>100% Gratis</div>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Sin costos ocultos</div>
          </div>
          <div style={{
            background: '#1a202c',
            borderRadius: '1rem',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🚫</div>
            <div style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.25rem' }}>Sin Marca de Agua</div>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Descarga limpia</div>
          </div>
          <div style={{
            background: '#1a202c',
            borderRadius: '1rem',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⚡</div>
            <div style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.25rem' }}>Instantáneo</div>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Genera en segundos</div>
          </div>
        </div>
      </div>
    </div>
  )
}
