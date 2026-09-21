import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('js-ready');
  }, []);

  return (
    <>
      {/* Ambient background gradients */}
      <div
        aria-hidden
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 15% 10%, rgba(14,165,233,0.10), transparent 45%),' +
            'radial-gradient(circle at 85% 90%, rgba(99,102,241,0.08), transparent 45%)',
        }}
      />
      {/* faint grid overlay */}
      <div
        aria-hidden
        className="fixed inset-0 -z-20 pointer-events-none opacity-[0.5] bg-grid-faint"
        style={{ backgroundSize: '64px 64px' }}
      />

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ink focus:text-white rounded"
      >
        Skip to content
      </a>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}