import { motion } from 'framer-motion';
import { profile } from '../data/resume';

const cards = [
  {
    title: 'Background',
    body: 'Full Stack Developer with 3.5 years of experience across backend and frontend systems, delivering Java and Spring Boot REST APIs within a microservices architecture.',
  },
  {
    title: 'Professional Focus',
    body: 'Insurance-domain platform work at Hover Technologies — policy, claims, premium, quote, and onboarding services — plus React.js / Angular frontend ownership.',
  },
  {
    title: 'Key Strengths',
    body: 'Designing and building new microservices, maintaining existing ones, service-to-service communication with Docker & Kubernetes, and PostgreSQL schema/query design.',
  },
  {
    title: 'How I Work',
    body: 'Works independently in Agile / Scrum teams, collaborating across frontend, backend, QA, and product. Comfortable using AI-assisted tools (Claude Code, GitHub Copilot, Cursor).',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="eyebrow mb-4"
      >
        01 · About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="heading mb-14 max-w-3xl"
      >
        Building reliable systems, end&nbsp;to&nbsp;end.
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-5">
        {cards.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass glass-hover p-7 md:p-9"
          >
            <h3 className="text-ink text-lg font-medium mb-3 font-display">
              {c.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">{c.body}</p>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted"
      >
        <span>📍 {profile.location}</span>
        <a href={`mailto:${profile.email}`} className="hover:text-ink focus-ring">
          ✉️ {profile.email}
        </a>
        <a href={`tel:${profile.phone}`} className="hover:text-ink focus-ring">
          ☎ {profile.phone}
        </a>
      </motion.div>
    </section>
  );
}