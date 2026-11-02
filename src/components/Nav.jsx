export default function Nav({ route, nav }) {
  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'nowrap', gap: 16, padding: '18px clamp(20px,4vw,56px)',
        mixBlendMode: 'difference', color: '#EDEBE6',
      }}
    >
      <a
        href="#/"
        onClick={nav('/')}
        style={{ display: 'flex', alignItems: 'baseline', gap: 8, cursor: 'pointer', flex: '1 1 auto', minWidth: 0, overflow: 'hidden', whiteSpace: 'nowrap' }}
      >
        <span style={{ fontWeight: 800, fontStretch: '75%', fontSize: 20, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>C.A.T.</span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.04em' }}>Christ Axel Teky</span>
      </a>
      <div style={{ display: 'flex', flex: 'none', gap: 'clamp(10px,2.4vw,32px)', fontFamily: "'JetBrains Mono',monospace", fontSize: 'clamp(11px,1vw,12px)', textTransform: 'uppercase', letterSpacing: '.04em' }}>
        <a href="#/" onClick={nav('/')} style={{ opacity: route.page === 'home' ? 1 : .55, cursor: 'pointer' }}>Accueil</a>
        <a href="#/" onClick={nav('/', 'works')} style={{ opacity: route.page === 'project' ? 1 : .55, cursor: 'pointer' }}>Projets</a>
        <a href="#/a-propos" onClick={nav('/a-propos')} style={{ opacity: route.page === 'about' ? 1 : .55, cursor: 'pointer' }}>À propos</a>
        <a href="#/" onClick={nav(route.hash || '/', 'contact')} style={{ opacity: .55, cursor: 'pointer' }}>Contact</a>
      </div>
    </nav>
  );
}
