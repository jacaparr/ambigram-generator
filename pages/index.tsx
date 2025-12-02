import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const generateAmbigram = () => {
    if (!text.trim()) {
      alert('Por favor escribe algo')
      return
    }

    setLoading(true)
    
    // Generar SVG ambigram inline
    const svg = `
      <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="white"/>
        <text x="400" y="200" font-family="Arial, sans-serif" font-size="80" font-weight="bold" 
              text-anchor="middle" dominant-baseline="middle" fill="black">${text.toUpperCase()}</text>
        <g transform="translate(400,200) rotate(180) translate(-400,-200)">
          <text x="400" y="200" font-family="Arial, sans-serif" font-size="80" font-weight="bold" 
                text-anchor="middle" dominant-baseline="middle" fill="rgba(100,100,100,0.3)">${text.toUpperCase()}</text>
        </g>
        <line x1="0" y1="200" x2="800" y2="200" stroke="rgba(0,0,0,0.1)" stroke-width="2"/>
      </svg>
    `
    
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    setImageUrl(url)
    setLoading(false)
  }

  const downloadImage = () => {
    if (!imageUrl) return
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = `ambigram-${text}.svg`
    link.click()
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #1a1a2e, #6a0572, #1a1a2e)',
      color: 'white',
      padding: '4rem 1rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Generador de Ambigramas
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#d1d5db' }}>
            Crea ambigramas rotationales online - 100% gratis, sin marca de agua
          </p>
        </div>

        <div style={{
          background: '#1f2937',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '2rem',
          border: '1px solid #374151'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{
              background: '#3b82f6',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              marginRight: '1rem'
            }}>1</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Escribe tu texto</h2>
          </div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateAmbigram()}
            placeholder="Ej: AMOR, VIDA, TU NOMBRE..."
            style={{
              width: '100%',
              padding: '1rem 1.5rem',
              borderRadius: '0.5rem',
              background: '#374151',
              border: '1px solid #4b5563',
              color: 'white',
              fontSize: '1.25rem',
              outline: 'none'
            }}
          />
        </div>

        <div style={{
          background: '#1f2937',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '2rem',
          border: '1px solid #374151'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{
              background: '#a78bfa',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              marginRight: '1rem'
            }}>2</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Genera tu ambigrama</h2>
          </div>
          <button
            onClick={generateAmbigram}
            disabled={loading || !text.trim()}
            style={{
              width: '100%',
              background: loading || !text.trim() ? '#4b5563' : 'linear-gradient(to right, #3b82f6, #a78bfa)',
              color: 'white',
              fontWeight: 'bold',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontSize: '1.25rem',
              border: 'none',
              cursor: loading || !text.trim() ? 'not-allowed' : 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => !loading && text.trim() && (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {loading ? 'Generando...' : 'Generar Ambigrama'}
          </button>
        </div>

        {imageUrl && (
          <div style={{
            background: '#1f2937',
            borderRadius: '1rem',
            padding: '2rem',
            border: '1px solid #374151'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                background: '#10b981',
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginRight: '1rem'
              }}>3</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Tu ambigrama está listo</h2>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '0.5rem',
              padding: '2rem',
              marginBottom: '1.5rem'
            }}>
              <img
                src={imageUrl}
                alt="Ambigrama generado"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <button
              onClick={downloadImage}
              style={{
                width: '100%',
                background: '#10b981',
                color: 'white',
                fontWeight: 'bold',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontSize: '1.25rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#059669')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#10b981')}
            >
              ⬇️ Descargar SVG sin marca de agua
            </button>
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem'
        }}>
          <div style={{
            background: '#1f2937',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            textAlign: 'center',
            border: '1px solid #374151'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✨</div>
            <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>100% Gratis</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Sin límites ni pagos</p>
          </div>
          <div style={{
            background: '#1f2937',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            textAlign: 'center',
            border: '1px solid #374151'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🚫</div>
            <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Sin Marca de Agua</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Descarga limpia</p>
          </div>
          <div style={{
            background: '#1f2937',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            textAlign: 'center',
            border: '1px solid #374151'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>⚡</div>
            <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Instantáneo</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Genera en segundos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
