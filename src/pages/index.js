import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
// If you want the site chrome, uncomment and wrap with <Layout>...</Layout>
// import Layout from '../components/Layout';

function TriplePendulum({ style }) {
  const wrapRef = useRef(null);
  const sceneRef = useRef(null);
  const trailsRef = useRef(null);
  const rafRef = useRef(null);

  const [showReset, setShowReset] = useState(false);

  // Track cycle crossings (two crossings => one full swing)
  const cycleRef = useRef({ lastSide: null, crosses: 0, revealed: false });

  useEffect(() => {
    const wrap = wrapRef.current;
    const scene = sceneRef.current;
    const trails = trailsRef.current;
    if (!wrap || !scene || !trails) return;

    const sctx = scene.getContext('2d');
    const tctx = trails.getContext('2d');
    const DPR = Math.max(1, Math.min(3, window.devicePixelRatio || 1));

    function sizeCanvases() {
      const w = Math.max(1, wrap.clientWidth);
      const h = Math.max(1, wrap.clientHeight);
      [scene, trails].forEach((cv) => {
        cv.width = Math.floor(w * DPR);
        cv.height = Math.floor(h * DPR);
        cv.style.width = w + 'px';
        cv.style.height = h + 'px';
      });
      sctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      tctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    sizeCanvases();

    const cfg = {
      g: 1400, friction: 0.0015, substeps: 2, constraintIters: 28,
      bobRadius: 7, rodWidth: 2, trailWidth: 1.4, fadeTrails: true, fadeAlpha: 0.03
    };

    const colors = {
      rod: 'rgba(240,244,255,0.9)', bob: '#e2e8f0',
      trail1: '#30d5c8', trail2: '#ff6bd6', trail3: '#ffd166', anchor: '#93c5fd'
    };

    const anchor = { x: 0, y: 0, locked: true };
    const margins = { top: 14, bottom: 12 };
    let lengths = { l1: 0, l2: 0, l3: 0 };

    function computeLengths() {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      anchor.x = w * 0.5;
      anchor.y = margins.top + 6;
      const available = Math.max(40, h - anchor.y - margins.bottom - cfg.bobRadius * 2);
      const total = available * 0.9;
      const seg = Math.max(18, total / 3);
      lengths = { l1: seg, l2: seg, l3: seg };
    }
    computeLengths();

    function makePoint(x, y) { return { x, y, px: x, py: y, ax: 0, ay: 0, locked: false }; }

    let p1, p2, p3;

    function resetToAngles(a1, a2, a3) {
      const { l1, l2, l3 } = lengths;
      const x1 = anchor.x + l1 * Math.sin(a1);
      const y1 = anchor.y + l1 * Math.cos(a1);
      const x2 = x1 + l2 * Math.sin(a2);
      const y2 = y1 + l2 * Math.cos(a2);
      const x3 = x2 + l3 * Math.sin(a3);
      const y3 = y2 + l3 * Math.cos(a3);
      p1 = makePoint(x1, y1);
      p2 = makePoint(x2, y2);
      p3 = makePoint(x3, y3);
      p3.x += 0.4; p3.y += 0.4; // tiny asymmetry
    }
    // initial angles
    resetToAngles(Math.PI * 0.7, Math.PI * 0.35, -Math.PI * 0.65);

    function addGravity(pt) { pt.ay += cfg.g; }
    function verlet(pt, dt) {
      if (pt.locked) { pt.px = pt.x; pt.py = pt.y; pt.ax = pt.ay = 0; return; }
      const vx = (pt.x - pt.px) * (1 - cfg.friction);
      const vy = (pt.y - pt.py) * (1 - cfg.friction);
      const nx = pt.x + vx + pt.ax * dt * dt;
      const ny = pt.y + vy + pt.ay * dt * dt;
      pt.px = pt.x; pt.py = pt.y;
      pt.x = nx; pt.y = ny;
      pt.ax = 0; pt.ay = 0;
    }
    function satisfyDistance(pA, pB, target, stiffness = 1) {
      let dx = pB.x - pA.x, dy = pB.y - pA.y;
      let dist = Math.hypot(dx, dy) || 1e-6;
      const diff = (dist - target) / dist * stiffness;
      const invA = pA.locked ? 0 : 0.5;
      const invB = pB.locked ? 0 : 0.5;
      const offx = dx * diff, offy = dy * diff;
      pA.x += offx * invA; pA.y += offy * invA;
      pB.x -= offx * invB; pB.y -= offy * invB;
    }

    function clearTrails(hard = false) {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      if (hard) {
        tctx.clearRect(0, 0, w, h);
        return;
      }
      if (cfg.fadeTrails) {
        tctx.save();
        // Fade by erasing alpha so wrapper bg shows through
        tctx.globalCompositeOperation = 'destination-out';
        tctx.fillStyle = `rgba(0,0,0,${cfg.fadeAlpha})`;
        tctx.fillRect(0, 0, w, h);
        tctx.restore();
        tctx.globalCompositeOperation = 'source-over';
      }
    }
    function drawTrail(from, to, color) {
      tctx.save();
      tctx.globalCompositeOperation = 'lighter';
      tctx.lineWidth = cfg.trailWidth;
      tctx.lineCap = 'round';
      tctx.strokeStyle = color;
      tctx.beginPath();
      tctx.moveTo(from.x, from.y);
      tctx.lineTo(to.x, to.y);
      tctx.stroke();
      tctx.restore();
    }
    function drawScene() {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      sctx.clearRect(0, 0, w, h);
      sctx.save();
      sctx.lineWidth = cfg.rodWidth;
      sctx.lineCap = 'round';
      sctx.strokeStyle = colors.rod;
      sctx.beginPath();
      sctx.moveTo(anchor.x, anchor.y);
      sctx.lineTo(p1.x, p1.y);
      sctx.lineTo(p2.x, p2.y);
      sctx.lineTo(p3.x, p3.y);
      sctx.stroke();
      sctx.restore();

      sctx.fillStyle = colors.anchor;
      sctx.beginPath(); sctx.arc(anchor.x, anchor.y, 3.5, 0, Math.PI * 2); sctx.fill();
      [p1, p2, p3].forEach((p) => {
        sctx.fillStyle = colors.bob;
        sctx.beginPath(); sctx.arc(p.x, p.y, cfg.bobRadius, 0, Math.PI * 2); sctx.fill();
      });
    }

    let last = performance.now();
    const fixedDt = 1 / 240;
    let acc = 0;

    function step(dt) {
      addGravity(p1); addGravity(p2); addGravity(p3);
      for (let i = 0; i < cfg.substeps; i++) {
        verlet(p1, dt / cfg.substeps);
        verlet(p2, dt / cfg.substeps);
        verlet(p3, dt / cfg.substeps);
        for (let k = 0; k < cfg.constraintIters; k++) {
          satisfyDistance(anchor, p1, lengths.l1);
          satisfyDistance(p1, p2, lengths.l2);
          satisfyDistance(p2, p3, lengths.l3);
        }
      }

      // --- cycle detection: count crossings of vertical through anchor by p3
      const side = p3.x >= anchor.x ? 'right' : 'left';
      const cy = cycleRef.current;
      if (cy.lastSide && side !== cy.lastSide) {
        cy.crosses += 1;
        if (cy.crosses >= 2 && !cy.revealed) {
          cy.revealed = true;
          setShowReset(true);
        }
      }
      cy.lastSide = side;

      drawTrail({ x: p1.px, y: p1.px ? p1.py : p1.y }, { x: p1.x, y: p1.y }, colors.trail1);
      drawTrail({ x: p2.px, y: p2.px ? p2.py : p2.y }, { x: p2.x, y: p2.y }, colors.trail2);
      drawTrail({ x: p3.px, y: p3.px ? p3.py : p3.y }, { x: p3.x, y: p3.y }, colors.trail3);

      clearTrails(false);
      drawScene();
    }

    function animate(now) {
      const dt = (now - last) / 1000;
      last = now; acc += dt;
      const maxFrame = 0.1;
      if (acc > maxFrame) acc = maxFrame;
      while (acc >= fixedDt) { step(fixedDt); acc -= fixedDt; }
      rafRef.current = requestAnimationFrame(animate);
    }

    function onResize() {
      sizeCanvases();
      computeLengths();
      // Reset cycle tracking on resize
      cycleRef.current = { lastSide: null, crosses: 0, revealed: false };
      setShowReset(false);
      // Re-seed angles to fit new size
      resetToAngles(Math.PI * 0.7, Math.PI * 0.35, -Math.PI * 0.65);
      clearTrails(true);
    }

    window.addEventListener('resize', onResize, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    // Expose a reset function on the wrapper DOM node for the button
    wrap.__resetPendulum = () => {
      // random but pleasant angles
      const a1 = Math.PI * (0.35 + Math.random() * 0.5);
      const a2 = (Math.random() < 0.5 ? -1 : 1) * Math.PI * (0.2 + Math.random() * 0.6);
      const a3 = (Math.random() < 0.5 ? -1 : 1) * Math.PI * (0.3 + Math.random() * 0.6);
      resetToAngles(a1, a2, a3);
      // Reset cycle tracking and hide button again until next full cycle
      cycleRef.current = { lastSide: null, crosses: 0, revealed: false };
      setShowReset(false);
      clearTrails(true);
    };

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      delete wrap.__resetPendulum;
    };
  }, []);

  function handleReset() {
    const wrap = wrapRef.current;
    if (wrap && typeof wrap.__resetPendulum === 'function') {
      wrap.__resetPendulum();
    }
  }

  return (
    <div
      ref={wrapRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minWidth: 160,
        minHeight: 140,
        background: 'radial-gradient(600px 400px at 50% 25%, #0e1322, #0b0f1a)',
        overflow: 'hidden',
        borderRadius: 12,
        ...style,
      }}
      aria-label="Triple pendulum animation"
    >
      <canvas ref={trailsRef} style={{ position: 'absolute', inset: 0, zIndex: 0, display: 'block' }} />
      <canvas ref={sceneRef} style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'block' }} />

      {/* Reset button appears only after first full cycle */}
      {showReset && (
        <button
          onClick={handleReset}
          aria-label="Reset pendulum"
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 3,
            padding: '6px 10px',
            fontSize: 12,
            lineHeight: 1,
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.25)',
            background: 'rgba(2,6,23,0.55)',
            color: '#e5e7eb',
            cursor: 'pointer',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.35)',
            userSelect: 'none',
          }}
          onMouseDown={(e) => e.preventDefault()}
        >
          ↺ Reset
        </button>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home – Aliaksei Hlukhau</title>
        <meta name="description" content="Aliaksei Hlukhau's webpage." />
        {/* Open Graph (Telegram, Messenger) */}
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Aliaksei Hlukhau – Physics student." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eigen.to" />
        <meta property="og:image" content="/images/preview.png" />
        {/* Font you already use */}
        <link
          href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* <Layout> */}
      <div style={{ padding: '16px', maxWidth: 1100, margin: '0 auto' }}>
        <h1>Welcome to My Site!</h1>


        {/*
        <p style={{ fontFamily: "'Antykwa Poltawskiego', 'Times New Roman'", fontSize: '1.25rem' }}>
          Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. <br />
          Ile cię trzeba cenić, ten tylko się dowie, <br />
          Kto cię stracił. Dziś piękność twą w całej ozdobie <br />
          Widzę i opisuję, bo tęsknię po tobie.{' '}
          <a href="https://de.wikipedia.org/wiki/Polen" target="_blank" rel="noopener noreferrer">
            <img
              src="https://flagcdn.com/w40/pl.png"
              alt="Polnische Flagge"
              width="20"
              style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px' }}
            />
          </a>
        </p>
        */}

        {/* ✨ Small boxed pendulum 

{/*

        <section style={{ marginTop: 24 }}>
          <TriplePendulum
            style={{
              width: 320,
              height: 220,
              borderRadius: 12,
              background: '#112121',
              border: '2px solid #30d5c8',
              boxShadow: '0 6px 20px rgba(0,0,0,.25)',
            }}
          />
        </section>

*/}

{/*

        <section class="laser-card">
  <div class="laser-inner">
    <h2 class="laser-title">Optics & Photonics</h2>
    <p class="laser-sub">coherent light • interference • diffraction</p>
  </div>
</section>
        */}
      </div>
      {/* </Layout> */}
    </>
  );
}
