import Reveal from '../../components/Reveal.jsx';
import { PROJECTS } from '../../data/content.js';

function Slot({ label, style }) {
  return (
    <div style={{ position: 'relative', background: '#DAD6CE', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#8E897F', textTransform: 'uppercase', letterSpacing: '.04em', textAlign: 'center', padding: 12, ...style }}>
      {label}
    </div>
  );
}

export default function GenericProject({ slug, nav }) {
  const i = Math.max(0, PROJECTS.findIndex((p) => p.slug === slug));
  const p = PROJECTS[i];
  const nx = PROJECTS[(i + 1) % PROJECTS.length];

  const process = [
    { n: '01', t: 'Idée', d: 'Comprendre le contexte, les usagers et les enjeux. Poser les bonnes questions avant toute solution.' },
    { n: '02', t: 'Maquette', d: 'Structurer les parcours, prototyper, tester puis affiner les interfaces.' },
    { n: '03', t: 'Code', d: 'Construire une base solide, intégrer, sécuriser, optimiser.' },
    { n: '04', t: 'Produit', d: 'Déployer, observer les usages réels et itérer.' },
  ];

  return (
    <main data-screen-label="Étude de cas">
      <section style={{ background: p.bg, color: p.fg, minHeight: '100vh', boxSizing: 'border-box', padding: '92px clamp(20px,4vw,56px) 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 40 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>
          <a href="#/" onClick={nav('/', 'works')} style={{ cursor: 'pointer' }}>← Tous les projets</a>
          <span>Étude de cas — dossier {p.n} / 06</span>
        </div>
        <h1 style={{ margin: 0, fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(60px,15vw,270px)', lineHeight: .8, letterSpacing: '-0.02em', overflow: 'hidden', paddingBottom: '.04em' }}>
          <Reveal mode="up" delay={80}>{p.title}</Reveal>
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 28 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 620 }}>
            <p style={{ margin: 0, fontSize: 'clamp(24px,2.8vw,42px)', lineHeight: 1.04, letterSpacing: '-0.03em', fontWeight: 500 }}>{p.tagline}</p>
            {p.url && <a href={p.url} target="_blank" rel="noreferrer" style={{ alignSelf: 'flex-start', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', borderBottom: '1px solid currentColor', paddingBottom: 3 }}>Voir le site en ligne ↗</a>}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(140px,220px))', gap: '16px 28px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em', opacity: .7 }}>Type</span><span style={{ fontSize: 15 }}>{p.type}</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em', opacity: .7 }}>Rôle</span><span style={{ fontSize: 15 }}>{p.role}</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em', opacity: .7 }}>Marché</span><span style={{ fontSize: 15 }}>{p.market}</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em', opacity: .7 }}>Stack</span><span style={{ fontSize: 15 }}>{p.stack.join(', ')}</span></div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(16px,2vw,24px) clamp(20px,4vw,56px) 0' }}>
        <Reveal style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#DAD6CE', overflow: 'hidden' }}>
          <Slot label="Visuel principal du projet (16:9)" style={{ position: 'absolute', inset: 0 }} />
        </Reveal>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px) 0', display: 'flex', flexDirection: 'column', gap: 'clamp(72px,10vw,150px)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px clamp(24px,5vw,80px)' }}>
          <span style={{ flex: '0 0 220px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§01 Présentation</span>
          <Reveal as="p" style={{ flex: '1 1 420px', margin: 0, maxWidth: 980, fontSize: 'clamp(28px,3.4vw,52px)', lineHeight: 1.02, letterSpacing: '-0.035em', fontWeight: 500 }}>{p.intro}</Reveal>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px clamp(24px,5vw,80px)' }}>
          <span style={{ flex: '0 0 220px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§02 Contexte &amp; problématique</span>
          <Reveal style={{ flex: '1 1 420px', maxWidth: 980, display: 'flex', flexWrap: 'wrap', gap: '28px 48px' }}>
            <p style={{ flex: '1 1 300px', margin: 0, fontSize: 18, lineHeight: 1.55 }}>{p.context}</p>
            <p style={{ flex: '1 1 300px', margin: 0, fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(28px,2.8vw,42px)', lineHeight: .95, letterSpacing: '-0.01em' }}>{p.problem}</p>
          </Reveal>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px clamp(24px,5vw,80px)' }}>
          <span style={{ flex: '0 0 220px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§03 Objectifs</span>
          <div style={{ flex: '1 1 420px', maxWidth: 980 }}>
            {p.goals.map((g, idx) => (
              <Reveal key={idx} style={{ display: 'flex', gap: 24, alignItems: 'baseline', borderTop: '1px solid #111110', padding: '18px 0' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#5F5C57' }}>→ 0{idx + 1}</span>
                <span style={{ fontSize: 'clamp(20px,2vw,28px)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{g}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px clamp(24px,5vw,80px)' }}>
          <span style={{ flex: '0 0 220px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§04 Mon rôle</span>
          <Reveal as="p" style={{ flex: '1 1 420px', margin: 0, maxWidth: 720, fontSize: 18, lineHeight: 1.55 }}>{p.roleText}</Reveal>
        </div>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px) 0' }}>
        <span style={{ display: 'block', paddingBottom: 20, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§05 Processus — idée → maquette → code → produit</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
          {process.map((s) => (
            <Reveal key={s.n} style={{ borderTop: '3px solid #111110', padding: '18px 24px 40px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#5F5C57' }}>{s.n}</span>
              <h4 style={{ margin: 0, fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(34px,3.2vw,52px)', lineHeight: .9, letterSpacing: '-0.01em' }}>{s.t}</h4>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: '#3B3936' }}>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px) 0' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px clamp(24px,5vw,80px)', marginBottom: 'clamp(40px,5vw,64px)' }}>
          <span style={{ flex: '0 0 220px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§06 Direction artistique &amp; interfaces</span>
          <Reveal as="p" style={{ flex: '1 1 420px', margin: 0, maxWidth: 720, fontSize: 18, lineHeight: 1.55 }}>{p.da}</Reveal>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px,1.6vw,24px)', alignItems: 'flex-start' }}>
          <Reveal style={{ flex: '1 1 280px', position: 'relative', aspectRatio: '3/4', background: p.bg }}><Slot label="Interface mobile" style={{ position: 'absolute', inset: 0 }} /></Reveal>
          <Reveal delay={120} style={{ flex: '2 1 460px', position: 'relative', aspectRatio: '3/2', marginTop: 'clamp(0px,8vw,140px)', background: '#DAD6CE' }}><Slot label="Interface desktop" style={{ position: 'absolute', inset: 0 }} /></Reveal>
        </div>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px) 0', display: 'flex', flexDirection: 'column', gap: 'clamp(72px,10vw,150px)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px clamp(24px,5vw,80px)' }}>
          <span style={{ flex: '0 0 220px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§07 Stack technique</span>
          <div style={{ flex: '1 1 420px', display: 'flex', flexWrap: 'wrap', gap: 10, maxWidth: 980 }}>
            {p.stack.map((t) => <Reveal key={t} as="span" style={{ border: '1px solid #111110', padding: '10px 18px', fontFamily: "'JetBrains Mono',monospace", fontSize: 'clamp(14px,1.4vw,18px)' }}>{t}</Reveal>)}
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px clamp(24px,5vw,80px)' }}>
          <span style={{ flex: '0 0 220px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§08 Résultat &amp; apprentissages</span>
          <Reveal style={{ flex: '1 1 420px', maxWidth: 980, display: 'flex', flexWrap: 'wrap', gap: '24px 48px' }}>
            <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: 10 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em' }}>Résultat</span><p style={{ margin: 0, fontSize: 18, lineHeight: 1.55 }}>{p.result}</p></div>
            <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: 10 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em' }}>Ce que j'en retiens</span><p style={{ margin: 0, fontSize: 18, lineHeight: 1.55 }}>{p.learn}</p></div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px) 0' }}>
        <span style={{ display: 'block', paddingBottom: 20, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§09 Galerie</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 'clamp(12px,1.6vw,24px)' }}>
          <Reveal style={{ gridColumn: '1/-1', position: 'relative', aspectRatio: '21/9', background: '#DFDCD5' }}><Slot label="Mockup large (21:9)" style={{ position: 'absolute', inset: 0 }} /></Reveal>
          <Reveal style={{ position: 'relative', aspectRatio: '1/1', background: '#DAD6CE' }}><Slot label="Détail" style={{ position: 'absolute', inset: 0 }} /></Reveal>
          <Reveal delay={100} style={{ position: 'relative', aspectRatio: '1/1', background: p.bg }}><Slot label="Détail" style={{ position: 'absolute', inset: 0 }} /></Reveal>
          <Reveal delay={200} style={{ position: 'relative', aspectRatio: '1/1', background: '#DFDCD5' }}><Slot label="Détail" style={{ position: 'absolute', inset: 0 }} /></Reveal>
        </div>
      </section>

      <section
        data-cursor="Dossier suivant"
        onClick={nav(`/projets/${nx.slug}`)}
        style={{ cursor: 'pointer', marginTop: 'clamp(100px,13vw,200px)', background: nx.bg, color: nx.fg, padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,56px)' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>
          <span>Dossier suivant — {nx.n} / 06</span><span>→</span>
        </div>
        <h2 style={{ margin: '24px 0 0', fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(60px,15vw,270px)', lineHeight: .8, letterSpacing: '-0.02em' }}>{nx.title}</h2>
      </section>
    </main>
  );
}
