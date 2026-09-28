import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-chocolat-900/70" />

      <div className="relative z-10 text-white px-4 max-w-3xl">
        <span className="inline-block bg-rouge-600 text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          Artisan depuis 1985
        </span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
          Le pain, notre passion
        </h1>
        <p className="text-xl mb-8 text-chocolat-100">
          Pétri à la main, cuit au four à bois, doré à souhait.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/produits"
            className="bg-rouge-600 hover:bg-rouge-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Découvrir nos produits
          </Link>
          <Link
            to="/contact"
            className="bg-bleu-600 hover:bg-bleu-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}