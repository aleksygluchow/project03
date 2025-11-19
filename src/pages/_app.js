import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aliaksei Hlukhau – Portfolio & Blog</title>
        <meta name="description" content="Physics, photonics, coding and creativity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicons and manifest */}
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
