import Hero from '@/components/Hero';
import RateCalculator from '@/components/RateCalculator';

export default function Home() {
  return (
    <main className="py-4 sm:p-5">
      <Hero />
      <RateCalculator />
    </main>
  );
}
