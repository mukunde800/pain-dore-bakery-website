import Button from '../ui/Button';

export default function Hero() {
  return (
    <section
      className="relative h-[85vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 text-white px-4 max-w-3xl">
        <p className="text-dore font-semibold tracking-widest uppercase mb-4 text-sm">
          Boulangerie artisanale depuis 1985
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Le pain, notre passion
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Pétri à la main, cuit au four à bois — retrouvez le goût authentique
          du pain traditionnel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/produits" variant="primary">
            Découvrir nos produits
          </Button>
          <Button to="/a-propos" variant="outline" className="border-white text-white hover:bg-white hover:text-brun">
            Notre histoire
          </Button>
        </div>
      </div>
    </section>
  );
}