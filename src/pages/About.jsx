import Reveal from '../components/Reveal.jsx';
import { FICHE, PRINCIPLES, SKILLS, EXPERIENCE } from '../data/content.js';

export default function About({ nav }) {
  return (
    <main data-screen-label="À propos">
      <section style={{ minHeight: '90vh', boxSizing: 'border-box', padding: '92px clamp(20px,4vw,56px) 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 40 }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>À propos — Abidjan, Côte d'Ivoire</span>
        <h1 style={{ margin: 0, fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(60px,14.5vw,260px)', lineHeight: .8, letterSpacing: '-0.02em' }}>
          <div style={{ overflow: 'hidden', paddingBottom: '.03em' }}><Reveal mode="up" delay={60}>Penser,</Reveal></div>
          <div style={{ overflow: 'hidden', paddingBottom: '.03em', textAlign: 'right' }}><Reveal mode="up" delay={160}>dessiner,</Reveal></div>
          <div style={{ overflow: 'hidden', paddingBottom: '.03em' }}><Reveal mode="up" delay={260}>construire<span style={{ color: '#F77F00' }}>.</span></Reveal></div>
        </h1>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,180px) clamp(20px,4vw,56px) 0', display: 'flex', flexWrap: 'wrap', gap: '40px clamp(24px,5vw,80px)', alignItems: 'flex-start' }}>
        <Reveal style={{ flex: '1 1 300px', maxWidth: 460, position: 'relative', aspectRatio: '4/5', background: '#DAD6CE', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#8E897F', textTransform: 'uppercase', letterSpacing: '.04em' }}>
          Portrait — Christ Axel Teky
        </Reveal>
        <div style={{ flex: '1 1 420px', maxWidth: 720, display: 'flex', flexDirection: 'column', gap: 28 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§01 Mon histoire</span>
          <Reveal as="p" style={{ margin: 0, fontSize: 'clamp(26px,2.8vw,42px)', lineHeight: 1.06, letterSpacing: '-0.03em', fontWeight: 500 }}>
            Je suis un jeune créatif digital basé à Abidjan, passionné par la technologie, le design et la création de produits.
          </Reveal>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, color: '#3B3936' }}>
            Je ne sépare pas le code, le design et le produit : je les fais dialoguer. Mon rôle est de transformer une idée en une expérience concrète — de la première réflexion jusqu'à la mise en ligne.
          </p>
          <div style={{ borderTop: '1px solid #111110' }}>
            {FICHE.map((f) => (
              <div key={f.k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, borderBottom: '1px solid rgba(17,17,16,.16)', padding: '10px 0', fontSize: 15 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>{f.k}</span>
                <span style={{ textAlign: 'right' }}>{f.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(120px,16vw,220px) clamp(20px,4vw,56px) 0' }}>
        <span style={{ display: 'block', paddingBottom: 20, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§02 Philosophie de travail</span>
        {PRINCIPLES.map((p) => (
          <Reveal key={p.n} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '12px clamp(24px,5vw,80px)', borderTop: '1px solid #111110', padding: 'clamp(22px,3vw,36px) 0' }}>
            <span style={{ flex: '0 0 220px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#5F5C57' }}>{p.n}</span>
            <h3 style={{ flex: '1 1 380px', margin: 0, fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(36px,5vw,84px)', lineHeight: .88, letterSpacing: '-0.01em' }}>{p.t}</h3>
            <p style={{ flex: '1 1 260px', maxWidth: 340, margin: 0, fontSize: 16, lineHeight: 1.45, color: '#3B3936' }}>{p.d}</p>
          </Reveal>
        ))}
      </section>

      <section style={{ padding: 'clamp(120px,16vw,220px) clamp(20px,4vw,56px) 0' }}>
        <span style={{ display: 'block', paddingBottom: 20, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§03 Compétences</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '40px clamp(24px,3vw,48px)' }}>
          {SKILLS.map((k) => (
            <Reveal key={k.t} style={{ borderTop: '3px solid #111110', paddingTop: 18, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h3 style={{ margin: 0, fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(40px,4vw,64px)', lineHeight: .88 }}>{k.t}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 18, lineHeight: 1.35 }}>
                {k.items.map((it) => <span key={it}>{it}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(120px,16vw,220px) clamp(20px,4vw,56px) 0' }}>
        <span style={{ display: 'block', paddingBottom: 20, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§04 Parcours</span>
        {EXPERIENCE.map((e, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '6px 24px', borderTop: '1px solid #111110', padding: '22px 0', fontSize: 18, alignItems: 'baseline' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>{e.period}</span>
            <span style={{ fontWeight: 600 }}>{e.org}</span>
            <span>{e.role}</span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>{e.kind}</span>
          </div>
        ))}
        <div style={{ borderTop: '1px solid #111110' }} />
      </section>

      <section style={{ padding: 'clamp(120px,16vw,220px) clamp(20px,4vw,56px) 0', display: 'flex', flexWrap: 'wrap', gap: '16px clamp(24px,5vw,80px)' }}>
        <span style={{ flex: '0 0 220px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>§05 Vision</span>
        <Reveal as="p" style={{ flex: '1 1 420px', margin: 0, maxWidth: 1100, fontSize: 'clamp(34px,4.6vw,76px)', lineHeight: .98, letterSpacing: '-0.04em', fontWeight: 500 }}>
          Un bon produit digital ne se remarque pas par ce qu'il montre, mais par la facilité avec laquelle il <span style={{ color: '#B85A00' }}>fonctionne</span>.
        </Reveal>
      </section>

      <section
        data-cursor="Entrer au studio"
        onClick={nav('/projets/thelab')}
        style={{ cursor: 'pointer', marginTop: 'clamp(120px,16vw,220px)', background: '#111110', color: '#EDEBE6', padding: 'clamp(56px,8vw,120px) clamp(20px,4vw,56px)' }}
      >
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#A7A49E' }}>§06 Le studio</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, marginTop: 'clamp(32px,5vw,64px)' }}>
          <h2 style={{ margin: 0, fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(72px,17vw,300px)', lineHeight: .78, letterSpacing: '-0.02em' }}>Thelab<span style={{ color: '#F77F00' }}>.</span></h2>
          <div style={{ maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5 }}>J'ai fondé THELAB, un studio indépendant de conception et de développement de solutions digitales — pour accompagner idées, marques et entreprises de la stratégie au produit livré.</p>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>Voir l'étude de cas →</span>
          </div>
        </div>
      </section>
    </main>
  );
}
