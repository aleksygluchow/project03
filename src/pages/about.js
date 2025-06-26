import Head from 'next/head';

// add to the top of your component file
import { useEffect, useState } from 'react';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 500;


const styles = {
  container: {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '1rem 0.75rem 2rem',
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  backgroundColor: '#fefefe',
  color: '#1f1f1f',
  lineHeight: 1.6,
  fontSize: '0.95rem',
},
  name: {
    textAlign: 'center',
    fontSize: '2.2rem',
    fontWeight: 800,
    marginBottom: '0.2rem',
    marginTop: '0.4rem',
    color: '#111827',
  },
  subtitle: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '0.9rem',
    color: '#6b7280',
    marginBottom: '1.2rem',
  },
  contactBox: {
    textAlign: 'center',
    padding: '0.8rem 1rem',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    marginBottom: '1.8rem',
    fontSize: '0.9rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  },
  contactItem: {
    marginBottom: '0.4rem',
  },
  contactLabel: {
    fontWeight: 500,
    color: '#4b5563',
    marginRight: '0.3rem',
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: 500,
  },
  sectionTitle: {
    fontSize: '1.4rem',
    color: '#1d4ed8',
    borderBottom: '1px solid #c7d2fe',
    paddingBottom: '0.3rem',
    marginTop: '1.6rem',
    marginBottom: '0.9rem',
    fontWeight: 700,
  },
  paragraph: {
    marginBottom: '0.5rem',
  },
  list: {
    paddingLeft: '1.2rem',
    marginBottom: '1rem',
  },
  listItem: {
    marginBottom: '0.35rem',
  },
  hr: {
    display: 'none', // removed because section borders look cleaner now
  },
};




export default function About() {
  return (
    <>
      <Head>
        <Head>
  <title>CV</title>
</Head>

      </Head>
      <div style={styles.container}>
        <h1 style={styles.name}>Aliaksei Hlukhau</h1>
        <p style={styles.subtitle}>(pronounced: Aleksy Głuchow)</p>

        <div style={styles.contactBox}>
  <div style={styles.contactItem}>
    <span style={styles.contactLabel}>Phone:</span>
    <a href="tel:+48728035080" style={styles.link}>(+48) 728 035 080</a>
  </div>
  <div style={styles.contactItem}>
    <span style={styles.contactLabel}>Email:</span>
    <a href="mailto:aliaksei.hlukhau@student.uj.edu.pl" style={styles.link}>
      aliaksei.hlukhau@student.uj.edu.pl
    </a>
  </div>
  <div style={styles.contactItem}>
    <span style={styles.contactLabel}>LinkedIn:</span>
    <a href="https://www.linkedin.com/in/aleksyg/" target="_blank" rel="noopener noreferrer" style={styles.link}>
      aleksyg
    </a>
  </div>
</div>


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
