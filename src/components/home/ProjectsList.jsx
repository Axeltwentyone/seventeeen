import { useEffect, useRef, useState } from 'react';
import useFitText from '../../hooks/useFitText.js';
import { PROJECTS } from '../../data/content.js';
import elantraNight from '../../assets/images/elantra-night.jpg';
import ecranHome from '../../assets/images/ecran-home.png';

const ROWS = [
  { slug: 'shoptongba', label: '01 — Mobilité', baseSize: '15vw' },
  { slug: 'subci', label: '02 — Abonnements', baseSize: '28vw' },
  { slug: 'tiakoli', label: '03 — Streetwear', baseSize: '8.4vw' },
  { slug: 'helloci', label: '04 — Enseignes', baseSize: '18vw' },
  { slug: 'all', label: '06 — Toutes les réalisations', baseSize: '20vw' },
];

// Ghost image shown behind the "entering a world" clip-path transition.
// Subci has none in the original (its strip is color + UI only).
const SLIT_IMAGES = {
  tiakoli: 'https://tiakoliseetfier.com/og-image.jpg',
  helloci: 'https://www.hello-ci.com/assets/amani.jpg',
};

function Row({ label, baseSize, title, isOpen, anyOpen, onEnter, onLeave, onActivate, panel }) {
  const { rowRef, textRef } = useFitText([isOpen]);
  const dim = anyOpen && !isOpen;

  return (
    <>
      <div
        style={{
          display: 'flex', justifyContent: 'space-between', gap: 12, padding: '16px 0 10px',
          borderTop: '1px solid #111110', fontFamily: "'JetBrains Mono',monospace", fontSize: 12,
          textTransform: 'uppercase', letterSpacing: '.04em',
          opacity: dim ? .16 : 1, transition: 'opacity .5s',
        }}
      >
        <span>{label}</span>
        <span>{isOpen ? 'Entrer →' : ''}</span>
      </div>
      <div
        role="link" tabIndex={0} aria-label={title}
        ref={rowRef}
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
        onClick={onActivate}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onActivate(e); } }}
        style={{
          position: 'relative', cursor: 'pointer', outline: 'none', fontSize: baseSize,
          height: isOpen ? 'calc(.84em + clamp(210px,30vw,440px))' : '.84em',
          opacity: dim ? .16 : 1,
          transition: 'height .8s cubic-bezier(.7,0,.2,1), opacity .5s',
          fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', letterSpacing: '-0.02em',
          lineHeight: .84, marginBottom: '.05em',
        }}
      >
        <div ref={textRef} style={{ position: 'absolute', top: 0, left: 0, height: '.84em', whiteSpace: 'nowrap', clipPath: 'inset(-0.3em -0.1em 50% -0.1em)' }}>{title}</div>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, height: '.84em', whiteSpace: 'nowrap', clipPath: 'inset(50% -0.1em -0.1em -0.1em)' }}>{title}</div>
        <div data-strip="1" style={{ position: 'absolute', left: 0, right: 0, top: '.42em', bottom: '.42em', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, fontSize: 16, lineHeight: 1.2, letterSpacing: 0, textTransform: 'none', fontStretch: '100%', fontWeight: 400 }}>
            {panel}
          </div>
        </div>
      </div>
    </>
  );
}

