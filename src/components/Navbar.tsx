/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.expertise'), href: '#expertise' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.reviews'), href: '#reviews' },
    { name: t('nav.media'), href: '#media' },
  ];

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'zh-CN', name: '简' },
    { code: 'zh-HK', name: '繁' },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-white uppercase">
              ETHAN <span className="text-gold">CHEN</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/50 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-white/10 mx-2"></div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-[10px] text-white/30 font-bold tracking-widest">
                <Globe size={12} />
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`${
                      i18n.language.startsWith(lang.code.split('-')[0]) ? 'text-gold' : 'hover:text-white'
                    } transition-colors`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>

              <a
                href="https://www.zaih.com/falcon/mentors/2bllbjjbq3k"
                target="_blank"
                rel="noreferrer"
                className="border border-gold text-gold px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-gold hover:text-black transition-all"
              >
                {t('nav.book')}
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/50 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <div className="px-3 py-4 flex items-center space-x-4 text-xs font-bold tracking-widest text-white/50 border-t border-white/5 mt-4">
            <Globe size={14} />
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`${
                  i18n.language.startsWith(lang.code.split('-')[0]) ? 'text-gold' : 'hover:text-white'
                } transition-colors`}
              >
                {lang.name}
              </button>
            ))}
          </div>

          <a
            href="https://www.zaih.com/falcon/mentors/2bllbjjbq3k"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center mt-4 border border-gold text-gold py-4 rounded-lg font-bold text-[10px] uppercase tracking-widest"
          >
            {t('nav.book')}
          </a>
        </motion.div>
      )}
    </nav>
  );
}
