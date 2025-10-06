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
          <div style={styles.photoWrap}>
            <Image
              src="/images/IMG_2356-1.JPG" // make sure case matches file on disk
              alt="Aliaksei Hlukhau"
              width={640}                 // 2× displayed width for retina
              height={800}
              sizes="320px"
              quality={95}
              priority
              style={styles.photo}
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

const NAV_H = 64; // set to your actual header height

const styles = {
  page: {
    position: 'fixed',  // lock below the header, no scroll
    top: NAV_H,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'grid',
    placeItems: 'center',
    background: '#fafafa',
    color: '#111',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
    padding: 0,
    overflow: 'hidden',
  },
  wrap: {
    width: '100%',
    maxWidth: 720,
    textAlign: 'center',
    display: 'grid',
    justifyItems: 'center',
    gap: 12,
    padding: '0 16px',
  },
  photoWrap: { display: 'inline-block' },
  photo: {
    display: 'block',
    width: 'min(320px, 70vw)',
    height: 'auto',
    maxHeight: '40vh', // ensure everything fits below the header
    borderRadius: 12,
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    border: '1px solid #e6e6e6',
    objectFit: 'cover',
  },
  h1: {
    margin: 0,
    fontSize: 'clamp(24px, 6vw, 40px)',
    fontWeight: 800,
    letterSpacing: -0.2,
  },
  sub: { margin: 0, opacity: 0.7, fontSize: 'clamp(13px, 2.2vw, 17px)' },
  ctaRow: { display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' },
  btn: {
    display: 'inline-block',
    padding: '9px 14px',
    borderRadius: 10,
    textDecoration: 'none',
    fontWeight: 700,
    border: '1px solid #111',
    transition: 'background .15s ease, color .15s ease, transform .06s ease',
  },
  btnPrimary: { background: '#111', color: '#fff' },
  btnGhost: { background: '#fff', color: '#111' },
};
