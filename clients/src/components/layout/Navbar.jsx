import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/',          label: 'Accueil' },
    { to: '/produits',  label: 'Nos Produits' },
    { to: '/a-propos',  label: 'À propos' },
    { to: '/contact',   label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-md border-b border-chocolat-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-serif font-bold text-chocolat-700">
          <span className="text-3xl">🥖</span>
          <span>Pain-Doré</span>
        </Link>

        <ul className="hidden md:flex gap-8 items-center">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? 'text-rouge border-b-2 border-rouge pb-1'
                      : 'text-chocolat-700 hover:text-bleu'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-3xl text-chocolat-700"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-2 border-t border-chocolat-100">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 font-medium ${
                    isActive ? 'text-rouge' : 'text-chocolat-700'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}