export default function ProjectsList({ nav, onEnterWorld }) {
  const [open, setOpen] = useState(null);
  const [touchMode, setTouchMode] = useState(false);
  const touch = useRef(false);

  useEffect(() => {
    touch.current = window.matchMedia('(hover: none)').matches;
    setTouchMode(touch.current);
  }, []);

  const enter = (i) => { if (!touch.current) setOpen(i); };
  const leave = () => { if (!touch.current) setOpen(null); };
  const slitImages = { shoptongba: elantraNight, ...SLIT_IMAGES };
  const activate = (i, slug) => (e) => {
    if (open !== i) { setOpen(i); return; }
    if (slug === 'all') return;
    const strip = e?.currentTarget?.querySelector('[data-strip]');
    onEnterWorld?.(slug, strip, slitImages[slug]);
    nav(`/projets/${slug}`)();
  };

  const panels = {
    shoptongba: (
      <div style={{ position: 'absolute', inset: 0, background: '#0d0a09', color: '#f3ede2' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '68%', overflow: 'hidden' }}>
          <img src={elantraNight} alt="Berline de nuit — visuel Shoptongba" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,#0d0a09 30%,rgba(13,10,9,0) 75%)' }} />
        <div style={{ position: 'absolute', inset: 0, padding: 'clamp(16px,2.4vw,36px)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: 'min(560px,80%)' }}>
          <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 900, fontSize: 'clamp(22px,3.4vw,54px)', lineHeight: .9, letterSpacing: '-0.03em' }}>Et si louer un gba devenait simple ?</span>
          <span style={{ background: '#C8202B', color: '#f3ede2', padding: '8px 12px', fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: 'clamp(13px,1.2vw,16px)' }}>dès 18 000 FCFA / jour</span>
        </div>
      </div>
    ),
    subci: (
      <div style={{ position: 'absolute', inset: 0, background: '#FF5A1F', color: '#16130F' }}>
        <div style={{ position: 'absolute', inset: 0, padding: 'clamp(16px,2.4vw,36px)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: '62%' }}>
          <span style={{ fontFamily: "'Unbounded',sans-serif", fontWeight: 800, fontSize: 'clamp(20px,3vw,48px)', lineHeight: .98, letterSpacing: '-0.06em' }}>Partage.<br />Revends.<br />Paie moins.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#16130F', color: '#FFF3EC', padding: '10px 14px', fontFamily: "'Unbounded',sans-serif", fontWeight: 700, fontSize: 'clamp(11px,1vw,14px)' }}>
            4 places
            <span style={{ display: 'flex', gap: 4 }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5A1F' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5A1F' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid #FF5A1F', boxSizing: 'border-box' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid #FF5A1F', boxSizing: 'border-box' }} />
            </span>
          </div>
        </div>
        <div style={{ position: 'absolute', right: 'clamp(16px,6vw,120px)', top: '12%', width: 'clamp(96px,14vw,220px)', aspectRatio: '390/844', background: '#16130F', border: '6px solid #16130F', borderRadius: 26, overflow: 'hidden', boxShadow: '0 24px 50px rgba(22,19,15,.35)' }}>
          <img src={ecranHome} alt="Écran d'accueil de l'app Subci" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
        </div>
      </div>
    ),
    tiakoli: (
      <div style={{ position: 'absolute', inset: 0, background: '#0d0907', color: '#F4EFE8' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '66%', overflow: 'hidden' }}>
          <img src="https://tiakoliseetfier.com/og-image.jpg" alt="T-shirt Mélo Décalé porté" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,#0d0907 30%,rgba(13,9,7,0) 72%)' }} />
        <div style={{ position: 'absolute', inset: 0, padding: 'clamp(16px,2.4vw,36px)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: 'min(520px,78%)' }}>
          <span style={{ fontFamily: "'Anton',sans-serif", textTransform: 'uppercase', fontSize: 'clamp(24px,3.6vw,58px)', lineHeight: .92 }}>Fait par nous,<br />pour nous.</span>
          <span style={{ fontFamily: "'Anton',sans-serif", textTransform: 'uppercase', fontSize: 'clamp(16px,1.6vw,24px)', color: '#F4EFE8', background: '#D7261E', padding: '6px 12px' }}>× Mélo Décalé — série limitée</span>
        </div>
      </div>
    ),
    helloci: (
      <div style={{ position: 'absolute', inset: 0, background: '#102E6A', color: '#F3F1EC' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '62%', display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 4 }}>
          <div style={{ position: 'relative', overflow: 'hidden' }}><img src="https://www.hello-ci.com/assets/amani.jpg" alt="Enseigne Amani Comfort" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
          <div style={{ position: 'relative', overflow: 'hidden' }}><img src="https://www.hello-ci.com/assets/wolf.jpg" alt="Enseigne Wolf Gaming Lounge" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
          <div style={{ position: 'relative', overflow: 'hidden' }}><img src="https://www.hello-ci.com/assets/villa.jpg" alt="Enseigne Villa Barbecue Paradise" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
        </div>
        <div style={{ position: 'absolute', inset: 0, padding: 'clamp(16px,2.4vw,36px)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: '46%' }}>
          <span style={{ fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(26px,3.8vw,62px)', lineHeight: .86 }}>
            Faites grande <span style={{ color: '#FFB648', textShadow: '0 0 22px rgba(255,182,72,.6)' }}>impression.</span>
          </span>
          <span style={{ fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(14px,1.3vw,18px)', letterSpacing: '.04em' }}>Façades · Enseignes · Totems · Stands</span>
        </div>
      </div>
    ),
    all: (
      <div style={{ position: 'absolute', inset: 0, background: '#111110', color: '#EDEBE6', padding: 'clamp(16px,2.4vw,36px)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'auto' }}>
        {PROJECTS.map((w) => (
          <a key={w.slug} href={`#/projets/${w.slug}`} onClick={nav(`/projets/${w.slug}`)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, padding: 'clamp(6px,.8vw,12px) 0', borderBottom: '1px solid #3A3936', color: '#EDEBE6' }}>
            <span style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(10px,2vw,28px)' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#A7A49E' }}>{w.n}</span>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(20px,2.6vw,40px)', lineHeight: 1 }}>{w.title}</span>
            </span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em', color: '#A7A49E', textAlign: 'right' }}>{w.type}</span>
          </a>
        ))}
      </div>
    ),
  };

  const titles = { shoptongba: 'Shoptongba', subci: 'Subci', tiakoli: 'Tiakolisé et fière', helloci: 'Hello-ci', all: 'Tout voir' };

  return (
    <section
      id="works"
      data-screen-label="Accueil — Projets"
      onMouseLeave={leave}
      style={{ padding: 'clamp(100px,12vw,180px) clamp(20px,4vw,56px) clamp(60px,8vw,120px)', fontFamily: "'Archivo',sans-serif" }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12, paddingBottom: 'clamp(28px,4vw,56px)', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#5F5C57' }}>
        <span>Projets</span>
        <span>{touchMode ? 'Touchez un nom pour l’ouvrir' : 'Survolez un nom pour l’ouvrir'}</span>
      </div>

      {ROWS.map((r, i) => (
        <Row
          key={r.slug}
          label={r.label}
          baseSize={r.baseSize}
          title={titles[r.slug]}
          isOpen={open === i}
          anyOpen={open !== null}
          onEnter={() => enter(i)}
          onLeave={leave}
          onActivate={activate(i, r.slug)}
          panel={panels[r.slug]}
        />
      ))}
    </section>
  );
}
