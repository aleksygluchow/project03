import Head from 'next/head';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem 1rem',
        textAlign: 'center'
      }}>
        <h1>Portfolio</h1>

        <Image
          src="/images/no-projects.png"
          alt="Empty portfolio"
          width={500}
          height={350}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.15))'
          }}
        />

        <p style={{
          marginTop: '1rem',
          fontStyle: 'italic',
          color: '#888'
        }}>
          no projects here yet
        </p>
      </div>
    </>
  );
}
