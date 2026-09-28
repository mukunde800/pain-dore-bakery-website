import Button from '../ui/Button';

export default function AboutPreview() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div
          className="h-80 md:h-96 rounded-2xl bg-cover bg-center shadow-xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1595475207225-428b62bda831?w=800')",
          }}
        />

        <div>
          <p className="text-dore font-semibold tracking-widest uppercase mb-3 text-sm">
            Notre histoire
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brun mb-5">
            Un savoir-faire familial
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Depuis trois générations, la famille Doré perpétue la tradition du
            pain artisanal. Notre levain naturel, entretenu depuis 1985, donne
            à nos pains cette saveur unique et cette mie alvéolée.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Chaque jour, nous sélectionnons des farines locales et travaillons
            avec des producteurs de notre région pour vous offrir le meilleur
            de l'artisanat français.
          </p>
          <Button to="/a-propos" variant="primary">
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  );
}