import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useFees } from '../context/FeeContext';

const ALL_COURSES = {
  'Short Term': ['Basic Excel', 'Advance Excel', 'Internet', 'Tally (ERP9 / Prime)', 'Busy', 'Advance Tally', 'AutoCAD (2D or 3D)', 'AutoCAD (2D & 3D)', 'English Speaking', '11th or 12th IP'],
  '3 Month Courses': ['Basic Computer Application', 'Advance Basic Computer Application', 'Accounting with Tally', 'Accounting with Busy', 'Python with SQL', 'Web Designing'],
  'Long Term': ['Graphic Designing', 'Typing (English & Hindi)', 'Digital Marketing', 'Diploma in Computer Application', 'Advanced Diploma in Computer Application (ADCA)'],
};

const CT_ITEMS = [
  { icon: '📞', label: 'Sachin Garg', val: '9810994450', href: 'tel:9810994450' },
  { icon: '📞', label: 'Pooja Garg', val: '9999105540', href: 'tel:9999105540' },
  { icon: '💬', label: 'WhatsApp', val: 'Chat Directly', href: 'https://wa.me/919810994450', green: true, external: true },
  { icon: '📍', label: 'Address', val: '2083, Old Anaj Mandi Extn., Narela, Delhi – 110040' },
];

const INPUT_STYLE = {
  width: '100%', background: '#f8fafc', border: '1.5px solid #e2e8f0',
  borderRadius: 12, padding: '12px 16px', color: '#0f172a',
  fontSize: 14, fontFamily: 'Inter, sans-serif', outline: 'none', transition: 'all 0.25s',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', course: '', msg: '' });
  const [sent, setSent] = useState(false);
  const hRef = useRef(null);
  const hInView = useInView(hRef, { once: true });
  const { unlock } = useFees();

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.course) { alert('Please fill all required fields.'); return; }
    const text = `🎓 *New Enquiry – Sunshine Institute*\n\n👤 *Name:* ${form.name}\n📱 *Phone:* ${form.phone}\n📚 *Course:* ${form.course}\n` +
      (form.msg ? `💬 *Message:* ${form.msg}\n` : '') + `\n_Sent from the Sunshine Institute website_`;
    window.open(`https://wa.me/919810994450?text=${encodeURIComponent(text)}`, '_blank');
    unlock();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', phone: '', course: '', msg: '' }); }, 4000);
  };

  return (
    <section id="contact" style={{ position: 'relative', padding: '96px 24px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 85% 50%, rgba(37,99,235,0.18) 0%, transparent 55%), radial-gradient(ellipse at 15% 15%, rgba(109,40,217,0.14) 0%, transparent 50%), #060d1a' }} />

      <div ref={hRef} style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={hInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 18px', borderRadius: 999, color: '#93c5fd', fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            ✉️ Get in Touch
          </span>
          <h2 className="font-poppins" style={{ fontWeight: 900, fontSize: 'clamp(30px,4vw,50px)', color: '#fff', marginBottom: 14 }}>
            Ready to <span className="gradient-text">Enroll?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 480, margin: '0 auto', lineHeight: 1.8 }}>
            Fill the form — your enquiry lands directly on our WhatsApp. We respond instantly!
          </p>
          <div style={{ width: 52, height: 4, borderRadius: 2, background: 'linear-gradient(90deg,#2563eb,#7c3aed)', margin: '20px auto 0' }} />
        </motion.div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 48, alignItems: 'start' }}>

          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={hInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }}>
            <h3 className="font-poppins" style={{ fontWeight: 800, color: '#fff', fontSize: 26, marginBottom: 10 }}>Contact Details</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, marginBottom: 28, lineHeight: 1.8 }}>Have questions about courses, fees, or batch timings? We're always happy to help.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {CT_ITEMS.map((c, i) => (
                <a key={i} href={c.href} target={c.external ? '_blank' : undefined} rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 16, textDecoration: 'none', transition: 'all 0.3s',
                    background: c.green ? 'rgba(37,211,102,0.08)' : 'rgba(255,255,255,0.06)',
                    border: c.green ? '1px solid rgba(37,211,102,0.25)' : '1px solid rgba(255,255,255,0.1)',
                  }}>
                  <div style={{ width: 46, height: 46, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0,
                    background: c.green ? 'rgba(37,211,102,0.18)' : 'rgba(37,99,235,0.25)',
                    color: c.green ? '#4ade80' : '#93c5fd' }}>
                    {c.icon}
                  </div>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{c.label}</p>
                    <p style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{c.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={hInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.2 }}
            style={{ background: '#fff', borderRadius: 24, padding: 40, boxShadow: '0 32px 80px rgba(0,0,0,0.45)' }}>
            <h3 className="font-poppins" style={{ fontWeight: 800, color: '#0f172a', fontSize: 20, marginBottom: 6 }}>Send an Enquiry</h3>
            <p style={{ color: '#64748b', fontSize: 14, marginBottom: 26 }}>Your details will be sent to us on WhatsApp instantly.</p>

            <form onSubmit={onSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                {[{ name: 'name', label: 'Full Name *', placeholder: 'Your full name', type: 'text' },
                  { name: 'phone', label: 'Phone *', placeholder: '10-digit number', type: 'tel' }].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: 1 }}>{f.label}</label>
                    <input name={f.name} type={f.type} value={form[f.name]} onChange={onChange} required placeholder={f.placeholder} style={INPUT_STYLE}
                      onFocus={e => { e.target.style.borderColor = '#2563eb'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)'; }}
                      onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; }} />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 14 }}>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: 1 }}>Select Course *</label>
                <select name="course" value={form.course} onChange={onChange} required style={INPUT_STYLE}
                  onFocus={e => { e.target.style.borderColor = '#2563eb'; }}
                  onBlur={e => { e.target.style.borderColor = '#e2e8f0'; }}>
                  <option value="">-- Choose a Course --</option>
                  {Object.entries(ALL_COURSES).map(([grp, opts]) => (
                    <optgroup key={grp} label={grp}>
                      {opts.map(o => <option key={o}>{o}</option>)}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#475569', marginBottom: 7, textTransform: 'uppercase', letterSpacing: 1 }}>Message (Optional)</label>
                <textarea name="msg" value={form.msg} onChange={onChange} rows={3} placeholder="Any questions, preferred batch timing..."
                  style={{ ...INPUT_STYLE, resize: 'vertical', minHeight: 90 }}
                  onFocus={e => { e.target.style.borderColor = '#2563eb'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; }} />
              </div>

              <button type="submit"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '15px', borderRadius: 13, border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 700, fontFamily: 'Inter, sans-serif', transition: 'all 0.3s',
                  background: sent ? '#16a34a' : 'linear-gradient(135deg,#2563eb,#7c3aed)', color: '#fff',
                  boxShadow: '0 8px 24px rgba(37,99,235,0.3)' }}>
                {sent ? '✅ Enquiry Sent!' : <><FaWhatsapp size={20} /> Send Enquiry via WhatsApp</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
