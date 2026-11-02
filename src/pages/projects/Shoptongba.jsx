import Reveal from '../../components/Reveal.jsx';
import { CARS, SHOP_STEPS, SHOP_ROLES } from '../../data/content.js';

export default function Shoptongba({ nav }) {
  return (
    <main data-screen-label="Monde — Shoptongba" style={{ background: '#0d0a09', color: '#f3ede2', fontFamily: "'Bricolage Grotesque',sans-serif" }}>
      <section style={{ position: 'relative', minHeight: '100vh', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '92px clamp(20px,4vw,56px) 40px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}><img src="https://shoptongba.ci/images/photos/vision.jpg" alt="Le Plateau, Abidjan, de nuit" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(13,10,9,.35) 0%,rgba(13,10,9,.55) 50%,#0d0a09 100%)' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#C8202B' }}>Acte 01 — Introduction</span>
          <h1 style={{ margin: 0, overflow: 'hidden', fontWeight: 900, fontSize: 'clamp(48px,10vw,220px)', lineHeight: .84, letterSpacing: '-0.04em', paddingRight: '.08em' }}>shoptongba<span style={{ color: '#C8202B' }}>.</span></h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <p style={{ margin: 0, maxWidth: 560, fontSize: 'clamp(22px,2.4vw,36px)', lineHeight: 1.1, fontWeight: 700 }}>Et si louer un gba devenait simple ?</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(130px,200px))', gap: '14px 28px', fontSize: 14 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em', opacity: .65 }}>Type</span>Plateforme de location</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em', opacity: .65 }}>Rôle</span>UI/UX · Front · Back · Mobile</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em', opacity: .65 }}>Statut</span>Waitlist ouverte</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em', opacity: .65 }}>Site</span><a href="https://shoptongba.ci" target="_blank" rel="noreferrer" style={{ color: '#C8202B' }}>shoptongba.ci ↗</a></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px)', display: 'flex', flexWrap: 'wrap', gap: '48px clamp(24px,5vw,80px)' }}>
        <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: 28 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#C8202B' }}>Acte 02 — Le problème</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 'clamp(26px,3.2vw,48px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            <Reveal as="span">Tu cherches une voiture.</Reveal>
            <Reveal as="span" delay={120}>Tu appelles une agence.</Reveal>
            <Reveal as="span" delay={240}>Tu demandes les disponibilités.</Reveal>
            <Reveal as="span" delay={360}>Tu compares les prix.</Reveal>
            <Reveal as="span" delay={480} style={{ fontWeight: 900, color: '#C8202B' }}>Tu attends.</Reveal>
          </div>
          <Reveal as="p" style={{ margin: 0, maxWidth: 520, fontSize: 18, lineHeight: 1.5, color: '#BDBDBD' }}>Trop d'agences. Trop de messages. Trop d'incertitude. Avant d'écrire une ligne de code, il fallait cartographier ce chaos.</Reveal>
        </div>
        <div style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, maxWidth: 460 }}>
          <Reveal as="span" style={{ alignSelf: 'flex-start', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em', color: '#C8202B' }}>● Appel manqué · Agence Plateau</Reveal>
          <Reveal as="span" delay={100} style={{ alignSelf: 'flex-end', background: '#FFFFFF', color: '#0d0a09', padding: '12px 16px', borderRadius: '18px 18px 4px 18px' }}>Bonjour, le RAV4 est dispo ce week-end ?</Reveal>
          <Reveal as="span" delay={200} style={{ alignSelf: 'flex-start', background: '#222', padding: '12px 16px', borderRadius: '18px 18px 18px 4px' }}>Désolé, déjà loué.</Reveal>
          <Reveal as="span" delay={300} style={{ alignSelf: 'flex-end', background: '#FFFFFF', color: '#0d0a09', padding: '12px 16px', borderRadius: '18px 18px 4px 18px' }}>38 000 FCFA / j ?</Reveal>
          <Reveal as="span" delay={400} style={{ alignSelf: 'flex-start', background: '#222', padding: '12px 16px', borderRadius: '18px 18px 18px 4px' }}>Rappelez demain matin.</Reveal>
          <Reveal as="span" delay={500} style={{ alignSelf: 'flex-start', background: '#C8202B', padding: '8px 14px', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em' }}>Non disponible</Reveal>
          <Reveal delay={300} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12 }}>
            <img src="https://shoptongba.ci/images/photos/chaos-1.jpg" alt="Abidjan — taxi compteur" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', filter: 'grayscale(1)' }} />
            <img src="https://shoptongba.ci/images/photos/chaos-2.jpg" alt="Boulevards d'Abidjan" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', filter: 'grayscale(1)' }} />
          </Reveal>
        </div>
      </section>

      <section style={{ padding: 'clamp(80px,10vw,160px) 0', background: '#FFFFFF', color: '#0d0a09' }}>
        <div style={{ padding: '0 clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#C8202B' }}>Acte 03 — L'expérience</span>
          <h2 style={{ margin: 0, fontWeight: 900, fontSize: 'clamp(40px,7.5vw,140px)', lineHeight: .86, letterSpacing: '-0.035em' }}>Trouve. Compare.<br />Choisis. <span style={{ color: '#C8202B' }}>Réserve.</span></h2>
        </div>
        <div style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory', padding: 'clamp(32px,4vw,56px) clamp(20px,4vw,56px) 12px' }}>
          {CARS.map((c) => (
            <Reveal key={c.name} style={{ flex: '0 0 clamp(250px,26vw,360px)', scrollSnapAlign: 'start', border: '2px solid #0d0a09', display: 'flex', flexDirection: 'column' }}>
              <img src={c.img} alt={c.name} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block', borderBottom: '2px solid #0B0B0B' }} />
              <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.02em' }}>{c.name}</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em', color: '#555' }}>{c.ag} · {c.st}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                  <span style={{ fontWeight: 800, fontStyle: 'italic' }}>{c.price}</span>
                  <span style={{ background: '#C8202B', color: '#FFFFFF', padding: '8px 14px', fontWeight: 700, fontSize: 13 }}>Réserver</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,4vw,56px) 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: 'clamp(24px,3vw,48px)' }}>
          {SHOP_STEPS.map((s) => (
            <Reveal key={s.n} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ position: 'relative', width: 'min(100%,280px)', aspectRatio: '9/18', border: '10px solid #0d0a09', borderRadius: 36, overflow: 'hidden', background: '#EEE' }}>
                <img src={s.img} alt={s.t} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#C8202B' }}>{s.n}</span>
              <span style={{ fontWeight: 900, fontSize: 'clamp(24px,2.2vw,32px)', letterSpacing: '-0.02em' }}>{s.t}</span>
              <span style={{ fontSize: 16, lineHeight: 1.45, color: '#333' }}>{s.d}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 'clamp(32px,4vw,56px)' }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#C8202B' }}>Acte 04 — Le process</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 0 }}>
          {SHOP_ROLES.map((r) => (
            <Reveal key={r.t} style={{ borderTop: '3px solid #C8202B', padding: '20px 24px 32px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontWeight: 900, fontSize: 'clamp(28px,2.8vw,42px)', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>{r.t}</span>
              <span style={{ fontSize: 16, lineHeight: 1.5, color: '#BDBDBD' }}>{r.d}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 clamp(20px,4vw,56px) clamp(80px,10vw,140px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#C8202B' }}>Acte 05 — Le résultat</span>
        <Reveal as="p" style={{ margin: 0, maxWidth: 1100, fontWeight: 900, fontSize: 'clamp(34px,5.4vw,96px)', lineHeight: .9, letterSpacing: '-0.03em' }}>Le futur de la location automobile commence <span style={{ color: '#C8202B' }}>ici.</span></Reveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <a href="https://shoptongba.ci" target="_blank" rel="noreferrer" style={{ background: '#C8202B', color: '#FFFFFF', padding: '16px 26px', fontWeight: 800, fontSize: 16 }}>Visiter shoptongba.ci ↗</a>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#BDBDBD' }}>Bientôt en Côte d'Ivoire — waitlist ouverte</span>
        </div>
        <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 12, color: '#8A8A8A', maxWidth: 900, lineHeight: 1.5 }}>Photos via shoptongba.ci / Wikimedia Commons : Vauxford, Alexander Migl, TTTNIS, Dinkun Chen, Pierrekonan, ArnoBOUJIKA, abdallahh (CC BY-SA 4.0, CC0, CC BY 2.0).</span>
      </section>

      <section style={{ background: '#FF5A1F', color: '#16130F', padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>
          <a href="#/" onClick={nav('/', 'works')} style={{ cursor: 'pointer' }}>← Retour à la galerie</a><span>Monde suivant</span>
        </div>
        <a href="#/projets/subci" onClick={nav('/projets/subci')} style={{ cursor: 'pointer', fontFamily: "'Unbounded',sans-serif", fontWeight: 800, fontSize: 'clamp(56px,12vw,220px)', letterSpacing: '-0.08em', lineHeight: .82, color: '#16130F' }}>SUBCI →</a>
      </section>
    </main>
  );
}
