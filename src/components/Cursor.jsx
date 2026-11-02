import { useEffect, useRef } from 'react';

// Custom circular cursor that shows a label when hovering any element
// carrying a `data-cursor="Label"` attribute (hover-capable devices only).
export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const t = e.target.closest && e.target.closest('[data-cursor]');
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
      if (t) {
        el.textContent = t.dataset.cursor;
        el.style.transform = 'scale(1)';
      } else {
        el.style.transform = 'scale(0)';
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed', left: 0, top: 0, zIndex: 60, width: 108, height: 108,
        margin: '-54px 0 0 -54px', borderRadius: '50%', background: '#F77F00', color: '#111110',
        display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: 12, boxSizing: 'border-box', fontFamily: "'JetBrains Mono',monospace", fontSize: 11,
        textTransform: 'uppercase', letterSpacing: '.03em', lineHeight: 1.25, pointerEvents: 'none',
        transform: 'scale(0)', transition: 'transform .35s cubic-bezier(.2,.7,.2,1)',
      }}
    />
  );
}
