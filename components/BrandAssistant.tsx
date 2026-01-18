import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { askBrandStrategist } from '../services/geminiService';

const BrandAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    const answer = await askBrandStrategist(query);
    setResponse(answer);
    setLoading(false);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-navy text-white p-4 rounded-full shadow-2xl hover:bg-navy-light transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        <Sparkles className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-full max-w-md z-50 px-4 sm:px-0"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-navy p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sage" />
                  <h3 className="font-serif font-medium">Strategist AI</h3>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-gray-50 min-h-[200px] max-h-[400px] overflow-y-auto">
                {!response && !loading && (
                  <p className="text-stone-dark text-sm leading-relaxed">
                    Olá. Sou o assistente de estratégia da Francis Life. Tem alguma dúvida sobre o conceito, tom de voz ou posicionamento dos séruns?
                  </p>
                )}

                {loading && (
                  <div className="flex items-center gap-2 text-navy text-sm">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                    Analisando estratégia...
                  </div>
                )}

                {response && (
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                     <p className="text-navy text-sm leading-relaxed font-medium font-serif italic">
                      "{response}"
                    </p>
                  </div>
                )}
              </div>

              <form onSubmit={handleAsk} className="p-4 bg-white border-t border-gray-100 flex gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ex: Por que 'silenciosamente premium'?"
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-navy"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-navy text-white p-2 rounded-lg hover:bg-navy-light disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BrandAssistant;