import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { shortTermCourses, threeMonthCourses, longTermCourses } from '../data/courses';
import { useFees } from '../context/FeeContext';

const LockedFee = () => (
  <a href="#contact"
    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 14px', borderRadius: 999, background: '#f1f5f9', border: '1.5px dashed #94a3b8', color: '#64748b', fontSize: 13, fontWeight: 700, textDecoration: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.background = '#eff6ff'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = '#94a3b8'; e.currentTarget.style.color = '#64748b'; e.currentTarget.style.background = '#f1f5f9'; }}>
    🔒 Share details to see
  </a>
);

/* ─── Short-term table ─── */
function ShortTable({ unlocked }) {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: 20, overflow: 'hidden' }}>
      <div style={{ background: '#eff6ff', padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1.5px solid #e2e8f0' }}>
        <span style={{ color: '#2563eb', fontWeight: 700, fontSize: 14 }}>
          ℹ️ Admission Fees: ₹200/- · Certificate Fees: ₹300/- (Optional)
        </span>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f8fafc' }}>
            {['Course', 'Duration', 'Fees'].map(h => (
              <th key={h} style={{ padding: '14px 28px', textAlign: 'left', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5, color: '#94a3b8', fontWeight: 700, borderBottom: '1.5px solid #e2e8f0' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {shortTermCourses.map((c, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#eff6ff'}
              onMouseLeave={e => e.currentTarget.style.background = ''}>
              <td style={{ padding: '16px 28px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 18 }}>{c.icon}</span>
                <span style={{ fontWeight: 600, color: '#0f172a', fontSize: 14.5 }}>{c.name}</span>
              </td>
              <td style={{ padding: '16px 28px' }}>
                <span style={{ padding: '3px 12px', borderRadius: 20, background: '#eff6ff', color: '#2563eb', fontSize: 12.5, fontWeight: 700 }}>{c.duration}</span>
              </td>
              <td style={{ padding: '16px 28px' }}>
                {unlocked
                  ? <span className="font-poppins" style={{ fontWeight: 800, color: '#2563eb', fontSize: 15 }}>{c.fee}</span>
                  : <LockedFee />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Course card ─── */
function CourseCard({ course, i, unlocked }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.45, delay: i * 0.07 }}
      className="shine"
      style={{ background: '#fff', border: course.flagship ? '2px solid #2563eb' : '1.5px solid #e2e8f0', borderRadius: 20, padding: 28, position: 'relative', overflow: 'hidden', transition: 'all 0.35s' }}
      whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(37,99,235,0.14)', borderColor: '#2563eb' }}>

      {course.flagship && (
        <div style={{ position: 'absolute', top: 0, right: 0, background: 'linear-gradient(135deg,#2563eb,#7c3aed)', color: '#fff', fontSize: 10, fontWeight: 800, padding: '5px 14px 5px 18px', borderBottomLeftRadius: 14, letterSpacing: 0.5 }}>
          ★ FLAGSHIP
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, background: '#f8fafc' }}>
          {course.icon}
        </div>
        {unlocked
          ? <div className="font-poppins" style={{ padding: '7px 16px', borderRadius: 999, background: 'linear-gradient(135deg,#2563eb,#7c3aed)', color: '#fff', fontWeight: 800, fontSize: 15, boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}>
              {course.fee}
            </div>
          : <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '8px 16px', borderRadius: 999, background: '#f1f5f9', border: '1.5px dashed #94a3b8', color: '#64748b', fontSize: 13, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.background = '#eff6ff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#94a3b8'; e.currentTarget.style.color = '#64748b'; e.currentTarget.style.background = '#f1f5f9'; }}>
              🔒 View Fee
            </a>}
      </div>

      <h3 className="font-poppins" style={{ fontWeight: 800, fontSize: 17, color: '#0f172a', marginBottom: 8, lineHeight: 1.3 }}>{course.name}</h3>
      <p style={{ color: '#2563eb', fontSize: 13, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
        🕐 {course.duration}
        {unlocked && <>&nbsp;·&nbsp; {course.installment}</>}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
        {course.topics.map((t, j) => (
          <span key={j} style={{ padding: '4px 12px', borderRadius: 20, background: '#eff6ff', color: '#2563eb', fontSize: 12.5, fontWeight: 600 }}>{t}</span>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1.5px solid #f1f5f9' }}>
        <span style={{ color: course.flagship ? '#2563eb' : '#94a3b8', fontSize: 12.5, fontWeight: course.flagship ? 700 : 500 }}>
          {course.flagship ? 'Most Comprehensive' : '✅ Easy EMI available'}
        </span>
        <a href="#contact" style={{ padding: '8px 20px', borderRadius: 999, background: '#2563eb', color: '#fff', fontSize: 13.5, fontWeight: 700, boxShadow: '0 4px 12px rgba(37,99,235,0.25)', transition: 'all 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
          onMouseLeave={e => e.currentTarget.style.background = '#2563eb'}>
          Enroll Now
        </a>
      </div>
    </motion.div>
  );
}

const TABS = [
  { id: 'short', label: '⚡ Short Term' },
  { id: 'three', label: '📅 3 Month' },
  { id: 'long',  label: '🎓 Long Term' },
];

export default function Courses() {
  const [active, setActive] = useState('short');
  const hRef = useRef(null);
  const hInView = useInView(hRef, { once: true });
  const { unlocked } = useFees();

  return (
    <section id="courses" style={{ background: '#f0f4ff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div ref={hRef} initial={{ opacity: 0, y: 28 }} animate={hInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 18px', borderRadius: 999, background: '#eff6ff', color: '#2563eb', fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            📚 Our Programs
          </span>
          <h2 className="font-poppins" style={{ fontWeight: 900, fontSize: 'clamp(30px,4vw,50px)', color: '#0f172a', marginBottom: 14 }}>
            Courses We <span className="gradient-text-blue">Offer</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.85 }}>
            Short skill boosters to comprehensive diploma programs — find the course that fits your goals.
          </p>
          <div style={{ width: 52, height: 4, borderRadius: 2, background: 'linear-gradient(90deg,#2563eb,#7c3aed)', margin: '20px auto 0' }} />
        </motion.div>

        {/* Fee unlock banner — shown only when locked */}
        {!unlocked && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, background: '#fff7ed', border: '1.5px solid #fed7aa', borderRadius: 14, padding: '14px 24px', marginBottom: 32 }}>
            <p style={{ color: '#92400e', fontSize: 14, fontWeight: 600, margin: 0 }}>
              🔒 Course fees are hidden. Share your contact details to unlock them.
            </p>
            <a href="#contact"
              style={{ padding: '8px 22px', borderRadius: 999, background: 'linear-gradient(135deg,#f97316,#ea580c)', color: '#fff', fontSize: 13.5, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(249,115,22,0.35)', transition: 'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Unlock Fees →
            </a>
          </motion.div>
        )}

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', padding: 6, borderRadius: 18, background: '#fff', border: '1.5px solid #e2e8f0', gap: 4 }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActive(t.id)}
                style={{ padding: '10px 26px', borderRadius: 13, border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, transition: 'all 0.3s',
                  background: active === t.id ? 'linear-gradient(135deg,#2563eb,#7c3aed)' : 'transparent',
                  color: active === t.id ? '#fff' : '#64748b',
                  boxShadow: active === t.id ? '0 4px 16px rgba(37,99,235,0.3)' : 'none' }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pane */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}>
            {active === 'short' && <ShortTable unlocked={unlocked} />}
            {active === 'three' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 22 }}>
                {threeMonthCourses.map((c, i) => <CourseCard key={i} course={c} i={i} unlocked={unlocked} />)}
              </div>
            )}
            {active === 'long' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 22 }}>
                {longTermCourses.map((c, i) => <CourseCard key={i} course={c} i={i} unlocked={unlocked} />)}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Fee info — only shown when unlocked */}
        {unlocked && (
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginTop: 48, background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: 20, padding: 36 }}>
            <h4 className="font-poppins" style={{ fontWeight: 800, fontSize: 18, color: '#0f172a', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              ℹ️ Fee Information at a Glance
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
              {[
                { icon: '🎯', title: '10% Discount', desc: 'Pay complete fees upfront and save 10%' },
                { icon: '🏆', title: 'Free Certificate', desc: 'Private certificate free on completion' },
                { icon: '📋', title: 'Govt. Cert — ₹1,500/-', desc: 'Government-recognised on request' },
                { icon: '👤', title: 'Admission — ₹200/-', desc: 'One-time fee for short-term courses' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px 18px', borderRadius: 14, background: '#f0f4ff', borderLeft: '4px solid #2563eb' }}>
                  <span style={{ fontSize: 20, marginTop: 1 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, color: '#0f172a', fontSize: 14, marginBottom: 3 }}>{item.title}</p>
                    <p style={{ color: '#64748b', fontSize: 13 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
