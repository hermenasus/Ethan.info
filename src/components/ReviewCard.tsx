/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Review } from '../data/reviews-data';

interface ReviewCardProps {
  review: Review;
  index: number;
  key?: string;
}

export default function ReviewCard({ review, index }: ReviewCardProps) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Topic display mapping
  const topicLabel = t(`expertise.${review.topic}.title`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="group"
    >
      <div className="border border-white/5 bg-white/[0.02] p-8 rounded-sm h-full flex flex-col justify-between hover:border-gold/20 transition-all">
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <span className="text-white font-medium text-sm">{review.user}</span>
              <span className="text-gold text-[9px] font-bold uppercase tracking-[0.1em]">
                {review.tag} | {topicLabel}
              </span>
            </div>
            <time className="text-[9px] text-white/20 font-mono tracking-widest">{review.date}</time>
          </div>
          
          <div className="relative">
            <p className={`text-white/60 text-sm leading-[1.7] font-light italic whitespace-pre-wrap transition-all duration-300 ${!isExpanded ? 'line-clamp-4' : ''}`}>
              "{review.content}"
            </p>
            
            {review.content.length > 120 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex items-center space-x-1 text-[9px] text-gold uppercase tracking-[0.2em] font-bold hover:text-white transition-colors"
              >
                {isExpanded ? (
                  <>
                    <span>{t('actions.collapse', '收起')}</span>
                    <ChevronUp size={12} />
                  </>
                ) : (
                  <>
                    <span>{t('actions.expand', '展开全部')}</span>
                    <ChevronDown size={12} />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
