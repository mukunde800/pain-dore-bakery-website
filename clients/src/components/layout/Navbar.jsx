import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/produits', label: 'Nos Produits' },
    { to: '/a-propos', label: 'À propos' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b-2 border-chocolat-700">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-chocolat-800 flex items-center gap-2">
          🥖 <span>Pain-Doré</span>
        </Link>

        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `font-medium transition-colors pb-1 ${
                    isActive
                      ? 'text-rouge-600 border-b-2 border-rouge-600'
                      : 'text-chocolat-800 hover:text-bleu-600'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-block bg-rouge-600 hover:bg-rouge-700 text-white font-semibold px-5 py-2 rounded-full transition"
        >
          Commander
        </Link>

        <button
          className="md:hidden text-2xl text-chocolat-800"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-white border-t border-chocolat-200 px-4 pb-4 space-y-2">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 font-medium ${
                    isActive ? 'text-rouge-600' : 'text-chocolat-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-rouge-600 text-white py-2 rounded-full mt-2"
            >
              Commander
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}