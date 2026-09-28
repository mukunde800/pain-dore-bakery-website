export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex justify-center flex-wrap gap-3 mb-10">
      {categories.map(c => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-5 py-2 rounded-full font-medium transition border-2 ${
            active === c
              ? 'bg-bleu-600 border-bleu-600 text-white'
              : 'bg-white border-chocolat-200 text-chocolat-700 hover:border-rouge-500 hover:text-rouge-600'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}