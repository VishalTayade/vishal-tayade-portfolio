import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import MagneticButton from './MagneticButton';
import { profile } from '../data/resume';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Scene3D />

      <div className="relative z-10 section-pad w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="eyebrow mb-6"
          >
            {profile.location} · Available for opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="heading text-5xl md:text-6xl lg:text-7xl mb-6 gradient-text"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted font-light mb-4"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-sm md:text-base text-muted/90 leading-relaxed max-w-xl mb-10"
          >
            3.5 years building Java / Spring Boot REST APIs in a microservices
            insurance platform, plus strong frontend expertise in React.js and
            Angular — full end-to-end ownership of features.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              variant="primary"
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MagneticButton>
            <MagneticButton
              href="/Vishal_Tayade_FullStack_Developer.pdf"
              download
              variant="ghost"
            >
              Download Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* glow */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-accent/25 via-accent2/15 to-transparent blur-3xl" />
            {/* portrait frame */}
            <div className="relative w-64 h-80 md:w-80 md:h-[26rem] rounded-[2rem] overflow-hidden glass shadow-card">
              <img
                src="/profile.jpg"
                alt="Portrait of Vishal Tayade"
                className="w-full h-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent" />
              {/* corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-ink/20 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-ink/20 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-ink/20 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-ink/20 rounded-br-lg" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-ink/40 to-transparent" />
      </motion.div>
    </section>
  );
}