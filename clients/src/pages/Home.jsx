import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutPreview from '../components/home/AboutPreview';
import OpeningHours from '../components/home/OpeningHours';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutPreview />
      <OpeningHours />
    </>
  );
}