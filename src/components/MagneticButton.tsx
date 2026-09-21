import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  download?: boolean;
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  download,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });
  const tx = useTransform(sx, (v) => v * 0.3);
  const ty = useTransform(sy, (v) => v * 0.3);

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-colors focus-ring';
  const styles =
    variant === 'primary'
      ? 'bg-ink text-white hover:bg-ink/90 shadow-card'
      : 'glass text-ink hover:bg-white';

  const Comp: any = href ? motion.a : motion.button;

  return (
    <Comp
      ref={ref as any}
      href={href}
      download={download}
      onClick={onClick}
      aria-label={ariaLabel}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`${base} ${styles}`}
      style={{ x: tx, y: ty }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </Comp>
  );
}