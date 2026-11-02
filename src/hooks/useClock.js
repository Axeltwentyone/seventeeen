import { useEffect, useState } from 'react';

export default function useClock() {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString('fr-FR', { timeZone: 'Africa/Abidjan', hour: '2-digit', minute: '2-digit' }));
    };
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return time;
}
