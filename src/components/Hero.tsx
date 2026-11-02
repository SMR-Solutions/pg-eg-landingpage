import React, { useState, useEffect } from 'react';
import { Smartphone, Compass, Video, Navigation, Building2, ChevronLeft, ChevronRight, PhoneCall } from 'lucide-react';

interface Props {
  onOpenInstall: () => void;
}

const APP_SLIDES = [
  { src: "/app-images/5.Pgs-list.png", title: "Live PG Listings with Rent", badge: "Verified Pricing" },
  { src: "/app-images/2.1.FindPG-Darkmode.png", title: "Instant Location Filter", badge: "GPS Nearby" },
  { src: "/app-images/6.Maps.png", title: "Map View Navigation", badge: "Direct Directions" },
  { src: "/app-images/3.Near-workplaces.png", title: "Colleges & IT Parks Hubs", badge: "Student Special" },
  { src: "/app-images/4.searchPG.png", title: "Fast PG Keyword Search", badge: "Instant Results" },
  { src: "/app-images/8.Saved-PGs.png", title: "Saved Favorites Shortlist", badge: "Easy Access" },
  { src: "/app-images/1.Hero.png", title: "Modern 3D Experience", badge: "Interactive Tours" },
  { src: "/app-images/7.After-Signin.png", title: "User & Tenant Profile", badge: "Seamless Auth" },
];

export const Hero: React.FC<Props> = ({ onOpenInstall }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const APP_URL = "https://pg-eg-web.vercel.app";

  // Auto-advance slides every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % APP_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % APP_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + APP_SLIDES.length) % APP_SLIDES.length);

  return (
    <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 overflow-hidden lg:min-h-[calc(100vh-5rem)] flex items-center">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-[#2dc653]/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 lg:space-y-5">
            
            {/* Top Pill - Compact and clean */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-300 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-[#2dc653] animate-ping" />
                <span>Bangalore&apos;s #1 Paying Guest Discovery Web App</span>
              </div>
            </div>

            {/* Main Headline with In & Out Zoom Effect */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-black tracking-tight leading-[1.18] flex flex-col items-center lg:items-start gap-1 sm:gap-2">
              <span className="animate-in-out-1 text-white">
                Searching PG? 🔎
              </span>
              <span className="animate-in-out-2 text-[#2dc653]">
                It&apos;s Very EG (Easy) 😎
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong>PG-EG (PGEG)</strong> helps students and working professionals find the nearest and best PGs in a flash. Check live distance from your college or office, view authentic room photos &amp; live videos, verify food amenities, transparent rent rates, and get 1-tap directions or direct manager contacts.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href={`${APP_URL}/find-pg`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#2dc653] text-black font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-[#2dc653]/30 hover:bg-[#25a845] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Compass className="w-5 h-5 stroke-[2.5]" />
                <span>Find Nearest PG in a Flash</span>
              </a>

              <button
                onClick={onOpenInstall}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 hover:bg-white/10 hover:border-[#2dc653]/50 transition-all cursor-pointer"
              >
                <Smartphone className="w-5 h-5 text-[#2dc653]" />
                <span>Install PWA App</span>
              </button>
            </div>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-semibold text-gray-400">
              <span className="flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-[#2dc653]" />
                Real Distance &amp; Directions
              </span>
              <span className="flex items-center gap-1.5">
                <Video className="w-4 h-4 text-rose-400" />
                Live Video &amp; Room Photos
              </span>
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-blue-400" />
                Direct Manager Contacts
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-amber-400" />
                3D Interactive Building View
              </span>
            </div>
          </div>

          {/* Right Column: Properly Sized Fully Visible Phone Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            
            {/* Phone container strictly constrained to fit on screen */}
            <div className="relative w-[280px] sm:w-[310px] lg:w-[330px]">
              
              {/* Phone Frame */}
              <div className="relative rounded-[36px] p-2 sm:p-2.5 bg-gradient-to-b from-white/20 to-white/5 shadow-2xl shadow-black/90 border border-white/15 backdrop-blur-xl">
                
                {/* Phone Screen Container: fixed height so whole image is visible on one screen */}
                <div className="rounded-[28px] overflow-hidden bg-[#10131c] border border-white/5 relative h-[470px] sm:h-[510px] lg:h-[530px] flex flex-col justify-between">
                  
                  {/* Phone Screen Slides */}
                  <div className="relative flex-1 w-full overflow-hidden bg-[#10131c]">
                    {APP_SLIDES.map((slide, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                          index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <img
                          src={slide.src}
                          alt={slide.title}
                          className="w-full h-full object-contain sm:object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows on edges */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-all z-20 cursor-pointer shadow-md"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-all z-20 cursor-pointer shadow-md"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Compact Bottom Bar (does NOT block the screenshot) */}
                  <div className="relative z-20 p-2.5 bg-[#141724]/95 backdrop-blur-md border-t border-white/10 flex flex-col gap-1.5 shrink-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white truncate max-w-[190px]">
                        {APP_SLIDES[currentSlide].title}
                      </span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#2dc653]/20 text-[#2dc653] border border-[#2dc653]/30 shrink-0">
                        {APP_SLIDES[currentSlide].badge}
                      </span>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-center items-center gap-1">
                      {APP_SLIDES.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => setCurrentSlide(dotIndex)}
                          className={`h-1 rounded-full transition-all cursor-pointer ${
                            dotIndex === currentSlide ? "w-5 bg-[#2dc653]" : "w-1 bg-white/20 hover:bg-white/40"
                          }`}
                          aria-label={`Go to slide ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
