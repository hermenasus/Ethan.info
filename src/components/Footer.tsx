/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, Mail, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0A0A0A] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif italic text-white mb-10">{t('footer.ready')}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <a
            href="https://www.zaih.com/falcon/mentors/2bllbjjbq3k"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-3 bg-gold text-black px-10 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1"
          >
            <MessageSquare size={16} />
            <span>{t('footer.book')}</span>
          </a>
          <a
            href="mailto:ethan.wozai@gmail.com"
            className="flex items-center space-x-3 bg-transparent text-white/50 px-10 py-4 font-bold text-[10px] uppercase tracking-widest hover:text-white border border-white/10 hover:border-white transition-all"
          >
            <Mail size={16} />
            <span>{t('footer.collab')}</span>
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-white/20 text-[9px] uppercase tracking-[0.3em]">
          <p>© 2026 ETHAN CHEN. {t('footer.rights')}</p>
          <div className="flex items-center space-x-8 mt-6 md:mt-0">
            <a href="https://www.linkedin.com/in/ethanqchen/" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
            <a 
              href="https://www.zaih.com/falcon/mentors/2bllbjjbq3k" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-1 hover:text-gold transition-colors"
            >
              <span>{t('footer.zaih')}</span>
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
