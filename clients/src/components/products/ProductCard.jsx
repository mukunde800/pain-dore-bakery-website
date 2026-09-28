export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 right-3 bg-creme/95 text-brun text-xs font-semibold px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-lg font-serif font-bold text-brun leading-tight">
            {product.name}
          </h3>
          <span className="text-dore font-bold whitespace-nowrap">
            {product.price.toFixed(2)} €
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
}