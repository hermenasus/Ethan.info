/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();

  const experiences = t('experience.items', { returnObjects: true }) as any[];

  return (
    <section id="experience" className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-[10px] font-bold text-gold tracking-[0.2em] uppercase mb-4">{t('experience.title')}</h2>
              <p className="text-4xl font-serif italic text-white tracking-tight leading-tight whitespace-pre-line">
                {t('experience.subtitle')}
              </p>
              <div className="w-12 h-px bg-gold/50 my-8"></div>
              <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                {t('experience.desc')}
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-12 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative flex gap-8 p-10 border border-white/5 hover:border-gold/20 hover:bg-white/[0.02] transition-all"
              >
                <span className="text-gold font-serif italic text-2xl opacity-40 group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </span>
                <div>
                  <span className="text-[10px] text-white/30 font-bold tracking-[0.2em] mb-2 block uppercase">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-medium text-white mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-gold uppercase tracking-widest mb-4">{exp.role}</p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
