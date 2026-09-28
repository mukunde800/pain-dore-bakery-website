export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-chocolat-100 rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif font-bold text-chocolat-800">
            {product.name}
          </h3>
          <span className="text-rouge-600 font-bold whitespace-nowrap">
            {product.price.toFixed(2)} €
          </span>
        </div>
        <p className="text-chocolat-500 text-sm mb-3">{product.description}</p>
        <span className="inline-block bg-chocolat-100 text-chocolat-700 text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>
    </div>
  );
}