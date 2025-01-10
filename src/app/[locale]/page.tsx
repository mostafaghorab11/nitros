import Hero from '@/components/Hero';
import RateCalculator from '@/components/RateCalculator';

export default function Home() {
  return (
    <main className="flex flex-col gap-2.5">
      <Hero />
      <RateCalculator />
    </main>
  );
}
