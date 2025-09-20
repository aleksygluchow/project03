import Head from 'next/head'

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

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '3rem 1rem',
        textAlign: 'center'
      }}>
        <img 
          src="/images/01-23.png" 
          alt="Zadania 1-23" 
          style={{ display: 'block', margin: '0 auto' }}
        />
      </div>
    </>
  )
}
