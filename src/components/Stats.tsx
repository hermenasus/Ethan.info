/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { STATS_DATA } from '../data';
import { useTranslation } from 'react-i18next';

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { label: t('stats.exp'), value: STATS_DATA[0].value },
    { label: t('stats.projects'), value: STATS_DATA[1].value },
    { label: t('stats.rating'), value: STATS_DATA[2].value },
    { label: t('stats.investments'), value: STATS_DATA[3].value },
  ];

  return (
    <div className="bg-[#0A0A0A] py-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <p className="text-5xl font-medium text-white mb-2 tracking-tighter group-hover:text-gold transition-colors">
                {stat.value}
              </p>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
