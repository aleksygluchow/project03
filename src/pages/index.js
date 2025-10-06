import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aliaksei Hlukhau</title>
        <meta name="description" content="Aliaksei Hlukhau – Physics MSc student (Photonics & ZULF NMR)." />
        <meta property="og:title" content="Aliaksei Hlukhau" />
        <meta property="og:description" content="Physics MSc student — Photonics & ZULF NMR." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eigen.to" />
        <meta property="og:image" content="/images/preview.png" />
      </Head>

      <main style={styles.page}>
        <section style={styles.section} aria-label="Intro">
          <img
            src="/images/profile.jpg"
            alt="Portrait of Aliaksei Hlukhau"
            width={144}
            height={144}
            style={styles.avatar}
          />

          <h1 style={styles.h1}>Aliaksei Hlukhau</h1>
          <p style={styles.tagline}>Physics MSc · Photonics & ZULF NMR</p>

          <div style={styles.ctaRow}>
            <a href="/cv/Aliaksei_Hlukhau_CV.pdf" target="_blank" rel="noopener noreferrer" style={{ ...styles.btn, ...styles.btnPrimary }}>
              View CV
            </a>
            <a href="/contact" style={{ ...styles.btn, ...styles.btnGhost }}>
              Contact
            </a>
          </div>
        </section>

        <footer style={styles.footer}>© {new Date().getFullYear()} Aliaksei Hlukhau</footer>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    color: '#111',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
    padding: 24,
  },
  section: {
    width: '100%',
    maxWidth: 560,
    textAlign: 'center',
  },
  avatar: {
    borderRadius: '50%',
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto 16px',
    border: '1px solid #ddd',
  },
  h1: {
    margin: 0,
    fontSize: 'clamp(32px, 6vw, 56px)',
    fontWeight: 800,
    letterSpacing: -0.5,
  },
  tagline: {
    marginTop: 8,
    opacity: 0.7,
    fontSize: 'clamp(15px, 2.4vw, 18px)',
  },
  ctaRow: {
    display: 'flex',
    gap: 12,
    justifyContent: 'center',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  btn: {
    display: 'inline-block',
    padding: '12px 18px',
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
  footer: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 12,
    textAlign: 'center',
    fontSize: 13,
    opacity: 0.5,
  },
};
