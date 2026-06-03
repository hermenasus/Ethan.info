/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { REVIEWS_ALL } from '../data/reviews-data';
import ReviewCard from './ReviewCard';

const CATEGORIES = ['all', 'bp', 'ops', 'career', 'interview'] as const;
type Category = typeof CATEGORIES[number];

export default function Testimonials() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredReviews = selectedCategory === 'all' 
    ? REVIEWS_ALL 
    : REVIEWS_ALL.filter(r => r.topic === selectedCategory);

  return (
    <section id="reviews" className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-bold text-gold tracking-[0.2em] uppercase mb-4">{t('reviews.title')}</h2>
            <p className="text-4xl font-serif italic text-white tracking-tight">{t('reviews.subtitle')}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold mb-2">{t('reviews.badges.count')}</p>
            <a 
              href="https://www.zaih.com/falcon/mentors/2bllbjjbq3k" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[10px] text-gold uppercase tracking-[0.1em] hover:text-white transition-colors border-b border-gold/30 pb-0.5"
            >
              {t('reviews.badges.verify')}
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 text-[10px] uppercase font-bold tracking-[0.2em] transition-all border ${
                selectedCategory === cat 
                  ? 'bg-gold text-black border-gold' 
                  : 'text-white/40 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat === 'all' ? t('actions.all', '全部评价') : t(`expertise.${cat}.title`)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review, index) => (
              <ReviewCard key={review.user + index} review={review} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
