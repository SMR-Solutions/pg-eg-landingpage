import React from 'react';
import { Smartphone, Compass, ShieldCheck, Zap, PhoneCall, Building2 } from 'lucide-react';

interface Props {
  onOpenInstall: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenInstall }) => {
  const APP_URL = "https://pg-eg-web.vercel.app";

  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2dc653]/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-300 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#2dc653] animate-ping" />
              <span>Bangalore&apos;s #1 Paying Guest Discovery Web App</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Searching PG? <br />
              <span className="text-gradient">It&apos;s Very Easy.</span> <br />
              Zero Brokerage.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong>PG-EG (PGEG)</strong> gives college students and IT professionals instant access to verified PGs in Koramangala, HSR Layout, Bellandur, Whitefield, and Electronic City. Featuring 3D room tours, transparent rents, and direct owner WhatsApp contacts.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={`${APP_URL}/find-pg`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#2dc653] text-black font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-[#2dc653]/30 hover:bg-[#25a845] hover:-translate-y-1 transition-all cursor-pointer"
              >
                <Compass className="w-5 h-5 stroke-[2.5]" />
                <span>Find PG Near Me Now</span>
              </a>

              <button
                onClick={onOpenInstall}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/5 border border-white/15 text-white font-bold text-base flex items-center justify-center gap-3 hover:bg-white/10 hover:border-[#2dc653]/50 transition-all cursor-pointer"
              >
                <Smartphone className="w-5 h-5 text-[#2dc653]" />
                <span>Install PWA App (Free)</span>
              </button>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-gray-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2dc653]" />
                100% Direct Owner Contacts
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                Zero Brokerage Fees
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-blue-400" />
                3D Digital Floor View
              </span>
            </div>
          </div>

          {/* Right Column: Interactive App Showcase Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Ambient Background Box */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              
              {/* Phone Frame Mockup */}
              <div className="relative rounded-[40px] p-3 bg-gradient-to-b from-white/20 to-white/5 shadow-2xl shadow-black/80 border border-white/10 backdrop-blur-xl">
                <div className="rounded-[32px] overflow-hidden bg-[#141721] border border-white/5 relative aspect-[9/18]">
                  
                  {/* Phone Screen Content */}
                  <img
                    src="/mockup-app.png"
                    alt="PG-EG App Live UI"
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Gradient Overlay for Sleek Look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* On-screen floating CTA badge */}
                  <div className="absolute bottom-5 left-4 right-4 p-3.5 rounded-2xl bg-[#1a1f2e]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-gray-400 font-medium">Nearest Verified PG</div>
                      <div className="text-sm font-bold text-white">Sri Balaji Luxury PG</div>
                      <div className="text-[11px] font-semibold text-[#2dc653]">₹8,500/mo · 2-Sharing</div>
                    </div>
                    <a
                      href={`${APP_URL}/find-pg`}
                      className="px-3 py-1.5 rounded-lg bg-[#2dc653] text-black font-extrabold text-xs"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Feature Tag 1 */}
              <div className="absolute -top-4 -left-6 sm:-left-10 bg-[#161a26]/95 border border-white/15 p-3 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-9 h-9 rounded-xl bg-[#2dc653]/15 flex items-center justify-center text-[#2dc653]">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 font-medium">Instant Booking</div>
                  <div className="text-xs font-bold text-white">Direct WhatsApp Call</div>
                </div>
              </div>

              {/* Floating Feature Tag 2 */}
              <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-[#161a26]/95 border border-white/15 p-3 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 font-medium">Unique Innovation</div>
                  <div className="text-xs font-bold text-white">3D Building &amp; Beds</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
