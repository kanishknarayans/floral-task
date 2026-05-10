import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendyPlants from './components/TrendyPlants';
import BestO2 from './components/BestO2';
import TopSelling from './components/TopSelling';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <TrendyPlants />
        <BestO2 />
        <TopSelling />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
