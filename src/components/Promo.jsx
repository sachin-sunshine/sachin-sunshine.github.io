import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const OFFERS = [
  { icon: '💸', val: '10% OFF', label: 'On full fee payment at the time of admission' },
  { icon: '📜', val: 'FREE', label: 'Private Certificate provided free on completion' },
  { icon: '🏛️', val: '₹1,500/-', label: 'Government Certificate available on request' },
  { icon: '📝', val: '₹200/-', label: 'One-time admission fee for short-term courses' },
];

export default function Promo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background layers */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,13,26,0.92)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(29,78,216,0.5) 0%, transparent 60%)' }} />

      {/* Content */}
      <div ref={ref} style={{ position: 'relative', zIndex: 1, maxWidth: 960, margin: '0 auto', padding: '88px 24px', textAlign: 'center' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <span className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 18px', borderRadius: 999, color: '#93c5fd', fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20 }}>
            🏷️ Special Offers
          </span>
          <h2 className="font-poppins" style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: '#fff', marginBottom: 14 }}>
            Invest in Your Future — <span className="gradient-text">Save More!</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, marginBottom: 48, lineHeight: 1.8 }}>
            We believe quality computer education should be accessible to all.
          </p>
        </motion.div>

        {/* Offer cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 18, marginBottom: 48 }}>
          {OFFERS.map((o, i) => (
            <motion.div key={i} className="glass shine"
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{ borderRadius: 18, padding: '28px 18px', textAlign: 'center', transition: 'all 0.3s', cursor: 'default' }}
              whileHover={{ y: -6, background: 'rgba(37,99,235,0.2)' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{o.icon}</div>
              <div className="font-poppins" style={{ fontWeight: 900, fontSize: 20, color: '#93c5fd', marginBottom: 8 }}>{o.val}</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.55 }}>{o.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.a href="#contact" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-3 rounded-full text-white font-bold px-8 py-4 text-base transition-all duration-300 hover:-translate-y-1"
          style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 8px 24px rgba(37,99,235,0.4)' }}>
          📞 Enquire Now — 9810994450
        </motion.a>
      </div>
    </div>
  );
}
