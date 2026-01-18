import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { ArrowRight, CheckCircle2, Clock, Sparkles, ChevronRight } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0]);

  // All current brand colors (Orange, Navy, Deep Green, Plum) are saturated/dark enough to require white text for accessibility and premium feel.
  const isDark = true;
  
  const textColorClass = isDark ? 'text-white' : 'text-navy';
  const subtitleColorClass = isDark ? 'text-white/70' : 'text-stone-500';
  const borderColorClass = isDark ? 'border-white/10' : 'border-stone-200';
  
  const handleNext = () => {
    const currentIndex = PRODUCTS.findIndex(p => p.id === activeProduct.id);
    const nextIndex = (currentIndex + 1) % PRODUCTS.length;
    setActiveProduct(PRODUCTS[nextIndex]);
  };

  return (
    <section className="min-h-screen bg-medical-50 py-16 md:py-24 px-6 md:px-12 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-8 items-stretch h-full">
        
        {/* Navigation Wrapper */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center lg:sticky lg:top-24 h-fit">
          <div className="mb-6 lg:mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-4 block">
              Catálogo Técnico
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-tight">Os 4 Protocolos</h2>
          </div>
          
          {/* MOBILE NAVIGATION: 2x2 Grid instead of Scroll */}
          <div className="lg:hidden grid grid-cols-2 gap-2 mb-6">
             {PRODUCTS.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product)}
                  className={`
                    flex items-center justify-center px-2 py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full
                    ${activeProduct.id === product.id 
                       ? 'bg-navy text-white shadow-lg' 
                       : 'bg-white text-stone-500 border border-stone-200'}
                  `}
                >
                  {product.name}
                </button>
             ))}
          </div>

          {/* DESKTOP NAVIGATION: Vertical List */}
          <div className="hidden lg:flex flex-col space-y-2">
            {PRODUCTS.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-center justify-between group border ${
                  activeProduct.id === product.id 
                    ? 'border-stone-300 bg-white shadow-lg shadow-stone-100/50 scale-100 lg:scale-105 z-10' 
                    : 'border-transparent hover:bg-white/50 text-stone-600'
                }`}
              >
                <div>
                  <span className={`block font-serif text-base mb-1 tracking-wide ${activeProduct.id === product.id ? 'text-navy font-semibold' : 'text-stone-500'}`}>
                    {product.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400">
                    {product.tagline}
                  </span>
                </div>
                {activeProduct.id === product.id && (
                  <motion.div layoutId="arrow">
                    <ArrowRight className="w-4 h-4 text-brand-orange" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Display */}
        <div className={`w-full lg:w-2/3 relative rounded-3xl overflow-hidden shadow-sm border border-stone-200 transition-colors duration-700 ${activeProduct.color} flex flex-col`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row h-full"
            >
              {/* Image Section */}
              <div className="w-full md:w-5/12 h-56 md:h-auto relative overflow-hidden group">
                 <div className={`absolute inset-0 ${isDark ? 'bg-black/10' : 'bg-white/0'} z-10 pointer-events-none`}></div>
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 4 }}
                  src={activeProduct.image} 
                  alt={activeProduct.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Tags */}
                <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                   <span className={`bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-navy w-fit shadow-sm`}>
                      {activeProduct.mood === 'clinical' ? 'Clinical' : activeProduct.mood === 'soft' ? 'Care' : activeProduct.id === 'day' ? 'Day Use' : 'Night Use'}
                   </span>
                </div>
              </div>

              {/* Content Section */}
              <div className={`w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-center ${textColorClass}`}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="h-full flex flex-col"
                >
                  <div className="mb-6">
                    <h3 className="font-serif text-3xl md:text-4xl mb-2 tracking-tight leading-none">{activeProduct.name}</h3>
                    <p className={`font-sans text-sm md:text-base leading-relaxed font-normal ${subtitleColorClass}`}>
                      {activeProduct.description}
                    </p>
                  </div>
                  
                  {/* Info Grid */}
                  <div className={`grid grid-cols-1 gap-6 border-t ${borderColorClass} pt-6 mt-auto`}>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <h4 className={`text-[10px] uppercase tracking-widest font-bold mb-2 opacity-70`}>Indicação</h4>
                          <p className="text-xs md:text-sm leading-relaxed">{activeProduct.indication}</p>
                       </div>
                       <div>
                          <h4 className={`text-[10px] uppercase tracking-widest font-bold mb-2 opacity-70 flex items-center gap-2`}>
                            <Clock className="w-3 h-3" /> Uso
                          </h4>
                          <p className="text-xs md:text-sm leading-relaxed opacity-90 italic">"{activeProduct.usage}"</p>
                       </div>
                    </div>

                    <div>
                       <h4 className={`text-[10px] uppercase tracking-widest font-bold mb-3 opacity-70 flex items-center gap-2`}>
                         <Sparkles className="w-3 h-3" /> Benefícios Chave
                       </h4>
                       <ul className="grid grid-cols-1 gap-2">
                          {activeProduct.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 opacity-60`} />
                              <span className="opacity-90">{benefit}</span>
                            </li>
                          ))}
                       </ul>
                    </div>

                    {/* MOBILE NEXT BUTTON: Improves Flow */}
                    <button 
                      onClick={handleNext}
                      className={`lg:hidden w-full mt-4 py-3 px-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-between active:scale-95 transition-transform`}
                    >
                      <span className="text-xs font-bold uppercase tracking-widest opacity-90">Próximo Protocolo</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                  </div>
                </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;