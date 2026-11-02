import Reveal from '../../components/Reveal.jsx';
import { TIAKO_STEPS } from '../../data/content.js';

export default function Tiakoli({ nav }) {
  return (
    <main data-screen-label="Monde — Tiakolisé et fière" style={{ background: '#0d0907', color: '#F4EFE8', fontFamily: "'Anton',sans-serif" }}>
      <section style={{ minHeight: '100vh', boxSizing: 'border-box', padding: '92px clamp(20px,4vw,56px) 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28, overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>
          <span>Monde 03 — Drop</span><a href="https://tiakoliseetfier.com" target="_blank" rel="noreferrer">tiakoliseetfier.com ↗</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center' }}>
          <img src="https://tiakoliseetfier.com/assets/logotiako.png" alt="Logo Tiakolisé et fière" style={{ width: 'clamp(90px,9vw,140px)', height: 'auto', display: 'block' }} />
          <h1 style={{ margin: 0, overflow: 'hidden', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(60px,13vw,250px)', lineHeight: .86 }}>Tiakolisé</h1>
          <h1 style={{ margin: 0, overflow: 'hidden', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(60px,13vw,250px)', lineHeight: .86, color: '#D7261E' }}>et fière</h1>
          <span style={{ fontSize: 'clamp(20px,2vw,30px)', textTransform: 'uppercase' }}>× Mélo Décalé</span>
        </div>
        <div style={{ margin: '0 calc(-1 * clamp(20px,4vw,56px))', background: '#D7261E', overflow: 'hidden' }}>
          <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 20s linear infinite', fontSize: 'clamp(20px,2.2vw,32px)', textTransform: 'uppercase', padding: '12px 0', whiteSpace: 'nowrap' }}>
            <span style={{ paddingRight: 32 }}>Monétisez les clips afro francophones ✦ Fait par nous, pour nous ✦ Parce que notre voix compte ✦</span>
            <span style={{ paddingRight: 32 }}>Monétisez les clips afro francophones ✦ Fait par nous, pour nous ✦ Parce que notre voix compte ✦</span>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vw,48px)' }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#D7261E' }}>01 — La pièce</span>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '1200/630', overflow: 'hidden' }}>
          <img src="https://tiakoliseetfier.com/og-image.jpg" alt="Deux personnes portent le t-shirt Warning — Mélo Décalé" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 1, background: '#3a2f29', border: '1px solid #3a2f29' }}>
          <div style={{ background: '#0d0907', padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em', color: '#A99E94' }}>Dos</span><span style={{ fontSize: 'clamp(28px,2.6vw,40px)', textTransform: 'uppercase' }}>Warning</span></div>
          <div style={{ background: '#0d0907', padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em', color: '#A99E94' }}>Face</span><span style={{ fontSize: 'clamp(28px,2.6vw,40px)', textTransform: 'uppercase' }}>Mélo Décalé</span></div>
          <div style={{ background: '#0d0907', padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em', color: '#A99E94' }}>Coloris</span><span style={{ fontSize: 'clamp(28px,2.6vw,40px)', textTransform: 'uppercase' }}>Blanc · <span style={{ color: '#D7261E' }}>Rouge</span></span></div>
          <div style={{ background: '#0d0907', padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em', color: '#A99E94' }}>Coupe</span><span style={{ fontSize: 'clamp(28px,2.6vw,40px)', textTransform: 'uppercase' }}>Oversize</span></div>
        </div>
      </section>

      <section style={{ background: '#F4EFE8', color: '#0d0907', padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 'clamp(32px,4vw,56px)' }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#D7261E' }}>02 — Le parcours d'achat</span>
        <h2 style={{ margin: 0, fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(44px,7vw,128px)', lineHeight: .88 }}>Précommander en<br />trois gestes.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: 'clamp(16px,2vw,28px)' }}>
          {TIAKO_STEPS.map((s) => (
            <Reveal key={s.n} style={{ borderTop: '4px solid #0d0907', paddingTop: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 'clamp(56px,6vw,96px)', lineHeight: .8, color: '#D7261E' }}>{s.n}</span>
              <span style={{ fontSize: 'clamp(26px,2.4vw,36px)', textTransform: 'uppercase' }}>{s.t}</span>
              <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 16, lineHeight: 1.5 }}>{s.d}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#D7261E' }}>03 — Mon rôle</span>
        <Reveal as="p" style={{ margin: 0, maxWidth: 1100, fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(34px,5vw,84px)', lineHeight: .92 }}>Une boutique de drop pensée mobile : la pièce d'abord, un panier simple, un paiement local.</Reveal>
        <a href="https://tiakoliseetfier.com" target="_blank" rel="noreferrer" style={{ alignSelf: 'flex-start', background: '#D7261E', color: '#F4EFE8', padding: '16px 26px', fontSize: 20, textTransform: 'uppercase' }}>Visiter la boutique ↗</a>
      </section>

      <section style={{ background: '#102E6A', color: '#F3F1EC', padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>
          <a href="#/" onClick={nav('/', 'works')} style={{ cursor: 'pointer' }}>← Retour à la galerie</a><span>Monde suivant</span>
        </div>
        <a href="#/projets/helloci" onClick={nav('/projets/helloci')} style={{ cursor: 'pointer', fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(60px,13vw,240px)', lineHeight: .82, color: '#F3F1EC' }}>Hello-ci →</a>
      </section>
    </main>
  );
}
