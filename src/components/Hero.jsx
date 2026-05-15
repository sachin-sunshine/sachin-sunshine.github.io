import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SLIDES = [
  {
    bg: 'https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=1800&q=90&auto=format&fit=crop',
    eyebrow: '🖥️ State-of-the-Art Computer Labs',
    line1: 'Modern Labs,',
    line2: 'Real-World Skills',
    desc: 'Learn on the latest hardware and software in our fully-equipped computer labs built for hands-on practical training.',
    cta1: { label: '🚀 Explore Courses', href: '#courses' },
    cta2: { label: '📞 Call Us', href: 'tel:9810994450' },
  },
  {
    bg: 'https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?w=1800&q=90&auto=format&fit=crop',
    eyebrow: '👥 500+ Students Trained',
    line1: 'Learn at Your',
    line2: 'Own Pace',
    desc: 'Students from all backgrounds — school kids, graduates, homemakers, professionals. Everyone grows here.',
    cta1: { label: '⭐ Why Choose Us', href: '#about' },
    cta2: { label: '✍️ Enroll Now', href: '#contact' },
  },
  {
    bg: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=1800&q=90&auto=format&fit=crop',
    eyebrow: '👨‍🏫 Expert Faculty',
    line1: 'Guided by',
    line2: 'Expert Teachers',
    desc: 'Dedicated and experienced faculty who simplify complex topics and ensure every student succeeds.',
    cta1: { label: '📚 All Courses', href: '#courses' },
    cta2: { label: '📍 Find Us', href: '#location' },
  },
  {
    bg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=90&auto=format&fit=crop',
    eyebrow: '💡 Future-Ready Skills',
    line1: 'Code, Design,',
    line2: 'Market & Grow',
    desc: 'Python, Web Design, Digital Marketing, Graphic Design — build skills employers demand today.',
    cta1: { label: '💻 Tech Courses', href: '#courses' },
    cta2: { label: '💬 WhatsApp Us', href: 'https://wa.me/919810994450', external: true },
  },
  {
    bg: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1800&q=90&auto=format&fit=crop',
    eyebrow: '🏷️ Limited Time Offer',
    line1: 'Pay Full Fees &',
    line2: 'Get 10% OFF!',
    desc: 'Private Certificate FREE. Govt. Certificate at ₹1,500/-. Admission fee only ₹200/-. Easy instalments.',
    cta1: { label: '📞 Call: 9810994450', href: 'tel:9810994450' },
    cta2: { label: '💬 WhatsApp Now', href: 'https://wa.me/919810994450', external: true },
  },
];

export default function Hero() {
  const [cur, setCur] = useState(0);
  const [prog, setProg] = useState(0);
  const autoRef = useRef(null);
  const progRef = useRef(null);

  const goTo = (n) => {
    setCur((n + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    setProg(0);
    clearInterval(autoRef.current);
    clearInterval(progRef.current);

    const start = Date.now();
    progRef.current = setInterval(() => {
      const p = Math.min(((Date.now() - start) / 5000) * 100, 100);
      setProg(p);
    }, 50);
    autoRef.current = setInterval(() => {
      setCur(c => (c + 1) % SLIDES.length);
    }, 5000);

    return () => {
      clearInterval(autoRef.current);
      clearInterval(progRef.current);
    };
  }, [cur]);

  const slide = SLIDES[cur];

  return (
    /* Takes up full viewport; sits right at top since ticker+nav are both fixed */
    <section id="home" style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden' }}>

      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div key={cur} style={{ position: 'absolute', inset: 0 }}
          initial={{ scale: 1.07, opacity: 0 }}
          animate={{ scale: 1,    opacity: 1 }}
          exit={{    scale: 1.03, opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.18, 1] }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${slide.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(6,13,26,.92) 0%, rgba(6,13,26,.65) 55%, rgba(6,13,26,.25) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,26,.7) 0%, transparent 40%)' }} />
        </motion.div>
      </AnimatePresence>

      {/* Content — starts below ticker (36px) + navbar (64px) = 100px from top */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center', paddingLeft: '8%', paddingRight: '8%', paddingTop: 100 }}>

        {/* Big institute name — fixed, not part of slide animation */}
        <div style={{ position: 'absolute', top: 110, left: '8%' }}>
          <div className="font-poppins font-black gradient-text-blue" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', lineHeight: 1.15 }}>
            Sunshine Institute
          </div>
          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(12px, 1.3vw, 16px)', textTransform: 'uppercase', letterSpacing: 3, fontWeight: 600 }}>
            of Computer Education
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={cur} style={{ maxWidth: 640, paddingTop: 90 }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -16 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}>

            {/* Eyebrow */}
            <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: '#93c5fd', borderColor: 'rgba(96,165,250,0.3)' }}>
              {slide.eyebrow}
            </div>

            {/* Heading */}
            <h1 className="font-poppins font-black text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(38px, 5.5vw, 68px)' }}>
              {slide.line1}<br />
              <span className="gradient-text">{slide.line2}</span>
            </h1>

            {/* Description */}
            <p className="text-white/65 mb-9 leading-relaxed" style={{ fontSize: 17, maxWidth: 500 }}>
              {slide.desc}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href={slide.cta1.href}
                className="inline-flex items-center gap-2 rounded-full text-white font-bold px-7 py-3.5 text-sm transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 8px 24px rgba(37,99,235,0.4)' }}>
                {slide.cta1.label}
              </a>
              <a href={slide.cta2.href} target={slide.cta2.external ? '_blank' : undefined} rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full text-white font-semibold px-7 py-3.5 text-sm border-2 border-white/25 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                style={{ backdropFilter: 'blur(8px)' }}>
                {slide.cta2.label}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next */}
      {[{ dir: -1, Icon: FiChevronLeft, pos: { left: 20 } }, { dir: 1, Icon: FiChevronRight, pos: { right: 20 } }].map(({ dir, Icon, pos }) => (
        <button key={dir} onClick={() => goTo(cur + dir)}
          className="glass hover:bg-blue-600/80 transition-all duration-300 hover:scale-110"
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 20, width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', border: '2px solid rgba(255,255,255,.25)', ...pos }}>
          <Icon size={20} />
        </button>
      ))}

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', gap: 8 }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            style={{ height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', transition: 'all 0.3s', width: i === cur ? 32 : 8, background: i === cur ? '#fff' : 'rgba(255,255,255,0.35)' }} />
        ))}
      </div>

      {/* Progress bar */}
      <div className="slide-prog" style={{ width: `${prog}%` }} />
    </section>
  );
}
