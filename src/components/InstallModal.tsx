import React, { useState } from 'react';
import { X, Smartphone, Apple, CheckCircle2, ArrowRight, DownloadCloud } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activePlatform, setActivePlatform] = useState<'android' | 'ios' | 'desktop'>('android');
  const APP_URL = "https://pg-eg-web.vercel.app";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#141722] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#2dc653]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#2dc653]/15 border border-[#2dc653]/30 flex items-center justify-center text-[#2dc653]">
            <DownloadCloud className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">Install PG-EG (PGEG) App</h3>
            <p className="text-xs text-gray-400 font-medium">Lightweight Progressive Web App (under 2MB)</p>
          </div>
        </div>

        {/* Main Launch Button */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-[#2dc653]/20 via-[#1a9e3f]/10 to-transparent border border-[#2dc653]/30 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#2dc653] uppercase tracking-wider">Fastest Way</div>
            <div className="text-sm font-bold text-white">Open the App &amp; Tap Install</div>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#2dc653] text-black font-extrabold text-xs flex items-center gap-1.5 shadow-md hover:bg-[#25a845] transition-all"
          >
            <span>Open PWA</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Platform Selector Tabs */}
        <div className="grid grid-cols-3 gap-2 p-1 rounded-2xl bg-[#0c0e14] border border-white/5 mb-5">
          <button
            onClick={() => setActivePlatform('android')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activePlatform === 'android' ? 'bg-[#2dc653] text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Android</span>
          </button>

          <button
            onClick={() => setActivePlatform('ios')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activePlatform === 'ios' ? 'bg-[#2dc653] text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Apple className="w-3.5 h-3.5" />
            <span>iPhone</span>
          </button>

          <button
            onClick={() => setActivePlatform('desktop')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activePlatform === 'desktop' ? 'bg-[#2dc653] text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>PC / Mac</span>
          </button>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-3 mb-6 text-sm text-gray-300">
          {activePlatform === 'android' && (
            <>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                <span className="w-6 h-6 rounded-full bg-[#2dc653]/20 text-[#2dc653] font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <div>Open <strong>{APP_URL}</strong> in Google Chrome.</div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                <span className="w-6 h-6 rounded-full bg-[#2dc653]/20 text-[#2dc653] font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <div>A prompt will appear: <strong>&quot;Install PG-EG&quot;</strong>. Tap <strong>Install</strong>.</div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                <span className="w-6 h-6 rounded-full bg-[#2dc653]/20 text-[#2dc653] font-bold text-xs flex items-center justify-center shrink-0">3</span>
                <div>If not prompted, tap Chrome&apos;s <strong>3-dots menu</strong> (⋮) &rarr; tap <strong>&quot;Add to Home Screen&quot;</strong>.</div>
              </div>
            </>
          )}

          {activePlatform === 'ios' && (
            <>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                <span className="w-6 h-6 rounded-full bg-[#2dc653]/20 text-[#2dc653] font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <div>Open <strong>{APP_URL}</strong> in <strong>Safari browser</strong>.</div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                <span className="w-6 h-6 rounded-full bg-[#2dc653]/20 text-[#2dc653] font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <div>Tap the <strong>Share</strong> button (box with an arrow pointing up ⎋) at the bottom.</div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                <span className="w-6 h-6 rounded-full bg-[#2dc653]/20 text-[#2dc653] font-bold text-xs flex items-center justify-center shrink-0">3</span>
                <div>Scroll down and select <strong>&quot;Add to Home Screen&quot; (⊞)</strong>. Done!</div>
              </div>
            </>
          )}

          {activePlatform === 'desktop' && (
            <>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                <span className="w-6 h-6 rounded-full bg-[#2dc653]/20 text-[#2dc653] font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <div>Visit <strong>{APP_URL}</strong> in Chrome or Edge on your PC or Mac.</div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                <span className="w-6 h-6 rounded-full bg-[#2dc653]/20 text-[#2dc653] font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <div>Look for the <strong>Install Icon</strong> in the browser address bar (top right).</div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                <span className="w-6 h-6 rounded-full bg-[#2dc653]/20 text-[#2dc653] font-bold text-xs flex items-center justify-center shrink-0">3</span>
                <div>Click <strong>Install</strong> to add PG-EG to your desktop dock or taskbar.</div>
              </div>
            </>
          )}
        </div>

        {/* Benefits bullets */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-y-2 gap-x-4 text-xs font-semibold text-gray-400">
          <span className="flex items-center gap-1 text-[#2dc653]">
            <CheckCircle2 className="w-3.5 h-3.5" /> No App Store login needed
          </span>
          <span className="flex items-center gap-1 text-[#2dc653]">
            <CheckCircle2 className="w-3.5 h-3.5" /> Takes only 1.8 MB
          </span>
          <span className="flex items-center gap-1 text-[#2dc653]">
            <CheckCircle2 className="w-3.5 h-3.5" /> Works fast on any network
          </span>
        </div>

      </div>
    </div>
  );
};
