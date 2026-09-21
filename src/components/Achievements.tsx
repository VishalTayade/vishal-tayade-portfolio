import { motion } from 'framer-motion';
import { achievements } from '../data/resume';

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-4"
      >
        06 · Highlights
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading mb-16 max-w-3xl"
      >
        Measurable outcomes.
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.04 }}
            whileHover={{ x: 4 }}
            className="glass glass-hover p-5 flex gap-4 items-start"
          >
            <span className="text-accent mt-1 text-xs select-none">◆</span>
            <p className="text-sm text-ink/75 leading-relaxed">{a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}