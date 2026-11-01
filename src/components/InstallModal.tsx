import React from 'react';
import { X, Download, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const APP_URL = "https://pg-eg-web.vercel.app";

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-[#131620] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#2dc653]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand App Icon */}
        <div className="relative mx-auto w-20 h-20 mb-5">
          <div className="absolute inset-0 rounded-2xl bg-[#2dc653] blur-lg opacity-40 animate-pulse" />
          <img
            src="/pg-eg-logo.png"
            alt="PG-EG App"
            className="relative w-20 h-20 rounded-2xl object-cover shadow-xl border border-white/10"
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-black text-white tracking-tight">
          Download PG-EG App
        </h3>
        
        <p className="text-sm text-gray-300 mt-2 leading-relaxed">
          Bangalore&apos;s fastest paying guest finder. Installs directly to your home screen in 2 seconds with zero Play Store or App Store hassle.
        </p>

        {/* Direct Download / Install CTA */}
        <div className="my-6">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#1a9e3f] to-[#2dc653] text-black font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-[#2dc653]/30 hover:shadow-[#2dc653]/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Download className="w-5 h-5 stroke-[2.5]" />
            <span>Direct Install &amp; Open PWA</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
          
          <div className="text-[11px] text-gray-400 mt-2 font-medium">
            ⚡ Takes only 1.8 MB · Instant install on phone or PC
          </div>
        </div>

        {/* Feature Badges */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 text-left text-xs font-semibold text-gray-300">
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-4 h-4 text-[#2dc653] shrink-0" />
            <span>Instant home screen shortcut with offline support</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-4 h-4 text-[#2dc653] shrink-0" />
            <span>No email or app store account needed to browse</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-4 h-4 text-[#2dc653] shrink-0" />
            <span>Always up to date with newest Bangalore PG rooms</span>
          </div>
        </div>

        {/* Safari iPhone footnote (one small polite line) */}
        <div className="mt-4 text-[11px] text-gray-400">
          iPhone / iOS users: Open link in Safari &rarr; Tap <strong className="text-gray-300">Share (⎋)</strong> &rarr; <strong className="text-[#2dc653]">Add to Home Screen (⊞)</strong>.
        </div>

      </div>
    </div>
  );
};
