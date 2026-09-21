import { profile } from '../data/resume';

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-8 px-6 md:px-12 bg-white/40 backdrop-blur">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Three.js & Tailwind.
        </p>
        <p className="tracking-wider">{profile.location}</p>
      </div>
    </footer>
  );
}