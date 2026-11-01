import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PersonaSection } from './components/PersonaSection';
import { BangaloreHotspots } from './components/BangaloreHotspots';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { InstallModal } from './components/InstallModal';

export function App() {
  const [installModalOpen, setInstallModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0d13] text-gray-100 flex flex-col font-sans selection:bg-[#2dc653] selection:text-black">
      <Navbar onOpenInstall={() => setInstallModalOpen(true)} />
      
      <main className="flex-grow">
        <Hero onOpenInstall={() => setInstallModalOpen(true)} />
        <Features />
        <PersonaSection />
        <BangaloreHotspots />
        <FaqSection />
      </main>

      <Footer onOpenInstall={() => setInstallModalOpen(true)} />

      {/* PWA 1-Tap Install Modal */}
      <InstallModal
        isOpen={installModalOpen}
        onClose={() => setInstallModalOpen(false)}
      />
    </div>
  );
}

export default App;
