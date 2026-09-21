import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const sections = [
  'home',
  'about',
  'experience',
  'projects',
  'skills',
  'education',
  'contact',
] as const;

export default function Navbar() {
  const [active, setActive] = useState<string>('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      obs.disconnect();
    };
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'top-3' : 'top-6'
      }`}
    >
      <nav
        className="glass px-2 py-1.5 flex items-center gap-1 shadow-card"
        aria-label="Primary"
      >
        <ul className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <li key={s}>
              <button
                onClick={() => go(s)}
                className={`px-3.5 py-2 text-[11px] uppercase tracking-[0.18em] rounded-full transition-colors focus-ring ${
                  active === s
                    ? 'text-ink bg-ink/[0.06]'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden p-2 text-ink/80 focus-ring"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-[1.5px] bg-ink transition-transform ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] bg-ink transition-opacity ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] bg-ink transition-transform ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-2 glass p-2 flex flex-col"
          >
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => go(s)}
                className="text-left px-4 py-3 text-sm uppercase tracking-[0.18em] text-muted hover:text-ink focus-ring"
              >
                {s}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}