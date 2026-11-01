import React, { useState } from 'react';
import { Smartphone, ExternalLink, Menu, X } from 'lucide-react';

interface Props {
  onOpenInstall: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenInstall }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const APP_URL = "https://pg-eg-web.vercel.app";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0d13]/80 border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/pg-eg-logo.png"
            alt="PG-EG PGEG Logo"
            className="w-10 h-10 object-contain rounded-xl shadow-md transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-tight text-white group-hover:text-[#2dc653] transition-colors">
                PG-EG
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#2dc653]/15 text-[#2dc653] font-bold border border-[#2dc653]/30">
                PGEG
              </span>
            </div>
            <span className="text-[10px] text-gray-400 font-medium tracking-wide">
              BANGALORE'S SMART PG FINDER
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
          <a href="#features" className="hover:text-[#2dc653] transition-colors">Features</a>
          <a href="#for-owners" className="hover:text-[#2dc653] transition-colors">For PG Owners</a>
          <a href="#localities" className="hover:text-[#2dc653] transition-colors">Bangalore Hubs</a>
          <a href="#faq" className="hover:text-[#2dc653] transition-colors">FAQ</a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenInstall}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#2dc653]/40 bg-[#2dc653]/10 text-[#2dc653] text-sm font-bold hover:bg-[#2dc653]/20 transition-all cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>Install App</span>
          </button>

          <a
            href={`${APP_URL}/find-pg`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1a9e3f] to-[#2dc653] text-black font-extrabold text-sm shadow-lg shadow-[#2dc653]/20 hover:shadow-[#2dc653]/40 hover:-translate-y-0.5 transition-all"
          >
            <span>Launch Web App</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#12151f] border-b border-white/10 space-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-300 font-medium hover:text-[#2dc653]"
          >
            Features
          </a>
          <a
            href="#for-owners"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-300 font-medium hover:text-[#2dc653]"
          >
            For PG Owners
          </a>
          <a
            href="#localities"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-300 font-medium hover:text-[#2dc653]"
          >
            Bangalore Hubs
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenInstall(); }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#2dc653]/40 bg-[#2dc653]/10 text-[#2dc653] font-bold text-sm"
            >
              <Smartphone className="w-4 h-4" />
              <span>Install PWA App</span>
            </button>
            <a
              href={`${APP_URL}/find-pg`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2dc653] text-black font-extrabold text-sm"
            >
              <span>Launch Web App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
