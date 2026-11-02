import { useState } from 'react';
import Reveal from '../../components/Reveal.jsx';
import ecranCatalogue from '../../assets/images/ecran-catalogue.png';
import ecranGroupe from '../../assets/images/ecran-groupe.png';
import ecranCheckout from '../../assets/images/ecran-checkout.png';

const SEAT_NAMES = ['Propriétaire', 'Place 2', 'Place 3', 'Place 4'];

export default function Subci({ nav }) {
  const [taken, setTaken] = useState(2);
  const seats = SEAT_NAMES.map((k, i) => {
    const on = i < taken;
    return { k, label: on ? (i === 0 ? 'Abonné' : 'Partagée') : 'Libre', bg: on ? '#16130F' : 'transparent', fg: on ? '#FF5A1F' : '#16130F' };
  });

  return (
    <main data-screen-label="Monde — Subci" style={{ background: '#FF5A1F', color: '#16130F', fontFamily: "'Unbounded',sans-serif" }}>
      <section style={{ minHeight: '100vh', boxSizing: 'border-box', padding: '92px clamp(20px,4vw,56px) 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32, overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>
          <span>Monde 02 — Subci</span><a href="https://subci-lovat.vercel.app/welcome" target="_blank" rel="noreferrer">Voir le site ↗</a>
        </div>
        <h1 style={{ margin: 0, overflow: 'hidden', fontWeight: 800, fontSize: 'clamp(100px,27vw,500px)', lineHeight: .8, letterSpacing: '-0.09em', textAlign: 'center' }}>SUBCI</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <p style={{ margin: 0, maxWidth: 560, fontWeight: 700, fontSize: 'clamp(22px,2.4vw,36px)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>La marketplace des abonnements numériques. On partage, on revend, on paie moins.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(130px,200px))', gap: '14px 28px', fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 15 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em' }}>Type</span>Marketplace web</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em' }}>Rôle</span>Conception &amp; développement</div>
          </div>
        </div>
      </section>

      <section style={{ background: '#16130F', color: '#FFF3EC', padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#FF5A1F' }}>01 — Le constat</span>
        <Reveal as="p" style={{ margin: 0, maxWidth: 1200, fontWeight: 700, fontSize: 'clamp(34px,5.4vw,92px)', lineHeight: .98, letterSpacing: '-0.05em' }}>Des abonnements partout. <span style={{ color: '#FF5A1F' }}>Des places vides partout.</span></Reveal>
        <Reveal as="p" style={{ margin: 0, maxWidth: 620, fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 18, lineHeight: 1.55, color: '#CFC6BD' }}>Streaming, musique, outils : les abonnements s'accumulent, les places restent inutilisées et les échanges entre particuliers se font sans cadre ni confiance.</Reveal>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px)', display: 'flex', flexWrap: 'wrap', gap: '48px clamp(24px,5vw,80px)', alignItems: 'center' }}>
        <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>02 — La mécanique</span>
          <h2 style={{ margin: 0, fontWeight: 800, fontSize: 'clamp(36px,5vw,84px)', lineHeight: .92, letterSpacing: '-0.06em' }}>1 abonnement.<br />{taken} / 4 places partagées.</h2>
          <p style={{ margin: 0, maxWidth: 440, fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 17, lineHeight: 1.5 }}>Le propriétaire ouvre ses places, les membres les rejoignent, le coût se partage. Essayez.</p>
          <button
            onClick={() => setTaken((t) => (t < 4 ? t + 1 : 1))}
            style={{ alignSelf: 'flex-start', appearance: 'none', border: 'none', background: '#16130F', color: '#FF5A1F', padding: '16px 24px', minHeight: 44, fontFamily: "'Unbounded',sans-serif", fontWeight: 700, fontSize: 15 }}
          >
            {taken < 4 ? 'Remplir une place +' : 'Recommencer ↺'}
          </button>
        </div>
        <div style={{ flex: '1 1 380px', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 14, maxWidth: 520 }}>
          {seats.map((s, i) => (
            <div key={i} style={{ aspectRatio: '1/1', background: s.bg, color: s.fg, border: '3px solid #16130F', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 16, transition: 'background .4s,color .4s' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em' }}>{s.k}</span>
              <span style={{ fontWeight: 800, fontSize: 'clamp(18px,2vw,26px)', letterSpacing: '-0.04em' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#FFF3EC', padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 'clamp(32px,4vw,56px)' }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>03 — L'application</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(16px,2vw,32px)', alignItems: 'flex-start' }}>
          <Reveal style={{ flex: '0 1 260px', position: 'relative', aspectRatio: '390/844', background: '#16130F', border: '8px solid #16130F', borderRadius: 34, overflow: 'hidden' }}>
            <img src={ecranCatalogue} alt="Catalogue des abonnements Subci" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </Reveal>
          <Reveal delay={120} style={{ flex: '0 1 240px', position: 'relative', aspectRatio: '390/844', background: '#16130F', border: '8px solid #16130F', borderRadius: 34, overflow: 'hidden', marginTop: 'clamp(0px,6vw,100px)' }}>
            <img src={ecranGroupe} alt="Groupe de partage Subci" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </Reveal>
          <Reveal delay={240} style={{ flex: '0 1 240px', position: 'relative', aspectRatio: '390/844', background: '#16130F', border: '8px solid #16130F', borderRadius: 34, overflow: 'hidden' }}>
            <img src={ecranCheckout} alt="Paiement Subci" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </Reveal>
        </div>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>04 — Mon rôle</span>
        <Reveal as="p" style={{ margin: 0, maxWidth: 1100, fontWeight: 700, fontSize: 'clamp(28px,3.6vw,60px)', lineHeight: 1, letterSpacing: '-0.05em' }}>Concept, parcours d'achat et de vente, interfaces et développement de la plateforme.</Reveal>
        <a href="https://subci-lovat.vercel.app/welcome" target="_blank" rel="noreferrer" style={{ alignSelf: 'flex-start', background: '#16130F', color: '#FF5A1F', padding: '16px 26px', fontWeight: 700, fontSize: 15 }}>Visiter Subci ↗</a>
      </section>

      <section style={{ background: '#0d0907', color: '#F4EFE8', padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>
          <a href="#/" onClick={nav('/', 'works')} style={{ cursor: 'pointer' }}>← Retour à la galerie</a><span>Monde suivant</span>
        </div>
        <a href="#/projets/tiakoli" onClick={nav('/projets/tiakoli')} style={{ cursor: 'pointer', fontFamily: "'Anton',sans-serif", textTransform: 'uppercase', fontSize: 'clamp(52px,10vw,190px)', lineHeight: .82, color: '#F4EFE8' }}>Tiakolisé et fière →</a>
      </section>
    </main>
  );
}
