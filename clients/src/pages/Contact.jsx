import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Ici tu peux brancher Formspree / EmailJS
    console.log(form);
    setSent(true);
    setForm({ nom: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-chocolat-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Contact</h1>
          <p className="text-chocolat-100 text-lg">
            Une question ? Une commande spéciale ? Écrivez-nous !
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        {/* Coordonnées */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-chocolat-800 mb-6">
            Nos coordonnées
          </h2>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rouge-600 text-white rounded-full flex items-center justify-center text-xl shrink-0">
                📍
              </div>
              <div>
                <h3 className="font-semibold text-chocolat-800">Adresse</h3>
                <p className="text-chocolat-600">12 rue du Four, 75011 Paris</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-bleu-600 text-white rounded-full flex items-center justify-center text-xl shrink-0">
                📞
              </div>
              <div>
                <h3 className="font-semibold text-chocolat-800">Téléphone</h3>
                <p className="text-chocolat-600">01 23 45 67 89</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rouge-600 text-white rounded-full flex items-center justify-center text-xl shrink-0">
                ✉️
              </div>
              <div>
                <h3 className="font-semibold text-chocolat-800">Email</h3>
                <p className="text-chocolat-600">contact@pain-dore.fr</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-bleu-600 text-white rounded-full flex items-center justify-center text-xl shrink-0">
                🕐
              </div>
              <div>
                <h3 className="font-semibold text-chocolat-800">Horaires</h3>
                <p className="text-chocolat-600">Lun–Ven : 6h30–20h</p>
                <p className="text-chocolat-600">Sam : 7h–20h / Dim : 7h–13h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-chocolat-50 rounded-2xl p-8">
          <h2 className="text-3xl font-serif font-bold text-chocolat-800 mb-6">
            Envoyez-nous un message
          </h2>

          {sent && (
            <div className="bg-bleu-600 text-white p-3 rounded-lg mb-4 text-sm">
              ✅ Merci ! Votre message a bien été envoyé.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-chocolat-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-chocolat-200 focus:border-rouge-500 focus:outline-none bg-white"
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
                className="w-full px-4 py-2 rounded-lg border-2 border-chocolat-200 focus:border-rouge-500 focus:outline-none bg-white"
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
                className="w-full px-4 py-2 rounded-lg border-2 border-chocolat-200 focus:border-rouge-500 focus:outline-none bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rouge-600 hover:bg-rouge-700 text-white font-semibold py-3 rounded-full transition"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}