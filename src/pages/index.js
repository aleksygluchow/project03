import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aliaksei Hlukhau</title>
        <meta name="description" content="Aliaksei Hlukhau – Physics MSc (Photonics & ZULF NMR)." />
        <meta property="og:title" content="Aliaksei Hlukhau" />
        <meta property="og:description" content="Physics MSc student — Photonics & ZULF NMR." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eigen.to" />
        <meta property="og:image" content="/images/preview.png" />
      </Head>

      <main style={styles.page}>
        <section style={styles.wrap} aria-label="Intro">
          <div style={styles.photoWrap}>
            <img
              src="/images/IMG_2356-1.jpg"
              alt="Aliaksei Hlukhau"
              style={styles.photo}
              width={320}
              height={400}
            />
          </div>

          <h1 style={styles.h1}>Aliaksei Hlukhau</h1>
          <p style={styles.sub}>Physics MSc · Photonics & ZULF NMR</p>

          <div style={styles.ctaRow}>
            <a
              href="/cv/Aliaksei_Hlukhau_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.btn, ...styles.btnPrimary }}
            >
              View CV
            </a>
            <Link href="/contact" style={{ ...styles.btn, ...styles.btnGhost }}>
              Contact
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    background: '#fafafa',
    color: '#111',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
    padding: 24,
  },
  wrap: {
    width: '100%',
    maxWidth: 720,
    textAlign: 'center',
  },
  photoWrap: {
    display: 'inline-block',
    marginBottom: 18,
  },
  photo: {
    display: 'block',
    width: 'min(320px, 72vw)',
    height: 'auto',
    borderRadius: 12, // slightly rounded corners
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)', // soft shadow
    border: '1px solid #e6e6e6',
    objectFit: 'cover',
  },
  h1: {
    marginTop: 12,
    marginBottom: 6,
    fontSize: 'clamp(28px, 6vw, 44px)',
    fontWeight: 800,
    letterSpacing: -0.2,
  },
  sub: {
    margin: 0,
    opacity: 0.7,
    fontSize: 'clamp(14px, 2.2vw, 18px)',
  },
  ctaRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 12,
    marginTop: 18,
    flexWrap: 'wrap',
  },
  btn: {
    display: 'inline-block',
    padding: '10px 16px',
    borderRadius: 10,
    textDecoration: 'none',
    fontWeight: 700,
    border: '1px solid #111',
    transition: 'background .15s ease, color .15s ease, transform .06s ease',
  },
  btnPrimary: {
    background: '#111',
    color: '#fff',
  },
  btnGhost: {
    background: '#fff',
    color: '#111',
  },
};
