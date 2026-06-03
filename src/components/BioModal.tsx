/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, User, Target, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BioModal({ isOpen, onClose }: BioModalProps) {
  const { t } = useTranslation();

  const areas = t('about.areas.items', { returnObjects: true }) as string[];
  const highlights = t('about.highlights.items', { returnObjects: true }) as string[];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[85vh] bg-[#111] border border-white/10 rounded-sm overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#111] z-10">
              <div>
                <h2 className="text-2xl font-serif italic text-white">{t('about.title')}</h2>
                <p className="text-[10px] text-gold uppercase tracking-[.2em] mt-1">{t('about.subtitle')}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-white/50 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-12">
              {/* Statement */}
              <section className="space-y-4">
                <div className="flex items-center space-x-3 text-gold">
                  <User size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{t('about.statement')}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed italic border-l-2 border-gold/20 pl-6 py-2">
                  {t('about.statement')}
                </p>
              </section>

              {/* Areas */}
              <section className="space-y-6">
                <div className="flex items-center space-x-3 text-gold">
                  <Target size={18} />
                  <h3 className="text-xs font-bold uppercase tracking-widest">{t('about.areas.title')}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {areas.map((item, index) => (
                    <div key={index} className="flex space-x-3 p-4 bg-white/5 border border-white/5 rounded-sm">
                      <div className="mt-1 text-gold flex-shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <p className="text-white/60 text-xs leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Highlights */}
              <section className="space-y-6">
                <div className="flex items-center space-x-3 text-gold">
                  <User size={18} />
                  <h3 className="text-xs font-bold uppercase tracking-widest">{t('about.highlights.title')}</h3>
                </div>
                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex space-x-4 group">
                      <span className="text-gold/30 font-mono text-[10px] py-1">0{index + 1}</span>
                      <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Style */}
              <section className="p-8 bg-gold/5 border border-gold/10 rounded-sm space-y-4">
                <div className="flex items-center space-x-3 text-gold">
                  <MessageSquare size={18} />
                  <h3 className="text-xs font-bold uppercase tracking-widest">{t('about.style.title')}</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t('about.style.content')}
                </p>
              </section>
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-white/5 flex justify-end">
              <button 
                onClick={onClose}
                className="px-6 py-2 text-[10px] uppercase font-bold tracking-widest bg-white text-black hover:bg-gold transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
