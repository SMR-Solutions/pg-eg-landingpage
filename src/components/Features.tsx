import React from 'react';
import { Layers, Video, Navigation, MessageSquare, Utensils, Tag } from 'lucide-react';

export const Features: React.FC = () => {
  const featuresList = [
    {
      icon: Navigation,
      color: "text-blue-400 bg-blue-500/15",
      title: "Live Distance & 1-Tap Directions",
      description: "Calculates exact walking distance from your college or office. Tap once for turn-by-turn navigation straight to the PG entrance.",
    },
    {
      icon: Video,
      color: "text-rose-400 bg-rose-400/15",
      title: "Live Location Video & Real Photos",
      description: "Watch authentic 5-10 second live videos of the building and street, plus real photos of bedrooms, washrooms, and balconies.",
    },
    {
      icon: Tag,
      color: "text-amber-400 bg-amber-400/15",
      title: "Transparent Rent & Sharing Rates",
      description: "Clear monthly rates for 1-sharing, 2-sharing, 3-sharing, and 4-sharing beds so you know exact prices before you visit.",
    },
    {
      icon: MessageSquare,
      color: "text-[#2dc653] bg-[#2dc653]/15",
      title: "Direct PG Manager Contacts",
      description: "Call or WhatsApp the on-site PG manager directly with one tap to confirm vacancy, room sharing, and deposit policies.",
    },
    {
      icon: Utensils,
      color: "text-emerald-400 bg-emerald-400/15",
      title: "Food Menus & Verified Amenities",
      description: "Check 3-times daily meal details (North & South Indian), high-speed WiFi, power backup, washing machines, and security curfews.",
    },
    {
      icon: Layers,
      color: "text-purple-400 bg-purple-400/15",
      title: "Interactive 3D Building Visualizer",
      description: "Inspect floors, room layouts, and vacant bed positions digitally in 3D right from your phone before booking.",
    },
  ];

  return (
    <section id="features" className="py-20 relative bg-[#0e111a]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2dc653]/10 border border-[#2dc653]/30 text-xs font-bold text-[#2dc653] uppercase tracking-wider">
            All PG Details in a Flash
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Find the Nearest &amp; Best PG in Seconds
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            No endless searching or wandering the streets. Compare live distance, watch video tours, check rent rates, and contact managers in a flash.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-[#141722] border border-white/5 hover:border-[#2dc653]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2dc653]/5 rounded-full blur-2xl group-hover:bg-[#2dc653]/15 transition-all" />
                
                <div className={`w-14 h-14 rounded-2xl ${feat.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2dc653] transition-colors">
                  {feat.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
