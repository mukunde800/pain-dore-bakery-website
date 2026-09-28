import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux brancher Formspree / EmailJS
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const infos = [
    {
      icon: '📍',
      title: 'Nous trouver',
      content: (
        <>
          12 rue du Four
          <br />
          75011 Paris, France
        </>
      ),
    },
    {
      icon: '📞',
      title: 'Nous appeler',
      content: (
        <a href="tel:0123456789" className="hover:text-bleu transition-colors">
          01 23 45 67 89
        </a>
      ),
    },
    {
      icon: '✉️',
      title: 'Nous écrire',
      content: (
        <a
          href="mailto:contact@pain-dore.fr"
          className="hover:text-bleu transition-colors"
        >
          contact@pain-dore.fr
        </a>
      ),
    },
    {
      icon: '🕒',
      title: 'Horaires',
      content: (
        <ul className="space-y-1 text-sm">
          <li>Lun – Ven : 6h30 – 20h</li>
          <li>Samedi : 7h – 20h</li>
          <li>Dimanche : 7h – 13h</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <SectionTitle
        subtitle="Une question, une commande spéciale ?"
        title="Contactez-nous"
      />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Infos */}
        <div className="space-y-6">
          {infos.map((info) => (
            <Card key={info.title} className="p-6">
              <h3 className="font-serif font-bold text-chocolat-700 text-xl mb-4">
                <span className="mr-2">{info.icon}</span>
                {info.title}
              </h3>
              <div className="text-chocolat-500">{info.content}</div>
            </Card>
          ))}
        </div>

        {/* Formulaire */}
        <Card className="p-8">
          <h3 className="font-serif font-bold text-chocolat-700 text-xl mb-6">
            Envoyez-nous un message
          </h3>

          {sent ? (
            <div className="bg-chocolat-50 border border-bleu rounded-xl p-6 text-center">
              <p className="text-3xl mb-3">✅</p>
              <p className="text-chocolat-700 font-semibold">
                Merci ! Votre message a bien été envoyé.
              </p>
              <p className="text-sm text-chocolat-500 mt-2">
                Nous vous répondrons dans les plus brefs délais.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-rouge underline text-sm hover:text-rouge-dark transition-colors"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-chocolat-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-chocolat-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu focus:border-bleu"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-chocolat-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-chocolat-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu focus:border-bleu"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-chocolat-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-chocolat-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu focus:border-bleu resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <Button type="submit" variant="rouge" className="w-full">
                Envoyer le message
              </Button>
            </form>
          )}
        </Card>
      </div>

      {/* Carte - EN DEHORS de la grid pour ne pas casser la mise en page */}
      <div className="mt-12 rounded-2xl overflow-hidden shadow-lg border border-chocolat-100">
        <iframe
          title="Localisation Pain-Doré"
          src="https://www.openstreetmap.org/export/embed.html?bbox=2.36%2C48.85%2C2.39%2C48.87&layer=mapnik"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}