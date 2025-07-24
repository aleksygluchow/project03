import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
  <title>Home – Aliaksei Hlukhau</title>
  <meta name="description" content="Aliaksei Hlukhau's webpage." />

  {/* Open Graph (Telegram, Messenger) */}
  <meta property="og:title" content="Home" />
  <meta property="og:description" content="Aliaksei Hlukhau – Physics student." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.eigen.to" />
  <meta property="og:image" content="/images/preview.png" /> {/* Optional image */}

  {/* Font you already use */}
  <link
    href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap"
    rel="stylesheet"
  />
</Head>


      <div>
        <h1>Welcome to My Site</h1>
        <p style={{ fontFamily: "'UnifrakturCook', cursive", fontSize: '1.25rem' }}>
  Jetzt in Deutschland{' '}
  <a
    href="https://de.wikipedia.org/wiki/Deutschland"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://flagcdn.com/w40/de.png"
      alt="Deutsche Flagge"
      width="20"
      style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px' }}
    />
  </a>
</p>
      </div>
    </>
  );
}
