import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';
import { galleryItems } from '../data/courses';

export default function Gallery() {
  const [lb, setLb] = useState(null);
  const hRef = useRef(null);
  const hInView = useInView(hRef, { once: true });

  return (
    <section id="gallery" style={{ background: '#ffffff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div ref={hRef} initial={{ opacity: 0, y: 28 }} animate={hInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 18px', borderRadius: 999, background: '#eff6ff', color: '#2563eb', fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            📸 Campus Life
          </span>
          <h2 className="font-poppins" style={{ fontWeight: 900, fontSize: 'clamp(30px,4vw,50px)', color: '#0f172a', marginBottom: 14 }}>
            Our Institute in <span className="gradient-text-blue">Pictures</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.85 }}>
            A glimpse into our vibrant campus, modern labs, skilled faculty, and enthusiastic students.
          </p>
          <div style={{ width: 52, height: 4, borderRadius: 2, background: 'linear-gradient(90deg,#2563eb,#7c3aed)', margin: '20px auto 0' }} />
        </motion.div>

        {/* Masonry-style grid using explicit CSS grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, 200px)', gap: 14 }}>
          {galleryItems.map((item, i) => {
            // Explicit grid placement for masonry look
            const style = {};
            if (i === 0) { style.gridColumn = 'span 2'; style.gridRow = 'span 2'; }
            else if (i === 4) { style.gridColumn = 'span 2'; }

            return (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }} transition={{ duration: 0.45, delay: i * 0.06 }}
                onClick={() => setLb(item)}
                style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, cursor: 'pointer', ...style }}
                className="group">
                <img src={item.src} alt={item.label} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.55s ease', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                {/* Overlay */}
                <div className="g-overlay"
                  style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,26,0.88) 0%, rgba(6,13,26,0.15) 55%, transparent 100%)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'flex-end', padding: 16 }}>
                  <div>
                    <p style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>{item.label}</p>
                    <p style={{ color: '#93c5fd', fontSize: 12, marginTop: 3 }}>{item.sub}</p>
                  </div>
                </div>
                {/* Zoom icon */}
                <div style={{ position: 'absolute', top: 10, right: 10, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s', color: '#fff' }}
                  className="g-zoom">
                  <FiZoomIn size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hover via CSS since inline styles can't do :hover */}
        <style>{`
          .group:hover .g-overlay { opacity: 1 !important; }
          .group:hover .g-zoom { opacity: 1 !important; }
        `}</style>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lb && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLb(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(6,13,26,0.97)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <button onClick={() => setLb(null)}
              style={{ position: 'absolute', top: 20, right: 24, width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, zIndex: 10 }}>
              <FiX />
            </button>
            <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
              onClick={e => e.stopPropagation()} style={{ maxWidth: '88vw', textAlign: 'center' }}>
              <img src={lb.src} alt={lb.label} style={{ maxHeight: '80vh', maxWidth: '100%', borderRadius: 16, objectFit: 'contain', boxShadow: '0 0 80px rgba(0,0,0,0.8)' }} />
              <p style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginTop: 18 }}>{lb.label}</p>
              <p style={{ color: '#93c5fd', fontSize: 13, marginTop: 4 }}>{lb.sub}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
