import React from 'react';
import { Smartphone, ExternalLink, Heart } from 'lucide-react';

interface Props {
  onOpenInstall: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenInstall }) => {
  const APP_URL = "https://pg-eg-web.vercel.app";

  return (
    <footer className="bg-[#080a0f] border-t border-white/5 pt-16 pb-12 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/pg-eg-logo.png" alt="PG-EG PGEG" className="w-10 h-10 object-contain rounded-xl" />
              <div>
                <span className="text-xl font-black text-white">PG-EG</span>
                <span className="text-xs ml-2 px-2 py-0.5 rounded-full bg-[#2dc653]/15 text-[#2dc653] font-bold">PGEG</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Bangalore&apos;s smart PG accommodation finder &amp; 3D digital property management platform. Connect directly with owners with zero brokerage.
            </p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={onOpenInstall}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-white/10"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#2dc653]" />
                <span>Install PWA</span>
              </button>
              <a
                href={`${APP_URL}/find-pg`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#2dc653] text-black font-extrabold text-xs flex items-center gap-1.5 hover:bg-[#25a845]"
              >
                <span>Launch App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</div>
            <ul className="space-y-2 text-xs">
              <li><a href={`${APP_URL}/find-pg`} className="hover:text-[#2dc653]">Find PGs Near Me</a></li>
              <li><a href={`${APP_URL}/bangalore`} className="hover:text-[#2dc653]">Bangalore Directory</a></li>
              <li><a href={`${APP_URL}/add-pg/pg-details?new=true`} className="hover:text-[#2dc653]">Register Your PG</a></li>
              <li><a href={`${APP_URL}/sign-in`} className="hover:text-[#2dc653]">Owner Dashboard Login</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Support &amp; Location</div>
            <p className="text-xs text-gray-400">
              Built for students and property managers across Bengaluru, Karnataka, India 🇮🇳
            </p>
            <div className="text-xs">
              <span className="text-gray-500">Support: </span>
              <a href="mailto:studentstoreforstudents@gmail.com" className="text-gray-300 hover:text-[#2dc653]">
                studentstoreforstudents@gmail.com
              </a>
            </div>
            <div className="flex gap-4 text-xs pt-1">
              <a href={`${APP_URL}/terms`} className="hover:text-white">Terms of Service</a>
              <span>•</span>
              <a href={`${APP_URL}/privacy`} className="hover:text-white">Privacy Policy</a>
            </div>
          </div>

        </div>

        {/* SEO Disambiguation Matrix for Crawlers */}
        <div className="py-8 border-b border-white/5 space-y-2 text-[11px] text-gray-400 leading-relaxed">
          <div className="font-bold text-gray-300 text-xs">Search Keywords &amp; Brand Aliases:</div>
          <p>
            <strong>PG-EG</strong> (also indexed as <strong>PGEG</strong>, <strong>pgeg app</strong>, <strong>pg eg</strong>, <strong>pg-eg app</strong>, <strong>eg-pg</strong>, <strong>EGPG</strong>, <strong>egpg app</strong>, <strong>eg-pg app</strong>, and <strong>egeg</strong>) is a free Progressive Web Application designed to solve student and tech professional housing in Bangalore. Whether you search for PG accommodations near RMZ Ecospace, Manyata Tech Park, Christ University, or HSR Layout, PG-EG gives you authentic 3D views, room rent transparency, and direct building manager contact numbers.
          </p>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <div>
            &copy; {new Date().getFullYear()} PG-EG (PGEG). All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>in Bengaluru, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

