import Head from 'next/head';

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0.75rem 1rem 1.5rem 1rem', // ↓ less vertical padding
    fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
    backgroundColor: '#fcfcff',
    color: '#1b1b1b',
    lineHeight: 1.6,
    fontSize: '0.94rem',
  },
  name: {
    textAlign: 'center',
    fontSize: '2rem', // ↓ smaller for mobile
    fontWeight: 800,
    marginBottom: '0.1rem', // ↓ less space below
    marginTop: '0.5rem',     // ↓ tighter top margin
    color: '#111827',
  },
  subtitle: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#6b7280',
    fontSize: '0.9rem',
    marginBottom: '0.3rem', // ↓ tighten below
  },
  contact: {
    textAlign: 'center',
    marginBottom: '1.2rem', // ↓ less gap to next section
    fontSize: '0.88rem',
    color: '#374151',
  },
  sectionTitle: {
    fontSize: '1.4rem', // slightly smaller for better scale
    color: '#1d4ed8',
    borderBottom: '2px solid #dbeafe',
    paddingBottom: '0.2rem',
    marginTop: '1.5rem',  // ↓ tighter top spacing
    marginBottom: '0.9rem',
    fontWeight: 700,
  },
  hr: {
    border: 'none',
    height: '1px',
    backgroundColor: '#e5e7eb',
    margin: '1.2rem 0',
  },
};



export default function About() {
  return (
    <>
      <Head>
        <title>CV</title>
      </Head>
      <div style={styles.container}>
        <h1 style={styles.name}>Aliaksei Hlukhau</h1>
        <p style={styles.subtitle}>(pronounced: Aleksy Głuchow)</p>

        <p style={styles.contact}>
          Phone: (+48) 728 035 080 | Email:{' '}
          <a href="mailto:aliaksei.hlukhau@student.uj.edu.pl" style={styles.link}>
            aliaksei.hlukhau@student.uj.edu.pl
          </a>{' '}
          | LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/aleksyg/" target="_blank" rel="noopener noreferrer" style={styles.link}>
            aleksyg
          </a>
        </p>

        <hr style={styles.hr} />
        <h2 style={styles.sectionTitle}>Education</h2>
        <p style={styles.paragraph}>
          <strong>Jagiellonian University</strong> (2021 – exp. 2025)
        </p>
        <p style={styles.paragraph}>Bachelor’s Degree, Physics</p>
        <p style={styles.paragraph}><strong>Selected courses:</strong></p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Optics</li>
          <li style={styles.listItem}>Quantum Mechanics I & II</li>
          <li style={styles.listItem}>Linear Algebra</li>
          <li style={styles.listItem}>Mathematical Analysis I–III</li>
          <li style={styles.listItem}>Special Relativity</li>
          <li style={styles.listItem}>Nuclear Physics</li>
          <li style={styles.listItem}>Electricity and Magnetism</li>
          <li style={styles.listItem}>Physics Lab II</li>
          <li style={styles.listItem}>Electronics (Lecture)</li>
          <li style={styles.listItem}>Electronics Laboratory</li>
          <li style={styles.listItem}>Matter Incoming from Space</li>
          <li style={styles.listItem}>
            <a href="https://jakubmielczarek.com/wp-content/uploads/2018/04/am_garazcc87.pdf" target="_blank" style={styles.link}>
              Garage of Complexity – Laboratory of Creativity
            </a>
          </li>
          <li style={styles.listItem}>Basics of Astrophysics and Astronomy</li>
        </ul>

        <hr style={styles.hr} />
        <h2 style={styles.sectionTitle}>Work Experience</h2>
        <p style={styles.paragraph}><strong>Research Assistant (Volunteer)</strong> (2024 – present)</p>
        <p style={styles.paragraph}>Experimental research at the Photonics Department, Faculty of Physics. Project: Zero- and ultra-low-field nuclear magnetic resonance.</p>

        <p style={styles.paragraph}><strong>Summer Internship at the Photonics Department</strong> (Supervisor: Prof. Szymon Pustelny) (July 2024)</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Laboratory work on the GNOME project, focused on dark matter research</li>
          <li style={styles.listItem}>Built and configured several spectroscopy systems on an optical table</li>
        </ul>

        <p style={styles.paragraph}><strong>Additional Board Member, Student Physics Association (UJ)</strong> (2021/22, 2022/23)</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Helped organize events including the Winter School and SMOK Conference</li>
          <li style={styles.listItem}>Participated in club management (supplies, documentation, etc.)</li>
        </ul>

        <hr style={styles.hr} />
        <h2 style={styles.sectionTitle}>Scientific Conferences</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Sempowisko</strong> (May 2025): Talk: <em>“Reimagining Spectroscopy: The Capabilities of ZULF NMR”</em></li>
          <li style={styles.listItem}><strong>SMOK Conference</strong> (April 2025): Talk: <em>“Spectroscopy in the Absence of Magnets: The Capabilities of ZULF NMR”</em></li>
          <li style={styles.listItem}><strong>SMOK Conference</strong> (May 2024): Attendee</li>
        </ul>

        <hr style={styles.hr} />
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Operation of oscilloscopes, function generators, and multimeters</li>
          <li style={styles.listItem}>C++</li>
          <li style={styles.listItem}>Knowledge in optics and photonics (e.g. laser principles)</li>
          <li style={styles.listItem}>Basic electronics and analog circuit work</li>
          <li style={styles.listItem}>Wolfram, Mathematica</li>
          <li style={styles.listItem}>Arduino</li>
          <li style={styles.listItem}>Raspberry Pi</li>
          <li style={styles.listItem}>3D printing</li>
          <li style={styles.listItem}>Proficient in LaTeX</li>
        </ul>

        <hr style={styles.hr} />
        <h2 style={styles.sectionTitle}>Soft Skills</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Team collaboration in a research environment</li>
          <li style={styles.listItem}>Independent experimental work</li>
          <li style={styles.listItem}>Engineering/ad hoc problem solving in lab settings</li>
        </ul>

        <hr style={styles.hr} />
        <h2 style={styles.sectionTitle}>Languages</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Polish (native)</li>
          <li style={styles.listItem}>English (fluent)</li>
          <li style={styles.listItem}>Belarusian (native)</li>
          <li style={styles.listItem}>Russian (native)</li>
          <li style={styles.listItem}>German (beginner)</li>
        </ul>

        <hr style={styles.hr} />
        <h2 style={styles.sectionTitle}>Extracurricular Activities & Interests</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Creating Arduino-based electronic projects</li>
          <li style={styles.listItem}>Electronics</li>
          <li style={styles.listItem}>Programming in JavaScript</li>
        </ul>
      </div>
    </>
  );
}
