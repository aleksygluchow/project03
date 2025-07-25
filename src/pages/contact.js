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

    <div style={styles.container}>
      <h1 style={styles.header}>Contact Me</h1>
      <p style={styles.text}> Im always happy to connect. Feel free to reach out through any of the platforms below:</p>

      <ul style={styles.list}>
        <li style={styles.item}>
          📧 <a href="mailto:aleksy.gluchow@gmail.com" style={styles.link}>aleksy.gluchow@gmail.com</a>
        </li>
        <li style={styles.item}>
          📸 <a href="https://instagram.com/aleksy.gluchow" style={styles.link} target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>
        <li style={styles.item}>
          👤 <a href="https://facebook.com/aleksy.gluchow" style={styles.link} target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
        <li style={styles.item}>
          💼 <a href="https://www.linkedin.com/in/aleksyg/" style={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
      </ul>
    </div>

    </>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  text: {
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
    lineHeight: '1.5',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    marginBottom: '1rem',
    fontSize: '1.1rem',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
  },
};
