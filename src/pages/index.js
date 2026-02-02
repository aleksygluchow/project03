import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
 <title>Aliaksei Hlukhau</title>
        <meta name="description" content="Aliaksei Hlukhau – Physics MSc (Photonics & ZULF NMR)." />
        <meta property="og:title" content="Aleksy Głuchow" />
        <meta property="og:description" content="Physics MSc student — Photonics & ZULF NMR." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eigen.to" />
        <meta property="og:image" content="/images/preview.png" />
      </Head>

      <main style={styles.page} role="main">
        empty here HAHAHA
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

  /*
  h1: {
    margin: 0,          // kill global h1 margins
    fontSize: 'clamp(28px, 6vw, 48px)',
  },

  */
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
  
};
