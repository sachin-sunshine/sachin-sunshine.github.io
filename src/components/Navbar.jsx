import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const TICKER_H = 36; // px — fixed ticker height
const links = [
  { href: '#about', label: 'About' },
  { href: '#courses', label: 'Courses' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > TICKER_H + 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navTop = scrolled ? 0 : TICKER_H;

  return (
    <>
      {/* Main nav */}
      <nav style={{ position: 'fixed', top: navTop, left: 0, right: 0, zIndex: 50, transition: 'top 0.3s ease, background 0.3s ease, box-shadow 0.3s ease' }}
        className={scrolled
          ? 'bg-[#060d1a]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
        }>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img src="/logo-enhanced.svg" alt="Sunshine Institute" style={{ width: 72, height: 44, borderRadius: 8, objectFit: "contain", background: "#fff", flexShrink: 0 }} />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-semibold text-white/60 hover:text-white transition-colors duration-200 relative group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full group-hover:w-full transition-all duration-300"
                    style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)' }} />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 4px 16px rgba(59,130,246,0.35)' }}>
            Enroll Now ✨
          </a>

          {/* Hamburger */}
          <button className="md:hidden text-white text-xl p-1" onClick={() => setOpen(v => !v)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 49, background: 'rgba(6,13,26,0.97)', backdropFilter: 'blur(20px)' }}>
          <div className="flex flex-col items-start px-8 pt-28 gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-xl font-bold text-white/80 hover:text-white border-b border-white/10 w-full pb-4 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
              className="mt-2 w-full text-center py-3.5 rounded-xl text-white font-bold text-base"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>
              Enroll Now ✨
            </a>
          </div>
        </div>
      )}
    </>
  );
}
