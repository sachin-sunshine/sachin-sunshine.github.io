import './index.css';
import { FeeProvider } from './context/FeeContext';
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyUs from './components/WhyUs';
import Promo from './components/Promo';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Steps from './components/Steps';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <FeeProvider>
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#060d1a' }}>
      {/* Fixed elements — take no space in normal flow */}
      <Ticker />   {/* fixed top-0, ~36px tall */}
      <Navbar />   {/* fixed, starts at 36px from top */}

      {/* Page content — hero fills 100vh, sections follow */}
      <main>
        <Hero />
        <Stats />
        <WhyUs />
        <Promo />
        <Courses />
        <Gallery />
        <Testimonials />
        <Steps />
        <Location />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
    </FeeProvider>
  );
}
