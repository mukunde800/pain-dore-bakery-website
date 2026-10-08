import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSent(false);

    // Timeout de sécurité : si le serveur ne répond pas en 15s, on abandonne
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: form.nom,
          email: form.email,
          subject: form.sujet,
          message: form.message,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setSent(true);
      setForm({ nom: '', email: '', sujet: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      clearTimeout(timeoutId);
      console.error("Erreur envoi formulaire :", err);

      // 🎯 Messages d'erreur clairs selon le type d'erreur
      let message = "Erreur réseau. Réessayez plus tard.";

      if (err.name === "AbortError") {
        message = "Le serveur met trop de temps à répondre. Réessayez.";
      } else if (err.message === "Failed to fetch") {
        message = `Impossible de contacter le serveur (${API_URL}). Vérifie que le backend est bien démarré.`;
      } else if (err.message) {
        message = err.message;
      }

      setError(message);
      setTimeout(() => setError(''), 7000);
    } finally {
      setLoading(false);
    }
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

          {error && (
            <div className="bg-rouge-600 text-white p-3 rounded-lg mb-4 text-sm">
              ❌ {error}
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
                Sujet <span className="text-chocolat-400">(optionnel)</span>
              </label>
              <input
                type="text"
                name="sujet"
                value={form.sujet}
                onChange={handleChange}
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
              disabled={loading}
              className="w-full bg-rouge-600 hover:bg-rouge-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-full transition"
            >
              {loading ? 'Envoi en cours…' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}