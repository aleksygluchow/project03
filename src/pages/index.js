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
          <p style={styles.sub}>Physics MSc · Photonics &amp; ZULF NMR</p>

          <div style={styles.photoWrap}>
            <Image
              src="/images/IMG_2356-1.JPG"   /* Upewnij się, że wielkość liter pliku jest identyczna */
              alt="Aliaksei Hlukhau"
              width={640}                     // 2× do wyświetlanych ~320px (ostre)
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

const NAV_H = 64; // ustaw na faktyczną wysokość headera

const styles = {
  page: {
    position: 'fixed',
    top: NAV_H, left: 0, right: 0, bottom: 0,
    display: 'grid', placeItems: 'center',
    background: '#fafafa', color: '#111',
    padding: 0, overflow: 'hidden',
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  wrap: {
    width: '100%', maxWidth: 720, textAlign: 'center',
    display: 'grid', justifyItems: 'center', gap: 12, padding: '0 16px',
  },
  h1: { margin: 0, fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em' },
  sub: { margin: 0, fontSize: 'clamp(14px, 2.2vw, 18px)', opacity: 0.75, fontWeight: 600 },
  photoWrap: { display: 'inline-block', marginTop: 16, marginBottom: 12 },
  photo: {
    display: 'block', width: 'min(320px, 70vw)', height: 'auto', maxHeight: '40vh',
    borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.15)', border: '1px solid #e6e6e6',
    objectFit: 'cover',
  },
  ctaRow: { display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginTop: 8 },
  btn: {
    display: 'inline-block', padding: '9px 14px', borderRadius: 10, textDecoration: 'none', fontWeight: 700,
    border: '1px solid #111', transition: 'background .15s ease, color .15s ease, transform .06s ease',
  },
  btnPrimary: { background: '#111', color: '#fff' },
  btnGhost: { background: '#fff', color: '#111' },
};
