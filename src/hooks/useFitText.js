import { useEffect, useRef } from 'react';

// Reproduces the original fitNames(): scales a row's font-size so the text
// spans the full width of its container.
export default function useFitText(deps = []) {
  const rowRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    const text = textRef.current;
    if (!row || !text) return;

    const fit = () => {
      row.style.fontSize = '100px';
      const w = text.scrollWidth;
      const W = row.clientWidth;
      if (w > 0 && W > 0) row.style.fontSize = ((100 * W) / w * 0.985).toFixed(2) + 'px';
    };

    fit();
    const id = requestAnimationFrame(fit);
    window.addEventListener('resize', fit);
    document.fonts?.ready.then(fit);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', fit);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { rowRef, textRef };
}
