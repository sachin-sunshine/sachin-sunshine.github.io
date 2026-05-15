import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CARDS = [
  { icon: '🎓', title: 'Expert Faculty', desc: 'Learn from industry-experienced instructors who bring real-world knowledge to every session.' },
  { icon: '🏆', title: 'Free Certificate', desc: 'Receive your private course certificate completely free. Government certificates also available.' },
  { icon: '💻', title: '100% Practical', desc: 'Hands-on lab sessions, real software, and project-based learning — job-ready from day one.' },
  { icon: '💰', title: 'Affordable Fees', desc: 'Easy monthly instalments and 10% discount on full payment. Education that fits every budget.' },
  { icon: '🕐', title: 'Flexible Timings', desc: 'Morning, afternoon & evening batches for students, working professionals, and homemakers.' },
  { icon: '🛡️', title: 'Trusted & Reputed', desc: 'Hundreds of alumni placed across companies, government offices & businesses in Delhi-NCR.' },
];

export default function WhyUs() {
  const hRef = useRef(null);
  const hInView = useInView(hRef, { once: true });

  return (
    <section id="about" style={{ background: '#ffffff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div ref={hRef} initial={{ opacity: 0, y: 28 }} animate={hInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 18px', borderRadius: 999, background: '#eff6ff', color: '#2563eb', fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            ⭐ Why Choose Us
          </span>
          <h2 className="font-poppins" style={{ fontWeight: 900, fontSize: 'clamp(30px,4vw,50px)', color: '#0f172a', marginBottom: 14 }}>
            The <span className="gradient-text-blue">Sunshine Institute</span> Advantage
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.85 }}>
            Quality education, practical training, and certified outcomes — everything you need to launch your career.
          </p>
          <div style={{ width: 52, height: 4, borderRadius: 2, background: 'linear-gradient(90deg,#2563eb,#7c3aed)', margin: '20px auto 0' }} />
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {CARDS.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.45, delay: i * 0.07 }}
              className="shine"
              style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: 20, padding: '36px 30px', cursor: 'default', transition: 'all 0.3s' }}
              whileHover={{ y: -6, borderColor: '#2563eb', boxShadow: '0 20px 56px rgba(37,99,235,0.13)' }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg,#eff6ff,#f5f3ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 20 }}>
                {c.icon}
              </div>
              <h3 className="font-poppins" style={{ fontWeight: 700, fontSize: 17, color: '#0f172a', marginBottom: 10 }}>{c.title}</h3>
              <p style={{ color: '#64748b', fontSize: 14.5, lineHeight: 1.8 }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
