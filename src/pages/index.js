import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home – Aliaksei Hlukhau</title>
      </Head>

      <div>
        <h1>Welcome to My Site</h1>
        <p>
  Now in Germany{' '}
  <img
    src="https://flagcdn.com/w40/de.png"
    alt="German flag"
    width="20"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  />


  Hi Marcel
</p>
      </div>
    </>
  );
}
