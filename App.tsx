import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Essence from './components/Essence';
import Protocol from './components/Protocol';
import ProductShowcase from './components/ProductShowcase';
import VisualIdentity from './components/VisualIdentity';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Optional: Scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-medical-50 min-h-screen selection:bg-brand-orange selection:text-white cursor-none">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <Hero />
      <Concept />
      <Essence />
      <Protocol />
      <ProductShowcase />
      <VisualIdentity />
      
      <footer className="mt-24 py-24 bg-[#0F0C09] text-white text-center font-sans border-t border-[#0F0C09] rounded-t-[3rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)]">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <h3 className="font-serif text-4xl md:text-5xl tracking-tight text-white">OBRIGADO!</h3>
          
          <div className="space-y-4 text-sm md:text-base text-stone-300 font-light tracking-wide">
            <p>
              Direção geral: <span className="font-medium text-white">Thauan Felippe</span>
            </p>
            <p>
              Designer: <span className="font-medium text-white">Thauan Felippe</span>
            </p>
          </div>

          <div className="pt-8 border-t border-white/10 w-24 mx-auto"></div>

          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
            Indústria Porto Bianco
          </p>
        </div>
      </footer>
    </main>
  );
};

export default App;