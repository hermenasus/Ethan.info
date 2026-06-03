/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { MEDIA_DATA } from '../data';
import { useState } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <section id="media" className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-20">
          <div className="max-w-3xl">
            <h2 className="text-[10px] font-bold text-gold tracking-[0.2em] uppercase mb-4">{t('media.title')}</h2>
            <p className="text-4xl font-serif italic text-white tracking-tight">{t('media.subtitle')}</p>
          </div>
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">{t('media.gallery')} 01-0{MEDIA_DATA.length}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEDIA_DATA.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer border border-white/5"
              onClick={() => setSelectedImage(item.url)}
            >
              <img
                src={item.url}
                alt={t(`media.captions.${item.id}`)}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-px bg-gold mb-4 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                <p className="text-white font-medium text-sm tracking-widest uppercase">{t(`media.captions.${item.id}`)}</p>
                <div className="w-12 h-px bg-gold mt-4 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-4 md:p-10"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain shadow-2xl border border-white/10"
              alt="Preview"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
