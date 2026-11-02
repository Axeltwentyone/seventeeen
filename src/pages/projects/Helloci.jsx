import { useState } from 'react';
import { HELLO_SERVICES, HELLO_CHOICES } from '../../data/content.js';

export default function Helloci({ nav }) {
  const [pick, setPick] = useState(0);
  const msg = HELLO_CHOICES[pick].charAt(0).toLowerCase() + HELLO_CHOICES[pick].slice(1);

  return (
    <main data-screen-label="Monde — Hello-ci" style={{ background: '#102E6A', color: '#F3F1EC', fontFamily: "'Big Shoulders Display',sans-serif" }}>
      <section style={{ minHeight: '100vh', boxSizing: 'border-box', padding: '92px clamp(20px,4vw,56px) 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 32 }}>
        <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>Monde 04 — Hello-ci</span>
          <h1 style={{ margin: 0, fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(60px,10vw,190px)', lineHeight: .82 }}>
            <div style={{ overflow: 'hidden' }}>Faites</div>
            <div style={{ overflow: 'hidden' }}>grande</div>
            <div style={{ overflow: 'hidden', color: '#FFB648', textShadow: '0 0 28px rgba(255,182,72,.55)' }}>impression.</div>
          </h1>
          <p style={{ margin: 0, maxWidth: 440, fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 17, lineHeight: 1.5, color: '#C9CEDB' }}>Le site d'une fabrique d'identités visibles en Côte d'Ivoire : façades en Alucobond, enseignes lumineuses, totems, branding et stands.</p>
        </div>
        <div style={{ flex: '1 1 360px', position: 'relative', height: 'clamp(360px,72vh,820px)', overflow: 'hidden' }}>
          <img src="https://www.hello-ci.com/assets/amani.jpg" alt="Enseigne Amani Comfort en lettres rétroéclairées" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 'clamp(32px,4vw,56px)' }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>01 — Matières. Volumes. Lumière.</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: 'clamp(10px,1.4vw,20px)', alignItems: 'start' }}>
          <img src="https://www.hello-ci.com/assets/wolf.jpg" alt="Wolf Gaming Lounge — identité en volume" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }} />
          <img src="https://www.hello-ci.com/assets/villa.jpg" alt="Villa Barbecue Paradise — finition cuivrée" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block', marginTop: 'clamp(0px,6vw,100px)' }} />
          <img src="https://www.hello-ci.com/assets/abok.jpg" alt="Façade et habillage" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>

      <section style={{ background: '#F3F1EC', color: '#102E6A', padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px)' }}>
        <span style={{ display: 'block', paddingBottom: 24, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>02 — Cinq savoir-faire, une seule page</span>
        {HELLO_SERVICES.map((s) => (
          <div key={s.n} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '8px clamp(24px,4vw,64px)', borderTop: '2px solid #102E6A', padding: 'clamp(16px,2vw,26px) 0' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', flex: '0 0 60px' }}>{s.n}</span>
            <span style={{ flex: '1 1 320px', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(34px,4.6vw,76px)', lineHeight: .88 }}>{s.t}</span>
            <span style={{ flex: '0 1 300px', fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 15, lineHeight: 1.45 }}>{s.d}</span>
          </div>
        ))}
      </section>

      <section style={{ padding: 'clamp(100px,13vw,200px) clamp(20px,4vw,56px)', display: 'flex', flexWrap: 'wrap', gap: '40px clamp(24px,5vw,80px)', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>03 — Du clic au brief</span>
          <h2 style={{ margin: 0, fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(40px,6vw,104px)', lineHeight: .86 }}>Choisissez votre envie.<br /><span style={{ color: '#FFB648' }}>WhatsApp fait le reste.</span></h2>
          <p style={{ margin: 0, maxWidth: 460, fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 17, lineHeight: 1.5, color: '#C9CEDB' }}>Le visiteur choisit son besoin, remplit deux champs, et son message arrive préparé dans WhatsApp. Aucun envoi automatique.</p>
        </div>
        <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 520 }}>
          {HELLO_CHOICES.map((t, k) => (
            <button
              key={t}
              onClick={() => setPick(k)}
              style={{ appearance: 'none', textAlign: 'left', minHeight: 56, padding: '0 20px', border: '2px solid #F3F1EC', background: pick === k ? '#F3F1EC' : 'transparent', color: pick === k ? '#102E6A' : '#F3F1EC', fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(20px,1.8vw,26px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background .3s,color .3s' }}
            >
              {t}<span>↗</span>
            </button>
          ))}
          <div style={{ marginTop: 8, background: '#0B1F4A', padding: '16px 18px', fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 15, lineHeight: 1.5, borderLeft: '4px solid #25D366' }}>
            « Bonjour Hello-ci, je souhaite {msg}. »
          </div>
        </div>
      </section>

      <section style={{ padding: '0 clamp(20px,4vw,56px) clamp(80px,10vw,140px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>04 — Mon rôle</span>
        <p style={{ margin: 0, maxWidth: 1100, fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(34px,5vw,84px)', lineHeight: .9 }}>Direction visuelle, expérience et développement du site — de la vitrine au brief WhatsApp.</p>
        <a href="https://www.hello-ci.com/" target="_blank" rel="noreferrer" style={{ alignSelf: 'flex-start', background: '#FFB648', color: '#102E6A', padding: '16px 26px', fontWeight: 900, fontSize: 20, textTransform: 'uppercase' }}>Visiter hello-ci.com ↗</a>
      </section>

      <section style={{ background: '#0d0a09', color: '#f3ede2', padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>
          <a href="#/" onClick={nav('/', 'works')} style={{ cursor: 'pointer' }}>← Retour à la galerie</a><span>Monde suivant</span>
        </div>
        <a href="#/projets/shoptongba" onClick={nav('/projets/shoptongba')} style={{ cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: 'clamp(52px,11vw,200px)', letterSpacing: '-0.04em', lineHeight: .82, color: '#FFFFFF' }}>shoptongba →</a>
      </section>
    </main>
  );
}
