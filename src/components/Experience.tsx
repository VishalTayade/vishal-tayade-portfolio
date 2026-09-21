import { motion } from 'framer-motion';
import { experience } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-4"
      >
        02 · Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading mb-16"
      >
        Where I&apos;ve shipped.
      </motion.h2>

      <div className="relative">
        <div className="absolute left-3 md:left-4 top-2 bottom-2 w-[1px] bg-gradient-to-b from-accent/50 via-ink/10 to-transparent" />

        <ul className="space-y-12">
          {experience.map((job, i) => (
            <motion.li
              key={job.company + job.dates}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="relative pl-12 md:pl-16"
            >
              <span className="absolute left-[9px] md:left-[13px] top-2 w-3 h-3 rounded-full bg-accent shadow-glow" />

              <div className="glass p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-ink text-xl font-medium font-display">
                    {job.role}
                  </h3>
                  <span className="text-xs text-muted tracking-wider">
                    {job.dates}
                  </span>
                </div>
                <p className="text-accent text-sm mb-1 font-medium">{job.company}</p>
                {job.context && (
                  <p className="text-muted text-sm mb-4 italic">{job.context}</p>
                )}

                <ul className="space-y-2.5 mt-4">
                  {job.points.map((p, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-ink/75 leading-relaxed flex gap-3"
                    >
                      <span className="text-accent mt-1 select-none">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-ink/[0.04] border border-hairline text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}