import { useEffect, useRef, useState } from 'react';

// Reproduces the original data-reveal="fade" / data-reveal="up" scroll-in effect.
export default function Reveal({ as: Tag = 'div', mode = 'fade', delay = 0, style, children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);

    // Safety net: if the observer never fires (e.g. element already in the
    // viewport on first paint, a known IntersectionObserver edge case),
    // force-reveal anything still visible after a short delay.
    const safety = setTimeout(() => {
      const vh = window.innerHeight || 0;
      const r = el.getBoundingClientRect();
      if (vh < 50 || (r.top < vh && r.bottom > 0)) setInView(true);
    }, 400);

    return () => { io.disconnect(); clearTimeout(safety); };
  }, []);

  const cls = `reveal ${mode === 'up' ? 'reveal-up' : 'reveal-fade'} ${inView ? 'in' : ''}`;

  return (
    <Tag ref={ref} className={cls} style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
