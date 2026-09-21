/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      colors: {
        bg: '#F8FAFC',
        surface: '#FFFFFF',
        ink: '#0F172A',
        muted: '#64748B',
        hairline: 'rgba(15,23,42,0.08)',
        accent: '#0EA5E9',
        accent2: '#6366F1',
      },
      boxShadow: {
        glow: '0 0 60px rgba(14,165,233,0.18)',
        card: '0 8px 32px rgba(15,23,42,0.08)',
        lift: '0 20px 60px rgba(15,23,42,0.10)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};