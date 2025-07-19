import Head from 'next/head';
import Image from 'next/image';



export default function About() {
  return (
  <>
      <Head>
        <title>CV</title>
      </Head>
    <div className="cvbeginning">
      <h1 style={{ textAlign: 'center' }}>Aliaksei Hlukhau</h1>
      <p style={{ textAlign: 'center' }}><em>(pronounced: Aleksy Głuchow)</em></p>

      <div className="contact-info">
  <span className="item">Phone: (+48) 728 035 080</span>
  <span className="separator"> | </span>
  <span className="item">
    Email: <a href="mailto:aliaksei.hlukhau@student.uj.edu.pl">aliaksei.hlukhau@student.uj.edu.pl</a>
  </span>
  <span className="separator"> | </span>
  <span className="item">
    LinkedIn: <a href="https://www.linkedin.com/in/aleksyg/" target="_blank" rel="noopener noreferrer">aleksyg</a>
  </span>
</div>

</div>

      <hr />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0rem 2rem 2rem 2rem' }}>




      <h2>Education</h2>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <Image
    src="/images/uj.svg"
    alt="Jagiellonian University Logo"
    width={24}
    height={24}
    style={{ display: 'inline-block' }}
  />
  <strong>Jagiellonian University</strong> (2021 – 2025)
</h3>
 
      <p>Bachelor’s Degree, Physics</p>
      <h4><strong>Selected courses:</strong></h4>
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


      <h3><strong>Visiting Student Assistant</strong> (Supervisor: Prof. Dmitri Budker) (2025 July – August)</h3>
      <p>Experimental research at the Helmholtz Institute Mainz, Johannes Gutenberg University Mainz, Faculty of Physics. Project: Zero- and ultra-low-field nuclear magnetic resonance, conducted in the Budker Group under the supervision of Prof. Dmitri Budker.</p>

      <h3><strong>Research Assistant (Volunteer)</strong> (2024 – present)</h3>
      <p>Experimental research at the Photonics Department, Faculty of Physics. Project: Zero- and ultra-low-field nuclear magnetic resonance.</p>

      <h3><strong>Summer Internship at the Photonics Department</strong> (Supervisor: Prof. Szymon Pustelny) (July 2024)</h3>
      <ul>
        <li>Laboratory work on the GNOME project, focused on dark matter research</li>
        <li>Built and configured several spectroscopy systems on an optical table</li>
      </ul>

      <h3><strong>Additional Board Member, Student Physics Association (UJ)</strong> (2021/22, 2022/23)</h3>
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