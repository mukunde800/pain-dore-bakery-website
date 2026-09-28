import { Link } from 'react-router-dom';

export default function About() {
  const valeurs = [
    {
      icon: '🌾',
      title: 'Farines locales',
      desc: 'Nous travaillons avec des moulins de la région Île-de-France.',
    },
    {
      icon: '👐',
      title: 'Fait main',
      desc: 'Pétrissage et façonnage manuels pour chaque produit.',
    },
    {
      icon: '🔥',
      title: 'Four à bois',
      desc: 'Cuisson traditionnelle pour une croûte incomparable.',
    },
    {
      icon: '❤️',
      title: 'Passion',
      desc: 'Trois générations au service du bon pain.',
    },
  ];

  return (
    <>
      {/* Hero de page */}
      <section className="bg-chocolat-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">À propos</h1>
          <p className="text-chocolat-100 text-lg">
            L'histoire d'une famille passionnée par le pain depuis 1985
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
          alt="Notre boulangerie"
          className="rounded-2xl shadow-lg w-full h-96 object-cover"
        />
        <div>
          <span className="text-rouge-600 font-semibold uppercase text-sm tracking-wider">
            Notre histoire
          </span>
          <h2 className="text-4xl font-serif font-bold text-chocolat-800 mt-2 mb-4">
            Une tradition familiale
          </h2>
          <p className="text-chocolat-700 mb-4">
            Tout a commencé en 1985, lorsque Marcel Doré a ouvert sa première
            boulangerie rue du Four, à Paris. Avec sa femme Suzanne, ils ont
            bâti une réputation sur une seule règle : la qualité avant tout.
          </p>
          <p className="text-chocolat-700 mb-4">
            Aujourd'hui, c'est leur petit-fils Antoine qui perpétue le
            savoir-faire familial, entouré d'une équipe de 8 boulangers
            passionnés.
          </p>
          <p className="text-chocolat-700">
            Chaque jour, plus de 500 pains sortent de notre four à bois,
            pétris à la main et cuits avec le même amour qu'au premier jour.
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-chocolat-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-chocolat-800 mb-12">
            Nos valeurs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map(v => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-serif font-bold text-chocolat-800 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-chocolat-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-chocolat-800 mb-4">
            Venez nous rendre visite
          </h2>
          <p className="text-chocolat-600 mb-6">
            Notre boutique vous accueille du lundi au dimanche, au cœur du
            11ᵉ arrondissement de Paris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-rouge-600 hover:bg-rouge-700 text-white font-semibold px-8 py-3 rounded-full transition"
            >
              Nous contacter
            </Link>
            <Link
              to="/produits"
              className="bg-bleu-600 hover:bg-bleu-700 text-white font-semibold px-8 py-3 rounded-full transition"
            >
              Voir nos produits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}