import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const REVIEWS = [
  { initial: 'R', name: 'Rohit Sharma', course: 'Accounting with Tally', color: 'from-blue-500 to-cyan-500', grad: 'linear-gradient(135deg,#3b82f6,#06b6d4)', review: '"The Tally course at Sunshine was exactly what I needed. The faculty explained everything simply and I got a job in an accounting firm within a month!"' },
  { initial: 'P', name: 'Priya Verma', course: 'Digital Marketing', color: 'from-violet-500 to-pink-500', grad: 'linear-gradient(135deg,#8b5cf6,#ec4899)', review: '"I joined the Digital Marketing course and it completely changed my career. Sachin sir\'s teaching style is amazing — practical, clear, and very relevant to today\'s industry."' },
  { initial: 'A', name: 'Amit Kumar', course: 'Advanced Diploma (ADCA)', color: 'from-amber-500 to-orange-500', grad: 'linear-gradient(135deg,#f59e0b,#f97316)', review: '"I did the Advanced Diploma and it covered everything from basics to HTML. The installment facility made it very affordable. Highly recommend Sunshine Institute!"' },
];

export default function Testimonials() {
  const hRef = useRef(null);
  const hInView = useInView(hRef, { once: true });

  return (
    <section style={{ background: '#f0f4ff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div ref={hRef} initial={{ opacity: 0, y: 28 }} animate={hInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 18px', borderRadius: 999, background: '#eff6ff', color: '#2563eb', fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            💬 Student Reviews
          </span>
          <h2 className="font-poppins" style={{ fontWeight: 900, fontSize: 'clamp(30px,4vw,50px)', color: '#0f172a', marginBottom: 14 }}>
            What Our <span className="gradient-text-blue">Students</span> Say
          </h2>
          <div style={{ width: 52, height: 4, borderRadius: 2, background: 'linear-gradient(90deg,#2563eb,#7c3aed)', margin: '20px auto 0' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {REVIEWS.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: 20, padding: 30, position: 'relative', overflow: 'hidden', transition: 'all 0.35s' }}
              whileHover={{ y: -6, borderColor: '#2563eb', boxShadow: '0 20px 56px rgba(37,99,235,0.12)' }}>
              {/* Big quote mark */}
              <div style={{ position: 'absolute', top: -8, right: 20, fontFamily: 'Georgia, serif', fontSize: 90, color: '#eff6ff', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>"</div>
              {/* Stars */}
              <div style={{ color: '#f59e0b', fontSize: 14, letterSpacing: 2, marginBottom: 14 }}>★★★★★</div>
              <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.85, marginBottom: 22, fontStyle: 'italic', position: 'relative' }}>{r.review}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 17, flexShrink: 0, background: r.grad }}>
                  {r.initial}
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: '#0f172a', fontSize: 15 }}>{r.name}</p>
                  <p style={{ color: '#2563eb', fontSize: 12.5, fontWeight: 600, marginTop: 2 }}>{r.course}</p>
                </div>
              </div>
              {/* Bottom accent */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#2563eb,#7c3aed)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s' }}
                className="card-accent" />
            </motion.div>
          ))}
        </div>
        <style>{`.group:hover .card-accent { transform: scaleX(1) !important; }`}</style>
      </div>
    </section>
  );
}
