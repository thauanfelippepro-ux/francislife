import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const Protocol: React.FC = () => {
  return (
    <section className="py-24 bg-medical-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Clean Editorial Style */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
           <div>
              <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-6">
                <span className="w-8 h-px bg-brand-orange"></span>
                Cronobiologia
              </span>
              <h2 className="font-serif font-medium text-4xl md:text-6xl text-navy tracking-tight leading-[1.1]">
                A Ciência do Tempo
              </h2>
           </div>
           <div className="flex md:justify-end">
              <p className="font-sans text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-md">
                Protocolos de cuidado desenvolvidos para atuar em sintonia com o ciclo circadiano da pele.
              </p>
           </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Day Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-4xl overflow-hidden border border-stone-200 flex flex-col"
          >
             {/* Image Area */}
             <div className="h-[320px] relative overflow-hidden">
                <div className="absolute top-8 left-8 z-20 bg-white/90 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                   <Sun className="w-4 h-4 text-brand-orange" />
                   <span className="text-xs font-bold uppercase tracking-widest text-navy">Ciclo Diurno</span>
                </div>
                <img 
                  src="/assets/concept-dia.jpg" 
                  alt="Day Protocol" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
             </div>
             
             {/* Content Area */}
             <div className="p-10 flex-1 flex flex-col justify-center">
                <span className="text-brand-orange font-mono text-xs mb-4 block">06:00 — 18:00</span>
                <h3 className="text-3xl font-serif text-navy mb-6">Proteção & Preparação</h3>
                <p className="text-navy/80 text-lg leading-relaxed mb-4 font-light">
                   Defesa antioxidante para enfrentar as agressões diárias do ambiente.
                </p>
                <div className="h-px w-full bg-stone-100 my-4"></div>
                <p className="text-stone-500 text-sm leading-relaxed">
                   O sérum diurno atua preparando a pele, reforçando sua integridade e estabilidade ao longo do dia.
                </p>
             </div>
          </motion.div>

          {/* Night Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-navy rounded-4xl overflow-hidden text-white flex flex-col border border-navy"
          >
             {/* Image Area */}
             <div className="h-[320px] relative overflow-hidden">
                <div className="absolute inset-0 bg-navy/20 z-10 mix-blend-multiply"></div>
                <div className="absolute top-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                   <Moon className="w-4 h-4 text-white" />
                   <span className="text-xs font-bold uppercase tracking-widest text-white">Ciclo Noturno</span>
                </div>
                <img 
                  src="/assets/concept-noite.jpg" 
                  alt="Night Protocol" 
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
             </div>

             {/* Content Area */}
             <div className="p-10 flex-1 flex flex-col justify-center">
                <span className="text-stone-400 font-mono text-xs mb-4 block">18:00 — 06:00</span>
                <h3 className="text-3xl font-serif text-white mb-6">Regeneração & Reparo</h3>
                <p className="text-stone-200 text-lg leading-relaxed mb-4 font-light">
                   Atuar enquanto a pele entra em seu processo natural de recuperação.
                </p>
                <div className="h-px w-full bg-white/10 my-4"></div>
                <p className="text-stone-400 text-sm leading-relaxed">
                   Uma fórmula orientada à regeneração cutânea e ao suporte da renovação celular noturna.
                </p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Protocol;