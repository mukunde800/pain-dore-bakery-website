import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-chocolat-900 text-white pt-12 pb-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-serif font-bold mb-3 text-white">🥖 Pain-Doré</h3>
          <p className="text-sm text-chocolat-200">
            Boulangerie artisanale — tradition et savoir-faire depuis 1985.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">Navigation</h4>
          <ul className="text-sm text-chocolat-200 space-y-1">
            <li><Link to="/" className="hover:text-rouge-500">Accueil</Link></li>
            <li><Link to="/produits" className="hover:text-rouge-500">Nos Produits</Link></li>
            <li><Link to="/a-propos" className="hover:text-rouge-500">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-rouge-500">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">Horaires</h4>
          <ul className="text-sm text-chocolat-200 space-y-1">
            <li>Lun – Ven : 6h30 – 20h</li>
            <li>Samedi : 7h – 20h</li>
            <li>Dimanche : 7h – 13h</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">Contact</h4>
          <ul className="text-sm text-chocolat-200 space-y-1">
            <li>📍 12 rue du Four, 75011 Paris</li>
            <li>📞 01 23 45 67 89</li>
            <li>✉️ contact@pain-dore.fr</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-chocolat-700 mt-8 pt-6 text-center">
        <p className="text-xs text-chocolat-300">
          © {new Date().getFullYear()} Pain-Doré — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}