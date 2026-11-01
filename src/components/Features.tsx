import React from 'react';
import { Layers, ShieldCheck, MapPin, MessageSquare, Utensils, Wifi } from 'lucide-react';

export const Features: React.FC = () => {
  const featuresList = [
    {
      icon: Layers,
      color: "text-[#2dc653] bg-[#2dc653]/15",
      title: "Interactive 3D Building Visualizer",
      description: "Experience your PG property digitally before stepping inside. Inspect floors, rooms, and bed layouts in stunning 3D.",
    },
    {
      icon: ShieldCheck,
      color: "text-amber-400 bg-amber-400/15",
      title: "100% Zero Brokerage Guarantee",
      description: "No brokers, no agents, and no surprise commission fees. Contact verified building managers directly with transparent terms.",
    },
    {
      icon: MapPin,
      color: "text-blue-400 bg-blue-500/15",
      title: "Real GPS & Walking Distance Filter",
      description: "Find PGs within walking distance of Bangalore's top IT parks (RMZ Ecospace, Manyata) and colleges (Christ, PES, BMSCE).",
    },
    {
      icon: MessageSquare,
      color: "text-emerald-400 bg-emerald-400/15",
      title: "One-Tap WhatsApp & Direct Call",
      description: "Enquire instantly via WhatsApp or phone call. Confirm bed availability, room sharing, and deposit policies in seconds.",
    },
    {
      icon: Utensils,
      color: "text-rose-400 bg-rose-400/15",
      title: "Authentic Food & Hygiene Details",
      description: "Check complete 3-times meal plans (North Indian & South Indian), clean filtered RO water, and daily housekeeping standards.",
    },
    {
      icon: Wifi,
      color: "text-purple-400 bg-purple-400/15",
      title: "High-Speed WiFi & Power Backup",
      description: "Designed for work-from-home engineers and studying college students with dedicated 100+ Mbps fiber connections.",
    },
  ];

  return (
    <section id="features" className="py-20 relative bg-[#0e111a]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2dc653]/10 border border-[#2dc653]/30 text-xs font-bold text-[#2dc653] uppercase tracking-wider">
            Why Choose PG-EG
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Built for Modern Living in Bangalore
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Say goodbye to endless physical searches and fake broker listings. PG-EG simplifies finding and managing your stay.
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
