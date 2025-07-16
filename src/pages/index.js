import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home – Aliaksei Hlukhau</title>
         <link
    href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap"
    rel="stylesheet"
  />
      </Head>

      <div>
        <h1>Welcome to My Site</h1>
        <p style={{ fontFamily: "'UnifrakturCook', cursive", fontSize: '1.25rem' }}>
  Jetzt in Deutschland{' '}
  <a
    href="https://de.wikipedia.org/wiki/Deutschland"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://flagcdn.com/w40/de.png"
      alt="Deutsche Flagge"
      width="20"
      style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px' }}
    />
  </a>
</p>
      </div>
    </>
  );
}
