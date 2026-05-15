import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 60, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
      {/* Scroll-to-top */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#2563eb,#7c3aed)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(37,99,235,0.4)', transition: 'transform 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <FiArrowUp size={18} />
        </button>
      )}

      {/* WhatsApp FAB */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 10 }}
        onMouseEnter={e => { const tip = e.currentTarget.querySelector('.wa-tip'); if (tip) { tip.style.opacity = '1'; tip.style.transform = 'translateX(0)'; } }}
        onMouseLeave={e => { const tip = e.currentTarget.querySelector('.wa-tip'); if (tip) { tip.style.opacity = '0'; tip.style.transform = 'translateX(8px)'; } }}>
        <div className="wa-tip" style={{ background: '#fff', color: '#16a34a', padding: '7px 14px', borderRadius: 20, fontSize: 13, fontWeight: 700, boxShadow: '0 4px 16px rgba(0,0,0,0.15)', whiteSpace: 'nowrap', opacity: 0, transform: 'translateX(8px)', transition: 'all 0.3s', pointerEvents: 'none' }}>
          💬 Chat on WhatsApp!
        </div>
        <a href="https://wa.me/919810994450?text=Hello%2C%20I%20want%20to%20know%20more%20about%20courses%20at%20Sunshine%20Institute."
          target="_blank" rel="noopener noreferrer" className="wa-pulse"
          style={{ width: 58, height: 58, borderRadius: '50%', background: '#25d366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'transform 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
}
