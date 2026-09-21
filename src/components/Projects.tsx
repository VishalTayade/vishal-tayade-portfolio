import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/resume';

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="section-pad">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-4"
      >
        03 · Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading mb-16 max-w-3xl"
      >
        Selected work.
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            className={`glass glass-hover p-7 md:p-9 relative overflow-hidden ${
              i === 0 ? 'md:col-span-2' : ''
            }`}
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium">
                {p.company}
              </p>
              <span className="text-xs text-muted">{p.dates}</span>
            </div>

            <h3 className="text-xl md:text-2xl text-ink font-display font-light mb-2 leading-snug">
              {p.name}
            </h3>
            <p className="text-sm text-muted mb-4">{p.role}</p>

            <p className="text-sm text-ink/75 leading-relaxed mb-5">{p.summary}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-ink/[0.04] border border-hairline text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="text-xs uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors focus-ring"
              aria-expanded={openIdx === i}
            >
              {openIdx === i ? 'Hide details —' : 'Read more +'}
            </button>

            <AnimatePresence initial={false}>
              {openIdx === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-muted leading-relaxed pt-4 border-t border-hairline mt-5">
                    {p.details}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </section>
  );
}