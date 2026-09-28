import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <SectionTitle
        title="Nos incontournables"
        subtitle="Une sélection de nos meilleures créations, préparées chaque matin."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/produits"
          className="inline-block text-dore font-semibold border-b-2 border-dore hover:text-pain hover:border-pain transition-colors pb-1"
        >
          Voir tous nos produits →
        </Link>
      </div>
    </section>
  );
}