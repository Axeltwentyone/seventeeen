import { useEffect, useRef, useState } from 'react';
import { TYPES, GOALS } from '../data/content.js';

export default function ContactFooter({ topGap }) {
  const [form, setForm] = useState({ name: '', type: TYPES[0], goal: GOALS[0] });

  const subject = `Projet — ${form.type}`;
  const body = `Bonjour Axel,\n\nJe m'appelle ${form.name || '…'}, je travaille sur ${form.type} et j'aimerais ${form.goal}.\n\n`;
  const mailHref = `mailto:axelteky333@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <footer
      id="contact"
      style={{ position: 'relative', zIndex: 1, background: '#111110', color: '#EDEBE6', padding: 'clamp(100px,13vw,180px) clamp(20px,4vw,56px) 28px', marginTop: topGap }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em', color: '#A7A49E' }}>
        <span>Contact — complétez la phrase</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#009E60' }} />
          Réponse sous 48 h
        </span>
      </div>

      <p style={{ margin: 'clamp(40px,6vw,72px) 0 0', maxWidth: 1300, fontSize: 'clamp(30px,4.4vw,72px)', lineHeight: 1.18, letterSpacing: '-0.035em', fontWeight: 500 }}>
        Bonjour Axel, je m'appelle{' '}
        <input
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="votre nom"
          style={{ width: '7.2em', maxWidth: '100%', background: 'transparent', border: 'none', borderBottom: '2px solid #EDEBE6', color: '#F77F00', outline: 'none', padding: 0, letterSpacing: '-0.035em', fontWeight: 500 }}
        />
        , je travaille sur{' '}
        <InlineSelect value={form.type} options={TYPES} onChange={(v) => setForm((f) => ({ ...f, type: v }))} />{' '}
        et j'aimerais{' '}
        <InlineSelect value={form.goal} options={GOALS} onChange={(v) => setForm((f) => ({ ...f, goal: v }))} />.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px 28px', marginTop: 'clamp(36px,5vw,56px)' }}>
        <a
          href={mailHref}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 14, background: '#F77F00', color: '#111110', padding: '18px 28px', minHeight: 44, boxSizing: 'border-box', fontWeight: 800, fontStretch: '75%', textTransform: 'uppercase', fontSize: 'clamp(22px,2.2vw,32px)', letterSpacing: '-0.01em' }}
        >
          Envoyer la phrase →
        </a>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#A7A49E' }}>ou directement : hello@christaxelteky.com</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginTop: 'clamp(100px,13vw,180px)', borderTop: '1px solid rgba(237,235,230,.25)', paddingTop: 20, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.04em' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px' }}>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.behance.net/" target="_blank" rel="noreferrer">Behance ↗</a>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px', color: '#A7A49E' }}>
          <span>© 2026 Christ Axel Teky — Fait main à Abidjan</span>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ color: '#EDEBE6', cursor: 'pointer' }}>Haut de page ↑</a>
        </div>
      </div>
    </footer>
  );
}

function InlineSelect({ value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  const pick = (o) => { onChange(o); setOpen(false); };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') return setOpen(false);
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) { setActive(options.indexOf(value)); return setOpen(true); }
      const d = e.key === 'ArrowDown' ? 1 : -1;
      setActive((i) => (i + d + options.length) % options.length);
    }
    if ((e.key === 'Enter' || e.key === ' ') && open) { e.preventDefault(); pick(options[active]); }
  };

  return (
    <span ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => { setActive(options.indexOf(value)); setOpen((o) => !o); }}
        onKeyDown={onKeyDown}
        style={{ background: 'transparent', border: 'none', borderBottom: '2px solid #EDEBE6', color: '#F77F00', padding: '0 .1em', fontWeight: 500, letterSpacing: '-0.035em', lineHeight: 'inherit' }}
      >
        {value}
        <span aria-hidden style={{ display: 'inline-block', fontSize: '.45em', marginLeft: '.3em', verticalAlign: 'middle', transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'none' }}>▾</span>
      </button>
      {open && (
        <ul
          role="listbox"
          style={{ position: 'absolute', top: '100%', left: 0, zIndex: 20, margin: '8px 0 0', padding: 6, listStyle: 'none', minWidth: '100%', whiteSpace: 'nowrap', background: '#1C1C1A', border: '1px solid rgba(237,235,230,.18)', boxShadow: '0 18px 40px rgba(0,0,0,.45)', fontSize: 'clamp(16px,1.4vw,20px)', letterSpacing: '-0.01em', lineHeight: 1.3 }}
        >
          {options.map((o, i) => (
            <li
              key={o}
              role="option"
              aria-selected={o === value}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => { e.preventDefault(); pick(o); }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', cursor: 'pointer', color: i === active ? '#111110' : '#EDEBE6', background: i === active ? '#F77F00' : 'transparent' }}
            >
              <span aria-hidden style={{ width: 14, opacity: o === value ? 1 : 0 }}>✓</span>
              {o}
            </li>
          ))}
        </ul>
      )}
    </span>
  );
}
