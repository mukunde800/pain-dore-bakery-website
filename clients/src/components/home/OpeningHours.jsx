import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

const hours = [
  { day: 'Lundi – Vendredi', time: '6h30 – 20h00' },
  { day: 'Samedi', time: '7h00 – 20h00' },
  { day: 'Dimanche', time: '7h00 – 13h00' },
];

export default function OpeningHours() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <SectionTitle
        title="Horaires d'ouverture"
        subtitle="Venez nous rendre visite, nous vous accueillons toute la semaine."
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {hours.map((h) => (
          <Card key={h.day} className="text-center">
            <p className="text-sm uppercase tracking-wider text-dore font-semibold mb-2">
              {h.day}
            </p>
            <p className="text-2xl font-serif font-bold text-brun">{h.time}</p>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10 text-gray-600">
        <p>
          📍 12 rue du Four, 75011 Paris —{' '}
          <a href="tel:0123456789" className="text-dore hover:underline">
            01 23 45 67 89
          </a>
        </p>
      </div>
    </section>
  );
}