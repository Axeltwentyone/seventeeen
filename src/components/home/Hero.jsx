import { useEffect, useRef, useState } from 'react';
import useClock from '../../hooks/useClock.js';
import { LENS } from '../../data/content.js';

export default function Hero() {
  const clock = useClock();
  const [lens, setLens] = useState('idee');
  const [auto, setAuto] = useState(true);
  const barRef = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    if (!auto) return;
    timers.current.forEach(clearTimeout);
    const bar = barRef.current;
    if (bar) {
      bar.style.transition = 'none';
      bar.style.width = '0';
      requestAnimationFrame(() => {
        bar.style.transition = 'width 4.8s linear';
        bar.style.width = '100%';
      });
    }
    timers.current = LENS.map(([k], i) => setTimeout(() => setLens(k), i * 1600));
    return () => timers.current.forEach(clearTimeout);
  }, [auto]);

  const pick = (k) => {
    setAuto(false);
    timers.current.forEach(clearTimeout);
    const bar = barRef.current;
    if (bar) {
      bar.style.transition = 'width .4s';
      bar.style.width = ((LENS.findIndex((l) => l[0] === k) + 1) * 25) + '%';
    }
    setLens(k);
  };

  return (
    <section
      data-screen-label="Accueil — Ouverture"
      style={{ minHeight: '100vh', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 40, padding: '92px clamp(20px,4vw,56px) 28px', position: 'relative' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px 24px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>
        <span>Portfolio — Édition 2026</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#009E60', animation: 'pulse 1.8s infinite' }} />
          Disponible · Abidjan 5°21′N 4°01′W · {clock}
        </span>
      </div>

      <div style={{ position: 'relative', minHeight: 'clamp(150px,30vw,520px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {lens === 'idee' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#5F5C57' }}>// esquisse_01.txt</span>
            <p style={{ margin: 0, maxWidth: 1100, fontWeight: 300, fontSize: 'clamp(30px,5vw,84px)', lineHeight: 1.02, letterSpacing: '-0.035em', color: '#5F5C57' }}>
              et si un portfolio montrait <span style={{ textDecoration: 'line-through', textDecorationThickness: '2px' }}>ce que je fais</span> comment je pense ?
              <span style={{ display: 'inline-block', width: '.06em', height: '.9em', marginLeft: '.08em', background: '#F77F00', verticalAlign: '-0.1em', animation: 'caret 1s steps(1) infinite' }} />
            </p>
          </div>
        )}

        {lens === 'maquette' && (
          <div style={{ position: 'relative', alignSelf: 'flex-start', maxWidth: '100%' }}>
            <div style={{ position: 'absolute', inset: '-10px -14px', border: '1.5px solid #F77F00', pointerEvents: 'none' }} />
            <span style={{ position: 'absolute', top: -36, left: -14, background: '#F77F00', color: '#111110', padding: '3px 7px', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, whiteSpace: 'nowrap' }}>h1.signature — Bricolage 800 / 75%</span>
            <span style={{ position: 'absolute', bottom: -38, right: -14, background: '#111110', color: '#EDEBE6', padding: '3px 7px', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, whiteSpace: 'nowrap' }}>— × —</span>
            <h1 style={{ margin: 0, fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(64px,16.5vw,300px)', lineHeight: .82, letterSpacing: '-0.02em', color: 'transparent', WebkitTextStroke: '1.5px #111110' }}>
              Christ Axel<br />Teky.
            </h1>
          </div>
        )}

        {lens === 'code' && (
          <div style={{ display: 'flex', flexDirection: 'column', fontFamily: "'JetBrains Mono',monospace", fontSize: 'clamp(15px,2.6vw,40px)', lineHeight: 1.45, color: '#111110' }}>
            <div style={{ display: 'flex', gap: '1.2em' }}><span style={{ color: '#8E897F' }}>01</span><span><span style={{ color: '#B85A00' }}>&lt;h1</span> <span style={{ color: '#00784A' }}>class</span>=<span style={{ color: '#5F5C57' }}>"signature"</span><span style={{ color: '#B85A00' }}>&gt;</span></span></div>
            <div style={{ display: 'flex', gap: '1.2em' }}><span style={{ color: '#8E897F' }}>02</span><span style={{ paddingLeft: '1.2em' }}>Christ Axel Teky</span></div>
            <div style={{ display: 'flex', gap: '1.2em' }}><span style={{ color: '#8E897F' }}>03</span><span style={{ color: '#B85A00' }}>&lt;/h1&gt;</span></div>
            <div style={{ display: 'flex', gap: '1.2em' }}><span style={{ color: '#8E897F' }}>04</span><span><span style={{ color: '#B85A00' }}>&lt;p&gt;</span>Développeur. Designer. Penseur digital.<span style={{ color: '#B85A00' }}>&lt;/p&gt;</span></span></div>
            <div style={{ display: 'flex', gap: '1.2em' }}><span style={{ color: '#8E897F' }}>05</span><span style={{ color: '#8E897F' }}>// build réussi en 4 étapes ✓</span></div>
          </div>
        )}

        {lens === 'produit' && (
          <h1 style={{ margin: 0, fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(64px,16.5vw,300px)', lineHeight: .82, letterSpacing: '-0.02em' }}>
            <div>Christ Axel</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap-reverse' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingBottom: '.12em', fontFamily: "'JetBrains Mono',monospace", fontWeight: 400, fontStretch: '100%', fontSize: 'clamp(12px,1.1vw,15px)', lineHeight: 1.5, letterSpacing: '.02em' }}>
                <span>Développeur.</span><span>Designer.</span><span>Penseur digital.</span>
              </div>
              <div>Teky<span style={{ color: '#F77F00' }}>.</span></div>
            </div>
          </h1>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 28 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: '1 1 320px', minWidth: 0, maxWidth: 620 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>De l'idée au produit — cliquez une étape</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 1, background: '#111110', border: '1px solid #111110', maxWidth: 620 }}>
            {LENS.map(([k, label], j) => (
              <button
                key={k}
                onClick={() => pick(k)}
                style={{ appearance: 'none', border: 'none', margin: 0, padding: '12px 16px', minHeight: 44, cursor: 'pointer', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', background: lens === k ? '#F77F00' : '#EDEBE6', color: '#111110', display: 'flex', gap: 8 }}
              >
                <span style={{ opacity: .55 }}>0{j + 1}</span>{label}
              </button>
            ))}
          </div>
          <div style={{ height: 2, background: 'rgba(17,17,16,.12)' }}><div ref={barRef} style={{ height: 2, width: 0, background: '#111110' }} /></div>
        </div>
        <p style={{ margin: 0, maxWidth: 440, fontSize: 'clamp(19px,1.7vw,24px)', lineHeight: 1.2, letterSpacing: '-0.015em' }}>
          Je conçois et développe des expériences digitales, de la première idée jusqu'au produit final.
        </p>
      </div>
    </section>
  );
}
