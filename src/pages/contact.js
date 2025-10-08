import Head from 'next/head';
import Layout from '../components/Layout'



export default function Contact() {
  return (

    <>
      <Head>
  <title>Contact</title>
  <meta name="description" content="Aliaksei Hlukhau's webpage." />

  {/* Open Graph (Telegram, Messenger) */}
  <meta property="og:title" content="Contact" />
  <meta property="og:description" content="Aliaksei Hlukhau – Physics student." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.eigen.to" />
  <meta property="og:image" content="/images/preview.png" /> {/* Optional image */}
      </Head>

    <div className="card card--narrow">
  <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>Contact Me</h1>
  <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.5 }}>
    Im always happy to connect. Feel free to reach out through any of the platforms below:
  </p>

  <ul style={{ listStyle: 'none', padding: 0 }}>
    <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
      📧 <a href="mailto:aleksy.gluchow@gmail.com" style={{ color: '#0070f3', textDecoration: 'none' }}>
        aleksy.gluchow@gmail.com
      </a>
    </li>
    <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
      📸 <a href="https://instagram.com/aleksy.gluchow" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>
        Instagram
      </a>
    </li>
    <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
      👤 <a href="https://facebook.com/aleksy.gluchow" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>
        Facebook
      </a>
    </li>
    <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
      💼 <a href="https://www.linkedin.com/in/aleksyg/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>
        LinkedIn
      </a>
    </li>
  </ul>
</div>

    </>
  );
}