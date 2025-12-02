export default function Home() {
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
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            🎨 Próximamente: Generador Completo
          </h2>
          <p style={{ color: '#9ca3af' }}>
            Esta aplicación de generación de ambigramas estará disponible próximamente.
            Los ambigramas son palabras o frases que mantienen su significado cuando se leen
            de forma rotada o invertida.
          </p>
        </div>

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
