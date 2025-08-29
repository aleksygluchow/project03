import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home – Aliaksei Hlukhau</title>
        <meta name="description" content="Aliaksei Hlukhau's totally rad 2000s webpage." />

        {/* Open Graph */}
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Aliaksei Hlukhau – Physics student." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eigen.to" />
        <meta property="og:image" content="/images/preview.png" />

        {/* 2000s Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Outer table layout = early-web energy */}
      <div className="page-bg">
        <table className="outer" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td className="sidebar">
                <div className="sidebar-inner">
                  <img src="/images/spinning-email.gif" alt="email" className="side-gif" />
                  <h3 className="nav-title">~ NAVIGATION ~</h3>
                  <ul className="nav">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Me</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><a href="mailto:me@eigen.to">Contact</a></li>
                  </ul>

                  <div className="badges">
                    <img src="/images/under-construction.gif" alt="Under Construction" />
                    <img src="/images/best-viewed-ie.gif" alt="Best viewed in IE5" />
                    <img src="/images/guestbook.gif" alt="Guestbook" />
                  </div>
                </div>
              </td>

              <td className="content">
                <header className="header">
                  <img src="/images/aliaksei-bling.gif" alt="Site Logo" className="logo" />
                  <div className="title-block">
                    <h1 className="site-title">Welcome to My Site!</h1>
                    <div className="subtitle">
                      <span className="blink">Official</span> homepage of Aliaksei Hlukhau
                    </div>
                  </div>
                </header>

                <marquee className="marq" behavior="scroll" direction="left" scrollAmount="4">
                  ✨ Breaking: I’m back in Kraków and starting my Master’s this October! ✨
                </marquee>

                <div className="intro">
                  <p className="frak">
                    Jetzt in Polen{' '}
                    <a
                      href="https://de.wikipedia.org/wiki/Polen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flag-link"
                    >
                      <img
                        src="https://flagcdn.com/w40/pl.png"
                        alt="Polnische Flagge"
                        width="20"
                        style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 4 }}
                      />
                    </a>
                  </p>

                  <p className="copy">
                    Hi, I’m Aliaksei. This is my little corner of the web—hand-coded, table-based,
                    gif-powered, and <em>definitely</em> not mobile-first.
                  </p>

                  <div className="buttons">
                    <a className="btn" href="/Aliaksei-CV.pdf">Download my CV</a>
                    <a className="btn" href="/blog">Enter the Blog</a>
                  </div>

                  <div className="counter">
                    <span>Visitor counter: </span>
                    <span id="hitcount">000001</span>
                  </div>

                  <div className="webring">
                    <span>Member of the Physics WebRing:</span>
                    <a href="#prev">◀ Prev</a> | <a href="#random">Random</a> | <a href="#next">Next ▶</a>
                  </div>

                  <div className="player">
                    <p>Background music (it’s 2002, sorry):</p>
                    <audio controls>
                      <source src="/audio/chill-midi.mid" type="audio/midi" />
                      Your browser does not support MIDI audio.
                    </audio>
                  </div>
                </div>

                <footer className="footer">
                  <p>© 2003–2025 Aliaksei. All gifs proudly tiled.</p>
                </footer>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Extremely 2000s CSS */}
      <style jsx global>{`
        /* Cursor flair */
        body {
          cursor: url('/images/cursor.cur'), auto;
        }

        .page-bg {
          min-height: 100vh;
          background: #000 url('/images/bg-stars.gif') repeat;
          color: #fff;
          font-family: "Tahoma", "Verdana", "Comic Sans MS", "Arial", sans-serif;
          text-shadow: 1px 1px 0 rgba(0,0,0,0.6);
        }

        a { color: #00ffff; text-decoration: underline; }
        a:hover { color: #ff00ff; text-decoration: blink; } /* lol */

        .outer {
          width: 960px;
          margin: 20px auto;
          border: 4px ridge #39f;
          background: rgba(0,0,0,0.65);
        }

        .sidebar {
          width: 220px;
          background: #111 url('/images/side-tiles.gif') repeat;
          border-right: 3px groove #39f;
          vertical-align: top;
        }
        .sidebar-inner { padding: 12px; text-align: center; }
        .side-gif { width: 64px; height: 64px; image-rendering: pixelated; }
        .nav-title { color: #0ff; letter-spacing: 1px; margin-top: 10px; margin-bottom: 6px; }
        .nav { list-style: square; text-align: left; padding-left: 18px; }
        .nav li { margin: 6px 0; }
        .badges img { display: block; width: 100%; margin: 8px 0; border: 2px inset #39f; }

        .content { padding: 0; }

        .header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: linear-gradient(#004,#002);
          border-bottom: 3px groove #39f;
        }
        .logo { width: 72px; height: 72px; image-rendering: pixelated; border: 2px outset #39f; }
        .site-title {
          margin: 0;
          font-size: 36px;
          font-family: "Impact", "Arial Black", sans-serif;
          letter-spacing: 1px;
          color: #0ff;
        }
        .subtitle { font-size: 12px; color: #ff0; }

        .blink {
          animation: blink 0.9s steps(2, start) infinite;
          background: #f0f; padding: 1px 4px; color: #000; margin-right: 6px;
        }
        @keyframes blink { to { visibility: hidden; } }

        .marq {
          padding: 6px 10px;
          background: #222 url('/images/marquee-bg.gif') repeat-x;
          color: #fff;
          border-bottom: 3px ridge #39f;
          font-weight: bold;
        }

        .intro { padding: 16px; }
        .frak {
          font-family: 'UnifrakturCook', cursive;
          font-size: 20px;
          margin: 0 0 8px;
        }
        .copy { font-size: 14px; line-height: 1.4; }

        .buttons { margin: 14px 0; display: flex; gap: 10px; flex-wrap: wrap; }
        .btn {
          display: inline-block;
          padding: 6px 10px;
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

        .webring { margin-top: 12px; font-size: 12px; }
        .webring a { margin: 0 6px; }

        .player { margin-top: 16px; }

        .footer {
          margin-top: 20px;
          padding: 12px;
          background: #111;
          border-top: 3px groove #39f;
          text-align: center;
          font-size: 12px;
        }
      `}</style>

      {/* Tiny hit counter (local only, for fun) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              try {
                var n = parseInt(localStorage.getItem('ah_hits') || '0', 10) + 1;
                localStorage.setItem('ah_hits', n);
                var el = document.getElementById('hitcount');
                if (el) {
                  el.textContent = (''+n).padStart(6, '0');
                }
              } catch(e){}
            })();
          `,
        }}
      />
    </>
  );
}
