import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';

export default function FeaturedProducts() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-chocolat-800 mb-3">
          Nos incontournables
        </h2>
        <p className="text-chocolat-500">
          Une sélection de nos spécialités les plus appréciées
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/produits"
          className="inline-block bg-bleu-600 hover:bg-bleu-700 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          Voir tous les produits
        </Link>
      </div>
    </section>
  );
}