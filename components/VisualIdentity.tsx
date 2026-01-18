import React from 'react';
import { motion } from 'framer-motion';

const VisualIdentity: React.FC = () => {
  return (
    <section className="py-32 bg-medical-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header - Editorial Style */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
           <div>
              <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-6">
                <span className="w-8 h-px bg-brand-orange"></span>
                Identidade Visual
              </span>
              <h2 className="font-serif font-medium text-4xl md:text-6xl text-navy tracking-tight leading-[1.1]">
                Rigor Clínico &<br />Design Premium
              </h2>
           </div>
           <div className="flex md:justify-end">
              <p className="font-sans text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-md">
                Cada detalhe da embalagem comunica a promessa da marca: transparência, eficácia e sofisticação silenciosa.
              </p>
           </div>
        </div>

        {/* Technical Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Product Hero - Spans 8 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 bg-[#E5E5E5] rounded-3xl overflow-hidden relative min-h-[500px] group"
          >
             <div className="absolute top-8 left-8 z-10">
                <span className="bg-navy text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                   Frasco 30ml
                </span>
             </div>
             <img 
               src="/assets/frasco-identidade.jpg"
               alt="Francis Life Bottle Detail"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
          </motion.div>

          {/* Specs Column - Spans 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Spec Card 1: Typography */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="bg-white p-8 rounded-3xl border border-stone-200 flex-1 flex flex-col justify-center"
            >
               <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4 block">Tipografia</span>
               <div className="space-y-4">
                  <div>
                    <p className="font-serif text-3xl text-navy">Raleway</p>
                    <p className="text-xs text-stone-500 mt-1">Headlines & Conceitos</p>
                  </div>
                  <div className="h-px bg-stone-100 w-full"></div>
                  <div>
                    <p className="font-sans text-2xl text-navy font-light">Inter</p>
                    <p className="text-xs text-stone-500 mt-1">Dados Técnicos & Bulas</p>
                  </div>
               </div>
            </motion.div>

            {/* Spec Card 2: Materiality */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="bg-navy p-8 rounded-3xl flex-1 flex flex-col justify-center text-white"
            >
               <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-6 block">Acabamentos</span>
               <ul className="space-y-4 font-light text-sm md:text-base">
                  <li className="flex justify-between items-center border-b border-white/10 pb-2">
                     <span>Material do Frasco</span>
                     <span className="text-white/60">Vidro</span>
                  </li>
                  <li className="flex justify-between items-center pt-1">
                     <span>Aplicador</span>
                     <span className="text-white/60">Conta-gotas Preciso</span>
                  </li>
               </ul>
            </motion.div>

          </div>

          {/* Bottom Full Width - The Family */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="lg:col-span-12 bg-white rounded-3xl p-8 md:p-12 border border-stone-200 mt-4"
          >
             <div className="flex flex-col gap-8 items-start">
                <div className="max-w-2xl">
                   <h3 className="font-serif text-3xl text-navy mb-4">Sistema Cromático</h3>
                   <p className="font-sans text-stone-600 text-sm leading-relaxed mb-8">
                      A identidade utiliza cores funcionais para guiar o uso. Tons específicos que comunicam a função e o momento do protocolo.
                   </p>
                </div>
                
                {/* Color Palette Grid */}
                <div className="flex flex-wrap gap-6 md:gap-12">
                   <div className="flex flex-col gap-3 group cursor-pointer">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-inner border border-stone-100 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: '#D96B21' }}></div>
                      <div className="text-center">
                         <span className="block text-xs font-bold uppercase tracking-wider text-navy">Dia</span>
                         <span className="text-[10px] text-stone-400 font-mono">#D96B21</span>
                      </div>
                   </div>

                   <div className="flex flex-col gap-3 group cursor-pointer">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-inner border border-stone-100 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: '#1B3558' }}></div>
                      <div className="text-center">
                         <span className="block text-xs font-bold uppercase tracking-wider text-navy">Noite</span>
                         <span className="text-[10px] text-stone-400 font-mono">#1B3558</span>
                      </div>
                   </div>

                   <div className="flex flex-col gap-3 group cursor-pointer">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-inner border border-stone-100 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: '#256958' }}></div>
                      <div className="text-center">
                         <span className="block text-xs font-bold uppercase tracking-wider text-navy">Acne</span>
                         <span className="text-[10px] text-stone-400 font-mono">#256958</span>
                      </div>
                   </div>

                   <div className="flex flex-col gap-3 group cursor-pointer">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-inner border border-stone-100 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: '#7A3558' }}></div>
                      <div className="text-center">
                         <span className="block text-xs font-bold uppercase tracking-wider text-navy">Melasma</span>
                         <span className="text-[10px] text-stone-400 font-mono">#7A3558</span>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisualIdentity;