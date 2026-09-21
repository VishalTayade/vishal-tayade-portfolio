import { motion } from 'framer-motion';
import { education } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-4"
      >
        05 · Education
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading mb-16"
      >
        Academic background.
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-5">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass glass-hover p-8"
          >
            <p className="text-xs text-muted tracking-widest mb-3">{e.year}</p>
            <h3 className="text-lg md:text-xl text-ink font-display font-light mb-2 leading-snug">
              {e.degree}
            </h3>
            {e.institution && (
              <p className="text-sm text-muted">{e.institution}</p>
            )}
            {e.details && (
              <p className="text-sm text-muted mt-3">{e.details}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}