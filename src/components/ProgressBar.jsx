import { useEffect, useRef } from 'react';

export default function ProgressBar({ active }) {
  const ref = useRef(null);

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;
    const onScroll = () => {
      if (!active) { bar.style.width = '0'; return; }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0) + '%';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [active]);

  return (
    <div
      ref={ref}
      style={{ position: 'fixed', top: 0, left: 0, height: 3, width: 0, background: '#F77F00', zIndex: 55 }}
    />
  );
}
