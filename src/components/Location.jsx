import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MAPS_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.089!2d77.08734!3d28.844885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd309eebed77%3A0xd201c3acffb130e7!2sSunshine%20Institute%20of%20Computer%20Education!5e0!3m2!1sen!2sin!4v1716789000000!5m2!1sen!2sin";
const DIRECTIONS = "https://www.google.com/maps/dir//Sunshine+Institute+of+Computer+Education,+2083,+Old+Anaj+Mandi,+extension,+Narela,+Delhi,+110040/@28.8506295,77.0932424,14.73z";

const INFO = [
  { icon: '📍', label: 'Address', val: '2083, Old Anaj Mandi Extension, Narela, Delhi – 110040', href: null },
  { icon: '📞', label: 'Sachin Garg', val: '9810994450', href: 'tel:9810994450' },
  { icon: '📞', label: 'Pooja Garg', val: '9999105540', href: 'tel:9999105540' },
];

export default function Location() {
  const hRef = useRef(null);
  const hInView = useInView(hRef, { once: true });

  return (
    <section id="location" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div ref={hRef} initial={{ opacity: 0, y: 28 }} animate={hInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 18px', borderRadius: 999, background: '#eff6ff', color: '#2563eb', fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            📍 Find Us
          </span>
          <h2 className="font-poppins" style={{ fontWeight: 900, fontSize: 'clamp(30px,4vw,50px)', color: '#0f172a', marginBottom: 14 }}>
            Visit Our <span className="gradient-text-blue">Institute</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.85 }}>
            Located in Narela, Delhi — easy to reach by auto, bus, or metro. Come visit us anytime!
          </p>
          <div style={{ width: 52, height: 4, borderRadius: 2, background: 'linear-gradient(90deg,#2563eb,#7c3aed)', margin: '20px auto 0' }} />
        </motion.div>

        {/* Two-column */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 52, alignItems: 'start' }}>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <h3 className="font-poppins" style={{ fontWeight: 900, color: '#0f172a', fontSize: 26, marginBottom: 10, lineHeight: 1.2 }}>
              Sunshine Institute<br />of Computer Education
            </h3>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 30, lineHeight: 1.85 }}>
              Come visit us! Our staff will show you the labs, explain all courses, and help you choose the right program.
            </p>

            {INFO.map((info, i) => {
              const El = info.href ? 'a' : 'div';
              return (
                <El key={i} href={info.href}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '18px 20px', border: '1.5px solid #e2e8f0', borderRadius: 16, marginBottom: 12, background: '#fff', textDecoration: 'none', transition: 'all 0.3s', cursor: info.href ? 'pointer' : 'default' }}
                  onMouseEnter={e => { if (info.href) { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.1)'; e.currentTarget.style.transform = 'translateX(4px)'; } }}
                  onMouseLeave={e => { if (info.href) { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateX(0)'; } }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ color: '#94a3b8', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{info.label}</p>
                    <p style={{ color: '#0f172a', fontWeight: 700, fontSize: 15 }}>{info.val}</p>
                  </div>
                </El>
              );
            })}

            <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 26px', borderRadius: 999, background: 'linear-gradient(135deg,#2563eb,#7c3aed)', color: '#fff', fontWeight: 700, fontSize: 15, textDecoration: 'none', marginTop: 8, boxShadow: '0 8px 24px rgba(37,99,235,0.3)', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,99,235,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.3)'; }}>
              🧭 Get Directions on Google Maps
            </a>
          </motion.div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
            style={{ borderRadius: 24, overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 24px 80px rgba(15,23,42,0.10)' }}>
            <iframe src={MAPS_SRC} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Sunshine Institute Location" style={{ display: 'block', width: '100%', height: 440, border: 'none' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
