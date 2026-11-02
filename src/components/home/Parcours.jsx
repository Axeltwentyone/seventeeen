import Reveal from '../Reveal.jsx';
import { EXPERIENCE } from '../../data/content.js';

export default function Parcours() {
  return (
    <section data-screen-label="Accueil — Parcours" style={{ padding: 'clamp(120px,16vw,220px) clamp(20px,4vw,56px) 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, paddingBottom: 24 }}>
        <Reveal as="h2" style={{ margin: 0, fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(48px,8vw,140px)', lineHeight: .82, letterSpacing: '-0.02em' }}>Parcours</Reveal>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>Journal — du plus récent au plus ancien</span>
      </div>
      {EXPERIENCE.map((e, i) => (
        <Reveal key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '6px 24px', borderTop: '1px solid #111110', padding: '22px 0', fontSize: 18, alignItems: 'baseline' }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>{e.period}</span>
          <span style={{ fontWeight: 600 }}>{e.org}</span>
          <span>{e.role}</span>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>{e.kind}</span>
        </Reveal>
      ))}
      <div style={{ borderTop: '1px solid #111110' }} />
    </section>
  );
}
