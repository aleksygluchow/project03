import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function CV() {
  return (
    <>
      <Head>
        <title>CV</title>
        <meta name="description" content="Aleksy Głuchow's webpage." />

        {/* Open Graph (Telegram, Messenger) */}
        <meta property="og:title" content="CV" />
        <meta property="og:description" content="Aleksy Głuchow – Physics student." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eigen.to" />
        <meta property="og:image" content="/images/preview.png" />
      </Head>

      empty here
    </>
  );
}



const styles = {
  
  h1: {
    margin: 0,          // kill global h1 margins
    fontSize: 'clamp(28px, 6vw, 48px)',
    letterSpacing: '-0.02em',
  },
};
