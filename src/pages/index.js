import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home – Aliaksei Hlukhau</title>
        <meta name="description" content="Aliaksei Hlukhau's webpage." />

        {/* Open Graph */}
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Aliaksei Hlukhau – Physics student." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eigen.to" />
        <meta property="og:image" content="/images/preview.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* If you can: make Layout accept showTopNav={false} and use it here */}
      <Layout /* showTopNav={false} */>
        {/* Hide Layout's built-in top nav with CSS if you can't change Layout yet */}
        <style jsx global>{`
          /* Try common classnames; harmless if not present */
          .site-header, .topnav, nav.site-nav, header[data-role='topnav'] { display: none !important; }
        `}</style>

        <div className="retro-wrap">
          <table className="outer" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td className="sidebar">
                  <div className="sidebar-inner">
                    <h3 className="nav-title">~ NAVIGATION ~</h3>
                    <ul className="nav">
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about">About</Link></li>
                      <li><Link href="/portfolio">Portfolio</Link></li>
                      <li><Link href="/blog">Blog</Link></li>
                      <li><a href="mailto:me@eigen.to">Contact</a></li>
                    </ul>

                    <div className="badges">
                      <span className="badge">Under Construction</span>
                      <span className="badge">Best viewed at 1024×768</span>
                    </div>
                  </div>
                </td>

                <td className="content">
                  <header className="header">
                    <h1 className="site-title">Welcome to My Site!</h1>
                    <div className="subtitle">
                      <span className="blink">Official</span> homepage of Aliaksei Hlukhau
                    </div>
                  </header>

                  <div className="marquee" aria-hidden="true">
                    <div className="marquee-inner">
                      ✨ I’m back in Kraków and starting my Master’s this October! ✨
                    </div>
                  </div>

                  <div className="intro">
                    <p
                      style={{
                        fontFamily: "'UnifrakturCook', cursive",
                        fontSize: '1.25rem',
                        marginTop: 0,
                      }}
                    >
                      Jetzt in Polen{' '}
                      <a
                        href="https://de.wikipedia.org/wiki/Polen"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://flagcdn.com/w40/pl.png"
                          alt="Polnische Flagge"
                          width="20"
                          style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px' }}
                        />
                      </a>
                    </p>

                    <p className="copy">
                      Hi, I’m Aliaksei. This is my little corner of the web—hand-coded, table-based,
                      and unapologetically early-2000s.
                    </p>

                    <div className="buttons">
                      <a className="btn" href="/Aliaksei-CV.pdf">Download my CV</a>
                      <Link className="btn" href="/blog">Enter the Blog</Link>
                    </div>

                    <div className="counter">
                      <span>Visitor counter: </span>
                      <span id="hitcount">000001</span>
                    </div>
                  </div>

                  <footer className="footer">
                    <p>© 2003–2025 Aliaksei. All rights reserved.</p>
                  </footer>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <style jsx>{`
          .retro-wrap {
            min-height: 60vh;
            padding: 12px;
            background:
              radial-gradient(circle at 10% 20%, rgba(0,255,255,0.15), transparent 40%),
              radial-gradient(circle at 80% 0%, rgba(255,0,255,0.12), transparent 35%),
              #000;
            color: #fff;
            font-family: Tahoma, Verdana, "Comic Sans MS", Arial, sans-serif;
          }

          .outer {
            width: 100%;
            max-width: 980px;
            margin: 0 auto;
            border: 4px ridge #39f;
            background: rgba(0,0,0,0.65);
          }

          .sidebar {
            width: 240px;
            background: repeating-linear-gradient(45deg,#0a0,#0a0 8px,#070 8px,#070 16px);
            border-right: 3px groove #39f;
            vertical-align: top;
          }
          .sidebar-inner { padding: 12px; color: #fff; }
          .nav-title { color: #0ff; text-align: center; margin: 6px 0 10px; }
          .nav { list-style: square; padding-left: 18px; }
          .nav li { margin: 6px 0; }
          .nav a { color: #0ff; text-decoration: underline; }
          .nav a:hover { color: #ff0; }

          .badges { margin-top: 14px; display: grid; gap: 6px; }
          .badge {
            display: block;
            padding: 6px 8px;
            border: 2px inset #39f;
            background: linear-gradient(#003,#001);
            font-size: 12px;
            text-align: center;
          }

          .content { background: #001; }

          .header {
            padding: 14px 16px;
            background: linear-gradient(#004,#002);
            border-bottom: 3px groove #39f;
          }
          .site-title {
            margin: 0;
            font-size: 32px;
            font-family: Impact, "Arial Black", sans-serif;
            color: #0ff;
          }
          .subtitle { font-size: 12px; color: #ff0; margin-top: 4px; }

          .blink {
            animation: blink 0.9s steps(2, start) infinite;
            background: #f0f; padding: 1px 4px; color: #000; margin-right: 6px;
          }
          @keyframes blink { to { visibility: hidden; } }

          .marquee {
            overflow: hidden;
            border-bottom: 3px ridge #39f;
            background: #111;
          }
          .marquee-inner {
            display: inline-block;
            padding: 8px 0;
            white-space: nowrap;
            animation: slide 12s linear infinite;
            font-weight: bold;
          }
          @keyframes slide {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          .intro { padding: 16px; }
          .copy { font-size: 14px; line-height: 1.45; }

          .buttons { margin: 14px 0; display: flex; gap: 10px; flex-wrap: wrap; }
          .btn {
            display: inline-block;
            padding: 10px 14px;
            border: 3px outset #39f;
            background: linear-gradient(#0af, #07c);
            color: #fff;
            font-weight: bold;
            box-shadow: 0 0 10px #0ff;
          }
          .btn:active { border: 3px inset #39f; }

          .counter {
            margin-top: 8px;
            font-family: "Courier New", monospace;
            background: #000;
            display: inline-block;
            padding: 4px 8px;
            border: 2px inset #39f;
          }

          .footer {
            margin-top: 10px;
            padding: 12px 16px;
            background: #111;
            border-top: 3px groove #39f;
            text-align: center;
            font-size: 12px;
            color: #ddd;
          }

          /* -------- Mobile tweaks -------- */
          @media (max-width: 720px) {
            /* Collapse the table layout into blocks */
            .outer, .outer tbody, .outer tr, .outer td { display: block; width: 100% !important; }
            .sidebar { border-right: 0; }
            .sidebar-inner { padding: 10px; }
            .nav { list-style: none; padding-left: 0; display: flex; flex-wrap: wrap; gap: 12px; }
            .nav li { margin: 0; }
            .badge { display: none; } /* cut visual noise on phones */
            .site-title { font-size: 26px; }
            .subtitle { font-size: 11px; }
            .buttons { flex-direction: column; }
            .btn { width: 100%; text-align: center; }
            .marquee-inner { animation-duration: 20s; } /* slower scroll on mobile */
            .intro { padding: 12px; }
          }
        `}</style>

        {/* Tiny local hit counter */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var n = parseInt(localStorage.getItem('ah_hits') || '0', 10) + 1;
                  localStorage.setItem('ah_hits', n);
                  var el = document.getElementById('hitcount');
                  if (el) { el.textContent = (''+n).padStart(6, '0'); }
                } catch(e){}
              })();
            `,
          }}
        />
      </Layout>
    </>
  );
}
