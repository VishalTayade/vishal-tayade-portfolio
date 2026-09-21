import { motion } from 'framer-motion';
import { skillGroups } from '../data/resume';

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-4"
      >
        04 · Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading mb-16 max-w-3xl"
      >
        Tools I work with.
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="glass glass-hover p-6"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">
              {g.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full bg-ink/[0.04] border border-hairline text-ink/80 hover:bg-ink/[0.08] hover:border-ink/20 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}