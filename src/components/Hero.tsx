/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { HERO_DATA } from '../data';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onLearnMore: () => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm border border-gold/30 text-gold text-[10px] uppercase tracking-widest mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold"></span>
              </span>
              <span>{t('hero.status')}</span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-serif italic text-white tracking-tight leading-[1.1] mb-8">
              {t('hero.name')}
            </h1>
            <p className="text-xs text-gold uppercase tracking-[0.15em] mb-8 font-bold">
              {t('hero.title')}
            </p>
            <p className="text-sm text-white/50 leading-relaxed max-w-xl mb-10">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gold text-black px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all transform hover:-translate-y-1">
                {t('hero.book')}
              </button>
              <button 
                onClick={onLearnMore}
                className="bg-transparent text-white/50 border border-white/10 px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:border-white hover:text-white transition-all"
              >
                {t('hero.learnMore')}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-white/10 relative z-10 grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src={HERO_DATA.image}
                alt={HERO_DATA.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
