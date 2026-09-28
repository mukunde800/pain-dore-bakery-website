import { Link } from 'react-router-dom';

export default function AboutPreview() {
  return (
    <section className="bg-chocolat-50 py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800"
          alt="Notre boulangerie"
          className="rounded-2xl shadow-lg w-full h-80 object-cover"
        />

        <div>
          <span className="text-rouge-600 font-semibold uppercase text-sm tracking-wider">
            Notre histoire
          </span>
          <h2 className="text-4xl font-serif font-bold text-chocolat-800 mt-2 mb-4">
            Un savoir-faire familial
          </h2>
          <p className="text-chocolat-700 mb-4">
            Depuis trois générations, la famille Doré perpétue la tradition
            boulangère française. Chaque pain est pétri à la main, chaque
            viennoiserie préparée avec du beurre AOP.
          </p>
          <p className="text-chocolat-700 mb-6">
            Notre four à bois, installé en 1985, donne à nos produits cette
            croûte dorée et ce goût authentique qui fait notre renommée.
          </p>

          <Link
            to="/a-propos"
            className="inline-block bg-rouge-600 hover:bg-rouge-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}