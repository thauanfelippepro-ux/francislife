import React from 'react';
import { motion } from 'framer-motion';

const Essence: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "Seguro",
      mainText: "Formulações desenvolvidas para uso contínuo, sem promessas irreais.",
      subText: "O essencial, com alto padrão de segurança."
    },
    {
      number: "02",
      title: "Dermatológico",
      mainText: "Linguagem clínica moderna e seleção precisa de ativos.",
      subText: "Desenvolvido para resultados visíveis com uso correto e consistente."
    },
    {
      number: "03",
      title: "Contínuo",
      mainText: "A pele não responde a excessos.",
      subText: "Responde à constância e ao respeito ao seu tempo biológico."
    }
  ];

  return (
    <section className="pt-12 pb-32 px-6 md:px-12 bg-medical-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="md:w-1/3"
           >
             <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-6">
                <span className="w-8 h-px bg-brand-orange"></span>
                Base Estratégica
             </span>
             <h2 className="font-serif text-4xl md:text-5xl text-navy tracking-tight leading-tight">
               Fundamentos do<br />Protocolo
             </h2>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="md:w-1/3"
           >
             <p className="font-sans text-lg md:text-xl text-navy font-light leading-relaxed">
               A linha Francis Life Skin Protocol foi desenvolvida para atuar nos momentos certos do cuidado facial.
             </p>
           </motion.div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-stone-300">
           {pillars.map((pillar, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className={`
                  group py-12 md:py-16 pr-8 pl-4 flex flex-col justify-between min-h-[300px] hover:bg-white/50 transition-colors duration-500
                  border-b md:border-b-0 border-stone-300
                  ${idx !== 0 ? 'md:border-l md:pl-12' : 'md:pl-8'}
                `}
             >
                <div>
                  <span className="block font-mono text-xs text-stone-500 mb-8 font-medium">
                    ({pillar.number})
                  </span>
                  <h3 className="font-serif text-3xl text-navy mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-navy text-lg leading-relaxed mb-4 font-normal">
                    {pillar.mainText}
                  </p>
                </div>
                
                {/* Secondary Content Area */}
                <div className="mt-8 w-full">
                  {/* Animated Line - Separated from text flow */}
                  <div className="h-px bg-brand-orange w-12 group-hover:w-full transition-all duration-700 ease-out mb-6"></div>
                  
                  {/* Text - Always full width, just fading in/out */}
                  <p className="font-sans text-sm text-stone-600 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {pillar.subText}
                  </p>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Essence;