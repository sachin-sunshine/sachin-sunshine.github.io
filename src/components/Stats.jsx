import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let c = 0;
    const step = target / 60;
    const t = setInterval(() => {
      c = Math.min(c + step, target);
      setCount(Math.floor(c));
      if (c >= target) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [inView, target]);

  return <span ref={ref} className="font-poppins font-black text-white tabular-nums" style={{ fontSize: 48 }}>{count}{suffix}</span>;
}

const STATS = [
  { target: 20, suffix: '+', label: 'Courses Offered', icon: '📚' },
  { target: 500, suffix: '+', label: 'Students Trained', icon: '🎓' },
  { target: 100, suffix: '%', label: 'Certified', icon: '🏆' },
  { target: 10, suffix: '%', label: 'Discount Available', icon: '💰' },
];

export default function Stats() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#1d4ed8 0%,#2563eb 50%,#7c3aed 100%)' }} />
      {/* Subtle dot grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.08,
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '28px 28px' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 960, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}
          className="grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}
              className={i < STATS.length - 1 ? 'border-r border-white/20 pr-4' : ''}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
              <Counter target={s.target} suffix={s.suffix} />
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: 500, marginTop: 6 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
