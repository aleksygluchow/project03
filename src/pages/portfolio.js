import Head from 'next/head'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Aliaksei Hlukhau's webpage." />
        <meta property="og:title" content="Portfolio" />
        <meta property="og:description" content="Aliaksei Hlukhau – Physics student." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eigen.to" />
        <meta property="og:image" content="/images/preview.png" />
      </Head>

      <div className="page-container" style={{ textAlign: 'center' }}>
  <h1 className="page-title">Portfolio</h1>

  <h2 style={{ marginTop: '1.5rem', fontSize: '1.25rem', fontWeight: 600, color: '#333' }}>
    Portfolio not found (yet).
  </h2>


        <div style={{
  position: 'relative',
  width: '100%',
  maxWidth: '500px',   // ✅ don’t let it get huge
  margin: '0 auto'
}}>
  <Image
    src="/images/siemiradzki.jpg"
    alt="Siemiradzki Curtain, Słowacki Theatre"
    width={600}
    height={400}
    style={{
      objectFit: 'contain',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      maxHeight: '300px',    // ✅ cap height
      width: '100%',
      height: 'auto'
    }}
    priority
  />
</div>


        <p style={{
          marginTop: '0.75rem',
          color: '#666',
          fontStyle: 'italic',
          fontSize: '0.95rem',
          lineHeight: 1.5
        }}>
          The artwork shown here is the <strong>Siemiradzki Curtain</strong>, designed by Henryk Siemiradzki  
          for the <a href="https://en.wikipedia.org/wiki/Juliusz_S%C5%82owacki_Theatre" target="_blank" rel="noopener noreferrer">
          Słowacki Theatre in Kraków</a>.
        </p>
      </div>
    </>
  )
}
