export default function TransitionOverlay({ state }) {
  // state: { translateY: '100%' | '0' | '-100%', bg, fg, label, duration }
  const { translateY, bg, fg, label, duration } = state;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 70, background: bg, color: fg,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '28px clamp(20px,4vw,56px)', boxSizing: 'border-box',
        transform: `translateY(${translateY})`, pointerEvents: 'none',
        transition: `transform ${duration}ms cubic-bezier(.76,0,.24,1)`,
      }}
    >
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>
        Chargement…
      </span>
      <span style={{ fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(60px,13vw,230px)', lineHeight: .8, letterSpacing: '-0.02em' }}>
        {label}
      </span>
    </div>
  );
}
