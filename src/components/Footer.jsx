import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const links1 = ['#home:Home', '#about:About Us', '#courses:All Courses', '#gallery:Gallery', '#location:Location', '#contact:Contact'];
  const courses = ['Tally ERP9 / Prime', 'Digital Marketing', 'Web Designing', 'Graphic Designing', 'Python with SQL', 'ADCA Diploma'];
  const socials = [
    { Icon: FaWhatsapp, href: 'https://wa.me/919810994450' },
    { Icon: FaFacebookF, href: '#' },
    { Icon: FaInstagram, href: '#' },
    { Icon: FaYoutube, href: '#' },
  ];

  return (
    <footer style={{ background: '#030812', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 24px 28px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48, marginBottom: 52 }}>

          {/* Brand */}
          <div>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 18 }}>
              <img src="/logo-enhanced.svg" alt="Sunshine Institute" style={{ width: 72, height: 44, borderRadius: 8, objectFit: "contain", background: "#fff", flexShrink: 0 }} />
              <div>
                <div className="gradient-text-blue font-poppins" style={{ fontWeight: 900, fontSize: 16, lineHeight: 1.2 }}>Sunshine Institute</div>
                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, textTransform: 'uppercase', letterSpacing: 2 }}>of Computer Education</div>
              </div>
            </a>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13.5, lineHeight: 1.85, marginBottom: 22, maxWidth: 280 }}>
              Empowering students with practical computer skills and industry-relevant knowledge. Your success is our mission.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(({ Icon, href }, i) => (
                <a key={i} href={href} target={href !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
                  style={{ width: 38, height: 38, borderRadius: 11, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', transition: 'all 0.3s', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#2563eb'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins" style={{ color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {links1.map(item => {
                const [href, label] = item.split(':');
                return (
                  <li key={href} style={{ marginBottom: 10 }}>
                    <a href={href} style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="font-poppins" style={{ color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20 }}>Popular Courses</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {courses.map(c => (
                <li key={c} style={{ marginBottom: 10 }}>
                  <a href="#courses" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13 }}>© 2025 <span style={{ color: '#60a5fa' }}>Sunshine Institute of Computer Education</span>. All Rights Reserved.</p>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13 }}>2083, Old Anaj Mandi Extn., <span style={{ color: '#60a5fa' }}>Narela, Delhi – 110040</span></p>
        </div>
      </div>
    </footer>
  );
}
