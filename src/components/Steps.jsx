import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const STEPS = [
  { num: '01', icon: '📚', title: 'Choose a Course', desc: 'Browse our short-term, 3-month, or long-term programs and select the one that fits your goal.' },
  { num: '02', icon: '📞', title: 'Contact Us', desc: 'Call or WhatsApp Sachin Garg or Pooja Garg to know batch timings and seat availability.' },
  { num: '03', icon: '💳', title: 'Pay Fees', desc: 'Pay the admission fee of ₹200/- and your first installment to confirm your seat.' },
  { num: '04', icon: '🎓', title: 'Start Learning', desc: 'Attend classes, complete your course, and receive your certificate on successful completion.' },
];

export default function Steps() {
  const hRef = useRef(null);
  const hInView = useInView(hRef, { once: true });

  return (
    <section id="admission" style={{ position: 'relative', padding: '96px 24px', overflow: 'hidden' }}>
      {/* Dark mesh background */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 15% 50%, rgba(37,99,235,0.18) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(109,40,217,0.14) 0%, transparent 50%), #060d1a' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <motion.div ref={hRef} initial={{ opacity: 0, y: 28 }} animate={hInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 18px', borderRadius: 999, color: '#93c5fd', fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            🎯 Admission Process
          </span>
          <h2 className="font-poppins" style={{ fontWeight: 900, fontSize: 'clamp(30px,4vw,50px)', color: '#fff', marginBottom: 14 }}>
            How to <span className="gradient-text">Get Started</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.85 }}>
            Joining Sunshine Institute is simple. Follow these four easy steps and begin your journey today.
          </p>
          <div style={{ width: 52, height: 4, borderRadius: 2, background: 'linear-gradient(90deg,#2563eb,#7c3aed)', margin: '20px auto 0' }} />
        </motion.div>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {STEPS.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.45, delay: i * 0.12 }}
              className="glass shine"
              style={{ borderRadius: 20, padding: '36px 24px', textAlign: 'center', transition: 'all 0.35s', cursor: 'default' }}
              whileHover={{ y: -6, background: 'rgba(37,99,235,0.12)', borderColor: 'rgba(96,165,250,0.4)' }}>
              {/* Number circle */}
              <div style={{ width: 68, height: 68, borderRadius: '50%', background: 'linear-gradient(135deg,#2563eb,#7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', boxShadow: '0 8px 24px rgba(37,99,235,0.35)' }}>
                <span className="font-poppins" style={{ fontWeight: 900, color: '#fff', fontSize: 22 }}>{s.num}</span>
              </div>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
              <h3 style={{ fontWeight: 700, color: '#fff', fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.75 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
