import { useState } from 'react';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/products';

export default function Products() {
  const categories = ['Tous', 'Pains', 'Viennoiseries', 'Pâtisseries'];
  const [active, setActive] = useState('Tous');

  const filtered = active === 'Tous'
    ? products
    : products.filter(p => p.category === active);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold text-center text-brun mb-8">
        Nos Produits
      </h1>

      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              active === c
                ? 'bg-dore text-white'
                : 'bg-white text-brun hover:bg-pain/20'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}