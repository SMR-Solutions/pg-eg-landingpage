import React, { useState, useEffect } from 'react';
import { Smartphone, Compass, ShieldCheck, Zap, PhoneCall, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  onOpenInstall: () => void;
}

const APP_SLIDES = [
  { src: "/app-images/5.Pgs-list.png", title: "Live PG Listings", badge: "Verified Pricing" },
  { src: "/app-images/2.1.FindPG-Darkmode.png", title: "Instant Location Filter", badge: "GPS Nearby" },
  { src: "/app-images/6.Maps.png", title: "Map View Navigation", badge: "Direct Directions" },
  { src: "/app-images/3.Near-workplaces.png", title: "Colleges & IT Parks", badge: "Student Hubs" },
  { src: "/app-images/4.searchPG.png", title: "Fast PG Search", badge: "Instant Results" },
  { src: "/app-images/8.Saved-PGs.png", title: "Saved Favorites", badge: "Easy Shortlist" },
  { src: "/app-images/1.Hero.png", title: "Modern 3D Experience", badge: "Interactive Tours" },
  { src: "/app-images/7.After-Signin.png", title: "Personal Profile", badge: "Seamless Access" },
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
    <section className="relative pt-10 pb-24 overflow-hidden">
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

            {/* Main Headline with Alternating Slow Bounce */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] flex flex-col items-center lg:items-start gap-2">
              <span className="animate-bounce-slow-1 text-white">
                Searching PG? 🔎
              </span>
              <span className="animate-bounce-slow-2 text-[#2dc653]">
                It&apos;s Very EG (Easy) 😎
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong>PG-EG (PGEG)</strong> gives college students and IT professionals instant access to verified PGs across Bangalore — including Srinivasapura, Kengeri, JSSATE, RVCE, Koramangala, and Bellandur. Featuring 3D room tours, transparent rents, and direct owner WhatsApp contacts with zero brokerage.
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
                <span>Install PWA App</span>
              </button>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-gray-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2dc653]" />
                Direct Owner Phone &amp; WhatsApp
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                Zero Brokerage Fees
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-blue-400" />
                3D Interactive Building View
              </span>
            </div>
          </div>

          {/* Right Column: Auto-Sliding Real App Showcase Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              
              {/* Phone Frame Mockup */}
              <div className="relative rounded-[40px] p-3 bg-gradient-to-b from-white/20 to-white/5 shadow-2xl shadow-black/90 border border-white/15 backdrop-blur-xl">
                <div className="rounded-[32px] overflow-hidden bg-[#141721] border border-white/5 relative aspect-[9/18]">
                  
                  {/* Phone Screen Slider */}
                  <div className="relative w-full h-full">
                    {APP_SLIDES.map((slide, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <img
                          src={slide.src}
                          alt={slide.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none z-20" />

                  {/* Navigation Arrows for Slider */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-all z-30 cursor-pointer"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-all z-30 cursor-pointer"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Dynamic Slide Info Badge & Indicators */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#141824]/90 backdrop-blur-md border border-white/10 z-30 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-gray-400 font-medium">PG-EG Live Preview</div>
                        <div className="text-xs font-bold text-white">{APP_SLIDES[currentSlide].title}</div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#2dc653]/20 text-[#2dc653] border border-[#2dc653]/30">
                        {APP_SLIDES[currentSlide].badge}
                      </span>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-center items-center gap-1.5 pt-1">
                      {APP_SLIDES.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => setCurrentSlide(dotIndex)}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            dotIndex === currentSlide ? "w-6 bg-[#2dc653]" : "w-1.5 bg-white/20 hover:bg-white/40"
                          }`}
                          aria-label={`Go to slide ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Feature Tag 1 */}
              <div className="absolute -top-4 -left-6 sm:-left-8 bg-[#161a26]/95 border border-white/15 p-3 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3 z-30 animate-bounce [animation-duration:4s]">
                <div className="w-9 h-9 rounded-xl bg-[#2dc653]/15 flex items-center justify-center text-[#2dc653]">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-medium">Instant Connect</div>
                  <div className="text-xs font-bold text-white">Direct WhatsApp Call</div>
                </div>
              </div>

              {/* Floating Feature Tag 2 */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#161a26]/95 border border-white/15 p-3 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3 z-30">
                <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-medium">Interactive</div>
                  <div className="text-xs font-bold text-white">3D Floor &amp; Rooms</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
