import Head from 'next/head';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Portfolio</h1>

        <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
          <Image
  src="/images/no-projects.png"
  alt="Empty portfolio"
  width={500}
  height={350}
  style={{
    width: '100%',
    height: 'auto',
    filter: 'drop-shadow(0 0 2px black)', // 👈 looks like a border around actual image
  }}
/>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#888' }}>
            no projects here yet
          </p>
        </div>
      </div>
    </>
  );
}
