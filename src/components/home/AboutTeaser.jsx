import Reveal from '../Reveal.jsx';
import { FICHE } from '../../data/content.js';

export default function AboutTeaser({ nav }) {
  return (
    <section
      data-screen-label="Accueil — À propos"
      style={{ padding: 'clamp(120px,16vw,220px) clamp(20px,4vw,56px) 0', display: 'flex', flexWrap: 'wrap', gap: '40px clamp(24px,5vw,80px)' }}
    >
      <div style={{ flex: '2 1 460px', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>À propos</span>
        <Reveal as="p" style={{ margin: 0, maxWidth: 980, fontSize: 'clamp(30px,4vw,62px)', lineHeight: 1, letterSpacing: '-0.035em', fontWeight: 500 }}>
          Jeune créatif digital basé à Abidjan. Passionné par la technologie, le design et la création de produits — et surtout par ce qui se passe <span style={{ color: '#B85A00' }}>entre les trois</span>.
        </Reveal>
        <a href="#/a-propos" onClick={nav('/a-propos')} style={{ alignSelf: 'flex-start', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', borderBottom: '1px solid currentColor', paddingBottom: 3, cursor: 'pointer' }}>Lire la suite →</a>
      </div>
      <Reveal style={{ flex: '1 1 280px', maxWidth: 380, display: 'flex', flexDirection: 'column', borderTop: '1px solid #111110' }}>
        <div style={{ position: 'relative', aspectRatio: '4/5', background: '#DAD6CE', overflow: 'hidden', margin: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#8E897F', textTransform: 'uppercase', letterSpacing: '.04em' }}>
          Portrait
        </div>
        {FICHE.map((f) => (
          <div key={f.k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, borderBottom: '1px solid rgba(17,17,16,.16)', padding: '10px 0', fontSize: 15 }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>{f.k}</span>
            <span style={{ textAlign: 'right' }}>{f.v}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
