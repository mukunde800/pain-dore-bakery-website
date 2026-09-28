import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brun text-creme py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-3">🥖 Pain-Doré</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Boulangerie artisanale — tradition et savoir-faire transmis depuis 1985.
            Chaque jour, nos pains sont pétris à la main et cuits au four à bois.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Horaires</h4>
          <ul className="text-sm opacity-80 space-y-1">
            <li>Lun – Ven : 6h30 – 20h</li>
            <li>Samedi : 7h – 20h</li>
            <li>Dimanche : 7h – 13h</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <ul className="text-sm opacity-80 space-y-1">
            <li>📍 12 rue du Four, 75011 Paris</li>
            <li>📞 01 23 45 67 89</li>
            <li>✉️ contact@pain-dore.fr</li>
          </ul>
          <div className="mt-4">
            <Link
              to="/contact"
              className="text-dore hover:text-white underline underline-offset-4"
            >
              Nous contacter →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-creme/20 mt-10 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Pain-Doré — Tous droits réservés
      </div>
    </footer>
  );
}