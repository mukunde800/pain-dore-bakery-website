const horaires = [
  { jour: 'Lundi – Vendredi', heures: '6h30 – 20h00' },
  { jour: 'Samedi', heures: '7h00 – 20h00' },
  { jour: 'Dimanche', heures: '7h00 – 13h00' },
];

export default function OpeningHours() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white border-2 border-chocolat-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-serif font-bold text-chocolat-800 mb-6 text-center">
            🕐 Horaires d'ouverture
          </h2>
          <ul className="divide-y divide-chocolat-100">
            {horaires.map(h => (
              <li key={h.jour} className="flex justify-between py-3">
                <span className="font-medium text-chocolat-700">{h.jour}</span>
                <span className="text-bleu-600 font-semibold">{h.heures}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}