import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>CV – Aliaksei Hlukhau</title>
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">Aliaksei Hlukhau</h1>
          <p className="text-sm text-gray-500">(pronounced: Aleksy Głuchow)</p>
          <div className="mt-4 text-sm">
            <p>Phone: (+48) 728 035 080</p>
            <p>
              Email: <a href="mailto:aliaksei.hlukhau@student.uj.edu.pl" className="text-blue-600 hover:underline">aliaksei.hlukhau@student.uj.edu.pl</a>
            </p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/aleksyg/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">aleksyg</a>
            </p>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Education</h2>
          <p className="font-medium">Jagiellonian University (2021 – exp. 2025)</p>
          <p>Bachelor’s Degree in Physics</p>
          <p className="mt-2 font-medium">Selected courses:</p>
          <ul className="list-disc list-inside pl-2 text-sm text-gray-700 space-y-1">
            <li>Optics</li>
            <li>Quantum Mechanics I & II</li>
            <li>Linear Algebra</li>
            <li>Mathematical Analysis I–III</li>
            <li>Special Relativity</li>
            <li>Nuclear Physics</li>
            <li>Electricity and Magnetism</li>
            <li>Physics Lab II</li>
            <li>Electronics (Lecture & Lab)</li>
            <li>Matter Incoming from Space</li>
            <li>
              <a href="https://jakubmielczarek.com/wp-content/uploads/2018/04/am_garazcc87.pdf" className="text-blue-600 hover:underline" target="_blank">
                Garage of Complexity – Laboratory of Creativity
              </a>
            </li>
            <li>Basics of Astrophysics and Astronomy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Work Experience</h2>

          <div className="mb-4">
            <p className="font-medium">Research Assistant (Volunteer) (2024 – present)</p>
            <p className="text-sm">Photonics Department, Faculty of Physics. Project: Zero- and ultra-low-field nuclear magnetic resonance (ZULF NMR).</p>
          </div>

          <div className="mb-4">
            <p className="font-medium">Summer Internship – Photonics Dept. (July 2024)</p>
            <p className="text-sm italic">Supervisor: Prof. Szymon Pustelny</p>
            <ul className="list-disc list-inside text-sm pl-2 text-gray-700">
              <li>Laboratory work on the GNOME project</li>
              <li>Built and configured spectroscopy systems on optical tables</li>
            </ul>
          </div>

          <div>
            <p className="font-medium">Board Member, Student Physics Association</p>
            <p className="text-sm">(2021/22, 2022/23)</p>
            <ul className="list-disc list-inside text-sm pl-2 text-gray-700">
              <li>Organized Winter School and SMOK Conference</li>
              <li>Supported administrative and logistics work</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Scientific Conferences</h2>
          <ul className="list-disc list-inside pl-2 text-sm space-y-1">
            <li><strong>Sempowisko</strong> (May 2025): <em>"Reimagining Spectroscopy: The Capabilities of ZULF NMR"</em></li>
            <li><strong>SMOK Conference</strong> (April 2025): <em>"Spectroscopy in the Absence of Magnets: ZULF NMR"</em></li>
            <li><strong>SMOK Conference</strong> (May 2024): Attendee</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Technical Skills</h2>
          <ul className="grid grid-cols-2 list-disc list-inside pl-2 text-sm text-gray-700 gap-y-1">
            <li>Oscilloscopes & function generators</li>
            <li>Multimeters</li>
            <li>C++</li>
            <li>Optics & photonics</li>
            <li>Analog electronics</li>
            <li>Arduino</li>
            <li>Raspberry Pi</li>
            <li>Mathematica</li>
            <li>3D printing</li>
            <li>LaTeX</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Soft Skills</h2>
          <ul className="list-disc list-inside pl-2 text-sm text-gray-700 space-y-1">
            <li>Team collaboration in research settings</li>
            <li>Independent lab work</li>
            <li>Ad hoc engineering/problem solving</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Languages</h2>
          <ul className="grid grid-cols-2 list-disc list-inside pl-2 text-sm text-gray-700 gap-y-1">
            <li>Polish (native)</li>
            <li>English (fluent)</li>
            <li>Belarusian (native)</li>
            <li>Russian (native)</li>
            <li>German (beginner)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Extracurricular</h2>
          <ul className="list-disc list-inside pl-2 text-sm text-gray-700 space-y-1">
            <li>Arduino-based electronics projects</li>
            <li>Electronics tinkering</li>
            <li>Frontend/JS programming</li>
          </ul>
        </section>
      </main>
    </>
  );
}
