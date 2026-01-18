import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = 'hidden';

    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // Adjust speed here (approx 2.5s total)

    // Complete after animation + slight buffer
    const completeTimeout = setTimeout(() => {
      onComplete();
      document.body.style.overflow = 'unset';
    }, 3500);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimeout);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[99999] bg-[#EEEEEE] flex flex-col items-center justify-center px-6"
    >
      <div className="max-w-md w-full flex flex-col items-center text-center">
        
        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange block mb-2">
            Projeto de Identidade
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-navy tracking-tight leading-none">
            Francis Life
          </h1>
        </motion.div>

        {/* Separator / Progress Bar Container */}
        <div className="w-full h-px bg-stone-300 relative overflow-hidden mb-8 max-w-[200px]">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-navy w-full"
            initial={{ x: '-100%' }}
            animate={{ x: `${progress - 100}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-2"
        >
          <p className="font-serif text-xl md:text-2xl text-navy italic">
            "Foi uma honra criar para você."
          </p>
          <p className="font-sans text-xs md:text-sm text-stone-500 font-light tracking-wide uppercase">
            Obrigado pela confiança e parceria
          </p>
        </motion.div>

        {/* Percentage (Optional, adds technical feel) */}
        <motion.div 
            className="absolute bottom-12 right-12 font-mono text-xs text-stone-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {progress}%
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Preloader;