import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Minus, Plus } from 'lucide-react';

const concepts = [
  {
    id: 'calmo',
    title: 'Calmo',
    description: 'Sem gritos visuais. Uma presença que se nota pela ausência de ruído. A beleza não precisa de excesso.',
    color: 'bg-stone-200', 
  },
  {
    id: 'preciso',
    title: 'Preciso',
    description: 'Cada detalhe tem um porquê. A intersecção absoluta entre a ciência dermatológica e a estética do design.',
    color: 'bg-stone-300',
  },
  {
    id: 'confiante',
    title: 'Confiante',
    description: 'Não precisa prometer milagres para ser relevante. Entrega realidade, constância e segurança técnica.',
    color: 'bg-stone-200', 
  }
];

const Concept: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile to isolate interaction logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    // Increased pb-12 to pb-24 to provide buffer for the last expanded item
    <section className="pt-32 pb-24 bg-medical-50 relative">
      
      {/* Background Container: Handles overflow for blobs/effects without clipping text content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 transition-colors duration-1000 ease-in-out bg-medical-50" />
        <AnimatePresence>
          {activeId && (
            <motion.div
              key={activeId}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[120px] rounded-full mix-blend-multiply opacity-20 z-0
                ${concepts.find(c => c.id === activeId)?.color || 'bg-stone-200'}
              `}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Removed h-full to allow container to stretch with content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        
        {/* Left Column */}
        <div className="md:w-1/3 md:sticky md:top-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-8">
              <span className="w-8 h-px bg-brand-orange"></span>
              Conceito-Mãe
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy tracking-tight leading-[0.95] mb-6">
              Silenciosa<br/>mente<br />
              <span className="italic font-light text-stone-500">Premium</span>.
            </h2>
            <p className="font-sans text-navy text-sm md:text-base leading-relaxed max-w-xs font-light">
              Uma abordagem clínica que remove o desnecessário para revelar o essencial. O luxo está na precisão.
            </p>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="md:w-2/3 w-full flex flex-col">
          {concepts.map((concept, index) => (
            <motion.div
              layout // Allows container to stretch
              key={concept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              // Desktop: Hover behavior
              onHoverStart={() => !isMobile && setActiveId(concept.id)}
              onHoverEnd={() => !isMobile && setActiveId(null)}
              // Mobile: Click behavior (Toggle)
              onClick={() => isMobile && setActiveId(activeId === concept.id ? null : concept.id)}
              className={`
                group border-t border-stone-300 py-10 md:py-16 cursor-pointer relative transition-all duration-500
                ${activeId === concept.id ? 'z-20' : 'z-10'}
              `}
            >
              <motion.div layout="position" className="flex items-baseline justify-between gap-4">
                <div className="flex items-center gap-6 md:gap-12">
                   <span className="text-sm font-mono text-stone-500 font-medium">0{index + 1}</span>
                   <h3 className={`font-serif text-4xl md:text-5xl transition-colors duration-300 ${activeId === concept.id ? 'text-brand-orange' : 'text-navy group-hover:text-stone-600'}`}>
                    {concept.title}
                   </h3>
                </div>
                
                {/* Icon Indicator */}
                <motion.div 
                  animate={{ rotate: activeId === concept.id ? 90 : 0 }}
                  className="text-stone-400 group-hover:text-brand-orange transition-colors"
                >
                  {activeId === concept.id ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </motion.div>
              </motion.div>

              {/* Expandable Content */}
              <AnimatePresence>
                {activeId === concept.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 pl-10 md:pl-20 flex flex-col md:flex-row gap-8 items-start pb-4">
                      
                      {/* Abstract Visual Shape */}
                      <div className="w-12 h-12 shrink-0 rounded-full bg-brand-orange flex items-center justify-center shadow-lg shadow-orange-500/20">
                         <ArrowDownRight className="text-white w-5 h-5" />
                      </div>

                      <p className="font-sans text-lg text-navy leading-relaxed max-w-md font-normal">
                        {concept.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t border-stone-300 w-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Concept;