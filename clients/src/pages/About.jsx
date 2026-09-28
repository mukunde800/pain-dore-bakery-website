import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const values = [
  {
    icon: '🌾',
    title: 'Farines locales',
    text: 'Nous travaillons avec des moulins de la région Île-de-France.',
  },
  {
    icon: '👐',
    title: 'Fait main',
    text: 'Chaque pain est pétri et façonné à la main, sans exception.',
  },
  {
    icon: '🔥',
    title: 'Four à bois',
    text: 'Une cuisson traditionnelle qui donne ce goût incomparable.',
  },
  {
    icon: '🌱',
    title: 'Levain naturel',
    text: 'Notre levain est entretenu avec passion depuis 1985.',
  },
];

export default function About() {
  return (
    <>
      <section className="bg-brun text-creme py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-dore font-semibold tracking-widest uppercase mb-3 text-sm">
            À propos
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-5">
            Trois générations de boulangers
          </h1>
          <p className="text-lg opacity-90 leading-relaxed">
            De grand-père en petit-fils, la passion du pain se transmet dans la
            famille Doré. Découvrez notre histoire et nos engagements.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div
          className="h-80 md:h-[500px] rounded-2xl bg-cover bg-center shadow-xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800')",
          }}
        />
        <div>
          <h2 className="text-3xl font-serif font-bold text-brun mb-5">
            Notre histoire
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            En 1985, <strong>Jean Doré</strong> ouvre sa première boulangerie
            rue du Four, à Paris. Avec sa femme Marie, ils bâtissent
            patiemment une réputation fondée sur la qualité et l'authenticité.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            En 2005, leur fils <strong>Pierre</strong> reprend le flambeau et
            modernise le fournil tout en conservant les recettes familiales.
            Aujourd'hui, c'est <strong>Lucas</strong>, la troisième génération,
            qui perpétue ce savoir-faire avec la même exigence.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Notre levain naturel, né en 1985, est toujours vivant et donne à
            nos pains cette saveur unique que nos clients reconnaissent entre
            mille.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle
            title="Nos engagements"
            subtitle="Ce qui fait la différence dans chaque bouchée."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="text-lg font-serif font-bold text-brun mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-600">{v.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-serif font-bold text-brun mb-5">
          Venez nous rencontrer
        </h2>
        <p className="text-gray-600 mb-8">
          La meilleure façon de découvrir notre boulangerie, c'est de pousser
          la porte et de sentir l'odeur du pain chaud.
        </p>
        <Button to="/contact" variant="primary">
          Nous contacter
        </Button>
      </section>
    </>
  );
}