import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const BangaloreHotspots: React.FC = () => {
  const APP_URL = "https://pg-eg-web.vercel.app";

  const hotspots = [
    {
      name: "Koramangala",
      slug: "pg-in-koramangala",
      type: "locality",
      badge: "Startup District",
      rent: "₹8,000+",
      desc: "5th & 7th Block, Sony World Junction, 80 Feet Road cafes.",
    },
    {
      name: "HSR Layout",
      slug: "pg-in-hsr-layout",
      type: "locality",
      badge: "Sectors 1 to 7",
      rent: "₹7,500+",
      desc: "Near 27th Main, Silk Board signal, quiet parks & food hubs.",
    },
    {
      name: "Bellandur & ORR",
      slug: "pg-in-bellandur",
      type: "locality",
      badge: "IT Expressway",
      rent: "₹8,500+",
      desc: "Green Glen Layout, walk to RMZ Ecospace & TechVillage.",
    },
    {
      name: "Whitefield",
      slug: "pg-in-whitefield",
      type: "locality",
      badge: "Metro Connected",
      rent: "₹7,000+",
      desc: "ITPB, EPIP Zone, Hope Farm, and Purple Line Metro stations.",
    },
    {
      name: "Electronic City",
      slug: "pg-in-electronic-city",
      type: "locality",
      badge: "Phase 1 & 2",
      rent: "₹6,500+",
      desc: "Walk to Infosys, Wipro, Tech Mahindra, and Yellow Line Metro.",
    },
    {
      name: "Indiranagar",
      slug: "pg-in-indiranagar",
      type: "locality",
      badge: "Premium Living",
      rent: "₹10,000+",
      desc: "100ft Road, 12th Main, CMH Road, near Embassy GolfLinks.",
    },
    {
      name: "RMZ Ecospace & EcoWorld",
      slug: "pg-near-rmz-ecospace",
      type: "tech-park",
      badge: "Workplace Hub",
      rent: "₹8,500+",
      desc: "Walk-to-work PGs for Intel, Shell, and Honeywell techies.",
    },
    {
      name: "Manyata Tech Park",
      slug: "pg-near-manyata-tech-park",
      type: "tech-park",
      badge: "North Bangalore",
      rent: "₹7,000+",
      desc: "Nagavara, Thanisandra Main Road, Gate 1, 2, and Back Gates.",
    },
    {
      name: "Christ University (Central)",
      slug: "pg-near-christ-university",
      type: "college",
      badge: "Student Hub",
      rent: "₹6,500+",
      desc: "Hosur Road, SG Palya, Bhavani Nagar with strict biometric security.",
    },
    {
      name: "BMSCE Basavanagudi",
      slug: "pg-near-bmsce",
      type: "college",
      badge: "Student Hub",
      rent: "₹6,000+",
      desc: "Heritage neighborhood, Bull Temple Road, South Indian homely food.",
    },
    {
      name: "PES University (Ring Road)",
      slug: "pg-near-pes-university",
      type: "college",
      badge: "Student Hub",
      rent: "₹6,500+",
      desc: "Banashankari 3rd Stage, Hosakerehalli, quiet study spaces.",
    },
    {
      name: "BTM Layout (Stage 1 & 2)",
      slug: "pg-in-btm-layout",
      type: "locality",
      badge: "Budget Friendly",
      rent: "₹5,500+",
      desc: "Udupi Garden, Tavarekere, coachings, minutes from Koramangala.",
    },
  ];

  return (
    <section id="localities" className="py-20 bg-[#0e111a]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2dc653]/10 border border-[#2dc653]/30 text-xs font-bold text-[#2dc653] uppercase tracking-wider mb-3">
              Explore Bangalore Localities
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Top Rated PG Hubs Across Bangalore
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Browse pre-verified accommodations near major colleges, tech parks, and residential sectors.
            </p>
          </div>

          <a
            href={`${APP_URL}/bangalore`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2dc653] hover:underline shrink-0"
          >
            <span>View All Bangalore Areas</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hotspots Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {hotspots.map((item, idx) => (
            <a
              key={idx}
              href={`${APP_URL}/bangalore/${item.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#141722] border border-white/5 hover:border-[#2dc653]/40 hover:-translate-y-1 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 font-semibold border border-white/10">
                    {item.badge}
                  </span>
                  <span className="text-xs font-bold text-[#2dc653]">
                    {item.rent}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#2dc653] transition-colors flex items-center justify-between">
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-gray-400 text-xs mt-2 line-clamp-2">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-gray-400 group-hover:text-white transition-colors">
                Browse Rooms in {item.name} &rarr;
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
