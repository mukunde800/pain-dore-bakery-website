export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex justify-center flex-wrap gap-3 mb-10">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
            active === c
              ? 'bg-dore text-white shadow-md'
              : 'bg-white text-brun hover:bg-pain/20'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}