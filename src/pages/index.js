export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to My Site</h1>
      <div style={styles.card}>
        <img src="/zdj.HEIC" alt="Юля" style={styles.image} />
        <p style={styles.text}>Привет Юля</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#333',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
  },
  text: {
    fontSize: '1.4rem',
    color: '#444',
  },
};
