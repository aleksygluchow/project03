import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function CV() {
  return (
    <>
      <Head>
        <title>CV</title>
        <meta name="description" content="Aliaksei Hlukhau's webpage." />

        {/* Open Graph (Telegram, Messenger) */}
        <meta property="og:title" content="CV" />
        <meta property="og:description" content="Aliaksei Hlukhau – Physics student." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eigen.to" />
        <meta property="og:image" content="/images/preview.png" />
      </Head>

      <div className="page-container">
  <h1 className="page-title">Aliaksei Hlukhau</h1>
  <p className="page-subtitle"><em>(pronounced: Aleksy Głuchow)</em></p>

  <div className="cv-btn-wrap">
    <a href="/cv/CV-ENG.pdf" target="_blank" rel="noopener noreferrer" className="btn-soft">
      Download CV (ENG)
    </a>
  </div>

  <div className="contact-info">
          {/*<span className="item">Phone: (+48) 728 035 080</span>
          <span className="separator"> | </span>*/}
          <span className="item">
            Email:{' '}
            <a href="mailto:aliaksei.hlukhau@student.uj.edu.pl">
              aliaksei.hlukhau@student.uj.edu.pl
            </a>
          </span>
          <span className="separator"> | </span>
          <span className="item">
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/aleksyg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aleksyg
            </a>
          </span>
        </div>
      </div>

      <hr />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0rem 2rem 2rem 2rem' }}>
        {/* EDUCATION */}
        <h2>Education</h2>
        <h3>
          <strong>Jagiellonian University</strong> (2021 – 2025)
        </h3>
        <p>B.Sc. in Physics</p>
        <h4>
          <strong>Selected courses:</strong>
        </h4>
        <ul>
          <li>Optics</li>
          <li>Quantum Mechanics I &amp; II</li>
          <li>Linear Algebra</li>
          <li>Mathematical Analysis I–III</li>
          <li>Special Theory of Relativity</li>
          <li>Nuclear Physics</li>
          <li>Electricity and Magnetism</li>
          <li>Advanced Physics Laboratory</li>
          <li>Electronics (Lecture)</li>
          <li>Electronics Laboratory</li>
          <li>Matter Coming from Space</li>
          <li>
            <a
              href="https://jakubmielczarek.com/wp-content/uploads/2018/04/am_garazcc87.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Complexity Garage – creativity lab
            </a>
          </li>
          <li>Basics of Astrophysics and Astronomy</li>
        </ul>

        <hr />

        {/* EXPERIENCE */}
        <h2>Experience</h2>

        <h3>
          <strong>Conference Volunteer</strong> —{' '}
          <a
            href="https://quantumoptics11.confer.uj.edu.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quantum Optics XI
          </a>
          , Jagiellonian University <span style={{ fontWeight: 400 }}>(September 2025 – present)</span>
        </h3>
        <ul>
          <li>Registration of participants and information desk assistance.</li>
          <li>Organizational and technical support during conference sessions.</li>
        </ul>

        <h3>
          <strong>Visiting Student</strong> —{' '}
          <a href="https://www.hi-mainz.de/" target="_blank" rel="noopener noreferrer">
            Helmholtz-Institut Mainz
          </a>
          , Johannes Gutenberg University Mainz,{' '}
          <a href="https://budker.uni-mainz.de/" target="_blank" rel="noopener noreferrer">
            Budker Group
          </a>{' '}
          <span style={{ fontWeight: 400 }}>(July – August 2025)</span>
        </h3>
        <ul>
          <li>Participation in ZULF NMR research within the Budker Group.</li>
          <li>Experimental work in the institute‘s laboratory environment.</li>
        </ul>

        <h3>
          <strong>Research Volunteer</strong> — Department of Photonics, Faculty of Physics{' '}
          <span style={{ fontWeight: 400 }}>(2024 – present)</span>
        </h3>
        <p>Experimental work in Zero- and Ultra-Low-Field Nuclear Magnetic Resonance projects.</p>

        <h3>
          <strong>Summer Internship</strong> — Department of Photonics (Supervisor: Prof. Szymon
          Pustelny) <span style={{ fontWeight: 400 }}>(July 2024)</span>
        </h3>
        <ul>
          <li>Worked in the GNOME project laboratory focused on dark matter research.</li>
          <li>Assembled and configured several spectroscopy setups on an optical table.</li>
        </ul>

        <h3>
          <strong>Board Member (supporting role)</strong> — Physics Student Association (UJ){' '}
          <span style={{ fontWeight: 400 }}>(2021/22, 2022/23)</span>
        </h3>
        <ul>
          <li>Organized events including the Winter School and SMOK conference.</li>
          <li>Supported club operations (procurement, documentation, etc.).</li>
        </ul>

        <hr />

        {/* CONFERENCES */}
        <h2>Conferences &amp; Presentations</h2>
        <ul>
          <li>
            <strong>XXIII Interdisciplinary Student Conference “SEMPOWISKO”</strong> (May 2025): Talk:{' '}
            <em>Reimagining Spectroscopy: The Capabilities of ZULF NMR</em>
          </li>
          <li>
            <strong>International Student Physics Conference “SMOK”</strong> (April 2025): Talk:{' '}
            <em>Spectroscopy in the Absence of Magnets: The Capabilities of ZULF NMR</em>
          </li>
          <li>
            <strong>SMOK Conference</strong> (May 2024): Attendee
          </li>
        </ul>

        <hr />

        {/* TECHNICAL SKILLS */}
        <h2>Technical Skills</h2>
        <ul>
          <li>
            <strong>Electrical signal measurement:</strong> oscilloscopes (time/frequency analysis),
            multimeters (precise voltage/current/resistance)
          </li>
          <li>
            <strong>Function generators:</strong> configuration and use for driving circuits with test
            signals
          </li>
          <li>
            <strong>C++ programming:</strong> console apps, numerical algorithms, data structures,
            basics of OOP
          </li>
          <li>
            <strong>Optics &amp; photonics:</strong> laser and detector principles, optical table
            alignment, spectroscopic experiments
          </li>
          <li>
            <strong>Electronics:</strong> analog circuits (op-amps, RC filters), breadboard assembly
            and testing, use of lab instrumentation
          </li>
          <li>
            <strong>Wolfram Mathematica:</strong> physical simulations, model fitting, publication-grade
            plots, automated analysis
          </li>
          <li>
            <strong>Arduino:</strong> microcontroller programming, sensors/actuators integration,
            prototyping measurement devices
          </li>
          <li>
            <strong>Raspberry Pi:</strong> prototyping measurement/control systems, sensor integration,
            Python (data acquisition) &amp; Linux (administration, automation)
          </li>
          <li>
            <strong>3D printing:</strong> Autodesk Fusion 360 modeling; enclosures and QuSpin
            magnetometer holders for ZULF NMR experiments
          </li>
          <li>
            <strong>LaTeX:</strong> scientific reports and presentations, templates, advanced math
            typesetting
          </li>
        </ul>

        <hr />

        {/* SOFT SKILLS */}
        <h2>Soft Skills</h2>
        <ul>
          <li>Team collaboration in research groups</li>
          <li>Independent experimental work</li>
          <li>Engineering / ad hoc problem-solving in laboratory settings</li>
        </ul>

        <hr />

        {/* LANGUAGES */}
        <h2>Languages</h2>
        <ul>
          <li>Polish (native)</li>
          <li>English (fluent)</li>
          <li>Belarusian (native)</li>
          <li>Russian (native)</li>
          <li>German (beginner)</li>
        </ul>

        <hr />

        {/* EXTRA */}
        <h2>Additional Activities &amp; Interests</h2>
        <ul>
          <li>Arduino-based electronic projects</li>
          <li>Electronics</li>
          <li>JavaScript programming</li>
        </ul>
      </div>
    </>
  );
}