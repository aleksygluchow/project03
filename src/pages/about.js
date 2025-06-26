import Head from 'next/head';

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem',
  },
  header: {
    textAlign: 'center',
  },
  subheader: {
    textAlign: 'center',
  },
  contact: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
};

export default function About() {
  return (
    <>
      <Head>
        <title>CV</title>
      </Head>
      <div style={styles.container}>
        <h1 style={styles.header}>Aliaksei Hlukhau</h1>
        <p style={styles.subheader}>
          <em>(pronounced: Aleksy Głuchow)</em>
        </p>

        <p style={styles.contact}>
          Phone: (+48) 728 035 080 | Email:{' '}
          <a href="mailto:aliaksei.hlukhau@student.uj.edu.pl">
            aliaksei.hlukhau@student.uj.edu.pl
          </a>{' '}
          | LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/aleksyg/" target="_blank" rel="noopener noreferrer">
            aleksyg
          </a>
        </p>

        <hr />
        <h2>Education</h2>
      <p><strong>Jagiellonian University</strong> (2021 – exp. 2025)</p>
      <p>Bachelor’s Degree, Physics</p>
      <p><strong>Selected courses:</strong></p>
      <ul>
        <li>Optics</li>
        <li>Quantum Mechanics I & II</li>
        <li>Linear Algebra</li>
        <li>Mathematical Analysis I–III</li>
        <li>Special Relativity</li>
        <li>Nuclear Physics</li>
        <li>Electricity and Magnetism</li>
        <li>Physics Lab II</li>
        <li>Electronics (Lecture)</li>
        <li>Electronics Laboratory</li>
        <li>Matter Incoming from Space</li>
        <li><a href="https://jakubmielczarek.com/wp-content/uploads/2018/04/am_garazcc87.pdf" target="_blank">Garage of Complexity – Laboratory of Creativity</a></li>
        <li>Basics of Astrophysics and Astronomy</li>
      </ul>

      <hr />
      <h2>Work Experience</h2>
      <p><strong>Research Assistant (Volunteer)</strong> (2024 – present)</p>
      <p>Experimental research at the Photonics Department, Faculty of Physics. Project: Zero- and ultra-low-field nuclear magnetic resonance.</p>

      <p><strong>Summer Internship at the Photonics Department</strong> (Supervisor: Prof. Szymon Pustelny) (July 2024)</p>
      <ul>
        <li>Laboratory work on the GNOME project, focused on dark matter research</li>
        <li>Built and configured several spectroscopy systems on an optical table</li>
      </ul>

      <p><strong>Additional Board Member, Student Physics Association (UJ)</strong> (2021/22, 2022/23)</p>
      <ul>
        <li>Helped organize events including the Winter School and SMOK Conference</li>
        <li>Participated in club management (supplies, documentation, etc.)</li>
      </ul>

      <hr />
      <h2>Scientific Conferences</h2>
      <ul>
        <li><strong>Sempowisko</strong> (May 2025): Talk: <em>&quot; Reimagining Spectroscopy: The Capabilities of ZULF NMR&quot;</em></li>
        <li><strong>SMOK Conference</strong> (April 2025): Talk: <em>&quot;Spectroscopy in the Absence of Magnets: The Capabilities of ZULF NMR&quot;</em></li>
        <li><strong>SMOK Conference</strong> (May 2024): Attendee</li>
      </ul>

      <hr />
      <h2>Technical Skills</h2>
      <ul>
        <li>Operation of oscilloscopes, function generators, and multimeters</li>
        <li>C++</li>
        <li>Knowledge in optics and photonics (e.g. laser principles)</li>
        <li>Basic electronics and analog circuit work</li>
        <li>Wolfram, Mathematica</li>
        <li>Arduino</li>
        <li>Raspberry Pi</li>
        <li>3D printing</li>
        <li>Proficient in LaTeX</li>
      </ul>

      <hr />
      <h2>Soft Skills</h2>
      <ul>
        <li>Team collaboration in a research environment</li>
        <li>Independent experimental work</li>
        <li>Engineering/ad hoc problem solving in lab settings</li>
      </ul>

      <hr />
      <h2>Languages</h2>
      <ul>
        <li>Polish (native)</li>
        <li>English (fluent)</li>
        <li>Belarusian (native)</li>
        <li>Russian (native)</li>
        <li>German (beginner)</li>
      </ul>

      <hr />
      <h2>Extracurricular Activities & Interests</h2>
      <ul>
        <li>Creating Arduino-based electronic projects</li>
        <li>Electronics</li>
        <li>Programming in JavaScript</li>
      </ul>
    </div>
    </>
  );
}
