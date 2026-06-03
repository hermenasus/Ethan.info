/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import MediaGallery from './components/MediaGallery';
import Footer from './components/Footer';
import BioModal from './components/BioModal';
import { useState } from 'react';

export default function App() {
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans selection:bg-gold/30 selection:text-white">
      <Navbar />
      <main>
        <Hero onLearnMore={() => setIsBioModalOpen(true)} />
        <Stats />
        <Expertise onLearnMore={() => setIsBioModalOpen(true)} />
        <Experience />
        <Testimonials />
        <MediaGallery />
      </main>
      <Footer />
      <BioModal isOpen={isBioModalOpen} onClose={() => setIsBioModalOpen(false)} />
    </div>
  );
}

