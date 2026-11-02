import { useState } from 'react';
import { TYPES, GOALS } from '../data/content.js';

export default function ContactFooter({ topGap }) {
  const [form, setForm] = useState({ name: '', type: TYPES[0], goal: GOALS[0] });

  const subject = `Projet — ${form.type}`;
  const body = `Bonjour Axel,\n\nJe m'appelle ${form.name || '…'}, je travaille sur ${form.type} et j'aimerais ${form.goal}.\n\n`;
  const mailHref = `mailto:hello@christaxelteky.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

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
        <select
          value={form.type}
          onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
          style={{ appearance: 'none', background: 'transparent', border: 'none', borderBottom: '2px solid #EDEBE6', color: '#F77F00', outline: 'none', padding: '0 .1em', cursor: 'pointer', fontWeight: 500, letterSpacing: '-0.035em', maxWidth: '100%' }}
        >
          {TYPES.map((o) => <option key={o} value={o} style={{ color: '#111110' }}>{o}</option>)}
        </select>{' '}
        et j'aimerais{' '}
        <select
          value={form.goal}
          onChange={(e) => setForm((f) => ({ ...f, goal: e.target.value }))}
          style={{ appearance: 'none', background: 'transparent', border: 'none', borderBottom: '2px solid #EDEBE6', color: '#F77F00', outline: 'none', padding: '0 .1em', cursor: 'pointer', fontWeight: 500, letterSpacing: '-0.035em', maxWidth: '100%' }}
        >
          {GOALS.map((o) => <option key={o} value={o} style={{ color: '#111110' }}>{o}</option>)}
        </select>.
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
