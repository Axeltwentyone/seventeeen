import { useState } from 'react';
import Reveal from '../Reveal.jsx';
import { TERMS } from '../../data/content.js';

const KEYS = ['code', 'design', 'produit', 'exp'];
const LABELS = { code: 'Code', design: 'Design', produit: 'Produit', exp: 'Expérience' };

export default function Expertise() {
  const [term, setTerm] = useState('exp');
  const now = TERMS[term];

  return (
    <section
      data-screen-label="Accueil — Expertise"
      style={{ position: 'relative', zIndex: 1, background: '#EDEBE6', padding: 'clamp(120px,16vw,220px) clamp(20px,4vw,56px) 0' }}
    >
      <span style={{ display: 'block', marginBottom: 'clamp(28px,4vw,48px)', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>
        Expertise — survolez chaque terme
      </span>
      <Reveal style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0 .22em', fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(52px,10.5vw,190px)', lineHeight: .88, letterSpacing: '-0.02em' }}>
        {KEYS.flatMap((k, i) => [
          <span key={k} onMouseEnter={() => setTerm(k)} onClick={() => setTerm(k)} style={{ cursor: 'default', color: term === k ? '#111110' : '#8E897F', transition: 'color .3s' }}>
            {LABELS[k]}
          </span>,
          i < KEYS.length - 1 && <span key={k + '-op'} style={{ color: '#F77F00', fontWeight: 300 }}>{i === 2 ? '=' : '+'}</span>,
        ])}
      </Reveal>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px clamp(24px,5vw,80px)', marginTop: 'clamp(32px,4vw,56px)', borderTop: '1px solid #111110', paddingTop: 20, minHeight: 120 }}>
        <span style={{ flex: '0 0 220px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>{now.k}</span>
        <p style={{ flex: '1 1 380px', margin: 0, maxWidth: 640, fontSize: 'clamp(20px,2vw,28px)', lineHeight: 1.2, letterSpacing: '-0.015em' }}>{now.d}</p>
        <span style={{ flex: '0 1 260px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57', lineHeight: 1.6 }}>{now.tags}</span>
      </div>
    </section>
  );
}
