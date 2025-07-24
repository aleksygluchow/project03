import Head from 'next/head';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <Head>
  <title>Portfolio</title>
  <meta name="description" content="Aliaksei Hlukhau's webpage." />

  {/* Open Graph (Telegram, Messenger) */}
  <meta property="og:title" content="Portfolio" />
  <meta property="og:description" content="Aliaksei Hlukhau – Physics student." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.eigen.to" />
  <meta property="og:image" content="/images/preview.png" /> {/* Optional image */}
      </Head>

      <div style={{
        maxWidth: '600px',
        margin: 0,
        padding: '2rem 1rem'
      }}>
        <h1>Portfolio</h1>

        <Image
          src="/images/no-projects.png"
          alt="Empty portfolio"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.15))'
          }}
        />

        <p style={{
          marginTop: '1rem',
          fontStyle: 'italic',
          color: '#888'
        }}>
          no projects here yet
        </p>
      </div>
    </>
  );
}
