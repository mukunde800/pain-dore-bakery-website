import { useState } from 'react';
import CategoryFilter from '../components/products/CategoryFilter';
import ProductGrid from '../components/products/ProductGrid';
import { products, categories } from '../data/products';

export default function Products() {
  const [active, setActive] = useState('Tous');

  const filtered =
    active === 'Tous' ? products : products.filter(p => p.category === active);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold text-chocolat-800 mb-3">
          Nos Produits
        </h1>
        <p className="text-chocolat-500">
          Découvrez toutes nos créations artisanales, préparées chaque jour
        </p>
      </div>

      <CategoryFilter
        categories={categories}
        active={active}
        onChange={setActive}
      />

      <ProductGrid products={filtered} />
    </section>
  );
}