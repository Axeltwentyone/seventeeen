import { useCallback, useEffect, useRef, useState } from 'react';
import Nav from './components/Nav.jsx';
import Cursor from './components/Cursor.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import TransitionOverlay from './components/TransitionOverlay.jsx';
import ContactFooter from './components/ContactFooter.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Shoptongba from './pages/projects/Shoptongba.jsx';
import Subci from './pages/projects/Subci.jsx';
import Tiakoli from './pages/projects/Tiakoli.jsx';
import Helloci from './pages/projects/Helloci.jsx';
import GenericProject from './pages/projects/GenericProject.jsx';
import { PROJECTS, WORLDS } from './data/content.js';

function parse() {
  const h = (location.hash || '').replace(/^#\/?/, '');
  if (h.startsWith('projets/')) {
    const slug = h.split('/')[1];
    if (PROJECTS.find((p) => p.slug === slug)) return { page: 'project', slug, hash: h };
  }
  if (h === 'a-propos') return { page: 'about', hash: h };
  return { page: 'home', hash: h };
}

const HIDDEN = { translateY: '100%', bg: '#F77F00', fg: '#111110', label: '', duration: 0 };

export default function App() {
  const [route, setRoute] = useState(parse());
  const [overlay, setOverlay] = useState(HIDDEN);
  const pendingAnchor = useRef(null);
  const animLock = useRef(false);
  const pendingSlit = useRef(null);

  // Called by the home project rows right before navigating, so the
  // transition can grow out of the exact strip the user clicked instead of
  // using the generic color-slide overlay.
  const onEnterWorld = useCallback((slug, stripEl, img) => {
    pendingSlit.current = { slug, stripEl, img };
  }, []);

  const finish = useCallback(() => {
    const anchor = pendingAnchor.current;
    pendingAnchor.current = null;
    requestAnimationFrame(() => {
      if (anchor) {
        const el = document.getElementById(anchor);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'auto' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    });
  }, []);

  const transition = useCallback(async (target) => {
    if (animLock.current) return;
    animLock.current = true;

    const sf = pendingSlit.current;
    pendingSlit.current = null;

    // "Entering a world" from the home project list: grow a colored panel
    // out of the exact strip the user had open, instead of the generic
    // slide-up overlay. Mirrors the original Claude Design transition.
    if (sf && target.page === 'project' && sf.slug === target.slug && sf.stripEl && sf.stripEl.isConnected && !document.hidden) {
      const wd = WORLDS.find((w) => w.slug === target.slug) || { bg: '#111110' };
      const r = sf.stripEl.getBoundingClientRect();
      const W = window.innerWidth;
      const H = window.innerHeight;
      const from = `inset(${Math.max(0, r.top)}px ${Math.max(0, W - r.right)}px ${Math.max(0, H - r.bottom)}px ${Math.max(0, r.left)}px)`;

      const ov = document.createElement('div');
      ov.style.cssText = `position:fixed;inset:0;z-index:90;pointer-events:none;background:${wd.bg};clip-path:${from}`;
      if (sf.img) {
        const im = document.createElement('img');
        im.src = sf.img;
        im.alt = '';
        im.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.45';
        ov.appendChild(im);
      }
      document.body.appendChild(ov);

      const wait = (anim, d) => Promise.race([anim.finished.catch(() => {}), new Promise((res) => setTimeout(res, d + 150))]);

      await wait(ov.animate(
        [{ clipPath: from }, { clipPath: 'inset(0px 0px 0px 0px)' }],
        { duration: 640, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' }
      ), 640);

      setRoute(target);
      finish();
      await new Promise((res) => setTimeout(res, 120));

      await wait(ov.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 480, easing: 'ease-out', fill: 'forwards' }
      ), 480);

      ov.remove();
      animLock.current = false;
      return;
    }

    const dest = target.page === 'project' ? PROJECTS.find((p) => p.slug === target.slug) : null;
    const wd = dest && WORLDS.find((w) => w.slug === dest.slug);
    const label = target.page === 'about' ? 'À propos' : dest ? dest.title : 'Accueil';
    const bg = wd ? wd.bg : dest ? dest.bg : '#F77F00';
    const fg = wd ? wd.fg : dest ? dest.fg : '#111110';

    setOverlay({ translateY: '100%', bg, fg, label, duration: 0 });
    requestAnimationFrame(() => {
      setOverlay({ translateY: '0', bg, fg, label, duration: 520 });
    });

    setTimeout(() => {
      setRoute(target);
      finish();
      setTimeout(() => {
        setOverlay({ translateY: '-100%', bg, fg, label, duration: 620 });
        setTimeout(() => {
          setOverlay(HIDDEN);
          animLock.current = false;
        }, 640);
      }, 180);
    }, 520);
  }, [finish]);

  useEffect(() => {
    const onHash = () => transition(parse());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [transition]);

  const nav = useCallback((hash, anchor) => (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    pendingAnchor.current = anchor || null;
    const target = '#' + hash;
    if (location.hash === target || (hash === '/' && !location.hash)) {
      transition(parse());
    } else {
      location.hash = target;
    }
  }, [transition]);

  let page;
  if (route.page === 'about') page = <About nav={nav} />;
  else if (route.page === 'project') {
    const slug = route.slug;
    if (slug === 'shoptongba') page = <Shoptongba nav={nav} />;
    else if (slug === 'subci') page = <Subci nav={nav} />;
    else if (slug === 'tiakoli') page = <Tiakoli nav={nav} />;
    else if (slug === 'helloci') page = <Helloci nav={nav} />;
    else page = <GenericProject slug={slug} nav={nav} />;
  } else page = <Home nav={nav} onEnterWorld={onEnterWorld} />;

  return (
    <div style={{ background: '#EDEBE6', color: '#111110', minHeight: '100vh', overflowX: 'clip' }}>
      <Nav route={route} nav={nav} />
      <ProgressBar active={route.page === 'project'} />
      {page}
      <ContactFooter topGap={route.page === 'home' ? 'clamp(120px,16vw,220px)' : '0px'} />
      <Cursor />
      <TransitionOverlay state={overlay} />
    </div>
  );
}
