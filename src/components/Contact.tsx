import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { profile } from '../data/resume';

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: '✉' },
  { label: 'LinkedIn', value: 'linkedin.com/in/vishal-tayade', href: profile.linkedin, icon: 'in' },
  { label: 'GitHub', value: 'github.com/VishalTayade', href: profile.github, icon: '{ }' },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, icon: '☎' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad pb-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-4"
      >
        07 · Contact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading mb-6 max-w-3xl"
      >
        Let&apos;s build something meaningful.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-muted max-w-xl mb-12"
      >
        Open to full-stack roles and conversations about backend,
        microservices, and frontend engineering.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass glass-hover p-6 group focus-ring"
          >
            <div className="text-accent text-lg mb-4 font-mono">{l.icon}</div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted mb-1">
              {l.label}
            </p>
            <p className="text-sm text-ink/85 group-hover:text-ink break-all">
              {l.value}
            </p>
          </motion.a>
        ))}
      </div>

      <MagneticButton
        href="/Vishal_Tayade_FullStack_Developer.pdf"
        download
        variant="primary"
      >
        Download Resume
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
        </svg>
      </MagneticButton>
    </section>
  );
}