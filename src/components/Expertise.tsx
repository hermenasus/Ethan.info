/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TrendingUp, Users, Map, UserCheck, BarChart3, Layout } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TOPICS_DATA } from '../data';

const icons: Record<string, any> = {
  TrendingUp: TrendingUp,
  Users: Users,
  Map: Map,
  UserCheck: UserCheck,
  BarChart3: BarChart3,
  Layout: Layout,
};

interface ExpertiseProps {
  onLearnMore: () => void;
}

export default function Expertise({ onLearnMore }: ExpertiseProps) {
  const { t } = useTranslation();

  const topics = TOPICS_DATA.map(topic => ({
    ...topic,
    title: t(`expertise.${topic.id}.title`),
    description: t(`expertise.${topic.id}.desc`)
  }));

  return (
    <section id="expertise" className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-[10px] font-bold text-gold tracking-[0.2em] uppercase mb-4">{t('expertise.title')}</h2>
          <p className="text-4xl font-serif italic text-white tracking-tight">{t('expertise.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {topics.map((topic, index) => {
            const IconComponent = icons[topic.icon || 'TrendingUp'] || TrendingUp;
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={onLearnMore}
                className="group relative p-12 bg-[#0A0A0A] hover:bg-white/[0.02] transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-gold/5 group-hover:text-gold/10 transition-colors">
                  <IconComponent size={100} />
                </div>
                <div className="mb-6 text-gold group-hover:scale-110 transition-transform">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4 tracking-tight group-hover:text-gold transition-colors">{topic.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  {topic.description}
                </p>
                <div className="mt-8 flex items-center text-[10px] uppercase tracking-widest font-bold text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{t('expertise.learnMore')}</span>
                  <span className="ml-2">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={onLearnMore}
            className="px-12 py-4 border border-gold/30 text-gold text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-gold hover:text-black transition-all"
          >
            {t('expertise.learnMore')}
          </button>
        </div>
      </div>
    </section>
  );
}
