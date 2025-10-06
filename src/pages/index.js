import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

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

      <main style={styles.page} role="main">
        <section style={styles.wrap} aria-label="Intro">
          <h1 style={styles.h1}>Aliaksei Hlukhau</h1>
          <div style={styles.subline}>
            <span>Physics Student</span>
            <span style={styles.sep}>|</span>
            <span>Jagiellonian University</span>
            <span style={styles.sep}>|</span>
            <span>Kraków</span>
          </div>

          <div style={styles.photoWrap}>
            <Image
              src="/images/IMG_6909-1.JPG"
              alt="Aliaksei Hlukhau"
              width={640}
              height={800}
              sizes="320px"
              quality={95}
              priority
              style={styles.photo}
            />
          </div>

          <div style={styles.ctaRow}>
            <Link href="/cv" style={{ ...styles.btn, ...styles.btnPrimary }}>View CV</Link>
            <Link href="/contact" style={{ ...styles.btn, ...styles.btnGhost }}>Contact</Link>
          </div>
        </section>
      </main>
    </>
  );
}

const NAV_H = 64;

const styles = {
  page: {
    position: 'fixed',
    top: NAV_H, left: 0, right: 0, bottom: 0,
    display: 'grid', placeItems: 'center',
    background: '#fafafa', color: '#111',
    padding: 0, overflow: 'hidden',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif",
  },
  wrap: {
    width: '100%', maxWidth: 720, textAlign: 'center',
    display: 'grid', justifyItems: 'center',
    gap: 8,              // tighter vertical rhythm
    padding: '0 16px',
  },
  h1: {
    margin: 0,          // kill global h1 margins
    fontSize: 'clamp(28px, 6vw, 48px)',
    letterSpacing: '-0.02em',
  },
  subline: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2px 0 6px', // tiny spacing above/below
    opacity: 0.8,
    fontWeight: 600,
  },
  sep: { opacity: 0.5 },
  photoWrap: { display: 'inline-block', marginTop: 4, marginBottom: 8 },
  photo: {
    display: 'block',
    width: 'min(320px, 70vw)',
    height: 'auto',
    maxHeight: '40vh',
    borderRadius: 12,
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    border: '1px solid #e6e6e6',
    objectFit: 'cover',
  },
  ctaRow: { display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginTop: 4 },
  btn: {
    display: 'inline-block', padding: '9px 14px', borderRadius: 10, textDecoration: 'none', fontWeight: 700,
    border: '1px solid #111', transition: 'background .15s ease, color .15s ease, transform .06s ease',
  },
  btnPrimary: { background: '#111', color: '#fff' },
  btnGhost: { background: '#fff', color: '#111' },
};
