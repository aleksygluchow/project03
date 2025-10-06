import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home – Aliaksei Hlukhau</title>
        <meta name="description" content="Aliaksei Hlukhau – physics MSc student focused on photonics & ZULF NMR." />
        {/* Open Graph */}
        <meta property="og:title" content="Aliaksei Hlukhau" />
        <meta property="og:description" content="Physics MSc student — Photonics & ZULF NMR." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eigen.to" />
        <meta property="og:image" content="/images/preview.png" />
        {/* Fonts (optional) */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet" />
      </Head>

      <main style={styles.wrap}>
        <section style={styles.card} aria-label="Intro">
          <img
            src="/images/profile.jpg"
            alt="Portrait of Aliaksei Hlukhau"
            width={160}
            height={160}
            style={styles.avatar}
          />

          <h1 style={styles.title}>Aliaksei Hlukhau</h1>
          <p style={styles.subtitle}>Physics MSc student · Photonics & ZULF NMR · Kraków → Mainz</p>

          <p style={styles.blurb}>
            I build things at the intersection of optics, ultra‑low‑field NMR, and modern web. Currently pursuing a
            master’s in Experimental Physics and documenting projects at <strong>eigen.to</strong>.
          </p>

          <div style={styles.ctaRow}>
            <a href="/cv/Aliaksei_Hlukhau_CV.pdf" target="_blank" rel="noopener noreferrer" style={{ ...styles.btn, ...styles.btnPrimary }}>
              View CV
            </a>
            <a href="mailto:aliaksei.hlukhau@gmail.com" style={{ ...styles.btn, ...styles.btnGhost }}>
              Contact
            </a>
          </div>
        </section>

        <footer style={styles.footer}>
          <span>© {new Date().getFullYear()} Aliaksei Hlukhau</span>
        </footer>
      </main>
    </>
  );
}

const styles = {
  wrap: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    gap: 24,
    background: 'radial-gradient(1000px 600px at 50% 15%, #0e1322, #0b0f1a)',
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif",
    color: '#e5e7eb',
  },
  card: {
    width: '100%',
    maxWidth: 820,
    background: 'rgba(2,6,23,0.55)',
    border: '1px solid rgba(148,163,184,0.25)',
    borderRadius: 20,
    boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
    padding: '32px clamp(20px, 6vw, 48px)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    textAlign: 'center',
  },
  avatar: {
    borderRadius: '50%',
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto 14px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
    border: '2px solid rgba(255,255,255,0.55)'
  },
  title: {
    margin: '8px 0 6px',
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: 800,
    letterSpacing: 0.4,
  },
  subtitle: {
    margin: 0,
    opacity: 0.85,
    fontWeight: 600,
  },
  blurb: {
    maxWidth: 680,
    margin: '18px auto 0',
    lineHeight: 1.6,
    opacity: 0.95,
  },
  ctaRow: {
    display: 'flex',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    flexWrap: 'wrap',
  },
  btn: {
    display: 'inline-block',
    padding: '10px 16px',
    borderRadius: 999,
    textDecoration: 'none',
    fontWeight: 700,
    border: '1px solid rgba(148,163,184,0.35)',
    transition: 'transform .12s ease, box-shadow .2s ease, background .2s ease',
  },
  btnPrimary: {
    background: 'linear-gradient(180deg, #22d3ee, #06b6d4)',
    color: '#0a0f1f',
    border: 'none',
    boxShadow: '0 10px 30px rgba(34,211,238,0.35)',
  },
  btnGhost: {
    background: 'rgba(2,6,23,0.35)',
    color: '#e5e7eb',
  },
  footer: {
    marginTop: 24,
    opacity: 0.6,
    fontSize: 14,
  },
};
